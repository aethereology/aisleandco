// Microsoft Graph app-only (client-credentials) mailer.
// Sends mail as a specific mailbox via POST /users/{from}/sendMail.

interface CachedToken {
  token: string;
  expiresAt: number; // epoch ms
}

let cached: CachedToken | null = null;

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  // Reuse a still-valid token (Fluid Compute reuses instances across requests).
  if (cached && cached.expiresAt > now + 60_000) return cached.token;

  const tenant = requireEnv('MS_TENANT_ID');
  const body = new URLSearchParams({
    client_id: requireEnv('MS_CLIENT_ID'),
    client_secret: requireEnv('MS_CLIENT_SECRET'),
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!res.ok) {
    throw new Error(`Graph token request failed (${res.status}): ${await res.text()}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  cached = { token: json.access_token, expiresAt: now + json.expires_in * 1000 };
  return cached.token;
}

export interface SendMailInput {
  from: string; // mailbox to send as (must be allowed by the app access policy)
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({ from, to, subject, html, replyTo }: SendMailInput): Promise<void> {
  const token = await getAccessToken();

  const message: Record<string, unknown> = {
    subject,
    body: { contentType: 'HTML', content: html },
    toRecipients: [{ emailAddress: { address: to } }],
  };
  if (replyTo) {
    message.replyTo = [{ emailAddress: { address: replyTo } }];
  }

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ message, saveToSentItems: true }),
    },
  );

  // sendMail returns 202 Accepted with an empty body on success.
  if (!res.ok) {
    throw new Error(`Graph sendMail failed (${res.status}): ${await res.text()}`);
  }
}

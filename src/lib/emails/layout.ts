// Email-safe HTML building blocks, styled to match the Aisle & Co. brand.
// Uses table layout + inline styles for broad client support. Web fonts are
// not reliable in email, so headings fall back to Georgia (a serif close to
// Cormorant) and body copy to Arial/Helvetica.

const COLORS = {
  cream: '#F4EFE6',
  card: '#ffffff',
  cardBorder: '#ece4d4',
  gold: '#C9A86A',
  blue: '#1F4E79',
  charcoal: '#222222',
  body: '#3f3f3f',
  subtle: '#9a9a93',
} as const;

const SERIF = "Georgia,'Times New Roman',serif";
const SANS = 'Arial,Helvetica,sans-serif';

/** Escape user-provided values before interpolating into email HTML. */
export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function heading(text: string): string {
  return `<h1 style="margin:0 0 20px;font-family:${SERIF};font-weight:400;font-size:28px;line-height:1.2;color:${COLORS.blue};">${text}</h1>`;
}

export function paragraph(html: string): string {
  return `<p style="margin:0 0 16px;font-family:${SANS};font-size:15px;line-height:1.7;color:${COLORS.body};">${html}</p>`;
}

export function signature(): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
    <tr><td style="font-family:${SANS};font-size:15px;line-height:1.7;color:${COLORS.body};">Warmly,</td></tr>
    <tr><td style="padding-top:6px;font-family:${SERIF};font-size:20px;color:${COLORS.charcoal};">Maureen Ella</td></tr>
    <tr><td style="font-family:${SANS};font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:${COLORS.subtle};padding-top:2px;">Founder · Aisle &amp; Co.</td></tr>
  </table>`;
}

/** Labeled detail rows. Empty values are skipped. */
export function detailsTable(rows: Array<[label: string, value: string]>): string {
  const cells = rows
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.cardBorder};font-family:${SANS};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${COLORS.subtle};width:38%;vertical-align:top;">${esc(label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.cardBorder};font-family:${SANS};font-size:15px;line-height:1.6;color:${COLORS.charcoal};">${value}</td>
      </tr>`,
    )
    .join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 4px;border-top:1px solid ${COLORS.cardBorder};">${cells}</table>`;
}

/** A soft cream callout block, e.g. to recap a submission back to the enquirer. */
export function calloutBox(innerHtml: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:8px 0 20px;background:${COLORS.cream};border-radius:10px;">
    <tr><td style="padding:20px 22px;">${innerHtml}</td></tr>
  </table>`;
}

/** Wrap content in the full branded email shell. */
export function emailShell({
  title,
  preheader = '',
  contentHtml,
}: {
  title: string;
  preheader?: string;
  contentHtml: string;
}): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.cream};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${COLORS.cream};">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};">
  <tr><td align="center" style="padding:40px 16px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">
      <tr><td align="center" style="padding:0 0 8px;">
        <div style="font-family:${SERIF};font-size:26px;letter-spacing:.02em;color:${COLORS.charcoal};">Aisle <span style="color:${COLORS.gold};">&amp;</span> Co.</div>
      </td></tr>
      <tr><td align="center" style="padding:0 0 28px;">
        <div style="width:40px;height:2px;background:${COLORS.gold};line-height:2px;font-size:0;">&nbsp;</div>
      </td></tr>
      <tr><td style="background:${COLORS.card};border:1px solid ${COLORS.cardBorder};border-radius:14px;padding:40px;">
        ${contentHtml}
      </td></tr>
      <tr><td align="center" style="padding:28px 16px 0;">
        <div style="font-family:${SANS};font-size:12px;line-height:1.7;color:${COLORS.subtle};">
          Aisle &amp; Co. — Wedding-day childcare &amp; pet care<br>
          Northeast Florida · <a href="mailto:hello@aisleand.co" style="color:${COLORS.blue};text-decoration:none;">hello@aisleand.co</a>
        </div>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

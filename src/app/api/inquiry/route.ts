import { inquirySchema } from '@/lib/inquiry/schema';
import { sendMail } from '@/lib/graph/mailer';
import { enquirerConfirmation, maureenNotification } from '@/lib/emails/templates';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(payload);
  if (!parsed.success) {
    console.error('Inquiry validation failed:', parsed.error.flatten().fieldErrors);
    return Response.json(
      { error: 'Please check the form and try again.', issues: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const inquiry = parsed.data;

  const from = process.env.INQUIRY_FROM;
  const notify = process.env.INQUIRY_NOTIFY;
  if (!from || !notify) {
    console.error('Inquiry env not configured (INQUIRY_FROM / INQUIRY_NOTIFY).');
    return Response.json({ error: 'send_failed' }, { status: 500 });
  }

  const notification = maureenNotification(inquiry);

  // The notification to Maureen is the lead — it must succeed.
  try {
    await sendMail({
      from,
      to: notify,
      subject: notification.subject,
      html: notification.html,
      replyTo: inquiry.email,
    });
  } catch (err) {
    console.error('Inquiry notification send failed:', err);
    return Response.json({ error: 'send_failed' }, { status: 500 });
  }

  // The confirmation to the enquirer is best-effort — don't fail the request on it.
  const confirmation = enquirerConfirmation(inquiry);
  try {
    await sendMail({
      from,
      to: inquiry.email,
      subject: confirmation.subject,
      html: confirmation.html,
    });
  } catch (err) {
    console.error('Inquiry confirmation send failed:', err);
  }

  return Response.json({ ok: true });
}

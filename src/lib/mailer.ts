import { Resend } from "resend";

type Mail = { to: string; subject: string; text: string; replyTo?: string };

/**
 * Sends via Resend when RESEND_API_KEY is set; otherwise logs the message
 * (handy in local development).
 */
export async function sendMail({ to, subject, text, replyTo }: Mail) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(
      "[mailer] RESEND_API_KEY not set — logging instead of sending:\n",
      { to, subject, text },
    );
    return;
  }
  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: process.env.MAIL_FROM ?? "IEEE RAS INSAT <onboarding@resend.dev>",
    to,
    subject,
    text,
    replyTo,
  });
  if (error) throw new Error(error.message);
}

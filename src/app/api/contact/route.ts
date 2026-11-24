import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendMail } from "@/lib/mailer";

// Subject (as shown in the form's select) -> recipient env var
const ROUTING: Record<string, string> = {
  "General Chapter Inquiry": "CONTACT_TO_GENERAL",
  "Industry Partnership / NRW Sponsorship": "CONTACT_TO_PARTNERSHIPS",
  "Technical Collaboration / Speakers": "CONTACT_TO_TECHNICAL",
  "Press & Media": "CONTACT_TO_PRESS",
};

export async function POST(req: Request) {
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const d = parsed.data;

  const to =
    process.env[ROUTING[d["c-subject"]] ?? "CONTACT_TO_GENERAL"] ??
    "ras-insat@ieee.org";
  try {
    await sendMail({
      to,
      replyTo: d["c-email"],
      subject: `[Website] ${d["c-subject"]} — ${d["c-name"]}`,
      text: `From: ${d["c-name"]} <${d["c-email"]}>\nSubject: ${d["c-subject"]}\n\n${d["c-msg"]}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}

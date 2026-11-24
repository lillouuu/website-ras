import { NextResponse } from "next/server";
import { partnerSchema } from "@/lib/validation";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const parsed = partnerSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const d = parsed.data;

  try {
    await sendMail({
      to: process.env.CONTACT_TO_PARTNERSHIPS ?? "ras-insat@ieee.org",
      replyTo: d["p-email"],
      subject: `[Website] Partnership request — ${d["p-company"]}`,
      text: [
        `Name: ${d["p-name"]}`,
        `Company: ${d["p-company"]}`,
        `Role: ${d["p-role"]}`,
        `Email: ${d["p-email"]}`,
        `Interest: ${d["p-interest"]}`,
        "",
        d["p-msg"],
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}

import { NextResponse } from "next/server";
import { joinSchema } from "@/lib/validation";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const parsed = joinSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const d = parsed.data;

  try {
    await sendMail({
      to: process.env.JOIN_TO ?? "ras-insat@ieee.org",
      replyTo: d["j-email"],
      subject: `[Website] Membership application — ${d["j-name"]}`,
      text: [
        `Name: ${d["j-name"]}`,
        `Email: ${d["j-email"]}`,
        `Major & year: ${d["j-major"]}`,
        `Track: ${d["j-track"]}`,
        "",
        d["j-motivation"],
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}

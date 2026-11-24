import { z } from "zod";

const text = z.string().trim().max(5000);

export const contactSchema = z.object({
  "c-name": text.min(1),
  "c-email": z.string().trim().email(),
  "c-subject": text.min(1),
  "c-msg": text.min(1),
});

export const joinSchema = z.object({
  "j-name": text.min(1),
  "j-email": z.string().trim().email(),
  "j-major": text.min(1),
  "j-track": text.min(1),
  "j-motivation": text.optional().default(""),
});

export const partnerSchema = z.object({
  "p-name": text.min(1),
  "p-company": text.min(1),
  "p-role": text.optional().default(""),
  "p-email": z.string().trim().email(),
  "p-interest": text.min(1),
  "p-msg": text.optional().default(""),
});

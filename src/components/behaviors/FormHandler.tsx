"use client";

import { useEffect } from "react";
import { animate } from "motion/react";

type Props = { formId: string; statusId: string; endpoint: string };

/**
 * Intercepts a design form, POSTs its fields as JSON to an API route and reveals the
 * status element (success text from the design, or an error message).
 */
export default function FormHandler({ formId, statusId, endpoint }: Props) {
  useEffect(() => {
    const form = document.getElementById(formId) as HTMLFormElement | null;
    const status = document.getElementById(statusId);
    if (!form || !status) return;
    const successText = status.textContent ?? "Sent.";
    status.setAttribute("data-form-status", "");

    const clearInvalid = () => {
      form.querySelectorAll(".is-invalid").forEach((field) => {
        field.classList.remove("is-invalid");
      });
    };

    const onInvalid = (event: Event) => {
      const field = event.target;
      if (!(field instanceof HTMLElement)) return;
      field.classList.add("is-invalid");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const controls = animate(field, { x: [0, -5, 5, -2, 0] }, { duration: 0.36 });
      controls.finished.then(() => {
        field.style.transform = "";
      }).catch(() => undefined);
    };

    const onInput = (event: Event) => {
      const field = event.target;
      if (field instanceof HTMLElement) field.classList.remove("is-invalid");
    };

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      clearInvalid();
      if (!form.checkValidity()) {
        form.reportValidity();
        form.querySelectorAll<HTMLElement>(":invalid").forEach((field) => {
          field.classList.add("is-invalid");
        });
        return;
      }
      const submit = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      const payload: Record<string, string> = {};
      Array.from(form.elements).forEach((el) => {
        const f = el as HTMLInputElement;
        if (f.id && "value" in f && f.type !== "submit" && f.type !== "button")
          payload[f.id] = f.value;
      });

      if (submit) submit.disabled = true;
      status.classList.remove("hidden", "is-success", "is-error");
      status.textContent = "Sending...";
      animate(status, { opacity: [0.45, 1] }, { duration: 0.25 });
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        status.textContent = successText;
        status.classList.remove("hidden", "is-error");
        status.classList.add("is-success");
        animate(
          status,
          { opacity: [0, 1], y: [8, 0] },
          { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        );
        form.reset();
      } catch {
        status.textContent =
          "Something went wrong. Please try again or email us directly.";
        status.classList.remove("hidden", "is-success");
        status.classList.add("is-error");
        animate(
          status,
          { opacity: [0, 1], x: [-4, 0] },
          { duration: 0.35, ease: "easeOut" },
        );
      } finally {
        if (submit) submit.disabled = false;
      }
    };

    form.addEventListener("submit", onSubmit);
    form.addEventListener("invalid", onInvalid, true);
    form.addEventListener("input", onInput);
    return () => {
      form.removeEventListener("submit", onSubmit);
      form.removeEventListener("invalid", onInvalid, true);
      form.removeEventListener("input", onInput);
    };
  }, [formId, statusId, endpoint]);

  return null;
}

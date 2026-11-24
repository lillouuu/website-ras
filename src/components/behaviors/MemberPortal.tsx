"use client";

import { useEffect } from "react";

/** Members page: smooth-scroll to the workspace preview and show the concept-only login note. */
export default function MemberPortal() {
  useEffect(() => {
    const btn = document.getElementById("toggle-portal-preview");
    const section = document.getElementById("portal-preview");
    const form = document.getElementById("member-login-form");

    const onPreview = () => section?.scrollIntoView({ behavior: "smooth" });
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const note = document.getElementById("login-note");
      if (note)
        note.textContent =
          "Concept preview: Member authentication activates in Phase 2.";
    };

    btn?.addEventListener("click", onPreview);
    form?.addEventListener("submit", onSubmit);
    return () => {
      btn?.removeEventListener("click", onPreview);
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}

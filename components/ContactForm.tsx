"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim()
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setMessage("All fields are required.");
      return;
    }

    setStatus("sending");
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.error || "Unable to send message.");
      setStatus("sent");
      setMessage("Your message has been received. We&rsquo;ll respond shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <Field label="Name" name="name" type="text" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />

      <div>
        <label className="label block text-ash">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-4 w-full resize-none border-b border-line bg-transparent py-3 text-lg text-bone placeholder:text-ash/60 focus:border-copper focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between border-t border-line pt-6">
        <span
          className="label min-h-[1em] text-ash"
          dangerouslySetInnerHTML={{
            __html:
              status === "sent" || status === "error"
                ? message ?? ""
                : status === "sending"
                ? "Sending"
                : "&nbsp;"
          }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-4 border-b border-bone/40 pb-3 transition-colors hover:border-copper disabled:opacity-50"
        >
          <span className="label text-bone group-hover:text-copper">
            {status === "sending" ? "Sending" : "Send"}
          </span>
          <span aria-hidden className="label text-bone/60 transition-transform group-hover:translate-x-1 group-hover:text-copper">
            &rarr;
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label block text-ash">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-4 w-full border-b border-line bg-transparent py-3 text-lg text-bone placeholder:text-ash/60 focus:border-copper focus:outline-none"
      />
    </div>
  );
}

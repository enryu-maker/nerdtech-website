"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbjvrwqp";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  sendNda: boolean;
  newsletter: boolean;
};

const EMPTY_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  sendNda: false,
  newsletter: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message: values.message,
          "Wants NDA": values.sendNda ? "Yes" : "No",
          "Newsletter opt-in": values.newsletter ? "Yes" : "No",
          _subject: `New project inquiry from ${values.name || "website"}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setValues(EMPTY_STATE);
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
          "Something went wrong. Please try again.";
        setErrorMessage(message);
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full overflow-hidden rounded-[28px] border border-ink/10 bg-white p-7 shadow-[0_25px_70px_rgba(4,60,95,0.12)] sm:p-9 md:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.015] via-transparent to-transparent" />

      <div className="relative grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-body text-sm font-semibold text-ink">
            Name
          </span>
          <input
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-body text-sm font-semibold text-ink">
            Company{" "}
            <span className="font-normal text-ink-faint">(optional)</span>
          </span>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-body text-sm font-semibold text-ink">
            Email
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-body text-sm font-semibold text-ink">
            Phone number{" "}
            <span className="font-normal text-ink-faint">(optional)</span>
          </span>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
          />
        </label>
      </div>

      <label className="relative mt-6 block">
        <span className="mb-2 block font-body text-sm font-semibold text-ink">
          How can we help you?
        </span>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full resize-none rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
        />
      </label>

      <div className="relative mt-6 flex flex-col gap-3">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={values.sendNda}
            onChange={(e) => update("sendNda", e.target.checked)}
            className="h-5 w-5 shrink-0 rounded-md border border-ink/20 accent-accent"
          />
          <span className="font-body text-sm text-ink-muted">
            Send me an NDA
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={values.newsletter}
            onChange={(e) => update("newsletter", e.target.checked)}
            className="h-5 w-5 shrink-0 rounded-md border border-ink/20 accent-accent"
          />
          <span className="font-body text-sm text-ink-muted">
            I want to receive occasional updates from NerdTech
          </span>
        </label>
      </div>

      <div className="relative mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[0_10px_30px_rgba(12,175,255,0.25)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 ease-out group-hover:translate-x-0" />
          <span className="relative">
            {status === "submitting" ? "Sending..." : "Request free estimate"}
          </span>
        </button>

        <p className="mt-4 max-w-sm font-body text-xs leading-relaxed text-ink-faint">
          By clicking the button, I agree with the collection and processing
          of my personal data as described in the Privacy Policy.
        </p>

        {status === "success" && (
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent">
            Thanks for reaching out — we&apos;ll be in touch shortly!
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
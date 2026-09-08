"use client";

import { useState } from "react";
import { submitApplication } from "@/lib/api";

type FormState = {
  name: string;
  email: string;
  contactUrl: string;
  source: string;
  about: string;
  agreed: boolean;
};

const EMPTY_STATE: FormState = {
  name: "",
  email: "",
  contactUrl: "",
  source: "",
  about: "",
  agreed: false,
};

const STEPS = [
  {
    title: "1. Your application",
    description:
      "Submit the form and tell us about your experience and background.",
  },
  {
    title: "2. Intro call",
    description:
      "A relaxed conversation about NerdTech, the role, and what you're looking for.",
  },
  {
    title: "3. Technical interview",
    description:
      "An in-depth look at your skills and how you approach real problems.",
  },
  {
    title: "4. Getting started",
    description:
      "We agree the terms and set up the collaboration so you can start quickly.",
  },
];

const SOURCE_OPTIONS = [
  "LinkedIn",
  "Instagram",
  "Referral",
  "Job board",
  "NerdTech website",
  "Other",
];

export default function JobApplicationForm({
  roleTitle,
  jobId,
}: {
  roleTitle: string;
  jobId?: number;
}) {
  const [values, setValues] = useState<FormState>(EMPTY_STATE);
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.agreed) return;
    if (!resume) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const coverLetter = [
      values.about && `About:\n${values.about}`,
      values.contactUrl && `Contact URL: ${values.contactUrl}`,
      values.source && `How we heard about us: ${values.source}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const form = new FormData();
    form.append("full_name", values.name);
    form.append("email", values.email);
    form.append("cover_letter", coverLetter);
    form.append("resume", resume);
    if (jobId != null) form.append("career", String(jobId));

    const ok = await submitApplication(form);
    setStatus(ok ? "sent" : "error");
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
      {/* How does it work */}
      <div className="lg:col-span-4">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          How does it work?
        </h2>

        <ol className="relative mt-8 flex flex-col gap-8 border-l border-ink/10 pl-6">
          {STEPS.map((step) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-dim" />
              <h3 className="font-display text-base font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Application form */}
      <div className="lg:col-span-8">
        <form
          onSubmit={handleSubmit}
          className="relative w-full overflow-hidden rounded-[28px] border border-ink/10 bg-white p-7 shadow-[0_25px_70px_rgba(4,60,95,0.12)] sm:p-9 md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.015] via-transparent to-transparent" />

          <div className="relative grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-body text-sm font-semibold text-ink">
                Your name
              </span>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
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
                placeholder="Your email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-body text-sm font-semibold text-ink">
                Contact URL (LinkedIn/Telegram/WhatsApp){" "}
                <span className="font-normal text-ink-faint">(optional)</span>
              </span>
              <input
                type="text"
                placeholder="https://linkedin.com/in/..."
                value={values.contactUrl}
                onChange={(e) => update("contactUrl", e.target.value)}
                className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-body text-sm font-semibold text-ink">
                How did you hear about us?{" "}
                <span className="font-normal text-ink-faint">(optional)</span>
              </span>
              <select
                value={values.source}
                onChange={(e) => update("source", e.target.value)}
                className="w-full appearance-none rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 focus:border-accent focus:ring-2 focus:ring-accent/15"
              >
                <option value="">Select...</option>
                {SOURCE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="relative mt-6 block">
            <span className="mb-2 block font-body text-sm font-semibold text-ink">
              A few words about yourself{" "}
              <span className="font-normal text-ink-faint">(optional)</span>
            </span>
            <textarea
              rows={5}
              placeholder="What makes you a great fit?"
              value={values.about}
              onChange={(e) => update("about", e.target.value)}
              className="w-full resize-none rounded-xl border border-ink/12 bg-white px-4 py-3 font-body text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/15"
            />
          </label>

          <div className="relative mt-6">
            <label className="block">
              <span className="mb-2 block font-body text-sm font-semibold text-ink">
                Upload your CV <span className="font-normal text-ink-faint">(required)</span>
              </span>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-ink/12 bg-white px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent/40">
                <span className="material-symbols-outlined text-[18px] text-ink-faint">
                  attach_file
                </span>
                {resume ? resume.name : "Add file"}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                />
              </label>
            </label>
          </div>

          <label className="relative mt-6 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              required
              checked={values.agreed}
              onChange={(e) => update("agreed", e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 rounded-md border border-ink/20 accent-accent"
            />
            <span className="font-body text-sm text-ink-muted">
              I understand that the information I&apos;m providing is subject
              to NerdTech&apos;s{" "}
              <a
                href="mailto:contact@nerdtech.in"
                className="font-semibold text-ink underline decoration-ink/30 underline-offset-2 hover:text-accent"
              >
                Privacy Policy
              </a>
            </span>
          </label>

          <div className="relative mt-8">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative">
                {status === "sending" ? "Submitting…" : "Submit application"}
              </span>
            </button>

            {status === "sent" && (
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent">
                Application received — thanks for applying!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-red-500">
                {resume
                  ? "Something went wrong — please try again."
                  : "Please attach your CV to submit your application."}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
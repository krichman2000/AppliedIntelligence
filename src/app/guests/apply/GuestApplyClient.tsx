"use client";

import { useState } from "react";

const hearAboutOptions = [
  "YouTube",
  "LinkedIn",
  "Referral",
  "Google Search",
  "Podcast App",
  "Other",
];

export default function GuestApplyClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgovyel", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h2 className="font-serif text-[28px] text-charcoal mb-3">
          Thanks for applying!
        </h2>
        <p className="text-base text-muted">
          We review every application personally and will be in touch.
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-[560px]">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2">
        Be a Guest
      </h1>
      <p className="text-[15px] text-muted mb-3 leading-relaxed">
        Applied Intelligence features conversations with senior leaders who are
        implementing AI in their organizations — not theorizing about it, but
        actually doing it.
      </p>
      <p className="text-[15px] text-muted mb-9 leading-relaxed">
        Episodes are 30-45 minute remote conversations. We handle production.
        You just show up and tell your story.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Full name *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            placeholder="jane@company.com"
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Company *
          </label>
          <input
            type="text"
            name="company"
            placeholder="Acme Corp"
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Title / Role *
          </label>
          <input
            type="text"
            name="title"
            placeholder="Chief AI Officer"
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            LinkedIn profile URL *
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            What AI topic would you like to discuss? *
          </label>
          <textarea
            name="topic"
            rows={3}
            placeholder="Tell us about your AI implementation..."
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Why would you be a great guest? *
          </label>
          <textarea
            name="why_great_guest"
            rows={3}
            placeholder="What's your story?"
            required
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            How did you hear about us?
          </label>
          <select
            name="referral_source"
            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
          >
            <option value="">Select...</option>
            {hearAboutOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 px-8 py-3.5 bg-gold text-white rounded-lg text-base font-semibold cursor-pointer hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

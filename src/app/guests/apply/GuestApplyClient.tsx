"use client";

import { useState } from "react";

const formFields = [
  { label: "Full name", type: "text", placeholder: "Jane Smith", required: true },
  { label: "Email", type: "email", placeholder: "jane@company.com", required: true },
  { label: "Company", type: "text", placeholder: "Acme Corp", required: true },
  { label: "Title / Role", type: "text", placeholder: "Chief AI Officer", required: true },
  { label: "LinkedIn profile URL", type: "url", placeholder: "https://linkedin.com/in/...", required: true },
];

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="flex flex-col gap-5"
      >
        {formFields.map((field) => (
          <div key={field.label}>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              {field.label} {field.required && "*"}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            What AI topic would you like to discuss? *
          </label>
          <textarea
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
          <select className="w-full px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold">
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
          className="mt-2 px-8 py-3.5 bg-gold text-white rounded-lg text-base font-semibold cursor-pointer hover:bg-gold-dark transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

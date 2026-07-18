"use client";

import { useState } from "react";

type Props = {
  heading?: string;
  subheading?: string;
  /** "boxed" wraps the form in a bordered card (for embedding mid-page); "plain" is bare. */
  variant?: "boxed" | "plain";
};

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterSignup({
  heading = "Get Applied Intelligence in your inbox",
  subheading = "New episodes and short, practical notes on what actually works when implementing AI — no hype.",
  variant = "boxed",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const containerClass =
    variant === "boxed"
      ? "rounded-xl border border-border bg-white p-7 sm:p-9"
      : "";

  if (status === "success") {
    return (
      <div className={containerClass}>
        <div className="text-center py-2">
          <div className="text-3xl mb-3 text-gold">&#10003;</div>
          <h2 className="font-serif text-[22px] text-charcoal mb-2">
            You&rsquo;re on the list
          </h2>
          <p className="text-[15px] text-muted">
            Check your inbox to confirm your subscription.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <h2 className="font-serif text-[24px] font-bold text-charcoal mb-2 leading-tight">
        {heading}
      </h2>
      <p className="text-[15px] text-muted mb-6 leading-relaxed">{subheading}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "submitting"}
          className="flex-1 px-3.5 py-2.5 border border-border rounded-lg text-[15px] text-charcoal bg-white outline-none transition-colors focus:border-gold disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-5 py-2.5 bg-gold text-white text-[15px] font-medium rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-[13px] text-accent mt-3">{message}</p>
      )}
    </div>
  );
}

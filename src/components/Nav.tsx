"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/platforms", label: "Platforms" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-5 border-b border-border">
      <div className="flex items-center gap-7">
        <Link
          href="/"
          className="font-serif font-bold text-base text-charcoal tracking-tight"
        >
          AI<span className="text-accent">.</span>
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[15px] transition-colors ${
              pathname === link.href
                ? "text-charcoal font-medium"
                : "text-muted hover:text-charcoal"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

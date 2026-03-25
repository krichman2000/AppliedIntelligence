import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Podcast" },
  { href: "/episodes", label: "Episodes" },
  { href: "/guests", label: "Guests" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="flex items-center justify-between py-6 mt-13 border-t border-border flex-wrap gap-3">
      <span className="text-[13px] text-muted-light">
        &copy; 2026 Applied Intelligence.
      </span>
      <div className="flex gap-5">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-muted-light hover:text-charcoal transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

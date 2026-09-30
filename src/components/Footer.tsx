import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          © {year} {site.name}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(site.links).map(([key, href]) => (
            <Link
              key={key}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm capitalize text-muted transition hover:text-accent"
            >
              {key === "cv" ? "CV" : key}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

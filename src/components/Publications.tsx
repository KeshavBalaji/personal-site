"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function CopyBibtex({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs transition hover:border-accent/40 hover:text-accent"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          BibTeX
        </>
      )}
    </button>
  );
}

function AuthorName({ token }: { token: string }) {
  const coFirst = token.endsWith("*");
  const displayName = coFirst ? token.slice(0, -1) : token;
  const isMe = displayName === site.name;

  return (
    <span className={isMe ? "font-semibold text-foreground" : undefined}>
      {displayName}
      {coFirst ? "*" : ""}
    </span>
  );
}

function AuthorList({ authors }: { authors: string }) {
  const tokens = authors.split(/,\s*/);
  const hasCoFirst = tokens.some((t) => t.endsWith("*"));

  return (
    <>
      {tokens.map((token, i) => (
        <span key={`${token}-${i}`}>
          {i > 0 ? ", " : null}
          <AuthorName token={token} />
        </span>
      ))}
      {hasCoFirst && (
        <span className="mt-1.5 block text-xs text-muted/80">
          * Equal contribution
        </span>
      )}
    </>
  );
}

export function Publications() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            id="publications"
            title="Publications"
          />
        </AnimatedSection>

        <div className="space-y-6">
          {site.publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 0.08}>
              <article className="glass rounded-2xl p-6 transition hover:border-accent/30">
                <h3 className="text-lg font-semibold leading-snug">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  <AuthorList authors={pub.authors} />
                </p>
                <p className="mt-1 font-mono text-sm text-accent">
                  {pub.venue} · {pub.year}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.arxiv && isExternalLink(pub.arxiv) && (
                    <a
                      href={pub.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm transition hover:border-accent/40 hover:text-accent"
                    >
                      arXiv
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {pub.openreview && isExternalLink(pub.openreview) && (
                    <a
                      href={pub.openreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm transition hover:border-accent/40 hover:text-accent"
                    >
                      OpenReview
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {pub.github && isExternalLink(pub.github) && (
                    <a
                      href={pub.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm transition hover:border-accent/40 hover:text-accent"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {pub.bibtex && <CopyBibtex bibtex={pub.bibtex} />}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            id="contact"
            title="Contact"
            subtitle="Open to research collaborations and PhD conversations."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <p className="max-w-xl text-lg text-muted">
                The best way to reach me is by email. I&apos;m happy to chat
                about research, grad school, or potential collaborations.
              </p>

              <Link
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition hover:opacity-90"
              >
                <Mail className="h-5 w-5" />
                {site.email}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

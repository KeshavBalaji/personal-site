"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { publicPath } from "@/lib/public-path";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            id="education"
            title="Education"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {site.education.map((edu) => (
              <div key={edu.degree} className="glass rounded-2xl p-6">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="mt-1 text-muted">
                  {edu.institution}
                  {edu.location && ` · ${edu.location}`}
                </p>
                <p className="mt-2 font-mono text-sm text-accent">
                  {edu.start} — {edu.end}
                </p>
                {edu.details && edu.details.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.details.map((detail) => (
                      <li key={detail} className="text-sm text-muted">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.16}>
          <div className="mt-16">
            <SectionHeader
              id="experience"
              title="Experience"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-10">
          {site.experienceGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-6 text-base font-semibold uppercase tracking-[0.16em] text-foreground">
                {group.label}
              </p>
              <div className="relative space-y-8">
                <div className="pointer-events-none absolute bottom-2 left-[17px] top-2 w-px bg-border" />
                {group.items.map((item) => (
                  <div
                    key={`${item.role}-${item.organization}-${item.start}`}
                    className="relative pl-14"
                  >
                    {item.logo ? (
                      <div className="absolute left-0 top-0.5 flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-black/10">
                        <Image
                          src={publicPath(item.logo)}
                          alt=""
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="absolute left-[10px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
                    )}

                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-muted">
                      {item.organization}
                      {item.location && ` · ${item.location}`}
                    </p>
                    {item.note && (
                      <p className="mt-1 text-sm text-muted">{item.note}</p>
                    )}
                    <p className="mt-1 font-mono text-sm text-accent">
                      {item.start} — {item.end}
                    </p>

                    {item.description.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.description.map((line) => (
                          <li
                            key={line}
                            className="flex gap-2 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-foreground/5 px-2.5 py-0.5 font-mono text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

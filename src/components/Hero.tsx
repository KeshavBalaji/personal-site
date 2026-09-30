"use client";

import { Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { site } from "@/content/site";
import { publicPath } from "@/lib/public-path";

const linkIcons: Record<string, ReactNode> = {
  cv: <Download className="h-4 w-4" />,
  scholar: <GraduationCap className="h-4 w-4" />,
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {site.name}
        </motion.h1>

        <div className="mt-8 grid gap-10 md:grid-cols-5 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            {site.photo && (
              <Image
                src={publicPath(site.photo)}
                alt={site.name}
                width={853}
                height={1416}
                className="mb-5 w-full max-w-[220px] rounded-2xl shadow-lg shadow-black/20"
                priority
              />
            )}

            <p className="max-w-xs leading-relaxed text-muted">{site.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3"
          >
            <div className="space-y-4 leading-relaxed text-muted">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-10"
        >
          <Link
            href={`mailto:${site.email}`}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition hover:border-accent/40"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>

          {Object.entries(site.links).map(([key, href]) => (
            <Link
              key={key}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm capitalize transition hover:border-accent/40"
            >
              {linkIcons[key]}
              {key === "cv" ? "CV" : key}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

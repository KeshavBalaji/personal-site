"use client";

import { useEffect, useRef } from "react";

export function Atmosphere() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    let frame = 0;

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.setProperty("--spot-x", `${event.clientX}px`);
        glow.style.setProperty("--spot-y", `${event.clientY}px`);
        glow.style.opacity = "1";
      });
    };

    const hide = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="spot-glow absolute inset-0 opacity-0 transition-opacity duration-500"
      />
    </div>
  );
}

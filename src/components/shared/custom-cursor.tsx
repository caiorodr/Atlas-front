"use client";

import { useEffect, useRef } from "react";

/*
 * Cursor customizado: ponto que segue o mouse 1:1 e anel com leve atraso
 * (lerp em requestAnimationFrame — só transform, roda composto a 60fps).
 * Ativo apenas em ponteiros precisos e sem prefers-reduced-motion.
 */
const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!fine || reduced || !dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = -100;
    let y = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let visible = false;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        ringX = x;
        ringY = y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      const target = event.target as Element | null;
      hovering = Boolean(target?.closest(INTERACTIVE));
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hovering ? 1.7 : 1})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden="true" className="hidden lg:block">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[110] h-1.5 w-1.5 bg-white opacity-0 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[110] h-9 w-9 rounded-full border border-white opacity-0 mix-blend-difference transition-[opacity] duration-300"
      />
    </div>
  );
}

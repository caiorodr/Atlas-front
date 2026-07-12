"use client";

import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.16em] transition-[background-color,border-color,color] duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-emerald-800 text-cream hover:bg-emerald-950",
        dark: "bg-emerald-950 text-cream hover:bg-emerald-800",
        mint: "bg-mint-300 text-emerald-950 hover:bg-mint-400",
        outline:
          "border border-mint-300/30 text-mint-100 hover:border-mint-300/70 hover:bg-mint-300/10",
        outlineLight:
          "border border-emerald-800/30 text-emerald-900 hover:border-emerald-800/70 hover:bg-emerald-800/[0.06]",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

let finePointer: boolean | null = null;

/*
 * Botão magnético: desloca-se suavemente na direção do cursor (só transform,
 * transição CSS composta — 60fps) e volta ao centro ao sair. Desativado em
 * telas de toque.
 */
export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  function onMouseMove(event: MouseEvent) {
    if (finePointer === null) {
      finePointer = window.matchMedia("(pointer: fine)").matches;
    }
    const el = ref.current;
    if (!el || !finePointer) return;
    const rect = el.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * 0.16}px, ${dy * 0.3}px)`;
    el.style.transition = "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)";
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
  }

  const classes = cn(buttonVariants({ variant, size }), className);
  const magnetic = { onMouseMove, onMouseLeave };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        ref={(node) => {
          ref.current = node;
        }}
        {...magnetic}
        {...props}
      />
    );
  }
  return (
    <button
      className={classes}
      ref={(node) => {
        ref.current = node;
      }}
      {...magnetic}
      {...props}
    />
  );
}

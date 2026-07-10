import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.985]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-500 text-white shadow-[0_8px_24px_-12px_rgba(47,99,247,0.8)] hover:bg-brand-400 hover:shadow-[0_12px_40px_-12px_rgba(47,99,247,0.9)]",
        outline:
          "border border-white/15 bg-white/[0.02] text-white hover:border-white/35 hover:bg-white/[0.06]",
        dark: "bg-ink-950 text-white hover:bg-ink-700",
        outlineLight:
          "border border-ink-950/15 text-ink-950 hover:border-ink-950/35 hover:bg-ink-950/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-[15px]",
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

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return <a href={href} className={classes} {...props} />;
  }
  return <button className={classes} {...props} />;
}

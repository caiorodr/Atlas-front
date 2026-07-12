import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full border border-emerald-800/20 bg-paper px-4 text-[15px] text-emerald-950 placeholder:text-sage/60 transition-all duration-200 focus:border-emerald-800 focus:outline-none focus:ring-4 focus:ring-mint-300/30",
        className
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-700",
        className
      )}
      {...props}
    />
  );
}

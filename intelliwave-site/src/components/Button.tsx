import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants: Record<typeof variant, string> = {
    primary:
      "bg-gradient-to-r from-primary-500 via-primary-400 to-accent text-slate-950 shadow-glow hover:shadow-xl hover:scale-[1.02]",
    ghost:
      "border border-white/20 bg-white/5 text-slate-100 hover:bg-white/10 hover:scale-[1.02]"
  };

  return <Link className={clsx(baseStyles, variants[variant], className)} {...props} />;
}

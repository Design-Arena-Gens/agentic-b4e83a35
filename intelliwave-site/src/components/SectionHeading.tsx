import { clsx } from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  cta?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  cta
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={clsx("flex flex-col gap-4", alignment)}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={clsx("max-w-2xl text-base text-slate-300", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
      {cta}
    </div>
  );
}

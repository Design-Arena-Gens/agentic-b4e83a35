import { caseStudies } from "../lib/data";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary-500/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <SectionHeading
          eyebrow="Réalisations"
          title="Automatisations IA qui délivrent des résultats concrets"
          description="Chaque projet est pensé en co-création avec vos équipes pour générer des gains mesurables dès les premières semaines."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <article
              key={project.client}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-transparent p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {project.client}
                </h3>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  {project.result}
                </span>
              </div>
              <p className="text-sm text-slate-300">{project.description}</p>
              <div className="mt-auto">
                <button
                  type="button"
                  className="text-sm font-medium text-primary-200 transition-colors hover:text-white"
                >
                  Explorer le projet →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services } from "../lib/data";
import { SectionHeading } from "./SectionHeading";

export function ServicesGrid() {
  return (
    <section id="expertise" className="relative border-t border-white/5 bg-white/[0.02] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertises"
          title="Des solutions IA prêtes à performer"
          description="Nous créons des chatbots et automatisations n8n qui rendent vos équipes plus efficaces, vos clients plus satisfaits et vos données mieux orchestrées."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20">
                <div className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent blur-3xl" />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/20 text-accent">
                        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                          <path
                            d="m5 10 3.5 3.5L15 7"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

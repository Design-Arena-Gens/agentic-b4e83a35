import { workflow } from "../lib/data";
import { SectionHeading } from "./SectionHeading";

export function WorkflowTimeline() {
  return (
    <section id="methodology" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-primary-500/30 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <SectionHeading
          eyebrow="Méthodologie"
          title="Une approche pilotée par les résultats"
          description="Notre équipe mêle design conversationnel, ingénierie n8n et gouvernance des données pour livrer des assistants IA robustes et scalables."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary-500/20 via-white/10 to-transparent md:block" />
          <div className="space-y-12 md:pl-12">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20"
              >
                <span className="absolute left-4 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:block" />
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 font-heading text-lg font-semibold text-white">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

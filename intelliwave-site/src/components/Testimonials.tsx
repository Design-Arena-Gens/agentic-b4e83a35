import { testimonials } from "../lib/data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-primary-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils surfent la vague IA avec Intelliwave"
          description="Des scale-ups aux ETI, nos clients voient leur productivité s'envoler grâce à des expériences conversationnelles fiables pilotées par n8n."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
              <div>
                <p className="font-heading text-base font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

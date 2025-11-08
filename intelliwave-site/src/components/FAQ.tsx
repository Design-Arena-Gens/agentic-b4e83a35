import { faqs } from "../lib/data";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-primary-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl space-y-10 px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Vous avez une question sur nos services IA & n8n ? Voici les réponses aux questions que l'on nous pose le plus."
          align="center"
        />
        <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-white marker:content-none">
                {faq.question}
                <span className="ml-4 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/10 text-sm text-primary-200 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

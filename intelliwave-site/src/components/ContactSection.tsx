import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 px-6 py-16 shadow-xl lg:flex-row lg:px-16">
        <div className="flex-1">
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre prochain assistant IA"
            description="Partagez vos enjeux et obtenez un plan d'action n8n + IA personnalisé. Notre équipe vous répond en moins de 24h."
          />
          <div className="mt-10 space-y-6 text-sm text-slate-300">
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">Email</h3>
              <a
                href="mailto:hello@intelliwave.ai"
                className="mt-1 inline-flex items-center gap-2 text-primary-100 transition hover:text-white"
              >
                hello@intelliwave.ai
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 5h10v10M15 5l-9.5 9.5"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">Disponibilités</h3>
              <p className="mt-1">Du lundi au vendredi · 9h - 19h CET</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">Slack communautaire</h3>
              <p className="mt-1">
                Rejoignez plus de 350 opérateurs qui optimisent leurs workflows avec l&apos;IA.
              </p>
            </div>
          </div>
        </div>
        <form className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-medium text-white">
              Prénom & Nom
              <input
                type="text"
                placeholder="Alex Martin"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-300"
              />
            </label>
            <label className="text-sm font-medium text-white">
              Email professionnel
              <input
                type="email"
                placeholder="vous@entreprise.com"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-300"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-white">
            Société
            <input
              type="text"
              placeholder="Intelliwave"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-300"
            />
          </label>
          <label className="text-sm font-medium text-white">
            Quels processus souhaitez-vous automatiser ?
            <textarea
              rows={4}
              placeholder="Support client, génération de leads, qualification, etc."
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-300"
            />
          </label>
          <Button href="#" className="w-full justify-center">
            Envoyer ma demande
          </Button>
          <p className="text-xs text-slate-400">
            En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Nous ne
            partageons jamais vos données.
          </p>
        </form>
      </div>
    </section>
  );
}

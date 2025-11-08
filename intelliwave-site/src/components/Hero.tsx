import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            Agence IA & n8n
          </span>
          <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white md:text-6xl">
            Des chatbots sur mesure qui{" "}
            <span className="bg-gradient-to-r from-primary-300 via-primary-100 to-white bg-clip-text text-transparent">
              automatisent votre croissance
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Intelliwave conçoit, déploie et supervise vos assistants IA avec n8n.
            Libérez vos équipes des tâches répétitives et offrez à vos clients une
            expérience conversationnelle qui convertit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#contact">Planifier un diagnostic</Button>
            <Button href="#expertise" variant="ghost">
              Découvrir nos expertises
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-sm text-slate-300 sm:grid-cols-3">
            <div>
              <dt className="font-heading text-3xl font-semibold text-white">+120</dt>
              <dd>Workflows n8n orchestrés</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl font-semibold text-white">4.8/5</dt>
              <dd>Satisfaction clients moyenne</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl font-semibold text-white">24/7</dt>
              <dd>Monitoring & support IA</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="relative grid-overlay w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  Console Intelliwave
                </h3>
                <p className="text-sm text-slate-300">
                  Visualisez vos flux d&apos;automatisation et l&apos;activité du chatbot en
                  temps réel.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
                alt="Illustration interface Intelliwave"
                width={500}
                height={400}
                className="w-full rounded-2xl border border-white/10 object-cover"
                priority
              />
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4">
                <div>
                  <p className="text-sm text-slate-300">Temps économisé (30 jours)</p>
                  <p className="font-heading text-2xl font-semibold text-white">
                    482 h
                  </p>
                </div>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  +38%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

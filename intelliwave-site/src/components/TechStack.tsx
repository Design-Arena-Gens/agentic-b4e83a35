const stack = [
  { name: "n8n", description: "Orchestration low-code ultra flexible" },
  { name: "OpenAI & Mistral", description: "Modèles IA génératifs & analytiques" },
  { name: "Pinecone", description: "Recherche vectorielle & mémoire longue" },
  { name: "LangChain", description: "Agents et workflows conversationnels" },
  { name: "Slack & Teams", description: "Intégrations collaboratives" },
  { name: "HubSpot & Salesforce", description: "Synchronisation CRM temps réel" }
];

export function TechStack() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-10 h-36 w-36 -translate-x-1/2 rounded-full bg-primary-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
            Stack technologique
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
            Des briques robustes pour des automatisations fiables
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Nous assemblons les meilleurs outils IA et APIs pour accélérer vos opérations tout
            en garantissant sécurité, conformité et performances.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-primary-400/60"
            >
              <h3 className="font-heading text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Launch",
    price: "2 900€",
    cadence: "par projet",
    description: "Pour valider un premier use case de chatbot IA.",
    deliverables: [
      "Audit & blueprint stratégique",
      "Chatbot n8n connecté à vos outils",
      "5 scénarios de conversation",
      "Formation équipe & transfert"
    ],
    highlight: false
  },
  {
    name: "Scale",
    price: "1 950€",
    cadence: "par mois",
    description: "Le pack idéal pour scaler vos automatisations IA.",
    deliverables: [
      "Jusqu'à 3 workflows IA actifs",
      "Monitoring & optimisation continue",
      "Support prioritaire Slack",
      "Ateliers data & prompt engineering"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    cadence: "selon besoins",
    description: "Pour les structures multi-équipes et fortes contraintes.",
    deliverables: [
      "Gouvernance & sécurité avancée",
      "Intégrations sur-mesure (ERP, legacy)",
      "SLA 99.9% & astreintes",
      "Equipe dédiée produit + data"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-y border-white/5 bg-white/[0.02] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
            Tarifs
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
            Choisissez la vague qui vous correspond
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Des offres flexibles pour amorcer, accélérer ou industrialiser vos automatisations IA avec la tranquillité d&apos;esprit d&apos;un partenaire expert.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 ${
                plan.highlight ? "ring-1 ring-primary-400 shadow-glow" : ""
              }`}
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-semibold text-white">{plan.price}</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {plan.cadence}
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {plan.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-500/20 text-primary-200">
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
              <button
                type="button"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-primary-500 via-primary-400 to-accent text-slate-950"
                    : "border border-white/20 text-slate-100 hover:bg-white/10"
                }`}
              >
                Prendre rendez-vous
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

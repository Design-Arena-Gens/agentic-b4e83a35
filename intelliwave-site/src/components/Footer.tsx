export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <span className="font-heading text-lg font-semibold text-white">
            Intelliwave
          </span>
          <p>Agence d&apos;automatisation IA & chatbots n8n sur mesure.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wider text-slate-500">
          <a href="#expertise" className="transition hover:text-white">
            Expertise
          </a>
          <a href="#methodology" className="transition hover:text-white">
            Méthode
          </a>
          <a href="#case-studies" className="transition hover:text-white">
            Réalisations
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Tarifs
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Intelliwave. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

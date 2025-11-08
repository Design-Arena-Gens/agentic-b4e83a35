import Link from "next/link";
import { Button } from "./Button";

const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Méthode", href: "#methodology" },
  { label: "Réalisations", href: "#case-studies" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent text-lg font-semibold text-slate-950">
            IW
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold uppercase tracking-widest">
              Intelliwave
            </span>
            <span className="text-xs text-slate-400">
              Agence IA & Automat. n8n
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="#contact" className="hidden md:inline-flex">
          Démarrer un projet
        </Button>
        <button
          type="button"
          aria-label="Menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M2.5 5h15M2.5 10h15M2.5 15h15" />
          </svg>
        </button>
      </div>
    </header>
  );
}

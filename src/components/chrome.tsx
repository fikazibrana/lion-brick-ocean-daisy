import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 bg-stamp px-5 text-sm font-semibold text-sheet transition-colors duration-200 hover:bg-stamp-deep";

export const btnGhost =
  "inline-flex min-h-11 items-center justify-center gap-2 border border-ink px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper";

const navClass = "inline-flex min-h-11 items-center px-2 text-sm font-semibold";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#isi"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-sheet focus:px-3 focus:py-2"
      >
        Loncat ke isi
      </a>
      <SiteHeader />
      <main id="isi" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-ink bg-paper">
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-xs font-semibold tracking-widest text-muted uppercase sm:px-8">
          <span>Jakarta</span>
          <span className="hidden sm:inline">Politik & institusi publik</span>
          <span>Paket A–C</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex min-h-11 items-center gap-3">
          <span
            className="grid size-11 shrink-0 place-items-center bg-stamp font-serif text-2xl text-sheet"
            aria-hidden="true"
          >
            T
          </span>
          <span>
            <span className="block font-serif text-xl leading-none text-ink">Tembus Media</span>
            <span className="mt-1 hidden text-xs font-semibold tracking-widest text-muted uppercase sm:block">
              Press release · edisi nasional
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Utama">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              preload="intent"
              className={navClass + " site-nav-link text-ink-soft hover:text-ink"}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/kontak" search={{ paket: "B" }} className={btnPrimary + " ml-3"}>
            Kirim brief
          </Link>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="nav-mobile" className="border-t border-line px-5 py-2 md:hidden" aria-label="Utama">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="site-nav-link flex min-h-11 items-center border-b border-line font-serif text-2xl text-ink"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/kontak" search={{ paket: "B" }} className={btnPrimary + " my-4 w-full"}>
            Kirim brief
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-night-line bg-night text-night-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">Tembus Media</p>
          <p className="mt-3 max-w-sm text-night-muted">
            Satu pernyataan. Tembus media nasional. Menggema di daerah.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="site-nav-link inline-flex min-h-11 items-center text-night-fg hover:text-sheet"
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-widest text-night-muted uppercase">Redaksi</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-flex min-h-11 items-center text-lg">
            {site.email}
          </a>
          <p className="text-sm text-night-muted">{site.domain}</p>
        </div>
      </div>
      <div className="border-t border-night-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm leading-relaxed text-night-muted sm:px-8">
          Tembus Media menulis dan mendistribusikan press release. Penayangan mengikuti kebijakan
          masing-masing media. Paket A–C bukan janji liputan independen, judul utama, atau penempatan
          di media premium.
        </p>
      </div>
    </footer>
  );
}

export function PageIntro({
  kicker,
  title,
  dek,
}: {
  kicker: string;
  title: string;
  dek: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-stamp uppercase">{kicker}</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{dek}</p>
      </div>
    </header>
  );
}

export function Stamp() {
  return (
    <div
      className="inline-grid size-24 -rotate-6 place-items-center rounded-full border-2 border-stamp"
      aria-hidden="true"
    >
      <div className="grid size-20 place-items-center rounded-full border border-stamp">
        <span className="font-serif text-sm font-semibold tracking-widest text-stamp uppercase">
          Tembus
        </span>
      </div>
    </div>
  );
}

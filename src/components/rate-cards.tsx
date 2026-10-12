import { Link } from "@tanstack/react-router";
import { btnPrimary } from "@/components/chrome";
import { formatRupiah, packages } from "@/lib/site";

export function RateCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {packages.map((item) => (
        <article
          key={item.id}
          className={
            item.featured
              ? "flex h-full flex-col bg-night px-5 py-6 text-night-fg sm:px-6 sm:py-8"
              : "flex h-full flex-col border border-line bg-sheet px-5 py-6 text-ink sm:px-6 sm:py-8"
          }
        >
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Paket {item.id}</p>
          <p className={`mt-2 min-h-6 text-sm ${item.featured ? "text-night-muted" : "text-muted"}`}>
            {item.featured ? "Paling sering dipilih" : "Harga paket tetap"}
          </p>
          <h3 className="mt-4 font-serif text-3xl">{item.name}</h3>
          <p className="mt-4 font-serif text-4xl tabular-nums">{formatRupiah(item.price)}</p>
          <dl className={`mt-6 space-y-3 border-t pt-4 text-sm ${item.featured ? "border-night-line" : "border-line"}`}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className={item.featured ? "text-night-muted" : "text-muted"}>Media nasional</dt>
              <dd className="font-semibold tabular-nums">{item.national}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className={item.featured ? "text-night-muted" : "text-muted"}>Media lokal</dt>
              <dd className="font-semibold tabular-nums">{item.local}</dd>
            </div>
          </dl>
          <p className={`mt-4 leading-relaxed ${item.featured ? "text-night-muted" : "text-ink-soft"}`}>
            {item.blurb}
          </p>
          <div className="mt-auto pt-8">
            <Link to="/kontak" search={{ paket: item.id }} className={btnPrimary + " w-full"}>
              Pilih paket {item.id}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

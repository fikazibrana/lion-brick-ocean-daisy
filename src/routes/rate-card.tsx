import { createFileRoute, Link } from "@tanstack/react-router";
import { btnPrimary, PageIntro, Shell } from "@/components/chrome";
import { RateCards } from "@/components/rate-cards";
import { excluded, included, premiumMedia } from "@/lib/site";

export const Route = createFileRoute("/rate-card")({
  head: () => ({
    meta: [{ title: "Rate card — Tembus Media" }],
  }),
  component: RateCardPage,
});

function RateCardPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Rate card"
        title="Tiga paket tetap. Delapan media lokal di semuanya."
        dek="Paket A Rp2.000.000, Paket B Rp3.000.000, Paket C Rp4.000.000. Yang berubah hanya jumlah media nasional: satu, dua, atau tiga."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <RateCards />
        <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-ink">Termasuk di setiap paket</h2>
            <ul className="mt-4 border-t border-line">
              {included.map((item) => (
                <li key={item} className="border-b border-line py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">Tidak termasuk</h2>
            <ul className="mt-4 border-t border-line">
              {excluded.map((item) => (
                <li key={item} className="border-b border-line py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-sheet">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Di luar paket</p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
            Media premium dihitung sendiri, tidak diselipkan ke Paket C.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {premiumMedia.map((name) => (
              <li key={name} className="border border-line bg-paper px-3 py-2 text-sm font-semibold text-ink">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            Harganya mengikuti rate media tersebut. Minta penawaran bila sebuah pernyataan memang
            harus lewat pintu itu — jangan berharap ia termasuk di Rp4.000.000.
          </p>
          <Link to="/kontak" search={{ paket: "premium" }} className={btnPrimary + " mt-8"}>
            Minta penawaran premium
          </Link>
        </div>
      </section>
    </Shell>
  );
}

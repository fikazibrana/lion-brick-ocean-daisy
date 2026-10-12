import { createFileRoute, Link } from "@tanstack/react-router";
import { btnPrimary, PageIntro, Shell } from "@/components/chrome";
import { faqs, materials, refusals, steps } from "@/lib/site";

export const Route = createFileRoute("/cara-kerja")({
  head: () => ({
    meta: [{ title: "Cara kerja — Tembus Media" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Cara kerja"
        title="Brief, naskah, setuju, tayang, laporan."
        dek="Tidak ada distribusi sebelum naskah disetujui. Waktu di bawah adalah target kerja, bukan janji menit."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <ol className="border-t border-ink">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[6rem_14rem_1fr] sm:gap-6">
              <span className="font-serif text-3xl text-stamp">0{index + 1}</span>
              <h2 className="font-serif text-2xl text-ink">{step.title}</h2>
              <p className="leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="border-t border-line bg-sheet">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-ink">Bahan yang perlu disiapkan</h2>
            <ul className="mt-4 border-t border-line">
              {materials.map((item) => (
                <li key={item} className="border-b border-line py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink">Yang ditolak</h2>
            <ul className="mt-4 border-t border-stamp">
              {refusals.map((item) => (
                <li key={item} className="border-b border-line py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="font-serif text-3xl text-ink">Pertanyaan yang biasa masuk</h2>
        <div className="mt-6 border-t border-ink">
          {faqs.map((item) => (
            <details key={item.q} className="border-b border-line py-4">
              <summary className="font-serif text-xl text-ink">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-stamp" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
        <Link to="/kontak" search={{ paket: "B" }} className={btnPrimary + " mt-10"}>
          Susun brief
        </Link>
      </section>
    </Shell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Shell } from "@/components/chrome";
import { localModes, nationalBasket, premiumMedia } from "@/lib/site";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [{ title: "Jaringan media — Tembus Media" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <Shell>
      <PageIntro
        kicker="Jaringan media"
        title="Dua keranjang. Bukan dinding logo yang belum bermitra."
        dek="Nama di bawah adalah arah penempatan yang masuk akal untuk harga paket. Yang benar-benar tayang adalah media yang menerima naskah pada brief Anda. Logo baru dipasang bila kerja samanya tertulis."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Nasional</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">Keranjang paket A–C</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Portal dengan pembaca lintas provinsi. Paket A memakai satu, Paket B dua, Paket C
              tiga. Bukan seluruh daftar ini dalam satu rilis.
            </p>
          </div>
          <ul className="border-t border-ink sm:columns-2 lg:col-span-8">
            {nationalBasket.map((name) => (
              <li key={name} className="border-b border-line py-3 font-serif text-xl text-ink">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Lokal</p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
            Delapan media mengikuti wilayah, bukan diundi dari katalog.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {localModes.map((mode, index) => (
              <article key={mode.title} className="border border-line bg-sheet p-6">
                <p className="font-serif text-3xl text-stamp">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{mode.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{mode.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            Contoh keluarga yang biasa dipakai jaringan rilis daerah: Tribun daerah, jaringan
            Radar, dan portal provinsi sejenis. Delapan nama pastinya disusun setelah wilayah
            disebut di brief — tidak dipajang di sini seolah sudah dikunci untuk semua klien.
          </p>
        </div>
      </section>
      <section className="border-t border-ink bg-night text-night-fg">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Premium, terpisah</p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl sm:text-4xl">
            Pintu ini tidak termasuk di harga paket.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {premiumMedia.map((name) => (
              <li key={name} className="border border-night-line px-3 py-2 text-sm font-semibold">
                {name}
              </li>
            ))}
          </ul>
          <Link
            to="/kontak"
            search={{ paket: "premium" }}
            className="mt-8 inline-flex min-h-11 items-center font-semibold text-sheet underline decoration-stamp decoration-2 underline-offset-4"
          >
            Minta penawaran premium
          </Link>
        </div>
      </section>
    </Shell>
  );
}

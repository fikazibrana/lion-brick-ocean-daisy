import { Link } from "@tanstack/react-router";
import { btnGhost, btnPrimary, Stamp } from "@/components/chrome";
import { RateCards } from "@/components/rate-cards";
import {
  angles,
  audiences,
  formatRupiah,
  localModes,
  notPromised,
  packages,
  reasons,
  steps,
} from "@/lib/site";

export function HomePage() {
  return (
    <>
      <section className="border-b border-ink">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-stamp uppercase">
              Jasa press release · politik & publik
            </p>
            <h1 className="display mt-4 text-4xl text-ink sm:text-5xl lg:text-6xl">
              Satu pernyataan. Tembus media nasional.{" "}
              <span className="text-stamp">Menggema di daerah.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Untuk politikus, juru bicara, dan institusi yang butuh pernyataan resmi dibaca
              secara nasional, lalu diperkuat delapan media daerah di wilayah yang mereka tunjuk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/kontak" search={{ paket: "B" }} className={btnPrimary}>
                Kirim brief
              </Link>
              <Link to="/rate-card" className={btnGhost}>
                Lihat rate card
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <article className="bg-sheet p-6 shadow-print sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-ink pb-3 text-xs font-semibold tracking-widest uppercase">
                <span>Contoh susunan</span>
                <span className="text-stamp">Bukan tayangan nyata</span>
              </div>
              <p className="mt-5 text-xs font-semibold tracking-widest text-muted uppercase">
                Kanal politik
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-ink">
                Pernyataan resmi, dengan kutipan yang boleh dipakai redaksi
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Naskah memakai 5W+1H dan satu suara narasumber. Bukan judul jebakan. Delapan media
                lokal mengikuti wilayah di brief.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-4">
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-muted uppercase">Nasional</dt>
                  <dd className="mt-1 font-serif text-2xl">1–3</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-muted uppercase">Lokal</dt>
                  <dd className="mt-1 font-serif text-2xl">8</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest text-muted uppercase">Laporan</dt>
                  <dd className="mt-1 font-serif text-2xl">Tautan</dd>
                </div>
              </dl>
              <div className="mt-6 flex justify-end">
                <Stamp />
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="border-b border-ink">
        <ul className="mx-auto grid max-w-6xl divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {packages.map((item) => (
            <li key={item.id}>
              <Link to="/rate-card" className="block px-5 py-5 sm:px-8">
                <span className="text-xs font-semibold tracking-widest text-muted uppercase">
                  Paket {item.id} · {item.national} nasional + {item.local} lokal
                </span>
                <span className="mt-1 block font-serif text-3xl text-ink tabular-nums">
                  {formatRupiah(item.price)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="border-b border-line" aria-labelledby="alasan">
        <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">01 — Kenapa ini</p>
          <h2 id="alasan" className="mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
            Bukan ledakan portal. Dua lapis yang bisa dijelaskan ke atasan.
          </h2>
        </div>
        <ol className="mx-auto mt-8 max-w-6xl divide-y divide-line border-t border-line md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="px-5 py-8 sm:px-8">
              <span className="font-serif text-4xl text-stamp">0{index + 1}</span>
              <h3 className="mt-3 font-serif text-2xl text-ink">{reason.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{reason.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-b border-line" aria-labelledby="siapa">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-stamp uppercase">02 — Untuk siapa</p>
            <h2 id="siapa" className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
              Cocok bila pernyataan Anda punya publik.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Bukan untuk promosi produk, diskon, atau pemburu backlink. Kalau yang dibutuhkan
              adalah katalog, ini meja yang salah.
            </p>
          </div>
          <ul className="lg:col-span-8">
            {audiences.map((item) => (
              <li key={item.title} className="border-t border-line py-4">
                <p className="font-serif text-xl text-ink">{item.title}</p>
                <p className="mt-1 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="paket">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-stamp uppercase">03 — Rate card</p>
              <h2 id="paket" className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
                Tiga paket. Angkanya tidak bergeser.
              </h2>
            </div>
            <Link to="/rate-card" className="font-semibold text-stamp">
              Rincian yang termasuk
            </Link>
          </div>
          <RateCards />
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="tayang">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">04 — Di mana tayang</p>
          <h2 id="tayang" className="mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
            Nasional untuk legitimasi. Lokal untuk wilayah kerja.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="border border-line bg-sheet p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Lapisan nasional</p>
              <h3 className="mt-2 font-serif text-3xl">1, 2, atau 3 portal</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Pembaca lintas provinsi, kanal nasional atau politik. Jumlahnya mengikuti paket.
                Bukan sepuluh nama yang dijanjikan sekaligus.
              </p>
            </article>
            <article className="border border-line bg-sheet p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Lapisan lokal</p>
              <h3 className="mt-2 font-serif text-3xl">8 media, wilayah dikunci</h3>
              <ul className="mt-4 space-y-3">
                {localModes.map((mode) => (
                  <li key={mode.title}>
                    <p className="font-semibold text-ink">{mode.title}</p>
                    <p className="text-ink-soft">{mode.body}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            Nama media di halaman jaringan adalah keranjang arah, bukan jaminan semua tayang dalam
            satu brief. Media premium — Detik, Kompas, CNN Indonesia, Tempo, dan setara — di luar
            Paket A–C.
          </p>
          <Link to="/media" className="mt-4 inline-flex min-h-11 items-center font-semibold text-stamp">
            Lihat jaringan media
          </Link>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="sudut">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Contoh sudut</p>
          <h2 id="sudut" className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            Yang biasa dikerjakan. Bukan portofolio palsu.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {angles.map((angle) => (
              <article key={angle.title} className="border-t-2 border-stamp pt-4">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">{angle.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{angle.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{angle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="alur">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-stamp uppercase">05 — Alur</p>
              <h2 id="alur" className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
                Lima langkah. Distribusi baru setelah setuju.
              </h2>
            </div>
            <Link to="/cara-kerja" className="font-semibold text-stamp">
              Ketentuan lengkap
            </Link>
          </div>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="font-serif text-3xl text-stamp">0{index + 1}</span>
                <h3 className="mt-2 font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tidak">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <h2 id="tidak" className="font-serif text-3xl text-ink sm:text-4xl">
            Yang tidak kami janjikan
          </h2>
          <ul className="mt-6 border-t border-line">
            {notPromised.map((item) => (
              <li key={item} className="grid gap-2 border-b border-line py-4 sm:grid-cols-[5rem_1fr] sm:gap-6">
                <span className="text-xs font-semibold tracking-widest text-stamp uppercase">Tidak</span>
                <span className="leading-relaxed text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night text-night-fg">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Brief</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              Kirim sudut beritanya. Naskah tidak berangkat sebelum Anda setuju.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="leading-relaxed text-night-muted">
              Sebut nama, paket, dan wilayah delapan media lokal. Redaksi membalas lewat email yang
              Anda cantumkan.
            </p>
            <Link to="/kontak" search={{ paket: "B" }} className={btnPrimary + " mt-6"}>
              Susun brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { BriefForm } from "@/components/brief-form";
import { PageIntro, Shell } from "@/components/chrome";
import { isPaketId, site } from "@/lib/site";

export const Route = createFileRoute("/kontak")({
  validateSearch: (search: Record<string, unknown>) => ({
    paket: isPaketId(search.paket) ? search.paket : "B",
  }),
  head: () => ({
    meta: [{ title: "Kontak — Tembus Media" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { paket } = Route.useSearch();

  return (
    <Shell>
      <PageIntro
        kicker="Kontak"
        title="Susun brief. Redaksi membalas dari situ."
        dek={`Kirim lewat ${site.email}. Sebut wilayah delapan media lokal supaya daftarnya tidak diundi.`}
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <BriefForm key={paket} initialPaket={paket} />
      </section>
    </Shell>
  );
}

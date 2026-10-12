import { useMemo, useState } from "react";
import { paketLabel, site, type PaketId } from "@/lib/site";
import { btnGhost, btnPrimary } from "@/components/chrome";

type Fields = {
  nama: string;
  jabatan: string;
  paket: PaketId;
  wilayah: string;
  tenggat: string;
  kontak: string;
  sudut: string;
};

const empty: Fields = {
  nama: "",
  jabatan: "",
  paket: "B",
  wilayah: "",
  tenggat: "",
  kontak: "",
  sudut: "",
};

function compose(fields: Fields) {
  return [
    "Brief Tembus Media",
    `Nama: ${fields.nama || "—"}`,
    `Jabatan / lembaga: ${fields.jabatan || "—"}`,
    `Paket: ${paketLabel(fields.paket)}`,
    `Wilayah 8 media lokal: ${fields.wilayah || "—"}`,
    `Tenggat: ${fields.tenggat || "—"}`,
    `Kontak balik: ${fields.kontak || "—"}`,
    "",
    "Sudut berita:",
    fields.sudut || "—",
  ].join("\n");
}

export function BriefForm({ initialPaket }: { initialPaket: PaketId }) {
  const [fields, setFields] = useState<Fields>({ ...empty, paket: initialPaket });
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const brief = useMemo(() => compose(fields), [fields]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    if (!fields.nama.trim() || !fields.wilayah.trim() || !fields.kontak.trim() || !fields.sudut.trim()) {
      setError("Isi nama, wilayah media lokal, kontak balik, dan sudut berita.");
      setNotice("");
      return false;
    }
    setError("");
    return true;
  }

  function sendEmail() {
    if (!validate()) return;
    const subject = `Brief press release — ${fields.nama.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
    setNotice("Aplikasi email terbuka. Jika tidak muncul, salin brief di samping lalu kirim manual.");
  }

  async function copyBrief() {
    if (!validate()) return;
    try {
      await navigator.clipboard.writeText(brief);
      setNotice("Brief tersalin. Tempel ke email atau WhatsApp redaksi.");
    } catch {
      setNotice("Clipboard tertahan browser. Pilih teks di kotak brief, lalu salin manual.");
    }
  }

  async function sendWhatsapp() {
    if (!validate() || !site.whatsappE164) return;
    await navigator.clipboard.writeText(brief).catch(() => undefined);
    const text = encodeURIComponent(brief);
    window.open(`https://wa.me/${site.whatsappE164}?text=${text}`, "_blank", "noopener,noreferrer");
    setNotice("WhatsApp terbuka dengan brief. Jika teks terpotong, tempel dari salinan.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <form
        className="grid gap-4 lg:col-span-7"
        onSubmit={(event) => {
          event.preventDefault();
          sendEmail();
        }}
      >
        <Field label="Nama" id="nama">
          <input
            id="nama"
            className="field"
            autoComplete="name"
            value={fields.nama}
            onChange={(event) => update("nama", event.target.value)}
            required
          />
        </Field>
        <Field label="Jabatan atau lembaga" id="jabatan">
          <input
            id="jabatan"
            className="field"
            value={fields.jabatan}
            onChange={(event) => update("jabatan", event.target.value)}
          />
        </Field>
        <Field label="Paket" id="paket">
          <select
            id="paket"
            className="field"
            value={fields.paket}
            onChange={(event) => update("paket", event.target.value as PaketId)}
          >
            <option value="A">Paket A — Fokus Daerah · Rp2.000.000</option>
            <option value="B">Paket B — Dua Pintu · Rp3.000.000</option>
            <option value="C">Paket C — Momen Penting · Rp4.000.000</option>
            <option value="premium">Media premium, minta penawaran</option>
          </select>
        </Field>
        <Field label="Wilayah 8 media lokal" id="wilayah">
          <input
            id="wilayah"
            className="field"
            placeholder="Contoh: Jawa Barat, atau kabupaten dalam satu dapil"
            value={fields.wilayah}
            onChange={(event) => update("wilayah", event.target.value)}
            required
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Tenggat" id="tenggat">
            <input
              id="tenggat"
              className="field"
              placeholder="Contoh: Kamis, 16.00"
              value={fields.tenggat}
              onChange={(event) => update("tenggat", event.target.value)}
            />
          </Field>
          <Field label="Email atau telepon balik" id="kontak">
            <input
              id="kontak"
              className="field"
              autoComplete="email"
              value={fields.kontak}
              onChange={(event) => update("kontak", event.target.value)}
              required
            />
          </Field>
        </div>
        <Field label="Sudut berita dan bahan" id="sudut">
          <textarea
            id="sudut"
            className="field min-h-40"
            value={fields.sudut}
            onChange={(event) => update("sudut", event.target.value)}
            required
          />
        </Field>
        {error ? (
          <p className="text-sm font-semibold text-stamp" role="alert">
            {error}
          </p>
        ) : null}
        {notice ? <p className="text-sm text-ink-soft">{notice}</p> : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" className={btnPrimary}>
            Kirim lewat email
          </button>
          <button type="button" className={btnGhost} onClick={() => void copyBrief()}>
            Salin brief
          </button>
          {site.whatsappE164 ? (
            <button type="button" className={btnGhost} onClick={() => void sendWhatsapp()}>
              WhatsApp
            </button>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Brief menuju {site.email}. Nomor WhatsApp resmi bisa dipasang kemudian, tanpa mengubah
          halaman lain.
        </p>
      </form>
      <aside className="lg:col-span-5">
        <div className="border border-line bg-sheet p-5 shadow-print sm:p-6">
          <p className="text-xs font-semibold tracking-widest text-stamp uppercase">Naskah brief</p>
          <pre className="mt-4 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap text-ink">
            {brief}
          </pre>
        </div>
      </aside>
    </div>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      {children}
    </label>
  );
}

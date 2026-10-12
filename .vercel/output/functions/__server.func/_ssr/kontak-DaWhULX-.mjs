import { i as __toESM } from "../_runtime.mjs";
import { m as paketLabel, v as site } from "./site-CVmpRGdW.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btnPrimary, i as btnGhost, n as Shell, t as PageIntro } from "./chrome-CGT8gopa.mjs";
import { n as Route$2 } from "./router-nOqEVQsR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontak-DaWhULX-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	nama: "",
	jabatan: "",
	paket: "B",
	wilayah: "",
	tenggat: "",
	kontak: "",
	sudut: ""
};
function compose(fields) {
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
		fields.sudut || "—"
	].join("\n");
}
function BriefForm({ initialPaket }) {
	const [fields, setFields] = (0, import_react.useState)({
		...empty,
		paket: initialPaket
	});
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const brief = (0, import_react.useMemo)(() => compose(fields), [fields]);
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
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
		await navigator.clipboard.writeText(brief).catch(() => void 0);
		const text = encodeURIComponent(brief);
		window.open(`https://wa.me/${site.whatsappE164}?text=${text}`, "_blank", "noopener,noreferrer");
		setNotice("WhatsApp terbuka dengan brief. Jika teks terpotong, tempel dari salinan.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4 lg:col-span-7",
			onSubmit: (event) => {
				event.preventDefault();
				sendEmail();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nama",
					id: "nama",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "nama",
						className: "field",
						autoComplete: "name",
						value: fields.nama,
						onChange: (event) => update("nama", event.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Jabatan atau lembaga",
					id: "jabatan",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "jabatan",
						className: "field",
						value: fields.jabatan,
						onChange: (event) => update("jabatan", event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Paket",
					id: "paket",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "paket",
						className: "field",
						value: fields.paket,
						onChange: (event) => update("paket", event.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "A",
								children: "Paket A — Fokus Daerah · Rp2.000.000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "B",
								children: "Paket B — Dua Pintu · Rp3.000.000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "C",
								children: "Paket C — Momen Penting · Rp4.000.000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "premium",
								children: "Media premium, minta penawaran"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Wilayah 8 media lokal",
					id: "wilayah",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "wilayah",
						className: "field",
						placeholder: "Contoh: Jawa Barat, atau kabupaten dalam satu dapil",
						value: fields.wilayah,
						onChange: (event) => update("wilayah", event.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tenggat",
						id: "tenggat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "tenggat",
							className: "field",
							placeholder: "Contoh: Kamis, 16.00",
							value: fields.tenggat,
							onChange: (event) => update("tenggat", event.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email atau telepon balik",
						id: "kontak",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "kontak",
							className: "field",
							autoComplete: "email",
							value: fields.kontak,
							onChange: (event) => update("kontak", event.target.value),
							required: true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Sudut berita dan bahan",
					id: "sudut",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "sudut",
						className: "field min-h-40",
						value: fields.sudut,
						onChange: (event) => update("sudut", event.target.value),
						required: true
					})
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-stamp",
					role: "alert",
					children: error
				}) : null,
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: notice
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: btnPrimary,
							children: "Kirim lewat email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnGhost,
							onClick: () => void copyBrief(),
							children: "Salin brief"
						}),
						site.whatsappE164 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnGhost,
							onClick: () => void sendWhatsapp(),
							children: "WhatsApp"
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: [
						"Brief menuju ",
						site.email,
						". Nomor WhatsApp resmi bisa dipasang kemudian, tanpa mengubah halaman lain."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-sheet p-5 shadow-print sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-stamp uppercase",
					children: "Naskah brief"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap text-ink",
					children: brief
				})]
			})
		})]
	});
}
function Field({ id, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "grid gap-2 text-sm font-semibold text-ink",
		children: [label, children]
	});
}
function ContactPage() {
	const { paket } = Route$2.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Kontak",
		title: "Susun brief. Redaksi membalas dari situ.",
		dek: `Kirim lewat ${site.email}. Sebut wilayah delapan media lokal supaya daftarnya tidak diundi.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, { initialPaket: paket }, paket)
	})] });
}
//#endregion
export { ContactPage as component };

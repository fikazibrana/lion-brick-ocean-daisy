import { _ as refusals, i as faqs, l as materials, y as steps } from "./site-CVmpRGdW.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btnPrimary, n as Shell, t as PageIntro } from "./chrome-CGT8gopa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cara-kerja-D_6vfCkP.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Cara kerja",
			title: "Brief, naskah, setuju, tayang, laporan.",
			dek: "Tidak ada distribusi sebelum naskah disetujui. Waktu di bawah adalah target kerja, bukan janji menit."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "border-t border-ink",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-3 border-b border-line py-6 sm:grid-cols-[6rem_14rem_1fr] sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-serif text-3xl text-stamp",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-ink",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-ink-soft",
							children: step.body
						})
					]
				}, step.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-ink",
					children: "Bahan yang perlu disiapkan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 border-t border-line",
					children: materials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-3 text-ink-soft",
						children: item
					}, item))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-ink",
					children: "Yang ditolak"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 border-t border-stamp",
					children: refusals.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-3 text-ink-soft",
						children: item
					}, item))
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-ink",
					children: "Pertanyaan yang biasa masuk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 border-t border-ink",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "border-b border-line py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "font-serif text-xl text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-start justify-between gap-4",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-stamp",
									"aria-hidden": "true",
									children: "+"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl leading-relaxed text-ink-soft",
							children: item.a
						})]
					}, item.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontak",
					search: { paket: "B" },
					className: btnPrimary + " mt-10",
					children: "Susun brief"
				})
			]
		})
	] });
}
//#endregion
export { ProcessPage as component };

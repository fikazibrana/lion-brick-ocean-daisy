import { a as formatRupiah, p as packages } from "./site-CVmpRGdW.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btnPrimary } from "./chrome-CGT8gopa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rate-cards-DTw9Gax3.js
var import_jsx_runtime = require_jsx_runtime();
function RateCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 lg:grid-cols-3",
		children: packages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: item.featured ? "flex h-full flex-col bg-night px-5 py-6 text-night-fg sm:px-6 sm:py-8" : "flex h-full flex-col border border-line bg-sheet px-5 py-6 text-ink sm:px-6 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-widest text-stamp uppercase",
					children: ["Paket ", item.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-2 min-h-6 text-sm ${item.featured ? "text-night-muted" : "text-muted"}`,
					children: item.featured ? "Paling sering dipilih" : "Harga paket tetap"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-serif text-3xl",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-serif text-4xl tabular-nums",
					children: formatRupiah(item.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: `mt-6 space-y-3 border-t pt-4 text-sm ${item.featured ? "border-night-line" : "border-line"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: item.featured ? "text-night-muted" : "text-muted",
							children: "Media nasional"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-semibold tabular-nums",
							children: item.national
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: item.featured ? "text-night-muted" : "text-muted",
							children: "Media lokal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-semibold tabular-nums",
							children: item.local
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-4 leading-relaxed ${item.featured ? "text-night-muted" : "text-ink-soft"}`,
					children: item.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontak",
						search: { paket: item.id },
						className: btnPrimary + " w-full",
						children: ["Pilih paket ", item.id]
					})
				})
			]
		}, item.id))
	});
}
//#endregion
export { RateCards as t };

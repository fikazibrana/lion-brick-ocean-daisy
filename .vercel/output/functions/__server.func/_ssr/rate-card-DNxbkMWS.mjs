import { h as premiumMedia, o as included, r as excluded } from "./site-CVmpRGdW.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btnPrimary, n as Shell, t as PageIntro } from "./chrome-CGT8gopa.mjs";
import { t as RateCards } from "./rate-cards-DTw9Gax3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rate-card-DNxbkMWS.js
var import_jsx_runtime = require_jsx_runtime();
function RateCardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Rate card",
			title: "Tiga paket tetap. Delapan media lokal di semuanya.",
			dek: "Paket A Rp2.000.000, Paket B Rp3.000.000, Paket C Rp4.000.000. Yang berubah hanya jumlah media nasional: satu, dua, atau tiga."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RateCards, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Termasuk di setiap paket"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 border-t border-line",
					children: included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-3 text-ink-soft",
						children: item
					}, item))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Tidak termasuk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 border-t border-line",
					children: excluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-3 text-ink-soft",
						children: item
					}, item))
				})] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-stamp uppercase",
						children: "Di luar paket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl",
						children: "Media premium dihitung sendiri, tidak diselipkan ke Paket C."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-2",
						children: premiumMedia.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line bg-paper px-3 py-2 text-sm font-semibold text-ink",
							children: name
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl leading-relaxed text-ink-soft",
						children: "Harganya mengikuti rate media tersebut. Minta penawaran bila sebuah pernyataan memang harus lewat pintu itu — jangan berharap ia termasuk di Rp4.000.000."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontak",
						search: { paket: "premium" },
						className: btnPrimary + " mt-8",
						children: "Minta penawaran premium"
					})
				]
			})
		})
	] });
}
//#endregion
export { RateCardPage as component };

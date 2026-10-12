import { c as localModes, h as premiumMedia, u as nationalBasket } from "./site-CVmpRGdW.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Shell, t as PageIntro } from "./chrome-CGT8gopa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-BDCjV4zA.js
var import_jsx_runtime = require_jsx_runtime();
function MediaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Jaringan media",
			title: "Dua keranjang. Bukan dinding logo yang belum bermitra.",
			dek: "Nama di bawah adalah arah penempatan yang masuk akal untuk harga paket. Yang benar-benar tayang adalah media yang menerima naskah pada brief Anda. Logo baru dipasang bila kerja samanya tertulis."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-stamp uppercase",
							children: "Nasional"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-3xl text-ink",
							children: "Keranjang paket A–C"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-ink-soft",
							children: "Portal dengan pembaca lintas provinsi. Paket A memakai satu, Paket B dua, Paket C tiga. Bukan seluruh daftar ini dalam satu rilis."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "border-t border-ink sm:columns-2 lg:col-span-8",
					children: nationalBasket.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-3 font-serif text-xl text-ink",
						children: name
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-stamp uppercase",
						children: "Lokal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-2xl font-serif text-3xl text-ink sm:text-4xl",
						children: "Delapan media mengikuti wilayah, bukan diundi dari katalog."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: localModes.map((mode, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-line bg-sheet p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-serif text-3xl text-stamp",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-serif text-2xl text-ink",
									children: mode.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 leading-relaxed text-ink-soft",
									children: mode.body
								})
							]
						}, mode.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-3xl text-sm leading-relaxed text-muted",
						children: "Contoh keluarga yang biasa dipakai jaringan rilis daerah: Tribun daerah, jaringan Radar, dan portal provinsi sejenis. Delapan nama pastinya disusun setelah wilayah disebut di brief — tidak dipajang di sini seolah sudah dikunci untuk semua klien."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-night text-night-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-stamp uppercase",
						children: "Premium, terpisah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-2xl font-serif text-3xl sm:text-4xl",
						children: "Pintu ini tidak termasuk di harga paket."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-2",
						children: premiumMedia.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-night-line px-3 py-2 text-sm font-semibold",
							children: name
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontak",
						search: { paket: "premium" },
						className: "mt-8 inline-flex min-h-11 items-center font-semibold text-sheet underline decoration-stamp decoration-2 underline-offset-4",
						children: "Minta penawaran premium"
					})
				]
			})
		})
	] });
}
//#endregion
export { MediaPage as component };

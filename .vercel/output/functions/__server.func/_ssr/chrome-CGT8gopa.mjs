import { i as __toESM } from "../_runtime.mjs";
import { d as nav, v as site } from "./site-CVmpRGdW.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-CGT8gopa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var btnPrimary = "inline-flex min-h-11 items-center justify-center gap-2 bg-stamp px-5 text-sm font-semibold text-sheet transition-colors duration-200 hover:bg-stamp-deep";
var btnGhost = "inline-flex min-h-11 items-center justify-center gap-2 border border-ink px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper";
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#isi",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-sheet focus:px-3 focus:py-2",
				children: "Loncat ke isi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "isi",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-ink bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-xs font-semibold tracking-widest text-muted uppercase sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jakarta" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Politik & institusi publik"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paket A–C" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-h-11 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center bg-stamp font-serif text-2xl text-sheet",
							"aria-hidden": "true",
							children: "T"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-serif text-xl leading-none text-ink",
							children: "Tembus Media"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 hidden text-xs font-semibold tracking-widest text-muted uppercase sm:block",
							children: "Press release · edisi nasional"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Utama",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							preload: "intent",
							className: "inline-flex min-h-11 items-center px-2 text-sm font-semibold site-nav-link text-ink-soft hover:text-ink",
							activeOptions: { exact: item.to === "/" },
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontak",
							search: { paket: "B" },
							className: btnPrimary + " ml-3",
							children: "Kirim brief"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "grid size-11 place-items-center border border-line md:hidden",
						"aria-expanded": open,
						"aria-controls": "nav-mobile",
						onClick: () => setOpen((value) => !value),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Tutup menu" : "Buka menu"
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				id: "nav-mobile",
				className: "border-t border-line px-5 py-2 md:hidden",
				"aria-label": "Utama",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "site-nav-link flex min-h-11 items-center border-b border-line font-serif text-2xl text-ink",
					activeOptions: { exact: item.to === "/" },
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontak",
					search: { paket: "B" },
					className: btnPrimary + " my-4 w-full",
					children: "Kirim brief"
				})]
			}) : null
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-night-line bg-night text-night-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl",
						children: "Tembus Media"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-night-muted",
						children: "Satu pernyataan. Tembus media nasional. Menggema di daerah."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "md:col-span-3",
					"aria-label": "Footer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "site-nav-link inline-flex min-h-11 items-center text-night-fg hover:text-sheet",
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}) }, item.to)) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-night-muted uppercase",
							children: "Redaksi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "mt-2 inline-flex min-h-11 items-center text-lg",
							children: site.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-night-muted",
							children: site.domain
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-night-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-6 text-sm leading-relaxed text-night-muted sm:px-8",
				children: "Tembus Media menulis dan mendistribusikan press release. Penayangan mengikuti kebijakan masing-masing media. Paket A–C bukan janji liputan independen, judul utama, atau penempatan di media premium."
			})
		})]
	});
}
function PageIntro({ kicker, title, dek }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-stamp uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft",
					children: dek
				})
			]
		})
	});
}
function Stamp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-grid size-24 -rotate-6 place-items-center rounded-full border-2 border-stamp",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid size-20 place-items-center rounded-full border border-stamp",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-sm font-semibold tracking-widest text-stamp uppercase",
				children: "Tembus"
			})
		})
	});
}
//#endregion
export { btnPrimary as a, btnGhost as i, Shell as n, Stamp as r, PageIntro as t };

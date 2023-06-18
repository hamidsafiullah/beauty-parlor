/**
 * @popperjs/core v2.5.4 - MIT License
 */

"use strict"; !function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Popper = {}) }(this, (function (e) { function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } } function n(e) { return "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e } function r(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } } function o(e) { return e instanceof n(e).Element || e instanceof Element } function i(e) { return e instanceof n(e).HTMLElement || e instanceof HTMLElement } function a(e) { return e ? (e.nodeName || "").toLowerCase() : null } function s(e) { return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement } function f(e) { return t(s(e)).left + r(e).scrollLeft } function c(e) { return n(e).getComputedStyle(e) } function p(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) } function l(e, o, c) { void 0 === c && (c = !1); var l = s(o); e = t(e); var u = i(o), d = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 }; return (u || !u && !c) && (("body" !== a(o) || p(l)) && (d = o !== n(o) && i(o) ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop } : r(o)), i(o) ? ((m = t(o)).x += o.clientLeft, m.y += o.clientTop) : l && (m.x = f(l))), { x: e.left + d.scrollLeft - m.x, y: e.top + d.scrollTop - m.y, width: e.width, height: e.height } } function u(e) { return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight } } function d(e) { return "html" === a(e) ? e : e.assignedSlot || e.parentNode || e.host || s(e) } function m(e, t) { void 0 === t && (t = []); var r = function e(t) { return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : i(t) && p(t) ? t : e(d(t)) }(e); e = "body" === a(r); var o = n(r); return r = e ? [o].concat(o.visualViewport || [], p(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(m(d(r))) } function h(e) { if (!i(e) || "fixed" === c(e).position) return null; if (e = e.offsetParent) { var t = s(e); if ("body" === a(e) && "static" === c(e).position && "static" !== c(t).position) return t } return e } function g(e) { for (var t = n(e), r = h(e); r && 0 <= ["table", "td", "th"].indexOf(a(r)) && "static" === c(r).position;)r = h(r); if (r && "body" === a(r) && "static" === c(r).position) return t; if (!r) e: { for (e = d(e); i(e) && 0 > ["html", "body"].indexOf(a(e));) { if ("none" !== (r = c(e)).transform || "none" !== r.perspective || r.willChange && "auto" !== r.willChange) { r = e; break e } e = e.parentNode } r = null } return r || t } function v(e) { var t = new Map, n = new Set, r = []; return e.forEach((function (e) { t.set(e.name, e) })), e.forEach((function (e) { n.has(e.name) || function e(o) { n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (r) { n.has(r) || (r = t.get(r)) && e(r) })), r.push(o) }(e) })), r } function b(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()) })) }))), t } } function y(e) { return e.split("-")[0] } function O(e, t) { var r, o = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if ((r = o) && (r = o instanceof (r = n(o).ShadowRoot) || o instanceof ShadowRoot), r) do { if (t && e.isSameNode(t)) return !0; t = t.parentNode || t.host } while (t); return !1 } function w(e) { return Object.assign(Object.assign({}, e), {}, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function x(e, o) { if ("viewport" === o) { o = n(e); var a = s(e); o = o.visualViewport; var p = a.clientWidth; a = a.clientHeight; var l = 0, u = 0; o && (p = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = o.offsetLeft, u = o.offsetTop)), e = w(e = { width: p, height: a, x: l + f(e), y: u }) } else i(o) ? ((e = t(o)).top += o.clientTop, e.left += o.clientLeft, e.bottom = e.top + o.clientHeight, e.right = e.left + o.clientWidth, e.width = o.clientWidth, e.height = o.clientHeight, e.x = e.left, e.y = e.top) : (u = s(e), e = s(u), l = r(u), o = u.ownerDocument.body, p = Math.max(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Math.max(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -l.scrollLeft + f(u), l = -l.scrollTop, "rtl" === c(o || e).direction && (u += Math.max(e.clientWidth, o ? o.clientWidth : 0) - p), e = w({ width: p, height: a, x: u, y: l })); return e } function j(e, t, n) { return t = "clippingParents" === t ? function (e) { var t = m(d(e)), n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? g(e) : e; return o(n) ? t.filter((function (e) { return o(e) && O(e, n) && "body" !== a(e) })) : [] }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function (t, n) { return n = x(e, n), t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t }), x(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n } function M(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" } function E(e) { var t = e.reference, n = e.element, r = (e = e.placement) ? y(e) : null; e = e ? e.split("-")[1] : null; var o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2; switch (r) { case "top": o = { x: o, y: t.y - n.height }; break; case "bottom": o = { x: o, y: t.y + t.height }; break; case "right": o = { x: t.x + t.width, y: i }; break; case "left": o = { x: t.x - n.width, y: i }; break; default: o = { x: t.x, y: t.y } }if (null != (r = r ? M(r) : null)) switch (i = "y" === r ? "height" : "width", e) { case "start": o[r] = Math.floor(o[r]) - Math.floor(t[i] / 2 - n[i] / 2); break; case "end": o[r] = Math.floor(o[r]) + Math.ceil(t[i] / 2 - n[i] / 2) }return o } function D(e) { return Object.assign(Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }), e) } function P(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function L(e, n) { void 0 === n && (n = {}); var r = n; n = void 0 === (n = r.placement) ? e.placement : n; var i = r.boundary, a = void 0 === i ? "clippingParents" : i, f = void 0 === (i = r.rootBoundary) ? "viewport" : i; i = void 0 === (i = r.elementContext) ? "popper" : i; var c = r.altBoundary, p = void 0 !== c && c; r = D("number" != typeof (r = void 0 === (r = r.padding) ? 0 : r) ? r : P(r, T)); var l = e.elements.reference; c = e.rects.popper, a = j(o(p = e.elements[p ? "popper" === i ? "reference" : "popper" : i]) ? p : p.contextElement || s(e.elements.popper), a, f), p = E({ reference: f = t(l), element: c, strategy: "absolute", placement: n }), c = w(Object.assign(Object.assign({}, c), p)), f = "popper" === i ? c : f; var u = { top: a.top - f.top + r.top, bottom: f.bottom - a.bottom + r.bottom, left: a.left - f.left + r.left, right: f.right - a.right + r.right }; if (e = e.modifiersData.offset, "popper" === i && e) { var d = e[n]; Object.keys(u).forEach((function (e) { var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1, n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x"; u[e] += d[n] * t })) } return u } function k() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect) })) } function B(e) { void 0 === e && (e = {}); var t = e.defaultModifiers, n = void 0 === t ? [] : t, r = void 0 === (e = e.defaultOptions) ? V : e; return function (e, t, i) { function a() { f.forEach((function (e) { return e() })), f = [] } void 0 === i && (i = r); var s = { placement: "bottom", orderedModifiers: [], options: Object.assign(Object.assign({}, V), r), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, f = [], c = !1, p = { state: s, setOptions: function (i) { return a(), s.options = Object.assign(Object.assign(Object.assign({}, r), s.options), i), s.scrollParents = { reference: o(e) ? m(e) : e.contextElement ? m(e.contextElement) : [], popper: m(t) }, i = function (e) { var t = v(e); return N.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) }(function (e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, { options: Object.assign(Object.assign({}, n.options), t.options), data: Object.assign(Object.assign({}, n.data), t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function (e) { return e.enabled })), s.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options; n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({ state: s, name: t, instance: p, options: n }), f.push(t || function () { })) })), p.update() }, forceUpdate: function () { if (!c) { var e = s.elements, t = e.reference; if (k(t, e = e.popper)) for (s.rects = { reference: l(t, g(e), "fixed" === s.options.strategy), popper: u(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)if (!0 === s.reset) s.reset = !1, t = -1; else { var n = s.orderedModifiers[t]; e = n.fn; var r = n.options; r = void 0 === r ? {} : r, n = n.name, "function" == typeof e && (s = e({ state: s, options: r, name: n, instance: p }) || s) } } }, update: b((function () { return new Promise((function (e) { p.forceUpdate(), e(s) })) })), destroy: function () { a(), c = !0 } }; return k(e, t) ? (p.setOptions(i).then((function (e) { !c && i.onFirstUpdate && i.onFirstUpdate(e) })), p) : p } } function W(e) { var t, r = e.popper, o = e.popperRect, i = e.placement, a = e.offsets, f = e.position, c = e.gpuAcceleration, p = e.adaptive, l = window.devicePixelRatio || 1; e = Math.round(a.x * l) / l || 0, l = Math.round(a.y * l) / l || 0; var u = a.hasOwnProperty("x"); a = a.hasOwnProperty("y"); var d, m = "left", h = "top", v = window; if (p) { var b = g(r); b === n(r) && (b = s(r)), "top" === i && (h = "bottom", l -= b.clientHeight - o.height, l *= c ? 1 : -1), "left" === i && (m = "right", e -= b.clientWidth - o.width, e *= c ? 1 : -1) } return r = Object.assign({ position: f }, p && z), c ? Object.assign(Object.assign({}, r), {}, ((d = {})[h] = a ? "0" : "", d[m] = u ? "0" : "", d.transform = 2 > (v.devicePixelRatio || 1) ? "translate(" + e + "px, " + l + "px)" : "translate3d(" + e + "px, " + l + "px, 0)", d)) : Object.assign(Object.assign({}, r), {}, ((t = {})[h] = a ? l + "px" : "", t[m] = u ? e + "px" : "", t.transform = "", t)) } function A(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return G[e] })) } function H(e) { return e.replace(/start|end/g, (function (e) { return J[e] })) } function R(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function S(e) { return ["top", "right", "bottom", "left"].some((function (t) { return 0 <= e[t] })) } var T = ["top", "bottom", "right", "left"], q = T.reduce((function (e, t) { return e.concat([t + "-start", t + "-end"]) }), []), C = [].concat(T, ["auto"]).reduce((function (e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []), N = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), V = { placement: "bottom", modifiers: [], strategy: "absolute" }, I = { passive: !0 }, _ = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, r = e.instance, o = (e = e.options).scroll, i = void 0 === o || o, a = void 0 === (e = e.resize) || e, s = n(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper); return i && f.forEach((function (e) { e.addEventListener("scroll", r.update, I) })), a && s.addEventListener("resize", r.update, I), function () { i && f.forEach((function (e) { e.removeEventListener("scroll", r.update, I) })), a && s.removeEventListener("resize", r.update, I) } }, data: {} }, U = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state; t.modifiersData[e.name] = E({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} }, z = { top: "auto", right: "auto", bottom: "auto", left: "auto" }, F = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options; e = void 0 === (e = n.gpuAcceleration) || e, n = void 0 === (n = n.adaptive) || n, e = { placement: y(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), W(Object.assign(Object.assign({}, e), {}, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), W(Object.assign(Object.assign({}, e), {}, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1 })))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, { "data-popper-placement": t.placement }) }, data: {} }, X = { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e]; i(o) && a(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function (e) { var t = r[e]; !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var r = t.elements[e], o = t.attributes[e] || {}; e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e }), {}), i(r) && a(r) && (Object.assign(r.style, e), Object.keys(o).forEach((function (e) { r.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] }, Y = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.name, r = void 0 === (e = e.options.offset) ? [0, 0] : e, o = (e = C.reduce((function (e, n) { var o = t.rects, i = y(n), a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1, s = "function" == typeof r ? r(Object.assign(Object.assign({}, o), {}, { placement: n })) : r; return o = (o = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: o } : { x: o, y: s }, e[n] = i, e }), {}))[t.placement], i = o.x; o = o.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += o), t.modifiersData[n] = e } }, G = { left: "right", right: "left", bottom: "top", top: "bottom" }, J = { start: "end", end: "start" }, K = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; if (e = e.name, !t.modifiersData[e]._skip) { var r = n.mainAxis; r = void 0 === r || r; var o = n.altAxis; o = void 0 === o || o; var i = n.fallbackPlacements, a = n.padding, s = n.boundary, f = n.rootBoundary, c = n.altBoundary, p = n.flipVariations, l = void 0 === p || p, u = n.allowedAutoPlacements; p = y(n = t.options.placement), i = i || (p !== n && l ? function (e) { if ("auto" === y(e)) return []; var t = A(e); return [H(e), t, H(t)] }(n) : [A(n)]); var d = [n].concat(i).reduce((function (e, n) { return e.concat("auto" === y(n) ? function (e, t) { void 0 === t && (t = {}); var n = t.boundary, r = t.rootBoundary, o = t.padding, i = t.flipVariations, a = t.allowedAutoPlacements, s = void 0 === a ? C : a, f = t.placement.split("-")[1]; 0 === (i = (t = f ? i ? q : q.filter((function (e) { return e.split("-")[1] === f })) : T).filter((function (e) { return 0 <= s.indexOf(e) }))).length && (i = t); var c = i.reduce((function (t, i) { return t[i] = L(e, { placement: i, boundary: n, rootBoundary: r, padding: o })[y(i)], t }), {}); return Object.keys(c).sort((function (e, t) { return c[e] - c[t] })) }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n) }), []); n = t.rects.reference, i = t.rects.popper; var m = new Map; p = !0; for (var h = d[0], g = 0; g < d.length; g++) { var v = d[g], b = y(v), O = "start" === v.split("-")[1], w = 0 <= ["top", "bottom"].indexOf(b), x = w ? "width" : "height", j = L(t, { placement: v, boundary: s, rootBoundary: f, altBoundary: c, padding: a }); if (O = w ? O ? "right" : "left" : O ? "bottom" : "top", n[x] > i[x] && (O = A(O)), x = A(O), w = [], r && w.push(0 >= j[b]), o && w.push(0 >= j[O], 0 >= j[x]), w.every((function (e) { return e }))) { h = v, p = !1; break } m.set(v, w) } if (p) for (r = function (e) { var t = d.find((function (t) { if (t = m.get(t)) return t.slice(0, e).every((function (e) { return e })) })); if (t) return h = t, "break" }, o = l ? 3 : 1; 0 < o && "break" !== r(o); o--); t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }, Q = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; e = e.name; var r = n.mainAxis, o = void 0 === r || r; r = void 0 !== (r = n.altAxis) && r; var i = n.tether; i = void 0 === i || i; var a = n.tetherOffset, s = void 0 === a ? 0 : a; n = L(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary }), a = y(t.placement); var f = t.placement.split("-")[1], c = !f, p = M(a); a = "x" === p ? "y" : "x"; var l = t.modifiersData.popperOffsets, d = t.rects.reference, m = t.rects.popper, h = "function" == typeof s ? s(Object.assign(Object.assign({}, t.rects), {}, { placement: t.placement })) : s; if (s = { x: 0, y: 0 }, l) { if (o) { var v = "y" === p ? "top" : "left", b = "y" === p ? "bottom" : "right", O = "y" === p ? "height" : "width"; o = l[p]; var w = l[p] + n[v], x = l[p] - n[b], j = i ? -m[O] / 2 : 0, E = "start" === f ? d[O] : m[O]; f = "start" === f ? -m[O] : -d[O], m = t.elements.arrow, m = i && m ? u(m) : { width: 0, height: 0 }; var D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }; v = D[v], b = D[b], m = Math.max(0, Math.min(d[O], m[O])), E = c ? d[O] / 2 - j - m - v - h : E - m - v - h, c = c ? -d[O] / 2 + j + m + b + h : f + m + b + h, h = t.elements.arrow && g(t.elements.arrow), d = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0, h = l[p] + E - d - (h ? "y" === p ? h.clientTop || 0 : h.clientLeft || 0 : 0), c = l[p] + c - d, i = Math.max(i ? Math.min(w, h) : w, Math.min(o, i ? Math.max(x, c) : x)), l[p] = i, s[p] = i - o } r && (r = l[a], i = Math.max(r + n["x" === p ? "top" : "left"], Math.min(r, r - n["x" === p ? "bottom" : "right"])), l[a] = i, s[a] = i - r), t.modifiersData[e] = s } }, requiresIfExists: ["offset"] }, Z = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state; e = e.name; var r = n.elements.arrow, o = n.modifiersData.popperOffsets, i = y(n.placement), a = M(i); if (i = 0 <= ["left", "right"].indexOf(i) ? "height" : "width", r && o) { var s = n.modifiersData[e + "#persistent"].padding, f = u(r), c = "y" === a ? "top" : "left", p = "y" === a ? "bottom" : "right", l = n.rects.reference[i] + n.rects.reference[a] - o[a] - n.rects.popper[i]; o = o[a] - n.rects.reference[a], l = (r = (r = g(r)) ? "y" === a ? r.clientHeight || 0 : r.clientWidth || 0 : 0) / 2 - f[i] / 2 + (l / 2 - o / 2), i = Math.max(s[c], Math.min(l, r - f[i] - s[p])), n.modifiersData[e] = ((t = {})[a] = i, t.centerOffset = i - l, t) } }, effect: function (e) { var t = e.state, n = e.options; e = e.name; var r = n.element; if (r = void 0 === r ? "[data-popper-arrow]" : r, n = void 0 === (n = n.padding) ? 0 : n, null != r) { if ("string" == typeof r && !(r = t.elements.popper.querySelector(r))) return; O(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[e + "#persistent"] = { padding: D("number" != typeof n ? n : P(n, T)) }) } }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, $ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state; e = e.name; var n = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, i = L(t, { elementContext: "reference" }), a = L(t, { altBoundary: !0 }); n = R(i, n), r = R(a, r, o), o = S(n), a = S(r), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: r, isReferenceHidden: o, hasPopperEscaped: a }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, { "data-popper-reference-hidden": o, "data-popper-escaped": a }) } }, ee = B({ defaultModifiers: [_, U, F, X] }), te = [_, U, F, X, Y, K, Q, Z, $], ne = B({ defaultModifiers: te }); e.applyStyles = X, e.arrow = Z, e.computeStyles = F, e.createPopper = ne, e.createPopperLite = ee, e.defaultModifiers = te, e.detectOverflow = L, e.eventListeners = _, e.flip = K, e.hide = $, e.offset = Y, e.popperGenerator = B, e.popperOffsets = U, e.preventOverflow = Q, Object.defineProperty(e, "__esModule", { value: !0 }) }));
//# sourceMappingURL=popper.min.js.map/**
 * @popperjs/core v2.5.4 - MIT License
    * /

        (function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
                typeof define === 'function' && define.amd ? define(['exports'], factory) :
                    (global = global || self, factory(global.Popper = {}));
        }(this, (function (exports) {
            'use strict';

            function getBoundingClientRect(element) {
                var rect = element.getBoundingClientRect();
                return {
                    width: rect.width,
                    height: rect.height,
                    top: rect.top,
                    right: rect.right,
                    bottom: rect.bottom,
                    left: rect.left,
                    x: rect.left,
                    y: rect.top
                };
            }

            /*:: import type { Window } from '../types'; */

            /*:: declare function getWindow(node: Node | Window): Window; */
            function getWindow(node) {
                if (node.toString() !== '[object Window]') {
                    var ownerDocument = node.ownerDocument;
                    return ownerDocument ? ownerDocument.defaultView || window : window;
                }

                return node;
            }

            function getWindowScroll(node) {
                var win = getWindow(node);
                var scrollLeft = win.pageXOffset;
                var scrollTop = win.pageYOffset;
                return {
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                };
            }

            /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
              Element); */

            function isElement(node) {
                var OwnElement = getWindow(node).Element;
                return node instanceof OwnElement || node instanceof Element;
            }
            /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
              HTMLElement); */


            function isHTMLElement(node) {
                var OwnElement = getWindow(node).HTMLElement;
                return node instanceof OwnElement || node instanceof HTMLElement;
            }
            /*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
              ShadowRoot); */


            function isShadowRoot(node) {
                var OwnElement = getWindow(node).ShadowRoot;
                return node instanceof OwnElement || node instanceof ShadowRoot;
            }

            function getHTMLElementScroll(element) {
                return {
                    scrollLeft: element.scrollLeft,
                    scrollTop: element.scrollTop
                };
            }

            function getNodeScroll(node) {
                if (node === getWindow(node) || !isHTMLElement(node)) {
                    return getWindowScroll(node);
                } else {
                    return getHTMLElementScroll(node);
                }
            }

            function getNodeName(element) {
                return element ? (element.nodeName || '').toLowerCase() : null;
            }

            function getDocumentElement(element) {
                // $FlowFixMe: assume body is always available
                return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
            }

            function getWindowScrollBarX(element) {
                // If <html> has a CSS width greater than the viewport, then this will be
                // incorrect for RTL.
                // Popper 1 is broken in this case and never had a bug report so let's assume
                // it's not an issue. I don't think anyone ever specifies width on <html>
                // anyway.
                // Browsers where the left scrollbar doesn't cause an issue report `0` for
                // this (e.g. Edge 2019, IE11, Safari)
                return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
            }

            function getComputedStyle(element) {
                return getWindow(element).getComputedStyle(element);
            }

            function isScrollParent(element) {
                // Firefox wants us to check `-x` and `-y` variations as well
                var _getComputedStyle = getComputedStyle(element),
                    overflow = _getComputedStyle.overflow,
                    overflowX = _getComputedStyle.overflowX,
                    overflowY = _getComputedStyle.overflowY;

                return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
            }

            // Composite means it takes into account transforms as well as layout.

            function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
                if (isFixed === void 0) {
                    isFixed = false;
                }

                var documentElement = getDocumentElement(offsetParent);
                var rect = getBoundingClientRect(elementOrVirtualElement);
                var isOffsetParentAnElement = isHTMLElement(offsetParent);
                var scroll = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                var offsets = {
                    x: 0,
                    y: 0
                };

                if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
                        isScrollParent(documentElement)) {
                        scroll = getNodeScroll(offsetParent);
                    }

                    if (isHTMLElement(offsetParent)) {
                        offsets = getBoundingClientRect(offsetParent);
                        offsets.x += offsetParent.clientLeft;
                        offsets.y += offsetParent.clientTop;
                    } else if (documentElement) {
                        offsets.x = getWindowScrollBarX(documentElement);
                    }
                }

                return {
                    x: rect.left + scroll.scrollLeft - offsets.x,
                    y: rect.top + scroll.scrollTop - offsets.y,
                    width: rect.width,
                    height: rect.height
                };
            }

            // Returns the layout rect of an element relative to its offsetParent. Layout
            // means it doesn't take into account transforms.
            function getLayoutRect(element) {
                return {
                    x: element.offsetLeft,
                    y: element.offsetTop,
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            }

            function getParentNode(element) {
                if (getNodeName(element) === 'html') {
                    return element;
                }

                return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
                    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
                    element.parentNode || // DOM Element detected
                    // $FlowFixMe: need a better way to handle this...
                    element.host || // ShadowRoot detected
                    // $FlowFixMe: HTMLElement is a Node
                    getDocumentElement(element) // fallback

                );
            }

            function getScrollParent(node) {
                if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
                    // $FlowFixMe: assume body is always available
                    return node.ownerDocument.body;
                }

                if (isHTMLElement(node) && isScrollParent(node)) {
                    return node;
                }

                return getScrollParent(getParentNode(node));
            }

            /*
            given a DOM element, return the list of all scroll parents, up the list of ancesors
            until we get to the top window object. This list is what we attach scroll listeners
            to, because if any of these parent elements scroll, we'll need to re-calculate the 
            reference element's position.
            */

            function listScrollParents(element, list) {
                if (list === void 0) {
                    list = [];
                }

                var scrollParent = getScrollParent(element);
                var isBody = getNodeName(scrollParent) === 'body';
                var win = getWindow(scrollParent);
                var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
                var updatedList = list.concat(target);
                return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
                    updatedList.concat(listScrollParents(getParentNode(target)));
            }

            function isTableElement(element) {
                return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
            }

            function getTrueOffsetParent(element) {
                if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
                    getComputedStyle(element).position === 'fixed') {
                    return null;
                }

                var offsetParent = element.offsetParent;

                if (offsetParent) {
                    var html = getDocumentElement(offsetParent);

                    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
                        return html;
                    }
                }

                return offsetParent;
            } // `.offsetParent` reports `null` for fixed elements, while absolute elements
            // return the containing block


            function getContainingBlock(element) {
                var currentNode = getParentNode(element);

                while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
                    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
                    // create a containing block.

                    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
                        return currentNode;
                    } else {
                        currentNode = currentNode.parentNode;
                    }
                }

                return null;
            } // Gets the closest ancestor positioned element. Handles some edge cases,
            // such as table ancestors and cross browser bugs.


            function getOffsetParent(element) {
                var window = getWindow(element);
                var offsetParent = getTrueOffsetParent(element);

                while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
                    offsetParent = getTrueOffsetParent(offsetParent);
                }

                if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
                    return window;
                }

                return offsetParent || getContainingBlock(element) || window;
            }

            var top = 'top';
            var bottom = 'bottom';
            var right = 'right';
            var left = 'left';
            var auto = 'auto';
            var basePlacements = [top, bottom, right, left];
            var start = 'start';
            var end = 'end';
            var clippingParents = 'clippingParents';
            var viewport = 'viewport';
            var popper = 'popper';
            var reference = 'reference';
            var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
                return acc.concat([placement + "-" + start, placement + "-" + end]);
            }, []);
            var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
                return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
            }, []); // modifiers that need to read the DOM

            var beforeRead = 'beforeRead';
            var read = 'read';
            var afterRead = 'afterRead'; // pure-logic modifiers

            var beforeMain = 'beforeMain';
            var main = 'main';
            var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

            var beforeWrite = 'beforeWrite';
            var write = 'write';
            var afterWrite = 'afterWrite';
            var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

            function order(modifiers) {
                var map = new Map();
                var visited = new Set();
                var result = [];
                modifiers.forEach(function (modifier) {
                    map.set(modifier.name, modifier);
                }); // On visiting object, check for its dependencies and visit them recursively

                function sort(modifier) {
                    visited.add(modifier.name);
                    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                    requires.forEach(function (dep) {
                        if (!visited.has(dep)) {
                            var depModifier = map.get(dep);

                            if (depModifier) {
                                sort(depModifier);
                            }
                        }
                    });
                    result.push(modifier);
                }

                modifiers.forEach(function (modifier) {
                    if (!visited.has(modifier.name)) {
                        // check for visited object
                        sort(modifier);
                    }
                });
                return result;
            }

            function orderModifiers(modifiers) {
                // order based on dependencies
                var orderedModifiers = order(modifiers); // order based on phase

                return modifierPhases.reduce(function (acc, phase) {
                    return acc.concat(orderedModifiers.filter(function (modifier) {
                        return modifier.phase === phase;
                    }));
                }, []);
            }

            function debounce(fn) {
                var pending;
                return function () {
                    if (!pending) {
                        pending = new Promise(function (resolve) {
                            Promise.resolve().then(function () {
                                pending = undefined;
                                resolve(fn());
                            });
                        });
                    }

                    return pending;
                };
            }

            function format(str) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return [].concat(args).reduce(function (p, c) {
                    return p.replace(/%s/, c);
                }, str);
            }

            var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
            var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
            var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
            function validateModifiers(modifiers) {
                modifiers.forEach(function (modifier) {
                    Object.keys(modifier).forEach(function (key) {
                        switch (key) {
                            case 'name':
                                if (typeof modifier.name !== 'string') {
                                    console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                                }

                                break;

                            case 'enabled':
                                if (typeof modifier.enabled !== 'boolean') {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                                }

                            case 'phase':
                                if (modifierPhases.indexOf(modifier.phase) < 0) {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                                }

                                break;

                            case 'fn':
                                if (typeof modifier.fn !== 'function') {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                                }

                                break;

                            case 'effect':
                                if (typeof modifier.effect !== 'function') {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                                }

                                break;

                            case 'requires':
                                if (!Array.isArray(modifier.requires)) {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                                }

                                break;

                            case 'requiresIfExists':
                                if (!Array.isArray(modifier.requiresIfExists)) {
                                    console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                                }

                                break;

                            case 'options':
                            case 'data':
                                break;

                            default:
                                console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
                                    return "\"" + s + "\"";
                                }).join(', ') + "; but \"" + key + "\" was provided.");
                        }

                        modifier.requires && modifier.requires.forEach(function (requirement) {
                            if (modifiers.find(function (mod) {
                                return mod.name === requirement;
                            }) == null) {
                                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
                            }
                        });
                    });
                });
            }

            function uniqueBy(arr, fn) {
                var identifiers = new Set();
                return arr.filter(function (item) {
                    var identifier = fn(item);

                    if (!identifiers.has(identifier)) {
                        identifiers.add(identifier);
                        return true;
                    }
                });
            }

            function getBasePlacement(placement) {
                return placement.split('-')[0];
            }

            function mergeByName(modifiers) {
                var merged = modifiers.reduce(function (merged, current) {
                    var existing = merged[current.name];
                    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
                        options: Object.assign(Object.assign({}, existing.options), current.options),
                        data: Object.assign(Object.assign({}, existing.data), current.data)
                    }) : current;
                    return merged;
                }, {}); // IE11 does not support Object.values

                return Object.keys(merged).map(function (key) {
                    return merged[key];
                });
            }

            function getViewportRect(element) {
                var win = getWindow(element);
                var html = getDocumentElement(element);
                var visualViewport = win.visualViewport;
                var width = html.clientWidth;
                var height = html.clientHeight;
                var x = 0;
                var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
                // can be obscured underneath it.
                // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
                // if it isn't open, so if this isn't available, the popper will be detected
                // to overflow the bottom of the screen too early.

                if (visualViewport) {
                    width = visualViewport.width;
                    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
                    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
                    // errors due to floating point numbers, so we need to check precision.
                    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
                    // Feature detection fails in mobile emulation mode in Chrome.
                    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
                    // 0.001
                    // Fallback here: "Not Safari" userAgent

                    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                        x = visualViewport.offsetLeft;
                        y = visualViewport.offsetTop;
                    }
                }

                return {
                    width: width,
                    height: height,
                    x: x + getWindowScrollBarX(element),
                    y: y
                };
            }

            // of the `<html>` and `<body>` rect bounds if horizontally scrollable

            function getDocumentRect(element) {
                var html = getDocumentElement(element);
                var winScroll = getWindowScroll(element);
                var body = element.ownerDocument.body;
                var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
                var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
                var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
                var y = -winScroll.scrollTop;

                if (getComputedStyle(body || html).direction === 'rtl') {
                    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
                }

                return {
                    width: width,
                    height: height,
                    x: x,
                    y: y
                };
            }

            function contains(parent, child) {
                var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

                if (parent.contains(child)) {
                    return true;
                } // then fallback to custom implementation with Shadow DOM support
                else if (rootNode && isShadowRoot(rootNode)) {
                    var next = child;

                    do {
                        if (next && parent.isSameNode(next)) {
                            return true;
                        } // $FlowFixMe: need a better way to handle this...


                        next = next.parentNode || next.host;
                    } while (next);
                } // Give up, the result is false


                return false;
            }

            function rectToClientRect(rect) {
                return Object.assign(Object.assign({}, rect), {}, {
                    left: rect.x,
                    top: rect.y,
                    right: rect.x + rect.width,
                    bottom: rect.y + rect.height
                });
            }

            function getInnerBoundingClientRect(element) {
                var rect = getBoundingClientRect(element);
                rect.top = rect.top + element.clientTop;
                rect.left = rect.left + element.clientLeft;
                rect.bottom = rect.top + element.clientHeight;
                rect.right = rect.left + element.clientWidth;
                rect.width = element.clientWidth;
                rect.height = element.clientHeight;
                rect.x = rect.left;
                rect.y = rect.top;
                return rect;
            }

            function getClientRectFromMixedType(element, clippingParent) {
                return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
            } // A "clipping parent" is an overflowable container with the characteristic of
            // clipping (or hiding) overflowing elements with a position different from
            // `initial`


            function getClippingParents(element) {
                var clippingParents = listScrollParents(getParentNode(element));
                var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
                var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

                if (!isElement(clipperElement)) {
                    return [];
                } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


                return clippingParents.filter(function (clippingParent) {
                    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
                });
            } // Gets the maximum area that the element is visible in due to any number of
            // clipping parents


            function getClippingRect(element, boundary, rootBoundary) {
                var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
                var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
                var firstClippingParent = clippingParents[0];
                var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
                    var rect = getClientRectFromMixedType(element, clippingParent);
                    accRect.top = Math.max(rect.top, accRect.top);
                    accRect.right = Math.min(rect.right, accRect.right);
                    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
                    accRect.left = Math.max(rect.left, accRect.left);
                    return accRect;
                }, getClientRectFromMixedType(element, firstClippingParent));
                clippingRect.width = clippingRect.right - clippingRect.left;
                clippingRect.height = clippingRect.bottom - clippingRect.top;
                clippingRect.x = clippingRect.left;
                clippingRect.y = clippingRect.top;
                return clippingRect;
            }

            function getVariation(placement) {
                return placement.split('-')[1];
            }

            function getMainAxisFromPlacement(placement) {
                return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
            }

            function computeOffsets(_ref) {
                var reference = _ref.reference,
                    element = _ref.element,
                    placement = _ref.placement;
                var basePlacement = placement ? getBasePlacement(placement) : null;
                var variation = placement ? getVariation(placement) : null;
                var commonX = reference.x + reference.width / 2 - element.width / 2;
                var commonY = reference.y + reference.height / 2 - element.height / 2;
                var offsets;

                switch (basePlacement) {
                    case top:
                        offsets = {
                            x: commonX,
                            y: reference.y - element.height
                        };
                        break;

                    case bottom:
                        offsets = {
                            x: commonX,
                            y: reference.y + reference.height
                        };
                        break;

                    case right:
                        offsets = {
                            x: reference.x + reference.width,
                            y: commonY
                        };
                        break;

                    case left:
                        offsets = {
                            x: reference.x - element.width,
                            y: commonY
                        };
                        break;

                    default:
                        offsets = {
                            x: reference.x,
                            y: reference.y
                        };
                }

                var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

                if (mainAxis != null) {
                    var len = mainAxis === 'y' ? 'height' : 'width';

                    switch (variation) {
                        case start:
                            offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
                            break;

                        case end:
                            offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
                            break;
                    }
                }

                return offsets;
            }

            function getFreshSideObject() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
            }

            function mergePaddingObject(paddingObject) {
                return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
            }

            function expandToHashMap(value, keys) {
                return keys.reduce(function (hashMap, key) {
                    hashMap[key] = value;
                    return hashMap;
                }, {});
            }

            function detectOverflow(state, options) {
                if (options === void 0) {
                    options = {};
                }

                var _options = options,
                    _options$placement = _options.placement,
                    placement = _options$placement === void 0 ? state.placement : _options$placement,
                    _options$boundary = _options.boundary,
                    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
                    _options$rootBoundary = _options.rootBoundary,
                    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
                    _options$elementConte = _options.elementContext,
                    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
                    _options$altBoundary = _options.altBoundary,
                    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
                    _options$padding = _options.padding,
                    padding = _options$padding === void 0 ? 0 : _options$padding;
                var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
                var altContext = elementContext === popper ? reference : popper;
                var referenceElement = state.elements.reference;
                var popperRect = state.rects.popper;
                var element = state.elements[altBoundary ? altContext : elementContext];
                var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
                var referenceClientRect = getBoundingClientRect(referenceElement);
                var popperOffsets = computeOffsets({
                    reference: referenceClientRect,
                    element: popperRect,
                    strategy: 'absolute',
                    placement: placement
                });
                var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
                var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
                // 0 or negative = within the clipping rect

                var overflowOffsets = {
                    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
                };
                var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

                if (elementContext === popper && offsetData) {
                    var offset = offsetData[placement];
                    Object.keys(overflowOffsets).forEach(function (key) {
                        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
                        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
                        overflowOffsets[key] += offset[axis] * multiply;
                    });
                }

                return overflowOffsets;
            }

            var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
            var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
            var DEFAULT_OPTIONS = {
                placement: 'bottom',
                modifiers: [],
                strategy: 'absolute'
            };

            function areValidElements() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return !args.some(function (element) {
                    return !(element && typeof element.getBoundingClientRect === 'function');
                });
            }

            function popperGenerator(generatorOptions) {
                if (generatorOptions === void 0) {
                    generatorOptions = {};
                }

                var _generatorOptions = generatorOptions,
                    _generatorOptions$def = _generatorOptions.defaultModifiers,
                    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
                    _generatorOptions$def2 = _generatorOptions.defaultOptions,
                    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
                return function createPopper(reference, popper, options) {
                    if (options === void 0) {
                        options = defaultOptions;
                    }

                    var state = {
                        placement: 'bottom',
                        orderedModifiers: [],
                        options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
                        modifiersData: {},
                        elements: {
                            reference: reference,
                            popper: popper
                        },
                        attributes: {},
                        styles: {}
                    };
                    var effectCleanupFns = [];
                    var isDestroyed = false;
                    var instance = {
                        state: state,
                        setOptions: function setOptions(options) {
                            cleanupModifierEffects();
                            state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
                            state.scrollParents = {
                                reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                                popper: listScrollParents(popper)
                            }; // Orders the modifiers based on their dependencies and `phase`
                            // properties

                            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                            state.orderedModifiers = orderedModifiers.filter(function (m) {
                                return m.enabled;
                            }); // Validate the provided modifiers so that the consumer will get warned
                            // if one of the modifiers is invalid for any reason

                            {
                                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
                                    var name = _ref.name;
                                    return name;
                                });
                                validateModifiers(modifiers);

                                if (getBasePlacement(state.options.placement) === auto) {
                                    var flipModifier = state.orderedModifiers.find(function (_ref2) {
                                        var name = _ref2.name;
                                        return name === 'flip';
                                    });

                                    if (!flipModifier) {
                                        console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
                                    }
                                }

                                var _getComputedStyle = getComputedStyle(popper),
                                    marginTop = _getComputedStyle.marginTop,
                                    marginRight = _getComputedStyle.marginRight,
                                    marginBottom = _getComputedStyle.marginBottom,
                                    marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                                // cause bugs with positioning, so we'll warn the consumer


                                if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
                                    return parseFloat(margin);
                                })) {
                                    console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
                                }
                            }

                            runModifierEffects();
                            return instance.update();
                        },
                        // Sync update – it will always be executed, even if not necessary. This
                        // is useful for low frequency updates where sync behavior simplifies the
                        // logic.
                        // For high frequency updates (e.g. `resize` and `scroll` events), always
                        // prefer the async Popper#update method
                        forceUpdate: function forceUpdate() {
                            if (isDestroyed) {
                                return;
                            }

                            var _state$elements = state.elements,
                                reference = _state$elements.reference,
                                popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                            // anymore

                            if (!areValidElements(reference, popper)) {
                                {
                                    console.error(INVALID_ELEMENT_ERROR);
                                }

                                return;
                            } // Store the reference and popper rects to be read by modifiers


                            state.rects = {
                                reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                                popper: getLayoutRect(popper)
                            }; // Modifiers have the ability to reset the current update cycle. The
                            // most common use case for this is the `flip` modifier changing the
                            // placement, which then needs to re-run all the modifiers, because the
                            // logic was previously ran for the previous placement and is therefore
                            // stale/incorrect

                            state.reset = false;
                            state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                            // is filled with the initial data specified by the modifier. This means
                            // it doesn't persist and is fresh on each update.
                            // To ensure persistent data, use `${name}#persistent`

                            state.orderedModifiers.forEach(function (modifier) {
                                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                            });
                            var __debug_loops__ = 0;

                            for (var index = 0; index < state.orderedModifiers.length; index++) {
                                {
                                    __debug_loops__ += 1;

                                    if (__debug_loops__ > 100) {
                                        console.error(INFINITE_LOOP_ERROR);
                                        break;
                                    }
                                }

                                if (state.reset === true) {
                                    state.reset = false;
                                    index = -1;
                                    continue;
                                }

                                var _state$orderedModifie = state.orderedModifiers[index],
                                    fn = _state$orderedModifie.fn,
                                    _state$orderedModifie2 = _state$orderedModifie.options,
                                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                                    name = _state$orderedModifie.name;

                                if (typeof fn === 'function') {
                                    state = fn({
                                        state: state,
                                        options: _options,
                                        name: name,
                                        instance: instance
                                    }) || state;
                                }
                            }
                        },
                        // Async and optimistically optimized update – it will not be executed if
                        // not necessary (debounced to run at most once-per-tick)
                        update: debounce(function () {
                            return new Promise(function (resolve) {
                                instance.forceUpdate();
                                resolve(state);
                            });
                        }),
                        destroy: function destroy() {
                            cleanupModifierEffects();
                            isDestroyed = true;
                        }
                    };

                    if (!areValidElements(reference, popper)) {
                        {
                            console.error(INVALID_ELEMENT_ERROR);
                        }

                        return instance;
                    }

                    instance.setOptions(options).then(function (state) {
                        if (!isDestroyed && options.onFirstUpdate) {
                            options.onFirstUpdate(state);
                        }
                    }); // Modifiers have the ability to execute arbitrary code before the first
                    // update cycle runs. They will be executed in the same order as the update
                    // cycle. This is useful when a modifier adds some persistent data that
                    // other modifiers need to use, but the modifier is run after the dependent
                    // one.

                    function runModifierEffects() {
                        state.orderedModifiers.forEach(function (_ref3) {
                            var name = _ref3.name,
                                _ref3$options = _ref3.options,
                                options = _ref3$options === void 0 ? {} : _ref3$options,
                                effect = _ref3.effect;

                            if (typeof effect === 'function') {
                                var cleanupFn = effect({
                                    state: state,
                                    name: name,
                                    instance: instance,
                                    options: options
                                });

                                var noopFn = function noopFn() { };

                                effectCleanupFns.push(cleanupFn || noopFn);
                            }
                        });
                    }

                    function cleanupModifierEffects() {
                        effectCleanupFns.forEach(function (fn) {
                            return fn();
                        });
                        effectCleanupFns = [];
                    }

                    return instance;
                };
            }

            var passive = {
                passive: true
            };

            function effect(_ref) {
                var state = _ref.state,
                    instance = _ref.instance,
                    options = _ref.options;
                var _options$scroll = options.scroll,
                    scroll = _options$scroll === void 0 ? true : _options$scroll,
                    _options$resize = options.resize,
                    resize = _options$resize === void 0 ? true : _options$resize;
                var window = getWindow(state.elements.popper);
                var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

                if (scroll) {
                    scrollParents.forEach(function (scrollParent) {
                        scrollParent.addEventListener('scroll', instance.update, passive);
                    });
                }

                if (resize) {
                    window.addEventListener('resize', instance.update, passive);
                }

                return function () {
                    if (scroll) {
                        scrollParents.forEach(function (scrollParent) {
                            scrollParent.removeEventListener('scroll', instance.update, passive);
                        });
                    }

                    if (resize) {
                        window.removeEventListener('resize', instance.update, passive);
                    }
                };
            } // eslint-disable-next-line import/no-unused-modules


            var eventListeners = {
                name: 'eventListeners',
                enabled: true,
                phase: 'write',
                fn: function fn() { },
                effect: effect,
                data: {}
            };

            function popperOffsets(_ref) {
                var state = _ref.state,
                    name = _ref.name;
                // Offsets are the actual position the popper needs to have to be
                // properly positioned near its reference element
                // This is the most basic placement, and will be adjusted by
                // the modifiers in the next step
                state.modifiersData[name] = computeOffsets({
                    reference: state.rects.reference,
                    element: state.rects.popper,
                    strategy: 'absolute',
                    placement: state.placement
                });
            } // eslint-disable-next-line import/no-unused-modules


            var popperOffsets$1 = {
                name: 'popperOffsets',
                enabled: true,
                phase: 'read',
                fn: popperOffsets,
                data: {}
            };

            var unsetSides = {
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                left: 'auto'
            }; // Round the offsets to the nearest suitable subpixel based on the DPR.
            // Zooming can change the DPR, but it seems to report a value that will
            // cleanly divide the values into the appropriate subpixels.

            function roundOffsets(_ref) {
                var x = _ref.x,
                    y = _ref.y;
                var win = window;
                var dpr = win.devicePixelRatio || 1;
                return {
                    x: Math.round(x * dpr) / dpr || 0,
                    y: Math.round(y * dpr) / dpr || 0
                };
            }

            function mapToStyles(_ref2) {
                var _Object$assign2;

                var popper = _ref2.popper,
                    popperRect = _ref2.popperRect,
                    placement = _ref2.placement,
                    offsets = _ref2.offsets,
                    position = _ref2.position,
                    gpuAcceleration = _ref2.gpuAcceleration,
                    adaptive = _ref2.adaptive;

                var _roundOffsets = roundOffsets(offsets),
                    x = _roundOffsets.x,
                    y = _roundOffsets.y;

                var hasX = offsets.hasOwnProperty('x');
                var hasY = offsets.hasOwnProperty('y');
                var sideX = left;
                var sideY = top;
                var win = window;

                if (adaptive) {
                    var offsetParent = getOffsetParent(popper);

                    if (offsetParent === getWindow(popper)) {
                        offsetParent = getDocumentElement(popper);
                    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

                    /*:: offsetParent = (offsetParent: Element); */


                    if (placement === top) {
                        sideY = bottom;
                        y -= offsetParent.clientHeight - popperRect.height;
                        y *= gpuAcceleration ? 1 : -1;
                    }

                    if (placement === left) {
                        sideX = right;
                        x -= offsetParent.clientWidth - popperRect.width;
                        x *= gpuAcceleration ? 1 : -1;
                    }
                }

                var commonStyles = Object.assign({
                    position: position
                }, adaptive && unsetSides);

                if (gpuAcceleration) {
                    var _Object$assign;

                    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
                }

                return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
            }

            function computeStyles(_ref3) {
                var state = _ref3.state,
                    options = _ref3.options;
                var _options$gpuAccelerat = options.gpuAcceleration,
                    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
                    _options$adaptive = options.adaptive,
                    adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

                {
                    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

                    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
                        return transitionProperty.indexOf(property) >= 0;
                    })) {
                        console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
                    }
                }

                var commonStyles = {
                    placement: getBasePlacement(state.placement),
                    popper: state.elements.popper,
                    popperRect: state.rects.popper,
                    gpuAcceleration: gpuAcceleration
                };

                if (state.modifiersData.popperOffsets != null) {
                    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
                        offsets: state.modifiersData.popperOffsets,
                        position: state.options.strategy,
                        adaptive: adaptive
                    })));
                }

                if (state.modifiersData.arrow != null) {
                    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
                        offsets: state.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: false
                    })));
                }

                state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
                    'data-popper-placement': state.placement
                });
            } // eslint-disable-next-line import/no-unused-modules


            var computeStyles$1 = {
                name: 'computeStyles',
                enabled: true,
                phase: 'beforeWrite',
                fn: computeStyles,
                data: {}
            };

            // and applies them to the HTMLElements such as popper and arrow

            function applyStyles(_ref) {
                var state = _ref.state;
                Object.keys(state.elements).forEach(function (name) {
                    var style = state.styles[name] || {};
                    var attributes = state.attributes[name] || {};
                    var element = state.elements[name]; // arrow is optional + virtual elements

                    if (!isHTMLElement(element) || !getNodeName(element)) {
                        return;
                    } // Flow doesn't support to extend this property, but it's the most
                    // effective way to apply styles to an HTMLElement
                    // $FlowFixMe


                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach(function (name) {
                        var value = attributes[name];

                        if (value === false) {
                            element.removeAttribute(name);
                        } else {
                            element.setAttribute(name, value === true ? '' : value);
                        }
                    });
                });
            }

            function effect$1(_ref2) {
                var state = _ref2.state;
                var initialStyles = {
                    popper: {
                        position: state.options.strategy,
                        left: '0',
                        top: '0',
                        margin: '0'
                    },
                    arrow: {
                        position: 'absolute'
                    },
                    reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);

                if (state.elements.arrow) {
                    Object.assign(state.elements.arrow.style, initialStyles.arrow);
                }

                return function () {
                    Object.keys(state.elements).forEach(function (name) {
                        var element = state.elements[name];
                        var attributes = state.attributes[name] || {};
                        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

                        var style = styleProperties.reduce(function (style, property) {
                            style[property] = '';
                            return style;
                        }, {}); // arrow is optional + virtual elements

                        if (!isHTMLElement(element) || !getNodeName(element)) {
                            return;
                        } // Flow doesn't support to extend this property, but it's the most
                        // effective way to apply styles to an HTMLElement
                        // $FlowFixMe


                        Object.assign(element.style, style);
                        Object.keys(attributes).forEach(function (attribute) {
                            element.removeAttribute(attribute);
                        });
                    });
                };
            } // eslint-disable-next-line import/no-unused-modules


            var applyStyles$1 = {
                name: 'applyStyles',
                enabled: true,
                phase: 'write',
                fn: applyStyles,
                effect: effect$1,
                requires: ['computeStyles']
            };

            function distanceAndSkiddingToXY(placement, rects, offset) {
                var basePlacement = getBasePlacement(placement);
                var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

                var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
                    placement: placement
                })) : offset,
                    skidding = _ref[0],
                    distance = _ref[1];

                skidding = skidding || 0;
                distance = (distance || 0) * invertDistance;
                return [left, right].indexOf(basePlacement) >= 0 ? {
                    x: distance,
                    y: skidding
                } : {
                    x: skidding,
                    y: distance
                };
            }

            function offset(_ref2) {
                var state = _ref2.state,
                    options = _ref2.options,
                    name = _ref2.name;
                var _options$offset = options.offset,
                    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
                var data = placements.reduce(function (acc, placement) {
                    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                    return acc;
                }, {});
                var _data$state$placement = data[state.placement],
                    x = _data$state$placement.x,
                    y = _data$state$placement.y;

                if (state.modifiersData.popperOffsets != null) {
                    state.modifiersData.popperOffsets.x += x;
                    state.modifiersData.popperOffsets.y += y;
                }

                state.modifiersData[name] = data;
            } // eslint-disable-next-line import/no-unused-modules


            var offset$1 = {
                name: 'offset',
                enabled: true,
                phase: 'main',
                requires: ['popperOffsets'],
                fn: offset
            };

            var hash = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom'
            };
            function getOppositePlacement(placement) {
                return placement.replace(/left|right|bottom|top/g, function (matched) {
                    return hash[matched];
                });
            }

            var hash$1 = {
                start: 'end',
                end: 'start'
            };
            function getOppositeVariationPlacement(placement) {
                return placement.replace(/start|end/g, function (matched) {
                    return hash$1[matched];
                });
            }

            /*:: type OverflowsMap = { [ComputedPlacement]: number }; */

            /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
            function computeAutoPlacement(state, options) {
                if (options === void 0) {
                    options = {};
                }

                var _options = options,
                    placement = _options.placement,
                    boundary = _options.boundary,
                    rootBoundary = _options.rootBoundary,
                    padding = _options.padding,
                    flipVariations = _options.flipVariations,
                    _options$allowedAutoP = _options.allowedAutoPlacements,
                    allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
                var variation = getVariation(placement);
                var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
                    return getVariation(placement) === variation;
                }) : basePlacements; // $FlowFixMe

                var allowedPlacements = placements$1.filter(function (placement) {
                    return allowedAutoPlacements.indexOf(placement) >= 0;
                });

                if (allowedPlacements.length === 0) {
                    allowedPlacements = placements$1;

                    {
                        console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
                    }
                } // $FlowFixMe: Flow seems to have problems with two array unions...


                var overflows = allowedPlacements.reduce(function (acc, placement) {
                    acc[placement] = detectOverflow(state, {
                        placement: placement,
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        padding: padding
                    })[getBasePlacement(placement)];
                    return acc;
                }, {});
                return Object.keys(overflows).sort(function (a, b) {
                    return overflows[a] - overflows[b];
                });
            }

            function getExpandedFallbackPlacements(placement) {
                if (getBasePlacement(placement) === auto) {
                    return [];
                }

                var oppositePlacement = getOppositePlacement(placement);
                return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
            }

            function flip(_ref) {
                var state = _ref.state,
                    options = _ref.options,
                    name = _ref.name;

                if (state.modifiersData[name]._skip) {
                    return;
                }

                var _options$mainAxis = options.mainAxis,
                    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                    _options$altAxis = options.altAxis,
                    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
                    specifiedFallbackPlacements = options.fallbackPlacements,
                    padding = options.padding,
                    boundary = options.boundary,
                    rootBoundary = options.rootBoundary,
                    altBoundary = options.altBoundary,
                    _options$flipVariatio = options.flipVariations,
                    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
                    allowedAutoPlacements = options.allowedAutoPlacements;
                var preferredPlacement = state.options.placement;
                var basePlacement = getBasePlacement(preferredPlacement);
                var isBasePlacement = basePlacement === preferredPlacement;
                var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
                var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
                    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                        placement: placement,
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        padding: padding,
                        flipVariations: flipVariations,
                        allowedAutoPlacements: allowedAutoPlacements
                    }) : placement);
                }, []);
                var referenceRect = state.rects.reference;
                var popperRect = state.rects.popper;
                var checksMap = new Map();
                var makeFallbackChecks = true;
                var firstFittingPlacement = placements[0];

                for (var i = 0; i < placements.length; i++) {
                    var placement = placements[i];

                    var _basePlacement = getBasePlacement(placement);

                    var isStartVariation = getVariation(placement) === start;
                    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
                    var len = isVertical ? 'width' : 'height';
                    var overflow = detectOverflow(state, {
                        placement: placement,
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        altBoundary: altBoundary,
                        padding: padding
                    });
                    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

                    if (referenceRect[len] > popperRect[len]) {
                        mainVariationSide = getOppositePlacement(mainVariationSide);
                    }

                    var altVariationSide = getOppositePlacement(mainVariationSide);
                    var checks = [];

                    if (checkMainAxis) {
                        checks.push(overflow[_basePlacement] <= 0);
                    }

                    if (checkAltAxis) {
                        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                    }

                    if (checks.every(function (check) {
                        return check;
                    })) {
                        firstFittingPlacement = placement;
                        makeFallbackChecks = false;
                        break;
                    }

                    checksMap.set(placement, checks);
                }

                if (makeFallbackChecks) {
                    // `2` may be desired in some cases – research later
                    var numberOfChecks = flipVariations ? 3 : 1;

                    var _loop = function _loop(_i) {
                        var fittingPlacement = placements.find(function (placement) {
                            var checks = checksMap.get(placement);

                            if (checks) {
                                return checks.slice(0, _i).every(function (check) {
                                    return check;
                                });
                            }
                        });

                        if (fittingPlacement) {
                            firstFittingPlacement = fittingPlacement;
                            return "break";
                        }
                    };

                    for (var _i = numberOfChecks; _i > 0; _i--) {
                        var _ret = _loop(_i);

                        if (_ret === "break") break;
                    }
                }

                if (state.placement !== firstFittingPlacement) {
                    state.modifiersData[name]._skip = true;
                    state.placement = firstFittingPlacement;
                    state.reset = true;
                }
            } // eslint-disable-next-line import/no-unused-modules


            var flip$1 = {
                name: 'flip',
                enabled: true,
                phase: 'main',
                fn: flip,
                requiresIfExists: ['offset'],
                data: {
                    _skip: false
                }
            };

            function getAltAxis(axis) {
                return axis === 'x' ? 'y' : 'x';
            }

            function within(min, value, max) {
                return Math.max(min, Math.min(value, max));
            }

            function preventOverflow(_ref) {
                var state = _ref.state,
                    options = _ref.options,
                    name = _ref.name;
                var _options$mainAxis = options.mainAxis,
                    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                    _options$altAxis = options.altAxis,
                    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
                    boundary = options.boundary,
                    rootBoundary = options.rootBoundary,
                    altBoundary = options.altBoundary,
                    padding = options.padding,
                    _options$tether = options.tether,
                    tether = _options$tether === void 0 ? true : _options$tether,
                    _options$tetherOffset = options.tetherOffset,
                    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
                var overflow = detectOverflow(state, {
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding,
                    altBoundary: altBoundary
                });
                var basePlacement = getBasePlacement(state.placement);
                var variation = getVariation(state.placement);
                var isBasePlacement = !variation;
                var mainAxis = getMainAxisFromPlacement(basePlacement);
                var altAxis = getAltAxis(mainAxis);
                var popperOffsets = state.modifiersData.popperOffsets;
                var referenceRect = state.rects.reference;
                var popperRect = state.rects.popper;
                var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
                    placement: state.placement
                })) : tetherOffset;
                var data = {
                    x: 0,
                    y: 0
                };

                if (!popperOffsets) {
                    return;
                }

                if (checkMainAxis) {
                    var mainSide = mainAxis === 'y' ? top : left;
                    var altSide = mainAxis === 'y' ? bottom : right;
                    var len = mainAxis === 'y' ? 'height' : 'width';
                    var offset = popperOffsets[mainAxis];
                    var min = popperOffsets[mainAxis] + overflow[mainSide];
                    var max = popperOffsets[mainAxis] - overflow[altSide];
                    var additive = tether ? -popperRect[len] / 2 : 0;
                    var minLen = variation === start ? referenceRect[len] : popperRect[len];
                    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
                    // outside the reference bounds

                    var arrowElement = state.elements.arrow;
                    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                        width: 0,
                        height: 0
                    };
                    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
                    var arrowPaddingMin = arrowPaddingObject[mainSide];
                    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
                    // to include its full size in the calculation. If the reference is small
                    // and near the edge of a boundary, the popper can overflow even if the
                    // reference is not overflowing as well (e.g. virtual elements with no
                    // width or height)

                    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
                    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
                    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
                    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
                    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
                    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
                    popperOffsets[mainAxis] = preventedOffset;
                    data[mainAxis] = preventedOffset - offset;
                }

                if (checkAltAxis) {
                    var _mainSide = mainAxis === 'x' ? top : left;

                    var _altSide = mainAxis === 'x' ? bottom : right;

                    var _offset = popperOffsets[altAxis];

                    var _min = _offset + overflow[_mainSide];

                    var _max = _offset - overflow[_altSide];

                    var _preventedOffset = within(_min, _offset, _max);

                    popperOffsets[altAxis] = _preventedOffset;
                    data[altAxis] = _preventedOffset - _offset;
                }

                state.modifiersData[name] = data;
            } // eslint-disable-next-line import/no-unused-modules


            var preventOverflow$1 = {
                name: 'preventOverflow',
                enabled: true,
                phase: 'main',
                fn: preventOverflow,
                requiresIfExists: ['offset']
            };

            function arrow(_ref) {
                var _state$modifiersData$;

                var state = _ref.state,
                    name = _ref.name;
                var arrowElement = state.elements.arrow;
                var popperOffsets = state.modifiersData.popperOffsets;
                var basePlacement = getBasePlacement(state.placement);
                var axis = getMainAxisFromPlacement(basePlacement);
                var isVertical = [left, right].indexOf(basePlacement) >= 0;
                var len = isVertical ? 'height' : 'width';

                if (!arrowElement || !popperOffsets) {
                    return;
                }

                var paddingObject = state.modifiersData[name + "#persistent"].padding;
                var arrowRect = getLayoutRect(arrowElement);
                var minProp = axis === 'y' ? top : left;
                var maxProp = axis === 'y' ? bottom : right;
                var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
                var startDiff = popperOffsets[axis] - state.rects.reference[axis];
                var arrowOffsetParent = getOffsetParent(arrowElement);
                var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
                var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
                // outside of the popper bounds

                var min = paddingObject[minProp];
                var max = clientSize - arrowRect[len] - paddingObject[maxProp];
                var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
                var offset = within(min, center, max); // Prevents breaking syntax highlighting...

                var axisProp = axis;
                state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
            }

            function effect$2(_ref2) {
                var state = _ref2.state,
                    options = _ref2.options,
                    name = _ref2.name;
                var _options$element = options.element,
                    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
                    _options$padding = options.padding,
                    padding = _options$padding === void 0 ? 0 : _options$padding;

                if (arrowElement == null) {
                    return;
                } // CSS selector


                if (typeof arrowElement === 'string') {
                    arrowElement = state.elements.popper.querySelector(arrowElement);

                    if (!arrowElement) {
                        return;
                    }
                }

                {
                    if (!isHTMLElement(arrowElement)) {
                        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
                    }
                }

                if (!contains(state.elements.popper, arrowElement)) {
                    {
                        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
                    }

                    return;
                }

                state.elements.arrow = arrowElement;
                state.modifiersData[name + "#persistent"] = {
                    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
                };
            } // eslint-disable-next-line import/no-unused-modules


            var arrow$1 = {
                name: 'arrow',
                enabled: true,
                phase: 'main',
                fn: arrow,
                effect: effect$2,
                requires: ['popperOffsets'],
                requiresIfExists: ['preventOverflow']
            };

            function getSideOffsets(overflow, rect, preventedOffsets) {
                if (preventedOffsets === void 0) {
                    preventedOffsets = {
                        x: 0,
                        y: 0
                    };
                }

                return {
                    top: overflow.top - rect.height - preventedOffsets.y,
                    right: overflow.right - rect.width + preventedOffsets.x,
                    bottom: overflow.bottom - rect.height + preventedOffsets.y,
                    left: overflow.left - rect.width - preventedOffsets.x
                };
            }

            function isAnySideFullyClipped(overflow) {
                return [top, right, bottom, left].some(function (side) {
                    return overflow[side] >= 0;
                });
            }

            function hide(_ref) {
                var state = _ref.state,
                    name = _ref.name;
                var referenceRect = state.rects.reference;
                var popperRect = state.rects.popper;
                var preventedOffsets = state.modifiersData.preventOverflow;
                var referenceOverflow = detectOverflow(state, {
                    elementContext: 'reference'
                });
                var popperAltOverflow = detectOverflow(state, {
                    altBoundary: true
                });
                var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
                var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
                var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
                var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
                state.modifiersData[name] = {
                    referenceClippingOffsets: referenceClippingOffsets,
                    popperEscapeOffsets: popperEscapeOffsets,
                    isReferenceHidden: isReferenceHidden,
                    hasPopperEscaped: hasPopperEscaped
                };
                state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
                    'data-popper-reference-hidden': isReferenceHidden,
                    'data-popper-escaped': hasPopperEscaped
                });
            } // eslint-disable-next-line import/no-unused-modules


            var hide$1 = {
                name: 'hide',
                enabled: true,
                phase: 'main',
                requiresIfExists: ['preventOverflow'],
                fn: hide
            };

            var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
            var createPopper = /*#__PURE__*/popperGenerator({
                defaultModifiers: defaultModifiers
            }); // eslint-disable-next-line import/no-unused-modules

            var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
            var createPopper$1 = /*#__PURE__*/popperGenerator({
                defaultModifiers: defaultModifiers$1
            }); // eslint-disable-next-line import/no-unused-modules

            exports.applyStyles = applyStyles$1;
            exports.arrow = arrow$1;
            exports.computeStyles = computeStyles$1;
            exports.createPopper = createPopper$1;
            exports.createPopperLite = createPopper;
            exports.defaultModifiers = defaultModifiers$1;
            exports.detectOverflow = detectOverflow;
            exports.eventListeners = eventListeners;
            exports.flip = flip$1;
            exports.hide = hide$1;
            exports.offset = offset$1;
            exports.popperGenerator = popperGenerator;
            exports.popperOffsets = popperOffsets$1;
            exports.preventOverflow = preventOverflow$1;

            Object.defineProperty(exports, '__esModule', { value: true });

        })));
//# sourceMappingURL=popper.js.mapaa
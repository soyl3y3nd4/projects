/*! jQuery v4.0.0-pre | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(J, e) { "use strict"; var g = [],
        r = Object.getPrototypeOf,
        s = g.slice,
        h = g.flat ? function(e) { return g.flat.call(e) } : function(e) { return g.concat.apply([], e) },
        K = g.push,
        Z = g.indexOf,
        n = {},
        i = n.toString,
        v = n.hasOwnProperty,
        o = v.toString,
        a = o.call(Object);

    function y(e) { return null != e && e === e.window } var C = J.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function m(e, t, n) { var r, i = (n = n || C).createElement("script"); if (i.text = e, t)
            for (r in u) t[r] && (i[r] = t[r]);
        n.head.appendChild(i).parentNode.removeChild(i) }

    function x(e) { return null == e ? e + "" : "object" == typeof e ? n[i.call(e)] || "object" : typeof e } var t = "4.0.0-pre a503c691dc06c59acdafef6e54eca2613c6e4032",
        l = /HTML$/i,
        ee = function(e, t) { return new ee.fn.init(e, t) };

    function c(e) { var t = !!e && e.length,
            n = x(e); return "function" != typeof e && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }

    function te(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    ee.fn = ee.prototype = { jquery: t, constructor: ee, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = ee.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return ee.each(this, e) }, map: function(n) { return this.pushStack(ee.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(ee.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(ee.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() } }, ee.extend = ee.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" != typeof a && "function" != typeof a && (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ee.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ee.isPlainObject(n) ? n : {}, i = !1, a[t] = ee.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, ee.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && o.call(n) === a) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { m(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (c(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, text: function(e) { var t, n = "",
                r = 0,
                i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) return e.textContent; if (3 === i || 4 === i) return e.nodeValue } else
                while (t = e[r++]) n += ee.text(t); return n }, makeArray: function(e, t) { var n = t || []; return null != e && (c(Object(e)) ? ee.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : Z.call(t, e, n) }, isXMLDoc: function(e) { var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement; return !l.test(t || n && n.nodeName || "HTML") }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return h(a) }, guid: 1, support: {} }), "function" == typeof Symbol && (ee.fn[Symbol.iterator] = g[Symbol.iterator]), ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var b = C.documentElement,
        ne = g.pop,
        re = "[\\x20\\t\\r\\n\\f]",
        ie = C.documentMode,
        oe = ie && new RegExp(":enabled|:disabled|\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")");
    ee.contains = function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) }; var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }
    ee.escapeSelector = function(e) { return (e + "").replace(f, p) }; var d, w = g.sort;

    function T(e, t) { if (e === t) return d = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ? e == C || e.ownerDocument == C && ee.contains(C, e) ? -1 : t == C || t.ownerDocument == C && ee.contains(C, t) ? 1 : 0 : 4 & n ? -1 : 1) }
    ee.uniqueSort = function(e) { var t, n = [],
            r = 0,
            i = 0; if (d = !1, w.call(e, T), d) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return e }; var ae = C,
        se = b.matches || b.msMatchesSelector;

    function j(e, t, n) { var r = [],
            i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) { if (i && ee(e).is(n)) break;
                r.push(e) }
        return r }

    function k(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n }! function() { var e, x, b, w, r, T, C = ee.expando,
            j = 0,
            n = 0,
            i = H(),
            c = H(),
            s = H(),
            d = H(),
            t = "(?:\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            o = "\\[" + re + "*(" + t + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + re + "*\\]",
            a = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + o + ")*)|.*)\\)|)",
            u = new RegExp(re + "+", "g"),
            h = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            f = new RegExp("^" + re + "*," + re + "*"),
            g = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            v = new RegExp(re + "|>"),
            l = new RegExp(a),
            p = new RegExp("^" + t + "$"),
            y = { ID: new RegExp("^#(" + t + ")"), CLASS: new RegExp("^\\.(" + t + ")"), TAG: new RegExp("^(" + t + "|[*])"), ATTR: new RegExp("^" + o), PSEUDO: new RegExp("^" + a), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"), bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i") },
            m = /^(?:input|select|textarea|button)$/i,
            k = /^h\d$/i,
            E = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            S = /[+~]/,
            D = new RegExp("\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])", "g"),
            A = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            q = function() { F() },
            N = X(function(e) { return !0 === e.disabled && te(e, "fieldset") }, { dir: "parentNode", next: "legend" });

        function O(e) { throw new Error("Syntax error, unrecognized expression: " + e) }

        function L(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (F(e), e = e || w, T)) { if (11 !== p && (u = E.exec(t)))
                    if (i = u[1]) { if (9 === p) return (a = e.getElementById(i)) && K.call(n, a), n; if (f && (a = f.getElementById(i)) && ee.contains(e, a)) return K.call(n, a), n } else { if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(i)), n }
                if (!(d[t + " "] || oe && oe.test(t))) { if (c = t, f = e, 1 === p && (v.test(t) || g.test(t))) {
                        ((f = S.test(t) && I(e.parentNode) || e) !== e || ie) && ((s = e.getAttribute("id")) ? s = ee.escapeSelector(s) : e.setAttribute("id", s = C)), o = (l = _(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + U(l[o]);
                        c = l.join(",") } try { return K.apply(n, f.querySelectorAll(c)), n } catch (e) { d(t, !0) } finally { s === C && e.removeAttribute("id") } } } return function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && _(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && x.relative[o[1].type]) { if (!(t = (x.find.ID(a.matches[0].replace(D, A), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                    i = y.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], x.relative[s = a.type]) break; if ((u = x.find[s]) && (r = u(a.matches[0].replace(D, A), S.test(o[0].type) && I(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && U(o))) return K.apply(n, r), n; break } } } return (l || Q(e, c))(r, t, !T, n, !t || S.test(e) && I(t.parentNode) || t), n }(t.replace(h, "$1"), e, n, r) }

        function H() { var r = []; return function e(t, n) { return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function P(e) { return e[C] = !0, e }

        function R(t) { return function(e) { return te(e, "input") && e.type === t } }

        function M(t) { return function(e) { return (te(e, "input") || te(e, "button")) && e.type === t } }

        function W(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && N(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function $(a) { return P(function(o) { return o = +o, P(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function I(e) { return e && void 0 !== e.getElementsByTagName && e }

        function F(e) { var t, n = e ? e.ownerDocument || e : ae;
            n != w && 9 === n.nodeType && (r = (w = n).documentElement, T = !ee.isXMLDoc(w), ie && ae != w && (t = w.defaultView) && t.top !== t && t.addEventListener("unload", q)) } for (e in L.matches = function(e, t) { return L(e, null, null, t) }, L.matchesSelector = function(e, t) { if (F(e), T && !d[t + " "] && (!oe || !oe.test(t))) try { return se.call(e, t) } catch (e) { d(t, !0) }
                return 0 < L(t, w, null, [e]).length }, (x = ee.expr = { cacheLength: 50, createPseudo: P, match: y, find: { ID: function(e, t) { if (void 0 !== t.getElementById && T) { var n = t.getElementById(e); return n ? [n] : [] } }, TAG: function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e) }, CLASS: function(e, t) { if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e) } }, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(D, A), e[3] = (e[3] || e[4] || e[5] || "").replace(D, A), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || O(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && O(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && l.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { ID: function(e) { var t = e.replace(D, A); return function(e) { return e.getAttribute("id") === t } }, TAG: function(e) { var t = e.replace(D, A).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return te(e, t) } }, CLASS: function(e) { var t = i[e + " "]; return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && i(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = ee.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(u, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(d, e, t, h, g) { var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e; return 1 === h && 0 === g ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1; if (l) { if (v) { while (u) { o = e; while (o = o[u])
                                            if (m ? te(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling" } return !0 } if (s = [y ? l.firstChild : l.lastChild], y && f) { p = (a = (r = (i = l[C] || (l[C] = {}))[d] || [])[0] === j && r[1]) && r[2], o = a && l.childNodes[a]; while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) { i[d] = [j, a, p]; break } } else if (f && (p = a = (r = (i = e[C] || (e[C] = {}))[d] || [])[0] === j && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? te(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[C] || (o[C] = {}))[d] = [j, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h } } }, PSEUDO: function(e, o) { var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || O("unsupported pseudo: " + e); return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? P(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = Z.call(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: P(function(e) { var r = [],
                            i = [],
                            s = Q(e.replace(h, "$1")); return s[C] ? P(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: P(function(t) { return function(e) { return 0 < L(t, e).length } }), contains: P(function(t) { return t = t.replace(D, A),
                            function(e) { return -1 < (e.textContent || ee.text(e)).indexOf(t) } }), lang: P(function(n) { return p.test(n || "") || O("unsupported lang: " + n), n = n.replace(D, A).toLowerCase(),
                            function(e) { var t;
                                do { if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = J.location && J.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === r }, focus: function(e) { return e === w.activeElement && w.hasFocus() && !!(e.type || e.href || ~e.tabIndex) }, enabled: W(!1), disabled: W(!0), checked: function(e) { return te(e, "input") && !!e.checked || te(e, "option") && !!e.selected }, selected: function(e) { return ie && e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !x.pseudos.empty(e) }, header: function(e) { return k.test(e.nodeName) }, input: function(e) { return m.test(e.nodeName) }, button: function(e) { return te(e, "input") && "button" === e.type || te(e, "button") }, text: function(e) { return te(e, "input") && "text" === e.type }, first: $(function() { return [0] }), last: $(function(e, t) { return [t - 1] }), eq: $(function(e, t, n) { return [n < 0 ? n + t : n] }), even: $(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: $(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: $(function(e, t, n) { var r; for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: $(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = x.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[e] = R(e); for (e in { submit: !0, reset: !0 }) x.pseudos[e] = M(e);

        function B() {}

        function _(e, t) { var n, r, i, o, a, s, u, l = c[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = x.preFilter; while (a) { for (o in n && !(r = f.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = g.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(h, " ") }), a = a.slice(n.length)), x.filter) !(r = y[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? O(e) : c(e, s).slice(0) }

        function U(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function X(a, e, t) { var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++; return e.first ? function(e, t, n) { while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o = [j, f]; if (n) { while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0 } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[C] || (e[C] = {}), u && te(e, u)) e = e[s] || e;
                            else { if ((r = i[l]) && r[0] === j && r[1] === f) return o[2] = r[2]; if ((i[l] = o)[2] = a(e, t, n)) return !0 } return !1 } }

        function z(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function V(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Y(d, h, g, v, y, e) { return v && !v[C] && (v = Y(v)), y && !y[C] && (y = Y(y, e)), P(function(e, t, n, r) { var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) L(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : V(f, u, d, n, r); if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) { i = V(s, l), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = s.length; while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r) }
                        o = s.length; while (o--)(a = s[o]) && -1 < (i = y ? Z.call(e, a) : u[o]) && (e[i] = !(t[i] = a)) } } else s = V(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : K.apply(t, s) }) }

        function G(e) { for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = X(function(e) { return e === i }, a, !0), l = X(function(e) { return -1 < Z.call(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== b) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [X(z(c), t)];
                else { if ((t = x.filter[e[s].type].apply(null, e[s].matches))[C]) { for (n = ++s; n < r; n++)
                            if (x.relative[e[n].type]) break;
                        return Y(1 < s && z(c), 1 < s && U(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(h, "$1"), t, s < n && G(e.slice(s, n)), n < r && G(e = e.slice(n)), n < r && U(e)) }
                    c.push(t) }
            return z(c) }

        function Q(e, t) { var n, g, v, y, m, r, i = [],
                o = [],
                a = s[e + " "]; if (!a) { t || (t = _(e)), n = t.length; while (n--)(a = G(t[n]))[C] ? i.push(a) : o.push(a);
                (a = s(e, (g = o, y = 0 < (v = i).length, m = 0 < g.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = b,
                        d = e || m && x.find.TAG("*", i),
                        h = j += null == p ? 1 : Math.random() || .1; for (i && (b = t == w || t || i); null != (o = d[l]); l++) { if (m && o) { a = 0, t || o.ownerDocument == w || (F(o), n = !T); while (s = g[a++])
                                if (s(o, t || w, n)) { K.call(r, o); break }
                            i && (j = h) }
                        y && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, y && l !== u) { a = 0; while (s = v[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = ne.call(r));
                            f = V(f) }
                        K.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && ee.uniqueSort(r) } return i && (j = h, b = p), c }, y ? P(r) : r))).selector = e } return a }
        B.prototype = x.filters = x.pseudos, x.setFilters = new B, F(), ee.find = L }(); var E = ee.expr.match.needsContext,
        S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return "function" == typeof n ? ee.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? ee.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? ee.grep(e, function(e) { return -1 < Z.call(n, e) !== r }) : ee.filter(n, e, r) }
    ee.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ee.find.matchesSelector(r, e) ? [r] : [] : ee.find.matches(e, ee.grep(t, function(e) { return 1 === e.nodeType })) }, ee.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(ee(e).filter(function() { for (t = 0; t < r; t++)
                    if (ee.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) ee.find(e, i[t], n); return 1 < r ? ee.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && E.test(e) ? ee(e) : e || [], !1).length } }); var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ee.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || A, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof ee ? t[0] : t, ee.merge(this, ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), S.test(r[1]) && ee.isPlainObject(t))
                    for (r in t) "function" == typeof this[r] ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : "function" == typeof e ? void 0 !== n.ready ? n.ready(e) : e(ee) : ee.makeArray(e, this) }).prototype = ee.fn, A = ee(C); var N = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };

    function L(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    ee.fn.extend({ has: function(e) { var t = ee(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (ee.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ee(e); if (!E.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ee.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? ee.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? Z.call(ee(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(ee.uniqueSort(ee.merge(this.get(), ee(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ee.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return j(e, "parentNode") }, parentsUntil: function(e, t, n) { return j(e, "parentNode", n) }, next: function(e) { return L(e, "nextSibling") }, prev: function(e) { return L(e, "previousSibling") }, nextAll: function(e) { return j(e, "nextSibling") }, prevAll: function(e) { return j(e, "previousSibling") }, nextUntil: function(e, t, n) { return j(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return j(e, "previousSibling", n) }, siblings: function(e) { return k((e.parentNode || {}).firstChild, e) }, children: function(e) { return k(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (te(e, "template") && (e = e.content || e), ee.merge([], e.childNodes)) } }, function(r, i) { ee.fn[r] = function(e, t) { var n = ee.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ee.filter(t, n)), 1 < this.length && (O[r] || ee.uniqueSort(n), N.test(r) && n.reverse()), this.pushStack(n) } }); var H = /[^\x20\t\r\n\f]+/g;

    function P(e) { return e }

    function R(e) { throw e }

    function M(e, t, n, r) { var i; try { e && "function" == typeof(i = e.promise) ? i.call(e).done(t).fail(n) : e && "function" == typeof(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n(e) } }
    ee.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ee.each(e.match(H) || [], function(e, t) { n[t] = !0 }), n) : ee.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { ee.each(e, function(e, t) { "function" == typeof t ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return ee.each(arguments, function(e, t) { var n; while (-1 < (n = ee.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < ee.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, ee.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", ee.Callbacks("memory"), ee.Callbacks("memory"), 2],
                    ["resolve", "done", ee.Callbacks("once memory"), ee.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ee.Callbacks("once memory"), ee.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, catch: function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return ee.Deferred(function(r) { ee.each(o, function(e, t) { var n = "function" == typeof i[t[4]] && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && "function" == typeof e.promise ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); "function" == typeof(t = e && ("object" == typeof e || "function" == typeof e) && e.then) ? s ? t.call(e, l(u, o, P, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, R, s), l(u, o, P, o.notifyWith))): (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { ee.Deferred.exceptionHook && ee.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (ee.Deferred.getStackHook && (t.stackTrace = ee.Deferred.getStackHook()), J.setTimeout(t)) } } return ee.Deferred(function(e) { o[0][3].add(l(0, e, "function" == typeof r ? r : P, e.notifyWith)), o[1][3].add(l(0, e, "function" == typeof t ? t : P)), o[2][3].add(l(0, e, "function" == typeof n ? n : R)) }).promise() }, promise: function(e) { return null != e ? ee.extend(e, a) : a } },
                s = {}; return ee.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = ee.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || "function" == typeof(i[t] && i[t].then))) return o.then(); while (t--) M(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ee.Deferred.exceptionHook = function(e, t) { e && W.test(e.name) && J.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, ee.readyException = function(e) { J.setTimeout(function() { throw e }) }; var $ = ee.Deferred();

    function I() { C.removeEventListener("DOMContentLoaded", I), J.removeEventListener("load", I), ee.ready() }
    ee.fn.ready = function(e) { return $.then(e).catch(function(e) { ee.readyException(e) }), this }, ee.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --ee.readyWait : ee.isReady) || (ee.isReady = !0) !== e && 0 < --ee.readyWait || $.resolveWith(C, [ee]) } }), ee.ready.then = $.then, "loading" !== C.readyState ? J.setTimeout(ee.ready) : (C.addEventListener("DOMContentLoaded", I), J.addEventListener("load", I)); var F = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === x(n))
                for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, "function" != typeof r && (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(ee(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        B = /-([a-z])/g;

    function _(e, t) { return t.toUpperCase() }

    function U(e) { return e.replace(B, _) }

    function X(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }

    function z() { this.expando = ee.expando + z.uid++ }
    z.uid = 1, z.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = Object.create(null), X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(H) || []).length; while (n--) delete r[t[n]] }(void 0 === t || ee.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !ee.isEmptyObject(t) } }; var V = new z,
        Y = new z,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function ue(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : G.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Y.set(e, t, n) } else n = void 0;
        return n }
    ee.extend({ hasData: function(e) { return Y.hasData(e) || V.hasData(e) }, data: function(e, t, n) { return Y.access(e, t, n) }, removeData: function(e, t) { Y.remove(e, t) }, _data: function(e, t, n) { return V.access(e, t, n) }, _removeData: function(e, t) { V.remove(e, t) } }), ee.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Y.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), ue(o, r, i[r]));
                    V.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Y.set(this, n) }) : F(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Y.get(o, n)) ? t : void 0 !== (t = ue(o, n)) ? t : void 0;
                this.each(function() { Y.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Y.remove(this, e) }) } }), ee.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, ee.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = ee.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ee._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { ee.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return V.get(e, n) || V.access(e, n, { empty: ee.Callbacks("once memory").add(function() { V.remove(e, [t + "queue", n]) }) }) } }), ee.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ee.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = ee.queue(this, t, n);
                ee._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ee.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { ee.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = ee.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = V.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ce = new RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
        fe = ["Top", "Right", "Bottom", "Left"];

    function pe(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && "none" === ee.css(e, "display") } var de = /^[a-z]/,
        he = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;

    function ge(e) { return de.test(e) && he.test(e[0].toUpperCase() + e.slice(1)) }

    function ve(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return ee.css(e, t, "") },
            u = s(),
            l = n && n[3] || (ge(t) ? "px" : ""),
            c = e.nodeType && (!ge(t) || "px" !== l && +u) && ce.exec(ee.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) ee.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ee.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ye = /^-ms-/;

    function me(e) { return U(e.replace(ye, "ms-")) } var xe = {};

    function be(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = V.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && pe(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = xe[s]) || (o = a.body.appendChild(a.createElement(s)), u = ee.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), xe[s] = u)))) : "none" !== n && (l[c] = "none", V.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    ee.fn.extend({ show: function() { return be(this, !0) }, hide: function() { return be(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { pe(this) ? ee(this).show() : ee(this).hide() }) } }); var we = function(e) { return ee.contains(e.ownerDocument, e) || e.getRootNode(Te) === e.ownerDocument },
        Te = { composed: !0 };
    b.getRootNode || (we = function(e) { return ee.contains(e.ownerDocument, e) }); var Ce = we,
        je = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ke = /^$|^module$|\/(?:java|ecma)script/i,
        Ee = { thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], td: ["tr", "tbody", "table"] };

    function Se(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && te(e, t) ? ee.merge([e], n) : n }

    function De(e, t) { for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval")) }
    Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td; var Ae = /<|&#?\w+;/;

    function qe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ee.merge(p, o.nodeType ? [o] : o);
                else if (Ae.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), c = (u = Ee[s] || g).length; while (-1 < --c) a = a.appendChild(t.createElement(u[c]));
            a.innerHTML = ee.htmlPrefilter(o), ee.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < ee.inArray(o, r)) i && i.push(o);
            else if (l = Ce(o), a = Se(f.appendChild(o), "script"), l && De(a), n) { c = 0; while (o = a[c++]) ke.test(o.type || "") && n.push(o) } return f } var Ne = /^(?:checkbox|radio)$/i,
        Oe = /^([^.]*)(?:\.(.+)|)/;

    function Le() { return !0 }

    function He() { return !1 }

    function Pe(e, t) { return e === C.activeElement == ("focus" === t) }

    function Re(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Re(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = He;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return ee().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = ee.guid++)), e.each(function() { ee.event.add(this, t, i, r, n) }) }

    function Me(e, i, o) { o ? (V.set(e, i, !1), ee.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = V.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(ee.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), V.set(this, i, r), t = o(this, i), this[i](), r !== (n = V.get(this, i)) || t ? V.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (V.set(this, i, { value: ee.event.trigger(ee.extend(r[0], ee.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === V.get(e, i) && ee.event.add(e, i, Le) }
    ee.event = { add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = V.get(t); if (X(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && ee.find.matchesSelector(b, i), n.guid || (n.guid = ee.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return void 0 !== ee && ee.event.triggered !== e.type ? ee.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(H) || [""]).length; while (l--) d = g = (s = Oe.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ee.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ee.event.special[d] || {}, c = ee.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ee.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c)) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = V.hasData(e) && V.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(H) || [""]).length; while (l--)
                    if (d = g = (s = Oe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = ee.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ee.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) ee.event.remove(e, d + t[l], n, r, !0);
                ee.isEmptyObject(u) && V.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = ee.event.fix(e),
                l = (V.get(this, "events") || Object.create(null))[u.type] || [],
                c = ee.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = ee.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ee.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ee(i, this).index(l) : ee.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(ee.Event.prototype, t, { enumerable: !0, configurable: !0, get: "function" == typeof e ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[ee.expando] ? e : new ee.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return Ne.test(t.type) && t.click && te(t, "input") && Me(t, "click", Le), !1 }, trigger: function(e) { var t = this || e; return Ne.test(t.type) && t.click && te(t, "input") && Me(t, "click"), !0 }, _default: function(e) { var t = e.target; return Ne.test(t.type) && t.click && te(t, "input") && V.get(t, "click") || te(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, ee.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, ee.Event = function(e, t) { if (!(this instanceof ee.Event)) return new ee.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Le : He, this.target = e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ee.expando] = !0 }, ee.Event.prototype = { constructor: ee.Event, isDefaultPrevented: He, isPropagationStopped: He, isImmediatePropagationStopped: He, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Le, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Le, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Le, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, ee.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, ee.event.addProp), ee.each({ focus: "focusin", blur: "focusout" }, function(e, t) { ee.event.special[e] = { setup: function() { return Me(this, e, Pe), !1 }, trigger: function() { return Me(this, e), !0 }, delegateType: t } }), ee.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { ee.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || ee.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), ee.fn.extend({ on: function(e, t, n, r) { return Re(this, e, t, n, r) }, one: function(e, t, n, r) { return Re(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = He), this.each(function() { ee.event.remove(this, e, n, t) }) } }); var We = /<script|<style|<link/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) { return te(e, "table") && te(11 !== t.nodeType ? t : t.firstChild, "tr") && ee(e).children("tbody")[0] || e }

    function Fe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Be(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function _e(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (V.hasData(e) && (s = V.get(e).events))
                for (i in V.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ee.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e), a = ee.extend({}, o), Y.set(t, a)) } }

    function Ue(n, r, i, o) { r = h(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0]; if ("function" == typeof d) return n.each(function(e) { var t = n.eq(e);
            r[0] = d.call(this, e, t.html()), Ue(t, r, i, o) }); if (f && (t = (e = qe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = ee.map(Se(e, "script"), Fe)).length; c < f; c++) u = e, c !== p && (u = ee.clone(u, !0, !0), s && ee.merge(a, Se(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, ee.map(a, Be), c = 0; c < s; c++) u = a[c], ke.test(u.type || "") && !V.access(u, "globalEval") && ee.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ee._evalUrl && !u.noModule && ee._evalUrl(u.src, { nonce: u.nonce, crossOrigin: u.crossOrigin }, l) : m(u.textContent.replace($e, ""), u, l)) } return n }

    function Xe(e, t, n) { for (var r, i = t ? ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ee.cleanData(Se(r)), r.parentNode && (n && Ce(r) && De(Se(r, "script")), r.parentNode.removeChild(r)); return e }
    ee.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s = e.cloneNode(!0),
                u = Ce(e); if (ie && (1 === e.nodeType || 11 === e.nodeType) && !ee.isXMLDoc(e))
                for (a = Se(s), r = 0, i = (o = Se(e)).length; r < i; r++) te(a[r], "textarea") && (a[r].defaultValue = o[r].defaultValue); if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(s), r = 0, i = o.length; r < i; r++) _e(o[r], a[r]);
                else _e(e, s);
            return 0 < (a = Se(s, "script")).length && De(a, !u && Se(e, "script")), s }, cleanData: function(e) { for (var t, n, r, i = ee.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) { if (t = n[V.expando]) { if (t.events)
                            for (r in t.events) i[r] ? ee.event.remove(n, r) : ee.removeEvent(n, r, t.handle);
                        n[V.expando] = void 0 }
                    n[Y.expando] && (n[Y.expando] = void 0) } } }), ee.fn.extend({ detach: function(e) { return Xe(this, e, !0) }, remove: function(e) { return Xe(this, e) }, text: function(e) { return F(this, function(e) { return void 0 === e ? ee.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Ue(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e) }) }, prepend: function() { return Ue(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Ue(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Ue(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ee.cleanData(Se(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return ee.clone(this, e, t) }) }, html: function(e) { return F(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !We.test(e) && !Ee[(je.exec(e) || ["", ""])[1].toLowerCase()]) { e = ee.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ee.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return Ue(this, arguments, function(e) { var t = this.parentNode;
                ee.inArray(this, n) < 0 && (ee.cleanData(Se(this)), t && t.replaceChild(e, this)) }, n) } }), ee.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { ee.fn[e] = function(e) { for (var t, n = [], r = ee(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ee(r[o])[a](t), K.apply(n, t.get()); return this.pushStack(n) } }); var ze = new RegExp("^(" + le + ")(?!px)[a-z%]+$", "i");

    function Ve(e) { var t = e.ownerDocument.defaultView; return t || (t = J), t.getComputedStyle(e) }

    function Ye(e, t, n) { var r; return (n = n || Ve(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || Ce(e) || (r = ee.style(e, t))), void 0 !== r ? r + "" : r } var Ge = ["Webkit", "Moz", "ms"],
        Qe = C.createElement("div").style,
        Je = {};

    function Ke(e) { var t = Je[e]; return t || (e in Qe ? e : Je[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = Ge.length; while (n--)
                if ((e = Ge[n] + t) in Qe) return e }(e) || e) } var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };

    function rt(e, t, n) { var r = ce.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function it(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += ee.css(e, n + fe[a], !0, i)), r ? ("content" === n && (u -= ee.css(e, "padding" + fe[a], !0, i)), "margin" !== n && (u -= ee.css(e, "border" + fe[a] + "Width", !0, i))) : (u += ee.css(e, "padding" + fe[a], !0, i), "padding" !== n ? u += ee.css(e, "border" + fe[a] + "Width", !0, i) : s += ee.css(e, "border" + fe[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function ot(e, t, n) { var r = Ve(e),
            i = (ie || n) && "border-box" === ee.css(e, "boxSizing", !1, r),
            o = i,
            a = Ye(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (ze.test(a)) { if (!n) return a;
            a = "auto" } return (ie && (i || te(e, "tr")) || "auto" === a) && e.getClientRects().length && (i = "border-box" === ee.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function at(e, t, n, r, i) { return new at.prototype.init(e, t, n, r, i) }
    ee.extend({ cssHooks: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = me(t),
                    u = et.test(t),
                    l = e.style; if (u || (t = Ke(s)), a = ee.cssHooks[t] || ee.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = ce.exec(n)) && i[1] && (n = ve(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (ge(s) ? "px" : "")), ie && "" === n && 0 === t.indexOf("background") && (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = me(t); return et.test(t) || (t = Ke(s)), (a = ee.cssHooks[t] || ee.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ye(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), ee.each(["height", "width"], function(e, s) { ee.cssHooks[s] = { get: function(e, t, n) { if (t) return !Ze.test(ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, s, n) : function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }(e, tt, function() { return ot(e, s, n) }) }, set: function(e, t, n) { var r, i = Ve(e),
                    o = n && "border-box" === ee.css(e, "boxSizing", !1, i),
                    a = n ? it(e, s, n, o, i) : 0; return a && (r = ce.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = ee.css(e, s)), rt(0, t, a) } } }), ee.each({ margin: "", padding: "", border: "Width" }, function(i, o) { ee.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + fe[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (ee.cssHooks[i + o].set = rt) }), ee.fn.extend({ css: function(e, t) { return F(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Ve(e), i = t.length; a < i; a++) o[t[a]] = ee.css(e, t[a], !1, r); return o } return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t) }, e, t, 1 < arguments.length) } }), ((ee.Tween = at).prototype = { constructor: at, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ge(n) ? "px" : "") }, cur: function() { var e = at.propHooks[this.prop]; return e && e.get ? e.get(this) : at.propHooks._default.get(this) }, run: function(e) { var t, n = at.propHooks[this.prop]; return this.options.duration ? this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this } }).init.prototype = at.prototype, at.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ee.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ee.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : ee.style(e.elem, e.prop, e.now + e.unit) } } }, ee.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, ee.fx = at.prototype.init, ee.fx.step = {}; var st, ut, lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() { ut && (!1 === C.hidden && J.requestAnimationFrame ? J.requestAnimationFrame(ft) : J.setTimeout(ft, ee.fx.interval), ee.fx.tick()) }

    function pt() { return J.setTimeout(function() { st = void 0 }), st = Date.now() }

    function dt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = fe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ht(e, t, n) { for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function gt(o, e, t) { var n, a, r = 0,
            i = gt.prefilters.length,
            s = ee.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = st || pt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: ee.extend({}, e), opts: ee.extend(!0, { specialEasing: {}, easing: ee.easing._default }, t), originalProperties: e, originalOptions: t, startTime: st || pt(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = ee.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = me(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ee.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = gt.prefilters[r].call(l, o, c, l.opts)) return "function" == typeof n.stop && (ee._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ee.map(c, ht, l), "function" == typeof l.opts.start && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ee.fx.timer(ee.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    ee.Animation = ee.extend(gt, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return ve(n.elem, e, ce.exec(t), n), n }] }, tweener: function(e, t) { "function" == typeof e ? (t = e, e = ["*"]) : e = e.match(H); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && pe(e),
                v = V.get(e, "fxshow"); for (r in n.queue || (null == (a = ee._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, ee.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], lt.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0 }
                    d[r] = v && v[r] || ee.style(e, r) }
            if ((u = !ee.isEmptyObject(t)) || !ee.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = V.get(e, "display")), "none" === (c = ee.css(e, "display")) && (l ? c = l : (be([e], !0), l = e.style.display || l, c = ee.css(e, "display"), be([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ee.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = V.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && be([e], !0), p.done(function() { for (r in g || be([e]), V.remove(e, "fxshow"), d) ee.style(e, r, d[r]) })), u = ht(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? gt.prefilters.unshift(e) : gt.prefilters.push(e) } }), ee.speed = function(e, t, n) { var r = e && "object" == typeof e ? ee.extend({}, e) : { complete: n || !n && t || "function" == typeof e && e, duration: e, easing: n && t || t && "function" != typeof t && t }; return ee.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ee.fx.speeds ? r.duration = ee.fx.speeds[r.duration] : r.duration = ee.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { "function" == typeof r.old && r.old.call(this), r.queue && ee.dequeue(this, r.queue) }, r }, ee.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(pe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = ee.isEmptyObject(t),
                o = ee.speed(e, n, r),
                a = function() { var e = gt(this, ee.extend({}, t), o);
                    (i || V.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ee.timers,
                    r = V.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ct.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || ee.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = V.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ee.timers,
                    o = n ? n.length : 0; for (t.finish = !0, ee.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), ee.each(["toggle", "show", "hide"], function(e, r) { var i = ee.fn[r];
        ee.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(r, !0), e, t, n) } }), ee.each({ slideDown: dt("show"), slideUp: dt("hide"), slideToggle: dt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { ee.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), ee.timers = [], ee.fx.tick = function() { var e, t = 0,
            n = ee.timers; for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ee.fx.stop(), st = void 0 }, ee.fx.timer = function(e) { ee.timers.push(e), ee.fx.start() }, ee.fx.interval = 13, ee.fx.start = function() { ut || (ut = !0, ft()) }, ee.fx.stop = function() { ut = null }, ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ee.fn.delay = function(r, e) { return r = ee.fx && ee.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = J.setTimeout(e, r);
            t.stop = function() { J.clearTimeout(n) } }) }, ee.fn.extend({ attr: function(e, t) { return F(this, ee.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { ee.removeAttr(this, e) }) } }), ee.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ee.prop(e, t, n) : (1 === o && ee.isXMLDoc(e) || (i = ee.attrHooks[t.toLowerCase()]), void 0 !== n ? null === n ? void ee.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = e.getAttribute(t)) ? void 0 : r) }, attrHooks: {}, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(H); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), ie && (ee.attrHooks.type = { set: function(e, t) { if ("radio" === t && te(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } }), ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, i) { ee.attrHooks[i] = { get: function(e) { var t, n = ee.isXMLDoc(e),
                    r = i.toLowerCase(); return n || (t = null != e.getAttribute(i) ? r : null), t }, set: function(e, t, n) { return !1 === t ? ee.removeAttr(e, n) : e.setAttribute(n, n), n } } }); var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(H) || []).join(" ") }

    function xt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [] }
    ee.fn.extend({ prop: function(e, t) { return F(this, ee.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[ee.propFix[e] || e] }) } }), ee.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ee.isXMLDoc(e) || (t = ee.propFix[t] || t, i = ee.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = e.getAttribute("tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), ie && (ee.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ee.propFix[this.toLowerCase()] = this }), ee.fn.extend({ addClass: function(t) { var e, n, r, i, o, a, s, u = 0; if ("function" == typeof t) return this.each(function(e) { ee(this).addClass(t.call(this, e, xt(this))) }); if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, r, i, o, a, s, u = 0; if ("function" == typeof t) return this.each(function(e) { ee(this).removeClass(t.call(this, e, xt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(i, t) { return "function" == typeof i ? this.each(function(e) { ee(this).toggleClass(i.call(this, e, xt(this), t), t) }) : "boolean" == typeof t ? t ? this.addClass(i) : this.removeClass(i) : this.each(function() { var e, t, n, r;
                t = 0, n = ee(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) }) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1 } }), ee.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = "function" == typeof n, this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ee(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ee.map(t, function(e) { return null == e ? "" : e + "" })), (r = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = ee.valHooks[t.type] || ee.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : null == (e = t.value) ? "" : e : void 0 } }), ee.extend({ valHooks: { select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if ((n = i[r]).selected && !n.disabled && (!n.parentNode.disabled || !te(n.parentNode, "optgroup"))) { if (t = ee(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = ee.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < ee.inArray(ee(r).val(), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), ie && (ee.valHooks.option = { get: function(e) { var t = e.getAttribute("value"); return null != t ? t : mt(ee.text(e)) } }), ee.each(["radio", "checkbox"], function() { ee.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < ee.inArray(ee(e).val(), t) } } }); var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) { e.stopPropagation() };
    ee.extend(ee.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || C],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(d + ee.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ee.expando] ? e : new ee.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ee.makeArray(t, [e]), c = ee.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !y(n)) { for (s = c.delegateType || d, wt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || J) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (V.get(o, "events") || Object.create(null))[e.type] && V.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !X(n) || u && "function" == typeof n[d] && !y(n) && ((a = n[u]) && (n[u] = null), ee.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Tt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Tt), ee.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = ee.extend(new ee.Event, n, { type: e, isSimulated: !0 });
            ee.event.trigger(r, null, t) } }), ee.fn.extend({ trigger: function(e, t) { return this.each(function() { ee.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return ee.event.trigger(e, t, n, !0) } }); var Ct = J.location,
        jt = { guid: Date.now() },
        kt = /\?/;
    ee.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new J.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || ee.error("Invalid XML: " + e), t }; var Et = /\[\]$/,
        St = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) { var t; if (Array.isArray(e)) ee.each(e, function(e, t) { r || Et.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== x(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i) }
    ee.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = "function" == typeof t ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !ee.isPlainObject(e)) ee.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) qt(n, e[n], t, i); return r.join("&") }, ee.fn.extend({ serialize: function() { return ee.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = ee.prop(this, "elements"); return e ? ee.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !ee(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !Ne.test(e)) }).map(function(e, t) { var n = ee(this).val(); return null == n ? null : Array.isArray(n) ? ee.map(n, function(e) { return { name: t.name, value: e.replace(St, "\r\n") } }) : { name: t.name, value: n.replace(St, "\r\n") } }).get() } }); var Nt = /%20/g,
        Ot = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Mt = {},
        Wt = {},
        $t = "*/".concat("*"),
        It = C.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(H) || []; if ("function" == typeof t)
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, i, o, a) { var s = {},
            u = t === Wt;

        function l(e) { var r; return s[e] = !0, ee.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function _t(e, t) { var n, r, i = ee.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && ee.extend(!0, e, r), e }
    It.href = Ct.href, ee.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ee.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? _t(_t(e, ee.ajaxSettings), t) : _t(ee.ajaxSettings, e) }, ajaxPrefilter: Ft(Mt), ajaxTransport: Ft(Wt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = ee.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ee(y) : ee.event,
                x = ee.Deferred(),
                b = ee.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (v.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(H) || [""], null == v.crossDomain) { r = C.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = It.protocol + "//" + It.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = ee.param(v.data, v.traditional)), Bt(Mt, v, t, T), h) return T; for (i in (g = ee.event && v.global) && 0 == ee.active++ && ee.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Pt.test(v.type), f = v.url.replace(Ot, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (kt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (kt.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ee.lastModified[f] && T.setRequestHeader("If-Modified-Since", ee.lastModified[f]), ee.etag[f] && T.setRequestHeader("If-None-Match", ee.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Wt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = J.setTimeout(function() { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && J.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < ee.inArray("script", v.dataTypes) && ee.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ee.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ee.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ee.active || ee.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return ee.get(e, t, n, "json") }, getScript: function(e, t) { return ee.get(e, void 0, t, "script") } }), ee.each(["get", "post"], function(e, i) { ee[i] = function(e, t, n, r) { return "function" == typeof t && (r = r || n, n = t, t = void 0), ee.ajax(ee.extend({ url: e, type: i, dataType: r, data: t, success: n }, ee.isPlainObject(e) && e)) } }), ee.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), ee._evalUrl = function(e, t, n) { return ee.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, scriptAttrs: t.crossOrigin ? { crossOrigin: t.crossOrigin } : void 0, converters: { "text script": function() {} }, dataFilter: function(e) { ee.globalEval(e, t, n) } }) }, ee.fn.extend({ wrapAll: function(e) { var t; return this[0] && ("function" == typeof e && (e = e.call(this[0])), t = ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return "function" == typeof n ? this.each(function(e) { ee(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = ee(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = "function" == typeof t; return this.each(function(e) { ee(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { ee(this).replaceWith(this.childNodes) }), this } }), ee.expr.pseudos.hidden = function(e) { return !ee.expr.pseudos.visible(e) }, ee.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, ee.ajaxSettings.xhr = function() { return new J.XMLHttpRequest }; var Ut = { 0: 200 };

    function Xt(e) { return e.crossDomain || e.scriptAttrs || e.async && ee.inArray("json", e.dataTypes) < 0 }
    ee.ajaxTransport(function(i) { var o; return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = r.onload = r.onerror = r.onabort = r.ontimeout = null, "abort" === e ? r.abort() : "error" === e ? t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" === (r.responseType || "text") ? { text: r.responseText } : { binary: r.response }, r.getAllResponseHeaders())) } }, r.onload = o(), r.onabort = r.onerror = r.ontimeout = o("error"), o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), ee.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), ee.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return ee.globalEval(e), e } } }), ee.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), Xt(e) && (e.type = "GET") }), ee.ajaxTransport("script", function(n) { var r, i; if (Xt(n)) return { send: function(e, t) { r = ee("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), C.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || ee.expando + "_" + jt.guid++; return this[e] = !0, e } }), ee.ajaxPrefilter("jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); return r = e.jsonpCallback = "function" == typeof e.jsonpCallback ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || ee.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = J[r], J[r] = function() { o = arguments }, n.always(function() { void 0 === i ? ee(J).removeProp(r) : J[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && "function" == typeof i && i(o[0]), o = i = void 0 }), "script" }), ee.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)), o = !n && [], (i = S.exec(e)) ? [t.createElement(i[1])] : (i = qe([e], t, o), o && o.length && ee(o).remove(), ee.merge([], i.childNodes))); var r, i, o }, ee.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), "function" == typeof t ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ee.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? ee("<div>").append(ee.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, ee.expr.pseudos.animated = function(t) { return ee.grep(ee.timers, function(e) { return t === e.elem }).length }, ee.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = ee.css(e, "position"),
                c = ee(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = ee.css(e, "top"), u = ee.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), "function" == typeof t && (t = t.call(e, n, ee.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, ee.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { ee.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === ee.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === ee.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ee(e).offset()).top += ee.css(e, "borderTopWidth", !0), i.left += ee.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - ee.css(r, "marginTop", !0), left: t.left - i.left - ee.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === ee.css(e, "position")) e = e.offsetParent; return e || b }) } }), ee.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        ee.fn[t] = function(e) { return F(this, function(e, t, n) { var r; if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), ee.each({ Height: "height", Width: "width" }, function(a, s) { ee.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { ee.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return F(this, function(e, t, n) { var r; return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ee.css(e, t, i) : ee.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ee.fn[t] = function(e) { return this.on(t, e) } }), ee.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { ee.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), ee.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), "function" == typeof e) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || ee.guid++, i }, ee.holdReady = function(e) { e ? ee.readyWait++ : ee.ready(!0) }, "function" == typeof define && define.amd && define("jquery", [], function() { return ee }); var Yt = J.jQuery,
        Gt = J.$; return ee.noConflict = function(e) { return J.$ === ee && (J.$ = Gt), e && J.jQuery === ee && (J.jQuery = Yt), ee }, void 0 === e && (J.jQuery = J.$ = ee), ee });
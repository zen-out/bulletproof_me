! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("string"), require("lodash"), require("make_legit")) : "function" == typeof define && define.amd ? define(["string", "lodash", "make_legit"], t) : "object" == typeof exports ? exports.node_basetest = t(require("string"), require("lodash"), require("make_legit")) : e.node_basetest = t(e.string, e.lodash, e.make_legit) }(this, (function(e, t, o) { return (() => { "use strict"; var r = { 356: e => { e.exports = t }, 95: e => { e.exports = o }, 983: t => { t.exports = e } },
            n = {};

        function s(e) { var t = n[e]; if (void 0 !== t) return t.exports; var o = n[e] = { exports: {} }; return r[e](o, o.exports, s), o.exports }
        s.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return s.d(t, { a: t }), t }, s.d = (e, t) => { for (var o in t) s.o(t, o) && !s.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] }) }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var i = {}; return (() => { s.r(i), s.d(i, { ATLEAST: () => n, COUNT: () => r, DOESNOTHAVE: () => f, ENDSWITH: () => d, HAS: () => T, ISLESS: () => a, ISTYPE: () => p, STARTSWITH: () => S, TESTCONTAINS: () => y, TESTCOUNTS: () => l, TESTDOESNOT: () => u }); var e = s(983),
                t = s.n(e),
                o = s(356);

            function r(e, r, n) { var s; return Array.isArray(e) ? s = (0, o.countBy)(arr, (function(e) {})) === n : "string" == typeof e && (s = t()(e).count(r) === n), s }

            function n(e, r, n) { var s; return Array.isArray(e) ? s = (0, o.countBy)(arr, (function(e) {})) : "string" == typeof e && (s = t()(e).count(r)), s >= n }

            function a(e, t, o) { if ("date" === o) return when_you_free.isBefore(e, t); if ("number" === o) return e <= t; if ("string" === o) { var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                        n = e.charAt(0).toLowerCase(),
                        s = t.charAt(0).toLowerCase(); return r.indexOf(n) <= r.indexOf(s) }
                console.log("not sure what type") }

            function l() { var e = r("hello hellodi", "div", 2);
                console.log("🚀 ~ file: counts.js ~ line 102 ~ TESTCOUNTS ~ shouldBeTrue", e); var t = a(1, 2, "number");
                console.log("🚀 ~ file: counts.js ~ line 104 ~ TESTCOUNTS ~ test2", t); var o = a("Dec 11, 1993", "Dec 11, 1994", "date");
                console.log("🚀 ~ file: counts.js ~ line 106 ~ TESTCOUNTS ~ isLessDates", o); var s = n("div div", "div", 1);
                console.log("🚀 ~ file: counts.js ~ line 108 ~ TESTCOUNTS ~ atLeastTrue", s) }

            function f(e, o) { return 0 === t()(e).count(o) }

            function u() { var e = f("{{>", ">");
                console.log("🚀 ~ file: doesNot.js ~ line 26 ~ TESTDOESNOT ~ getFalse", e) } var c = s(95);

            function T(e, o) { var r = (0, c.format)(e, "string"),
                    n = (0, c.format)(o, "string"); return t()(r).contains(n) }

            function S(e, o) { var r = (0, c.format)(e, "string"),
                    n = (0, c.format)(o, "string"); return t()(r).startsWith(n) }

            function d(e, o) { var r = (0, c.format)(e, "string"),
                    n = (0, c.format)(o, "string"); return t()(r).endsWith(n) }

            function y() { var e = S("hi", "h");
                console.log("🚀 ~ file: contains.js ~ line 60 ~ TESTCONTAINS ~ trueStarts", e); var t = S("asdfasdf", "A");
                console.log("🚀 ~ file: contains.js ~ line 61 ~ TESTCONTAINS ~ falseStarts", t); var o = d("HELLO", "O");
                console.log("🚀 ~ file: contains.js ~ line 62 ~ TESTCONTAINS ~ trueEnds", o); var r = d("hello", "z");
                console.log("🚀 ~ file: contains.js ~ line 63 ~ TESTCONTAINS ~ falseEnds", r); var n = T("asdf", "sd");
                console.log("🚀 ~ file: contains.js ~ line 64 ~ TESTCONTAINS ~ trueHas", n); var s = T("asdf", "z");
                console.log("🚀 ~ file: contains.js ~ line 65 ~ TESTCONTAINS ~ falseHas", s) }

            function g(e) { return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, g(e) }

            function p(e, o) { return e instanceof Date && "date" === o || !("array" !== o || !Array.isArray(e)) || "object" === o && "object" === g(e) || "string" === o && "string" == typeof e || "number" === o && "number" == typeof e || "boolean" === o && "boolean" == typeof e && !0 === t()(e).toBoolean() } })(), i })() }));
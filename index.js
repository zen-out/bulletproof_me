! function(t, r) { "object" == typeof exports && "object" == typeof module ? module.exports = r(require("lodash"), require("when_you_free"), require("make_legit")) : "function" == typeof define && define.amd ? define(["lodash", "when_you_free", "make_legit"], r) : "object" == typeof exports ? exports.bulletproof_me = r(require("lodash"), require("when_you_free"), require("make_legit")) : t.bulletproof_me = r(t.lodash, t.when_you_free, t.make_legit) }(this, (function(t, r, e) { return (() => { var n = { 985: (t, r, e) => { var n, i, o;

                    function s(t) { return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, s(t) }
                    o = function() { return function t(r, e, n) {
                            function i(s, u) { if (!e[s]) { if (!r[s]) { if (o) return o(s, !0); throw new Error("Cannot find module '" + s + "'") } var a = e[s] = { exports: {} };
                                    r[s][0].call(a.exports, (function(t) { return i(r[s][1][t] || t) }), a, a.exports, t, r, e, n) } return e[s].exports } for (var o = void 0, s = 0; s < n.length; s++) i(n[s]); return i }({ 1: [function(t, r, e) { r.exports = function(t, r) { for (var e = 0, n = t.indexOf(r); n >= 0;) e += 1, n = t.indexOf(r, n + 1); return e } }, {}], 2: [function(t, r, e) { r.exports = function(t, r, e, n) { void 0 === e && (e = -1); var i = t.split(r),
                                        o = i.slice(0, e),
                                        s = i.slice(e); return i = 0 === s.length ? o : o.concat(s.join(r)), void 0 === n ? i : n < 0 ? i.slice(n) : i.slice(0, n) } }, {}], 3: [function(t, r, e) { r.exports = function(t, r, e, n) { void 0 === e && (e = -1), void 0 === n && (n = 0); for (var i = [t], o = t.length - 1; o >= 0; o--) 0 === i[0].slice(o).indexOf(r) && (i.length <= e || -1 === e) && (i.splice(1, 0, i[0].slice(o + r.length)), i[0] = i[0].slice(0, o)); return n >= 0 ? i.slice(-n) : i.slice(0, -n) } }, {}], 4: [function(t, r, e) {
                                (function() { "use strict"; var e = {},
                                        n = { Á: "A", Ă: "A", Ắ: "A", Ặ: "A", Ằ: "A", Ẳ: "A", Ẵ: "A", Ǎ: "A", Â: "A", Ấ: "A", Ậ: "A", Ầ: "A", Ẩ: "A", Ẫ: "A", Ä: "A", Ǟ: "A", Ȧ: "A", Ǡ: "A", Ạ: "A", Ȁ: "A", À: "A", Ả: "A", Ȃ: "A", Ā: "A", Ą: "A", Å: "A", Ǻ: "A", Ḁ: "A", Ⱥ: "A", Ã: "A", Ꜳ: "AA", Æ: "AE", Ǽ: "AE", Ǣ: "AE", Ꜵ: "AO", Ꜷ: "AU", Ꜹ: "AV", Ꜻ: "AV", Ꜽ: "AY", Ḃ: "B", Ḅ: "B", Ɓ: "B", Ḇ: "B", Ƀ: "B", Ƃ: "B", Ć: "C", Č: "C", Ç: "C", Ḉ: "C", Ĉ: "C", Ċ: "C", Ƈ: "C", Ȼ: "C", Ď: "D", Ḑ: "D", Ḓ: "D", Ḋ: "D", Ḍ: "D", Ɗ: "D", Ḏ: "D", ǲ: "D", ǅ: "D", Đ: "D", Ƌ: "D", Ǳ: "DZ", Ǆ: "DZ", É: "E", Ĕ: "E", Ě: "E", Ȩ: "E", Ḝ: "E", Ê: "E", Ế: "E", Ệ: "E", Ề: "E", Ể: "E", Ễ: "E", Ḙ: "E", Ë: "E", Ė: "E", Ẹ: "E", Ȅ: "E", È: "E", Ẻ: "E", Ȇ: "E", Ē: "E", Ḗ: "E", Ḕ: "E", Ę: "E", Ɇ: "E", Ẽ: "E", Ḛ: "E", Ꝫ: "ET", Ḟ: "F", Ƒ: "F", Ǵ: "G", Ğ: "G", Ǧ: "G", Ģ: "G", Ĝ: "G", Ġ: "G", Ɠ: "G", Ḡ: "G", Ǥ: "G", Ḫ: "H", Ȟ: "H", Ḩ: "H", Ĥ: "H", Ⱨ: "H", Ḧ: "H", Ḣ: "H", Ḥ: "H", Ħ: "H", Í: "I", Ĭ: "I", Ǐ: "I", Î: "I", Ï: "I", Ḯ: "I", İ: "I", Ị: "I", Ȉ: "I", Ì: "I", Ỉ: "I", Ȋ: "I", Ī: "I", Į: "I", Ɨ: "I", Ĩ: "I", Ḭ: "I", Ꝺ: "D", Ꝼ: "F", Ᵹ: "G", Ꞃ: "R", Ꞅ: "S", Ꞇ: "T", Ꝭ: "IS", Ĵ: "J", Ɉ: "J", Ḱ: "K", Ǩ: "K", Ķ: "K", Ⱪ: "K", Ꝃ: "K", Ḳ: "K", Ƙ: "K", Ḵ: "K", Ꝁ: "K", Ꝅ: "K", Ĺ: "L", Ƚ: "L", Ľ: "L", Ļ: "L", Ḽ: "L", Ḷ: "L", Ḹ: "L", Ⱡ: "L", Ꝉ: "L", Ḻ: "L", Ŀ: "L", Ɫ: "L", ǈ: "L", Ł: "L", Ǉ: "LJ", Ḿ: "M", Ṁ: "M", Ṃ: "M", Ɱ: "M", Ń: "N", Ň: "N", Ņ: "N", Ṋ: "N", Ṅ: "N", Ṇ: "N", Ǹ: "N", Ɲ: "N", Ṉ: "N", Ƞ: "N", ǋ: "N", Ñ: "N", Ǌ: "NJ", Ó: "O", Ŏ: "O", Ǒ: "O", Ô: "O", Ố: "O", Ộ: "O", Ồ: "O", Ổ: "O", Ỗ: "O", Ö: "O", Ȫ: "O", Ȯ: "O", Ȱ: "O", Ọ: "O", Ő: "O", Ȍ: "O", Ò: "O", Ỏ: "O", Ơ: "O", Ớ: "O", Ợ: "O", Ờ: "O", Ở: "O", Ỡ: "O", Ȏ: "O", Ꝋ: "O", Ꝍ: "O", Ō: "O", Ṓ: "O", Ṑ: "O", Ɵ: "O", Ǫ: "O", Ǭ: "O", Ø: "O", Ǿ: "O", Õ: "O", Ṍ: "O", Ṏ: "O", Ȭ: "O", Ƣ: "OI", Ꝏ: "OO", Ɛ: "E", Ɔ: "O", Ȣ: "OU", Ṕ: "P", Ṗ: "P", Ꝓ: "P", Ƥ: "P", Ꝕ: "P", Ᵽ: "P", Ꝑ: "P", Ꝙ: "Q", Ꝗ: "Q", Ŕ: "R", Ř: "R", Ŗ: "R", Ṙ: "R", Ṛ: "R", Ṝ: "R", Ȑ: "R", Ȓ: "R", Ṟ: "R", Ɍ: "R", Ɽ: "R", Ꜿ: "C", Ǝ: "E", Ś: "S", Ṥ: "S", Š: "S", Ṧ: "S", Ş: "S", Ŝ: "S", Ș: "S", Ṡ: "S", Ṣ: "S", Ṩ: "S", ẞ: "SS", Ť: "T", Ţ: "T", Ṱ: "T", Ț: "T", Ⱦ: "T", Ṫ: "T", Ṭ: "T", Ƭ: "T", Ṯ: "T", Ʈ: "T", Ŧ: "T", Ɐ: "A", Ꞁ: "L", Ɯ: "M", Ʌ: "V", Ꜩ: "TZ", Ú: "U", Ŭ: "U", Ǔ: "U", Û: "U", Ṷ: "U", Ü: "U", Ǘ: "U", Ǚ: "U", Ǜ: "U", Ǖ: "U", Ṳ: "U", Ụ: "U", Ű: "U", Ȕ: "U", Ù: "U", Ủ: "U", Ư: "U", Ứ: "U", Ự: "U", Ừ: "U", Ử: "U", Ữ: "U", Ȗ: "U", Ū: "U", Ṻ: "U", Ų: "U", Ů: "U", Ũ: "U", Ṹ: "U", Ṵ: "U", Ꝟ: "V", Ṿ: "V", Ʋ: "V", Ṽ: "V", Ꝡ: "VY", Ẃ: "W", Ŵ: "W", Ẅ: "W", Ẇ: "W", Ẉ: "W", Ẁ: "W", Ⱳ: "W", Ẍ: "X", Ẋ: "X", Ý: "Y", Ŷ: "Y", Ÿ: "Y", Ẏ: "Y", Ỵ: "Y", Ỳ: "Y", Ƴ: "Y", Ỷ: "Y", Ỿ: "Y", Ȳ: "Y", Ɏ: "Y", Ỹ: "Y", Ź: "Z", Ž: "Z", Ẑ: "Z", Ⱬ: "Z", Ż: "Z", Ẓ: "Z", Ȥ: "Z", Ẕ: "Z", Ƶ: "Z", Ĳ: "IJ", Œ: "OE", ᴀ: "A", ᴁ: "AE", ʙ: "B", ᴃ: "B", ᴄ: "C", ᴅ: "D", ᴇ: "E", ꜰ: "F", ɢ: "G", ʛ: "G", ʜ: "H", ɪ: "I", ʁ: "R", ᴊ: "J", ᴋ: "K", ʟ: "L", ᴌ: "L", ᴍ: "M", ɴ: "N", ᴏ: "O", ɶ: "OE", ᴐ: "O", ᴕ: "OU", ᴘ: "P", ʀ: "R", ᴎ: "N", ᴙ: "R", ꜱ: "S", ᴛ: "T", ⱻ: "E", ᴚ: "R", ᴜ: "U", ᴠ: "V", ᴡ: "W", ʏ: "Y", ᴢ: "Z", á: "a", ă: "a", ắ: "a", ặ: "a", ằ: "a", ẳ: "a", ẵ: "a", ǎ: "a", â: "a", ấ: "a", ậ: "a", ầ: "a", ẩ: "a", ẫ: "a", ä: "a", ǟ: "a", ȧ: "a", ǡ: "a", ạ: "a", ȁ: "a", à: "a", ả: "a", ȃ: "a", ā: "a", ą: "a", ᶏ: "a", ẚ: "a", å: "a", ǻ: "a", ḁ: "a", ⱥ: "a", ã: "a", ꜳ: "aa", æ: "ae", ǽ: "ae", ǣ: "ae", ꜵ: "ao", ꜷ: "au", ꜹ: "av", ꜻ: "av", ꜽ: "ay", ḃ: "b", ḅ: "b", ɓ: "b", ḇ: "b", ᵬ: "b", ᶀ: "b", ƀ: "b", ƃ: "b", ɵ: "o", ć: "c", č: "c", ç: "c", ḉ: "c", ĉ: "c", ɕ: "c", ċ: "c", ƈ: "c", ȼ: "c", ď: "d", ḑ: "d", ḓ: "d", ȡ: "d", ḋ: "d", ḍ: "d", ɗ: "d", ᶑ: "d", ḏ: "d", ᵭ: "d", ᶁ: "d", đ: "d", ɖ: "d", ƌ: "d", ı: "i", ȷ: "j", ɟ: "j", ʄ: "j", ǳ: "dz", ǆ: "dz", é: "e", ĕ: "e", ě: "e", ȩ: "e", ḝ: "e", ê: "e", ế: "e", ệ: "e", ề: "e", ể: "e", ễ: "e", ḙ: "e", ë: "e", ė: "e", ẹ: "e", ȅ: "e", è: "e", ẻ: "e", ȇ: "e", ē: "e", ḗ: "e", ḕ: "e", ⱸ: "e", ę: "e", ᶒ: "e", ɇ: "e", ẽ: "e", ḛ: "e", ꝫ: "et", ḟ: "f", ƒ: "f", ᵮ: "f", ᶂ: "f", ǵ: "g", ğ: "g", ǧ: "g", ģ: "g", ĝ: "g", ġ: "g", ɠ: "g", ḡ: "g", ᶃ: "g", ǥ: "g", ḫ: "h", ȟ: "h", ḩ: "h", ĥ: "h", ⱨ: "h", ḧ: "h", ḣ: "h", ḥ: "h", ɦ: "h", ẖ: "h", ħ: "h", ƕ: "hv", í: "i", ĭ: "i", ǐ: "i", î: "i", ï: "i", ḯ: "i", ị: "i", ȉ: "i", ì: "i", ỉ: "i", ȋ: "i", ī: "i", į: "i", ᶖ: "i", ɨ: "i", ĩ: "i", ḭ: "i", ꝺ: "d", ꝼ: "f", ᵹ: "g", ꞃ: "r", ꞅ: "s", ꞇ: "t", ꝭ: "is", ǰ: "j", ĵ: "j", ʝ: "j", ɉ: "j", ḱ: "k", ǩ: "k", ķ: "k", ⱪ: "k", ꝃ: "k", ḳ: "k", ƙ: "k", ḵ: "k", ᶄ: "k", ꝁ: "k", ꝅ: "k", ĺ: "l", ƚ: "l", ɬ: "l", ľ: "l", ļ: "l", ḽ: "l", ȴ: "l", ḷ: "l", ḹ: "l", ⱡ: "l", ꝉ: "l", ḻ: "l", ŀ: "l", ɫ: "l", ᶅ: "l", ɭ: "l", ł: "l", ǉ: "lj", ſ: "s", ẜ: "s", ẛ: "s", ẝ: "s", ḿ: "m", ṁ: "m", ṃ: "m", ɱ: "m", ᵯ: "m", ᶆ: "m", ń: "n", ň: "n", ņ: "n", ṋ: "n", ȵ: "n", ṅ: "n", ṇ: "n", ǹ: "n", ɲ: "n", ṉ: "n", ƞ: "n", ᵰ: "n", ᶇ: "n", ɳ: "n", ñ: "n", ǌ: "nj", ó: "o", ŏ: "o", ǒ: "o", ô: "o", ố: "o", ộ: "o", ồ: "o", ổ: "o", ỗ: "o", ö: "o", ȫ: "o", ȯ: "o", ȱ: "o", ọ: "o", ő: "o", ȍ: "o", ò: "o", ỏ: "o", ơ: "o", ớ: "o", ợ: "o", ờ: "o", ở: "o", ỡ: "o", ȏ: "o", ꝋ: "o", ꝍ: "o", ⱺ: "o", ō: "o", ṓ: "o", ṑ: "o", ǫ: "o", ǭ: "o", ø: "o", ǿ: "o", õ: "o", ṍ: "o", ṏ: "o", ȭ: "o", ƣ: "oi", ꝏ: "oo", ɛ: "e", ᶓ: "e", ɔ: "o", ᶗ: "o", ȣ: "ou", ṕ: "p", ṗ: "p", ꝓ: "p", ƥ: "p", ᵱ: "p", ᶈ: "p", ꝕ: "p", ᵽ: "p", ꝑ: "p", ꝙ: "q", ʠ: "q", ɋ: "q", ꝗ: "q", ŕ: "r", ř: "r", ŗ: "r", ṙ: "r", ṛ: "r", ṝ: "r", ȑ: "r", ɾ: "r", ᵳ: "r", ȓ: "r", ṟ: "r", ɼ: "r", ᵲ: "r", ᶉ: "r", ɍ: "r", ɽ: "r", ↄ: "c", ꜿ: "c", ɘ: "e", ɿ: "r", ś: "s", ṥ: "s", š: "s", ṧ: "s", ş: "s", ŝ: "s", ș: "s", ṡ: "s", ṣ: "s", ṩ: "s", ʂ: "s", ᵴ: "s", ᶊ: "s", ȿ: "s", ɡ: "g", ß: "ss", ᴑ: "o", ᴓ: "o", ᴝ: "u", ť: "t", ţ: "t", ṱ: "t", ț: "t", ȶ: "t", ẗ: "t", ⱦ: "t", ṫ: "t", ṭ: "t", ƭ: "t", ṯ: "t", ᵵ: "t", ƫ: "t", ʈ: "t", ŧ: "t", ᵺ: "th", ɐ: "a", ᴂ: "ae", ǝ: "e", ᵷ: "g", ɥ: "h", ʮ: "h", ʯ: "h", ᴉ: "i", ʞ: "k", ꞁ: "l", ɯ: "m", ɰ: "m", ᴔ: "oe", ɹ: "r", ɻ: "r", ɺ: "r", ⱹ: "r", ʇ: "t", ʌ: "v", ʍ: "w", ʎ: "y", ꜩ: "tz", ú: "u", ŭ: "u", ǔ: "u", û: "u", ṷ: "u", ü: "u", ǘ: "u", ǚ: "u", ǜ: "u", ǖ: "u", ṳ: "u", ụ: "u", ű: "u", ȕ: "u", ù: "u", ủ: "u", ư: "u", ứ: "u", ự: "u", ừ: "u", ử: "u", ữ: "u", ȗ: "u", ū: "u", ṻ: "u", ų: "u", ᶙ: "u", ů: "u", ũ: "u", ṹ: "u", ṵ: "u", ᵫ: "ue", ꝸ: "um", ⱴ: "v", ꝟ: "v", ṿ: "v", ʋ: "v", ᶌ: "v", ⱱ: "v", ṽ: "v", ꝡ: "vy", ẃ: "w", ŵ: "w", ẅ: "w", ẇ: "w", ẉ: "w", ẁ: "w", ⱳ: "w", ẘ: "w", ẍ: "x", ẋ: "x", ᶍ: "x", ý: "y", ŷ: "y", ÿ: "y", ẏ: "y", ỵ: "y", ỳ: "y", ƴ: "y", ỷ: "y", ỿ: "y", ȳ: "y", ẙ: "y", ɏ: "y", ỹ: "y", ź: "z", ž: "z", ẑ: "z", ʑ: "z", ⱬ: "z", ż: "z", ẓ: "z", ȥ: "z", ẕ: "z", ᵶ: "z", ᶎ: "z", ʐ: "z", ƶ: "z", ɀ: "z", ﬀ: "ff", ﬃ: "ffi", ﬄ: "ffl", ﬁ: "fi", ﬂ: "fl", ĳ: "ij", œ: "oe", ﬆ: "st", ₐ: "a", ₑ: "e", ᵢ: "i", ⱼ: "j", ₒ: "o", ᵣ: "r", ᵤ: "u", ᵥ: "v", ₓ: "x" };

                                    function i(t, r) { t.s = null != r ? "string" == typeof r ? r : r.toString() : r, t.orig = r, null != r ? t.__defineGetter__ ? t.__defineGetter__("length", (function() { return t.s.length })) : t.length = r.length : t.length = -1 }

                                    function o(t) { i(this, t) } var u = String.prototype,
                                        a = o.prototype = { between: function(t, r) { var e = this.s,
                                                    n = e.indexOf(t),
                                                    i = e.indexOf(r, n + t.length); return -1 == i && null != r ? new this.constructor("") : -1 == i && null == r ? new this.constructor(e.substring(n + t.length)) : new this.constructor(e.slice(n + t.length, i)) }, camelize: function() { var t = this.trim().s.replace(/(\-|_|\s)+(.)?/g, (function(t, r, e) { return e ? e.toUpperCase() : "" })); return new this.constructor(t) }, capitalize: function() { return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase()) }, charAt: function(t) { return this.s.charAt(t) }, chompLeft: function(t) { var r = this.s; return 0 === r.indexOf(t) ? (r = r.slice(t.length), new this.constructor(r)) : this }, chompRight: function(t) { if (this.endsWith(t)) { var r = this.s; return r = r.slice(0, r.length - t.length), new this.constructor(r) } return this }, collapseWhitespace: function() { var t = this.s.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""); return new this.constructor(t) }, contains: function(t) { return this.s.indexOf(t) >= 0 }, count: function(r) { return t("./_count")(this.s, r) }, dasherize: function() { var t = this.trim().s.replace(/[_\s]+/g, "-").replace(/([A-Z])/g, "-$1").replace(/-+/g, "-").toLowerCase(); return new this.constructor(t) }, equalsIgnoreCase: function(t) { return this.s.toLowerCase() == t.toLowerCase() }, latinise: function() { var t = this.replace(/[^A-Za-z0-9\[\] ]/g, (function(t) { return n[t] || t })); return new this.constructor(t) }, decodeHtmlEntities: function() { var t = this.s; return t = t.replace(/&#(\d+);?/g, (function(t, r) { return String.fromCharCode(r) })).replace(/&#[xX]([A-Fa-f0-9]+);?/g, (function(t, r) { return String.fromCharCode(parseInt(r, 16)) })).replace(/&([^;\W]+;?)/g, (function(t, r) { var n = r.replace(/;$/, ""),
                                                        i = e[r] || r.match(/;$/) && e[n]; return "number" == typeof i ? String.fromCharCode(i) : "string" == typeof i ? i : t })), new this.constructor(t) }, endsWith: function() { for (var t = Array.prototype.slice.call(arguments, 0), r = 0; r < t.length; ++r) { var e = this.s.length - t[r].length; if (e >= 0 && this.s.indexOf(t[r], e) === e) return !0 } return !1 }, escapeHTML: function() { return new this.constructor(this.s.replace(/[&<>"']/g, (function(t) { return "&" + m[t] + ";" }))) }, ensureLeft: function(t) { var r = this.s; return 0 === r.indexOf(t) ? this : new this.constructor(t + r) }, ensureRight: function(t) { var r = this.s; return this.endsWith(t) ? this : new this.constructor(r + t) }, humanize: function() { if (null === this.s || void 0 === this.s) return new this.constructor(""); var t = this.underscore().replace(/_id$/, "").replace(/_/g, " ").trim().capitalize(); return new this.constructor(t) }, isAlpha: function() { return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase()) }, isAlphaNumeric: function() { return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase()) }, isEmpty: function() { return null === this.s || void 0 === this.s || /^[\s\xa0]*$/.test(this.s) }, isLower: function() { return this.isAlpha() && this.s.toLowerCase() === this.s }, isNumeric: function() { return !/[^0-9]/.test(this.s) }, isUpper: function() { return this.isAlpha() && this.s.toUpperCase() === this.s }, left: function(t) { if (t >= 0) { var r = this.s.substr(0, t); return new this.constructor(r) } return this.right(-t) }, lines: function() { return this.replaceAll("\r\n", "\n").s.split("\n") }, pad: function(t, r) { if (null == r && (r = " "), this.s.length >= t) return new this.constructor(this.s);
                                                t -= this.s.length; var e = Array(Math.ceil(t / 2) + 1).join(r),
                                                    n = Array(Math.floor(t / 2) + 1).join(r); return new this.constructor(e + this.s + n) }, padLeft: function(t, r) { return null == r && (r = " "), this.s.length >= t ? new this.constructor(this.s) : new this.constructor(Array(t - this.s.length + 1).join(r) + this.s) }, padRight: function(t, r) { return null == r && (r = " "), this.s.length >= t ? new this.constructor(this.s) : new this.constructor(this.s + Array(t - this.s.length + 1).join(r)) }, parseCSV: function(t, r, e, n) { t = t || ",", e = e || "\\", void 0 === r && (r = '"'); var i = 0,
                                                    o = [],
                                                    s = [],
                                                    u = this.s.length,
                                                    a = !1,
                                                    c = !1,
                                                    l = this,
                                                    h = function(t) { return l.s.charAt(t) }; if (void 0 !== n) var f = []; for (r || (a = !0); i < u;) { var p = h(i); switch (p) {
                                                        case e:
                                                            if (a && (e !== r || h(i + 1) === r)) { i += 1, o.push(h(i)); break } if (e !== r) break;
                                                        case r:
                                                            a = !a; break;
                                                        case t:
                                                            c && (a = !1, c = !1), a && r ? o.push(p) : (s.push(o.join("")), o.length = 0); break;
                                                        case n:
                                                            c ? (a = !1, c = !1, s.push(o.join("")), f.push(s), s = [], o.length = 0) : a ? o.push(p) : f && (s.push(o.join("")), f.push(s), s = [], o.length = 0); break;
                                                        case " ":
                                                            a && o.push(p); break;
                                                        default:
                                                            a ? o.push(p) : p !== r && (o.push(p), a = !0, c = !0) }
                                                    i += 1 } return s.push(o.join("")), f ? (f.push(s), f) : s }, replaceAll: function(t, r) { var e = this.s.split(t).join(r); return new this.constructor(e) }, splitLeft: function(r, e, n) { return t("./_splitLeft")(this.s, r, e, n) }, splitRight: function(r, e, n) { return t("./_splitRight")(this.s, r, e, n) }, strip: function() { for (var t = this.s, r = 0, e = arguments.length; r < e; r++) t = t.split(arguments[r]).join(""); return new this.constructor(t) }, stripLeft: function(t) { var r, e, n = v(this.s); return void 0 === t ? e = /^\s+/g : (r = d(t), e = new RegExp("^[" + r + "]+", "g")), new this.constructor(n.replace(e, "")) }, stripRight: function(t) { var r, e, n = v(this.s); return void 0 === t ? e = /\s+$/g : (r = d(t), e = new RegExp("[" + r + "]+$", "g")), new this.constructor(n.replace(e, "")) }, right: function(t) { if (t >= 0) { var r = this.s.substr(this.s.length - t, t); return new this.constructor(r) } return this.left(-t) }, setValue: function(t) { return i(this, t), this }, slugify: function() { var t = new o(new o(this.s).latinise().s.replace(/[^\w\s-]/g, "").toLowerCase()).dasherize().s; return "-" === t.charAt(0) && (t = t.substr(1)), new this.constructor(t) }, startsWith: function() { for (var t = Array.prototype.slice.call(arguments, 0), r = 0; r < t.length; ++r)
                                                    if (0 === this.s.lastIndexOf(t[r], 0)) return !0;
                                                return !1 }, stripPunctuation: function() { return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")) }, stripTags: function() { var t = this.s,
                                                    r = arguments.length > 0 ? arguments : [""]; return p(r, (function(r) { t = t.replace(RegExp("</?" + r + "[^<>]*>", "gi"), "") })), new this.constructor(t) }, template: function(t, r, e) { var n = this.s,
                                                    i = (r = r || f.TMPL_OPEN, e = e || f.TMPL_CLOSE, r.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$")),
                                                    o = e.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$"),
                                                    s = new RegExp(i + "(.+?)" + o, "g"); return (n.match(s) || []).forEach((function(i) { var o = i.substring(r.length, i.length - e.length).trim(),
                                                        s = void 0 === t[o] ? "" : t[o];
                                                    n = n.replace(i, s) })), new this.constructor(n) }, times: function(t) { return new this.constructor(new Array(t + 1).join(this.s)) }, titleCase: function() { var t = this.s; return t && (t = t.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, (function(t) { return t.toUpperCase() }))), new this.constructor(t) }, toBoolean: function() { if ("string" == typeof this.orig) { var t = this.s.toLowerCase(); return "true" === t || "yes" === t || "on" === t || "1" === t } return !0 === this.orig || 1 === this.orig }, toFloat: function(t) { var r = parseFloat(this.s); return t ? parseFloat(r.toFixed(t)) : r }, toInt: function() { return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10) }, trim: function() { var t; return t = void 0 === u.trim ? this.s.replace(/(^\s*|\s*$)/g, "") : this.s.trim(), new this.constructor(t) }, trimLeft: function() { var t; return t = u.trimLeft ? this.s.trimLeft() : this.s.replace(/(^\s*)/g, ""), new this.constructor(t) }, trimRight: function() { var t; return t = u.trimRight ? this.s.trimRight() : this.s.replace(/\s+$/, ""), new this.constructor(t) }, truncate: function(t, r) { var e = this.s; if (t = ~~t, r = r || "...", e.length <= t) return new this.constructor(e); var n = e.slice(0, t + 1).replace(/.(?=\W*\w*$)/g, (function(t) { return t.toUpperCase() !== t.toLowerCase() ? "A" : " " })); return ((n = n.slice(n.length - 2).match(/\w\w/) ? n.replace(/\s*\S+$/, "") : new o(n.slice(0, n.length - 1)).trimRight().s) + r).length > e.length ? new o(e) : new o(e.slice(0, n.length) + r) }, toCSV: function() { var t = ",",
                                                    r = '"',
                                                    e = "\\",
                                                    n = !0,
                                                    i = !1,
                                                    u = [];

                                                function a(t) { return null !== t && "" !== t } if ("object" === s(arguments[0]) ? (t = arguments[0].delimiter || t, t = arguments[0].separator || t, r = arguments[0].qualifier || r, n = !!arguments[0].encloseNumbers, e = arguments[0].escape || e, i = !!arguments[0].keys) : "string" == typeof arguments[0] && (t = arguments[0]), "string" == typeof arguments[1] && (r = arguments[1]), null === arguments[1] && (r = null), this.orig instanceof Array) u = this.orig;
                                                else
                                                    for (var c in this.orig) this.orig.hasOwnProperty(c) && (i ? u.push(c) : u.push(this.orig[c])); for (var l = e + r, h = [], f = 0; f < u.length; ++f) { var p = a(r); if ("number" == typeof u[f] && (p &= n), p && h.push(r), null !== u[f] && void 0 !== u[f]) { var g = new o(u[f]).replaceAll(r, l).s;
                                                        h.push(g) } else h.push("");
                                                    p && h.push(r), t && h.push(t) } return h.length = h.length - 1, new this.constructor(h.join("")) }, toString: function() { return this.s }, underscore: function() { var t = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase(); return new this.constructor(t) }, unescapeHTML: function() { return new this.constructor(this.s.replace(/\&([^;]+);/g, (function(t, r) { var e; return r in g ? g[r] : (e = r.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(e[1], 16)) : (e = r.match(/^#(\d+)$/)) ? String.fromCharCode(~~e[1]) : t }))) }, valueOf: function() { return this.s.valueOf() }, wrapHTML: function(t, r) { var e = this.s,
                                                    n = null == t ? "span" : t,
                                                    i = ""; if ("object" == s(r))
                                                    for (var o in r) i += " " + o + '="' + new this.constructor(r[o]).escapeHTML() + '"'; return e = "".concat("<", n, i, ">", this, "</", n, ">"), new this.constructor(e) } },
                                        c = [],
                                        l = function() { for (var t = function() { var t = []; if (Object.getOwnPropertyNames) return (t = Object.getOwnPropertyNames(u)).splice(t.indexOf("valueOf"), 1), t.splice(t.indexOf("toString"), 1), t; var r = {}; for (var e in String.prototype) r[e] = e; for (var e in Object.prototype) delete r[e]; for (var e in r) t.push(e); return t }(), r = {}, e = 0; e < t.length; ++e) { var n = t[e]; if ("to" !== n && "toEnd" !== n) { var i = u[n]; try { var o = s(i.apply("teststring"));
                                                        r[n] = o } catch (t) {} } } return r }(); for (var h in l) ! function(t) { var r = u[t]; "function" == typeof r && (a[t] || ("string" === l[t] ? a[t] = function() { return new this.constructor(r.apply(this, arguments)) } : a[t] = r)) }(h);

                                    function f(t) { return new o(t) }

                                    function p(t, r) { var e, n = []; for (e = 0; e < t.length; e++) n.push(t[e]), r && r.call(t, t[e], e); return n }
                                    a.repeat = a.times, a.include = a.contains, a.toInteger = a.toInt, a.toBool = a.toBoolean, a.decodeHTMLEntities = a.decodeHtmlEntities, a.constructor = o, f.extendPrototype = function() { for (var t in a) ! function(t) { var r = a[t];
                                            u.hasOwnProperty(t) || (c.push(t), u[t] = function() { return String.prototype.s = this, r.apply(this, arguments) }) }(t) }, f.restorePrototype = function() { for (var t = 0; t < c.length; ++t) delete String.prototype[c[t]];
                                        c.length = 0 }, f.VERSION = "3.3.3", f.TMPL_OPEN = "{{", f.TMPL_CLOSE = "}}", f.ENTITIES = e, void 0 !== r && void 0 !== r.exports ? r.exports = f : window.S = f; var g = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" };

                                    function d(t) { var r, e, n = [],
                                            i = /^[A-Za-z0-9]+$/; for (t = v(t), e = 0; e < t.length; ++e) r = t.charAt(e), i.test(r) ? n.push(r) : "\\000" === r ? n.push("\\000") : n.push("\\" + r); return n.join("") }

                                    function v(t) { return null == t ? "" : "" + t } var m = {}; for (var y in g) m[g[y]] = y;
                                    e = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, "OElig;": 338, "oelig;": 339, "Scaron;": 352, "scaron;": 353, "Yuml;": 376, "fnof;": 402, "circ;": 710, "tilde;": 732, "Alpha;": 913, "Beta;": 914, "Gamma;": 915, "Delta;": 916, "Epsilon;": 917, "Zeta;": 918, "Eta;": 919, "Theta;": 920, "Iota;": 921, "Kappa;": 922, "Lambda;": 923, "Mu;": 924, "Nu;": 925, "Xi;": 926, "Omicron;": 927, "Pi;": 928, "Rho;": 929, "Sigma;": 931, "Tau;": 932, "Upsilon;": 933, "Phi;": 934, "Chi;": 935, "Psi;": 936, "Omega;": 937, "alpha;": 945, "beta;": 946, "gamma;": 947, "delta;": 948, "epsilon;": 949, "zeta;": 950, "eta;": 951, "theta;": 952, "iota;": 953, "kappa;": 954, "lambda;": 955, "mu;": 956, "nu;": 957, "xi;": 958, "omicron;": 959, "pi;": 960, "rho;": 961, "sigmaf;": 962, "sigma;": 963, "tau;": 964, "upsilon;": 965, "phi;": 966, "chi;": 967, "psi;": 968, "omega;": 969, "thetasym;": 977, "upsih;": 978, "piv;": 982, "ensp;": 8194, "emsp;": 8195, "thinsp;": 8201, "zwnj;": 8204, "zwj;": 8205, "lrm;": 8206, "rlm;": 8207, "ndash;": 8211, "mdash;": 8212, "lsquo;": 8216, "rsquo;": 8217, "sbquo;": 8218, "ldquo;": 8220, "rdquo;": 8221, "bdquo;": 8222, "dagger;": 8224, "Dagger;": 8225, "bull;": 8226, "hellip;": 8230, "permil;": 8240, "prime;": 8242, "Prime;": 8243, "lsaquo;": 8249, "rsaquo;": 8250, "oline;": 8254, "frasl;": 8260, "euro;": 8364, "image;": 8465, "weierp;": 8472, "real;": 8476, "trade;": 8482, "alefsym;": 8501, "larr;": 8592, "uarr;": 8593, "rarr;": 8594, "darr;": 8595, "harr;": 8596, "crarr;": 8629, "lArr;": 8656, "uArr;": 8657, "rArr;": 8658, "dArr;": 8659, "hArr;": 8660, "forall;": 8704, "part;": 8706, "exist;": 8707, "empty;": 8709, "nabla;": 8711, "isin;": 8712, "notin;": 8713, "ni;": 8715, "prod;": 8719, "sum;": 8721, "minus;": 8722, "lowast;": 8727, "radic;": 8730, "prop;": 8733, "infin;": 8734, "ang;": 8736, "and;": 8743, "or;": 8744, "cap;": 8745, "cup;": 8746, "int;": 8747, "there4;": 8756, "sim;": 8764, "cong;": 8773, "asymp;": 8776, "ne;": 8800, "equiv;": 8801, "le;": 8804, "ge;": 8805, "sub;": 8834, "sup;": 8835, "nsub;": 8836, "sube;": 8838, "supe;": 8839, "oplus;": 8853, "otimes;": 8855, "perp;": 8869, "sdot;": 8901, "lceil;": 8968, "rceil;": 8969, "lfloor;": 8970, "rfloor;": 8971, "lang;": 9001, "rang;": 9002, "loz;": 9674, "spades;": 9824, "clubs;": 9827, "hearts;": 9829, "diams;": 9830 } }).call(this) }, { "./_count": 1, "./_splitLeft": 2, "./_splitRight": 3 }] }, {}, [4])(4) }, "object" == s(r) ? t.exports = o() : void 0 === (i = "function" == typeof(n = o) ? n.call(r, e, r, t) : n) || (t.exports = i) }, 356: r => { "use strict";
                    r.exports = t }, 95: t => { "use strict";
                    t.exports = e }, 529: t => { "use strict";
                    t.exports = r } },
            i = {};

        function o(t) { var r = i[t]; if (void 0 !== r) return r.exports; var e = i[t] = { exports: {} }; return n[t](e, e.exports, o), e.exports }
        o.n = t => { var r = t && t.__esModule ? () => t.default : () => t; return o.d(r, { a: r }), r }, o.d = (t, r) => { for (var e in r) o.o(r, e) && !o.o(t, e) && Object.defineProperty(t, e, { enumerable: !0, get: r[e] }) }, o.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r), o.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }; var s = {}; return (() => { "use strict";
            o.r(s), o.d(s, { ATLEAST: () => u, COUNT: () => i, DOESNOTHAVE: () => l, ENDSWITH: () => d, HAS: () => p, ISLESS: () => a, ISTYPE: () => y, STARTSWITH: () => g, TESTCONTAINS: () => v, TESTCOUNTS: () => c, TESTDOESNOT: () => h }); var t = o(985),
                r = o.n(t),
                e = o(356),
                n = o(529);

            function i(t, n, i) { var o; return Array.isArray(t) ? o = (0, e.countBy)(arr, (function(t) {})) === i : "string" == typeof t && (o = r()(t).count(n) === i), o }

            function u(t, n, i) { var o; return Array.isArray(t) ? o = (0, e.countBy)(arr, (function(t) {})) : "string" == typeof t && (o = r()(t).count(n)), o >= i }

            function a(t, r, e) { if ("date" === e) return (0, n.isBefore)(t, r); if ("number" === e) return t <= r; if ("string" === e) { var i = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                        o = t.charAt(0).toLowerCase(),
                        s = r.charAt(0).toLowerCase(); return i.indexOf(o) <= i.indexOf(s) }
                console.log("not sure what type") }

            function c() { var t = i("hello hellodi", "div", 2);
                console.log("🚀 ~ file: counts.js ~ line 102 ~ TESTCOUNTS ~ shouldBeTrue", t); var r = a(1, 2, "number");
                console.log("🚀 ~ file: counts.js ~ line 104 ~ TESTCOUNTS ~ test2", r); var e = a("1993-12-11", "1994-12-11", "date");
                console.log("🚀 ~ file: counts.js ~ line 106 ~ TESTCOUNTS ~ isLessDates", e); var n = u("div div", "div", 1);
                console.log("🚀 ~ file: counts.js ~ line 108 ~ TESTCOUNTS ~ atLeastTrue", n) }

            function l(t, e) { return 0 === r()(t).count(e) }

            function h() { var t = l("{{>", ">");
                console.log("🚀 ~ file: doesNot.js ~ line 26 ~ TESTDOESNOT ~ getFalse", t) } var f = o(95);

            function p(t, e) { var n = (0, f.format)(t, "string"),
                    i = (0, f.format)(e, "string"); return r()(n).contains(i) }

            function g(t, e) { var n = (0, f.format)(t, "string"),
                    i = (0, f.format)(e, "string"); return r()(n).startsWith(i) }

            function d(t, e) { var n = (0, f.format)(t, "string"),
                    i = (0, f.format)(e, "string"); return r()(n).endsWith(i) }

            function v() { var t = g("hi", "h");
                console.log("🚀 ~ file: contains.js ~ line 60 ~ TESTCONTAINS ~ trueStarts", t); var r = g("asdfasdf", "A");
                console.log("🚀 ~ file: contains.js ~ line 61 ~ TESTCONTAINS ~ falseStarts", r); var e = d("HELLO", "O");
                console.log("🚀 ~ file: contains.js ~ line 62 ~ TESTCONTAINS ~ trueEnds", e); var n = d("hello", "z");
                console.log("🚀 ~ file: contains.js ~ line 63 ~ TESTCONTAINS ~ falseEnds", n); var i = p("asdf", "sd");
                console.log("🚀 ~ file: contains.js ~ line 64 ~ TESTCONTAINS ~ trueHas", i); var o = p("asdf", "z");
                console.log("🚀 ~ file: contains.js ~ line 65 ~ TESTCONTAINS ~ falseHas", o) }

            function m(t) { return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, m(t) }

            function y(t, e) { return t instanceof Date && "date" === e || !("array" !== e || !Array.isArray(t)) || "object" === e && "object" === m(t) || "string" === e && "string" == typeof t || "number" === e && "number" == typeof t || "boolean" === e && "boolean" == typeof t && !0 === r()(t).toBoolean() } })(), s })() }));
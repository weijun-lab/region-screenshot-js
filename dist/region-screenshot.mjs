var $i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fn(Oe) {
  return Oe && Oe.__esModule && Object.prototype.hasOwnProperty.call(Oe, "default") ? Oe.default : Oe;
}
var Un = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(Oe) {
  (function(a, d) {
    Oe.exports = a.document ? d(a, !0) : function(T) {
      if (!T.document)
        throw new Error("jQuery requires a window with a document");
      return d(T);
    };
  })(typeof window < "u" ? window : $i, function(a, d) {
    var T = [], M = Object.getPrototypeOf, w = T.slice, L = T.flat ? function(e) {
      return T.flat.call(e);
    } : function(e) {
      return T.concat.apply([], e);
    }, S = T.push, m = T.indexOf, b = {}, A = b.toString, R = b.hasOwnProperty, X = R.toString, B = X.call(Object), k = {}, E = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
    }, z = function(t) {
      return t != null && t === t.window;
    }, H = a.document, de = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function le(e, t, n) {
      n = n || H;
      var r, o, s = n.createElement("script");
      if (s.text = e, t)
        for (r in de)
          o = t[r] || t.getAttribute && t.getAttribute(r), o && s.setAttribute(r, o);
      n.head.appendChild(s).parentNode.removeChild(s);
    }
    function _e(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? b[A.call(e)] || "object" : typeof e;
    }
    var Ce = "3.7.1", Se = /HTML$/i, i = function(e, t) {
      return new i.fn.init(e, t);
    };
    i.fn = i.prototype = {
      // The current version of jQuery being used
      jquery: Ce,
      constructor: i,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return w.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(e) {
        return e == null ? w.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(e) {
        var t = i.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      // Execute a callback for every element in the matched set.
      each: function(e) {
        return i.each(this, e);
      },
      map: function(e) {
        return this.pushStack(i.map(this, function(t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function() {
        return this.pushStack(w.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(i.grep(this, function(e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(i.grep(this, function(e, t) {
          return t % 2;
        }));
      },
      eq: function(e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: S,
      sort: T.sort,
      splice: T.splice
    }, i.extend = i.fn.extend = function() {
      var e, t, n, r, o, s, l = arguments[0] || {}, f = 1, c = arguments.length, p = !1;
      for (typeof l == "boolean" && (p = l, l = arguments[f] || {}, f++), typeof l != "object" && !E(l) && (l = {}), f === c && (l = this, f--); f < c; f++)
        if ((e = arguments[f]) != null)
          for (t in e)
            r = e[t], !(t === "__proto__" || l === r) && (p && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = l[t], o && !Array.isArray(n) ? s = [] : !o && !i.isPlainObject(n) ? s = {} : s = n, o = !1, l[t] = i.extend(p, s, r)) : r !== void 0 && (l[t] = r));
      return l;
    }, i.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (Ce + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {
      },
      isPlainObject: function(e) {
        var t, n;
        return !e || A.call(e) !== "[object Object]" ? !1 : (t = M(e), t ? (n = R.call(t, "constructor") && t.constructor, typeof n == "function" && X.call(n) === B) : !0);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(e, t, n) {
        le(e, { nonce: t && t.nonce }, n);
      },
      each: function(e, t) {
        var n, r = 0;
        if (Y(e))
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
            ;
        else
          for (r in e)
            if (t.call(e[r], r, e[r]) === !1)
              break;
        return e;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(e) {
        var t, n = "", r = 0, o = e.nodeType;
        if (!o)
          for (; t = e[r++]; )
            n += i.text(t);
        return o === 1 || o === 11 ? e.textContent : o === 9 ? e.documentElement.textContent : o === 3 || o === 4 ? e.nodeValue : n;
      },
      // results is for internal usage only
      makeArray: function(e, t) {
        var n = t || [];
        return e != null && (Y(Object(e)) ? i.merge(
          n,
          typeof e == "string" ? [e] : e
        ) : S.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return t == null ? -1 : m.call(t, e, n);
      },
      isXMLDoc: function(e) {
        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
        return !Se.test(t || n && n.nodeName || "HTML");
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++)
          e[o++] = t[r];
        return e.length = o, e;
      },
      grep: function(e, t, n) {
        for (var r, o = [], s = 0, l = e.length, f = !n; s < l; s++)
          r = !t(e[s], s), r !== f && o.push(e[s]);
        return o;
      },
      // arg is for internal usage only
      map: function(e, t, n) {
        var r, o, s = 0, l = [];
        if (Y(e))
          for (r = e.length; s < r; s++)
            o = t(e[s], s, n), o != null && l.push(o);
        else
          for (s in e)
            o = t(e[s], s, n), o != null && l.push(o);
        return L(l);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: k
    }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = T[Symbol.iterator]), i.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(e, t) {
        b["[object " + t + "]"] = t.toLowerCase();
      }
    );
    function Y(e) {
      var t = !!e && "length" in e && e.length, n = _e(e);
      return E(e) || z(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
    }
    function I(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var J = T.pop, ae = T.sort, ne = T.splice, j = "[\\x20\\t\\r\\n\\f]", Q = new RegExp(
      "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
      "g"
    );
    i.contains = function(e, t) {
      var n = t && t.parentNode;
      return e === n || !!(n && n.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16));
    };
    var Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function Ne(e, t) {
      return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    }
    i.escapeSelector = function(e) {
      return (e + "").replace(Ee, Ne);
    };
    var fe = H, We = S;
    (function() {
      var e, t, n, r, o, s = We, l, f, c, p, x, _ = i.expando, v = 0, D = 0, V = It(), re = It(), K = It(), be = It(), ye = function(u, h) {
        return u === h && (o = !0), 0;
      }, Ve = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Ge = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ie = "\\[" + j + "*(" + Ge + ")(?:" + j + // Operator (capture 2)
      "*([*^$|!~]?=)" + j + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ge + "))|)" + j + "*\\]", ct = ":(" + Ge + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ie + ")*)|.*)\\)|)", se = new RegExp(j + "+", "g"), ge = new RegExp("^" + j + "*," + j + "*"), Mt = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), rn = new RegExp(j + "|>"), Qe = new RegExp(ct), At = new RegExp("^" + Ge + "$"), Je = {
        ID: new RegExp("^#(" + Ge + ")"),
        CLASS: new RegExp("^\\.(" + Ge + ")"),
        TAG: new RegExp("^(" + Ge + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + ct),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Ve + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      }, it = /^(?:input|select|textarea|button)$/i, rt = /^h\d$/i, ze = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, on = /[+~]/, tt = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"), nt = function(u, h) {
        var g = "0x" + u.slice(1) - 65536;
        return h || (g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, g & 1023 | 56320));
      }, ji = function() {
        ot();
      }, Ii = zt(
        function(u) {
          return u.disabled === !0 && I(u, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function Xi() {
        try {
          return l.activeElement;
        } catch {
        }
      }
      try {
        s.apply(
          T = w.call(fe.childNodes),
          fe.childNodes
        ), T[fe.childNodes.length].nodeType;
      } catch {
        s = {
          apply: function(h, g) {
            We.apply(h, w.call(g));
          },
          call: function(h) {
            We.apply(h, w.call(arguments, 1));
          }
        };
      }
      function ce(u, h, g, y) {
        var C, P, O, q, N, ee, U, G = h && h.ownerDocument, te = h ? h.nodeType : 9;
        if (g = g || [], typeof u != "string" || !u || te !== 1 && te !== 9 && te !== 11)
          return g;
        if (!y && (ot(h), h = h || l, c)) {
          if (te !== 11 && (N = ze.exec(u)))
            if (C = N[1]) {
              if (te === 9)
                if (O = h.getElementById(C)) {
                  if (O.id === C)
                    return s.call(g, O), g;
                } else
                  return g;
              else if (G && (O = G.getElementById(C)) && ce.contains(h, O) && O.id === C)
                return s.call(g, O), g;
            } else {
              if (N[2])
                return s.apply(g, h.getElementsByTagName(u)), g;
              if ((C = N[3]) && h.getElementsByClassName)
                return s.apply(g, h.getElementsByClassName(C)), g;
            }
          if (!be[u + " "] && (!p || !p.test(u))) {
            if (U = u, G = h, te === 1 && (rn.test(u) || Mt.test(u))) {
              for (G = on.test(u) && sn(h.parentNode) || h, (G != h || !k.scope) && ((q = h.getAttribute("id")) ? q = i.escapeSelector(q) : h.setAttribute("id", q = _)), ee = Pt(u), P = ee.length; P--; )
                ee[P] = (q ? "#" + q : ":scope") + " " + Xt(ee[P]);
              U = ee.join(",");
            }
            try {
              return s.apply(
                g,
                G.querySelectorAll(U)
              ), g;
            } catch {
              be(u, !0);
            } finally {
              q === _ && h.removeAttribute("id");
            }
          }
        }
        return Bn(u.replace(Q, "$1"), h, g, y);
      }
      function It() {
        var u = [];
        function h(g, y) {
          return u.push(g + " ") > t.cacheLength && delete h[u.shift()], h[g + " "] = y;
        }
        return h;
      }
      function Be(u) {
        return u[_] = !0, u;
      }
      function yt(u) {
        var h = l.createElement("fieldset");
        try {
          return !!u(h);
        } catch {
          return !1;
        } finally {
          h.parentNode && h.parentNode.removeChild(h), h = null;
        }
      }
      function zi(u) {
        return function(h) {
          return I(h, "input") && h.type === u;
        };
      }
      function qi(u) {
        return function(h) {
          return (I(h, "input") || I(h, "button")) && h.type === u;
        };
      }
      function Yn(u) {
        return function(h) {
          return "form" in h ? h.parentNode && h.disabled === !1 ? "label" in h ? "label" in h.parentNode ? h.parentNode.disabled === u : h.disabled === u : h.isDisabled === u || // Where there is no isDisabled, check manually
          h.isDisabled !== !u && Ii(h) === u : h.disabled === u : "label" in h ? h.disabled === u : !1;
        };
      }
      function ft(u) {
        return Be(function(h) {
          return h = +h, Be(function(g, y) {
            for (var C, P = u([], g.length, h), O = P.length; O--; )
              g[C = P[O]] && (g[C] = !(y[C] = g[C]));
          });
        });
      }
      function sn(u) {
        return u && typeof u.getElementsByTagName < "u" && u;
      }
      function ot(u) {
        var h, g = u ? u.ownerDocument || u : fe;
        return g == l || g.nodeType !== 9 || !g.documentElement || (l = g, f = l.documentElement, c = !i.isXMLDoc(l), x = f.matches || f.webkitMatchesSelector || f.msMatchesSelector, f.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        fe != l && (h = l.defaultView) && h.top !== h && h.addEventListener("unload", ji), k.getById = yt(function(y) {
          return f.appendChild(y).id = i.expando, !l.getElementsByName || !l.getElementsByName(i.expando).length;
        }), k.disconnectedMatch = yt(function(y) {
          return x.call(y, "*");
        }), k.scope = yt(function() {
          return l.querySelectorAll(":scope");
        }), k.cssHas = yt(function() {
          try {
            return l.querySelector(":has(*,:jqfake)"), !1;
          } catch {
            return !0;
          }
        }), k.getById ? (t.filter.ID = function(y) {
          var C = y.replace(tt, nt);
          return function(P) {
            return P.getAttribute("id") === C;
          };
        }, t.find.ID = function(y, C) {
          if (typeof C.getElementById < "u" && c) {
            var P = C.getElementById(y);
            return P ? [P] : [];
          }
        }) : (t.filter.ID = function(y) {
          var C = y.replace(tt, nt);
          return function(P) {
            var O = typeof P.getAttributeNode < "u" && P.getAttributeNode("id");
            return O && O.value === C;
          };
        }, t.find.ID = function(y, C) {
          if (typeof C.getElementById < "u" && c) {
            var P, O, q, N = C.getElementById(y);
            if (N) {
              if (P = N.getAttributeNode("id"), P && P.value === y)
                return [N];
              for (q = C.getElementsByName(y), O = 0; N = q[O++]; )
                if (P = N.getAttributeNode("id"), P && P.value === y)
                  return [N];
            }
            return [];
          }
        }), t.find.TAG = function(y, C) {
          return typeof C.getElementsByTagName < "u" ? C.getElementsByTagName(y) : C.querySelectorAll(y);
        }, t.find.CLASS = function(y, C) {
          if (typeof C.getElementsByClassName < "u" && c)
            return C.getElementsByClassName(y);
        }, p = [], yt(function(y) {
          var C;
          f.appendChild(y).innerHTML = "<a id='" + _ + "' href='' disabled='disabled'></a><select id='" + _ + "-\r\\' disabled='disabled'><option selected=''></option></select>", y.querySelectorAll("[selected]").length || p.push("\\[" + j + "*(?:value|" + Ve + ")"), y.querySelectorAll("[id~=" + _ + "-]").length || p.push("~="), y.querySelectorAll("a#" + _ + "+*").length || p.push(".#.+[+~]"), y.querySelectorAll(":checked").length || p.push(":checked"), C = l.createElement("input"), C.setAttribute("type", "hidden"), y.appendChild(C).setAttribute("name", "D"), f.appendChild(y).disabled = !0, y.querySelectorAll(":disabled").length !== 2 && p.push(":enabled", ":disabled"), C = l.createElement("input"), C.setAttribute("name", ""), y.appendChild(C), y.querySelectorAll("[name='']").length || p.push("\\[" + j + "*name" + j + "*=" + j + `*(?:''|"")`);
        }), k.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), ye = function(y, C) {
          if (y === C)
            return o = !0, 0;
          var P = !y.compareDocumentPosition - !C.compareDocumentPosition;
          return P || (P = (y.ownerDocument || y) == (C.ownerDocument || C) ? y.compareDocumentPosition(C) : (
            // Otherwise we know they are disconnected
            1
          ), P & 1 || !k.sortDetached && C.compareDocumentPosition(y) === P ? y === l || y.ownerDocument == fe && ce.contains(fe, y) ? -1 : C === l || C.ownerDocument == fe && ce.contains(fe, C) ? 1 : r ? m.call(r, y) - m.call(r, C) : 0 : P & 4 ? -1 : 1);
        }), l;
      }
      ce.matches = function(u, h) {
        return ce(u, null, null, h);
      }, ce.matchesSelector = function(u, h) {
        if (ot(u), c && !be[h + " "] && (!p || !p.test(h)))
          try {
            var g = x.call(u, h);
            if (g || k.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            u.document && u.document.nodeType !== 11)
              return g;
          } catch {
            be(h, !0);
          }
        return ce(h, l, null, [u]).length > 0;
      }, ce.contains = function(u, h) {
        return (u.ownerDocument || u) != l && ot(u), i.contains(u, h);
      }, ce.attr = function(u, h) {
        (u.ownerDocument || u) != l && ot(u);
        var g = t.attrHandle[h.toLowerCase()], y = g && R.call(t.attrHandle, h.toLowerCase()) ? g(u, h, !c) : void 0;
        return y !== void 0 ? y : u.getAttribute(h);
      }, ce.error = function(u) {
        throw new Error("Syntax error, unrecognized expression: " + u);
      }, i.uniqueSort = function(u) {
        var h, g = [], y = 0, C = 0;
        if (o = !k.sortStable, r = !k.sortStable && w.call(u, 0), ae.call(u, ye), o) {
          for (; h = u[C++]; )
            h === u[C] && (y = g.push(C));
          for (; y--; )
            ne.call(u, g[y], 1);
        }
        return r = null, u;
      }, i.fn.uniqueSort = function() {
        return this.pushStack(i.uniqueSort(w.apply(this)));
      }, t = i.expr = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: Be,
        match: Je,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(u) {
            return u[1] = u[1].replace(tt, nt), u[3] = (u[3] || u[4] || u[5] || "").replace(tt, nt), u[2] === "~=" && (u[3] = " " + u[3] + " "), u.slice(0, 4);
          },
          CHILD: function(u) {
            return u[1] = u[1].toLowerCase(), u[1].slice(0, 3) === "nth" ? (u[3] || ce.error(u[0]), u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * (u[3] === "even" || u[3] === "odd")), u[5] = +(u[7] + u[8] || u[3] === "odd")) : u[3] && ce.error(u[0]), u;
          },
          PSEUDO: function(u) {
            var h, g = !u[6] && u[2];
            return Je.CHILD.test(u[0]) ? null : (u[3] ? u[2] = u[4] || u[5] || "" : g && Qe.test(g) && // Get excess from tokenize (recursively)
            (h = Pt(g, !0)) && // advance to the next closing parenthesis
            (h = g.indexOf(")", g.length - h) - g.length) && (u[0] = u[0].slice(0, h), u[2] = g.slice(0, h)), u.slice(0, 3));
          }
        },
        filter: {
          TAG: function(u) {
            var h = u.replace(tt, nt).toLowerCase();
            return u === "*" ? function() {
              return !0;
            } : function(g) {
              return I(g, h);
            };
          },
          CLASS: function(u) {
            var h = V[u + " "];
            return h || (h = new RegExp("(^|" + j + ")" + u + "(" + j + "|$)")) && V(u, function(g) {
              return h.test(
                typeof g.className == "string" && g.className || typeof g.getAttribute < "u" && g.getAttribute("class") || ""
              );
            });
          },
          ATTR: function(u, h, g) {
            return function(y) {
              var C = ce.attr(y, u);
              return C == null ? h === "!=" : h ? (C += "", h === "=" ? C === g : h === "!=" ? C !== g : h === "^=" ? g && C.indexOf(g) === 0 : h === "*=" ? g && C.indexOf(g) > -1 : h === "$=" ? g && C.slice(-g.length) === g : h === "~=" ? (" " + C.replace(se, " ") + " ").indexOf(g) > -1 : h === "|=" ? C === g || C.slice(0, g.length + 1) === g + "-" : !1) : !0;
            };
          },
          CHILD: function(u, h, g, y, C) {
            var P = u.slice(0, 3) !== "nth", O = u.slice(-4) !== "last", q = h === "of-type";
            return y === 1 && C === 0 ? (
              // Shortcut for :nth-*(n)
              function(N) {
                return !!N.parentNode;
              }
            ) : function(N, ee, U) {
              var G, te, F, pe, Re, Te = P !== O ? "nextSibling" : "previousSibling", qe = N.parentNode, Ke = q && N.nodeName.toLowerCase(), xt = !U && !q, De = !1;
              if (qe) {
                if (P) {
                  for (; Te; ) {
                    for (F = N; F = F[Te]; )
                      if (q ? I(F, Ke) : F.nodeType === 1)
                        return !1;
                    Re = Te = u === "only" && !Re && "nextSibling";
                  }
                  return !0;
                }
                if (Re = [O ? qe.firstChild : qe.lastChild], O && xt) {
                  for (te = qe[_] || (qe[_] = {}), G = te[u] || [], pe = G[0] === v && G[1], De = pe && G[2], F = pe && qe.childNodes[pe]; F = ++pe && F && F[Te] || // Fallback to seeking `elem` from the start
                  (De = pe = 0) || Re.pop(); )
                    if (F.nodeType === 1 && ++De && F === N) {
                      te[u] = [v, pe, De];
                      break;
                    }
                } else if (xt && (te = N[_] || (N[_] = {}), G = te[u] || [], pe = G[0] === v && G[1], De = pe), De === !1)
                  for (; (F = ++pe && F && F[Te] || (De = pe = 0) || Re.pop()) && !((q ? I(F, Ke) : F.nodeType === 1) && ++De && (xt && (te = F[_] || (F[_] = {}), te[u] = [v, De]), F === N)); )
                    ;
                return De -= C, De === y || De % y === 0 && De / y >= 0;
              }
            };
          },
          PSEUDO: function(u, h) {
            var g, y = t.pseudos[u] || t.setFilters[u.toLowerCase()] || ce.error("unsupported pseudo: " + u);
            return y[_] ? y(h) : y.length > 1 ? (g = [u, u, "", h], t.setFilters.hasOwnProperty(u.toLowerCase()) ? Be(function(C, P) {
              for (var O, q = y(C, h), N = q.length; N--; )
                O = m.call(C, q[N]), C[O] = !(P[O] = q[N]);
            }) : function(C) {
              return y(C, 0, g);
            }) : y;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          not: Be(function(u) {
            var h = [], g = [], y = cn(u.replace(Q, "$1"));
            return y[_] ? Be(function(C, P, O, q) {
              for (var N, ee = y(C, null, q, []), U = C.length; U--; )
                (N = ee[U]) && (C[U] = !(P[U] = N));
            }) : function(C, P, O) {
              return h[0] = C, y(h, null, O, g), h[0] = null, !g.pop();
            };
          }),
          has: Be(function(u) {
            return function(h) {
              return ce(u, h).length > 0;
            };
          }),
          contains: Be(function(u) {
            return u = u.replace(tt, nt), function(h) {
              return (h.textContent || i.text(h)).indexOf(u) > -1;
            };
          }),
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // https://www.w3.org/TR/selectors/#lang-pseudo
          lang: Be(function(u) {
            return At.test(u || "") || ce.error("unsupported lang: " + u), u = u.replace(tt, nt).toLowerCase(), function(h) {
              var g;
              do
                if (g = c ? h.lang : h.getAttribute("xml:lang") || h.getAttribute("lang"))
                  return g = g.toLowerCase(), g === u || g.indexOf(u + "-") === 0;
              while ((h = h.parentNode) && h.nodeType === 1);
              return !1;
            };
          }),
          // Miscellaneous
          target: function(u) {
            var h = a.location && a.location.hash;
            return h && h.slice(1) === u.id;
          },
          root: function(u) {
            return u === f;
          },
          focus: function(u) {
            return u === Xi() && l.hasFocus() && !!(u.type || u.href || ~u.tabIndex);
          },
          // Boolean properties
          enabled: Yn(!1),
          disabled: Yn(!0),
          checked: function(u) {
            return I(u, "input") && !!u.checked || I(u, "option") && !!u.selected;
          },
          selected: function(u) {
            return u.parentNode && u.parentNode.selectedIndex, u.selected === !0;
          },
          // Contents
          empty: function(u) {
            for (u = u.firstChild; u; u = u.nextSibling)
              if (u.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(u) {
            return !t.pseudos.empty(u);
          },
          // Element/input types
          header: function(u) {
            return rt.test(u.nodeName);
          },
          input: function(u) {
            return it.test(u.nodeName);
          },
          button: function(u) {
            return I(u, "input") && u.type === "button" || I(u, "button");
          },
          text: function(u) {
            var h;
            return I(u, "input") && u.type === "text" && // Support: IE <10 only
            // New HTML5 attribute values (e.g., "search") appear
            // with elem.type === "text"
            ((h = u.getAttribute("type")) == null || h.toLowerCase() === "text");
          },
          // Position-in-collection
          first: ft(function() {
            return [0];
          }),
          last: ft(function(u, h) {
            return [h - 1];
          }),
          eq: ft(function(u, h, g) {
            return [g < 0 ? g + h : g];
          }),
          even: ft(function(u, h) {
            for (var g = 0; g < h; g += 2)
              u.push(g);
            return u;
          }),
          odd: ft(function(u, h) {
            for (var g = 1; g < h; g += 2)
              u.push(g);
            return u;
          }),
          lt: ft(function(u, h, g) {
            var y;
            for (g < 0 ? y = g + h : g > h ? y = h : y = g; --y >= 0; )
              u.push(y);
            return u;
          }),
          gt: ft(function(u, h, g) {
            for (var y = g < 0 ? g + h : g; ++y < h; )
              u.push(y);
            return u;
          })
        }
      }, t.pseudos.nth = t.pseudos.eq;
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[e] = zi(e);
      for (e in { submit: !0, reset: !0 })
        t.pseudos[e] = qi(e);
      function $n() {
      }
      $n.prototype = t.filters = t.pseudos, t.setFilters = new $n();
      function Pt(u, h) {
        var g, y, C, P, O, q, N, ee = re[u + " "];
        if (ee)
          return h ? 0 : ee.slice(0);
        for (O = u, q = [], N = t.preFilter; O; ) {
          (!g || (y = ge.exec(O))) && (y && (O = O.slice(y[0].length) || O), q.push(C = [])), g = !1, (y = Mt.exec(O)) && (g = y.shift(), C.push({
            value: g,
            // Cast descendant combinators to space
            type: y[0].replace(Q, " ")
          }), O = O.slice(g.length));
          for (P in t.filter)
            (y = Je[P].exec(O)) && (!N[P] || (y = N[P](y))) && (g = y.shift(), C.push({
              value: g,
              type: P,
              matches: y
            }), O = O.slice(g.length));
          if (!g)
            break;
        }
        return h ? O.length : O ? ce.error(u) : (
          // Cache the tokens
          re(u, q).slice(0)
        );
      }
      function Xt(u) {
        for (var h = 0, g = u.length, y = ""; h < g; h++)
          y += u[h].value;
        return y;
      }
      function zt(u, h, g) {
        var y = h.dir, C = h.next, P = C || y, O = g && P === "parentNode", q = D++;
        return h.first ? (
          // Check against closest ancestor/preceding element
          function(N, ee, U) {
            for (; N = N[y]; )
              if (N.nodeType === 1 || O)
                return u(N, ee, U);
            return !1;
          }
        ) : (
          // Check against all ancestor/preceding elements
          function(N, ee, U) {
            var G, te, F = [v, q];
            if (U) {
              for (; N = N[y]; )
                if ((N.nodeType === 1 || O) && u(N, ee, U))
                  return !0;
            } else
              for (; N = N[y]; )
                if (N.nodeType === 1 || O)
                  if (te = N[_] || (N[_] = {}), C && I(N, C))
                    N = N[y] || N;
                  else {
                    if ((G = te[P]) && G[0] === v && G[1] === q)
                      return F[2] = G[2];
                    if (te[P] = F, F[2] = u(N, ee, U))
                      return !0;
                  }
            return !1;
          }
        );
      }
      function an(u) {
        return u.length > 1 ? function(h, g, y) {
          for (var C = u.length; C--; )
            if (!u[C](h, g, y))
              return !1;
          return !0;
        } : u[0];
      }
      function Wi(u, h, g) {
        for (var y = 0, C = h.length; y < C; y++)
          ce(u, h[y], g);
        return g;
      }
      function qt(u, h, g, y, C) {
        for (var P, O = [], q = 0, N = u.length, ee = h != null; q < N; q++)
          (P = u[q]) && (!g || g(P, y, C)) && (O.push(P), ee && h.push(q));
        return O;
      }
      function ln(u, h, g, y, C, P) {
        return y && !y[_] && (y = ln(y)), C && !C[_] && (C = ln(C, P)), Be(function(O, q, N, ee) {
          var U, G, te, F, pe = [], Re = [], Te = q.length, qe = O || Wi(
            h || "*",
            N.nodeType ? [N] : N,
            []
          ), Ke = u && (O || !h) ? qt(qe, pe, u, N, ee) : qe;
          if (g ? (F = C || (O ? u : Te || y) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            q
          ), g(Ke, F, N, ee)) : F = Ke, y)
            for (U = qt(F, Re), y(U, [], N, ee), G = U.length; G--; )
              (te = U[G]) && (F[Re[G]] = !(Ke[Re[G]] = te));
          if (O) {
            if (C || u) {
              if (C) {
                for (U = [], G = F.length; G--; )
                  (te = F[G]) && U.push(Ke[G] = te);
                C(null, F = [], U, ee);
              }
              for (G = F.length; G--; )
                (te = F[G]) && (U = C ? m.call(O, te) : pe[G]) > -1 && (O[U] = !(q[U] = te));
            }
          } else
            F = qt(
              F === q ? F.splice(Te, F.length) : F
            ), C ? C(null, q, F, ee) : s.apply(q, F);
        });
      }
      function un(u) {
        for (var h, g, y, C = u.length, P = t.relative[u[0].type], O = P || t.relative[" "], q = P ? 1 : 0, N = zt(function(G) {
          return G === h;
        }, O, !0), ee = zt(function(G) {
          return m.call(h, G) > -1;
        }, O, !0), U = [function(G, te, F) {
          var pe = !P && (F || te != n) || ((h = te).nodeType ? N(G, te, F) : ee(G, te, F));
          return h = null, pe;
        }]; q < C; q++)
          if (g = t.relative[u[q].type])
            U = [zt(an(U), g)];
          else {
            if (g = t.filter[u[q].type].apply(null, u[q].matches), g[_]) {
              for (y = ++q; y < C && !t.relative[u[y].type]; y++)
                ;
              return ln(
                q > 1 && an(U),
                q > 1 && Xt(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  u.slice(0, q - 1).concat({ value: u[q - 2].type === " " ? "*" : "" })
                ).replace(Q, "$1"),
                g,
                q < y && un(u.slice(q, y)),
                y < C && un(u = u.slice(y)),
                y < C && Xt(u)
              );
            }
            U.push(g);
          }
        return an(U);
      }
      function Yi(u, h) {
        var g = h.length > 0, y = u.length > 0, C = function(P, O, q, N, ee) {
          var U, G, te, F = 0, pe = "0", Re = P && [], Te = [], qe = n, Ke = P || y && t.find.TAG("*", ee), xt = v += qe == null ? 1 : Math.random() || 0.1, De = Ke.length;
          for (ee && (n = O == l || O || ee); pe !== De && (U = Ke[pe]) != null; pe++) {
            if (y && U) {
              for (G = 0, !O && U.ownerDocument != l && (ot(U), q = !c); te = u[G++]; )
                if (te(U, O || l, q)) {
                  s.call(N, U);
                  break;
                }
              ee && (v = xt);
            }
            g && ((U = !te && U) && F--, P && Re.push(U));
          }
          if (F += pe, g && pe !== F) {
            for (G = 0; te = h[G++]; )
              te(Re, Te, O, q);
            if (P) {
              if (F > 0)
                for (; pe--; )
                  Re[pe] || Te[pe] || (Te[pe] = J.call(N));
              Te = qt(Te);
            }
            s.apply(N, Te), ee && !P && Te.length > 0 && F + h.length > 1 && i.uniqueSort(N);
          }
          return ee && (v = xt, n = qe), Re;
        };
        return g ? Be(C) : C;
      }
      function cn(u, h) {
        var g, y = [], C = [], P = K[u + " "];
        if (!P) {
          for (h || (h = Pt(u)), g = h.length; g--; )
            P = un(h[g]), P[_] ? y.push(P) : C.push(P);
          P = K(
            u,
            Yi(C, y)
          ), P.selector = u;
        }
        return P;
      }
      function Bn(u, h, g, y) {
        var C, P, O, q, N, ee = typeof u == "function" && u, U = !y && Pt(u = ee.selector || u);
        if (g = g || [], U.length === 1) {
          if (P = U[0] = U[0].slice(0), P.length > 2 && (O = P[0]).type === "ID" && h.nodeType === 9 && c && t.relative[P[1].type]) {
            if (h = (t.find.ID(
              O.matches[0].replace(tt, nt),
              h
            ) || [])[0], h)
              ee && (h = h.parentNode);
            else
              return g;
            u = u.slice(P.shift().value.length);
          }
          for (C = Je.needsContext.test(u) ? 0 : P.length; C-- && (O = P[C], !t.relative[q = O.type]); )
            if ((N = t.find[q]) && (y = N(
              O.matches[0].replace(tt, nt),
              on.test(P[0].type) && sn(h.parentNode) || h
            ))) {
              if (P.splice(C, 1), u = y.length && Xt(P), !u)
                return s.apply(g, y), g;
              break;
            }
        }
        return (ee || cn(u, U))(
          y,
          h,
          !c,
          g,
          !h || on.test(u) && sn(h.parentNode) || h
        ), g;
      }
      k.sortStable = _.split("").sort(ye).join("") === _, ot(), k.sortDetached = yt(function(u) {
        return u.compareDocumentPosition(l.createElement("fieldset")) & 1;
      }), i.find = ce, i.expr[":"] = i.expr.pseudos, i.unique = i.uniqueSort, ce.compile = cn, ce.select = Bn, ce.setDocument = ot, ce.tokenize = Pt, ce.escape = i.escapeSelector, ce.getText = i.text, ce.isXML = i.isXMLDoc, ce.selectors = i.expr, ce.support = i.support, ce.uniqueSort = i.uniqueSort;
    })();
    var me = function(e, t, n) {
      for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (o && i(e).is(n))
            break;
          r.push(e);
        }
      return r;
    }, xe = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && n.push(e);
      return n;
    }, Me = i.expr.match.needsContext, Ye = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function ke(e, t, n) {
      return E(t) ? i.grep(e, function(r, o) {
        return !!t.call(r, o, r) !== n;
      }) : t.nodeType ? i.grep(e, function(r) {
        return r === t !== n;
      }) : typeof t != "string" ? i.grep(e, function(r) {
        return m.call(t, r) > -1 !== n;
      }) : i.filter(t, e, n);
    }
    i.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
        return o.nodeType === 1;
      }));
    }, i.fn.extend({
      find: function(e) {
        var t, n, r = this.length, o = this;
        if (typeof e != "string")
          return this.pushStack(i(e).filter(function() {
            for (t = 0; t < r; t++)
              if (i.contains(o[t], this))
                return !0;
          }));
        for (n = this.pushStack([]), t = 0; t < r; t++)
          i.find(e, o[t], n);
        return r > 1 ? i.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(ke(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(ke(this, e || [], !0));
      },
      is: function(e) {
        return !!ke(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof e == "string" && Me.test(e) ? i(e) : e || [],
          !1
        ).length;
      }
    });
    var je, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Z = i.fn.init = function(e, t, n) {
      var r, o;
      if (!e)
        return this;
      if (n = n || je, typeof e == "string")
        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = $.exec(e), r && (r[1] || !t))
          if (r[1]) {
            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(
              r[1],
              t && t.nodeType ? t.ownerDocument || t : H,
              !0
            )), Ye.test(r[1]) && i.isPlainObject(t))
              for (r in t)
                E(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          } else
            return o = H.getElementById(r[2]), o && (this[0] = o, this.length = 1), this;
        else
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      else {
        if (e.nodeType)
          return this[0] = e, this.length = 1, this;
        if (E(e))
          return n.ready !== void 0 ? n.ready(e) : (
            // Execute immediately if ready is not present
            e(i)
          );
      }
      return i.makeArray(e, this);
    };
    Z.prototype = i.fn, je = i(H);
    var he = /^(?:parents|prev(?:Until|All))/, ue = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    i.fn.extend({
      has: function(e) {
        var t = i(e, this), n = t.length;
        return this.filter(function() {
          for (var r = 0; r < n; r++)
            if (i.contains(this, t[r]))
              return !0;
        });
      },
      closest: function(e, t) {
        var n, r = 0, o = this.length, s = [], l = typeof e != "string" && i(e);
        if (!Me.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (l ? l.index(n) > -1 : (
                // Don't pass non-elements to jQuery#find
                n.nodeType === 1 && i.find.matchesSelector(n, e)
              ))) {
                s.push(n);
                break;
              }
        }
        return this.pushStack(s.length > 1 ? i.uniqueSort(s) : s);
      },
      // Determine the position of an element within the set
      index: function(e) {
        return e ? typeof e == "string" ? m.call(i(e), this[0]) : m.call(
          this,
          // If it receives a jQuery object, the first element is used
          e.jquery ? e[0] : e
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(e, t) {
        return this.pushStack(
          i.uniqueSort(
            i.merge(this.get(), i(e, t))
          )
        );
      },
      addBack: function(e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }
    });
    function we(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; )
        ;
      return e;
    }
    i.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function(e) {
        return me(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return me(e, "parentNode", n);
      },
      next: function(e) {
        return we(e, "nextSibling");
      },
      prev: function(e) {
        return we(e, "previousSibling");
      },
      nextAll: function(e) {
        return me(e, "nextSibling");
      },
      prevAll: function(e) {
        return me(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return me(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return me(e, "previousSibling", n);
      },
      siblings: function(e) {
        return xe((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return xe(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        M(e.contentDocument) ? e.contentDocument : (I(e, "template") && (e = e.content || e), i.merge([], e.childNodes));
      }
    }, function(e, t) {
      i.fn[e] = function(n, r) {
        var o = i.map(this, t, n);
        return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (o = i.filter(r, o)), this.length > 1 && (ue[e] || i.uniqueSort(o), he.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var ve = /[^\x20\t\r\n\f]+/g;
    function wt(e) {
      var t = {};
      return i.each(e.match(ve) || [], function(n, r) {
        t[r] = !0;
      }), t;
    }
    i.Callbacks = function(e) {
      e = typeof e == "string" ? wt(e) : i.extend({}, e);
      var t, n, r, o, s = [], l = [], f = -1, c = function() {
        for (o = o || e.once, r = t = !0; l.length; f = -1)
          for (n = l.shift(); ++f < s.length; )
            s[f].apply(n[0], n[1]) === !1 && e.stopOnFalse && (f = s.length, n = !1);
        e.memory || (n = !1), t = !1, o && (n ? s = [] : s = "");
      }, p = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return s && (n && !t && (f = s.length - 1, l.push(n)), function x(_) {
            i.each(_, function(v, D) {
              E(D) ? (!e.unique || !p.has(D)) && s.push(D) : D && D.length && _e(D) !== "string" && x(D);
            });
          }(arguments), n && !t && c()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return i.each(arguments, function(x, _) {
            for (var v; (v = i.inArray(_, s, v)) > -1; )
              s.splice(v, 1), v <= f && f--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(x) {
          return x ? i.inArray(x, s) > -1 : s.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return s && (s = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return o = l = [], s = n = "", this;
        },
        disabled: function() {
          return !s;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return o = l = [], !n && !t && (s = n = ""), this;
        },
        locked: function() {
          return !!o;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(x, _) {
          return o || (_ = _ || [], _ = [x, _.slice ? _.slice() : _], l.push(_), t || c()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return p.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!r;
        }
      };
      return p;
    };
    function Fe(e) {
      return e;
    }
    function Ae(e) {
      throw e;
    }
    function Ie(e, t, n, r) {
      var o;
      try {
        e && E(o = e.promise) ? o.call(e).done(t).fail(n) : e && E(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (s) {
        n.apply(void 0, [s]);
      }
    }
    i.extend({
      Deferred: function(e) {
        var t = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], n = "pending", r = {
          state: function() {
            return n;
          },
          always: function() {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function(s) {
            return r.then(null, s);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var s = arguments;
            return i.Deferred(function(l) {
              i.each(t, function(f, c) {
                var p = E(s[c[4]]) && s[c[4]];
                o[c[1]](function() {
                  var x = p && p.apply(this, arguments);
                  x && E(x.promise) ? x.promise().progress(l.notify).done(l.resolve).fail(l.reject) : l[c[0] + "With"](
                    this,
                    p ? [x] : arguments
                  );
                });
              }), s = null;
            }).promise();
          },
          then: function(s, l, f) {
            var c = 0;
            function p(x, _, v, D) {
              return function() {
                var V = this, re = arguments, K = function() {
                  var ye, Ve;
                  if (!(x < c)) {
                    if (ye = v.apply(V, re), ye === _.promise())
                      throw new TypeError("Thenable self-resolution");
                    Ve = ye && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof ye == "object" || typeof ye == "function") && ye.then, E(Ve) ? D ? Ve.call(
                      ye,
                      p(c, _, Fe, D),
                      p(c, _, Ae, D)
                    ) : (c++, Ve.call(
                      ye,
                      p(c, _, Fe, D),
                      p(c, _, Ae, D),
                      p(
                        c,
                        _,
                        Fe,
                        _.notifyWith
                      )
                    )) : (v !== Fe && (V = void 0, re = [ye]), (D || _.resolveWith)(V, re));
                  }
                }, be = D ? K : function() {
                  try {
                    K();
                  } catch (ye) {
                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(
                      ye,
                      be.error
                    ), x + 1 >= c && (v !== Ae && (V = void 0, re = [ye]), _.rejectWith(V, re));
                  }
                };
                x ? be() : (i.Deferred.getErrorHook ? be.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (be.error = i.Deferred.getStackHook()), a.setTimeout(be));
              };
            }
            return i.Deferred(function(x) {
              t[0][3].add(
                p(
                  0,
                  x,
                  E(f) ? f : Fe,
                  x.notifyWith
                )
              ), t[1][3].add(
                p(
                  0,
                  x,
                  E(s) ? s : Fe
                )
              ), t[2][3].add(
                p(
                  0,
                  x,
                  E(l) ? l : Ae
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(s) {
            return s != null ? i.extend(s, r) : r;
          }
        }, o = {};
        return i.each(t, function(s, l) {
          var f = l[2], c = l[5];
          r[l[1]] = f.add, c && f.add(
            function() {
              n = c;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            t[3 - s][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            t[3 - s][3].disable,
            // progress_callbacks.lock
            t[0][2].lock,
            // progress_handlers.lock
            t[0][3].lock
          ), f.add(l[3].fire), o[l[0]] = function() {
            return o[l[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[l[0] + "With"] = f.fireWith;
        }), r.promise(o), e && e.call(o, o), o;
      },
      // Deferred helper
      when: function(e) {
        var t = arguments.length, n = t, r = Array(n), o = w.call(arguments), s = i.Deferred(), l = function(f) {
          return function(c) {
            r[f] = this, o[f] = arguments.length > 1 ? w.call(arguments) : c, --t || s.resolveWith(r, o);
          };
        };
        if (t <= 1 && (Ie(
          e,
          s.done(l(n)).resolve,
          s.reject,
          !t
        ), s.state() === "pending" || E(o[n] && o[n].then)))
          return s.then();
        for (; n--; )
          Ie(o[n], l(n), s.reject);
        return s.promise();
      }
    });
    var st = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(e, t) {
      a.console && a.console.warn && e && st.test(e.name) && a.console.warn(
        "jQuery.Deferred exception: " + e.message,
        e.stack,
        t
      );
    }, i.readyException = function(e) {
      a.setTimeout(function() {
        throw e;
      });
    };
    var Wt = i.Deferred();
    i.fn.ready = function(e) {
      return Wt.then(e).catch(function(t) {
        i.readyException(t);
      }), this;
    }, i.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(e) {
        (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && Wt.resolveWith(H, [i]));
      }
    }), i.ready.then = Wt.then;
    function Lt() {
      H.removeEventListener("DOMContentLoaded", Lt), a.removeEventListener("load", Lt), i.ready();
    }
    H.readyState === "complete" || H.readyState !== "loading" && !H.documentElement.doScroll ? a.setTimeout(i.ready) : (H.addEventListener("DOMContentLoaded", Lt), a.addEventListener("load", Lt));
    var Ze = function(e, t, n, r, o, s, l) {
      var f = 0, c = e.length, p = n == null;
      if (_e(n) === "object") {
        o = !0;
        for (f in n)
          Ze(e, t, f, n[f], !0, s, l);
      } else if (r !== void 0 && (o = !0, E(r) || (l = !0), p && (l ? (t.call(e, r), t = null) : (p = t, t = function(x, _, v) {
        return p.call(i(x), v);
      })), t))
        for (; f < c; f++)
          t(
            e[f],
            n,
            l ? r : r.call(e[f], f, t(e[f], n))
          );
      return o ? e : p ? t.call(e) : c ? t(e[0], n) : s;
    }, Gn = /^-ms-/, Qn = /-([a-z])/g;
    function Jn(e, t) {
      return t.toUpperCase();
    }
    function Ue(e) {
      return e.replace(Gn, "ms-").replace(Qn, Jn);
    }
    var bt = function(e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function Ct() {
      this.expando = i.expando + Ct.uid++;
    }
    Ct.uid = 1, Ct.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, bt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function(e, t, n) {
        var r, o = this.cache(e);
        if (typeof t == "string")
          o[Ue(t)] = n;
        else
          for (r in t)
            o[Ue(r)] = t[r];
        return o;
      },
      get: function(e, t) {
        return t === void 0 ? this.cache(e) : (
          // Always use camelCase key (gh-2257)
          e[this.expando] && e[this.expando][Ue(t)]
        );
      },
      access: function(e, t, n) {
        return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t);
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (r !== void 0) {
          if (t !== void 0)
            for (Array.isArray(t) ? t = t.map(Ue) : (t = Ue(t), t = t in r ? [t] : t.match(ve) || []), n = t.length; n--; )
              delete r[t[n]];
          (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return t !== void 0 && !i.isEmptyObject(t);
      }
    };
    var W = new Ct(), Pe = new Ct(), Kn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Zn = /[A-Z]/g;
    function ei(e) {
      return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Kn.test(e) ? JSON.parse(e) : e;
    }
    function hn(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (r = "data-" + t.replace(Zn, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
          try {
            n = ei(n);
          } catch {
          }
          Pe.set(e, t, n);
        } else
          n = void 0;
      return n;
    }
    i.extend({
      hasData: function(e) {
        return Pe.hasData(e) || W.hasData(e);
      },
      data: function(e, t, n) {
        return Pe.access(e, t, n);
      },
      removeData: function(e, t) {
        Pe.remove(e, t);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(e, t, n) {
        return W.access(e, t, n);
      },
      _removeData: function(e, t) {
        W.remove(e, t);
      }
    }), i.fn.extend({
      data: function(e, t) {
        var n, r, o, s = this[0], l = s && s.attributes;
        if (e === void 0) {
          if (this.length && (o = Pe.get(s), s.nodeType === 1 && !W.get(s, "hasDataAttrs"))) {
            for (n = l.length; n--; )
              l[n] && (r = l[n].name, r.indexOf("data-") === 0 && (r = Ue(r.slice(5)), hn(s, r, o[r])));
            W.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return typeof e == "object" ? this.each(function() {
          Pe.set(this, e);
        }) : Ze(this, function(f) {
          var c;
          if (s && f === void 0)
            return c = Pe.get(s, e), c !== void 0 || (c = hn(s, e), c !== void 0) ? c : void 0;
          this.each(function() {
            Pe.set(this, e, f);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function(e) {
        return this.each(function() {
          Pe.remove(this, e);
        });
      }
    }), i.extend({
      queue: function(e, t, n) {
        var r;
        if (e)
          return t = (t || "fx") + "queue", r = W.get(e, t), n && (!r || Array.isArray(n) ? r = W.access(e, t, i.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = i.queue(e, t), r = n.length, o = n.shift(), s = i._queueHooks(e, t), l = function() {
          i.dequeue(e, t);
        };
        o === "inprogress" && (o = n.shift(), r--), o && (t === "fx" && n.unshift("inprogress"), delete s.stop, o.call(e, l, s)), !r && s && s.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return W.get(e, n) || W.access(e, n, {
          empty: i.Callbacks("once memory").add(function() {
            W.remove(e, [t + "queue", n]);
          })
        });
      }
    }), i.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function() {
          var r = i.queue(this, e, t);
          i._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
        });
      },
      dequeue: function(e) {
        return this.each(function() {
          i.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(e, t) {
        var n, r = 1, o = i.Deferred(), s = this, l = this.length, f = function() {
          --r || o.resolveWith(s, [s]);
        };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; l--; )
          n = W.get(s[l], e + "queueHooks"), n && n.empty && (r++, n.empty.add(f));
        return f(), o.promise(t);
      }
    });
    var dn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = new RegExp("^(?:([+-])=|)(" + dn + ")([a-z%]*)$", "i"), et = ["Top", "Right", "Bottom", "Left"], at = H.documentElement, ht = function(e) {
      return i.contains(e.ownerDocument, e);
    }, ti = { composed: !0 };
    at.getRootNode && (ht = function(e) {
      return i.contains(e.ownerDocument, e) || e.getRootNode(ti) === e.ownerDocument;
    });
    var Ht = function(e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      ht(e) && i.css(e, "display") === "none";
    };
    function pn(e, t, n, r) {
      var o, s, l = 20, f = r ? function() {
        return r.cur();
      } : function() {
        return i.css(e, t, "");
      }, c = f(), p = n && n[3] || (i.cssNumber[t] ? "" : "px"), x = e.nodeType && (i.cssNumber[t] || p !== "px" && +c) && Tt.exec(i.css(e, t));
      if (x && x[3] !== p) {
        for (c = c / 2, p = p || x[3], x = +c || 1; l--; )
          i.style(e, t, x + p), (1 - s) * (1 - (s = f() / c || 0.5)) <= 0 && (l = 0), x = x / s;
        x = x * 2, i.style(e, t, x + p), n = n || [];
      }
      return n && (x = +x || +c || 0, o = n[1] ? x + (n[1] + 1) * n[2] : +n[2], r && (r.unit = p, r.start = x, r.end = o)), o;
    }
    var gn = {};
    function ni(e) {
      var t, n = e.ownerDocument, r = e.nodeName, o = gn[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = i.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), gn[r] = o, o);
    }
    function dt(e, t) {
      for (var n, r, o = [], s = 0, l = e.length; s < l; s++)
        r = e[s], r.style && (n = r.style.display, t ? (n === "none" && (o[s] = W.get(r, "display") || null, o[s] || (r.style.display = "")), r.style.display === "" && Ht(r) && (o[s] = ni(r))) : n !== "none" && (o[s] = "none", W.set(r, "display", n)));
      for (s = 0; s < l; s++)
        o[s] != null && (e[s].style.display = o[s]);
      return e;
    }
    i.fn.extend({
      show: function() {
        return dt(this, !0);
      },
      hide: function() {
        return dt(this);
      },
      toggle: function(e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
          Ht(this) ? i(this).show() : i(this).hide();
        });
      }
    });
    var _t = /^(?:checkbox|radio)$/i, vn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, mn = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var e = H.createDocumentFragment(), t = e.appendChild(H.createElement("div")), n = H.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), k.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", k.option = !!t.lastChild;
    })();
    var Xe = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, k.option || (Xe.optgroup = Xe.option = [1, "<select multiple='multiple'>", "</select>"]);
    function Le(e, t) {
      var n;
      return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && I(e, t) ? i.merge([e], n) : n;
    }
    function Yt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        W.set(
          e[n],
          "globalEval",
          !t || W.get(t[n], "globalEval")
        );
    }
    var ii = /<|&#?\w+;/;
    function yn(e, t, n, r, o) {
      for (var s, l, f, c, p, x, _ = t.createDocumentFragment(), v = [], D = 0, V = e.length; D < V; D++)
        if (s = e[D], s || s === 0)
          if (_e(s) === "object")
            i.merge(v, s.nodeType ? [s] : s);
          else if (!ii.test(s))
            v.push(t.createTextNode(s));
          else {
            for (l = l || _.appendChild(t.createElement("div")), f = (vn.exec(s) || ["", ""])[1].toLowerCase(), c = Xe[f] || Xe._default, l.innerHTML = c[1] + i.htmlPrefilter(s) + c[2], x = c[0]; x--; )
              l = l.lastChild;
            i.merge(v, l.childNodes), l = _.firstChild, l.textContent = "";
          }
      for (_.textContent = "", D = 0; s = v[D++]; ) {
        if (r && i.inArray(s, r) > -1) {
          o && o.push(s);
          continue;
        }
        if (p = ht(s), l = Le(_.appendChild(s), "script"), p && Yt(l), n)
          for (x = 0; s = l[x++]; )
            mn.test(s.type || "") && n.push(s);
      }
      return _;
    }
    var xn = /^([^.]*)(?:\.(.+)|)/;
    function pt() {
      return !0;
    }
    function gt() {
      return !1;
    }
    function $t(e, t, n, r, o, s) {
      var l, f;
      if (typeof t == "object") {
        typeof n != "string" && (r = r || n, n = void 0);
        for (f in t)
          $t(e, f, n, r, t[f], s);
        return e;
      }
      if (r == null && o == null ? (o = n, r = n = void 0) : o == null && (typeof n == "string" ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1)
        o = gt;
      else if (!o)
        return e;
      return s === 1 && (l = o, o = function(c) {
        return i().off(c), l.apply(this, arguments);
      }, o.guid = l.guid || (l.guid = i.guid++)), e.each(function() {
        i.event.add(this, t, o, r, n);
      });
    }
    i.event = {
      global: {},
      add: function(e, t, n, r, o) {
        var s, l, f, c, p, x, _, v, D, V, re, K = W.get(e);
        if (bt(e))
          for (n.handler && (s = n, n = s.handler, o = s.selector), o && i.find.matchesSelector(at, o), n.guid || (n.guid = i.guid++), (c = K.events) || (c = K.events = /* @__PURE__ */ Object.create(null)), (l = K.handle) || (l = K.handle = function(be) {
            return typeof i < "u" && i.event.triggered !== be.type ? i.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(ve) || [""], p = t.length; p--; )
            f = xn.exec(t[p]) || [], D = re = f[1], V = (f[2] || "").split(".").sort(), D && (_ = i.event.special[D] || {}, D = (o ? _.delegateType : _.bindType) || D, _ = i.event.special[D] || {}, x = i.extend({
              type: D,
              origType: re,
              data: r,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && i.expr.match.needsContext.test(o),
              namespace: V.join(".")
            }, s), (v = c[D]) || (v = c[D] = [], v.delegateCount = 0, (!_.setup || _.setup.call(e, r, V, l) === !1) && e.addEventListener && e.addEventListener(D, l)), _.add && (_.add.call(e, x), x.handler.guid || (x.handler.guid = n.guid)), o ? v.splice(v.delegateCount++, 0, x) : v.push(x), i.event.global[D] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(e, t, n, r, o) {
        var s, l, f, c, p, x, _, v, D, V, re, K = W.hasData(e) && W.get(e);
        if (!(!K || !(c = K.events))) {
          for (t = (t || "").match(ve) || [""], p = t.length; p--; ) {
            if (f = xn.exec(t[p]) || [], D = re = f[1], V = (f[2] || "").split(".").sort(), !D) {
              for (D in c)
                i.event.remove(e, D + t[p], n, r, !0);
              continue;
            }
            for (_ = i.event.special[D] || {}, D = (r ? _.delegateType : _.bindType) || D, v = c[D] || [], f = f[2] && new RegExp("(^|\\.)" + V.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = v.length; s--; )
              x = v[s], (o || re === x.origType) && (!n || n.guid === x.guid) && (!f || f.test(x.namespace)) && (!r || r === x.selector || r === "**" && x.selector) && (v.splice(s, 1), x.selector && v.delegateCount--, _.remove && _.remove.call(e, x));
            l && !v.length && ((!_.teardown || _.teardown.call(e, V, K.handle) === !1) && i.removeEvent(e, D, K.handle), delete c[D]);
          }
          i.isEmptyObject(c) && W.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t, n, r, o, s, l, f = new Array(arguments.length), c = i.event.fix(e), p = (W.get(this, "events") || /* @__PURE__ */ Object.create(null))[c.type] || [], x = i.event.special[c.type] || {};
        for (f[0] = c, t = 1; t < arguments.length; t++)
          f[t] = arguments[t];
        if (c.delegateTarget = this, !(x.preDispatch && x.preDispatch.call(this, c) === !1)) {
          for (l = i.event.handlers.call(this, c, p), t = 0; (o = l[t++]) && !c.isPropagationStopped(); )
            for (c.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !c.isImmediatePropagationStopped(); )
              (!c.rnamespace || s.namespace === !1 || c.rnamespace.test(s.namespace)) && (c.handleObj = s, c.data = s.data, r = ((i.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, f), r !== void 0 && (c.result = r) === !1 && (c.preventDefault(), c.stopPropagation()));
          return x.postDispatch && x.postDispatch.call(this, c), c.result;
        }
      },
      handlers: function(e, t) {
        var n, r, o, s, l, f = [], c = t.delegateCount, p = e.target;
        if (c && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        p.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(e.type === "click" && e.button >= 1)) {
          for (; p !== this; p = p.parentNode || this)
            if (p.nodeType === 1 && !(e.type === "click" && p.disabled === !0)) {
              for (s = [], l = {}, n = 0; n < c; n++)
                r = t[n], o = r.selector + " ", l[o] === void 0 && (l[o] = r.needsContext ? i(o, this).index(p) > -1 : i.find(o, this, null, [p]).length), l[o] && s.push(r);
              s.length && f.push({ elem: p, handlers: s });
            }
        }
        return p = this, c < t.length && f.push({ elem: p, handlers: t.slice(c) }), f;
      },
      addProp: function(e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: E(t) ? function() {
            if (this.originalEvent)
              return t(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[e];
          },
          set: function(n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            });
          }
        });
      },
      fix: function(e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: !0
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(e) {
            var t = this || e;
            return _t.test(t.type) && t.click && I(t, "input") && Rt(t, "click", !0), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return _t.test(t.type) && t.click && I(t, "input") && Rt(t, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(e) {
            var t = e.target;
            return _t.test(t.type) && t.click && I(t, "input") && W.get(t, "click") || I(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    };
    function Rt(e, t, n) {
      if (!n) {
        W.get(e, t) === void 0 && i.event.add(e, t, pt);
        return;
      }
      W.set(e, t, !1), i.event.add(e, t, {
        namespace: !1,
        handler: function(r) {
          var o, s = W.get(this, t);
          if (r.isTrigger & 1 && this[t]) {
            if (s)
              (i.event.special[t] || {}).delegateType && r.stopPropagation();
            else if (s = w.call(arguments), W.set(this, t, s), this[t](), o = W.get(this, t), W.set(this, t, !1), s !== o)
              return r.stopImmediatePropagation(), r.preventDefault(), o;
          } else
            s && (W.set(this, t, i.event.trigger(
              s[0],
              s.slice(1),
              this
            )), r.stopPropagation(), r.isImmediatePropagationStopped = pt);
        }
      });
    }
    i.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, i.Event = function(e, t) {
      if (!(this instanceof i.Event))
        return new i.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
      e.returnValue === !1 ? pt : gt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0;
    }, i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: gt,
      isPropagationStopped: gt,
      isImmediatePropagationStopped: gt,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = pt, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = pt, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = pt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, i.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, i.event.addProp), i.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      function n(r) {
        if (H.documentMode) {
          var o = W.get(this, "handle"), s = i.event.fix(r);
          s.type = r.type === "focusin" ? "focus" : "blur", s.isSimulated = !0, o(r), s.target === s.currentTarget && o(s);
        } else
          i.event.simulate(
            t,
            r.target,
            i.event.fix(r)
          );
      }
      i.event.special[e] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          var r;
          if (Rt(this, e, !0), H.documentMode)
            r = W.get(this, t), r || this.addEventListener(t, n), W.set(this, t, (r || 0) + 1);
          else
            return !1;
        },
        trigger: function() {
          return Rt(this, e), !0;
        },
        teardown: function() {
          var r;
          if (H.documentMode)
            r = W.get(this, t) - 1, r ? W.set(this, t, r) : (this.removeEventListener(t, n), W.remove(this, t));
          else
            return !1;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(r) {
          return W.get(r.target, e);
        },
        delegateType: t
      }, i.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this.document || this, o = H.documentMode ? this : r, s = W.get(o, t);
          s || (H.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), W.set(o, t, (s || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this.document || this, o = H.documentMode ? this : r, s = W.get(o, t) - 1;
          s ? W.set(o, t, s) : (H.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), W.remove(o, t));
        }
      };
    }), i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      i.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(n) {
          var r, o = this, s = n.relatedTarget, l = n.handleObj;
          return (!s || s !== o && !i.contains(o, s)) && (n.type = l.origType, r = l.handler.apply(this, arguments), n.type = t), r;
        }
      };
    }), i.fn.extend({
      on: function(e, t, n, r) {
        return $t(this, e, t, n, r);
      },
      one: function(e, t, n, r) {
        return $t(this, e, t, n, r, 1);
      },
      off: function(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          return r = e.handleObj, i(e.delegateTarget).off(
            r.namespace ? r.origType + "." + r.namespace : r.origType,
            r.selector,
            r.handler
          ), this;
        if (typeof e == "object") {
          for (o in e)
            this.off(o, t, e[o]);
          return this;
        }
        return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = gt), this.each(function() {
          i.event.remove(this, e, n, t);
        });
      }
    });
    var ri = /<script|<style|<link/i, oi = /checked\s*(?:[^=]|=\s*.checked.)/i, si = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function wn(e, t) {
      return I(e, "table") && I(t.nodeType !== 11 ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e;
    }
    function ai(e) {
      return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
    }
    function li(e) {
      return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function bn(e, t) {
      var n, r, o, s, l, f, c;
      if (t.nodeType === 1) {
        if (W.hasData(e) && (s = W.get(e), c = s.events, c)) {
          W.remove(t, "handle events");
          for (o in c)
            for (n = 0, r = c[o].length; n < r; n++)
              i.event.add(t, o, c[o][n]);
        }
        Pe.hasData(e) && (l = Pe.access(e), f = i.extend({}, l), Pe.set(t, f));
      }
    }
    function ui(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && _t.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
    }
    function vt(e, t, n, r) {
      t = L(t);
      var o, s, l, f, c, p, x = 0, _ = e.length, v = _ - 1, D = t[0], V = E(D);
      if (V || _ > 1 && typeof D == "string" && !k.checkClone && oi.test(D))
        return e.each(function(re) {
          var K = e.eq(re);
          V && (t[0] = D.call(this, re, K.html())), vt(K, t, n, r);
        });
      if (_ && (o = yn(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, o.childNodes.length === 1 && (o = s), s || r)) {
        for (l = i.map(Le(o, "script"), ai), f = l.length; x < _; x++)
          c = o, x !== v && (c = i.clone(c, !0, !0), f && i.merge(l, Le(c, "script"))), n.call(e[x], c, x);
        if (f)
          for (p = l[l.length - 1].ownerDocument, i.map(l, li), x = 0; x < f; x++)
            c = l[x], mn.test(c.type || "") && !W.access(c, "globalEval") && i.contains(p, c) && (c.src && (c.type || "").toLowerCase() !== "module" ? i._evalUrl && !c.noModule && i._evalUrl(c.src, {
              nonce: c.nonce || c.getAttribute("nonce")
            }, p) : le(c.textContent.replace(si, ""), c, p));
      }
      return e;
    }
    function Cn(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, s = 0; (r = o[s]) != null; s++)
        !n && r.nodeType === 1 && i.cleanData(Le(r)), r.parentNode && (n && ht(r) && Yt(Le(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, n) {
        var r, o, s, l, f = e.cloneNode(!0), c = ht(e);
        if (!k.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
          for (l = Le(f), s = Le(e), r = 0, o = s.length; r < o; r++)
            ui(s[r], l[r]);
        if (t)
          if (n)
            for (s = s || Le(e), l = l || Le(f), r = 0, o = s.length; r < o; r++)
              bn(s[r], l[r]);
          else
            bn(e, f);
        return l = Le(f, "script"), l.length > 0 && Yt(l, !c && Le(e, "script")), f;
      },
      cleanData: function(e) {
        for (var t, n, r, o = i.event.special, s = 0; (n = e[s]) !== void 0; s++)
          if (bt(n)) {
            if (t = n[W.expando]) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[W.expando] = void 0;
            }
            n[Pe.expando] && (n[Pe.expando] = void 0);
          }
      }
    }), i.fn.extend({
      detach: function(e) {
        return Cn(this, e, !0);
      },
      remove: function(e) {
        return Cn(this, e);
      },
      text: function(e) {
        return Ze(this, function(t) {
          return t === void 0 ? i.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
          });
        }, null, e, arguments.length);
      },
      append: function() {
        return vt(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = wn(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return vt(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = wn(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return vt(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return vt(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (i.cleanData(Le(e, !1)), e.textContent = "");
        return this;
      },
      clone: function(e, t) {
        return e = e ?? !1, t = t ?? e, this.map(function() {
          return i.clone(this, e, t);
        });
      },
      html: function(e) {
        return Ze(this, function(t) {
          var n = this[0] || {}, r = 0, o = this.length;
          if (t === void 0 && n.nodeType === 1)
            return n.innerHTML;
          if (typeof t == "string" && !ri.test(t) && !Xe[(vn.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = i.htmlPrefilter(t);
            try {
              for (; r < o; r++)
                n = this[r] || {}, n.nodeType === 1 && (i.cleanData(Le(n, !1)), n.innerHTML = t);
              n = 0;
            } catch {
            }
          }
          n && this.empty().append(t);
        }, null, e, arguments.length);
      },
      replaceWith: function() {
        var e = [];
        return vt(this, arguments, function(t) {
          var n = this.parentNode;
          i.inArray(this, e) < 0 && (i.cleanData(Le(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      i.fn[e] = function(n) {
        for (var r, o = [], s = i(n), l = s.length - 1, f = 0; f <= l; f++)
          r = f === l ? this : this.clone(!0), i(s[f])[t](r), S.apply(o, r.get());
        return this.pushStack(o);
      };
    });
    var Bt = new RegExp("^(" + dn + ")(?!px)[a-z%]+$", "i"), Ft = /^--/, Ot = function(e) {
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = a), t.getComputedStyle(e);
    }, Tn = function(e, t, n) {
      var r, o, s = {};
      for (o in t)
        s[o] = e.style[o], e.style[o] = t[o];
      r = n.call(e);
      for (o in t)
        e.style[o] = s[o];
      return r;
    }, ci = new RegExp(et.join("|"), "i");
    (function() {
      function e() {
        if (p) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(c).appendChild(p);
          var x = a.getComputedStyle(p);
          n = x.top !== "1%", f = t(x.marginLeft) === 12, p.style.right = "60%", s = t(x.right) === 36, r = t(x.width) === 36, p.style.position = "absolute", o = t(p.offsetWidth / 3) === 12, at.removeChild(c), p = null;
        }
      }
      function t(x) {
        return Math.round(parseFloat(x));
      }
      var n, r, o, s, l, f, c = H.createElement("div"), p = H.createElement("div");
      p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = p.style.backgroundClip === "content-box", i.extend(k, {
        boxSizingReliable: function() {
          return e(), r;
        },
        pixelBoxStyles: function() {
          return e(), s;
        },
        pixelPosition: function() {
          return e(), n;
        },
        reliableMarginLeft: function() {
          return e(), f;
        },
        scrollboxSize: function() {
          return e(), o;
        },
        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function() {
          var x, _, v, D;
          return l == null && (x = H.createElement("table"), _ = H.createElement("tr"), v = H.createElement("div"), x.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", _.style.cssText = "box-sizing:content-box;border:1px solid", _.style.height = "1px", v.style.height = "9px", v.style.display = "block", at.appendChild(x).appendChild(_).appendChild(v), D = a.getComputedStyle(_), l = parseInt(D.height, 10) + parseInt(D.borderTopWidth, 10) + parseInt(D.borderBottomWidth, 10) === _.offsetHeight, at.removeChild(x)), l;
        }
      }));
    })();
    function St(e, t, n) {
      var r, o, s, l, f = Ft.test(t), c = e.style;
      return n = n || Ot(e), n && (l = n.getPropertyValue(t) || n[t], f && l && (l = l.replace(Q, "$1") || void 0), l === "" && !ht(e) && (l = i.style(e, t)), !k.pixelBoxStyles() && Bt.test(l) && ci.test(t) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = n.width, c.width = r, c.minWidth = o, c.maxWidth = s)), l !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        l + ""
      ) : l;
    }
    function _n(e, t) {
      return {
        get: function() {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        }
      };
    }
    var Sn = ["Webkit", "Moz", "ms"], En = H.createElement("div").style, kn = {};
    function fi(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = Sn.length; n--; )
        if (e = Sn[n] + t, e in En)
          return e;
    }
    function Ut(e) {
      var t = i.cssProps[e] || kn[e];
      return t || (e in En ? e : kn[e] = fi(e) || e);
    }
    var hi = /^(none|table(?!-c[ea]).+)/, di = { position: "absolute", visibility: "hidden", display: "block" }, Dn = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Mn(e, t, n) {
      var r = Tt.exec(t);
      return r ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, r[2] - (n || 0)) + (r[3] || "px")
      ) : t;
    }
    function Vt(e, t, n, r, o, s) {
      var l = t === "width" ? 1 : 0, f = 0, c = 0, p = 0;
      if (n === (r ? "border" : "content"))
        return 0;
      for (; l < 4; l += 2)
        n === "margin" && (p += i.css(e, n + et[l], !0, o)), r ? (n === "content" && (c -= i.css(e, "padding" + et[l], !0, o)), n !== "margin" && (c -= i.css(e, "border" + et[l] + "Width", !0, o))) : (c += i.css(e, "padding" + et[l], !0, o), n !== "padding" ? c += i.css(e, "border" + et[l] + "Width", !0, o) : f += i.css(e, "border" + et[l] + "Width", !0, o));
      return !r && s >= 0 && (c += Math.max(0, Math.ceil(
        e["offset" + t[0].toUpperCase() + t.slice(1)] - s - c - f - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), c + p;
    }
    function An(e, t, n) {
      var r = Ot(e), o = !k.boxSizingReliable() || n, s = o && i.css(e, "boxSizing", !1, r) === "border-box", l = s, f = St(e, t, r), c = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Bt.test(f)) {
        if (!n)
          return f;
        f = "auto";
      }
      return (!k.boxSizingReliable() && s || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !k.reliableTrDimensions() && I(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      f === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(f) && i.css(e, "display", !1, r) === "inline") && // Make sure the element is visible & connected
      e.getClientRects().length && (s = i.css(e, "boxSizing", !1, r) === "border-box", l = c in e, l && (f = e[c])), f = parseFloat(f) || 0, f + Vt(
        e,
        t,
        n || (s ? "border" : "content"),
        l,
        r,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        f
      ) + "px";
    }
    i.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = St(e, "opacity");
              return n === "" ? "1" : n;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        // SVG-related
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function(e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var o, s, l, f = Ue(t), c = Ft.test(t), p = e.style;
          if (c || (t = Ut(f)), l = i.cssHooks[t] || i.cssHooks[f], n !== void 0) {
            if (s = typeof n, s === "string" && (o = Tt.exec(n)) && o[1] && (n = pn(e, t, o), s = "number"), n == null || n !== n)
              return;
            s === "number" && !c && (n += o && o[3] || (i.cssNumber[f] ? "" : "px")), !k.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (p[t] = "inherit"), (!l || !("set" in l) || (n = l.set(e, n, r)) !== void 0) && (c ? p.setProperty(t, n) : p[t] = n);
          } else
            return l && "get" in l && (o = l.get(e, !1, r)) !== void 0 ? o : p[t];
        }
      },
      css: function(e, t, n, r) {
        var o, s, l, f = Ue(t), c = Ft.test(t);
        return c || (t = Ut(f)), l = i.cssHooks[t] || i.cssHooks[f], l && "get" in l && (o = l.get(e, !0, n)), o === void 0 && (o = St(e, t, r)), o === "normal" && t in Dn && (o = Dn[t]), n === "" || n ? (s = parseFloat(o), n === !0 || isFinite(s) ? s || 0 : o) : o;
      }
    }), i.each(["height", "width"], function(e, t) {
      i.cssHooks[t] = {
        get: function(n, r, o) {
          if (r)
            return hi.test(i.css(n, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!n.getClientRects().length || !n.getBoundingClientRect().width) ? Tn(n, di, function() {
              return An(n, t, o);
            }) : An(n, t, o);
        },
        set: function(n, r, o) {
          var s, l = Ot(n), f = !k.scrollboxSize() && l.position === "absolute", c = f || o, p = c && i.css(n, "boxSizing", !1, l) === "border-box", x = o ? Vt(
            n,
            t,
            o,
            p,
            l
          ) : 0;
          return p && f && (x -= Math.ceil(
            n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(l[t]) - Vt(n, t, "border", !1, l) - 0.5
          )), x && (s = Tt.exec(r)) && (s[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), Mn(n, r, x);
        }
      };
    }), i.cssHooks.marginLeft = _n(
      k.reliableMarginLeft,
      function(e, t) {
        if (t)
          return (parseFloat(St(e, "marginLeft")) || e.getBoundingClientRect().left - Tn(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left;
          })) + "px";
      }
    ), i.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      i.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, o = {}, s = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++)
            o[e + et[r] + t] = s[r] || s[r - 2] || s[0];
          return o;
        }
      }, e !== "margin" && (i.cssHooks[e + t].set = Mn);
    }), i.fn.extend({
      css: function(e, t) {
        return Ze(this, function(n, r, o) {
          var s, l, f = {}, c = 0;
          if (Array.isArray(r)) {
            for (s = Ot(n), l = r.length; c < l; c++)
              f[r[c]] = i.css(n, r[c], !1, s);
            return f;
          }
          return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
        }, e, t, arguments.length > 1);
      }
    });
    function He(e, t, n, r, o) {
      return new He.prototype.init(e, t, n, r, o);
    }
    i.Tween = He, He.prototype = {
      constructor: He,
      init: function(e, t, n, r, o, s) {
        this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (i.cssNumber[n] ? "" : "px");
      },
      cur: function() {
        var e = He.propHooks[this.prop];
        return e && e.get ? e.get(this) : He.propHooks._default.get(this);
      },
      run: function(e) {
        var t, n = He.propHooks[this.prop];
        return this.options.duration ? this.pos = t = i.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
        ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : He.propHooks._default.set(this), this;
      }
    }, He.prototype.init.prototype = He.prototype, He.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
        },
        set: function(e) {
          i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[Ut(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, He.propHooks.scrollTop = He.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, i.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, i.fx = He.prototype.init, i.fx.step = {};
    var mt, Nt, pi = /^(?:toggle|show|hide)$/, gi = /queueHooks$/;
    function Gt() {
      Nt && (H.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(Gt) : a.setTimeout(Gt, i.fx.interval), i.fx.tick());
    }
    function Pn() {
      return a.setTimeout(function() {
        mt = void 0;
      }), mt = Date.now();
    }
    function jt(e, t) {
      var n, r = 0, o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        n = et[r], o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function Ln(e, t, n) {
      for (var r, o = ($e.tweeners[t] || []).concat($e.tweeners["*"]), s = 0, l = o.length; s < l; s++)
        if (r = o[s].call(n, t, e))
          return r;
    }
    function vi(e, t, n) {
      var r, o, s, l, f, c, p, x, _ = "width" in t || "height" in t, v = this, D = {}, V = e.style, re = e.nodeType && Ht(e), K = W.get(e, "fxshow");
      n.queue || (l = i._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, f = l.empty.fire, l.empty.fire = function() {
        l.unqueued || f();
      }), l.unqueued++, v.always(function() {
        v.always(function() {
          l.unqueued--, i.queue(e, "fx").length || l.empty.fire();
        });
      }));
      for (r in t)
        if (o = t[r], pi.test(o)) {
          if (delete t[r], s = s || o === "toggle", o === (re ? "hide" : "show"))
            if (o === "show" && K && K[r] !== void 0)
              re = !0;
            else
              continue;
          D[r] = K && K[r] || i.style(e, r);
        }
      if (c = !i.isEmptyObject(t), !(!c && i.isEmptyObject(D))) {
        _ && e.nodeType === 1 && (n.overflow = [V.overflow, V.overflowX, V.overflowY], p = K && K.display, p == null && (p = W.get(e, "display")), x = i.css(e, "display"), x === "none" && (p ? x = p : (dt([e], !0), p = e.style.display || p, x = i.css(e, "display"), dt([e]))), (x === "inline" || x === "inline-block" && p != null) && i.css(e, "float") === "none" && (c || (v.done(function() {
          V.display = p;
        }), p == null && (x = V.display, p = x === "none" ? "" : x)), V.display = "inline-block")), n.overflow && (V.overflow = "hidden", v.always(function() {
          V.overflow = n.overflow[0], V.overflowX = n.overflow[1], V.overflowY = n.overflow[2];
        })), c = !1;
        for (r in D)
          c || (K ? "hidden" in K && (re = K.hidden) : K = W.access(e, "fxshow", { display: p }), s && (K.hidden = !re), re && dt([e], !0), v.done(function() {
            re || dt([e]), W.remove(e, "fxshow");
            for (r in D)
              i.style(e, r, D[r]);
          })), c = Ln(re ? K[r] : 0, r, v), r in K || (K[r] = c.start, re && (c.end = c.start, c.start = 0));
      }
    }
    function mi(e, t) {
      var n, r, o, s, l;
      for (n in e)
        if (r = Ue(n), o = t[r], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), l = i.cssHooks[r], l && "expand" in l) {
          s = l.expand(s), delete e[r];
          for (n in s)
            n in e || (e[n] = s[n], t[n] = o);
        } else
          t[r] = o;
    }
    function $e(e, t, n) {
      var r, o, s = 0, l = $e.prefilters.length, f = i.Deferred().always(function() {
        delete c.elem;
      }), c = function() {
        if (o)
          return !1;
        for (var _ = mt || Pn(), v = Math.max(0, p.startTime + p.duration - _), D = v / p.duration || 0, V = 1 - D, re = 0, K = p.tweens.length; re < K; re++)
          p.tweens[re].run(V);
        return f.notifyWith(e, [p, V, v]), V < 1 && K ? v : (K || f.notifyWith(e, [p, 1, 0]), f.resolveWith(e, [p]), !1);
      }, p = f.promise({
        elem: e,
        props: i.extend({}, t),
        opts: i.extend(!0, {
          specialEasing: {},
          easing: i.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: mt || Pn(),
        duration: n.duration,
        tweens: [],
        createTween: function(_, v) {
          var D = i.Tween(
            e,
            p.opts,
            _,
            v,
            p.opts.specialEasing[_] || p.opts.easing
          );
          return p.tweens.push(D), D;
        },
        stop: function(_) {
          var v = 0, D = _ ? p.tweens.length : 0;
          if (o)
            return this;
          for (o = !0; v < D; v++)
            p.tweens[v].run(1);
          return _ ? (f.notifyWith(e, [p, 1, 0]), f.resolveWith(e, [p, _])) : f.rejectWith(e, [p, _]), this;
        }
      }), x = p.props;
      for (mi(x, p.opts.specialEasing); s < l; s++)
        if (r = $e.prefilters[s].call(p, e, x, p.opts), r)
          return E(r.stop) && (i._queueHooks(p.elem, p.opts.queue).stop = r.stop.bind(r)), r;
      return i.map(x, Ln, p), E(p.opts.start) && p.opts.start.call(e, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), i.fx.timer(
        i.extend(c, {
          elem: e,
          anim: p,
          queue: p.opts.queue
        })
      ), p;
    }
    i.Animation = i.extend($e, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return pn(n.elem, e, Tt.exec(t), n), n;
        }]
      },
      tweener: function(e, t) {
        E(e) ? (t = e, e = ["*"]) : e = e.match(ve);
        for (var n, r = 0, o = e.length; r < o; r++)
          n = e[r], $e.tweeners[n] = $e.tweeners[n] || [], $e.tweeners[n].unshift(t);
      },
      prefilters: [vi],
      prefilter: function(e, t) {
        t ? $e.prefilters.unshift(e) : $e.prefilters.push(e);
      }
    }), i.speed = function(e, t, n) {
      var r = e && typeof e == "object" ? i.extend({}, e) : {
        complete: n || !n && t || E(e) && e,
        duration: e,
        easing: n && t || t && !E(t) && t
      };
      return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        E(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
      }, r;
    }, i.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Ht).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function(e, t, n, r) {
        var o = i.isEmptyObject(e), s = i.speed(t, n, r), l = function() {
          var f = $e(this, i.extend({}, e), s);
          (o || W.get(this, "finish")) && f.stop(!0);
        };
        return l.finish = l, o || s.queue === !1 ? this.each(l) : this.queue(s.queue, l);
      },
      stop: function(e, t, n) {
        var r = function(o) {
          var s = o.stop;
          delete o.stop, s(n);
        };
        return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var o = !0, s = e != null && e + "queueHooks", l = i.timers, f = W.get(this);
          if (s)
            f[s] && f[s].stop && r(f[s]);
          else
            for (s in f)
              f[s] && f[s].stop && gi.test(s) && r(f[s]);
          for (s = l.length; s--; )
            l[s].elem === this && (e == null || l[s].queue === e) && (l[s].anim.stop(n), o = !1, l.splice(s, 1));
          (o || !n) && i.dequeue(this, e);
        });
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = W.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], s = i.timers, l = r ? r.length : 0;
          for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--; )
            s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          for (t = 0; t < l; t++)
            r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish;
        });
      }
    }), i.each(["toggle", "show", "hide"], function(e, t) {
      var n = i.fn[t];
      i.fn[t] = function(r, o, s) {
        return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(jt(t, !0), r, o, s);
      };
    }), i.each({
      slideDown: jt("show"),
      slideUp: jt("hide"),
      slideToggle: jt("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(e, t) {
      i.fn[e] = function(n, r, o) {
        return this.animate(t, n, r, o);
      };
    }), i.timers = [], i.fx.tick = function() {
      var e, t = 0, n = i.timers;
      for (mt = Date.now(); t < n.length; t++)
        e = n[t], !e() && n[t] === e && n.splice(t--, 1);
      n.length || i.fx.stop(), mt = void 0;
    }, i.fx.timer = function(e) {
      i.timers.push(e), i.fx.start();
    }, i.fx.interval = 13, i.fx.start = function() {
      Nt || (Nt = !0, Gt());
    }, i.fx.stop = function() {
      Nt = null;
    }, i.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, i.fn.delay = function(e, t) {
      return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
        var o = a.setTimeout(n, e);
        r.stop = function() {
          a.clearTimeout(o);
        };
      });
    }, function() {
      var e = H.createElement("input"), t = H.createElement("select"), n = t.appendChild(H.createElement("option"));
      e.type = "checkbox", k.checkOn = e.value !== "", k.optSelected = n.selected, e = H.createElement("input"), e.value = "t", e.type = "radio", k.radioValue = e.value === "t";
    }();
    var Hn, Et = i.expr.attrHandle;
    i.fn.extend({
      attr: function(e, t) {
        return Ze(this, i.attr, e, t, arguments.length > 1);
      },
      removeAttr: function(e) {
        return this.each(function() {
          i.removeAttr(this, e);
        });
      }
    }), i.extend({
      attr: function(e, t, n) {
        var r, o, s = e.nodeType;
        if (!(s === 3 || s === 8 || s === 2)) {
          if (typeof e.getAttribute > "u")
            return i.prop(e, t, n);
          if ((s !== 1 || !i.isXMLDoc(e)) && (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? Hn : void 0)), n !== void 0) {
            if (n === null) {
              i.removeAttr(e, t);
              return;
            }
            return o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
          }
          return o && "get" in o && (r = o.get(e, t)) !== null ? r : (r = i.find.attr(e, t), r ?? void 0);
        }
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!k.radioValue && t === "radio" && I(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0, o = t && t.match(ve);
        if (o && e.nodeType === 1)
          for (; n = o[r++]; )
            e.removeAttribute(n);
      }
    }), Hn = {
      set: function(e, t, n) {
        return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = Et[t] || i.find.attr;
      Et[t] = function(r, o, s) {
        var l, f, c = o.toLowerCase();
        return s || (f = Et[c], Et[c] = l, l = n(r, o, s) != null ? c : null, Et[c] = f), l;
      };
    });
    var yi = /^(?:input|select|textarea|button)$/i, xi = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function(e, t) {
        return Ze(this, i.prop, e, t, arguments.length > 1);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[i.propFix[e] || e];
        });
      }
    }), i.extend({
      prop: function(e, t, n) {
        var r, o, s = e.nodeType;
        if (!(s === 3 || s === 8 || s === 2))
          return (s !== 1 || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, o = i.propHooks[t]), n !== void 0 ? o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : e[t] = n : o && "get" in o && (r = o.get(e, t)) !== null ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = i.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yi.test(e.nodeName) || xi.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), k.optSelected || (i.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), i.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      i.propFix[this.toLowerCase()] = this;
    });
    function lt(e) {
      var t = e.match(ve) || [];
      return t.join(" ");
    }
    function ut(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Qt(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(ve) || [] : [];
    }
    i.fn.extend({
      addClass: function(e) {
        var t, n, r, o, s, l;
        return E(e) ? this.each(function(f) {
          i(this).addClass(e.call(this, f, ut(this)));
        }) : (t = Qt(e), t.length ? this.each(function() {
          if (r = ut(this), n = this.nodeType === 1 && " " + lt(r) + " ", n) {
            for (s = 0; s < t.length; s++)
              o = t[s], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            l = lt(n), r !== l && this.setAttribute("class", l);
          }
        }) : this);
      },
      removeClass: function(e) {
        var t, n, r, o, s, l;
        return E(e) ? this.each(function(f) {
          i(this).removeClass(e.call(this, f, ut(this)));
        }) : arguments.length ? (t = Qt(e), t.length ? this.each(function() {
          if (r = ut(this), n = this.nodeType === 1 && " " + lt(r) + " ", n) {
            for (s = 0; s < t.length; s++)
              for (o = t[s]; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            l = lt(n), r !== l && this.setAttribute("class", l);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(e, t) {
        var n, r, o, s, l = typeof e, f = l === "string" || Array.isArray(e);
        return E(e) ? this.each(function(c) {
          i(this).toggleClass(
            e.call(this, c, ut(this), t),
            t
          );
        }) : typeof t == "boolean" && f ? t ? this.addClass(e) : this.removeClass(e) : (n = Qt(e), this.each(function() {
          if (f)
            for (s = i(this), o = 0; o < n.length; o++)
              r = n[o], s.hasClass(r) ? s.removeClass(r) : s.addClass(r);
          else
            (e === void 0 || l === "boolean") && (r = ut(this), r && W.set(this, "__className__", r), this.setAttribute && this.setAttribute(
              "class",
              r || e === !1 ? "" : W.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++]; )
          if (n.nodeType === 1 && (" " + lt(ut(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
    var wi = /\r/g;
    i.fn.extend({
      val: function(e) {
        var t, n, r, o = this[0];
        return arguments.length ? (r = E(e), this.each(function(s) {
          var l;
          this.nodeType === 1 && (r ? l = e.call(this, s, i(this).val()) : l = e, l == null ? l = "" : typeof l == "number" ? l += "" : Array.isArray(l) && (l = i.map(l, function(f) {
            return f == null ? "" : f + "";
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, l, "value") === void 0) && (this.value = l));
        })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== void 0 ? n : (n = o.value, typeof n == "string" ? n.replace(wi, "") : n ?? "")) : void 0;
      }
    }), i.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = i.find.attr(e, "value");
            return t ?? // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            lt(i.text(e));
          }
        },
        select: {
          get: function(e) {
            var t, n, r, o = e.options, s = e.selectedIndex, l = e.type === "select-one", f = l ? null : [], c = l ? s + 1 : o.length;
            for (s < 0 ? r = c : r = l ? s : 0; r < c; r++)
              if (n = o[r], (n.selected || r === s) && // Don't return options that are disabled or in a disabled optgroup
              !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                if (t = i(n).val(), l)
                  return t;
                f.push(t);
              }
            return f;
          },
          set: function(e, t) {
            for (var n, r, o = e.options, s = i.makeArray(t), l = o.length; l--; )
              r = o[l], (r.selected = i.inArray(i.valHooks.option.get(r), s) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), s;
          }
        }
      }
    }), i.each(["radio", "checkbox"], function() {
      i.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return e.checked = i.inArray(i(e).val(), t) > -1;
        }
      }, k.checkOn || (i.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      });
    });
    var kt = a.location, Rn = { guid: Date.now() }, Jt = /\?/;
    i.parseXML = function(e) {
      var t, n;
      if (!e || typeof e != "string")
        return null;
      try {
        t = new a.DOMParser().parseFromString(e, "text/xml");
      } catch {
      }
      return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
        return r.textContent;
      }).join(`
`) : e)), t;
    };
    var On = /^(?:focusinfocus|focusoutblur)$/, Nn = function(e) {
      e.stopPropagation();
    };
    i.extend(i.event, {
      trigger: function(e, t, n, r) {
        var o, s, l, f, c, p, x, _, v = [n || H], D = R.call(e, "type") ? e.type : e, V = R.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = _ = l = n = n || H, !(n.nodeType === 3 || n.nodeType === 8) && !On.test(D + i.event.triggered) && (D.indexOf(".") > -1 && (V = D.split("."), D = V.shift(), V.sort()), c = D.indexOf(":") < 0 && "on" + D, e = e[i.expando] ? e : new i.Event(D, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = V.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + V.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), x = i.event.special[D] || {}, !(!r && x.trigger && x.trigger.apply(n, t) === !1))) {
          if (!r && !x.noBubble && !z(n)) {
            for (f = x.delegateType || D, On.test(f + D) || (s = s.parentNode); s; s = s.parentNode)
              v.push(s), l = s;
            l === (n.ownerDocument || H) && v.push(l.defaultView || l.parentWindow || a);
          }
          for (o = 0; (s = v[o++]) && !e.isPropagationStopped(); )
            _ = s, e.type = o > 1 ? f : x.bindType || D, p = (W.get(s, "events") || /* @__PURE__ */ Object.create(null))[e.type] && W.get(s, "handle"), p && p.apply(s, t), p = c && s[c], p && p.apply && bt(s) && (e.result = p.apply(s, t), e.result === !1 && e.preventDefault());
          return e.type = D, !r && !e.isDefaultPrevented() && (!x._default || x._default.apply(v.pop(), t) === !1) && bt(n) && c && E(n[D]) && !z(n) && (l = n[c], l && (n[c] = null), i.event.triggered = D, e.isPropagationStopped() && _.addEventListener(D, Nn), n[D](), e.isPropagationStopped() && _.removeEventListener(D, Nn), i.event.triggered = void 0, l && (n[c] = l)), e.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(e, t, n) {
        var r = i.extend(
          new i.Event(),
          n,
          {
            type: e,
            isSimulated: !0
          }
        );
        i.event.trigger(r, null, t);
      }
    }), i.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          i.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n)
          return i.event.trigger(e, t, n, !0);
      }
    });
    var bi = /\[\]$/, jn = /\r?\n/g, Ci = /^(?:submit|button|image|reset|file)$/i, Ti = /^(?:input|select|textarea|keygen)/i;
    function Kt(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function(s, l) {
          n || bi.test(e) ? r(e, l) : Kt(
            e + "[" + (typeof l == "object" && l != null ? s : "") + "]",
            l,
            n,
            r
          );
        });
      else if (!n && _e(t) === "object")
        for (o in t)
          Kt(e + "[" + o + "]", t[o], n, r);
      else
        r(e, t);
    }
    i.param = function(e, t) {
      var n, r = [], o = function(s, l) {
        var f = E(l) ? l() : l;
        r[r.length] = encodeURIComponent(s) + "=" + encodeURIComponent(f ?? "");
      };
      if (e == null)
        return "";
      if (Array.isArray(e) || e.jquery && !i.isPlainObject(e))
        i.each(e, function() {
          o(this.name, this.value);
        });
      else
        for (n in e)
          Kt(n, e[n], t, o);
      return r.join("&");
    }, i.fn.extend({
      serialize: function() {
        return i.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = i.prop(this, "elements");
          return e ? i.makeArray(e) : this;
        }).filter(function() {
          var e = this.type;
          return this.name && !i(this).is(":disabled") && Ti.test(this.nodeName) && !Ci.test(e) && (this.checked || !_t.test(e));
        }).map(function(e, t) {
          var n = i(this).val();
          return n == null ? null : Array.isArray(n) ? i.map(n, function(r) {
            return { name: t.name, value: r.replace(jn, `\r
`) };
          }) : { name: t.name, value: n.replace(jn, `\r
`) };
        }).get();
      }
    });
    var _i = /%20/g, Si = /#.*$/, Ei = /([?&])_=[^&]*/, ki = /^(.*?):[ \t]*([^\r\n]*)$/mg, Di = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mi = /^(?:GET|HEAD)$/, Ai = /^\/\//, In = {}, Zt = {}, Xn = "*/".concat("*"), en = H.createElement("a");
    en.href = kt.href;
    function zn(e) {
      return function(t, n) {
        typeof t != "string" && (n = t, t = "*");
        var r, o = 0, s = t.toLowerCase().match(ve) || [];
        if (E(n))
          for (; r = s[o++]; )
            r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }
    function qn(e, t, n, r) {
      var o = {}, s = e === Zt;
      function l(f) {
        var c;
        return o[f] = !0, i.each(e[f] || [], function(p, x) {
          var _ = x(t, n, r);
          if (typeof _ == "string" && !s && !o[_])
            return t.dataTypes.unshift(_), l(_), !1;
          if (s)
            return !(c = _);
        }), c;
      }
      return l(t.dataTypes[0]) || !o["*"] && l("*");
    }
    function tn(e, t) {
      var n, r, o = i.ajaxSettings.flatOptions || {};
      for (n in t)
        t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function Pi(e, t, n) {
      for (var r, o, s, l, f = e.contents, c = e.dataTypes; c[0] === "*"; )
        c.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) {
        for (o in f)
          if (f[o] && f[o].test(r)) {
            c.unshift(o);
            break;
          }
      }
      if (c[0] in n)
        s = c[0];
      else {
        for (o in n) {
          if (!c[0] || e.converters[o + " " + c[0]]) {
            s = o;
            break;
          }
          l || (l = o);
        }
        s = s || l;
      }
      if (s)
        return s !== c[0] && c.unshift(s), n[s];
    }
    function Li(e, t, n, r) {
      var o, s, l, f, c, p = {}, x = e.dataTypes.slice();
      if (x[1])
        for (l in e.converters)
          p[l.toLowerCase()] = e.converters[l];
      for (s = x.shift(); s; )
        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = s, s = x.shift(), s) {
          if (s === "*")
            s = c;
          else if (c !== "*" && c !== s) {
            if (l = p[c + " " + s] || p["* " + s], !l) {
              for (o in p)
                if (f = o.split(" "), f[1] === s && (l = p[c + " " + f[0]] || p["* " + f[0]], l)) {
                  l === !0 ? l = p[o] : p[o] !== !0 && (s = f[0], x.unshift(f[1]));
                  break;
                }
            }
            if (l !== !0)
              if (l && e.throws)
                t = l(t);
              else
                try {
                  t = l(t);
                } catch (_) {
                  return {
                    state: "parsererror",
                    error: l ? _ : "No conversion from " + c + " to " + s
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    i.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal: Di.test(kt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": Xn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": !0,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": i.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(e, t) {
        return t ? (
          // Building a settings object
          tn(tn(e, i.ajaxSettings), t)
        ) : (
          // Extending ajaxSettings
          tn(i.ajaxSettings, e)
        );
      },
      ajaxPrefilter: zn(In),
      ajaxTransport: zn(Zt),
      // Main method
      ajax: function(e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var n, r, o, s, l, f, c, p, x, _, v = i.ajaxSetup({}, t), D = v.context || v, V = v.context && (D.nodeType || D.jquery) ? i(D) : i.event, re = i.Deferred(), K = i.Callbacks("once memory"), be = v.statusCode || {}, ye = {}, Ve = {}, Ge = "canceled", ie = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(se) {
            var ge;
            if (c) {
              if (!s)
                for (s = {}; ge = ki.exec(o); )
                  s[ge[1].toLowerCase() + " "] = (s[ge[1].toLowerCase() + " "] || []).concat(ge[2]);
              ge = s[se.toLowerCase() + " "];
            }
            return ge == null ? null : ge.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return c ? o : null;
          },
          // Caches the header
          setRequestHeader: function(se, ge) {
            return c == null && (se = Ve[se.toLowerCase()] = Ve[se.toLowerCase()] || se, ye[se] = ge), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(se) {
            return c == null && (v.mimeType = se), this;
          },
          // Status-dependent callbacks
          statusCode: function(se) {
            var ge;
            if (se)
              if (c)
                ie.always(se[ie.status]);
              else
                for (ge in se)
                  be[ge] = [be[ge], se[ge]];
            return this;
          },
          // Cancel the request
          abort: function(se) {
            var ge = se || Ge;
            return n && n.abort(ge), ct(0, ge), this;
          }
        };
        if (re.promise(ie), v.url = ((e || v.url || kt.href) + "").replace(Ai, kt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(ve) || [""], v.crossDomain == null) {
          f = H.createElement("a");
          try {
            f.href = v.url, f.href = f.href, v.crossDomain = en.protocol + "//" + en.host != f.protocol + "//" + f.host;
          } catch {
            v.crossDomain = !0;
          }
        }
        if (v.data && v.processData && typeof v.data != "string" && (v.data = i.param(v.data, v.traditional)), qn(In, v, t, ie), c)
          return ie;
        p = i.event && v.global, p && i.active++ === 0 && i.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Mi.test(v.type), r = v.url.replace(Si, ""), v.hasContent ? v.data && v.processData && (v.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (v.data = v.data.replace(_i, "+")) : (_ = v.url.slice(r.length), v.data && (v.processData || typeof v.data == "string") && (r += (Jt.test(r) ? "&" : "?") + v.data, delete v.data), v.cache === !1 && (r = r.replace(Ei, "$1"), _ = (Jt.test(r) ? "&" : "?") + "_=" + Rn.guid++ + _), v.url = r + _), v.ifModified && (i.lastModified[r] && ie.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && ie.setRequestHeader("If-None-Match", i.etag[r])), (v.data && v.hasContent && v.contentType !== !1 || t.contentType) && ie.setRequestHeader("Content-Type", v.contentType), ie.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + (v.dataTypes[0] !== "*" ? ", " + Xn + "; q=0.01" : "") : v.accepts["*"]
        );
        for (x in v.headers)
          ie.setRequestHeader(x, v.headers[x]);
        if (v.beforeSend && (v.beforeSend.call(D, ie, v) === !1 || c))
          return ie.abort();
        if (Ge = "abort", K.add(v.complete), ie.done(v.success), ie.fail(v.error), n = qn(Zt, v, t, ie), !n)
          ct(-1, "No Transport");
        else {
          if (ie.readyState = 1, p && V.trigger("ajaxSend", [ie, v]), c)
            return ie;
          v.async && v.timeout > 0 && (l = a.setTimeout(function() {
            ie.abort("timeout");
          }, v.timeout));
          try {
            c = !1, n.send(ye, ct);
          } catch (se) {
            if (c)
              throw se;
            ct(-1, se);
          }
        }
        function ct(se, ge, Mt, rn) {
          var Qe, At, Je, it, rt, ze = ge;
          c || (c = !0, l && a.clearTimeout(l), n = void 0, o = rn || "", ie.readyState = se > 0 ? 4 : 0, Qe = se >= 200 && se < 300 || se === 304, Mt && (it = Pi(v, ie, Mt)), !Qe && i.inArray("script", v.dataTypes) > -1 && i.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {
          }), it = Li(v, it, ie, Qe), Qe ? (v.ifModified && (rt = ie.getResponseHeader("Last-Modified"), rt && (i.lastModified[r] = rt), rt = ie.getResponseHeader("etag"), rt && (i.etag[r] = rt)), se === 204 || v.type === "HEAD" ? ze = "nocontent" : se === 304 ? ze = "notmodified" : (ze = it.state, At = it.data, Je = it.error, Qe = !Je)) : (Je = ze, (se || !ze) && (ze = "error", se < 0 && (se = 0))), ie.status = se, ie.statusText = (ge || ze) + "", Qe ? re.resolveWith(D, [At, ze, ie]) : re.rejectWith(D, [ie, ze, Je]), ie.statusCode(be), be = void 0, p && V.trigger(
            Qe ? "ajaxSuccess" : "ajaxError",
            [ie, v, Qe ? At : Je]
          ), K.fireWith(D, [ie, ze]), p && (V.trigger("ajaxComplete", [ie, v]), --i.active || i.event.trigger("ajaxStop")));
        }
        return ie;
      },
      getJSON: function(e, t, n) {
        return i.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return i.get(e, void 0, t, "script");
      }
    }), i.each(["get", "post"], function(e, t) {
      i[t] = function(n, r, o, s) {
        return E(r) && (s = s || o, o = r, r = void 0), i.ajax(i.extend({
          url: n,
          type: t,
          dataType: s,
          data: r,
          success: o
        }, i.isPlainObject(n) && n));
      };
    }), i.ajaxPrefilter(function(e) {
      var t;
      for (t in e.headers)
        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
    }), i._evalUrl = function(e, t, n) {
      return i.ajax({
        url: e,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(r) {
          i.globalEval(r, t, n);
        }
      });
    }, i.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (E(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var n = this; n.firstElementChild; )
            n = n.firstElementChild;
          return n;
        }).append(this)), this;
      },
      wrapInner: function(e) {
        return E(e) ? this.each(function(t) {
          i(this).wrapInner(e.call(this, t));
        }) : this.each(function() {
          var t = i(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function(e) {
        var t = E(e);
        return this.each(function(n) {
          i(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          i(this).replaceWith(this.childNodes);
        }), this;
      }
    }), i.expr.pseudos.hidden = function(e) {
      return !i.expr.pseudos.visible(e);
    }, i.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, i.ajaxSettings.xhr = function() {
      try {
        return new a.XMLHttpRequest();
      } catch {
      }
    };
    var Hi = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, Dt = i.ajaxSettings.xhr();
    k.cors = !!Dt && "withCredentials" in Dt, k.ajax = Dt = !!Dt, i.ajaxTransport(function(e) {
      var t, n;
      if (k.cors || Dt && !e.crossDomain)
        return {
          send: function(r, o) {
            var s, l = e.xhr();
            if (l.open(
              e.type,
              e.url,
              e.async,
              e.username,
              e.password
            ), e.xhrFields)
              for (s in e.xhrFields)
                l[s] = e.xhrFields[s];
            e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
            for (s in r)
              l.setRequestHeader(s, r[s]);
            t = function(f) {
              return function() {
                t && (t = n = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, f === "abort" ? l.abort() : f === "error" ? typeof l.status != "number" ? o(0, "error") : o(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  l.status,
                  l.statusText
                ) : o(
                  Hi[l.status] || l.status,
                  l.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (l.responseType || "text") !== "text" || typeof l.responseText != "string" ? { binary: l.response } : { text: l.responseText },
                  l.getAllResponseHeaders()
                ));
              };
            }, l.onload = t(), n = l.onerror = l.ontimeout = t("error"), l.onabort !== void 0 ? l.onabort = n : l.onreadystatechange = function() {
              l.readyState === 4 && a.setTimeout(function() {
                t && n();
              });
            }, t = t("abort");
            try {
              l.send(e.hasContent && e.data || null);
            } catch (f) {
              if (t)
                throw f;
            }
          },
          abort: function() {
            t && t();
          }
        };
    }), i.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }), i.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return i.globalEval(e), e;
        }
      }
    }), i.ajaxPrefilter("script", function(e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), i.ajaxTransport("script", function(e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, n;
        return {
          send: function(r, o) {
            t = i("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(s) {
              t.remove(), n = null, s && o(s.type === "error" ? 404 : 200, s.type);
            }), H.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
    var Wn = [], nn = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Wn.pop() || i.expando + "_" + Rn.guid++;
        return this[e] = !0, e;
      }
    }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r, o, s, l = e.jsonp !== !1 && (nn.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && nn.test(e.data) && "data");
      if (l || e.dataTypes[0] === "jsonp")
        return r = e.jsonpCallback = E(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(nn, "$1" + r) : e.jsonp !== !1 && (e.url += (Jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
          return s || i.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = a[r], a[r] = function() {
          s = arguments;
        }, n.always(function() {
          o === void 0 ? i(a).removeProp(r) : a[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Wn.push(r)), s && E(o) && o(s[0]), s = o = void 0;
        }), "script";
    }), k.createHTMLDocument = function() {
      var e = H.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
    }(), i.parseHTML = function(e, t, n) {
      if (typeof e != "string")
        return [];
      typeof t == "boolean" && (n = t, t = !1);
      var r, o, s;
      return t || (k.createHTMLDocument ? (t = H.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = H.location.href, t.head.appendChild(r)) : t = H), o = Ye.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = yn([e], t, s), s && s.length && i(s).remove(), i.merge([], o.childNodes));
    }, i.fn.load = function(e, t, n) {
      var r, o, s, l = this, f = e.indexOf(" ");
      return f > -1 && (r = lt(e.slice(f)), e = e.slice(0, f)), E(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), l.length > 0 && i.ajax({
        url: e,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(c) {
        s = arguments, l.html(r ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          i("<div>").append(i.parseHTML(c)).find(r)
        ) : (
          // Otherwise use the full result
          c
        ));
      }).always(n && function(c, p) {
        l.each(function() {
          n.apply(this, s || [c.responseText, p, c]);
        });
      }), this;
    }, i.expr.pseudos.animated = function(e) {
      return i.grep(i.timers, function(t) {
        return e === t.elem;
      }).length;
    }, i.offset = {
      setOffset: function(e, t, n) {
        var r, o, s, l, f, c, p, x = i.css(e, "position"), _ = i(e), v = {};
        x === "static" && (e.style.position = "relative"), f = _.offset(), s = i.css(e, "top"), c = i.css(e, "left"), p = (x === "absolute" || x === "fixed") && (s + c).indexOf("auto") > -1, p ? (r = _.position(), l = r.top, o = r.left) : (l = parseFloat(s) || 0, o = parseFloat(c) || 0), E(t) && (t = t.call(e, n, i.extend({}, f))), t.top != null && (v.top = t.top - f.top + l), t.left != null && (v.left = t.left - f.left + o), "using" in t ? t.using.call(e, v) : _.css(v);
      }
    }, i.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(e) {
        if (arguments.length)
          return e === void 0 ? this : this.each(function(o) {
            i.offset.setOffset(this, e, o);
          });
        var t, n, r = this[0];
        if (r)
          return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0], o = { top: 0, left: 0 };
          if (i.css(r, "position") === "fixed")
            t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static"; )
              e = e.parentNode;
            e && e !== r && e.nodeType === 1 && (o = i(e).offset(), o.top += i.css(e, "borderTopWidth", !0), o.left += i.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - o.top - i.css(r, "marginTop", !0),
            left: t.left - o.left - i.css(r, "marginLeft", !0)
          };
        }
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && i.css(e, "position") === "static"; )
            e = e.offsetParent;
          return e || at;
        });
      }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
      var n = t === "pageYOffset";
      i.fn[e] = function(r) {
        return Ze(this, function(o, s, l) {
          var f;
          if (z(o) ? f = o : o.nodeType === 9 && (f = o.defaultView), l === void 0)
            return f ? f[t] : o[s];
          f ? f.scrollTo(
            n ? f.pageXOffset : l,
            n ? l : f.pageYOffset
          ) : o[s] = l;
        }, e, r, arguments.length);
      };
    }), i.each(["top", "left"], function(e, t) {
      i.cssHooks[t] = _n(
        k.pixelPosition,
        function(n, r) {
          if (r)
            return r = St(n, t), Bt.test(r) ? i(n).position()[t] + "px" : r;
        }
      );
    }), i.each({ Height: "height", Width: "width" }, function(e, t) {
      i.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        i.fn[r] = function(o, s) {
          var l = arguments.length && (n || typeof o != "boolean"), f = n || (o === !0 || s === !0 ? "margin" : "border");
          return Ze(this, function(c, p, x) {
            var _;
            return z(c) ? r.indexOf("outer") === 0 ? c["inner" + e] : c.document.documentElement["client" + e] : c.nodeType === 9 ? (_ = c.documentElement, Math.max(
              c.body["scroll" + e],
              _["scroll" + e],
              c.body["offset" + e],
              _["offset" + e],
              _["client" + e]
            )) : x === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              i.css(c, p, f)
            ) : (
              // Set width or height on the element
              i.style(c, p, x, f)
            );
          }, t, l ? o : void 0, l);
        };
      });
    }), i.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(e, t) {
      i.fn[t] = function(n) {
        return this.on(t, n);
      };
    }), i.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function(e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      }
    }), i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(e, t) {
        i.fn[t] = function(n, r) {
          return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t);
        };
      }
    );
    var Ri = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    i.proxy = function(e, t) {
      var n, r, o;
      if (typeof t == "string" && (n = e[t], t = e, e = n), !!E(e))
        return r = w.call(arguments, 2), o = function() {
          return e.apply(t || this, r.concat(w.call(arguments)));
        }, o.guid = e.guid = e.guid || i.guid++, o;
    }, i.holdReady = function(e) {
      e ? i.readyWait++ : i.ready(!0);
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = I, i.isFunction = E, i.isWindow = z, i.camelCase = Ue, i.type = _e, i.now = Date.now, i.isNumeric = function(e) {
      var t = i.type(e);
      return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(e - parseFloat(e));
    }, i.trim = function(e) {
      return e == null ? "" : (e + "").replace(Ri, "$1");
    };
    var Oi = a.jQuery, Ni = a.$;
    return i.noConflict = function(e) {
      return a.$ === i && (a.$ = Ni), e && a.jQuery === i && (a.jQuery = Oi), i;
    }, typeof d > "u" && (a.jQuery = a.$ = i), i;
  });
})(Un);
var Bi = Un.exports;
const oe = /* @__PURE__ */ Fn(Bi);
var Vn = { exports: {} };
(function(Oe) {
  (function(a) {
    var d = le(), T = _e(), M = Ce(), w = Se(), L = {
      // Default is to fail on error, no placeholder
      imagePlaceholder: void 0,
      // Default cache bust is false, it will use the cache
      cacheBust: !1
    }, S = {
      toSvg: m,
      toPng: A,
      toJpeg: R,
      toBlob: X,
      toPixelData: b,
      impl: {
        fontFaces: M,
        images: w,
        util: d,
        inliner: T,
        options: {}
      }
    };
    Oe.exports = S;
    function m(i, Y) {
      return Y = Y || {}, B(Y), Promise.resolve(i).then(function(J) {
        return E(J, Y.filter, !0);
      }).then(z).then(H).then(I).then(function(J) {
        return de(
          J,
          Y.width || d.width(i),
          Y.height || d.height(i)
        );
      });
      function I(J) {
        return Y.bgcolor && (J.style.backgroundColor = Y.bgcolor), Y.width && (J.style.width = Y.width + "px"), Y.height && (J.style.height = Y.height + "px"), Y.style && Object.keys(Y.style).forEach(function(ae) {
          J.style[ae] = Y.style[ae];
        }), J;
      }
    }
    function b(i, Y) {
      return k(i, Y || {}).then(function(I) {
        return I.getContext("2d").getImageData(
          0,
          0,
          d.width(i),
          d.height(i)
        ).data;
      });
    }
    function A(i, Y) {
      return k(i, Y || {}).then(function(I) {
        return I.toDataURL();
      });
    }
    function R(i, Y) {
      return Y = Y || {}, k(i, Y).then(function(I) {
        return I.toDataURL("image/jpeg", Y.quality || 1);
      });
    }
    function X(i, Y) {
      return k(i, Y || {}).then(d.canvasToBlob);
    }
    function B(i) {
      typeof i.imagePlaceholder > "u" ? S.impl.options.imagePlaceholder = L.imagePlaceholder : S.impl.options.imagePlaceholder = i.imagePlaceholder, typeof i.cacheBust > "u" ? S.impl.options.cacheBust = L.cacheBust : S.impl.options.cacheBust = i.cacheBust;
    }
    function k(i, Y) {
      return m(i, Y).then(d.makeImage).then(d.delay(100)).then(function(J) {
        var ae = I(i);
        return ae.getContext("2d").drawImage(J, 0, 0), ae;
      });
      function I(J) {
        var ae = document.createElement("canvas");
        if (ae.width = Y.width || d.width(J), ae.height = Y.height || d.height(J), Y.bgcolor) {
          var ne = ae.getContext("2d");
          ne.fillStyle = Y.bgcolor, ne.fillRect(0, 0, ae.width, ae.height);
        }
        return ae;
      }
    }
    function E(i, Y, I) {
      if (!I && Y && !Y(i))
        return Promise.resolve();
      return Promise.resolve(i).then(J).then(function(j) {
        return ae(i, j, Y);
      }).then(function(j) {
        return ne(i, j);
      });
      function J(j) {
        return j instanceof HTMLCanvasElement ? d.makeImage(j.toDataURL()) : j.cloneNode(!1);
      }
      function ae(j, Q, Ee) {
        var Ne = j.childNodes;
        if (Ne.length === 0)
          return Promise.resolve(Q);
        return fe(Q, d.asArray(Ne), Ee).then(function() {
          return Q;
        });
        function fe(We, me, xe) {
          var Me = Promise.resolve();
          return me.forEach(function(Ye) {
            Me = Me.then(function() {
              return E(Ye, xe);
            }).then(function(ke) {
              ke && We.appendChild(ke);
            });
          }), Me;
        }
      }
      function ne(j, Q) {
        if (!(Q instanceof Element))
          return Q;
        return Promise.resolve().then(Ee).then(Ne).then(fe).then(We).then(function() {
          return Q;
        });
        function Ee() {
          me(window.getComputedStyle(j), Q.style);
          function me(xe, Me) {
            xe.cssText ? Me.cssText = xe.cssText : Ye(xe, Me);
            function Ye(ke, je) {
              d.asArray(ke).forEach(function($) {
                je.setProperty(
                  $,
                  ke.getPropertyValue($),
                  ke.getPropertyPriority($)
                );
              });
            }
          }
        }
        function Ne() {
          [":before", ":after"].forEach(function(xe) {
            me(xe);
          });
          function me(xe) {
            var Me = window.getComputedStyle(j, xe), Ye = Me.getPropertyValue("content");
            if (Ye === "" || Ye === "none")
              return;
            var ke = d.uid();
            Q.className = Q.className + " " + ke;
            var je = document.createElement("style");
            je.appendChild($(ke, xe, Me)), Q.appendChild(je);
            function $(Z, he, ue) {
              var we = "." + Z + ":" + he, ve = ue.cssText ? wt(ue) : Fe(ue);
              return document.createTextNode(we + "{" + ve + "}");
              function wt(Ae) {
                var Ie = Ae.getPropertyValue("content");
                return Ae.cssText + " content: " + Ie + ";";
              }
              function Fe(Ae) {
                return d.asArray(Ae).map(Ie).join("; ") + ";";
                function Ie(st) {
                  return st + ": " + Ae.getPropertyValue(st) + (Ae.getPropertyPriority(st) ? " !important" : "");
                }
              }
            }
          }
        }
        function fe() {
          j instanceof HTMLTextAreaElement && (Q.innerHTML = j.value), j instanceof HTMLInputElement && Q.setAttribute("value", j.value);
        }
        function We() {
          Q instanceof SVGElement && (Q.setAttribute("xmlns", "http://www.w3.org/2000/svg"), Q instanceof SVGRectElement && ["width", "height"].forEach(function(me) {
            var xe = Q.getAttribute(me);
            xe && Q.style.setProperty(me, xe);
          }));
        }
      }
    }
    function z(i) {
      return M.resolveAll().then(function(Y) {
        var I = document.createElement("style");
        return i.appendChild(I), I.appendChild(document.createTextNode(Y)), i;
      });
    }
    function H(i) {
      return w.inlineAll(i).then(function() {
        return i;
      });
    }
    function de(i, Y, I) {
      return Promise.resolve(i).then(function(J) {
        return J.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(J);
      }).then(d.escapeXhtml).then(function(J) {
        return '<foreignObject x="0" y="0" width="100%" height="100%">' + J + "</foreignObject>";
      }).then(function(J) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + Y + '" height="' + I + '">' + J + "</svg>";
      }).then(function(J) {
        return "data:image/svg+xml;charset=utf-8," + J;
      });
    }
    function le() {
      return {
        escape: We,
        parseExtension: Y,
        mimeType: I,
        dataAsUrl: fe,
        isDataUrl: J,
        canvasToBlob: ne,
        resolveUrl: j,
        getAndEncode: Ne,
        uid: Q(),
        delay: me,
        asArray: xe,
        escapeXhtml: Me,
        makeImage: Ee,
        width: Ye,
        height: ke
      };
      function i() {
        var $ = "application/font-woff", Z = "image/jpeg";
        return {
          woff: $,
          woff2: $,
          ttf: "application/font-truetype",
          eot: "application/vnd.ms-fontobject",
          png: "image/png",
          jpg: Z,
          jpeg: Z,
          gif: "image/gif",
          tiff: "image/tiff",
          svg: "image/svg+xml"
        };
      }
      function Y($) {
        var Z = /\.([^\.\/]*?)$/g.exec($);
        return Z ? Z[1] : "";
      }
      function I($) {
        var Z = Y($).toLowerCase();
        return i()[Z] || "";
      }
      function J($) {
        return $.search(/^(data:)/) !== -1;
      }
      function ae($) {
        return new Promise(function(Z) {
          for (var he = window.atob($.toDataURL().split(",")[1]), ue = he.length, we = new Uint8Array(ue), ve = 0; ve < ue; ve++)
            we[ve] = he.charCodeAt(ve);
          Z(new Blob([we], {
            type: "image/png"
          }));
        });
      }
      function ne($) {
        return $.toBlob ? new Promise(function(Z) {
          $.toBlob(Z);
        }) : ae($);
      }
      function j($, Z) {
        var he = document.implementation.createHTMLDocument(), ue = he.createElement("base");
        he.head.appendChild(ue);
        var we = he.createElement("a");
        return he.body.appendChild(we), ue.href = Z, we.href = $, we.href;
      }
      function Q() {
        var $ = 0;
        return function() {
          return "u" + Z() + $++;
          function Z() {
            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
          }
        };
      }
      function Ee($) {
        return new Promise(function(Z, he) {
          var ue = new Image();
          ue.onload = function() {
            Z(ue);
          }, ue.onerror = he, ue.src = $;
        });
      }
      function Ne($) {
        var Z = 3e4;
        return S.impl.options.cacheBust && ($ += (/\?/.test($) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), new Promise(function(he) {
          var ue = new XMLHttpRequest();
          ue.onreadystatechange = wt, ue.ontimeout = Fe, ue.responseType = "blob", ue.timeout = Z, ue.open("GET", $, !0), ue.send();
          var we;
          if (S.impl.options.imagePlaceholder) {
            var ve = S.impl.options.imagePlaceholder.split(/,/);
            ve && ve[1] && (we = ve[1]);
          }
          function wt() {
            if (ue.readyState === 4) {
              if (ue.status !== 200) {
                we ? he(we) : Ae("cannot fetch resource: " + $ + ", status: " + ue.status);
                return;
              }
              var Ie = new FileReader();
              Ie.onloadend = function() {
                var st = Ie.result.split(/,/)[1];
                he(st);
              }, Ie.readAsDataURL(ue.response);
            }
          }
          function Fe() {
            we ? he(we) : Ae("timeout of " + Z + "ms occured while fetching resource: " + $);
          }
          function Ae(Ie) {
            console.error(Ie), he("");
          }
        });
      }
      function fe($, Z) {
        return "data:" + Z + ";base64," + $;
      }
      function We($) {
        return $.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
      }
      function me($) {
        return function(Z) {
          return new Promise(function(he) {
            setTimeout(function() {
              he(Z);
            }, $);
          });
        };
      }
      function xe($) {
        for (var Z = [], he = $.length, ue = 0; ue < he; ue++)
          Z.push($[ue]);
        return Z;
      }
      function Me($) {
        return $.replace(/#/g, "%23").replace(/\n/g, "%0A");
      }
      function Ye($) {
        var Z = je($, "border-left-width"), he = je($, "border-right-width");
        return $.scrollWidth + Z + he;
      }
      function ke($) {
        var Z = je($, "border-top-width"), he = je($, "border-bottom-width");
        return $.scrollHeight + Z + he;
      }
      function je($, Z) {
        var he = window.getComputedStyle($).getPropertyValue(Z);
        return parseFloat(he.replace("px", ""));
      }
    }
    function _e() {
      var i = /url\(['"]?([^'"]+?)['"]?\)/g;
      return {
        inlineAll: ae,
        shouldProcess: Y,
        impl: {
          readUrls: I,
          inline: J
        }
      };
      function Y(ne) {
        return ne.search(i) !== -1;
      }
      function I(ne) {
        for (var j = [], Q; (Q = i.exec(ne)) !== null; )
          j.push(Q[1]);
        return j.filter(function(Ee) {
          return !d.isDataUrl(Ee);
        });
      }
      function J(ne, j, Q, Ee) {
        return Promise.resolve(j).then(function(fe) {
          return Q ? d.resolveUrl(fe, Q) : fe;
        }).then(Ee || d.getAndEncode).then(function(fe) {
          return d.dataAsUrl(fe, d.mimeType(j));
        }).then(function(fe) {
          return ne.replace(Ne(j), "$1" + fe + "$3");
        });
        function Ne(fe) {
          return new RegExp(`(url\\(['"]?)(` + d.escape(fe) + `)(['"]?\\))`, "g");
        }
      }
      function ae(ne, j, Q) {
        if (Ee())
          return Promise.resolve(ne);
        return Promise.resolve(ne).then(I).then(function(Ne) {
          var fe = Promise.resolve(ne);
          return Ne.forEach(function(We) {
            fe = fe.then(function(me) {
              return J(me, We, j, Q);
            });
          }), fe;
        });
        function Ee() {
          return !Y(ne);
        }
      }
    }
    function Ce() {
      return {
        resolveAll: i,
        impl: {
          readAll: Y
        }
      };
      function i() {
        return Y().then(function(I) {
          return Promise.all(
            I.map(function(J) {
              return J.resolve();
            })
          );
        }).then(function(I) {
          return I.join(`
`);
        });
      }
      function Y() {
        return Promise.resolve(d.asArray(document.styleSheets)).then(J).then(I).then(function(ne) {
          return ne.map(ae);
        });
        function I(ne) {
          return ne.filter(function(j) {
            return j.type === CSSRule.FONT_FACE_RULE;
          }).filter(function(j) {
            return T.shouldProcess(j.style.getPropertyValue("src"));
          });
        }
        function J(ne) {
          var j = [];
          return ne.forEach(function(Q) {
            try {
              d.asArray(Q.cssRules || []).forEach(j.push.bind(j));
            } catch (Ee) {
              console.log("Error while reading CSS rules from " + Q.href, Ee.toString());
            }
          }), j;
        }
        function ae(ne) {
          return {
            resolve: function() {
              var Q = (ne.parentStyleSheet || {}).href;
              return T.inlineAll(ne.cssText, Q);
            },
            src: function() {
              return ne.style.getPropertyValue("src");
            }
          };
        }
      }
    }
    function Se() {
      return {
        inlineAll: Y,
        impl: {
          newImage: i
        }
      };
      function i(I) {
        return {
          inline: J
        };
        function J(ae) {
          return d.isDataUrl(I.src) ? Promise.resolve() : Promise.resolve(I.src).then(ae || d.getAndEncode).then(function(ne) {
            return d.dataAsUrl(ne, d.mimeType(I.src));
          }).then(function(ne) {
            return new Promise(function(j, Q) {
              I.onload = j, I.onerror = Q, I.src = ne;
            });
          });
        }
      }
      function Y(I) {
        if (!(I instanceof Element))
          return Promise.resolve(I);
        return J(I).then(function() {
          return I instanceof HTMLImageElement ? i(I).inline() : Promise.all(
            d.asArray(I.childNodes).map(function(ae) {
              return Y(ae);
            })
          );
        });
        function J(ae) {
          var ne = ae.style.getPropertyValue("background");
          return ne ? T.inlineAll(ne).then(function(j) {
            ae.style.setProperty(
              "background",
              j,
              ae.style.getPropertyPriority("background")
            );
          }).then(function() {
            return ae;
          }) : Promise.resolve(ae);
        }
      }
    }
  })();
})(Vn);
var Fi = Vn.exports;
const Ui = /* @__PURE__ */ Fn(Fi);
class fn {
  constructor() {
    this.regionDraggingCallback = [], this.regionDragStartCallback = [], this.regionDragEndCallback = [], this.screenshotGeneratedCallback = [], this.toolsCanvasCreatedCallback = [], this.closedCallback = [], this.successCreatedCallback = [], this.errorCreatedCallback = [], this.screenshotDownloadCallback = [];
  }
  getMouseRelativeXy({ clientX: a, clientY: d }) {
    let { left: T, top: M } = this.canvas.getBoundingClientRect(), w = a - T, L = d - M;
    return {
      x: w,
      y: L
    };
  }
  triggerEvent(a, d) {
    a.forEach((T) => {
      T(d);
    });
  }
  on(a, d) {
    switch (a) {
      case "regionDragging":
        this.regionDraggingCallback.push(d);
        break;
      case "regionDragStart":
        this.regionDragStartCallback.push(d);
        break;
      case "regionDragEnd":
        this.regionDragEndCallback.push(d);
        break;
      case "screenshotGenerated":
        this.screenshotGeneratedCallback.push(d);
        break;
      case "toolsCanvasCreated":
        this.toolsCanvasCreatedCallback.push(d);
        break;
      case "closed":
        this.closedCallback.push(d);
        break;
      case "successCreated":
        this.successCreatedCallback.push(d);
        break;
      case "errorCreated":
        this.errorCreatedCallback.push(d);
        break;
      case "screenshotDownload":
        this.screenshotDownloadCallback.push(d);
        break;
    }
  }
  off(a, d) {
    switch (a) {
      case "regionDragging":
        this.regionDraggingCallback = this.regionDraggingCallback.filter(
          (T) => T !== d
        );
        break;
      case "regionDragStart":
        this.regionDragStartCallback = this.regionDragStartCallback.filter(
          (T) => T !== d
        );
        break;
      case "regionDragEnd":
        this.regionDragEndCallback = this.regionDragEndCallback.filter(
          (T) => T !== d
        );
        break;
      case "screenshotGenerated":
        this.screenshotGeneratedCallback = this.screenshotGeneratedCallback.filter((T) => T !== d);
        break;
      case "toolsCanvasCreated":
        this.toolsCanvasCreatedCallback = this.toolsCanvasCreatedCallback.filter((T) => T !== d);
        break;
      case "closed":
        this.closedCallback = this.closedCallback.filter(
          (T) => T !== d
        );
        break;
      case "successCreated":
        this.successCreatedCallback = this.successCreatedCallback.filter(
          (T) => T !== d
        );
        break;
      case "errorCreated":
        this.errorCreatedCallback = this.errorCreatedCallback.filter(
          (T) => T !== d
        );
        break;
      case "screenshotDownload":
        this.screenshotDownloadCallback = this.screenshotDownloadCallback.filter((T) => T !== d);
        break;
    }
  }
}
class Vi extends fn {
  constructor(a = {}) {
    var T, M, w;
    super(a), this.canvas = null, this.ctx = null, this.startX = 0, this.startY = 0, this.endX = 0, this.endY = 0, this.regionColor = a.regionColor, this.screenshot = a.screenshot;
    let d = {
      show: !0,
      color: "#ffffff",
      fontSize: 14
    };
    this.regionSizeIndicator = a.regionSizeIndicator ?? d, (T = this.regionSizeIndicator).show ?? (T.show = d.show), (M = this.regionSizeIndicator).color ?? (M.color = d.color), (w = this.regionSizeIndicator).fontSize ?? (w.fontSize = d.fontSize), this.maskColor = a.maskColor ?? "rgba(0, 0, 0, 0.5)";
  }
  init() {
    this.canvas = document.createElement("canvas"), this.canvas.width = innerWidth, this.canvas.height = innerHeight, this.canvas.style.cssText = "cursor:crosshair;position:fixed;top:0;left:0;z-index:9999", document.body.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ), this.ctx.fillStyle = this.maskColor, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    let a = this, d = !1, T = !1, M, w, L, S;
    function m(A) {
      T = !0;
      let { x: R, y: X } = a.getMouseRelativeXy(A);
      M === void 0 && w === void 0 ? (M = R, w = X, L = R, S = X) : (L = R, S = X), L = Math.min(L, a.canvas.width), S = Math.min(S, a.canvas.height), L = Math.max(L, 0), S = Math.max(S, 0), a.setRegionSize(M, w, L, S);
    }
    function b() {
      if (d) {
        if (document.removeEventListener("mousemove", m), !T)
          return;
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", b), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", a.allowDragRegion(), a.triggerEvent(a.regionDragEndCallback, {
          startX: a.startX,
          startY: a.startY,
          endX: a.endX,
          endY: a.endY
        });
      }
    }
    a.canvas.onmousedown = function() {
      d = !0, document.addEventListener("mousemove", m);
    }, document.addEventListener("mouseup", b);
  }
  allowDragRegion() {
    let a = this;
    const d = 2;
    let T = null;
    this.allowDragRegionMousemove = function(L) {
      let { x: S, y: m } = a.getMouseRelativeXy(L), b = Math.min(a.startX, a.endX), A = Math.max(a.startX, a.endX), R = Math.min(a.startY, a.endY), X = Math.max(a.startY, a.endY);
      if (S >= b + d && S <= A - d && m >= R + d && m <= X - d) {
        a.canvas.style.cursor = "move";
        let B = A - b, k = X - R, E, z;
        T = function(H) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "move";
          let { x: de, y: le } = a.getMouseRelativeXy(H);
          E ?? (E = de - b), z ?? (z = le - R), de = Math.min(de, innerWidth - B + E), de = Math.max(de, E), le = Math.min(le, innerHeight - k + z), le = Math.max(le, z), a.setRegionSize(
            de - E,
            le - z,
            de + B - E,
            le + k - z
          );
        };
      } else {
        let B = function({ x: k, y: E }) {
          let z = innerWidth, H = innerHeight;
          return k = Math.max(k, 0), k = Math.min(k, z), E = Math.max(E, 0), E = Math.min(E, H), { x: k, y: E };
        };
        S >= b - d && S <= b + d && m >= R - d && m <= R + d ? (a.canvas.style.cursor = "nw-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "nw-resize";
          let E = a.getMouseRelativeXy(k), { x: z, y: H } = B(E);
          a.setRegionSize(z, H, A, X);
        }) : S >= A - d && S <= A + d && m >= R - d && m <= R + d ? (a.canvas.style.cursor = "ne-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "ne-resize";
          let E = a.getMouseRelativeXy(k), { x: z, y: H } = B(E);
          a.setRegionSize(b, H, z, X);
        }) : S >= b - d && S <= b + d && m >= X - d && m <= X + d ? (a.canvas.style.cursor = "ne-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "ne-resize";
          let E = a.getMouseRelativeXy(k), { x: z, y: H } = B(E);
          a.setRegionSize(z, R, A, H);
        }) : S >= A - d && S <= A + d && m >= X - d && m <= X + d ? (a.canvas.style.cursor = "nw-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "nw-resize";
          let E = a.getMouseRelativeXy(k), { x: z, y: H } = B(E);
          a.setRegionSize(b, R, z, H);
        }) : S >= b - d && S <= b + d ? (a.canvas.style.cursor = "w-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "w-resize";
          let E = a.getMouseRelativeXy(k), { x: z } = B(E);
          a.setRegionSize(z, R, A, X);
        }) : S >= A - d && S <= A + d ? (a.canvas.style.cursor = "w-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "w-resize";
          let E = a.getMouseRelativeXy(k), { x: z } = B(E);
          a.setRegionSize(b, R, z, X);
        }) : m >= R - d && m <= R + d ? (a.canvas.style.cursor = "n-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "n-resize";
          let E = a.getMouseRelativeXy(k), { y: z } = B(E);
          a.setRegionSize(b, z, A, X);
        }) : m >= X - d && m <= X + d ? (a.canvas.style.cursor = "n-resize", T = function(k) {
          a.triggerEvent(a.regionDraggingCallback, {
            startX: a.startX,
            startY: a.startY,
            endX: a.endX,
            endY: a.endY
          }), a.canvas.style.cursor = "n-resize";
          let E = a.getMouseRelativeXy(k), { y: z } = B(E);
          a.setRegionSize(b, R, A, z);
        }) : (a.canvas.onmousedown = null, T = null, a.canvas.style.cursor = "default");
      }
    };
    let M = null;
    this.dragRegionMousedown = function() {
      M = T, M && (a.triggerEvent(a.regionDragStartCallback, {
        startX: a.startX,
        startY: a.startY,
        endX: a.endX,
        endY: a.endY
      }), document.addEventListener("mousemove", T));
    }, this.canvas.addEventListener("mousedown", this.dragRegionMousedown);
    function w() {
      M && (a.triggerEvent(a.regionDragEndCallback, {
        startX: a.startX,
        startY: a.startY,
        endX: a.endX,
        endY: a.endY
      }), document.removeEventListener("mousemove", M), M = null);
    }
    document.addEventListener("mouseup", w), this.canvas.addEventListener("mousemove", this.allowDragRegionMousemove);
  }
  notAllowDragRegion() {
    this.canvas.removeEventListener("mousemove", this.allowDragRegionMousemove), this.canvas.removeEventListener("mousedown", this.dragRegionMousedown);
  }
  setRegionSize(a, d, T, M) {
    const m = this.regionSizeIndicator.fontSize;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ), this.startX = Math.min(a, T), this.endX = Math.max(a, T), this.startY = Math.min(d, M), this.endY = Math.max(d, M), this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.moveTo(this.startX, this.startY), this.ctx.lineTo(this.startX, this.endY), this.ctx.lineTo(this.endX, this.endY), this.ctx.lineTo(this.endX, this.startY), this.ctx.closePath(), this.ctx.fillStyle = this.maskColor, this.ctx.fill(), this.ctx.strokeStyle = "#0000", this.ctx.stroke(), this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(this.startX, this.startY), this.ctx.lineTo(this.startX, this.endY), this.ctx.lineTo(this.endX, this.endY), this.ctx.lineTo(this.endX, this.startY), this.ctx.closePath(), this.ctx.strokeStyle = this.regionColor, this.ctx.stroke(), this.ctx.font = m + "px Arial", this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
    let b = `${Math.max(
      1,
      Math.round(this.endX - this.startX)
    )} x ${Math.max(1, Math.round(this.endY - this.startY))}`, A = this.ctx.measureText(b).fontBoundingBoxAscent, R = this.startY - 2 - 5 - A;
    this.ctx.fillStyle = this.regionSizeIndicator.color, R >= 0 && this.regionSizeIndicator.show && this.ctx.fillText(
      b,
      this.startX + 2,
      this.startY - 2 - 5
    ), R < 0 && this.regionSizeIndicator.show && this.ctx.fillText(
      b,
      this.startX + 5,
      this.startY + 2 + m + 5
    );
    let X = 6 / 2;
    this.ctx.fillStyle = this.regionColor;
    let B = {
      x: this.startX - X,
      y: (this.endY + this.startY) / 2 - X
    }, k = {
      x: this.endX - X,
      y: (this.endY + this.startY) / 2 - X
    }, E = {
      x: (this.endX + this.startX) / 2 - X,
      y: this.startY - X
    }, z = {
      x: (this.endX + this.startX) / 2 - X,
      y: this.endY - X
    };
    this.ctx.fillRect(
      B.x,
      B.y,
      6,
      6
    ), this.ctx.fillRect(
      k.x,
      k.y,
      6,
      6
    ), this.ctx.fillRect(
      z.x,
      z.y,
      6,
      6
    ), this.ctx.fillRect(
      E.x,
      E.y,
      6,
      6
    ), this.ctx.fillRect(
      B.x,
      E.y,
      6,
      6
    ), this.ctx.fillRect(
      B.x,
      z.y,
      6,
      6
    ), this.ctx.fillRect(
      k.x,
      E.y,
      6,
      6
    ), this.ctx.fillRect(
      k.x,
      z.y,
      6,
      6
    ), this.ctx.closePath(), this.triggerEvent(this.regionDraggingCallback, {
      startX: this.startX,
      startY: this.startY,
      endX: this.endX,
      endY: this.endY
    });
  }
}
class Gi extends fn {
  constructor(a) {
    var d, T, M, w, L, S, m, b, A, R, X;
    super(a), this.region = a.region, this.screenshot = a.screenshot, this.customDrawing = a.customDrawing ?? [], this.screenshotDownloadName = a.screenshotDownloadName ?? "screenshot", this.globalColorOptions = a.globalColorOptions ?? [
      "#ff3a3a",
      "#f8b60f",
      "#0083ff",
      "#40ff00",
      "#363636",
      "#e9e9e9"
    ], this.rectangleOptions = {
      lineWidth: ((d = a.rectangleOptions) == null ? void 0 : d.size) ?? [4, 6, 8],
      lineColor: ((T = a.rectangleOptions) == null ? void 0 : T.color) ?? this.globalColorOptions
    }, this.circleOptions = {
      lineWidth: ((M = a.circleOptions) == null ? void 0 : M.size) ?? [4, 6, 8],
      lineColor: ((w = a.circleOptions) == null ? void 0 : w.color) ?? this.globalColorOptions
    }, this.paintOptions = {
      lineWidth: ((L = a.paintOptions) == null ? void 0 : L.size) ?? [4, 6, 8],
      lineColor: ((S = a.paintOptions) == null ? void 0 : S.color) ?? this.globalColorOptions
    }, this.mosaicOptions = {
      lineWidth: ((m = a.mosaicOptions) == null ? void 0 : m.size) ?? [6, 8, 10]
    }, this.textOptions = {
      textSize: ((b = a.textOptions) == null ? void 0 : b.size) ?? [16, 18, 20],
      textColor: ((A = a.textOptions) == null ? void 0 : A.color) ?? this.globalColorOptions
    }, this.arrowOptions = {
      lineWidth: ((R = a.arrowOptions) == null ? void 0 : R.size) ?? [4, 6, 8],
      lineColor: ((X = a.arrowOptions) == null ? void 0 : X.color) ?? this.globalColorOptions
    }, this.createHandle(), this.drawHistory = new Proxy([], {
      set(B, k, E) {
        return E ? oe(".region-screenshot_revocation").removeClass(
          "region-screenshot_disabled"
        ) : oe(".region-screenshot_revocation").addClass(
          "region-screenshot_disabled"
        ), B[k] = E, !0;
      }
    });
  }
  createCanvas() {
    if (this.canvas)
      return;
    let { startX: a, startY: d, endX: T, endY: M } = this.region;
    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), document.body.appendChild(this.canvas);
    let w = T - a, L = M - d;
    this.canvas.width = w, this.canvas.height = L, this.canvas.style.cssText = `position:fixed;top:${d}px;left:${a}px;z-index:9999`, this.triggerEvent(this.toolsCanvasCreatedCallback);
  }
  getOriginImg() {
    let { startX: a, startY: d, endX: T, endY: M } = this.region, w = document.createElement("canvas");
    return w.width = Math.max(T - a, 1), w.height = Math.max(M - d, 1), w.getContext("2d").drawImage(this.screenshot, -a, -d, innerWidth, innerHeight), w;
  }
  getMosaicImg() {
    let { startX: a, startY: d, endX: T, endY: M } = this.region, w = document.createElement("canvas");
    w.width = T - a, w.height = M - d;
    let L = w.getContext("2d");
    L.drawImage(this.screenshot, -a, -d, innerWidth, innerHeight);
    let S = L.getImageData(0, 0, w.width, w.height);
    const m = 10, b = S.data;
    for (let A = 0; A < w.height; A += m)
      for (let R = 0; R < w.width; R += m) {
        let X = 0, B = 0, k = 0, E = 0, z = 0;
        for (let Ce = A; Ce < A + m && Ce < w.height; Ce++)
          for (let Se = R; Se < R + m && Se < w.width; Se++) {
            let i = (Ce * w.width + Se) * 4;
            X += b[i], B += b[i + 1], k += b[i + 2], E += b[i + 3], z++;
          }
        let H = X / z, de = B / z, le = k / z, _e = E / z;
        for (let Ce = A; Ce < A + m && Ce < w.height; Ce++)
          for (let Se = R; Se < R + m && Se < w.width; Se++) {
            let i = (Ce * w.width + Se) * 4;
            b[i] = H, b[i + 1] = de, b[i + 2] = le, b[i + 3] = _e;
          }
      }
    return L.putImageData(S, 0, 0), w;
  }
  createHandle() {
    this.handle = document.createElement("div"), this.handle.style.setProperty("--active-color", "#409eff");
    let a = this.rectangleOptions, d = this.circleOptions, T = this.paintOptions, M = this.mosaicOptions, w = this.textOptions, L = this.arrowOptions;
    this.handle.innerHTML = `
    <ul class="region-screenshot_tools_drawing">
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_rectangle">
          <div class="region-screenshot_tools_btn"></div>
          <ul class="region-screenshot_tools_options">
            <li class="region-screenshot_tools_size_instruction_list">
            
            </li>
            <li class="region-screenshot_tools_color_instruction_list">
             
            </li>
          </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_circle">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_paint">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_mosaic">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_text">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      <li class="region-screenshot_draw_item region-screenshot_tools_item region-screenshot_arrow">
        <div class="region-screenshot_tools_btn"></div>
        <ul class="region-screenshot_tools_options">
          <li class="region-screenshot_tools_size_instruction_list">
          
          </li>
          <li class="region-screenshot_tools_color_instruction_list">
          
          </li>
        </ul>
      </li>
      
     </ul>
     <div class="region-screenshot_tools_split"></div>
     <ul>
      <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_revocation region-screenshot_disabled">
        <div class="region-screenshot_tools_btn"></div>
      </li>
      <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_close">
        <div class="region-screenshot_tools_btn"></div>
      </li>
    <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_download">
      <div class="region-screenshot_tools_btn"></div>
    </li>
    <li class="region-screenshot_other_item region-screenshot_tools_item region-screenshot_finish">
      <div class="region-screenshot_tools_btn"></div>
    </li>
     </ul>
    `, this.handle.className = "region-screenshot_tools", document.body.appendChild(this.handle), this.customDrawing.forEach((m) => {
      let b = oe(".region-screenshot_tools_drawing"), A = document.createElement("li");
      A.classList.add("region-screenshot_draw_item"), A.classList.add("region-screenshot_tools_item"), A.classList.add("region-screenshot_custom_tools"), A.classList.add(m.className), A.innerHTML = `
          <div class="region-screenshot_tools_btn"></div>
      `, m.optionsHtml && (A.innerHTML += ` <div class="region-screenshot_tools_options">
        ${m.optionsHtml}
      </div>`), b[0].appendChild(A), A.onDrawingClose = m.onDrawingClose, A.onDrawingOpen = m.onDrawingOpen, typeof m.onOptionsCreated == "function" && m.onOptionsCreated(oe(A).find(".region-screenshot_tools_options")[0]);
    }), a.lineWidth.forEach((m) => {
      let b = oe(
        ".region-screenshot_rectangle .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), a.lineColor.forEach((m) => {
      let b = oe(
        ".region-screenshot_rectangle .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), d.lineWidth.forEach((m) => {
      let b = oe(
        ".region-screenshot_circle .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), d.lineColor.forEach((m) => {
      let b = oe(
        ".region-screenshot_circle .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), T.lineWidth.forEach((m) => {
      let b = oe(
        ".region-screenshot_paint .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), T.lineColor.forEach((m) => {
      let b = oe(
        ".region-screenshot_paint .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), L.lineWidth.forEach((m) => {
      let b = oe(
        ".region-screenshot_arrow .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), L.lineColor.forEach((m) => {
      let b = oe(
        ".region-screenshot_arrow .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), M.lineWidth.forEach((m) => {
      let b = oe(
        ".region-screenshot_mosaic .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), w.textSize.forEach((m) => {
      let b = oe(
        ".region-screenshot_text .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div text-size="${m}"  style="font-size:${m}px" class="region-screenshot_tools_size">
          T
        </div>`
      );
    }), w.textColor.forEach((m) => {
      let b = oe(
        ".region-screenshot_text .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div text-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    });
    let S = this;
    oe(".region-screenshot_draw_item .region-screenshot_tools_btn").click(
      function() {
        let m = oe(this).parent(), b = oe(this).next();
        if (m.hasClass("region-screenshot_active"))
          m.removeClass("region-screenshot_active");
        else if (m.attr("is-init") === void 0) {
          m.addClass("region-screenshot_active");
          let A = m.find(".region-screenshot_tools_options")[0];
          if (A) {
            let B = A.getBoundingClientRect().left, k = A.getBoundingClientRect().top, E = B + A.offsetWidth, z = k + A.offsetHeight;
            if (E > innerWidth) {
              let de = innerWidth - E - 1;
              A.style.transform = `translate(${de}px, 0)`, A.style.setProperty(
                "--tools_inner_translate_x",
                `${de * -1}px`
              );
            }
            let H = m[0].getBoundingClientRect().top;
            (z > innerHeight || H < S.region.canvas.offsetTop + S.region.startY) && oe(A).addClass("region-screenshot_top"), A.getBoundingClientRect().top < 0 && oe(A).removeClass("region-screenshot_top");
          }
          m.attr("is-init", ""), m.siblings().removeClass("region-screenshot_active");
          let R = b.find(
            ".region-screenshot_tools_size_instruction_list > div"
          );
          R.length && R[0].click();
          let X = b.find(".region-screenshot_tools_color");
          X.length && X[0].click();
        } else
          b.find(
            ".region-screenshot_tools_size_instruction_list > div.region-screenshot_active"
          ).click(), b.find(
            ".region-screenshot_tools_color.region-screenshot_active"
          ).click(), m.addClass("region-screenshot_active");
        m.siblings().removeClass("region-screenshot_active"), S.closeCurrentDraw && S.closeCurrentDraw(!0), m.hasClass("region-screenshot_active") && (m.hasClass("region-screenshot_rectangle") ? S.closeCurrentDraw = S.drawRectangle() : m.hasClass("region-screenshot_circle") ? S.closeCurrentDraw = S.drawCircle() : m.hasClass("region-screenshot_paint") ? S.closeCurrentDraw = S.drawPaint() : m.hasClass("region-screenshot_mosaic") ? S.closeCurrentDraw = S.drawMosaic() : m.hasClass("region-screenshot_text") ? S.closeCurrentDraw = S.drawText() : m.hasClass("region-screenshot_arrow") ? S.closeCurrentDraw = S.drawArrow() : m.hasClass("region-screenshot_custom_tools") && (S.closeCurrentDraw = S.drawCustom(this)));
      }
    ), oe(".region-screenshot_tools_size").click(function() {
      oe(this).addClass("region-screenshot_active"), oe(this).siblings().removeClass("region-screenshot_active"), S.checkedLineWidth = Number(oe(this).attr("line-width")), S.checkedTextSize = Number(oe(this).attr("text-size"));
    }), oe(".region-screenshot_tools_color").click(function() {
      oe(this).addClass("region-screenshot_active"), oe(this).siblings().removeClass("region-screenshot_active"), S.checkedLineColor = oe(this).attr("line-color"), S.checkedTextColor = oe(this).attr("text-color");
    }), oe(".region-screenshot_other_item .region-screenshot_tools_btn").click(
      function() {
        let m = oe(this).parent();
        m.hasClass("region-screenshot_revocation") ? S.revocation() : m.hasClass("region-screenshot_close") ? S.triggerEvent(S.closedCallback) : m.hasClass("region-screenshot_finish") ? S.screenshotGenerate().then((b) => {
          S.triggerEvent(S.screenshotGeneratedCallback, b);
        }) : m.hasClass("region-screenshot_download") && S.screenshotDownload().then((b) => {
          S.close(), S.triggerEvent(S.screenshotDownloadCallback, b);
        });
      }
    ), this.handle.style.display = "none";
  }
  updateHandlePosition() {
    let { startX: a, startY: d, endX: T, endY: M } = this.region;
    const w = 10;
    let L = this.handle.style, S = this.handle.offsetWidth, m = this.handle.offsetHeight, b = 0;
    T > S ? b = T - S : b = a, L.left = b + "px", d - w - m < 0 && M + w + m > window.innerHeight ? (L.top = M - w - m + "px", L.left = b - w + "px") : M + w + m > window.innerHeight ? L.top = d - w - m + "px" : L.top = M + w + "px";
  }
  updateHandleDisplay(a) {
    this.handle.style.display = a;
  }
  revocation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.drawHistory.pop(), this.drawHistory.length && this.ctx.drawImage(this.drawHistory.at(-1), 0, 0);
  }
  async screenshotGenerate() {
    this.drawTextActivity && await this.drawTextActivity();
    let a = this.getOriginImg(), d = a.getContext("2d");
    return this.canvas && d.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height), a.toDataURL("image/png");
  }
  async screenshotDownload() {
    let a = await this.screenshotGenerate(), d = document.createElement("a");
    return d.href = a, d.download = this.screenshotDownloadName + ".png", d.click(), a;
  }
  drawRectangle() {
    this.createCanvas();
    let a = this, d, T, M, w, L = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(R) {
      L = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0);
      let { x: X, y: B } = a.getMouseRelativeXy(R);
      d === void 0 && T === void 0 ? (d = X, T = B, M = X, w = B) : (M = X, w = B), M = Math.min(M, a.canvas.width), w = Math.min(w, a.canvas.height), M = Math.max(M, 0), w = Math.max(w, 0);
      let k = a.checkedLineWidth, E = a.checkedLineColor;
      m = () => {
        a.ctx.beginPath(), a.ctx.rect(d, T, M - d, w - T), a.ctx.strokeStyle = E, a.ctx.lineWidth = k, a.ctx.stroke(), a.ctx.closePath();
      }, m();
    }
    function A(R) {
      if (S || R === !0) {
        if (document.removeEventListener("mousemove", b), !L && R !== !0)
          return;
        m && R !== !0 && a.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", A), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", R !== !0 && a.drawRectangle();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", A), A;
  }
  drawCircle() {
    this.createCanvas();
    let a = this, d, T, M, w, L = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(R) {
      L = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0);
      let { x: X, y: B } = a.getMouseRelativeXy(R);
      d === void 0 && T === void 0 ? (d = X, T = B, M = X, w = B) : (M = X, w = B), M = Math.min(M, a.canvas.width), w = Math.min(w, a.canvas.height), M = Math.max(M, 0), w = Math.max(w, 0);
      let k = a.checkedLineWidth, E = a.checkedLineColor;
      m = () => {
        a.ctx.beginPath();
        let z = M - d, H = w - T, de = d + z / 2, le = T + H / 2;
        a.ctx.ellipse(
          de,
          le,
          Math.abs(z / 2),
          Math.abs(H / 2),
          0,
          0,
          Math.PI * 2
        ), a.ctx.strokeStyle = E, a.ctx.lineWidth = k, a.ctx.stroke(), a.ctx.closePath();
      }, m();
    }
    function A(R) {
      if (S || R === !0) {
        if (document.removeEventListener("mousemove", b), !L && R !== !0)
          return;
        m && R !== !0 && a.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", A), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", R !== !0 && a.drawCircle();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", A), A;
  }
  drawPaint() {
    this.createCanvas();
    let a = this, d = !1, T = !1;
    this.canvas.style.cursor = "crosshair";
    let M = null, w = [];
    function L(m) {
      d = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0);
      let { x: b, y: A } = a.getMouseRelativeXy(m);
      b = Math.min(b, a.canvas.width), A = Math.min(A, a.canvas.height), b = Math.max(b, 0), A = Math.max(A, 0);
      let R = a.checkedLineWidth, X = a.checkedLineColor;
      M = () => {
        w.push([b, A]), a.ctx.beginPath(), a.ctx.moveTo(...w[0]);
        for (let B = 1; B < w.length; B++)
          a.ctx.lineTo(...w[B]);
        a.ctx.strokeStyle = X, a.ctx.lineWidth = R, a.ctx.stroke(), a.ctx.closePath();
      }, M();
    }
    function S(m) {
      if (T || m === !0) {
        if (document.removeEventListener("mousemove", L), !d && m !== !0)
          return;
        M && m !== !0 && a.saveHistory(), document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", S), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", m !== !0 && a.drawPaint();
      }
    }
    return this.canvas.onmousedown = function() {
      T = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", L);
    }, document.addEventListener("mouseup", S), S;
  }
  drawMosaic() {
    this.createCanvas();
    let a = this, d = !1, T = !1;
    this.canvas.style.cursor = "crosshair";
    let M = null, w = [], L = document.createElement("canvas");
    L.width = a.canvas.width, L.height = a.canvas.height;
    let S = L.getContext("2d"), m = document.createElement("canvas");
    m.width = a.canvas.width, m.height = a.canvas.height;
    let b = m.getContext("2d"), A = this.getOriginImg(), R = this.getMosaicImg();
    function X(k) {
      d = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), S.clearRect(0, 0, a.canvas.width, a.canvas.height), b.clearRect(0, 0, a.canvas.width, a.canvas.height), b.drawImage(R, 0, 0), S.drawImage(A, 0, 0);
      let { x: E, y: z } = a.getMouseRelativeXy(k);
      E = Math.min(E, a.canvas.width), z = Math.min(z, a.canvas.height), E = Math.max(E, 0), z = Math.max(z, 0);
      let H = a.checkedLineWidth, de = a.checkedLineColor;
      w.push([E, z]), S.beginPath(), S.moveTo(...w[0]);
      for (let le = 1; le < w.length; le++)
        S.lineTo(...w[le]);
      S.strokeStyle = de, S.lineWidth = H, S.save(), S.globalCompositeOperation = "destination-out", S.stroke(), S.closePath(), S.restore(), b.drawImage(L, 0, 0), b.beginPath(), b.moveTo(...w[0]);
      for (let le = 1; le < w.length; le++)
        b.lineTo(...w[le]);
      b.strokeStyle = de, b.lineWidth = H, b.save(), b.globalCompositeOperation = "destination-in", b.stroke(), b.closePath(), b.restore(), M = () => {
        a.ctx.drawImage(m, 0, 0);
      }, M(), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0);
    }
    function B(k) {
      if (T || k === !0) {
        if (document.removeEventListener("mousemove", X), !d && k !== !0)
          return;
        M && k !== !0 && a.saveHistory(), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", B), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", k !== !0 && a.drawMosaic();
      }
    }
    return this.canvas.onmousedown = function() {
      T = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", X);
    }, document.addEventListener("mouseup", B), B;
  }
  drawText() {
    this.createCanvas();
    let a = this;
    this.canvas.style.cursor = "text";
    let d = null, T = 0, M = 0;
    const w = [3, 3], L = 1;
    let S = !1;
    this.drawTextActivity = () => new Promise((A) => {
      if (!d)
        return A();
      if (!d.children[0].innerText)
        return d.remove(), d = null, A();
      Ui.toPng(d.children[0], { quality: 1 }).then((R) => {
        let X = new Image();
        X.src = R, X.onload = () => {
          let B = T, k = M, E = d.scrollLeft - L, z = d.scrollTop - L, H = d.offsetWidth, de = d.offsetHeight;
          (() => {
            a.ctx.drawImage(
              X,
              //图片
              E,
              //从x坐标截取
              z,
              // 从y坐标截取
              H,
              //截取宽度
              de,
              //截取高度
              B,
              //在画布x位置显示
              k,
              //在画布y位置显示
              H,
              //显示的宽度
              de
              //显示的高度
            );
          })(), a.saveHistory(), d.remove(), d = null, A();
        };
      });
    });
    function m(A) {
      if (d) {
        if (S)
          return;
        S = !0, d.children[0].style.borderColor = "#0000", a.drawTextActivity().then(() => {
          S = !1;
        });
      } else {
        let { x: R, y: X } = a.getMouseRelativeXy(A);
        d = document.createElement("div");
        let B = 30;
        T = Math.min(
          R - w[1],
          a.canvas.offsetWidth - (B + w[1] * 2 + L * 2)
        ), T = Math.max(L, T), M = Math.min(
          X - (w[0] * 2 + a.checkedTextSize) / 2,
          a.canvas.offsetHeight - (a.checkedTextSize + w[0] * 2 + L * 2)
        ), M = Math.max(L, M), d.style.cssText = `
            position:fixed;
            left:${T + a.canvas.offsetLeft}px;
            top:${M + a.canvas.offsetTop}px;
            z-index:10000;
            overflow:hidden;
            font-weight:bolder;
            border: ${L}px solid ${a.checkedTextColor};
            `, d.innerHTML = `
          <div 
          style="
          min-width:${B}px;
          max-width:${a.canvas.offsetWidth - T - w[1] * 2 - L * 2}px;
          max-height:${a.canvas.offsetHeight - M - w[0] * 2 - L * 2}px;
          min-height: ${a.checkedTextSize}px;
          background: #0000;
          
          outline:none;
          padding:${w[0]}px ${w[1]}px;
          font-size:${a.checkedTextSize}px;
          color:${a.checkedTextColor};
          font-family: 'Arial';
          
         "></div>
        `, document.body.appendChild(d), d.children[0].setAttribute("contenteditable", "true"), d.children[0].focus();
      }
    }
    function b(A) {
      A.target !== a.canvas && d && A.target !== d.children[0] && !oe(A.target).parent().hasClass("region-screenshot_finish") && m();
    }
    return this.canvas.addEventListener("click", m), document.addEventListener("click", b), () => {
      this.canvas.removeEventListener("click", m), document.removeEventListener("click", b), this.canvas.style.cursor = "default";
    };
  }
  drawArrow() {
    this.createCanvas();
    let a = this, d, T, M, w, L = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(R) {
      L = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0);
      let { x: X, y: B } = a.getMouseRelativeXy(R);
      d === void 0 && T === void 0 ? (d = X, T = B, M = X, w = B) : (M = X, w = B), M = Math.min(M, a.canvas.width), w = Math.min(w, a.canvas.height), M = Math.max(M, 0), w = Math.max(w, 0);
      let k = a.checkedLineWidth, E = a.checkedLineColor, z = 10 * Math.PI / 180, H = 20 * Math.PI / 180, de = Math.sqrt(
        Math.pow(M - d, 2) + Math.pow(w - T, 2),
        2
      ), le = Math.min(k, de / 3) / 2 / Math.sin(z), _e = le * 1.2, Ce = M - d, Se = w - T, i = Math.atan2(Se, Ce);
      m = () => {
        a.ctx.beginPath(), a.ctx.beginPath(), a.ctx.moveTo(d, T), a.ctx.lineTo(
          M - le * Math.cos(i - z),
          w - le * Math.sin(i - z)
        ), a.ctx.lineTo(
          M - _e * Math.cos(i - H),
          w - _e * Math.sin(i - H)
        ), a.ctx.lineTo(M, w), a.ctx.lineTo(
          M - _e * Math.cos(i + H),
          w - _e * Math.sin(i + H)
        ), a.ctx.lineTo(
          M - le * Math.cos(i + z),
          w - le * Math.sin(i + z)
        ), a.ctx.lineTo(d, T), a.ctx.closePath(), a.ctx.fillStyle = E, a.ctx.fill();
      }, m();
    }
    function A(R) {
      if (S || R === !0) {
        if (document.removeEventListener("mousemove", b), !L && R !== !0)
          return;
        m && R !== !0 && a.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", A), a.canvas.onmousedown = null, a.canvas.style.cursor = "default", R !== !0 && a.drawArrow();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.drawHistory.length && a.ctx.drawImage(a.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", A), A;
  }
  drawCustom(a) {
    let d = oe(a).parent()[0];
    return this.createCanvas(), typeof d.onDrawingOpen == "function" && d.onDrawingOpen(this.canvas, d, () => {
      this.saveHistory();
    }), () => {
      typeof d.onDrawingClose == "function" && d.onDrawingClose(this.canvas);
    };
  }
  saveHistory() {
    let a = this.canvas.toDataURL("image/png"), d = new Image();
    d.src = a, d.onload = () => {
      this.drawHistory.push(d);
    };
  }
  close() {
    this.canvas && this.canvas.remove(), this.handle.remove();
  }
}
class Qi extends fn {
  constructor(a = {}) {
    super(), a.regionColor ?? (a.regionColor = "#409eff"), this.region = new Vi({
      ...a
    }), this.tools = new Gi({
      region: this.region,
      ...a
    });
    let d = getComputedStyle(document.body);
    this.bodyOriginStyle = {
      overflow: d.overflow,
      userSelect: d.userSelect
    }, document.body.style.userSelect = "none", document.body.style.overflow = "hidden", this.screenshot().then((T) => {
      let M = T.toDataURL("image/png"), w = new Image();
      w.src = M, w.onload = () => {
        this.region.screenshot = w, this.region.init(), this.tools.screenshot = w, this.triggerEvent(this.successCreatedCallback), this.region.on("regionDragStart", (L) => {
          this.tools.updateHandleDisplay("none");
        }), this.region.on("regionDragEnd", (L) => {
          this.tools.updateHandleDisplay("flex"), this.tools.updateHandlePosition(L);
        }), this.tools.on("toolsCanvasCreated", () => {
          this.region.notAllowDragRegion();
        }), this.tools.on("closed", () => {
          this.close();
        }), this.tools.on("screenshotDownload", () => {
          this.close();
        }), this.tools.on("screenshotGenerated", () => {
          this.close();
        });
      }, w.onerror = (L) => {
        this.triggerEvent(this.errorCreatedCallback, L);
      };
    }).catch((T) => {
      this.triggerEvent(this.errorCreatedCallback, T);
    });
  }
  screenshot() {
    return new Promise((a, d) => {
      let T = document.createElement("div");
      T.style.cssText = `position: fixed;top: 0;left: 0;width: ${innerWidth}px;height: ${innerHeight}px;z-index: 9999;cursor: none;`, navigator.mediaDevices.getDisplayMedia({
        video: {
          // frameRate: 1,
        },
        preferCurrentTab: 1,
        audio: !1
      }).then((M) => {
        document.body.appendChild(T);
        let w = document.createElement("video");
        w.setAttribute("autoplay", "autoplay"), w.srcObject = M, this.webRTCStream = M, w.onplay = function() {
          setTimeout(function() {
            if (T.remove(), !L.webRTCStream)
              return;
            let S = document.createElement("canvas");
            S.width = innerWidth, S.height = innerHeight, S.getContext("2d").drawImage(w, 0, 0, innerWidth, innerHeight), a(S);
          }, 300);
        };
        let L = this;
        M.getTracks()[0].onended = function() {
          L.triggerEvent(L.closedCallback), L.close();
        };
      }).catch((M) => {
        d(M);
      });
    });
  }
  close() {
    this.region && this.region.canvas.remove(), this.tools && (this.tools.handle.remove(), this.tools.canvas && this.tools.canvas.remove()), this.webRTCStream && (this.webRTCStream.getTracks().forEach((d) => d.stop()), this.webRTCStream = null), document.body.style.overflow = this.bodyOriginStyle.overflow, document.body.style.userSelect = this.bodyOriginStyle.userSelect;
  }
  on(a, d) {
    super.on(a, d), this.region.on(a, d), this.tools.on(a, d);
  }
}
export {
  Qi as default
};
(function(){"use strict";try{if(typeof document<"u"){var A=document.createElement("style");A.appendChild(document.createTextNode('.region-screenshot_canvas{cursor:crosshair;position:fixed;z-index:9999}.region-screenshot_tools{position:fixed;z-index:10000;background-color:#fff;list-style:none;padding:10px;box-shadow:0 0 4px #9b9b9b}.region-screenshot_tools *{padding:0;margin:0}.region-screenshot_tools>ul{display:flex}.region-screenshot_tools_item{height:100%;display:flex;align-items:center;margin-right:10px;position:relative}.region-screenshot_tools_item:last-child{margin-right:0}.region-screenshot_tools_btn{width:20px;height:20px;cursor:pointer;background-size:100% 100%}.region-screenshot_tools_item.region-screenshot_disabled .region-screenshot_tools_btn{filter:brightness(2);cursor:no-drop}.region-screenshot_tools_options{display:none;list-style:none;position:absolute;background:#fff;top:40px;left:-10px;padding:10px;box-shadow:0 0 4px #9b9b9b;border-radius:3px;--tools_inner_translate_x: 0px;--tools_inner_translate_y: 0px}.region-screenshot_tools_options.region-screenshot_top{bottom:40px;top:unset}.region-screenshot_tools_options:after{content:"";display:block;-webkit-clip-path:polygon(50% 0%,0% 100%,100% 100%);clip-path:polygon(50% 0%,0% 100%,100% 100%);width:10px;height:7px;background-color:#fff;position:absolute;left:15px;top:-6px;transform:translate(var(--tools_inner_translate_x),var(--tools_inner_translate_y))}.region-screenshot_tools_options.region-screenshot_top:after{bottom:-6px;top:unset;transform:translate(var(--tools_inner_translate_x),var(--tools_inner_translate_y)) rotate(180deg)}.region-screenshot_tools_options li{display:flex;align-items:center;margin-right:10px}.region-screenshot_tools_options li:last-child{margin-right:0}.region-screenshot_tools_item.region-screenshot_active .region-screenshot_tools_options{display:flex}.region-screenshot_tools_item.region-screenshot_active .region-screenshot_tools_btn img{filter:drop-shadow(var(--active-color) 20px 0)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size{color:#bdbdbd}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size.region-screenshot_active{color:var(--active-color)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size{min-width:10px;min-height:10px;margin-right:10px;cursor:pointer;display:flex}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size>div{background-color:#bdbdbd;border-radius:50%;margin:auto}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size.region-screenshot_active>div{background-color:var(--active-color)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size:last-child{margin-right:0}.region-screenshot_tools_color_instruction_list>div{margin-right:10px;width:15px;height:15px;cursor:pointer;box-sizing:border-box;position:relative}.region-screenshot_tools_color_instruction_list>div:last-child{margin-right:0}.region-screenshot_tools_color_instruction_list>div.region-screenshot_active:before{content:"";display:block;width:7px;height:7px;background-color:#fff;position:absolute;left:50%;top:50%;margin-left:-3.5px;margin-top:-3.5px}.region-screenshot_tools_split{width:1px;background:#878787;margin:0 10px}.region-screenshot_rectangle .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAARJJREFUWIXtljFOAzEQAMcrCtKB4AupqFNBCe/wPeHafCC0PMHSlYgXQJlUqVPxBZCguqt2KWKE5LOg8Ikg4W3s80qeOa8trTMzDhlyUHoVAI5yi03TXKjqHXAFHBcyBmAtIm0IYZcmXXoJI3wLzArBafQiskglRicQ/3zmnHtW1aWIvBeCT4CVmc3j3jffCrA/dlR12XXdQyEcAO89wD1wmeZyl/Cz5q9TwAFU9SVOR2U9+CuoAlWgClSBKlAFqkBOYIjj2WQQkfM47dNcriNaA9cicuu9d8BbCdzMToFV/Nz8KCAirapuzWzOvo2aKnoRaUe8dCGEsBORBfDEVzlKYgAecx0xZNry344/+Qr+l8AHQ4RWoekXbowAAAAASUVORK5CYII=)}.region-screenshot_rectangle.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQpJREFUWIXt1zFKA0EUh/HfWyySTtErpLJOpU1EzxHwBGlzAW29QbAWT6CkipV1Kq+goFVSZSx2QdgsWkwghfOqYR/s9828WfhvpJTss6q90osADroeXtw7TRt3OEcvk7HGIiqT+diy3Yz2JWzgr+hngtu1isqwLbF1As3O+3iLZJrCVyb4EDcYNO+++lVAfewimc6vPWbCwWgGHnDW7nVdwh6kyscu4CC8N6utse79KygCRaAIFIEiUASKQJfAGmLjeGeU5KRZrdqtrkS0wGUKt6OZwGcWOxxFHcng5U+BqEyaUDpQx6isip/Mu4rKpN3fGsF8bBmVIZ4148isNZ66EnEtWP4N/7vAN0/fQ9xs7Al1AAAAAElFTkSuQmCC)}.region-screenshot_circle .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAy5JREFUWIXFl0+PFEUYxn9v9fgJxAOgB92VyI2sGjhAiEE5IP8SNkR3prt3PgcclrjfYzNTM8REYlgREhNjopts0ASJJ4MgmghoXD4BSdfrod/e7Z0ZenvcmexzqenuSj2/qumu9ylRVfZSbk/dgUbdjiIicRy/C1xU1RPOuf2qetCePVXVZ8AasOq9v6c1l1Z26icikiTJZVVdBmZr8v4GXPXe39gJpBIgjuNZEbkOvD8w+C0ReRxCeOKcE+BgCGHGOXdOVd8uwd9V1YVut/vH2ABpmn6gql8Ar9qtm6q65L3/pWpG7Xb7SAjhmqqet1vPgflut/t9bQAz/wZ4BdgAPul2u99VGQ+q1Wqdcs59DuwDXgCnR0EMAdiy3yWf+a9RFJ1ZWVn5cxzzQkmSvAncBg4Dz7MsO9rv9x+X+2z7DCXXdTP/dzfmAPbff0y+ivsajUZfROSlAEmSXGbrhft0N+ZlCBFZAFDVY3Ecz48EMLLP7PLmuP95lTqdzrci8pVdLpdXYROg2Wy+V3xCqro0KfOSijEPpWk6NwQQRdFFABF5uNOn9n/U6XTuk+8hZFl2YQgghHDc2luTNi/pDoCInBgCEJFiX384RYBHZa9tAMB+e/j3tNxV9am1IwECQAhBmJKsbmx6DQL8Y50OTAsghFDM/NkogGJ56pbcseWcK8YeCbBm7blpAQBnAERksyiVAVatnW2320cm7RzH8Vyx0YUQil1xC8B7fw/bKEII1yYNICLFmA96vd79IQCLTlft9/k0TT+clPni4uJp4KyNfaUc07blAct/66p6jLyEHq2KU3VkmeAn8mCy7r0/XgbYVo411wJ5jHoNuG0D7Mb8jplvRFHUHAypQ+cCm/E8eYw6DPzYarVOjWsex/FH5DN/B3ihqpdG5YuXhtIkSU4CN4weq+dLVtWqjOfshTtrtzZU9ZL3fm1U/8pY3mw232o0Gn17Jwo9Ar5W1d+dc38BhBDeEJEZ8j1kptR3PYqiZlWyqnUwsRi1DByq7LylB6p6pdfrfbmrg8kgSJqmc1mWXbB6fgB43R4/Id9ef1DVVe/9zzVB6wNMS3t+Ov4Pf4B/Yk4ydUUAAAAASUVORK5CYII=)}.region-screenshot_circle.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyJJREFUWIXF181vVFUYx/HPc4t/gbgAdIFUIjtSJbCAtEOFBfKW0BiFDVP4L2ABkT8DabvAmEgML0JilMJIQtAEiSvDi2AioLH8BYTex8XcKVOmDFPaht/q3HNPnt/3vD8nMtObVPFG3bGs14ZBDJ3ykbA3w5ZIK5JV1b9HeIxr0rmro24mPQ1tvGoKghga8xlOoL+XoJnuKBxtHHTmVSBdAWpf6Vf4Ghvag0e4EOG+0kMhhFVlaU2EXfigLcSNctr+xmEP5g0wdEotwrd4u+nsbHBsctTv3XpUG7c+0/Fgd1X1JBiZrGv0DFCZ/4C3MFXw+eW6yW7GL2rrhOEsfYPlydOC7XNBdABUw35Ds+d/CDuuHPTXfMxbGjxpddHnItbhyTI2/lh3v73NrG0YRDXnbyf/LcQcGoc9KKd9iiksf8bpIF4KUK32DdDHFwsxb4fA/upz0+C4kTkBKrIvQTo73znvpit1PyXnQelE+yjMAAyO+1i1hYJji2XeUpbNmBHW1iYMdAAo7a1Kd1+11V5HjUNuZbrTpLGnE6CwGTJdWGzzlqJwqfLY0gEQOXOu310qAKV7VWlVB0CyAiL8s2QAhUeVVydAUELG7H26mMqyGbvlNQsA/1Y/Vy4VQESz55kezwXwqInZ25X7muqvQOYEuNb0t2sJAXZomsxcSs8B0rmq1F8bt36xnYfHDKgOuiKqU7Ed4Oqom62DItPxxQYozcS8PVl3qwMgSYWjEOyujflkscyHT9mOnRDpSHuaNisfqPK/69iEqXLaxm7pVC+qcoJfNROT6426ze0As67jJMtp+/EE7xR9Lg6etHqB5pewHFMRDryYpHa8CxqHPQhGkqdYV/T5ZeuE4fmaD43bVvX8w+Rphn1z5RcvTUq3jhlMzlT0kvNZOtY49HwBzaXhMQPVgttZVU1l2Hf1YHOb9wwA28a8/4zTmmuipXvC99Kfwd8V3HvCGmkX1rQaJtcjHOiWWfX0MBkcN6J0IsLaro2f63akI1dGfbegh8mLILUJA9KeTFsyrRTeBelhhMfJz32cu1z3W4+gvQMsld746/h/qVcufEyjrBYAAAAASUVORK5CYII=)}.region-screenshot_paint .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA21JREFUWIXNl01oHGUYx3/PzDSdhB4siC0iNdjVgx78QDwkag8KxYsXTSzZ7E7W1gpi8yEaTaiu09omVZst6sHUppPdicTGg156qEUQRGqpHooEemgQxS8q2BioWTa783jQLdPN7mYbk43vafjv8zy/H++8+y4rqspaLmNN6f8HAateoGg0eqtlWc+r6h/ZbPbI1NTUfN0EotHoRtM0v1DVZgDbtpuBZ6FOr8A0zQ+A5lDUWnxYdYF4PL4beKIk/rQuAp2dnXcCqXAmIt+ZpvnGqgt0d3evF5EPgaZQfMUwjHbP87KrLjA7O/uWiNwTzlT1Oc/zLoQzWY2b0HGcx1T1JCBXQSJT6XT6qdLaFd+Bjo6OTarqheHATKFQeKZcfSUBqZBXXa7rGpZlTQCbQvECEJ2YmJgr17PoIjo4cvwTDHkA5YRYDA3sSfxeq8DMzMzLwKMl8UAmkzlbqWfxDhh6DOUHoE/zXDyYGt9RCzwej98PvF4Sn/J9f6RaX8VDOJQaf0ghDboFNbYPvuB8XmlIe3v7Btu2vwXuCMWXTNO82/O836oJVDyEA31dXyK5VuCySLC32hDbtt8vgQeq2rkUvKoAwGDv7l9BzytsrVQTi8XiQLQkftP3/dNLwZcUOHD4+IMgLQrny33uuq4hIj3hTES+bmxsfK0WOFT4Od6fSt9lStAvhkSBy6bQU1ojItLW1tYEbLNt+12gS0T+VNWO0dHRhWUJuG/7NzVY+fdMeBKlAJywFvSl/v6nfyltdBynRVU9Ve3IZDKJWCz2marmfN//vlb4NQKH3vG3rLPyZ1TZjHA0yBcO7X1xV8VhQRDEgduBM47jHIhEIvuSyWRwPfBrBPKF/D6BzUjw+GDvzpPVmhKJhA20FWcEQbB1enp6PTC/bAFBHgY9uxQcIAiC7cBGICsivZlMZvR6wcUV+hZoHvSvWppyudw5YFxVW9Pp9LLhED6EIl+h7BhOjUVe6dt5sVyx637c0LDhym2Tk5MXgMR/AV/FFq/i4dRYJMA4BzIvBK+aVnCqf8+unwDcw0dvtGTdIyLsB25emPvxhmQymV9RAYDhkbF7AzGOAff9G83xzy41AQhcUqRnsK/ro5WALxIoZkNH0i2oblPRW1SlAfRnkG/yc5xOJruy5QatpEBd15r/N1xzgb8BNHA+t65ZrO8AAAAASUVORK5CYII=)}.region-screenshot_paint.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0hJREFUWIXNl0toVFcYx3/fneuo0ywq1AdS0uCjC11UiwhN1CQaEF104xMj6Z0YI4hiYtvUBHU6Wk1sNSNVpNVkJsEHahd2Y0FFJyJqRV2IGxdKae0LC5XGR8Lkzv26sBMmk7mTUTNJz+re/znf+f0499yXqCrD2Yxhpf8fBMyhAi1o5R3HYIPC37E89l9bRteQCcw9wRjToAMoEMD7lAJgHQzRJTBjHAEKEucCRb19uYbPj1ANLEmJv08c5HQFyiJMcyCUEt9F+CLnAosPMDIOxwV8SfEzhOVRi+6cC3S/wVfAjORMlPVRi3t9sxw8CUvCLBLhLCCJTOF0h58VqWMHfQXKWhgvQiQZDjzweVmbbrybgLjkGZsEMeIejgHjk+IegfIfyulMV9PvNtzdHD6DIbNRTolJY/1G/1/ZChTn8xlQ1idU6i9VcsOtpv8KGNqC8jNQqzb3d4faVmYDLw0zC/g8JT7XUUlzpjrXTdgYapur0A6ajxoLGzZ/dNEVfog8HcVtEd5NZAqPRHgvavFnJgHXTVhfa11BYkXAYxFna6ZJ8PFNCtxBWD0QPKMAQENN9R+gdxQmu42ZH6YCpTw5E+HLDosLA8EHFNi1LzwHpFDhTrp+CWI4wqaU+McnMbZnAweXl9HOUPt0jzh1Ykg58NjTH4KAlIzFRxfF+DiAYgH/OHFW3aqm55UEgnuPjvOa9kEPLEWJA6fMHv20rq7y99TC0nYKdTQRlFVRC39JhPOGErtcxU/ZwvsI7Pn6aP4I076uygSEw44d37P1kyrXyRyHCoGpCNdLw+y6/JAdGsB5GXgfATtu7xCYgDgfNtSsOZupqLSNUQLLeucQJn8wjZHw4jPrlQQEmQd6YyA4gCgLFcYA3UBN1M+3LwtOtKS7QG3Q59kUmcpNhDYDil4HDsmbUOQqysqmUOuULbVr7qcbHAx+5/XmPZt0/mPrHuB/HXAvNvEobgq1TnEwboJ0Cc42j+mcq9tY9StAcN/ht0wZsUCEncDEns5f3gwEAvagCgA0NbfOdMRoAd7/L+rkxSr5AAQeKbKpodY6ORjwfgKJrHF/eyGqxSr6tqp4QX8DuWV3ciEQsLrTTTSYAkPahv3fcNgF/gUHfRK9X5iTWQAAAABJRU5ErkJggg==)}.region-screenshot_mosaic .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAU9JREFUWIXtlzFOw0AQRd8QBJHi0wANRDkG7rzyEaiRoEoocwevU/kWUCQuwmlIpCjCuxTEkr2FQbDRpvA0K8/X+n99z4zGYq0lZJwFZT8FAeduIk3TcVVVLyJyDYw88WyBtbX2Mc/zZROQZg2kaTo2xrwCA0/EblQiMsmybFUnWg4YY2bAwFo7F5FnrfXWB6tSagRMgQdgDtzWmFsDNwA+yQG01tvdbvcEYK29amJuDYzqC799uVKq6MJFpMyybF4UxUYpBXDRJeAvcd8F/jRngrdhL6AX0AvonAOHIdPZ51pr+Y+A4A70AnoBvYDOOSAi5bH/G1pLqVJqw/dWFPlcyQDiOI6Gw+EHsNdaX9Z59xOsD+c0juPIM/ns8PjexFoOJElyJyJvHG8t/zTGTBaLRVknWg7keb4UkYmIlMDeI/EeWLnk4DgQIoK3YXABXw1vesmSLj/iAAAAAElFTkSuQmCC)}.region-screenshot_mosaic.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAU9JREFUWIXtlrFOwlAUhr8LCCHladRFCUPr4BM4klBHJ2cTncCRkbUhbrwBAxYdoAM+jeDQSI8LNe0dioZrrkP/8Zzb/l9Oz7k9SkSwqYpV9/8AUNMD3ph2Ijwq4QRwDPlsgFUF7mY+i2xCZXvAG9OWhBegashY11aEzvyaZRrIVUASBkBVhGHjiIdpl40J18snnHhLH+FWKYbAWZrTe+AUwKQ5wLTLhg/uAQSOszm9B5zvB34oL2BSeEARPfcYhjes3QAU1IsAfi2Bq0L/PdeM9TEsAUqAEqDwHvACJvvmPPRRhwBYr0AJUAKUAMX7gCLa9z8/VLml1A1YA069RsvkSgbgjmjR5F0gnvs00rj+CVYA8Za+O6Jl0lyaDAAUvGVzuQpcBJwn8MrfreWfKDphjygN5Cow81mI0AEigdiU6+5dS90ctArYkPUxtA7wBTIzaWOd+fwuAAAAAElFTkSuQmCC)}.region-screenshot_text .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANNJREFUWIXt1rEKwjAQBuD/knQoZHfVF3Dq6FN0cdClT5ZFxK1v4QP4AjoVfIJAaXNuDqXYGIRSuZuOg9x9wwWOmBlzhpp1ugAAmGGhLMszgD0icHmeAwC89zGzAjNf6ro+fAQAKGKGExG01u88YpkVERXD4hhgp5TaTnUzxqwAnAAgy7Jj13XPqTchhNuwRqnfsKqqdd/3dwDQWm+cc4+UPrMvoQAEIAABCEAAAhDAcgFt2/JY/m2MHaVRYa1tvPdXZmZrbZPaJ/ko/VUsdwf+BvACFsE7mJMe4HQAAAAASUVORK5CYII=)}.region-screenshot_text.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOZJREFUWIXtljFqAlEQhr95bmERC7WwjVWwsbLTxitskyIpcpF0OYhFCHZ7BDsP4AW0WhCxWAik0LeTQkixLL64CIsyfzUMzP9/xQyMqCp1ytWabgBAVGzEcfwFPBOAU2nwPf5AVWkt3xH1oaxcVedJkrycBQBGoXAAbXY4tp/+avnZhUaciIyKzTKAiXNuGHI7dAc94BPAdwevUbrfhmbyPF8Ve1L1DKczHlHWJxf6izc2VXxqX0IDMAADMAADMAADMIDbBXAeLasvVdlT+i9lnvTBsRRFM09a1afyU3ot3e4O3A3AL04FPO/v7IR3AAAAAElFTkSuQmCC)}.region-screenshot_arrow .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUBJREFUWIXtlkFKw0AUQN+fuKrgATyBpyhUtMcI2eUE3qG48wghgxdQ3Ej34gFceAChKxGEuMkfNylITWgmmSFd9EMghD95Lz/5ky/OOaYMMyn9KHAIAicxb57n+ayqqntVXVlrX9pyJFYXpGl66px7EpG5iHwBy6IoXnfzolQgz/MZ8CAicwDn3I+qfrflBv8GmrI/Aovm0kZVL621b9EFfOFBBYbAgwkMhQcRGAOHli7IsmypqjcAzrnbsiyfuxb/bTUAEfkAFtba974P8E9AVc+BKwBjjO1auNtqwKau62sfOAx8BWPLPkogJNxbIDTcSyAGvLdALHgvgZjwvQKqGhUOe37HIrICzppz701mtMAWzsBNJoTANj6NMXdpmnYmNGPXOpbARXN0RpIkhS8cDmAqjjaU9o3JK3AUmFzgF9Gc75AgVGnuAAAAAElFTkSuQmCC)}.region-screenshot_arrow.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAURJREFUWIXtljtOw0AQQN84TuNIHIATcAok8wmdjwBBnIE7WHS0LkAIlAsE0ZAAJeIAFBwAKRVCUEBEvBSsKIJNdu1dOUVGcmPN+j3PakYjSimajKBR+lJgEQRCnx9PMqK3Nn2E9LbHfVGO+OqCnXM6n1OuRLEOvAY53dEBD7N5Xq4gyYgmXww0HOBDAt6Lcp0L6LJfArF+NW7BxnCfR+8CtnCnAlXgzgSqwp0I1IFDQRtuntDNhUMAJRzd9bguOzzTaih4DlvEw12eTH/gzyDKYRXY+rHjouxgkhFN2gyE31Ybh7BtA4eKV1C37LUEXMKtBVzDrQR8wI0FfMGNBHzC5woo/MJh/kKSAitaxnrImMS/FRANp+KQMQnTlexlCsfxaXmCBKQ3e4x8CazppzRUzpktHBZgK/a2lJpG4xVYCjQu8A0X1ZG/HE+CigAAAABJRU5ErkJggg==)}.region-screenshot_revocation .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAe9JREFUWIXtl79v00AYhp9zqkRWWcPCwE5b0YGZoRUDGwseqHKSjdQNsfRPaYeIkh92WDKXBdJIbJUQUocGMVZdkGAFkYDPH0PtyqTBEo1jM/RdfLo7+X3uu/NrW4kIZcoq1f0a4H8AWMoa9DyvHobhgYicBUHwuFAArfVN4BBYVUotwhv4yxZ4nldXSg2AVeCTiDwqDMDzvLox5lBE1mLzjSAIPhcCULT5HwBlmAOoJIq11u+Bezne+ztwqpQaiMi+7/snsyaltyDK0RxgGVgRkefAsdZ613Gc6vSkiwpMbcEJsOn7/perumutlzl/iraAbaAGDMfj8cN+v//zEsAiIBK5rrtujDkAbimldrvd7rOZAAlEGIbDmH4EbOQIcQQsWZZ1t9PpjGBGDrRara/AJucVWAGGcSrOpXa7fayUegFUoih6mvTPTMJ4xWmI1/MCABhjXsXNB5kAUxAfgB95ANRqtVHcvJ30Zb4NY4jcsmEymSjLsgAuDl7R3wN34utZKQCVSmUrbr4tHMB13XUR2QZMFEX7hQKkgqgK7PV6vY/JWOYhnEeO49ywbXsNeBKvvAoMbNveSc+7lIRZajQa75RS96/AY4A927Z3ms3mr/TAwioAfANOReSNiLxMlz2tf6rAIlT6f8E1QOkAvwF4y/HzpBvWEgAAAABJRU5ErkJggg==)}.region-screenshot_close .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAp5JREFUWIXtV81OE2EUPXfEtB02PAAQHTe+gezMbNy6kCCUzhcmVNGY9BXKvINgiij9IWAGTNPExGUTH8CN6a7TRacrfACYAF4XdszH5Jt2Rgyw4GyanLkz53yn997JEDPjOqFdq/qtgRttwLbte0KIx5cVEEI8sm37Ydx1Uk2BEOI+gB8AJolo2zCMtXK5/CuNsOM4Wrfb3SSiNQCnzDzXaDS+R+uUCWiaNgNgEgCYueh53pbjOIn/LsdxNM/ztobiAHCXiB4otVRktVr9RkTbErWa1EQoDmBVolu+7zcTGwCAer3+kojeRUy8H2WCiKjX672NiH+Zmpp63m63z5T3jNqERERCiA1mfi1xO4ZhFKM9QURkWdYmgFchx8yHuq7nK5XKaZzGyEiZmev1+hs5CWa2e73etpyEShzAwThxYEwCskBcEuvr6xwVJyK33+8vx8We2gAQ21wfhr9/OWbeDYJgxXXd8yTPTWwAUCcRub7f7/dFkpOHSLWKVT0h4aNhGIU04qkNSEZIQWc7nY6K/38GYro9RD6bze6apjmR6pmXaUIi2gH+jGbIpW3CRAkQEXmet4GLE/Dp+Pj4hWEYRWauSbWFXC63lzSJsQnE7IALcz5MpwrACmuSbMGxBmLG7sD3/Xy02xcWFu5kMpkqERUk+nMul1v6p1WsEmfmQ5U4ALiuex4EwQqAPYl+dnJy0iyVSplYHVUCQ/EtZi7K4oPBYGncnJumOTE9Pb1PRPMS3fJ9f151rzIBy7KeRMSbuq4rTx5Fu90+03U9z8zy+//p7OzssqpeaYCZfwIIX7etIAgWxzWTjEqlchoEwSKAlkQfqWpjm7BQKMxpmjbj+34z7XoNYZrmxPDkR7Va7WsqA1eFm/tdcGvgqvAbDu2HJArxOWkAAAAASUVORK5CYII=)}.region-screenshot_download .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAT1JREFUWIXtl01OwzAQRt9gXyGVuEPZwL6IFhaAOIKzyMESyZfohiwiuAFd5ASoKmeIzMZIIaTNrxohZTaxlPF8LzOjsSPOOaa0i0nVZ4AxAIwxmTEm67tfDwUQkdWQ/f+/BDPADDADDLXWgygMwy0QAE/W2kOD7wLYAntr7fMp3y4ZCIAbIPUCp8RT4Bo46tcZQGv9KCIfwBLIjDGXVZ8oigIRefU+uVLqpSmudLmQRFEUFEWROueugNw5txaRTw+4KL9TSt0lSbIfFQB+pXgJ7PyT0noHbJr6pDdADUTZOolDTQ+0Od+9wMYLdhKvxv8DICKrNme8tfagtV77xsyVUg9tvrwaf9AgiuP4yzl3D9y2abg6G3wj6lLvOpt8FE8OcLQEYRie5ZepLgPvZ9B9+1n0GkRj2uQ9MAN8A0iYdcIARBgzAAAAAElFTkSuQmCC)}.region-screenshot_finish .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgxJREFUWIXtlsFu0zAYx/8fI1nNqW/Ak3AZQ6IdPQClHJDtceo78AA8AlIkKhS13UaEiihC4jRptLATt73HJECLe2g+LvHmlmZNy9Je+l0c2Yl+P//tOCFmxjrr1lrpG4GNAIDbq4RJKe8R0T4RvQvDcLhSAaVUlYh6ALaZeRfAXWBFSyCl3APQA7Cddp3ZscIFtNYVIvrgwH/6vi/tOBV5EmqtK8zcA1Cy8PF4/KDb7Z7bewpLIIV/dOCnSZLsuHCgoE2olKpics1PkyR52Ol0fk3fe+MJzNhwP7LggJOA1rrOzIqZ37Tb7a/LwLXWj4noPQAPAJj5u+/7lVar9TvrGTeBtwBqRNSXUj5dFK6UesLMl3AAw3nwCQFmHqSXHhEdaq3reeGp8JEDHxhj5sInBIQQzwEcWwlmPpJSvsgDJ6JDBz70PG8viqI/eeQvBYIguBBC1ByJLSIKr5PQWtdnwKt5Zm7rn4Oo2WzeieP4M4CdtGtMRPthGHam4cx84MKNMZW8M88UsBLGmD4z358loZR6BuAAV2/RwBhTXRSeKWAl4jj+BGDXSgB4CcDcFPxaASsxnUTabqXtsRCiFgTBxTLwuQIA0Gg0RKlU6uMqCQAAM38bjUa5d3tWzT2KoyiKy+XyIyL64nSfENHSsbuV+3OcJvEKAIwxr6Moiv8XvpBAUbX2v+KNwEbgL4W1/0SNuoZZAAAAAElFTkSuQmCC)}')),document.head.appendChild(A)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();

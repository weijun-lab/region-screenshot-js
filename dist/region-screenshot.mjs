var Bi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
  (function(l, d) {
    Oe.exports = l.document ? d(l, !0) : function(C) {
      if (!C.document)
        throw new Error("jQuery requires a window with a document");
      return d(C);
    };
  })(typeof window < "u" ? window : Bi, function(l, d) {
    var C = [], k = Object.getPrototypeOf, x = C.slice, R = C.flat ? function(e) {
      return C.flat.call(e);
    } : function(e) {
      return C.concat.apply([], e);
    }, S = C.push, m = C.indexOf, b = {}, M = b.toString, N = b.hasOwnProperty, z = N.toString, X = z.call(Object), A = {}, P = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
    }, q = function(t) {
      return t != null && t === t.window;
    }, D = l.document, Q = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function oe(e, t, n) {
      n = n || D;
      var r, o, s = n.createElement("script");
      if (s.text = e, t)
        for (r in Q)
          o = t[r] || t.getAttribute && t.getAttribute(r), o && s.setAttribute(r, o);
      n.head.appendChild(s).parentNode.removeChild(s);
    }
    function ve(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? b[M.call(e)] || "object" : typeof e;
    }
    var ge = "3.7.1", Se = /HTML$/i, i = function(e, t) {
      return new i.fn.init(e, t);
    };
    i.fn = i.prototype = {
      // The current version of jQuery being used
      jquery: ge,
      constructor: i,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return x.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(e) {
        return e == null ? x.call(this) : e < 0 ? this[e + this.length] : this[e];
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
        return this.pushStack(x.apply(this, arguments));
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
      sort: C.sort,
      splice: C.splice
    }, i.extend = i.fn.extend = function() {
      var e, t, n, r, o, s, a = arguments[0] || {}, f = 1, c = arguments.length, p = !1;
      for (typeof a == "boolean" && (p = a, a = arguments[f] || {}, f++), typeof a != "object" && !P(a) && (a = {}), f === c && (a = this, f--); f < c; f++)
        if ((e = arguments[f]) != null)
          for (t in e)
            r = e[t], !(t === "__proto__" || a === r) && (p && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], o && !Array.isArray(n) ? s = [] : !o && !i.isPlainObject(n) ? s = {} : s = n, o = !1, a[t] = i.extend(p, s, r)) : r !== void 0 && (a[t] = r));
      return a;
    }, i.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (ge + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {
      },
      isPlainObject: function(e) {
        var t, n;
        return !e || M.call(e) !== "[object Object]" ? !1 : (t = k(e), t ? (n = N.call(t, "constructor") && t.constructor, typeof n == "function" && z.call(n) === X) : !0);
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
        oe(e, { nonce: t && t.nonce }, n);
      },
      each: function(e, t) {
        var n, r = 0;
        if (B(e))
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
        return e != null && (B(Object(e)) ? i.merge(
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
        for (var r, o = [], s = 0, a = e.length, f = !n; s < a; s++)
          r = !t(e[s], s), r !== f && o.push(e[s]);
        return o;
      },
      // arg is for internal usage only
      map: function(e, t, n) {
        var r, o, s = 0, a = [];
        if (B(e))
          for (r = e.length; s < r; s++)
            o = t(e[s], s, n), o != null && a.push(o);
        else
          for (s in e)
            o = t(e[s], s, n), o != null && a.push(o);
        return R(a);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: A
    }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = C[Symbol.iterator]), i.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(e, t) {
        b["[object " + t + "]"] = t.toLowerCase();
      }
    );
    function B(e) {
      var t = !!e && "length" in e && e.length, n = ve(e);
      return P(e) || q(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
    }
    function I(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var K = C.pop, ue = C.sort, ie = C.splice, j = "[\\x20\\t\\r\\n\\f]", J = new RegExp(
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
    var he = D, Xe = S;
    (function() {
      var e, t, n, r, o, s = Xe, a, f, c, p, w, _ = i.expando, v = 0, E = 0, V = It(), se = It(), Z = It(), Te = It(), we = function(u, h) {
        return u === h && (o = !0), 0;
      }, Ve = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Ge = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", re = "\\[" + j + "*(" + Ge + ")(?:" + j + // Operator (capture 2)
      "*([*^$|!~]?=)" + j + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ge + "))|)" + j + "*\\]", ct = ":(" + Ge + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + re + ")*)|.*)\\)|)", le = new RegExp(j + "+", "g"), me = new RegExp("^" + j + "*," + j + "*"), Mt = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), rn = new RegExp(j + "|>"), Qe = new RegExp(ct), At = new RegExp("^" + Ge + "$"), Je = {
        ID: new RegExp("^#(" + Ge + ")"),
        CLASS: new RegExp("^\\.(" + Ge + ")"),
        TAG: new RegExp("^(" + Ge + "|[*])"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + ct),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Ve + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      }, it = /^(?:input|select|textarea|button)$/i, rt = /^h\d$/i, qe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, on = /[+~]/, tt = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"), nt = function(u, h) {
        var g = "0x" + u.slice(1) - 65536;
        return h || (g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, g & 1023 | 56320));
      }, ji = function() {
        ot();
      }, Ii = qt(
        function(u) {
          return u.disabled === !0 && I(u, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function zi() {
        try {
          return a.activeElement;
        } catch {
        }
      }
      try {
        s.apply(
          C = x.call(he.childNodes),
          he.childNodes
        ), C[he.childNodes.length].nodeType;
      } catch {
        s = {
          apply: function(h, g) {
            Xe.apply(h, x.call(g));
          },
          call: function(h) {
            Xe.apply(h, x.call(arguments, 1));
          }
        };
      }
      function fe(u, h, g, y) {
        var T, L, H, W, O, te, U, G = h && h.ownerDocument, ne = h ? h.nodeType : 9;
        if (g = g || [], typeof u != "string" || !u || ne !== 1 && ne !== 9 && ne !== 11)
          return g;
        if (!y && (ot(h), h = h || a, c)) {
          if (ne !== 11 && (O = qe.exec(u)))
            if (T = O[1]) {
              if (ne === 9)
                if (H = h.getElementById(T)) {
                  if (H.id === T)
                    return s.call(g, H), g;
                } else
                  return g;
              else if (G && (H = G.getElementById(T)) && fe.contains(h, H) && H.id === T)
                return s.call(g, H), g;
            } else {
              if (O[2])
                return s.apply(g, h.getElementsByTagName(u)), g;
              if ((T = O[3]) && h.getElementsByClassName)
                return s.apply(g, h.getElementsByClassName(T)), g;
            }
          if (!Te[u + " "] && (!p || !p.test(u))) {
            if (U = u, G = h, ne === 1 && (rn.test(u) || Mt.test(u))) {
              for (G = on.test(u) && sn(h.parentNode) || h, (G != h || !A.scope) && ((W = h.getAttribute("id")) ? W = i.escapeSelector(W) : h.setAttribute("id", W = _)), te = Pt(u), L = te.length; L--; )
                te[L] = (W ? "#" + W : ":scope") + " " + zt(te[L]);
              U = te.join(",");
            }
            try {
              return s.apply(
                g,
                G.querySelectorAll(U)
              ), g;
            } catch {
              Te(u, !0);
            } finally {
              W === _ && h.removeAttribute("id");
            }
          }
        }
        return Yn(u.replace(J, "$1"), h, g, y);
      }
      function It() {
        var u = [];
        function h(g, y) {
          return u.push(g + " ") > t.cacheLength && delete h[u.shift()], h[g + " "] = y;
        }
        return h;
      }
      function Ye(u) {
        return u[_] = !0, u;
      }
      function yt(u) {
        var h = a.createElement("fieldset");
        try {
          return !!u(h);
        } catch {
          return !1;
        } finally {
          h.parentNode && h.parentNode.removeChild(h), h = null;
        }
      }
      function qi(u) {
        return function(h) {
          return I(h, "input") && h.type === u;
        };
      }
      function Wi(u) {
        return function(h) {
          return (I(h, "input") || I(h, "button")) && h.type === u;
        };
      }
      function $n(u) {
        return function(h) {
          return "form" in h ? h.parentNode && h.disabled === !1 ? "label" in h ? "label" in h.parentNode ? h.parentNode.disabled === u : h.disabled === u : h.isDisabled === u || // Where there is no isDisabled, check manually
          h.isDisabled !== !u && Ii(h) === u : h.disabled === u : "label" in h ? h.disabled === u : !1;
        };
      }
      function ft(u) {
        return Ye(function(h) {
          return h = +h, Ye(function(g, y) {
            for (var T, L = u([], g.length, h), H = L.length; H--; )
              g[T = L[H]] && (g[T] = !(y[T] = g[T]));
          });
        });
      }
      function sn(u) {
        return u && typeof u.getElementsByTagName < "u" && u;
      }
      function ot(u) {
        var h, g = u ? u.ownerDocument || u : he;
        return g == a || g.nodeType !== 9 || !g.documentElement || (a = g, f = a.documentElement, c = !i.isXMLDoc(a), w = f.matches || f.webkitMatchesSelector || f.msMatchesSelector, f.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        he != a && (h = a.defaultView) && h.top !== h && h.addEventListener("unload", ji), A.getById = yt(function(y) {
          return f.appendChild(y).id = i.expando, !a.getElementsByName || !a.getElementsByName(i.expando).length;
        }), A.disconnectedMatch = yt(function(y) {
          return w.call(y, "*");
        }), A.scope = yt(function() {
          return a.querySelectorAll(":scope");
        }), A.cssHas = yt(function() {
          try {
            return a.querySelector(":has(*,:jqfake)"), !1;
          } catch {
            return !0;
          }
        }), A.getById ? (t.filter.ID = function(y) {
          var T = y.replace(tt, nt);
          return function(L) {
            return L.getAttribute("id") === T;
          };
        }, t.find.ID = function(y, T) {
          if (typeof T.getElementById < "u" && c) {
            var L = T.getElementById(y);
            return L ? [L] : [];
          }
        }) : (t.filter.ID = function(y) {
          var T = y.replace(tt, nt);
          return function(L) {
            var H = typeof L.getAttributeNode < "u" && L.getAttributeNode("id");
            return H && H.value === T;
          };
        }, t.find.ID = function(y, T) {
          if (typeof T.getElementById < "u" && c) {
            var L, H, W, O = T.getElementById(y);
            if (O) {
              if (L = O.getAttributeNode("id"), L && L.value === y)
                return [O];
              for (W = T.getElementsByName(y), H = 0; O = W[H++]; )
                if (L = O.getAttributeNode("id"), L && L.value === y)
                  return [O];
            }
            return [];
          }
        }), t.find.TAG = function(y, T) {
          return typeof T.getElementsByTagName < "u" ? T.getElementsByTagName(y) : T.querySelectorAll(y);
        }, t.find.CLASS = function(y, T) {
          if (typeof T.getElementsByClassName < "u" && c)
            return T.getElementsByClassName(y);
        }, p = [], yt(function(y) {
          var T;
          f.appendChild(y).innerHTML = "<a id='" + _ + "' href='' disabled='disabled'></a><select id='" + _ + "-\r\\' disabled='disabled'><option selected=''></option></select>", y.querySelectorAll("[selected]").length || p.push("\\[" + j + "*(?:value|" + Ve + ")"), y.querySelectorAll("[id~=" + _ + "-]").length || p.push("~="), y.querySelectorAll("a#" + _ + "+*").length || p.push(".#.+[+~]"), y.querySelectorAll(":checked").length || p.push(":checked"), T = a.createElement("input"), T.setAttribute("type", "hidden"), y.appendChild(T).setAttribute("name", "D"), f.appendChild(y).disabled = !0, y.querySelectorAll(":disabled").length !== 2 && p.push(":enabled", ":disabled"), T = a.createElement("input"), T.setAttribute("name", ""), y.appendChild(T), y.querySelectorAll("[name='']").length || p.push("\\[" + j + "*name" + j + "*=" + j + `*(?:''|"")`);
        }), A.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), we = function(y, T) {
          if (y === T)
            return o = !0, 0;
          var L = !y.compareDocumentPosition - !T.compareDocumentPosition;
          return L || (L = (y.ownerDocument || y) == (T.ownerDocument || T) ? y.compareDocumentPosition(T) : (
            // Otherwise we know they are disconnected
            1
          ), L & 1 || !A.sortDetached && T.compareDocumentPosition(y) === L ? y === a || y.ownerDocument == he && fe.contains(he, y) ? -1 : T === a || T.ownerDocument == he && fe.contains(he, T) ? 1 : r ? m.call(r, y) - m.call(r, T) : 0 : L & 4 ? -1 : 1);
        }), a;
      }
      fe.matches = function(u, h) {
        return fe(u, null, null, h);
      }, fe.matchesSelector = function(u, h) {
        if (ot(u), c && !Te[h + " "] && (!p || !p.test(h)))
          try {
            var g = w.call(u, h);
            if (g || A.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            u.document && u.document.nodeType !== 11)
              return g;
          } catch {
            Te(h, !0);
          }
        return fe(h, a, null, [u]).length > 0;
      }, fe.contains = function(u, h) {
        return (u.ownerDocument || u) != a && ot(u), i.contains(u, h);
      }, fe.attr = function(u, h) {
        (u.ownerDocument || u) != a && ot(u);
        var g = t.attrHandle[h.toLowerCase()], y = g && N.call(t.attrHandle, h.toLowerCase()) ? g(u, h, !c) : void 0;
        return y !== void 0 ? y : u.getAttribute(h);
      }, fe.error = function(u) {
        throw new Error("Syntax error, unrecognized expression: " + u);
      }, i.uniqueSort = function(u) {
        var h, g = [], y = 0, T = 0;
        if (o = !A.sortStable, r = !A.sortStable && x.call(u, 0), ue.call(u, we), o) {
          for (; h = u[T++]; )
            h === u[T] && (y = g.push(T));
          for (; y--; )
            ie.call(u, g[y], 1);
        }
        return r = null, u;
      }, i.fn.uniqueSort = function() {
        return this.pushStack(i.uniqueSort(x.apply(this)));
      }, t = i.expr = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: Ye,
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
            return u[1] = u[1].toLowerCase(), u[1].slice(0, 3) === "nth" ? (u[3] || fe.error(u[0]), u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * (u[3] === "even" || u[3] === "odd")), u[5] = +(u[7] + u[8] || u[3] === "odd")) : u[3] && fe.error(u[0]), u;
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
              var T = fe.attr(y, u);
              return T == null ? h === "!=" : h ? (T += "", h === "=" ? T === g : h === "!=" ? T !== g : h === "^=" ? g && T.indexOf(g) === 0 : h === "*=" ? g && T.indexOf(g) > -1 : h === "$=" ? g && T.slice(-g.length) === g : h === "~=" ? (" " + T.replace(le, " ") + " ").indexOf(g) > -1 : h === "|=" ? T === g || T.slice(0, g.length + 1) === g + "-" : !1) : !0;
            };
          },
          CHILD: function(u, h, g, y, T) {
            var L = u.slice(0, 3) !== "nth", H = u.slice(-4) !== "last", W = h === "of-type";
            return y === 1 && T === 0 ? (
              // Shortcut for :nth-*(n)
              function(O) {
                return !!O.parentNode;
              }
            ) : function(O, te, U) {
              var G, ne, F, pe, He, _e = L !== H ? "nextSibling" : "previousSibling", We = O.parentNode, Ke = W && O.nodeName.toLowerCase(), xt = !U && !W, De = !1;
              if (We) {
                if (L) {
                  for (; _e; ) {
                    for (F = O; F = F[_e]; )
                      if (W ? I(F, Ke) : F.nodeType === 1)
                        return !1;
                    He = _e = u === "only" && !He && "nextSibling";
                  }
                  return !0;
                }
                if (He = [H ? We.firstChild : We.lastChild], H && xt) {
                  for (ne = We[_] || (We[_] = {}), G = ne[u] || [], pe = G[0] === v && G[1], De = pe && G[2], F = pe && We.childNodes[pe]; F = ++pe && F && F[_e] || // Fallback to seeking `elem` from the start
                  (De = pe = 0) || He.pop(); )
                    if (F.nodeType === 1 && ++De && F === O) {
                      ne[u] = [v, pe, De];
                      break;
                    }
                } else if (xt && (ne = O[_] || (O[_] = {}), G = ne[u] || [], pe = G[0] === v && G[1], De = pe), De === !1)
                  for (; (F = ++pe && F && F[_e] || (De = pe = 0) || He.pop()) && !((W ? I(F, Ke) : F.nodeType === 1) && ++De && (xt && (ne = F[_] || (F[_] = {}), ne[u] = [v, De]), F === O)); )
                    ;
                return De -= T, De === y || De % y === 0 && De / y >= 0;
              }
            };
          },
          PSEUDO: function(u, h) {
            var g, y = t.pseudos[u] || t.setFilters[u.toLowerCase()] || fe.error("unsupported pseudo: " + u);
            return y[_] ? y(h) : y.length > 1 ? (g = [u, u, "", h], t.setFilters.hasOwnProperty(u.toLowerCase()) ? Ye(function(T, L) {
              for (var H, W = y(T, h), O = W.length; O--; )
                H = m.call(T, W[O]), T[H] = !(L[H] = W[O]);
            }) : function(T) {
              return y(T, 0, g);
            }) : y;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          not: Ye(function(u) {
            var h = [], g = [], y = cn(u.replace(J, "$1"));
            return y[_] ? Ye(function(T, L, H, W) {
              for (var O, te = y(T, null, W, []), U = T.length; U--; )
                (O = te[U]) && (T[U] = !(L[U] = O));
            }) : function(T, L, H) {
              return h[0] = T, y(h, null, H, g), h[0] = null, !g.pop();
            };
          }),
          has: Ye(function(u) {
            return function(h) {
              return fe(u, h).length > 0;
            };
          }),
          contains: Ye(function(u) {
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
          lang: Ye(function(u) {
            return At.test(u || "") || fe.error("unsupported lang: " + u), u = u.replace(tt, nt).toLowerCase(), function(h) {
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
            var h = l.location && l.location.hash;
            return h && h.slice(1) === u.id;
          },
          root: function(u) {
            return u === f;
          },
          focus: function(u) {
            return u === zi() && a.hasFocus() && !!(u.type || u.href || ~u.tabIndex);
          },
          // Boolean properties
          enabled: $n(!1),
          disabled: $n(!0),
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
        t.pseudos[e] = qi(e);
      for (e in { submit: !0, reset: !0 })
        t.pseudos[e] = Wi(e);
      function Bn() {
      }
      Bn.prototype = t.filters = t.pseudos, t.setFilters = new Bn();
      function Pt(u, h) {
        var g, y, T, L, H, W, O, te = se[u + " "];
        if (te)
          return h ? 0 : te.slice(0);
        for (H = u, W = [], O = t.preFilter; H; ) {
          (!g || (y = me.exec(H))) && (y && (H = H.slice(y[0].length) || H), W.push(T = [])), g = !1, (y = Mt.exec(H)) && (g = y.shift(), T.push({
            value: g,
            // Cast descendant combinators to space
            type: y[0].replace(J, " ")
          }), H = H.slice(g.length));
          for (L in t.filter)
            (y = Je[L].exec(H)) && (!O[L] || (y = O[L](y))) && (g = y.shift(), T.push({
              value: g,
              type: L,
              matches: y
            }), H = H.slice(g.length));
          if (!g)
            break;
        }
        return h ? H.length : H ? fe.error(u) : (
          // Cache the tokens
          se(u, W).slice(0)
        );
      }
      function zt(u) {
        for (var h = 0, g = u.length, y = ""; h < g; h++)
          y += u[h].value;
        return y;
      }
      function qt(u, h, g) {
        var y = h.dir, T = h.next, L = T || y, H = g && L === "parentNode", W = E++;
        return h.first ? (
          // Check against closest ancestor/preceding element
          function(O, te, U) {
            for (; O = O[y]; )
              if (O.nodeType === 1 || H)
                return u(O, te, U);
            return !1;
          }
        ) : (
          // Check against all ancestor/preceding elements
          function(O, te, U) {
            var G, ne, F = [v, W];
            if (U) {
              for (; O = O[y]; )
                if ((O.nodeType === 1 || H) && u(O, te, U))
                  return !0;
            } else
              for (; O = O[y]; )
                if (O.nodeType === 1 || H)
                  if (ne = O[_] || (O[_] = {}), T && I(O, T))
                    O = O[y] || O;
                  else {
                    if ((G = ne[L]) && G[0] === v && G[1] === W)
                      return F[2] = G[2];
                    if (ne[L] = F, F[2] = u(O, te, U))
                      return !0;
                  }
            return !1;
          }
        );
      }
      function an(u) {
        return u.length > 1 ? function(h, g, y) {
          for (var T = u.length; T--; )
            if (!u[T](h, g, y))
              return !1;
          return !0;
        } : u[0];
      }
      function Xi(u, h, g) {
        for (var y = 0, T = h.length; y < T; y++)
          fe(u, h[y], g);
        return g;
      }
      function Wt(u, h, g, y, T) {
        for (var L, H = [], W = 0, O = u.length, te = h != null; W < O; W++)
          (L = u[W]) && (!g || g(L, y, T)) && (H.push(L), te && h.push(W));
        return H;
      }
      function ln(u, h, g, y, T, L) {
        return y && !y[_] && (y = ln(y)), T && !T[_] && (T = ln(T, L)), Ye(function(H, W, O, te) {
          var U, G, ne, F, pe = [], He = [], _e = W.length, We = H || Xi(
            h || "*",
            O.nodeType ? [O] : O,
            []
          ), Ke = u && (H || !h) ? Wt(We, pe, u, O, te) : We;
          if (g ? (F = T || (H ? u : _e || y) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            W
          ), g(Ke, F, O, te)) : F = Ke, y)
            for (U = Wt(F, He), y(U, [], O, te), G = U.length; G--; )
              (ne = U[G]) && (F[He[G]] = !(Ke[He[G]] = ne));
          if (H) {
            if (T || u) {
              if (T) {
                for (U = [], G = F.length; G--; )
                  (ne = F[G]) && U.push(Ke[G] = ne);
                T(null, F = [], U, te);
              }
              for (G = F.length; G--; )
                (ne = F[G]) && (U = T ? m.call(H, ne) : pe[G]) > -1 && (H[U] = !(W[U] = ne));
            }
          } else
            F = Wt(
              F === W ? F.splice(_e, F.length) : F
            ), T ? T(null, W, F, te) : s.apply(W, F);
        });
      }
      function un(u) {
        for (var h, g, y, T = u.length, L = t.relative[u[0].type], H = L || t.relative[" "], W = L ? 1 : 0, O = qt(function(G) {
          return G === h;
        }, H, !0), te = qt(function(G) {
          return m.call(h, G) > -1;
        }, H, !0), U = [function(G, ne, F) {
          var pe = !L && (F || ne != n) || ((h = ne).nodeType ? O(G, ne, F) : te(G, ne, F));
          return h = null, pe;
        }]; W < T; W++)
          if (g = t.relative[u[W].type])
            U = [qt(an(U), g)];
          else {
            if (g = t.filter[u[W].type].apply(null, u[W].matches), g[_]) {
              for (y = ++W; y < T && !t.relative[u[y].type]; y++)
                ;
              return ln(
                W > 1 && an(U),
                W > 1 && zt(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  u.slice(0, W - 1).concat({ value: u[W - 2].type === " " ? "*" : "" })
                ).replace(J, "$1"),
                g,
                W < y && un(u.slice(W, y)),
                y < T && un(u = u.slice(y)),
                y < T && zt(u)
              );
            }
            U.push(g);
          }
        return an(U);
      }
      function $i(u, h) {
        var g = h.length > 0, y = u.length > 0, T = function(L, H, W, O, te) {
          var U, G, ne, F = 0, pe = "0", He = L && [], _e = [], We = n, Ke = L || y && t.find.TAG("*", te), xt = v += We == null ? 1 : Math.random() || 0.1, De = Ke.length;
          for (te && (n = H == a || H || te); pe !== De && (U = Ke[pe]) != null; pe++) {
            if (y && U) {
              for (G = 0, !H && U.ownerDocument != a && (ot(U), W = !c); ne = u[G++]; )
                if (ne(U, H || a, W)) {
                  s.call(O, U);
                  break;
                }
              te && (v = xt);
            }
            g && ((U = !ne && U) && F--, L && He.push(U));
          }
          if (F += pe, g && pe !== F) {
            for (G = 0; ne = h[G++]; )
              ne(He, _e, H, W);
            if (L) {
              if (F > 0)
                for (; pe--; )
                  He[pe] || _e[pe] || (_e[pe] = K.call(O));
              _e = Wt(_e);
            }
            s.apply(O, _e), te && !L && _e.length > 0 && F + h.length > 1 && i.uniqueSort(O);
          }
          return te && (v = xt, n = We), He;
        };
        return g ? Ye(T) : T;
      }
      function cn(u, h) {
        var g, y = [], T = [], L = Z[u + " "];
        if (!L) {
          for (h || (h = Pt(u)), g = h.length; g--; )
            L = un(h[g]), L[_] ? y.push(L) : T.push(L);
          L = Z(
            u,
            $i(T, y)
          ), L.selector = u;
        }
        return L;
      }
      function Yn(u, h, g, y) {
        var T, L, H, W, O, te = typeof u == "function" && u, U = !y && Pt(u = te.selector || u);
        if (g = g || [], U.length === 1) {
          if (L = U[0] = U[0].slice(0), L.length > 2 && (H = L[0]).type === "ID" && h.nodeType === 9 && c && t.relative[L[1].type]) {
            if (h = (t.find.ID(
              H.matches[0].replace(tt, nt),
              h
            ) || [])[0], h)
              te && (h = h.parentNode);
            else
              return g;
            u = u.slice(L.shift().value.length);
          }
          for (T = Je.needsContext.test(u) ? 0 : L.length; T-- && (H = L[T], !t.relative[W = H.type]); )
            if ((O = t.find[W]) && (y = O(
              H.matches[0].replace(tt, nt),
              on.test(L[0].type) && sn(h.parentNode) || h
            ))) {
              if (L.splice(T, 1), u = y.length && zt(L), !u)
                return s.apply(g, y), g;
              break;
            }
        }
        return (te || cn(u, U))(
          y,
          h,
          !c,
          g,
          !h || on.test(u) && sn(h.parentNode) || h
        ), g;
      }
      A.sortStable = _.split("").sort(we).join("") === _, ot(), A.sortDetached = yt(function(u) {
        return u.compareDocumentPosition(a.createElement("fieldset")) & 1;
      }), i.find = fe, i.expr[":"] = i.expr.pseudos, i.unique = i.uniqueSort, fe.compile = cn, fe.select = Yn, fe.setDocument = ot, fe.tokenize = Pt, fe.escape = i.escapeSelector, fe.getText = i.text, fe.isXML = i.isXMLDoc, fe.selectors = i.expr, fe.support = i.support, fe.uniqueSort = i.uniqueSort;
    })();
    var xe = function(e, t, n) {
      for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (o && i(e).is(n))
            break;
          r.push(e);
        }
      return r;
    }, be = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && n.push(e);
      return n;
    }, Me = i.expr.match.needsContext, $e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function ke(e, t, n) {
      return P(t) ? i.grep(e, function(r, o) {
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
    var je, Y = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ee = i.fn.init = function(e, t, n) {
      var r, o;
      if (!e)
        return this;
      if (n = n || je, typeof e == "string")
        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Y.exec(e), r && (r[1] || !t))
          if (r[1]) {
            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(
              r[1],
              t && t.nodeType ? t.ownerDocument || t : D,
              !0
            )), $e.test(r[1]) && i.isPlainObject(t))
              for (r in t)
                P(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          } else
            return o = D.getElementById(r[2]), o && (this[0] = o, this.length = 1), this;
        else
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      else {
        if (e.nodeType)
          return this[0] = e, this.length = 1, this;
        if (P(e))
          return n.ready !== void 0 ? n.ready(e) : (
            // Execute immediately if ready is not present
            e(i)
          );
      }
      return i.makeArray(e, this);
    };
    ee.prototype = i.fn, je = i(D);
    var de = /^(?:parents|prev(?:Until|All))/, ce = {
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
        var n, r = 0, o = this.length, s = [], a = typeof e != "string" && i(e);
        if (!Me.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : (
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
    function Ce(e, t) {
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
        return xe(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return xe(e, "parentNode", n);
      },
      next: function(e) {
        return Ce(e, "nextSibling");
      },
      prev: function(e) {
        return Ce(e, "previousSibling");
      },
      nextAll: function(e) {
        return xe(e, "nextSibling");
      },
      prevAll: function(e) {
        return xe(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return xe(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return xe(e, "previousSibling", n);
      },
      siblings: function(e) {
        return be((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return be(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        k(e.contentDocument) ? e.contentDocument : (I(e, "template") && (e = e.content || e), i.merge([], e.childNodes));
      }
    }, function(e, t) {
      i.fn[e] = function(n, r) {
        var o = i.map(this, t, n);
        return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (o = i.filter(r, o)), this.length > 1 && (ce[e] || i.uniqueSort(o), de.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var ye = /[^\x20\t\r\n\f]+/g;
    function wt(e) {
      var t = {};
      return i.each(e.match(ye) || [], function(n, r) {
        t[r] = !0;
      }), t;
    }
    i.Callbacks = function(e) {
      e = typeof e == "string" ? wt(e) : i.extend({}, e);
      var t, n, r, o, s = [], a = [], f = -1, c = function() {
        for (o = o || e.once, r = t = !0; a.length; f = -1)
          for (n = a.shift(); ++f < s.length; )
            s[f].apply(n[0], n[1]) === !1 && e.stopOnFalse && (f = s.length, n = !1);
        e.memory || (n = !1), t = !1, o && (n ? s = [] : s = "");
      }, p = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return s && (n && !t && (f = s.length - 1, a.push(n)), function w(_) {
            i.each(_, function(v, E) {
              P(E) ? (!e.unique || !p.has(E)) && s.push(E) : E && E.length && ve(E) !== "string" && w(E);
            });
          }(arguments), n && !t && c()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return i.each(arguments, function(w, _) {
            for (var v; (v = i.inArray(_, s, v)) > -1; )
              s.splice(v, 1), v <= f && f--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(w) {
          return w ? i.inArray(w, s) > -1 : s.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return s && (s = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return o = a = [], s = n = "", this;
        },
        disabled: function() {
          return !s;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return o = a = [], !n && !t && (s = n = ""), this;
        },
        locked: function() {
          return !!o;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(w, _) {
          return o || (_ = _ || [], _ = [w, _.slice ? _.slice() : _], a.push(_), t || c()), this;
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
        e && P(o = e.promise) ? o.call(e).done(t).fail(n) : e && P(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
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
            return i.Deferred(function(a) {
              i.each(t, function(f, c) {
                var p = P(s[c[4]]) && s[c[4]];
                o[c[1]](function() {
                  var w = p && p.apply(this, arguments);
                  w && P(w.promise) ? w.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[c[0] + "With"](
                    this,
                    p ? [w] : arguments
                  );
                });
              }), s = null;
            }).promise();
          },
          then: function(s, a, f) {
            var c = 0;
            function p(w, _, v, E) {
              return function() {
                var V = this, se = arguments, Z = function() {
                  var we, Ve;
                  if (!(w < c)) {
                    if (we = v.apply(V, se), we === _.promise())
                      throw new TypeError("Thenable self-resolution");
                    Ve = we && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof we == "object" || typeof we == "function") && we.then, P(Ve) ? E ? Ve.call(
                      we,
                      p(c, _, Fe, E),
                      p(c, _, Ae, E)
                    ) : (c++, Ve.call(
                      we,
                      p(c, _, Fe, E),
                      p(c, _, Ae, E),
                      p(
                        c,
                        _,
                        Fe,
                        _.notifyWith
                      )
                    )) : (v !== Fe && (V = void 0, se = [we]), (E || _.resolveWith)(V, se));
                  }
                }, Te = E ? Z : function() {
                  try {
                    Z();
                  } catch (we) {
                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(
                      we,
                      Te.error
                    ), w + 1 >= c && (v !== Ae && (V = void 0, se = [we]), _.rejectWith(V, se));
                  }
                };
                w ? Te() : (i.Deferred.getErrorHook ? Te.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (Te.error = i.Deferred.getStackHook()), l.setTimeout(Te));
              };
            }
            return i.Deferred(function(w) {
              t[0][3].add(
                p(
                  0,
                  w,
                  P(f) ? f : Fe,
                  w.notifyWith
                )
              ), t[1][3].add(
                p(
                  0,
                  w,
                  P(s) ? s : Fe
                )
              ), t[2][3].add(
                p(
                  0,
                  w,
                  P(a) ? a : Ae
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
        return i.each(t, function(s, a) {
          var f = a[2], c = a[5];
          r[a[1]] = f.add, c && f.add(
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
          ), f.add(a[3].fire), o[a[0]] = function() {
            return o[a[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[a[0] + "With"] = f.fireWith;
        }), r.promise(o), e && e.call(o, o), o;
      },
      // Deferred helper
      when: function(e) {
        var t = arguments.length, n = t, r = Array(n), o = x.call(arguments), s = i.Deferred(), a = function(f) {
          return function(c) {
            r[f] = this, o[f] = arguments.length > 1 ? x.call(arguments) : c, --t || s.resolveWith(r, o);
          };
        };
        if (t <= 1 && (Ie(
          e,
          s.done(a(n)).resolve,
          s.reject,
          !t
        ), s.state() === "pending" || P(o[n] && o[n].then)))
          return s.then();
        for (; n--; )
          Ie(o[n], a(n), s.reject);
        return s.promise();
      }
    });
    var st = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(e, t) {
      l.console && l.console.warn && e && st.test(e.name) && l.console.warn(
        "jQuery.Deferred exception: " + e.message,
        e.stack,
        t
      );
    }, i.readyException = function(e) {
      l.setTimeout(function() {
        throw e;
      });
    };
    var Xt = i.Deferred();
    i.fn.ready = function(e) {
      return Xt.then(e).catch(function(t) {
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
        (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && Xt.resolveWith(D, [i]));
      }
    }), i.ready.then = Xt.then;
    function Lt() {
      D.removeEventListener("DOMContentLoaded", Lt), l.removeEventListener("load", Lt), i.ready();
    }
    D.readyState === "complete" || D.readyState !== "loading" && !D.documentElement.doScroll ? l.setTimeout(i.ready) : (D.addEventListener("DOMContentLoaded", Lt), l.addEventListener("load", Lt));
    var Ze = function(e, t, n, r, o, s, a) {
      var f = 0, c = e.length, p = n == null;
      if (ve(n) === "object") {
        o = !0;
        for (f in n)
          Ze(e, t, f, n[f], !0, s, a);
      } else if (r !== void 0 && (o = !0, P(r) || (a = !0), p && (a ? (t.call(e, r), t = null) : (p = t, t = function(w, _, v) {
        return p.call(i(w), v);
      })), t))
        for (; f < c; f++)
          t(
            e[f],
            n,
            a ? r : r.call(e[f], f, t(e[f], n))
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
            for (Array.isArray(t) ? t = t.map(Ue) : (t = Ue(t), t = t in r ? [t] : t.match(ye) || []), n = t.length; n--; )
              delete r[t[n]];
          (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return t !== void 0 && !i.isEmptyObject(t);
      }
    };
    var $ = new Ct(), Pe = new Ct(), Kn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Zn = /[A-Z]/g;
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
        return Pe.hasData(e) || $.hasData(e);
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
        return $.access(e, t, n);
      },
      _removeData: function(e, t) {
        $.remove(e, t);
      }
    }), i.fn.extend({
      data: function(e, t) {
        var n, r, o, s = this[0], a = s && s.attributes;
        if (e === void 0) {
          if (this.length && (o = Pe.get(s), s.nodeType === 1 && !$.get(s, "hasDataAttrs"))) {
            for (n = a.length; n--; )
              a[n] && (r = a[n].name, r.indexOf("data-") === 0 && (r = Ue(r.slice(5)), hn(s, r, o[r])));
            $.set(s, "hasDataAttrs", !0);
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
          return t = (t || "fx") + "queue", r = $.get(e, t), n && (!r || Array.isArray(n) ? r = $.access(e, t, i.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = i.queue(e, t), r = n.length, o = n.shift(), s = i._queueHooks(e, t), a = function() {
          i.dequeue(e, t);
        };
        o === "inprogress" && (o = n.shift(), r--), o && (t === "fx" && n.unshift("inprogress"), delete s.stop, o.call(e, a, s)), !r && s && s.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return $.get(e, n) || $.access(e, n, {
          empty: i.Callbacks("once memory").add(function() {
            $.remove(e, [t + "queue", n]);
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
        var n, r = 1, o = i.Deferred(), s = this, a = this.length, f = function() {
          --r || o.resolveWith(s, [s]);
        };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; a--; )
          n = $.get(s[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(f));
        return f(), o.promise(t);
      }
    });
    var dn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = new RegExp("^(?:([+-])=|)(" + dn + ")([a-z%]*)$", "i"), et = ["Top", "Right", "Bottom", "Left"], at = D.documentElement, ht = function(e) {
      return i.contains(e.ownerDocument, e);
    }, ti = { composed: !0 };
    at.getRootNode && (ht = function(e) {
      return i.contains(e.ownerDocument, e) || e.getRootNode(ti) === e.ownerDocument;
    });
    var Rt = function(e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      ht(e) && i.css(e, "display") === "none";
    };
    function pn(e, t, n, r) {
      var o, s, a = 20, f = r ? function() {
        return r.cur();
      } : function() {
        return i.css(e, t, "");
      }, c = f(), p = n && n[3] || (i.cssNumber[t] ? "" : "px"), w = e.nodeType && (i.cssNumber[t] || p !== "px" && +c) && Tt.exec(i.css(e, t));
      if (w && w[3] !== p) {
        for (c = c / 2, p = p || w[3], w = +c || 1; a--; )
          i.style(e, t, w + p), (1 - s) * (1 - (s = f() / c || 0.5)) <= 0 && (a = 0), w = w / s;
        w = w * 2, i.style(e, t, w + p), n = n || [];
      }
      return n && (w = +w || +c || 0, o = n[1] ? w + (n[1] + 1) * n[2] : +n[2], r && (r.unit = p, r.start = w, r.end = o)), o;
    }
    var gn = {};
    function ni(e) {
      var t, n = e.ownerDocument, r = e.nodeName, o = gn[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = i.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), gn[r] = o, o);
    }
    function dt(e, t) {
      for (var n, r, o = [], s = 0, a = e.length; s < a; s++)
        r = e[s], r.style && (n = r.style.display, t ? (n === "none" && (o[s] = $.get(r, "display") || null, o[s] || (r.style.display = "")), r.style.display === "" && Rt(r) && (o[s] = ni(r))) : n !== "none" && (o[s] = "none", $.set(r, "display", n)));
      for (s = 0; s < a; s++)
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
          Rt(this) ? i(this).show() : i(this).hide();
        });
      }
    });
    var _t = /^(?:checkbox|radio)$/i, vn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, mn = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var e = D.createDocumentFragment(), t = e.appendChild(D.createElement("div")), n = D.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), A.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", A.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", A.option = !!t.lastChild;
    })();
    var ze = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td, A.option || (ze.optgroup = ze.option = [1, "<select multiple='multiple'>", "</select>"]);
    function Le(e, t) {
      var n;
      return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && I(e, t) ? i.merge([e], n) : n;
    }
    function $t(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        $.set(
          e[n],
          "globalEval",
          !t || $.get(t[n], "globalEval")
        );
    }
    var ii = /<|&#?\w+;/;
    function yn(e, t, n, r, o) {
      for (var s, a, f, c, p, w, _ = t.createDocumentFragment(), v = [], E = 0, V = e.length; E < V; E++)
        if (s = e[E], s || s === 0)
          if (ve(s) === "object")
            i.merge(v, s.nodeType ? [s] : s);
          else if (!ii.test(s))
            v.push(t.createTextNode(s));
          else {
            for (a = a || _.appendChild(t.createElement("div")), f = (vn.exec(s) || ["", ""])[1].toLowerCase(), c = ze[f] || ze._default, a.innerHTML = c[1] + i.htmlPrefilter(s) + c[2], w = c[0]; w--; )
              a = a.lastChild;
            i.merge(v, a.childNodes), a = _.firstChild, a.textContent = "";
          }
      for (_.textContent = "", E = 0; s = v[E++]; ) {
        if (r && i.inArray(s, r) > -1) {
          o && o.push(s);
          continue;
        }
        if (p = ht(s), a = Le(_.appendChild(s), "script"), p && $t(a), n)
          for (w = 0; s = a[w++]; )
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
    function Bt(e, t, n, r, o, s) {
      var a, f;
      if (typeof t == "object") {
        typeof n != "string" && (r = r || n, n = void 0);
        for (f in t)
          Bt(e, f, n, r, t[f], s);
        return e;
      }
      if (r == null && o == null ? (o = n, r = n = void 0) : o == null && (typeof n == "string" ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1)
        o = gt;
      else if (!o)
        return e;
      return s === 1 && (a = o, o = function(c) {
        return i().off(c), a.apply(this, arguments);
      }, o.guid = a.guid || (a.guid = i.guid++)), e.each(function() {
        i.event.add(this, t, o, r, n);
      });
    }
    i.event = {
      global: {},
      add: function(e, t, n, r, o) {
        var s, a, f, c, p, w, _, v, E, V, se, Z = $.get(e);
        if (bt(e))
          for (n.handler && (s = n, n = s.handler, o = s.selector), o && i.find.matchesSelector(at, o), n.guid || (n.guid = i.guid++), (c = Z.events) || (c = Z.events = /* @__PURE__ */ Object.create(null)), (a = Z.handle) || (a = Z.handle = function(Te) {
            return typeof i < "u" && i.event.triggered !== Te.type ? i.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(ye) || [""], p = t.length; p--; )
            f = xn.exec(t[p]) || [], E = se = f[1], V = (f[2] || "").split(".").sort(), E && (_ = i.event.special[E] || {}, E = (o ? _.delegateType : _.bindType) || E, _ = i.event.special[E] || {}, w = i.extend({
              type: E,
              origType: se,
              data: r,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && i.expr.match.needsContext.test(o),
              namespace: V.join(".")
            }, s), (v = c[E]) || (v = c[E] = [], v.delegateCount = 0, (!_.setup || _.setup.call(e, r, V, a) === !1) && e.addEventListener && e.addEventListener(E, a)), _.add && (_.add.call(e, w), w.handler.guid || (w.handler.guid = n.guid)), o ? v.splice(v.delegateCount++, 0, w) : v.push(w), i.event.global[E] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(e, t, n, r, o) {
        var s, a, f, c, p, w, _, v, E, V, se, Z = $.hasData(e) && $.get(e);
        if (!(!Z || !(c = Z.events))) {
          for (t = (t || "").match(ye) || [""], p = t.length; p--; ) {
            if (f = xn.exec(t[p]) || [], E = se = f[1], V = (f[2] || "").split(".").sort(), !E) {
              for (E in c)
                i.event.remove(e, E + t[p], n, r, !0);
              continue;
            }
            for (_ = i.event.special[E] || {}, E = (r ? _.delegateType : _.bindType) || E, v = c[E] || [], f = f[2] && new RegExp("(^|\\.)" + V.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = v.length; s--; )
              w = v[s], (o || se === w.origType) && (!n || n.guid === w.guid) && (!f || f.test(w.namespace)) && (!r || r === w.selector || r === "**" && w.selector) && (v.splice(s, 1), w.selector && v.delegateCount--, _.remove && _.remove.call(e, w));
            a && !v.length && ((!_.teardown || _.teardown.call(e, V, Z.handle) === !1) && i.removeEvent(e, E, Z.handle), delete c[E]);
          }
          i.isEmptyObject(c) && $.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t, n, r, o, s, a, f = new Array(arguments.length), c = i.event.fix(e), p = ($.get(this, "events") || /* @__PURE__ */ Object.create(null))[c.type] || [], w = i.event.special[c.type] || {};
        for (f[0] = c, t = 1; t < arguments.length; t++)
          f[t] = arguments[t];
        if (c.delegateTarget = this, !(w.preDispatch && w.preDispatch.call(this, c) === !1)) {
          for (a = i.event.handlers.call(this, c, p), t = 0; (o = a[t++]) && !c.isPropagationStopped(); )
            for (c.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !c.isImmediatePropagationStopped(); )
              (!c.rnamespace || s.namespace === !1 || c.rnamespace.test(s.namespace)) && (c.handleObj = s, c.data = s.data, r = ((i.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, f), r !== void 0 && (c.result = r) === !1 && (c.preventDefault(), c.stopPropagation()));
          return w.postDispatch && w.postDispatch.call(this, c), c.result;
        }
      },
      handlers: function(e, t) {
        var n, r, o, s, a, f = [], c = t.delegateCount, p = e.target;
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
              for (s = [], a = {}, n = 0; n < c; n++)
                r = t[n], o = r.selector + " ", a[o] === void 0 && (a[o] = r.needsContext ? i(o, this).index(p) > -1 : i.find(o, this, null, [p]).length), a[o] && s.push(r);
              s.length && f.push({ elem: p, handlers: s });
            }
        }
        return p = this, c < t.length && f.push({ elem: p, handlers: t.slice(c) }), f;
      },
      addProp: function(e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: P(t) ? function() {
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
            return _t.test(t.type) && t.click && I(t, "input") && Ht(t, "click", !0), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return _t.test(t.type) && t.click && I(t, "input") && Ht(t, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(e) {
            var t = e.target;
            return _t.test(t.type) && t.click && I(t, "input") && $.get(t, "click") || I(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    };
    function Ht(e, t, n) {
      if (!n) {
        $.get(e, t) === void 0 && i.event.add(e, t, pt);
        return;
      }
      $.set(e, t, !1), i.event.add(e, t, {
        namespace: !1,
        handler: function(r) {
          var o, s = $.get(this, t);
          if (r.isTrigger & 1 && this[t]) {
            if (s)
              (i.event.special[t] || {}).delegateType && r.stopPropagation();
            else if (s = x.call(arguments), $.set(this, t, s), this[t](), o = $.get(this, t), $.set(this, t, !1), s !== o)
              return r.stopImmediatePropagation(), r.preventDefault(), o;
          } else
            s && ($.set(this, t, i.event.trigger(
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
        if (D.documentMode) {
          var o = $.get(this, "handle"), s = i.event.fix(r);
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
          if (Ht(this, e, !0), D.documentMode)
            r = $.get(this, t), r || this.addEventListener(t, n), $.set(this, t, (r || 0) + 1);
          else
            return !1;
        },
        trigger: function() {
          return Ht(this, e), !0;
        },
        teardown: function() {
          var r;
          if (D.documentMode)
            r = $.get(this, t) - 1, r ? $.set(this, t, r) : (this.removeEventListener(t, n), $.remove(this, t));
          else
            return !1;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(r) {
          return $.get(r.target, e);
        },
        delegateType: t
      }, i.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this.document || this, o = D.documentMode ? this : r, s = $.get(o, t);
          s || (D.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), $.set(o, t, (s || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this.document || this, o = D.documentMode ? this : r, s = $.get(o, t) - 1;
          s ? $.set(o, t, s) : (D.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), $.remove(o, t));
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
          var r, o = this, s = n.relatedTarget, a = n.handleObj;
          return (!s || s !== o && !i.contains(o, s)) && (n.type = a.origType, r = a.handler.apply(this, arguments), n.type = t), r;
        }
      };
    }), i.fn.extend({
      on: function(e, t, n, r) {
        return Bt(this, e, t, n, r);
      },
      one: function(e, t, n, r) {
        return Bt(this, e, t, n, r, 1);
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
      var n, r, o, s, a, f, c;
      if (t.nodeType === 1) {
        if ($.hasData(e) && (s = $.get(e), c = s.events, c)) {
          $.remove(t, "handle events");
          for (o in c)
            for (n = 0, r = c[o].length; n < r; n++)
              i.event.add(t, o, c[o][n]);
        }
        Pe.hasData(e) && (a = Pe.access(e), f = i.extend({}, a), Pe.set(t, f));
      }
    }
    function ui(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && _t.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
    }
    function vt(e, t, n, r) {
      t = R(t);
      var o, s, a, f, c, p, w = 0, _ = e.length, v = _ - 1, E = t[0], V = P(E);
      if (V || _ > 1 && typeof E == "string" && !A.checkClone && oi.test(E))
        return e.each(function(se) {
          var Z = e.eq(se);
          V && (t[0] = E.call(this, se, Z.html())), vt(Z, t, n, r);
        });
      if (_ && (o = yn(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, o.childNodes.length === 1 && (o = s), s || r)) {
        for (a = i.map(Le(o, "script"), ai), f = a.length; w < _; w++)
          c = o, w !== v && (c = i.clone(c, !0, !0), f && i.merge(a, Le(c, "script"))), n.call(e[w], c, w);
        if (f)
          for (p = a[a.length - 1].ownerDocument, i.map(a, li), w = 0; w < f; w++)
            c = a[w], mn.test(c.type || "") && !$.access(c, "globalEval") && i.contains(p, c) && (c.src && (c.type || "").toLowerCase() !== "module" ? i._evalUrl && !c.noModule && i._evalUrl(c.src, {
              nonce: c.nonce || c.getAttribute("nonce")
            }, p) : oe(c.textContent.replace(si, ""), c, p));
      }
      return e;
    }
    function Cn(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, s = 0; (r = o[s]) != null; s++)
        !n && r.nodeType === 1 && i.cleanData(Le(r)), r.parentNode && (n && ht(r) && $t(Le(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, n) {
        var r, o, s, a, f = e.cloneNode(!0), c = ht(e);
        if (!A.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
          for (a = Le(f), s = Le(e), r = 0, o = s.length; r < o; r++)
            ui(s[r], a[r]);
        if (t)
          if (n)
            for (s = s || Le(e), a = a || Le(f), r = 0, o = s.length; r < o; r++)
              bn(s[r], a[r]);
          else
            bn(e, f);
        return a = Le(f, "script"), a.length > 0 && $t(a, !c && Le(e, "script")), f;
      },
      cleanData: function(e) {
        for (var t, n, r, o = i.event.special, s = 0; (n = e[s]) !== void 0; s++)
          if (bt(n)) {
            if (t = n[$.expando]) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[$.expando] = void 0;
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
          if (typeof t == "string" && !ri.test(t) && !ze[(vn.exec(t) || ["", ""])[1].toLowerCase()]) {
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
        for (var r, o = [], s = i(n), a = s.length - 1, f = 0; f <= a; f++)
          r = f === a ? this : this.clone(!0), i(s[f])[t](r), S.apply(o, r.get());
        return this.pushStack(o);
      };
    });
    var Yt = new RegExp("^(" + dn + ")(?!px)[a-z%]+$", "i"), Ft = /^--/, Ot = function(e) {
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = l), t.getComputedStyle(e);
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
          var w = l.getComputedStyle(p);
          n = w.top !== "1%", f = t(w.marginLeft) === 12, p.style.right = "60%", s = t(w.right) === 36, r = t(w.width) === 36, p.style.position = "absolute", o = t(p.offsetWidth / 3) === 12, at.removeChild(c), p = null;
        }
      }
      function t(w) {
        return Math.round(parseFloat(w));
      }
      var n, r, o, s, a, f, c = D.createElement("div"), p = D.createElement("div");
      p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", A.clearCloneStyle = p.style.backgroundClip === "content-box", i.extend(A, {
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
          var w, _, v, E;
          return a == null && (w = D.createElement("table"), _ = D.createElement("tr"), v = D.createElement("div"), w.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", _.style.cssText = "box-sizing:content-box;border:1px solid", _.style.height = "1px", v.style.height = "9px", v.style.display = "block", at.appendChild(w).appendChild(_).appendChild(v), E = l.getComputedStyle(_), a = parseInt(E.height, 10) + parseInt(E.borderTopWidth, 10) + parseInt(E.borderBottomWidth, 10) === _.offsetHeight, at.removeChild(w)), a;
        }
      }));
    })();
    function St(e, t, n) {
      var r, o, s, a, f = Ft.test(t), c = e.style;
      return n = n || Ot(e), n && (a = n.getPropertyValue(t) || n[t], f && a && (a = a.replace(J, "$1") || void 0), a === "" && !ht(e) && (a = i.style(e, t)), !A.pixelBoxStyles() && Yt.test(a) && ci.test(t) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = a, a = n.width, c.width = r, c.minWidth = o, c.maxWidth = s)), a !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        a + ""
      ) : a;
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
    var Sn = ["Webkit", "Moz", "ms"], En = D.createElement("div").style, kn = {};
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
      var a = t === "width" ? 1 : 0, f = 0, c = 0, p = 0;
      if (n === (r ? "border" : "content"))
        return 0;
      for (; a < 4; a += 2)
        n === "margin" && (p += i.css(e, n + et[a], !0, o)), r ? (n === "content" && (c -= i.css(e, "padding" + et[a], !0, o)), n !== "margin" && (c -= i.css(e, "border" + et[a] + "Width", !0, o))) : (c += i.css(e, "padding" + et[a], !0, o), n !== "padding" ? c += i.css(e, "border" + et[a] + "Width", !0, o) : f += i.css(e, "border" + et[a] + "Width", !0, o));
      return !r && s >= 0 && (c += Math.max(0, Math.ceil(
        e["offset" + t[0].toUpperCase() + t.slice(1)] - s - c - f - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), c + p;
    }
    function An(e, t, n) {
      var r = Ot(e), o = !A.boxSizingReliable() || n, s = o && i.css(e, "boxSizing", !1, r) === "border-box", a = s, f = St(e, t, r), c = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Yt.test(f)) {
        if (!n)
          return f;
        f = "auto";
      }
      return (!A.boxSizingReliable() && s || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !A.reliableTrDimensions() && I(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      f === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(f) && i.css(e, "display", !1, r) === "inline") && // Make sure the element is visible & connected
      e.getClientRects().length && (s = i.css(e, "boxSizing", !1, r) === "border-box", a = c in e, a && (f = e[c])), f = parseFloat(f) || 0, f + Vt(
        e,
        t,
        n || (s ? "border" : "content"),
        a,
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
          var o, s, a, f = Ue(t), c = Ft.test(t), p = e.style;
          if (c || (t = Ut(f)), a = i.cssHooks[t] || i.cssHooks[f], n !== void 0) {
            if (s = typeof n, s === "string" && (o = Tt.exec(n)) && o[1] && (n = pn(e, t, o), s = "number"), n == null || n !== n)
              return;
            s === "number" && !c && (n += o && o[3] || (i.cssNumber[f] ? "" : "px")), !A.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (p[t] = "inherit"), (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) && (c ? p.setProperty(t, n) : p[t] = n);
          } else
            return a && "get" in a && (o = a.get(e, !1, r)) !== void 0 ? o : p[t];
        }
      },
      css: function(e, t, n, r) {
        var o, s, a, f = Ue(t), c = Ft.test(t);
        return c || (t = Ut(f)), a = i.cssHooks[t] || i.cssHooks[f], a && "get" in a && (o = a.get(e, !0, n)), o === void 0 && (o = St(e, t, r)), o === "normal" && t in Dn && (o = Dn[t]), n === "" || n ? (s = parseFloat(o), n === !0 || isFinite(s) ? s || 0 : o) : o;
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
          var s, a = Ot(n), f = !A.scrollboxSize() && a.position === "absolute", c = f || o, p = c && i.css(n, "boxSizing", !1, a) === "border-box", w = o ? Vt(
            n,
            t,
            o,
            p,
            a
          ) : 0;
          return p && f && (w -= Math.ceil(
            n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Vt(n, t, "border", !1, a) - 0.5
          )), w && (s = Tt.exec(r)) && (s[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), Mn(n, r, w);
        }
      };
    }), i.cssHooks.marginLeft = _n(
      A.reliableMarginLeft,
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
          var s, a, f = {}, c = 0;
          if (Array.isArray(r)) {
            for (s = Ot(n), a = r.length; c < a; c++)
              f[r[c]] = i.css(n, r[c], !1, s);
            return f;
          }
          return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
        }, e, t, arguments.length > 1);
      }
    });
    function Re(e, t, n, r, o) {
      return new Re.prototype.init(e, t, n, r, o);
    }
    i.Tween = Re, Re.prototype = {
      constructor: Re,
      init: function(e, t, n, r, o, s) {
        this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (i.cssNumber[n] ? "" : "px");
      },
      cur: function() {
        var e = Re.propHooks[this.prop];
        return e && e.get ? e.get(this) : Re.propHooks._default.get(this);
      },
      run: function(e) {
        var t, n = Re.propHooks[this.prop];
        return this.options.duration ? this.pos = t = i.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
        ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Re.propHooks._default.set(this), this;
      }
    }, Re.prototype.init.prototype = Re.prototype, Re.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
        },
        set: function(e) {
          i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[Ut(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, Re.propHooks.scrollTop = Re.propHooks.scrollLeft = {
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
    }, i.fx = Re.prototype.init, i.fx.step = {};
    var mt, Nt, pi = /^(?:toggle|show|hide)$/, gi = /queueHooks$/;
    function Gt() {
      Nt && (D.hidden === !1 && l.requestAnimationFrame ? l.requestAnimationFrame(Gt) : l.setTimeout(Gt, i.fx.interval), i.fx.tick());
    }
    function Pn() {
      return l.setTimeout(function() {
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
      for (var r, o = (Be.tweeners[t] || []).concat(Be.tweeners["*"]), s = 0, a = o.length; s < a; s++)
        if (r = o[s].call(n, t, e))
          return r;
    }
    function vi(e, t, n) {
      var r, o, s, a, f, c, p, w, _ = "width" in t || "height" in t, v = this, E = {}, V = e.style, se = e.nodeType && Rt(e), Z = $.get(e, "fxshow");
      n.queue || (a = i._queueHooks(e, "fx"), a.unqueued == null && (a.unqueued = 0, f = a.empty.fire, a.empty.fire = function() {
        a.unqueued || f();
      }), a.unqueued++, v.always(function() {
        v.always(function() {
          a.unqueued--, i.queue(e, "fx").length || a.empty.fire();
        });
      }));
      for (r in t)
        if (o = t[r], pi.test(o)) {
          if (delete t[r], s = s || o === "toggle", o === (se ? "hide" : "show"))
            if (o === "show" && Z && Z[r] !== void 0)
              se = !0;
            else
              continue;
          E[r] = Z && Z[r] || i.style(e, r);
        }
      if (c = !i.isEmptyObject(t), !(!c && i.isEmptyObject(E))) {
        _ && e.nodeType === 1 && (n.overflow = [V.overflow, V.overflowX, V.overflowY], p = Z && Z.display, p == null && (p = $.get(e, "display")), w = i.css(e, "display"), w === "none" && (p ? w = p : (dt([e], !0), p = e.style.display || p, w = i.css(e, "display"), dt([e]))), (w === "inline" || w === "inline-block" && p != null) && i.css(e, "float") === "none" && (c || (v.done(function() {
          V.display = p;
        }), p == null && (w = V.display, p = w === "none" ? "" : w)), V.display = "inline-block")), n.overflow && (V.overflow = "hidden", v.always(function() {
          V.overflow = n.overflow[0], V.overflowX = n.overflow[1], V.overflowY = n.overflow[2];
        })), c = !1;
        for (r in E)
          c || (Z ? "hidden" in Z && (se = Z.hidden) : Z = $.access(e, "fxshow", { display: p }), s && (Z.hidden = !se), se && dt([e], !0), v.done(function() {
            se || dt([e]), $.remove(e, "fxshow");
            for (r in E)
              i.style(e, r, E[r]);
          })), c = Ln(se ? Z[r] : 0, r, v), r in Z || (Z[r] = c.start, se && (c.end = c.start, c.start = 0));
      }
    }
    function mi(e, t) {
      var n, r, o, s, a;
      for (n in e)
        if (r = Ue(n), o = t[r], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), a = i.cssHooks[r], a && "expand" in a) {
          s = a.expand(s), delete e[r];
          for (n in s)
            n in e || (e[n] = s[n], t[n] = o);
        } else
          t[r] = o;
    }
    function Be(e, t, n) {
      var r, o, s = 0, a = Be.prefilters.length, f = i.Deferred().always(function() {
        delete c.elem;
      }), c = function() {
        if (o)
          return !1;
        for (var _ = mt || Pn(), v = Math.max(0, p.startTime + p.duration - _), E = v / p.duration || 0, V = 1 - E, se = 0, Z = p.tweens.length; se < Z; se++)
          p.tweens[se].run(V);
        return f.notifyWith(e, [p, V, v]), V < 1 && Z ? v : (Z || f.notifyWith(e, [p, 1, 0]), f.resolveWith(e, [p]), !1);
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
          var E = i.Tween(
            e,
            p.opts,
            _,
            v,
            p.opts.specialEasing[_] || p.opts.easing
          );
          return p.tweens.push(E), E;
        },
        stop: function(_) {
          var v = 0, E = _ ? p.tweens.length : 0;
          if (o)
            return this;
          for (o = !0; v < E; v++)
            p.tweens[v].run(1);
          return _ ? (f.notifyWith(e, [p, 1, 0]), f.resolveWith(e, [p, _])) : f.rejectWith(e, [p, _]), this;
        }
      }), w = p.props;
      for (mi(w, p.opts.specialEasing); s < a; s++)
        if (r = Be.prefilters[s].call(p, e, w, p.opts), r)
          return P(r.stop) && (i._queueHooks(p.elem, p.opts.queue).stop = r.stop.bind(r)), r;
      return i.map(w, Ln, p), P(p.opts.start) && p.opts.start.call(e, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), i.fx.timer(
        i.extend(c, {
          elem: e,
          anim: p,
          queue: p.opts.queue
        })
      ), p;
    }
    i.Animation = i.extend(Be, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return pn(n.elem, e, Tt.exec(t), n), n;
        }]
      },
      tweener: function(e, t) {
        P(e) ? (t = e, e = ["*"]) : e = e.match(ye);
        for (var n, r = 0, o = e.length; r < o; r++)
          n = e[r], Be.tweeners[n] = Be.tweeners[n] || [], Be.tweeners[n].unshift(t);
      },
      prefilters: [vi],
      prefilter: function(e, t) {
        t ? Be.prefilters.unshift(e) : Be.prefilters.push(e);
      }
    }), i.speed = function(e, t, n) {
      var r = e && typeof e == "object" ? i.extend({}, e) : {
        complete: n || !n && t || P(e) && e,
        duration: e,
        easing: n && t || t && !P(t) && t
      };
      return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        P(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
      }, r;
    }, i.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Rt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function(e, t, n, r) {
        var o = i.isEmptyObject(e), s = i.speed(t, n, r), a = function() {
          var f = Be(this, i.extend({}, e), s);
          (o || $.get(this, "finish")) && f.stop(!0);
        };
        return a.finish = a, o || s.queue === !1 ? this.each(a) : this.queue(s.queue, a);
      },
      stop: function(e, t, n) {
        var r = function(o) {
          var s = o.stop;
          delete o.stop, s(n);
        };
        return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var o = !0, s = e != null && e + "queueHooks", a = i.timers, f = $.get(this);
          if (s)
            f[s] && f[s].stop && r(f[s]);
          else
            for (s in f)
              f[s] && f[s].stop && gi.test(s) && r(f[s]);
          for (s = a.length; s--; )
            a[s].elem === this && (e == null || a[s].queue === e) && (a[s].anim.stop(n), o = !1, a.splice(s, 1));
          (o || !n) && i.dequeue(this, e);
        });
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = $.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], s = i.timers, a = r ? r.length : 0;
          for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--; )
            s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          for (t = 0; t < a; t++)
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
        var o = l.setTimeout(n, e);
        r.stop = function() {
          l.clearTimeout(o);
        };
      });
    }, function() {
      var e = D.createElement("input"), t = D.createElement("select"), n = t.appendChild(D.createElement("option"));
      e.type = "checkbox", A.checkOn = e.value !== "", A.optSelected = n.selected, e = D.createElement("input"), e.value = "t", e.type = "radio", A.radioValue = e.value === "t";
    }();
    var Rn, Et = i.expr.attrHandle;
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
          if ((s !== 1 || !i.isXMLDoc(e)) && (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? Rn : void 0)), n !== void 0) {
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
            if (!A.radioValue && t === "radio" && I(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0, o = t && t.match(ye);
        if (o && e.nodeType === 1)
          for (; n = o[r++]; )
            e.removeAttribute(n);
      }
    }), Rn = {
      set: function(e, t, n) {
        return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = Et[t] || i.find.attr;
      Et[t] = function(r, o, s) {
        var a, f, c = o.toLowerCase();
        return s || (f = Et[c], Et[c] = a, a = n(r, o, s) != null ? c : null, Et[c] = f), a;
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
    }), A.optSelected || (i.propHooks.selected = {
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
      var t = e.match(ye) || [];
      return t.join(" ");
    }
    function ut(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Qt(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(ye) || [] : [];
    }
    i.fn.extend({
      addClass: function(e) {
        var t, n, r, o, s, a;
        return P(e) ? this.each(function(f) {
          i(this).addClass(e.call(this, f, ut(this)));
        }) : (t = Qt(e), t.length ? this.each(function() {
          if (r = ut(this), n = this.nodeType === 1 && " " + lt(r) + " ", n) {
            for (s = 0; s < t.length; s++)
              o = t[s], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            a = lt(n), r !== a && this.setAttribute("class", a);
          }
        }) : this);
      },
      removeClass: function(e) {
        var t, n, r, o, s, a;
        return P(e) ? this.each(function(f) {
          i(this).removeClass(e.call(this, f, ut(this)));
        }) : arguments.length ? (t = Qt(e), t.length ? this.each(function() {
          if (r = ut(this), n = this.nodeType === 1 && " " + lt(r) + " ", n) {
            for (s = 0; s < t.length; s++)
              for (o = t[s]; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            a = lt(n), r !== a && this.setAttribute("class", a);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(e, t) {
        var n, r, o, s, a = typeof e, f = a === "string" || Array.isArray(e);
        return P(e) ? this.each(function(c) {
          i(this).toggleClass(
            e.call(this, c, ut(this), t),
            t
          );
        }) : typeof t == "boolean" && f ? t ? this.addClass(e) : this.removeClass(e) : (n = Qt(e), this.each(function() {
          if (f)
            for (s = i(this), o = 0; o < n.length; o++)
              r = n[o], s.hasClass(r) ? s.removeClass(r) : s.addClass(r);
          else
            (e === void 0 || a === "boolean") && (r = ut(this), r && $.set(this, "__className__", r), this.setAttribute && this.setAttribute(
              "class",
              r || e === !1 ? "" : $.get(this, "__className__") || ""
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
        return arguments.length ? (r = P(e), this.each(function(s) {
          var a;
          this.nodeType === 1 && (r ? a = e.call(this, s, i(this).val()) : a = e, a == null ? a = "" : typeof a == "number" ? a += "" : Array.isArray(a) && (a = i.map(a, function(f) {
            return f == null ? "" : f + "";
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, a, "value") === void 0) && (this.value = a));
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
            var t, n, r, o = e.options, s = e.selectedIndex, a = e.type === "select-one", f = a ? null : [], c = a ? s + 1 : o.length;
            for (s < 0 ? r = c : r = a ? s : 0; r < c; r++)
              if (n = o[r], (n.selected || r === s) && // Don't return options that are disabled or in a disabled optgroup
              !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                if (t = i(n).val(), a)
                  return t;
                f.push(t);
              }
            return f;
          },
          set: function(e, t) {
            for (var n, r, o = e.options, s = i.makeArray(t), a = o.length; a--; )
              r = o[a], (r.selected = i.inArray(i.valHooks.option.get(r), s) > -1) && (n = !0);
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
      }, A.checkOn || (i.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      });
    });
    var kt = l.location, Hn = { guid: Date.now() }, Jt = /\?/;
    i.parseXML = function(e) {
      var t, n;
      if (!e || typeof e != "string")
        return null;
      try {
        t = new l.DOMParser().parseFromString(e, "text/xml");
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
        var o, s, a, f, c, p, w, _, v = [n || D], E = N.call(e, "type") ? e.type : e, V = N.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = _ = a = n = n || D, !(n.nodeType === 3 || n.nodeType === 8) && !On.test(E + i.event.triggered) && (E.indexOf(".") > -1 && (V = E.split("."), E = V.shift(), V.sort()), c = E.indexOf(":") < 0 && "on" + E, e = e[i.expando] ? e : new i.Event(E, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = V.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + V.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), w = i.event.special[E] || {}, !(!r && w.trigger && w.trigger.apply(n, t) === !1))) {
          if (!r && !w.noBubble && !q(n)) {
            for (f = w.delegateType || E, On.test(f + E) || (s = s.parentNode); s; s = s.parentNode)
              v.push(s), a = s;
            a === (n.ownerDocument || D) && v.push(a.defaultView || a.parentWindow || l);
          }
          for (o = 0; (s = v[o++]) && !e.isPropagationStopped(); )
            _ = s, e.type = o > 1 ? f : w.bindType || E, p = ($.get(s, "events") || /* @__PURE__ */ Object.create(null))[e.type] && $.get(s, "handle"), p && p.apply(s, t), p = c && s[c], p && p.apply && bt(s) && (e.result = p.apply(s, t), e.result === !1 && e.preventDefault());
          return e.type = E, !r && !e.isDefaultPrevented() && (!w._default || w._default.apply(v.pop(), t) === !1) && bt(n) && c && P(n[E]) && !q(n) && (a = n[c], a && (n[c] = null), i.event.triggered = E, e.isPropagationStopped() && _.addEventListener(E, Nn), n[E](), e.isPropagationStopped() && _.removeEventListener(E, Nn), i.event.triggered = void 0, a && (n[c] = a)), e.result;
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
        i.each(t, function(s, a) {
          n || bi.test(e) ? r(e, a) : Kt(
            e + "[" + (typeof a == "object" && a != null ? s : "") + "]",
            a,
            n,
            r
          );
        });
      else if (!n && ve(t) === "object")
        for (o in t)
          Kt(e + "[" + o + "]", t[o], n, r);
      else
        r(e, t);
    }
    i.param = function(e, t) {
      var n, r = [], o = function(s, a) {
        var f = P(a) ? a() : a;
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
    var _i = /%20/g, Si = /#.*$/, Ei = /([?&])_=[^&]*/, ki = /^(.*?):[ \t]*([^\r\n]*)$/mg, Di = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mi = /^(?:GET|HEAD)$/, Ai = /^\/\//, In = {}, Zt = {}, zn = "*/".concat("*"), en = D.createElement("a");
    en.href = kt.href;
    function qn(e) {
      return function(t, n) {
        typeof t != "string" && (n = t, t = "*");
        var r, o = 0, s = t.toLowerCase().match(ye) || [];
        if (P(n))
          for (; r = s[o++]; )
            r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }
    function Wn(e, t, n, r) {
      var o = {}, s = e === Zt;
      function a(f) {
        var c;
        return o[f] = !0, i.each(e[f] || [], function(p, w) {
          var _ = w(t, n, r);
          if (typeof _ == "string" && !s && !o[_])
            return t.dataTypes.unshift(_), a(_), !1;
          if (s)
            return !(c = _);
        }), c;
      }
      return a(t.dataTypes[0]) || !o["*"] && a("*");
    }
    function tn(e, t) {
      var n, r, o = i.ajaxSettings.flatOptions || {};
      for (n in t)
        t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function Pi(e, t, n) {
      for (var r, o, s, a, f = e.contents, c = e.dataTypes; c[0] === "*"; )
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
          a || (a = o);
        }
        s = s || a;
      }
      if (s)
        return s !== c[0] && c.unshift(s), n[s];
    }
    function Li(e, t, n, r) {
      var o, s, a, f, c, p = {}, w = e.dataTypes.slice();
      if (w[1])
        for (a in e.converters)
          p[a.toLowerCase()] = e.converters[a];
      for (s = w.shift(); s; )
        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = s, s = w.shift(), s) {
          if (s === "*")
            s = c;
          else if (c !== "*" && c !== s) {
            if (a = p[c + " " + s] || p["* " + s], !a) {
              for (o in p)
                if (f = o.split(" "), f[1] === s && (a = p[c + " " + f[0]] || p["* " + f[0]], a)) {
                  a === !0 ? a = p[o] : p[o] !== !0 && (s = f[0], w.unshift(f[1]));
                  break;
                }
            }
            if (a !== !0)
              if (a && e.throws)
                t = a(t);
              else
                try {
                  t = a(t);
                } catch (_) {
                  return {
                    state: "parsererror",
                    error: a ? _ : "No conversion from " + c + " to " + s
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
          "*": zn,
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
      ajaxPrefilter: qn(In),
      ajaxTransport: qn(Zt),
      // Main method
      ajax: function(e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var n, r, o, s, a, f, c, p, w, _, v = i.ajaxSetup({}, t), E = v.context || v, V = v.context && (E.nodeType || E.jquery) ? i(E) : i.event, se = i.Deferred(), Z = i.Callbacks("once memory"), Te = v.statusCode || {}, we = {}, Ve = {}, Ge = "canceled", re = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(le) {
            var me;
            if (c) {
              if (!s)
                for (s = {}; me = ki.exec(o); )
                  s[me[1].toLowerCase() + " "] = (s[me[1].toLowerCase() + " "] || []).concat(me[2]);
              me = s[le.toLowerCase() + " "];
            }
            return me == null ? null : me.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return c ? o : null;
          },
          // Caches the header
          setRequestHeader: function(le, me) {
            return c == null && (le = Ve[le.toLowerCase()] = Ve[le.toLowerCase()] || le, we[le] = me), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(le) {
            return c == null && (v.mimeType = le), this;
          },
          // Status-dependent callbacks
          statusCode: function(le) {
            var me;
            if (le)
              if (c)
                re.always(le[re.status]);
              else
                for (me in le)
                  Te[me] = [Te[me], le[me]];
            return this;
          },
          // Cancel the request
          abort: function(le) {
            var me = le || Ge;
            return n && n.abort(me), ct(0, me), this;
          }
        };
        if (se.promise(re), v.url = ((e || v.url || kt.href) + "").replace(Ai, kt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(ye) || [""], v.crossDomain == null) {
          f = D.createElement("a");
          try {
            f.href = v.url, f.href = f.href, v.crossDomain = en.protocol + "//" + en.host != f.protocol + "//" + f.host;
          } catch {
            v.crossDomain = !0;
          }
        }
        if (v.data && v.processData && typeof v.data != "string" && (v.data = i.param(v.data, v.traditional)), Wn(In, v, t, re), c)
          return re;
        p = i.event && v.global, p && i.active++ === 0 && i.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Mi.test(v.type), r = v.url.replace(Si, ""), v.hasContent ? v.data && v.processData && (v.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (v.data = v.data.replace(_i, "+")) : (_ = v.url.slice(r.length), v.data && (v.processData || typeof v.data == "string") && (r += (Jt.test(r) ? "&" : "?") + v.data, delete v.data), v.cache === !1 && (r = r.replace(Ei, "$1"), _ = (Jt.test(r) ? "&" : "?") + "_=" + Hn.guid++ + _), v.url = r + _), v.ifModified && (i.lastModified[r] && re.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && re.setRequestHeader("If-None-Match", i.etag[r])), (v.data && v.hasContent && v.contentType !== !1 || t.contentType) && re.setRequestHeader("Content-Type", v.contentType), re.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + (v.dataTypes[0] !== "*" ? ", " + zn + "; q=0.01" : "") : v.accepts["*"]
        );
        for (w in v.headers)
          re.setRequestHeader(w, v.headers[w]);
        if (v.beforeSend && (v.beforeSend.call(E, re, v) === !1 || c))
          return re.abort();
        if (Ge = "abort", Z.add(v.complete), re.done(v.success), re.fail(v.error), n = Wn(Zt, v, t, re), !n)
          ct(-1, "No Transport");
        else {
          if (re.readyState = 1, p && V.trigger("ajaxSend", [re, v]), c)
            return re;
          v.async && v.timeout > 0 && (a = l.setTimeout(function() {
            re.abort("timeout");
          }, v.timeout));
          try {
            c = !1, n.send(we, ct);
          } catch (le) {
            if (c)
              throw le;
            ct(-1, le);
          }
        }
        function ct(le, me, Mt, rn) {
          var Qe, At, Je, it, rt, qe = me;
          c || (c = !0, a && l.clearTimeout(a), n = void 0, o = rn || "", re.readyState = le > 0 ? 4 : 0, Qe = le >= 200 && le < 300 || le === 304, Mt && (it = Pi(v, re, Mt)), !Qe && i.inArray("script", v.dataTypes) > -1 && i.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {
          }), it = Li(v, it, re, Qe), Qe ? (v.ifModified && (rt = re.getResponseHeader("Last-Modified"), rt && (i.lastModified[r] = rt), rt = re.getResponseHeader("etag"), rt && (i.etag[r] = rt)), le === 204 || v.type === "HEAD" ? qe = "nocontent" : le === 304 ? qe = "notmodified" : (qe = it.state, At = it.data, Je = it.error, Qe = !Je)) : (Je = qe, (le || !qe) && (qe = "error", le < 0 && (le = 0))), re.status = le, re.statusText = (me || qe) + "", Qe ? se.resolveWith(E, [At, qe, re]) : se.rejectWith(E, [re, qe, Je]), re.statusCode(Te), Te = void 0, p && V.trigger(
            Qe ? "ajaxSuccess" : "ajaxError",
            [re, v, Qe ? At : Je]
          ), Z.fireWith(E, [re, qe]), p && (V.trigger("ajaxComplete", [re, v]), --i.active || i.event.trigger("ajaxStop")));
        }
        return re;
      },
      getJSON: function(e, t, n) {
        return i.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return i.get(e, void 0, t, "script");
      }
    }), i.each(["get", "post"], function(e, t) {
      i[t] = function(n, r, o, s) {
        return P(r) && (s = s || o, o = r, r = void 0), i.ajax(i.extend({
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
        return this[0] && (P(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var n = this; n.firstElementChild; )
            n = n.firstElementChild;
          return n;
        }).append(this)), this;
      },
      wrapInner: function(e) {
        return P(e) ? this.each(function(t) {
          i(this).wrapInner(e.call(this, t));
        }) : this.each(function() {
          var t = i(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function(e) {
        var t = P(e);
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
        return new l.XMLHttpRequest();
      } catch {
      }
    };
    var Ri = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, Dt = i.ajaxSettings.xhr();
    A.cors = !!Dt && "withCredentials" in Dt, A.ajax = Dt = !!Dt, i.ajaxTransport(function(e) {
      var t, n;
      if (A.cors || Dt && !e.crossDomain)
        return {
          send: function(r, o) {
            var s, a = e.xhr();
            if (a.open(
              e.type,
              e.url,
              e.async,
              e.username,
              e.password
            ), e.xhrFields)
              for (s in e.xhrFields)
                a[s] = e.xhrFields[s];
            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
            for (s in r)
              a.setRequestHeader(s, r[s]);
            t = function(f) {
              return function() {
                t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, f === "abort" ? a.abort() : f === "error" ? typeof a.status != "number" ? o(0, "error") : o(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  a.status,
                  a.statusText
                ) : o(
                  Ri[a.status] || a.status,
                  a.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (a.responseType || "text") !== "text" || typeof a.responseText != "string" ? { binary: a.response } : { text: a.responseText },
                  a.getAllResponseHeaders()
                ));
              };
            }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), a.onabort !== void 0 ? a.onabort = n : a.onreadystatechange = function() {
              a.readyState === 4 && l.setTimeout(function() {
                t && n();
              });
            }, t = t("abort");
            try {
              a.send(e.hasContent && e.data || null);
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
            }), D.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
    var Xn = [], nn = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Xn.pop() || i.expando + "_" + Hn.guid++;
        return this[e] = !0, e;
      }
    }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r, o, s, a = e.jsonp !== !1 && (nn.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && nn.test(e.data) && "data");
      if (a || e.dataTypes[0] === "jsonp")
        return r = e.jsonpCallback = P(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(nn, "$1" + r) : e.jsonp !== !1 && (e.url += (Jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
          return s || i.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = l[r], l[r] = function() {
          s = arguments;
        }, n.always(function() {
          o === void 0 ? i(l).removeProp(r) : l[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Xn.push(r)), s && P(o) && o(s[0]), s = o = void 0;
        }), "script";
    }), A.createHTMLDocument = function() {
      var e = D.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
    }(), i.parseHTML = function(e, t, n) {
      if (typeof e != "string")
        return [];
      typeof t == "boolean" && (n = t, t = !1);
      var r, o, s;
      return t || (A.createHTMLDocument ? (t = D.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = D.location.href, t.head.appendChild(r)) : t = D), o = $e.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = yn([e], t, s), s && s.length && i(s).remove(), i.merge([], o.childNodes));
    }, i.fn.load = function(e, t, n) {
      var r, o, s, a = this, f = e.indexOf(" ");
      return f > -1 && (r = lt(e.slice(f)), e = e.slice(0, f)), P(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), a.length > 0 && i.ajax({
        url: e,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(c) {
        s = arguments, a.html(r ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          i("<div>").append(i.parseHTML(c)).find(r)
        ) : (
          // Otherwise use the full result
          c
        ));
      }).always(n && function(c, p) {
        a.each(function() {
          n.apply(this, s || [c.responseText, p, c]);
        });
      }), this;
    }, i.expr.pseudos.animated = function(e) {
      return i.grep(i.timers, function(t) {
        return e === t.elem;
      }).length;
    }, i.offset = {
      setOffset: function(e, t, n) {
        var r, o, s, a, f, c, p, w = i.css(e, "position"), _ = i(e), v = {};
        w === "static" && (e.style.position = "relative"), f = _.offset(), s = i.css(e, "top"), c = i.css(e, "left"), p = (w === "absolute" || w === "fixed") && (s + c).indexOf("auto") > -1, p ? (r = _.position(), a = r.top, o = r.left) : (a = parseFloat(s) || 0, o = parseFloat(c) || 0), P(t) && (t = t.call(e, n, i.extend({}, f))), t.top != null && (v.top = t.top - f.top + a), t.left != null && (v.left = t.left - f.left + o), "using" in t ? t.using.call(e, v) : _.css(v);
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
        return Ze(this, function(o, s, a) {
          var f;
          if (q(o) ? f = o : o.nodeType === 9 && (f = o.defaultView), a === void 0)
            return f ? f[t] : o[s];
          f ? f.scrollTo(
            n ? f.pageXOffset : a,
            n ? a : f.pageYOffset
          ) : o[s] = a;
        }, e, r, arguments.length);
      };
    }), i.each(["top", "left"], function(e, t) {
      i.cssHooks[t] = _n(
        A.pixelPosition,
        function(n, r) {
          if (r)
            return r = St(n, t), Yt.test(r) ? i(n).position()[t] + "px" : r;
        }
      );
    }), i.each({ Height: "height", Width: "width" }, function(e, t) {
      i.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        i.fn[r] = function(o, s) {
          var a = arguments.length && (n || typeof o != "boolean"), f = n || (o === !0 || s === !0 ? "margin" : "border");
          return Ze(this, function(c, p, w) {
            var _;
            return q(c) ? r.indexOf("outer") === 0 ? c["inner" + e] : c.document.documentElement["client" + e] : c.nodeType === 9 ? (_ = c.documentElement, Math.max(
              c.body["scroll" + e],
              _["scroll" + e],
              c.body["offset" + e],
              _["offset" + e],
              _["client" + e]
            )) : w === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              i.css(c, p, f)
            ) : (
              // Set width or height on the element
              i.style(c, p, w, f)
            );
          }, t, a ? o : void 0, a);
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
    var Hi = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    i.proxy = function(e, t) {
      var n, r, o;
      if (typeof t == "string" && (n = e[t], t = e, e = n), !!P(e))
        return r = x.call(arguments, 2), o = function() {
          return e.apply(t || this, r.concat(x.call(arguments)));
        }, o.guid = e.guid = e.guid || i.guid++, o;
    }, i.holdReady = function(e) {
      e ? i.readyWait++ : i.ready(!0);
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = I, i.isFunction = P, i.isWindow = q, i.camelCase = Ue, i.type = ve, i.now = Date.now, i.isNumeric = function(e) {
      var t = i.type(e);
      return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(e - parseFloat(e));
    }, i.trim = function(e) {
      return e == null ? "" : (e + "").replace(Hi, "$1");
    };
    var Oi = l.jQuery, Ni = l.$;
    return i.noConflict = function(e) {
      return l.$ === i && (l.$ = Ni), e && l.jQuery === i && (l.jQuery = Oi), i;
    }, typeof d > "u" && (l.jQuery = l.$ = i), i;
  });
})(Un);
var Yi = Un.exports;
const ae = /* @__PURE__ */ Fn(Yi);
var Vn = { exports: {} };
(function(Oe) {
  (function(l) {
    var d = oe(), C = ve(), k = ge(), x = Se(), R = {
      // Default is to fail on error, no placeholder
      imagePlaceholder: void 0,
      // Default cache bust is false, it will use the cache
      cacheBust: !1
    }, S = {
      toSvg: m,
      toPng: M,
      toJpeg: N,
      toBlob: z,
      toPixelData: b,
      impl: {
        fontFaces: k,
        images: x,
        util: d,
        inliner: C,
        options: {}
      }
    };
    Oe.exports = S;
    function m(i, B) {
      return B = B || {}, X(B), Promise.resolve(i).then(function(K) {
        return P(K, B.filter, !0);
      }).then(q).then(D).then(I).then(function(K) {
        return Q(
          K,
          B.width || d.width(i),
          B.height || d.height(i)
        );
      });
      function I(K) {
        return B.bgcolor && (K.style.backgroundColor = B.bgcolor), B.width && (K.style.width = B.width + "px"), B.height && (K.style.height = B.height + "px"), B.style && Object.keys(B.style).forEach(function(ue) {
          K.style[ue] = B.style[ue];
        }), K;
      }
    }
    function b(i, B) {
      return A(i, B || {}).then(function(I) {
        return I.getContext("2d").getImageData(
          0,
          0,
          d.width(i),
          d.height(i)
        ).data;
      });
    }
    function M(i, B) {
      return A(i, B || {}).then(function(I) {
        return I.toDataURL();
      });
    }
    function N(i, B) {
      return B = B || {}, A(i, B).then(function(I) {
        return I.toDataURL("image/jpeg", B.quality || 1);
      });
    }
    function z(i, B) {
      return A(i, B || {}).then(d.canvasToBlob);
    }
    function X(i) {
      typeof i.imagePlaceholder > "u" ? S.impl.options.imagePlaceholder = R.imagePlaceholder : S.impl.options.imagePlaceholder = i.imagePlaceholder, typeof i.cacheBust > "u" ? S.impl.options.cacheBust = R.cacheBust : S.impl.options.cacheBust = i.cacheBust;
    }
    function A(i, B) {
      return m(i, B).then(d.makeImage).then(d.delay(100)).then(function(K) {
        var ue = I(i);
        return ue.getContext("2d").drawImage(K, 0, 0), ue;
      });
      function I(K) {
        var ue = document.createElement("canvas");
        if (ue.width = B.width || d.width(K), ue.height = B.height || d.height(K), B.bgcolor) {
          var ie = ue.getContext("2d");
          ie.fillStyle = B.bgcolor, ie.fillRect(0, 0, ue.width, ue.height);
        }
        return ue;
      }
    }
    function P(i, B, I) {
      if (!I && B && !B(i))
        return Promise.resolve();
      return Promise.resolve(i).then(K).then(function(j) {
        return ue(i, j, B);
      }).then(function(j) {
        return ie(i, j);
      });
      function K(j) {
        return j instanceof HTMLCanvasElement ? d.makeImage(j.toDataURL()) : j.cloneNode(!1);
      }
      function ue(j, J, Ee) {
        var Ne = j.childNodes;
        if (Ne.length === 0)
          return Promise.resolve(J);
        return he(J, d.asArray(Ne), Ee).then(function() {
          return J;
        });
        function he(Xe, xe, be) {
          var Me = Promise.resolve();
          return xe.forEach(function($e) {
            Me = Me.then(function() {
              return P($e, be);
            }).then(function(ke) {
              ke && Xe.appendChild(ke);
            });
          }), Me;
        }
      }
      function ie(j, J) {
        if (!(J instanceof Element))
          return J;
        return Promise.resolve().then(Ee).then(Ne).then(he).then(Xe).then(function() {
          return J;
        });
        function Ee() {
          xe(window.getComputedStyle(j), J.style);
          function xe(be, Me) {
            be.cssText ? Me.cssText = be.cssText : $e(be, Me);
            function $e(ke, je) {
              d.asArray(ke).forEach(function(Y) {
                je.setProperty(
                  Y,
                  ke.getPropertyValue(Y),
                  ke.getPropertyPriority(Y)
                );
              });
            }
          }
        }
        function Ne() {
          [":before", ":after"].forEach(function(be) {
            xe(be);
          });
          function xe(be) {
            var Me = window.getComputedStyle(j, be), $e = Me.getPropertyValue("content");
            if ($e === "" || $e === "none")
              return;
            var ke = d.uid();
            J.className = J.className + " " + ke;
            var je = document.createElement("style");
            je.appendChild(Y(ke, be, Me)), J.appendChild(je);
            function Y(ee, de, ce) {
              var Ce = "." + ee + ":" + de, ye = ce.cssText ? wt(ce) : Fe(ce);
              return document.createTextNode(Ce + "{" + ye + "}");
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
        function he() {
          j instanceof HTMLTextAreaElement && (J.innerHTML = j.value), j instanceof HTMLInputElement && J.setAttribute("value", j.value);
        }
        function Xe() {
          J instanceof SVGElement && (J.setAttribute("xmlns", "http://www.w3.org/2000/svg"), J instanceof SVGRectElement && ["width", "height"].forEach(function(xe) {
            var be = J.getAttribute(xe);
            be && J.style.setProperty(xe, be);
          }));
        }
      }
    }
    function q(i) {
      return k.resolveAll().then(function(B) {
        var I = document.createElement("style");
        return i.appendChild(I), I.appendChild(document.createTextNode(B)), i;
      });
    }
    function D(i) {
      return x.inlineAll(i).then(function() {
        return i;
      });
    }
    function Q(i, B, I) {
      return Promise.resolve(i).then(function(K) {
        return K.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(K);
      }).then(d.escapeXhtml).then(function(K) {
        return '<foreignObject x="0" y="0" width="100%" height="100%">' + K + "</foreignObject>";
      }).then(function(K) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + B + '" height="' + I + '">' + K + "</svg>";
      }).then(function(K) {
        return "data:image/svg+xml;charset=utf-8," + K;
      });
    }
    function oe() {
      return {
        escape: Xe,
        parseExtension: B,
        mimeType: I,
        dataAsUrl: he,
        isDataUrl: K,
        canvasToBlob: ie,
        resolveUrl: j,
        getAndEncode: Ne,
        uid: J(),
        delay: xe,
        asArray: be,
        escapeXhtml: Me,
        makeImage: Ee,
        width: $e,
        height: ke
      };
      function i() {
        var Y = "application/font-woff", ee = "image/jpeg";
        return {
          woff: Y,
          woff2: Y,
          ttf: "application/font-truetype",
          eot: "application/vnd.ms-fontobject",
          png: "image/png",
          jpg: ee,
          jpeg: ee,
          gif: "image/gif",
          tiff: "image/tiff",
          svg: "image/svg+xml"
        };
      }
      function B(Y) {
        var ee = /\.([^\.\/]*?)$/g.exec(Y);
        return ee ? ee[1] : "";
      }
      function I(Y) {
        var ee = B(Y).toLowerCase();
        return i()[ee] || "";
      }
      function K(Y) {
        return Y.search(/^(data:)/) !== -1;
      }
      function ue(Y) {
        return new Promise(function(ee) {
          for (var de = window.atob(Y.toDataURL().split(",")[1]), ce = de.length, Ce = new Uint8Array(ce), ye = 0; ye < ce; ye++)
            Ce[ye] = de.charCodeAt(ye);
          ee(new Blob([Ce], {
            type: "image/png"
          }));
        });
      }
      function ie(Y) {
        return Y.toBlob ? new Promise(function(ee) {
          Y.toBlob(ee);
        }) : ue(Y);
      }
      function j(Y, ee) {
        var de = document.implementation.createHTMLDocument(), ce = de.createElement("base");
        de.head.appendChild(ce);
        var Ce = de.createElement("a");
        return de.body.appendChild(Ce), ce.href = ee, Ce.href = Y, Ce.href;
      }
      function J() {
        var Y = 0;
        return function() {
          return "u" + ee() + Y++;
          function ee() {
            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
          }
        };
      }
      function Ee(Y) {
        return new Promise(function(ee, de) {
          var ce = new Image();
          ce.onload = function() {
            ee(ce);
          }, ce.onerror = de, ce.src = Y;
        });
      }
      function Ne(Y) {
        var ee = 3e4;
        return S.impl.options.cacheBust && (Y += (/\?/.test(Y) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), new Promise(function(de) {
          var ce = new XMLHttpRequest();
          ce.onreadystatechange = wt, ce.ontimeout = Fe, ce.responseType = "blob", ce.timeout = ee, ce.open("GET", Y, !0), ce.send();
          var Ce;
          if (S.impl.options.imagePlaceholder) {
            var ye = S.impl.options.imagePlaceholder.split(/,/);
            ye && ye[1] && (Ce = ye[1]);
          }
          function wt() {
            if (ce.readyState === 4) {
              if (ce.status !== 200) {
                Ce ? de(Ce) : Ae("cannot fetch resource: " + Y + ", status: " + ce.status);
                return;
              }
              var Ie = new FileReader();
              Ie.onloadend = function() {
                var st = Ie.result.split(/,/)[1];
                de(st);
              }, Ie.readAsDataURL(ce.response);
            }
          }
          function Fe() {
            Ce ? de(Ce) : Ae("timeout of " + ee + "ms occured while fetching resource: " + Y);
          }
          function Ae(Ie) {
            console.error(Ie), de("");
          }
        });
      }
      function he(Y, ee) {
        return "data:" + ee + ";base64," + Y;
      }
      function Xe(Y) {
        return Y.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
      }
      function xe(Y) {
        return function(ee) {
          return new Promise(function(de) {
            setTimeout(function() {
              de(ee);
            }, Y);
          });
        };
      }
      function be(Y) {
        for (var ee = [], de = Y.length, ce = 0; ce < de; ce++)
          ee.push(Y[ce]);
        return ee;
      }
      function Me(Y) {
        return Y.replace(/#/g, "%23").replace(/\n/g, "%0A");
      }
      function $e(Y) {
        var ee = je(Y, "border-left-width"), de = je(Y, "border-right-width");
        return Y.scrollWidth + ee + de;
      }
      function ke(Y) {
        var ee = je(Y, "border-top-width"), de = je(Y, "border-bottom-width");
        return Y.scrollHeight + ee + de;
      }
      function je(Y, ee) {
        var de = window.getComputedStyle(Y).getPropertyValue(ee);
        return parseFloat(de.replace("px", ""));
      }
    }
    function ve() {
      var i = /url\(['"]?([^'"]+?)['"]?\)/g;
      return {
        inlineAll: ue,
        shouldProcess: B,
        impl: {
          readUrls: I,
          inline: K
        }
      };
      function B(ie) {
        return ie.search(i) !== -1;
      }
      function I(ie) {
        for (var j = [], J; (J = i.exec(ie)) !== null; )
          j.push(J[1]);
        return j.filter(function(Ee) {
          return !d.isDataUrl(Ee);
        });
      }
      function K(ie, j, J, Ee) {
        return Promise.resolve(j).then(function(he) {
          return J ? d.resolveUrl(he, J) : he;
        }).then(Ee || d.getAndEncode).then(function(he) {
          return d.dataAsUrl(he, d.mimeType(j));
        }).then(function(he) {
          return ie.replace(Ne(j), "$1" + he + "$3");
        });
        function Ne(he) {
          return new RegExp(`(url\\(['"]?)(` + d.escape(he) + `)(['"]?\\))`, "g");
        }
      }
      function ue(ie, j, J) {
        if (Ee())
          return Promise.resolve(ie);
        return Promise.resolve(ie).then(I).then(function(Ne) {
          var he = Promise.resolve(ie);
          return Ne.forEach(function(Xe) {
            he = he.then(function(xe) {
              return K(xe, Xe, j, J);
            });
          }), he;
        });
        function Ee() {
          return !B(ie);
        }
      }
    }
    function ge() {
      return {
        resolveAll: i,
        impl: {
          readAll: B
        }
      };
      function i() {
        return B().then(function(I) {
          return Promise.all(
            I.map(function(K) {
              return K.resolve();
            })
          );
        }).then(function(I) {
          return I.join(`
`);
        });
      }
      function B() {
        return Promise.resolve(d.asArray(document.styleSheets)).then(K).then(I).then(function(ie) {
          return ie.map(ue);
        });
        function I(ie) {
          return ie.filter(function(j) {
            return j.type === CSSRule.FONT_FACE_RULE;
          }).filter(function(j) {
            return C.shouldProcess(j.style.getPropertyValue("src"));
          });
        }
        function K(ie) {
          var j = [];
          return ie.forEach(function(J) {
            try {
              d.asArray(J.cssRules || []).forEach(j.push.bind(j));
            } catch (Ee) {
              console.log("Error while reading CSS rules from " + J.href, Ee.toString());
            }
          }), j;
        }
        function ue(ie) {
          return {
            resolve: function() {
              var J = (ie.parentStyleSheet || {}).href;
              return C.inlineAll(ie.cssText, J);
            },
            src: function() {
              return ie.style.getPropertyValue("src");
            }
          };
        }
      }
    }
    function Se() {
      return {
        inlineAll: B,
        impl: {
          newImage: i
        }
      };
      function i(I) {
        return {
          inline: K
        };
        function K(ue) {
          return d.isDataUrl(I.src) ? Promise.resolve() : Promise.resolve(I.src).then(ue || d.getAndEncode).then(function(ie) {
            return d.dataAsUrl(ie, d.mimeType(I.src));
          }).then(function(ie) {
            return new Promise(function(j, J) {
              I.onload = j, I.onerror = J, I.src = ie;
            });
          });
        }
      }
      function B(I) {
        if (!(I instanceof Element))
          return Promise.resolve(I);
        return K(I).then(function() {
          return I instanceof HTMLImageElement ? i(I).inline() : Promise.all(
            d.asArray(I.childNodes).map(function(ue) {
              return B(ue);
            })
          );
        });
        function K(ue) {
          var ie = ue.style.getPropertyValue("background");
          return ie ? C.inlineAll(ie).then(function(j) {
            ue.style.setProperty(
              "background",
              j,
              ue.style.getPropertyPriority("background")
            );
          }).then(function() {
            return ue;
          }) : Promise.resolve(ue);
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
  getMouseRelativeXy({ clientX: l, clientY: d }) {
    let { left: C, top: k } = this.canvas.getBoundingClientRect(), x = l - C, R = d - k;
    return {
      x,
      y: R
    };
  }
  triggerEvent(l, d) {
    l.forEach((C) => {
      C(d);
    });
  }
  on(l, d) {
    switch (l) {
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
  off(l, d) {
    switch (l) {
      case "regionDragging":
        this.regionDraggingCallback = this.regionDraggingCallback.filter(
          (C) => C !== d
        );
        break;
      case "regionDragStart":
        this.regionDragStartCallback = this.regionDragStartCallback.filter(
          (C) => C !== d
        );
        break;
      case "regionDragEnd":
        this.regionDragEndCallback = this.regionDragEndCallback.filter(
          (C) => C !== d
        );
        break;
      case "screenshotGenerated":
        this.screenshotGeneratedCallback = this.screenshotGeneratedCallback.filter((C) => C !== d);
        break;
      case "toolsCanvasCreated":
        this.toolsCanvasCreatedCallback = this.toolsCanvasCreatedCallback.filter((C) => C !== d);
        break;
      case "closed":
        this.closedCallback = this.closedCallback.filter(
          (C) => C !== d
        );
        break;
      case "successCreated":
        this.successCreatedCallback = this.successCreatedCallback.filter(
          (C) => C !== d
        );
        break;
      case "errorCreated":
        this.errorCreatedCallback = this.errorCreatedCallback.filter(
          (C) => C !== d
        );
        break;
      case "screenshotDownload":
        this.screenshotDownloadCallback = this.screenshotDownloadCallback.filter((C) => C !== d);
        break;
    }
  }
}
class Vi extends fn {
  constructor(l = {}) {
    var C, k, x;
    super(l), this.canvas = null, this.ctx = null, this.startX = 0, this.startY = 0, this.endX = 0, this.endY = 0, this.regionColor = l.regionColor, this.screenshot = l.screenshot, this.initialRegion = l.initialRegion;
    let d = {
      show: !0,
      color: "#ffffff",
      fontSize: 14
    };
    this.regionSizeIndicator = l.regionSizeIndicator ?? d, (C = this.regionSizeIndicator).show ?? (C.show = d.show), (k = this.regionSizeIndicator).color ?? (k.color = d.color), (x = this.regionSizeIndicator).fontSize ?? (x.fontSize = d.fontSize), this.maskColor = l.maskColor ?? "rgba(0, 0, 0, 0.5)";
  }
  init() {
    this.canvas = document.createElement("canvas"), this.canvas.width = innerWidth, this.canvas.height = innerHeight, this.canvas.style.cssText = "cursor:crosshair;position:fixed;top:0;left:0;z-index:9999", document.body.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ), this.ctx.fillStyle = this.maskColor, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.triggerEvent(this.successCreatedCallback);
    let l = this;
    if (this.initialRegion) {
      let { left: d, top: C, width: k, height: x } = this.initialRegion, R = Math.max(d, 0), S = Math.max(C, 0), m = Math.min(k + d, innerWidth), b = Math.min(x + C, innerHeight), M = {
        startX: R,
        startY: S,
        endX: m,
        endY: b
      };
      l.triggerEvent(l.regionDragStartCallback, M), l.setRegionSize(R, S, m, b), l.triggerEvent(l.regionDragEndCallback, M), this.allowDragRegion();
    } else {
      let b = function(N) {
        C = !0;
        let { x: z, y: X } = l.getMouseRelativeXy(N);
        x === void 0 && R === void 0 ? (x = z, R = X, S = z, m = X) : (S = z, m = X), S = Math.min(S, l.canvas.width), m = Math.min(m, l.canvas.height), S = Math.max(S, 0), m = Math.max(m, 0), k && l.triggerEvent(l.regionDragStartCallback, {
          startX: x,
          startY: R,
          endX: S,
          endY: m
        }), k = !1, l.setRegionSize(x, R, S, m);
      }, M = function() {
        if (d) {
          if (document.removeEventListener("mousemove", b), !C)
            return;
          document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", M), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", l.allowDragRegion(), l.triggerEvent(l.regionDragEndCallback, {
            startX: l.startX,
            startY: l.startY,
            endX: l.endX,
            endY: l.endY
          });
        }
      }, d = !1, C = !1, k = !0, x, R, S, m;
      l.canvas.onmousedown = function() {
        d = !0, document.addEventListener("mousemove", b);
      }, document.addEventListener("mouseup", M);
    }
  }
  allowDragRegion() {
    let l = this;
    const d = 2;
    let C = null, k = !0, x = () => {
      let m = {
        startX: l.startX,
        startY: l.startY,
        endX: l.endX,
        endY: l.endY
      };
      k && l.triggerEvent(l.regionDragStartCallback, m), l.triggerEvent(l.regionDraggingCallback, m), k = !1;
    };
    this.allowDragRegionMousemove = function(m) {
      let { x: b, y: M } = l.getMouseRelativeXy(m), N = Math.min(l.startX, l.endX), z = Math.max(l.startX, l.endX), X = Math.min(l.startY, l.endY), A = Math.max(l.startY, l.endY);
      if (b >= N + d && b <= z - d && M >= X + d && M <= A - d) {
        l.canvas.style.cursor = "move";
        let P = z - N, q = A - X, D, Q;
        C = function(oe) {
          x(), l.canvas.style.cursor = "move";
          let { x: ve, y: ge } = l.getMouseRelativeXy(oe);
          D ?? (D = ve - N), Q ?? (Q = ge - X), ve = Math.min(ve, innerWidth - P + D), ve = Math.max(ve, D), ge = Math.min(ge, innerHeight - q + Q), ge = Math.max(ge, Q), l.setRegionSize(
            ve - D,
            ge - Q,
            ve + P - D,
            ge + q - Q
          );
        };
      } else {
        let P = function({ x: q, y: D }) {
          let Q = innerWidth, oe = innerHeight;
          return q = Math.max(q, 0), q = Math.min(q, Q), D = Math.max(D, 0), D = Math.min(D, oe), { x: q, y: D };
        };
        b >= N - d && b <= N + d && M >= X - d && M <= X + d ? (l.canvas.style.cursor = "nw-resize", C = function(q) {
          x(), l.canvas.style.cursor = "nw-resize";
          let D = l.getMouseRelativeXy(q), { x: Q, y: oe } = P(D);
          l.setRegionSize(Q, oe, z, A);
        }) : b >= z - d && b <= z + d && M >= X - d && M <= X + d ? (l.canvas.style.cursor = "ne-resize", C = function(q) {
          x(), l.canvas.style.cursor = "ne-resize";
          let D = l.getMouseRelativeXy(q), { x: Q, y: oe } = P(D);
          l.setRegionSize(N, oe, Q, A);
        }) : b >= N - d && b <= N + d && M >= A - d && M <= A + d ? (l.canvas.style.cursor = "ne-resize", C = function(q) {
          x(), l.canvas.style.cursor = "ne-resize";
          let D = l.getMouseRelativeXy(q), { x: Q, y: oe } = P(D);
          l.setRegionSize(Q, X, z, oe);
        }) : b >= z - d && b <= z + d && M >= A - d && M <= A + d ? (l.canvas.style.cursor = "nw-resize", C = function(q) {
          x(), l.canvas.style.cursor = "nw-resize";
          let D = l.getMouseRelativeXy(q), { x: Q, y: oe } = P(D);
          l.setRegionSize(N, X, Q, oe);
        }) : b >= N - d && b <= N + d ? (l.canvas.style.cursor = "w-resize", C = function(q) {
          x(), l.canvas.style.cursor = "w-resize";
          let D = l.getMouseRelativeXy(q), { x: Q } = P(D);
          l.setRegionSize(Q, X, z, A);
        }) : b >= z - d && b <= z + d ? (l.canvas.style.cursor = "w-resize", C = function(q) {
          x(), l.canvas.style.cursor = "w-resize";
          let D = l.getMouseRelativeXy(q), { x: Q } = P(D);
          l.setRegionSize(N, X, Q, A);
        }) : M >= X - d && M <= X + d ? (l.canvas.style.cursor = "n-resize", C = function(q) {
          x(), l.canvas.style.cursor = "n-resize";
          let D = l.getMouseRelativeXy(q), { y: Q } = P(D);
          l.setRegionSize(N, Q, z, A);
        }) : M >= A - d && M <= A + d ? (l.canvas.style.cursor = "n-resize", C = function(q) {
          x(), l.canvas.style.cursor = "n-resize";
          let D = l.getMouseRelativeXy(q), { y: Q } = P(D);
          l.setRegionSize(N, X, z, Q);
        }) : (l.canvas.onmousedown = null, C = null, l.canvas.style.cursor = "default");
      }
    };
    let R = null;
    this.dragRegionMousedown = function() {
      R = C, R && document.addEventListener("mousemove", C);
    }, this.canvas.addEventListener("mousedown", this.dragRegionMousedown);
    function S() {
      R && (k = !0, l.triggerEvent(l.regionDragEndCallback, {
        startX: l.startX,
        startY: l.startY,
        endX: l.endX,
        endY: l.endY
      }), document.removeEventListener("mousemove", R), R = null);
    }
    document.addEventListener("mouseup", S), this.canvas.addEventListener("mousemove", this.allowDragRegionMousemove);
  }
  notAllowDragRegion() {
    this.canvas.removeEventListener("mousemove", this.allowDragRegionMousemove), this.canvas.removeEventListener("mousedown", this.dragRegionMousedown);
  }
  setRegionSize(l, d, C, k) {
    const m = this.regionSizeIndicator.fontSize;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(
      this.screenshot,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ), this.startX = Math.min(l, C), this.endX = Math.max(l, C), this.startY = Math.min(d, k), this.endY = Math.max(d, k), this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.moveTo(this.startX, this.startY), this.ctx.lineTo(this.startX, this.endY), this.ctx.lineTo(this.endX, this.endY), this.ctx.lineTo(this.endX, this.startY), this.ctx.closePath(), this.ctx.fillStyle = this.maskColor, this.ctx.fill(), this.ctx.strokeStyle = "#0000", this.ctx.stroke(), this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(this.startX, this.startY), this.ctx.lineTo(this.startX, this.endY), this.ctx.lineTo(this.endX, this.endY), this.ctx.lineTo(this.endX, this.startY), this.ctx.closePath(), this.ctx.strokeStyle = this.regionColor, this.ctx.stroke(), this.ctx.font = m + "px Arial", this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
    let b = `${Math.max(
      1,
      Math.round(this.endX - this.startX)
    )} x ${Math.max(1, Math.round(this.endY - this.startY))}`, M = this.ctx.measureText(b).fontBoundingBoxAscent, N = this.startY - 2 - 5 - M;
    this.ctx.fillStyle = this.regionSizeIndicator.color, N >= 0 && this.regionSizeIndicator.show && this.ctx.fillText(
      b,
      this.startX + 2,
      this.startY - 2 - 5
    ), N < 0 && this.regionSizeIndicator.show && this.ctx.fillText(
      b,
      this.startX + 5,
      this.startY + 2 + m + 5
    );
    let z = 6 / 2;
    this.ctx.fillStyle = this.regionColor;
    let X = {
      x: this.startX - z,
      y: (this.endY + this.startY) / 2 - z
    }, A = {
      x: this.endX - z,
      y: (this.endY + this.startY) / 2 - z
    }, P = {
      x: (this.endX + this.startX) / 2 - z,
      y: this.startY - z
    }, q = {
      x: (this.endX + this.startX) / 2 - z,
      y: this.endY - z
    };
    this.ctx.fillRect(
      X.x,
      X.y,
      6,
      6
    ), this.ctx.fillRect(
      A.x,
      A.y,
      6,
      6
    ), this.ctx.fillRect(
      q.x,
      q.y,
      6,
      6
    ), this.ctx.fillRect(
      P.x,
      P.y,
      6,
      6
    ), this.ctx.fillRect(
      X.x,
      P.y,
      6,
      6
    ), this.ctx.fillRect(
      X.x,
      q.y,
      6,
      6
    ), this.ctx.fillRect(
      A.x,
      P.y,
      6,
      6
    ), this.ctx.fillRect(
      A.x,
      q.y,
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
  constructor(l) {
    var d, C, k, x, R, S, m, b, M, N, z;
    super(l), this.region = l.region, this.screenshot = l.screenshot, this.customDrawing = l.customDrawing ?? [], this.downloadName = l.downloadName ?? "screenshot", this.globalColorOptions = l.globalColorOptions ?? [
      "#ff3a3a",
      "#f8b60f",
      "#0083ff",
      "#40ff00",
      "#363636",
      "#e9e9e9"
    ], this.rectangleOptions = {
      lineWidth: ((d = l.rectangleOptions) == null ? void 0 : d.size) ?? [4, 6, 8],
      lineColor: ((C = l.rectangleOptions) == null ? void 0 : C.color) ?? this.globalColorOptions
    }, this.circleOptions = {
      lineWidth: ((k = l.circleOptions) == null ? void 0 : k.size) ?? [4, 6, 8],
      lineColor: ((x = l.circleOptions) == null ? void 0 : x.color) ?? this.globalColorOptions
    }, this.paintOptions = {
      lineWidth: ((R = l.paintOptions) == null ? void 0 : R.size) ?? [4, 6, 8],
      lineColor: ((S = l.paintOptions) == null ? void 0 : S.color) ?? this.globalColorOptions
    }, this.mosaicOptions = {
      lineWidth: ((m = l.mosaicOptions) == null ? void 0 : m.size) ?? [6, 8, 10]
    }, this.textOptions = {
      textSize: ((b = l.textOptions) == null ? void 0 : b.size) ?? [16, 18, 20],
      textColor: ((M = l.textOptions) == null ? void 0 : M.color) ?? this.globalColorOptions
    }, this.arrowOptions = {
      lineWidth: ((N = l.arrowOptions) == null ? void 0 : N.size) ?? [4, 6, 8],
      lineColor: ((z = l.arrowOptions) == null ? void 0 : z.color) ?? this.globalColorOptions
    }, this.createHandle(), this.drawHistory = new Proxy([], {
      set(X, A, P) {
        return P ? ae(".region-screenshot_revocation").removeClass(
          "region-screenshot_disabled"
        ) : ae(".region-screenshot_revocation").addClass(
          "region-screenshot_disabled"
        ), X[A] = P, !0;
      }
    });
  }
  createCanvas() {
    if (this.canvas)
      return;
    let { startX: l, startY: d, endX: C, endY: k } = this.region;
    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), document.body.appendChild(this.canvas);
    let x = C - l, R = k - d;
    this.canvas.width = x, this.canvas.height = R, this.canvas.style.cssText = `position:fixed;top:${d}px;left:${l}px;z-index:9999`, this.triggerEvent(this.toolsCanvasCreatedCallback);
  }
  getOriginImg() {
    let { startX: l, startY: d, endX: C, endY: k } = this.region, x = document.createElement("canvas");
    return x.width = Math.max(C - l, 1), x.height = Math.max(k - d, 1), x.getContext("2d").drawImage(this.screenshot, -l, -d, innerWidth, innerHeight), x;
  }
  getMosaicImg() {
    let { startX: l, startY: d, endX: C, endY: k } = this.region, x = document.createElement("canvas");
    x.width = C - l, x.height = k - d;
    let R = x.getContext("2d");
    R.drawImage(this.screenshot, -l, -d, innerWidth, innerHeight);
    let S = R.getImageData(0, 0, x.width, x.height);
    const m = 10, b = S.data;
    for (let M = 0; M < x.height; M += m)
      for (let N = 0; N < x.width; N += m) {
        let z = 0, X = 0, A = 0, P = 0, q = 0;
        for (let ge = M; ge < M + m && ge < x.height; ge++)
          for (let Se = N; Se < N + m && Se < x.width; Se++) {
            let i = (ge * x.width + Se) * 4;
            z += b[i], X += b[i + 1], A += b[i + 2], P += b[i + 3], q++;
          }
        let D = z / q, Q = X / q, oe = A / q, ve = P / q;
        for (let ge = M; ge < M + m && ge < x.height; ge++)
          for (let Se = N; Se < N + m && Se < x.width; Se++) {
            let i = (ge * x.width + Se) * 4;
            b[i] = D, b[i + 1] = Q, b[i + 2] = oe, b[i + 3] = ve;
          }
      }
    return R.putImageData(S, 0, 0), x;
  }
  createHandle() {
    this.handle = document.createElement("div"), this.handle.style.setProperty("--active-color", "#409eff");
    let l = this.rectangleOptions, d = this.circleOptions, C = this.paintOptions, k = this.mosaicOptions, x = this.textOptions, R = this.arrowOptions;
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
      let b = ae(".region-screenshot_tools_drawing"), M = document.createElement("li");
      M.classList.add("region-screenshot_draw_item"), M.classList.add("region-screenshot_tools_item"), M.classList.add("region-screenshot_custom_tools"), M.classList.add(m.className), M.innerHTML = `
          <div class="region-screenshot_tools_btn"></div>
      `, m.optionsHtml && (M.innerHTML += ` <div class="region-screenshot_tools_options">
        ${m.optionsHtml}
      </div>`), b[0].appendChild(M), M.onDrawingClose = m.onDrawingClose, M.onDrawingOpen = m.onDrawingOpen, typeof m.onOptionsCreated == "function" && m.onOptionsCreated(
        ae(M).find(".region-screenshot_tools_options")[0]
      );
    }), l.lineWidth.forEach((m) => {
      let b = ae(
        ".region-screenshot_rectangle .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), l.lineColor.forEach((m) => {
      let b = ae(
        ".region-screenshot_rectangle .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), d.lineWidth.forEach((m) => {
      let b = ae(
        ".region-screenshot_circle .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), d.lineColor.forEach((m) => {
      let b = ae(
        ".region-screenshot_circle .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), C.lineWidth.forEach((m) => {
      let b = ae(
        ".region-screenshot_paint .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), C.lineColor.forEach((m) => {
      let b = ae(
        ".region-screenshot_paint .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), R.lineWidth.forEach((m) => {
      let b = ae(
        ".region-screenshot_arrow .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), R.lineColor.forEach((m) => {
      let b = ae(
        ".region-screenshot_arrow .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div line-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    }), k.lineWidth.forEach((m) => {
      let b = ae(
        ".region-screenshot_mosaic .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div line-width="${m}" class="region-screenshot_tools_size">
          <div style="width:${m}px;height:${m}px;"></div>
        </div>`
      );
    }), x.textSize.forEach((m) => {
      let b = ae(
        ".region-screenshot_text .region-screenshot_tools_size_instruction_list"
      );
      b.html(
        b.html() + `<div text-size="${m}"  style="font-size:${m}px" class="region-screenshot_tools_size">
          T
        </div>`
      );
    }), x.textColor.forEach((m) => {
      let b = ae(
        ".region-screenshot_text .region-screenshot_tools_color_instruction_list"
      );
      b.html(
        b.html() + `<div text-color="${m}" style="background-color:${m};" class="region-screenshot_tools_color"></div>`
      );
    });
    let S = this;
    ae(".region-screenshot_draw_item .region-screenshot_tools_btn").click(
      function() {
        let m = ae(this).parent(), b = ae(this).next();
        if (m.hasClass("region-screenshot_active"))
          m.removeClass("region-screenshot_active");
        else if (m.attr("is-init") === void 0) {
          m.addClass("region-screenshot_active");
          let M = m.find(".region-screenshot_tools_options")[0];
          if (M) {
            let X = M.getBoundingClientRect().left, A = M.getBoundingClientRect().top, P = X + M.offsetWidth, q = A + M.offsetHeight;
            if (P > innerWidth) {
              let Q = innerWidth - P - 1;
              M.style.transform = `translate(${Q}px, 0)`, M.style.setProperty(
                "--tools_inner_translate_x",
                `${Q * -1}px`
              );
            }
            let D = m[0].getBoundingClientRect().top;
            (q > innerHeight || D < S.region.canvas.offsetTop + S.region.startY) && ae(M).addClass("region-screenshot_top"), M.getBoundingClientRect().top < 0 && ae(M).removeClass("region-screenshot_top");
          }
          m.attr("is-init", ""), m.siblings().removeClass("region-screenshot_active");
          let N = b.find(
            ".region-screenshot_tools_size_instruction_list > div"
          );
          N.length && N[0].click();
          let z = b.find(".region-screenshot_tools_color");
          z.length && z[0].click();
        } else
          b.find(
            ".region-screenshot_tools_size_instruction_list > div.region-screenshot_active"
          ).click(), b.find(
            ".region-screenshot_tools_color.region-screenshot_active"
          ).click(), m.addClass("region-screenshot_active");
        m.siblings().removeClass("region-screenshot_active"), S.closeCurrentDraw && S.closeCurrentDraw(!0), m.hasClass("region-screenshot_active") && (m.hasClass("region-screenshot_rectangle") ? S.closeCurrentDraw = S.drawRectangle() : m.hasClass("region-screenshot_circle") ? S.closeCurrentDraw = S.drawCircle() : m.hasClass("region-screenshot_paint") ? S.closeCurrentDraw = S.drawPaint() : m.hasClass("region-screenshot_mosaic") ? S.closeCurrentDraw = S.drawMosaic() : m.hasClass("region-screenshot_text") ? S.closeCurrentDraw = S.drawText() : m.hasClass("region-screenshot_arrow") ? S.closeCurrentDraw = S.drawArrow() : m.hasClass("region-screenshot_custom_tools") && (S.closeCurrentDraw = S.drawCustom(this)));
      }
    ), ae(".region-screenshot_tools_size").click(function() {
      ae(this).addClass("region-screenshot_active"), ae(this).siblings().removeClass("region-screenshot_active"), S.checkedLineWidth = Number(ae(this).attr("line-width")), S.checkedTextSize = Number(ae(this).attr("text-size"));
    }), ae(".region-screenshot_tools_color").click(function() {
      ae(this).addClass("region-screenshot_active"), ae(this).siblings().removeClass("region-screenshot_active"), S.checkedLineColor = ae(this).attr("line-color"), S.checkedTextColor = ae(this).attr("text-color");
    }), ae(".region-screenshot_other_item .region-screenshot_tools_btn").click(
      function() {
        let m = ae(this).parent();
        m.hasClass("region-screenshot_revocation") ? S.revocation() : m.hasClass("region-screenshot_close") ? S.triggerEvent(S.closedCallback) : m.hasClass("region-screenshot_finish") ? S.screenshotGenerate().then((b) => {
          S.triggerEvent(S.screenshotGeneratedCallback, b);
        }) : m.hasClass("region-screenshot_download") && S.screenshotDownload().then((b) => {
          S.close(), S.triggerEvent(S.screenshotDownloadCallback, b);
        });
      }
    ), this.handle.style.display = "none";
  }
  updateHandlePosition() {
    let { startX: l, startY: d, endX: C, endY: k } = this.region;
    const x = 10;
    let R = this.handle.style, S = this.handle.offsetWidth, m = this.handle.offsetHeight, b = 0;
    C > S ? b = C - S : b = l, R.left = b + "px", d - x - m < 0 && k + x + m > window.innerHeight ? (R.top = k - x - m + "px", R.left = b - x + "px") : k + x + m > window.innerHeight ? R.top = d - x - m + "px" : R.top = k + x + "px";
  }
  updateHandleDisplay(l) {
    this.handle.style.display = l;
  }
  revocation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.drawHistory.pop(), this.drawHistory.length && this.ctx.drawImage(this.drawHistory.at(-1), 0, 0);
  }
  async screenshotGenerate() {
    this.drawTextActivity && await this.drawTextActivity();
    let l = this.getOriginImg(), d = l.getContext("2d");
    return this.canvas && d.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height), l.toDataURL("image/png");
  }
  async screenshotDownload() {
    let l = await this.screenshotGenerate(), d = document.createElement("a");
    return d.href = l, d.download = this.downloadName + ".png", d.click(), l;
  }
  drawRectangle() {
    this.createCanvas();
    let l = this, d, C, k, x, R = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(N) {
      R = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0);
      let { x: z, y: X } = l.getMouseRelativeXy(N);
      d === void 0 && C === void 0 ? (d = z, C = X, k = z, x = X) : (k = z, x = X), k = Math.min(k, l.canvas.width), x = Math.min(x, l.canvas.height), k = Math.max(k, 0), x = Math.max(x, 0);
      let A = l.checkedLineWidth, P = l.checkedLineColor;
      m = () => {
        l.ctx.beginPath(), l.ctx.rect(d, C, k - d, x - C), l.ctx.strokeStyle = P, l.ctx.lineWidth = A, l.ctx.stroke(), l.ctx.closePath();
      }, m();
    }
    function M(N) {
      if (S || N === !0) {
        if (document.removeEventListener("mousemove", b), !R && N !== !0)
          return;
        m && N !== !0 && l.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", M), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", N !== !0 && l.drawRectangle();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", M), M;
  }
  drawCircle() {
    this.createCanvas();
    let l = this, d, C, k, x, R = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(N) {
      R = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0);
      let { x: z, y: X } = l.getMouseRelativeXy(N);
      d === void 0 && C === void 0 ? (d = z, C = X, k = z, x = X) : (k = z, x = X), k = Math.min(k, l.canvas.width), x = Math.min(x, l.canvas.height), k = Math.max(k, 0), x = Math.max(x, 0);
      let A = l.checkedLineWidth, P = l.checkedLineColor;
      m = () => {
        l.ctx.beginPath();
        let q = k - d, D = x - C, Q = d + q / 2, oe = C + D / 2;
        l.ctx.ellipse(
          Q,
          oe,
          Math.abs(q / 2),
          Math.abs(D / 2),
          0,
          0,
          Math.PI * 2
        ), l.ctx.strokeStyle = P, l.ctx.lineWidth = A, l.ctx.stroke(), l.ctx.closePath();
      }, m();
    }
    function M(N) {
      if (S || N === !0) {
        if (document.removeEventListener("mousemove", b), !R && N !== !0)
          return;
        m && N !== !0 && l.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", M), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", N !== !0 && l.drawCircle();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", M), M;
  }
  drawPaint() {
    this.createCanvas();
    let l = this, d = !1, C = !1;
    this.canvas.style.cursor = "crosshair";
    let k = null, x = [];
    function R(m) {
      d = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0);
      let { x: b, y: M } = l.getMouseRelativeXy(m);
      b = Math.min(b, l.canvas.width), M = Math.min(M, l.canvas.height), b = Math.max(b, 0), M = Math.max(M, 0);
      let N = l.checkedLineWidth, z = l.checkedLineColor;
      k = () => {
        x.push([b, M]), l.ctx.beginPath(), l.ctx.moveTo(...x[0]);
        for (let X = 1; X < x.length; X++)
          l.ctx.lineTo(...x[X]);
        l.ctx.strokeStyle = z, l.ctx.lineWidth = N, l.ctx.stroke(), l.ctx.closePath();
      }, k();
    }
    function S(m) {
      if (C || m === !0) {
        if (document.removeEventListener("mousemove", R), !d && m !== !0)
          return;
        k && m !== !0 && l.saveHistory(), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", S), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", m !== !0 && l.drawPaint();
      }
    }
    return this.canvas.onmousedown = function() {
      C = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", R);
    }, document.addEventListener("mouseup", S), S;
  }
  drawMosaic() {
    this.createCanvas();
    let l = this, d = !1, C = !1;
    this.canvas.style.cursor = "crosshair";
    let k = null, x = [], R = document.createElement("canvas");
    R.width = l.canvas.width, R.height = l.canvas.height;
    let S = R.getContext("2d"), m = document.createElement("canvas");
    m.width = l.canvas.width, m.height = l.canvas.height;
    let b = m.getContext("2d"), M = this.getOriginImg(), N = this.getMosaicImg();
    function z(A) {
      d = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), S.clearRect(0, 0, l.canvas.width, l.canvas.height), b.clearRect(0, 0, l.canvas.width, l.canvas.height), b.drawImage(N, 0, 0), S.drawImage(M, 0, 0);
      let { x: P, y: q } = l.getMouseRelativeXy(A);
      P = Math.min(P, l.canvas.width), q = Math.min(q, l.canvas.height), P = Math.max(P, 0), q = Math.max(q, 0);
      let D = l.checkedLineWidth, Q = l.checkedLineColor;
      x.push([P, q]), S.beginPath(), S.moveTo(...x[0]);
      for (let oe = 1; oe < x.length; oe++)
        S.lineTo(...x[oe]);
      S.strokeStyle = Q, S.lineWidth = D, S.save(), S.globalCompositeOperation = "destination-out", S.stroke(), S.closePath(), S.restore(), b.drawImage(R, 0, 0), b.beginPath(), b.moveTo(...x[0]);
      for (let oe = 1; oe < x.length; oe++)
        b.lineTo(...x[oe]);
      b.strokeStyle = Q, b.lineWidth = D, b.save(), b.globalCompositeOperation = "destination-in", b.stroke(), b.closePath(), b.restore(), k = () => {
        l.ctx.drawImage(m, 0, 0);
      }, k(), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0);
    }
    function X(A) {
      if (C || A === !0) {
        if (document.removeEventListener("mousemove", z), !d && A !== !0)
          return;
        k && A !== !0 && l.saveHistory(), document.removeEventListener("mousemove", z), document.removeEventListener("mouseup", X), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", A !== !0 && l.drawMosaic();
      }
    }
    return this.canvas.onmousedown = function() {
      C = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", z);
    }, document.addEventListener("mouseup", X), X;
  }
  drawText() {
    this.createCanvas();
    let l = this;
    this.canvas.style.cursor = "text";
    let d = null, C = 0, k = 0;
    const x = [3, 3], R = 1;
    let S = !1;
    this.drawTextActivity = () => new Promise((M) => {
      if (!d)
        return M();
      if (!d.children[0].innerText)
        return d.remove(), d = null, M();
      Ui.toPng(d.children[0], { quality: 1 }).then((N) => {
        let z = new Image();
        z.src = N, z.onload = () => {
          let X = C, A = k, P = d.scrollLeft - R, q = d.scrollTop - R, D = d.offsetWidth, Q = d.offsetHeight;
          (() => {
            l.ctx.drawImage(
              z,
              //图片
              P,
              //从x坐标截取
              q,
              // 从y坐标截取
              D,
              //截取宽度
              Q,
              //截取高度
              X,
              //在画布x位置显示
              A,
              //在画布y位置显示
              D,
              //显示的宽度
              Q
              //显示的高度
            );
          })(), l.saveHistory(), d.remove(), d = null, M();
        };
      });
    });
    function m(M) {
      if (d) {
        if (S)
          return;
        S = !0, d.children[0].style.borderColor = "#0000", l.drawTextActivity().then(() => {
          S = !1;
        });
      } else {
        let { x: N, y: z } = l.getMouseRelativeXy(M);
        d = document.createElement("div");
        let X = 30;
        C = Math.min(
          N - x[1],
          l.canvas.offsetWidth - (X + x[1] * 2 + R * 2)
        ), C = Math.max(R, C), k = Math.min(
          z - (x[0] * 2 + l.checkedTextSize) / 2,
          l.canvas.offsetHeight - (l.checkedTextSize + x[0] * 2 + R * 2)
        ), k = Math.max(R, k), d.style.cssText = `
            position:fixed;
            left:${C + l.canvas.offsetLeft}px;
            top:${k + l.canvas.offsetTop}px;
            z-index:10000;
            overflow:hidden;
            font-weight:bolder;
            border: ${R}px solid ${l.checkedTextColor};
            `, d.innerHTML = `
          <div 
          style="
          min-width:${X}px;
          max-width:${l.canvas.offsetWidth - C - x[1] * 2 - R * 2}px;
          max-height:${l.canvas.offsetHeight - k - x[0] * 2 - R * 2}px;
          min-height: ${l.checkedTextSize}px;
          background: #0000;
          
          outline:none;
          padding:${x[0]}px ${x[1]}px;
          font-size:${l.checkedTextSize}px;
          color:${l.checkedTextColor};
          font-family: 'Arial';
          
         "></div>
        `, document.body.appendChild(d), d.children[0].setAttribute("contenteditable", "true"), d.children[0].focus();
      }
    }
    function b(M) {
      M.target !== l.canvas && d && M.target !== d.children[0] && !ae(M.target).parent().hasClass("region-screenshot_finish") && m();
    }
    return this.canvas.addEventListener("click", m), document.addEventListener("click", b), () => {
      this.canvas.removeEventListener("click", m), document.removeEventListener("click", b), this.canvas.style.cursor = "default";
    };
  }
  drawArrow() {
    this.createCanvas();
    let l = this, d, C, k, x, R = !1, S = !1;
    this.canvas.style.cursor = "crosshair";
    let m = null;
    function b(N) {
      R = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0);
      let { x: z, y: X } = l.getMouseRelativeXy(N);
      d === void 0 && C === void 0 ? (d = z, C = X, k = z, x = X) : (k = z, x = X), k = Math.min(k, l.canvas.width), x = Math.min(x, l.canvas.height), k = Math.max(k, 0), x = Math.max(x, 0);
      let A = l.checkedLineWidth, P = l.checkedLineColor, q = 10 * Math.PI / 180, D = 20 * Math.PI / 180, Q = Math.sqrt(
        Math.pow(k - d, 2) + Math.pow(x - C, 2),
        2
      ), oe = Math.min(A, Q / 3) / 2 / Math.sin(q), ve = oe * 1.2, ge = k - d, Se = x - C, i = Math.atan2(Se, ge);
      m = () => {
        l.ctx.beginPath(), l.ctx.beginPath(), l.ctx.moveTo(d, C), l.ctx.lineTo(
          k - oe * Math.cos(i - q),
          x - oe * Math.sin(i - q)
        ), l.ctx.lineTo(
          k - ve * Math.cos(i - D),
          x - ve * Math.sin(i - D)
        ), l.ctx.lineTo(k, x), l.ctx.lineTo(
          k - ve * Math.cos(i + D),
          x - ve * Math.sin(i + D)
        ), l.ctx.lineTo(
          k - oe * Math.cos(i + q),
          x - oe * Math.sin(i + q)
        ), l.ctx.lineTo(d, C), l.ctx.closePath(), l.ctx.fillStyle = P, l.ctx.fill();
      }, m();
    }
    function M(N) {
      if (S || N === !0) {
        if (document.removeEventListener("mousemove", b), !R && N !== !0)
          return;
        m && N !== !0 && l.saveHistory(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", M), l.canvas.onmousedown = null, l.canvas.style.cursor = "default", N !== !0 && l.drawArrow();
      }
    }
    return this.canvas.onmousedown = function() {
      S = !0, l.ctx.clearRect(0, 0, l.canvas.width, l.canvas.height), l.drawHistory.length && l.ctx.drawImage(l.drawHistory.at(-1), 0, 0), document.addEventListener("mousemove", b);
    }, document.addEventListener("mouseup", M), M;
  }
  drawCustom(l) {
    let d = ae(l).parent()[0];
    return this.createCanvas(), typeof d.onDrawingOpen == "function" && d.onDrawingOpen(this.canvas, d, () => {
      this.saveHistory();
    }), () => {
      typeof d.onDrawingClose == "function" && d.onDrawingClose(this.canvas, d);
    };
  }
  saveHistory() {
    let l = this.canvas.toDataURL("image/png"), d = new Image();
    d.src = l, d.onload = () => {
      this.drawHistory.push(d);
    };
  }
  close() {
    this.canvas && this.canvas.remove(), this.handle.remove();
  }
}
class Qi extends fn {
  constructor(l = {}) {
    super(), l.regionColor ?? (l.regionColor = "#409eff"), this.region = new Vi({
      ...l
    }), this.tools = new Gi({
      region: this.region,
      ...l
    });
    let d = getComputedStyle(document.body);
    this.bodyOriginStyle = {
      overflow: d.overflow,
      userSelect: d.userSelect
    }, this.initializeFinished = !1, document.body.style.userSelect = "none", document.body.style.overflow = "hidden", this.screenshot().then((C) => {
      let k = C.toDataURL("image/png"), x = new Image();
      x.src = k, x.onload = () => {
        this.webRTCStream && (this.region.screenshot = x, this.region.on("regionDragStart", (R) => {
          this.tools.updateHandleDisplay("none");
        }), this.region.on("regionDragEnd", (R) => {
          this.tools.updateHandleDisplay("flex"), this.tools.updateHandlePosition(R);
        }), this.tools.screenshot = x, this.region.init(), this.tools.on("toolsCanvasCreated", () => {
          this.region.notAllowDragRegion();
        }), this.tools.on("closed", () => {
          this.close();
        }), this.tools.on("screenshotDownload", () => {
          this.close();
        }), this.tools.on("screenshotGenerated", () => {
          this.close();
        }), this.initializeFinished = !0);
      }, x.onerror = (R) => {
        this.triggerEvent(this.errorCreatedCallback, R);
      };
    }).catch((C) => {
      this.triggerEvent(this.errorCreatedCallback, C);
    });
  }
  screenshot() {
    return new Promise((l, d) => {
      let C = document.createElement("div");
      C.style.cssText = `position: fixed;top: 0;left: 0;width: ${innerWidth}px;height: ${innerHeight}px;z-index: 9999;cursor: none;`, navigator.mediaDevices.getDisplayMedia({
        video: {
          // frameRate: 1,
        },
        preferCurrentTab: 1,
        audio: !1
      }).then((k) => {
        document.body.appendChild(C);
        let x = document.createElement("video");
        x.setAttribute("autoplay", "autoplay"), x.srcObject = k, this.webRTCStream = k;
        let R = null;
        x.onplay = function() {
          R = setTimeout(function() {
            C.remove();
            let m = document.createElement("canvas");
            m.width = innerWidth, m.height = innerHeight, m.getContext("2d").drawImage(x, 0, 0, innerWidth, innerHeight), l(m);
          }, 500);
        };
        let S = this;
        k.getTracks()[0].onended = function() {
          C.remove(), S.initializeFinished ? S.triggerEvent(S.closedCallback) : (clearTimeout(R), S.triggerEvent(S.errorCreatedCallback)), S.close();
        };
      }).catch((k) => {
        this.close(), d(k);
      });
    });
  }
  close() {
    this.region && this.region.canvas && this.region.canvas.remove(), this.tools && (this.tools.handle && this.tools.handle.remove(), this.tools.canvas && this.tools.canvas.remove()), this.webRTCStream && (this.webRTCStream.getTracks().forEach((d) => d.stop()), this.webRTCStream = null), document.body.style.overflow = this.bodyOriginStyle.overflow, document.body.style.userSelect = this.bodyOriginStyle.userSelect;
  }
  on(l, d) {
    super.on(l, d), this.region.on(l, d), this.tools.on(l, d);
  }
}
export {
  Qi as default
};
(function(){"use strict";try{if(typeof document<"u"){var A=document.createElement("style");A.appendChild(document.createTextNode('.region-screenshot_canvas{cursor:crosshair;position:fixed;z-index:9999}.region-screenshot_tools{position:fixed;z-index:10000;background-color:#fff;list-style:none;padding:10px;box-shadow:0 0 4px #9b9b9b}.region-screenshot_tools *{padding:0;margin:0}.region-screenshot_tools>ul{display:flex}.region-screenshot_tools_item{height:100%;display:flex;align-items:center;margin-right:10px;position:relative}.region-screenshot_tools_item:last-child{margin-right:0}.region-screenshot_tools_btn{width:20px;height:20px;cursor:pointer;background-size:100% 100%}.region-screenshot_tools_item.region-screenshot_disabled .region-screenshot_tools_btn{filter:brightness(2);cursor:no-drop}.region-screenshot_tools_options{display:none;list-style:none;position:absolute;background:#fff;top:40px;left:-10px;padding:10px;box-shadow:0 0 4px #9b9b9b;border-radius:3px;--tools_inner_translate_x: 0px;--tools_inner_translate_y: 0px}.region-screenshot_tools_options.region-screenshot_top{bottom:40px;top:unset}.region-screenshot_tools_options:after{content:"";display:block;-webkit-clip-path:polygon(50% 0%,0% 100%,100% 100%);clip-path:polygon(50% 0%,0% 100%,100% 100%);width:10px;height:7px;background-color:#fff;position:absolute;left:15px;top:-6px;transform:translate(var(--tools_inner_translate_x),var(--tools_inner_translate_y))}.region-screenshot_tools_options.region-screenshot_top:after{bottom:-6px;top:unset;transform:translate(var(--tools_inner_translate_x),var(--tools_inner_translate_y)) rotate(180deg)}.region-screenshot_tools_options li{display:flex;align-items:center;margin-right:10px}.region-screenshot_tools_options li:last-child{margin-right:0}.region-screenshot_tools_item.region-screenshot_active .region-screenshot_tools_options{display:flex}.region-screenshot_tools_item.region-screenshot_active .region-screenshot_tools_btn img{filter:drop-shadow(var(--active-color) 20px 0)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size{color:#bdbdbd}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size.region-screenshot_active{color:var(--active-color)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size{min-width:10px;min-height:10px;margin-right:10px;cursor:pointer;display:flex}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size>div{background-color:#bdbdbd;border-radius:50%;margin:auto}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size.region-screenshot_active>div{background-color:var(--active-color)}.region-screenshot_tools_size_instruction_list>.region-screenshot_tools_size:last-child{margin-right:0}.region-screenshot_tools_color_instruction_list>div{margin-right:10px;width:15px;height:15px;cursor:pointer;box-sizing:border-box;position:relative}.region-screenshot_tools_color_instruction_list>div:last-child{margin-right:0}.region-screenshot_tools_color_instruction_list>div.region-screenshot_active:before{content:"";display:block;width:7px;height:7px;background-color:#fff;position:absolute;left:50%;top:50%;margin-left:-3.5px;margin-top:-3.5px}.region-screenshot_tools_split{width:1px;background:#878787;margin:0 10px}.region-screenshot_rectangle .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAARJJREFUWIXtljFOAzEQAMcrCtKB4AupqFNBCe/wPeHafCC0PMHSlYgXQJlUqVPxBZCguqt2KWKE5LOg8Ikg4W3s80qeOa8trTMzDhlyUHoVAI5yi03TXKjqHXAFHBcyBmAtIm0IYZcmXXoJI3wLzArBafQiskglRicQ/3zmnHtW1aWIvBeCT4CVmc3j3jffCrA/dlR12XXdQyEcAO89wD1wmeZyl/Cz5q9TwAFU9SVOR2U9+CuoAlWgClSBKlAFqkBOYIjj2WQQkfM47dNcriNaA9cicuu9d8BbCdzMToFV/Nz8KCAirapuzWzOvo2aKnoRaUe8dCGEsBORBfDEVzlKYgAecx0xZNry344/+Qr+l8AHQ4RWoekXbowAAAAASUVORK5CYII=)}.region-screenshot_rectangle.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQpJREFUWIXt1zFKA0EUh/HfWyySTtErpLJOpU1EzxHwBGlzAW29QbAWT6CkipV1Kq+goFVSZSx2QdgsWkwghfOqYR/s9828WfhvpJTss6q90osADroeXtw7TRt3OEcvk7HGIiqT+diy3Yz2JWzgr+hngtu1isqwLbF1As3O+3iLZJrCVyb4EDcYNO+++lVAfewimc6vPWbCwWgGHnDW7nVdwh6kyscu4CC8N6utse79KygCRaAIFIEiUASKQJfAGmLjeGeU5KRZrdqtrkS0wGUKt6OZwGcWOxxFHcng5U+BqEyaUDpQx6isip/Mu4rKpN3fGsF8bBmVIZ4148isNZ66EnEtWP4N/7vAN0/fQ9xs7Al1AAAAAElFTkSuQmCC)}.region-screenshot_circle .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAy5JREFUWIXFl0+PFEUYxn9v9fgJxAOgB92VyI2sGjhAiEE5IP8SNkR3prt3PgcclrjfYzNTM8REYlgREhNjopts0ASJJ4MgmghoXD4BSdfrod/e7Z0ZenvcmexzqenuSj2/qumu9ylRVfZSbk/dgUbdjiIicRy/C1xU1RPOuf2qetCePVXVZ8AasOq9v6c1l1Z26icikiTJZVVdBmZr8v4GXPXe39gJpBIgjuNZEbkOvD8w+C0ReRxCeOKcE+BgCGHGOXdOVd8uwd9V1YVut/vH2ABpmn6gql8Ar9qtm6q65L3/pWpG7Xb7SAjhmqqet1vPgflut/t9bQAz/wZ4BdgAPul2u99VGQ+q1Wqdcs59DuwDXgCnR0EMAdiy3yWf+a9RFJ1ZWVn5cxzzQkmSvAncBg4Dz7MsO9rv9x+X+2z7DCXXdTP/dzfmAPbff0y+ivsajUZfROSlAEmSXGbrhft0N+ZlCBFZAFDVY3Ecz48EMLLP7PLmuP95lTqdzrci8pVdLpdXYROg2Wy+V3xCqro0KfOSijEPpWk6NwQQRdFFABF5uNOn9n/U6XTuk+8hZFl2YQgghHDc2luTNi/pDoCInBgCEJFiX384RYBHZa9tAMB+e/j3tNxV9am1IwECQAhBmJKsbmx6DQL8Y50OTAsghFDM/NkogGJ56pbcseWcK8YeCbBm7blpAQBnAERksyiVAVatnW2320cm7RzH8Vyx0YUQil1xC8B7fw/bKEII1yYNICLFmA96vd79IQCLTlft9/k0TT+clPni4uJp4KyNfaUc07blAct/66p6jLyEHq2KU3VkmeAn8mCy7r0/XgbYVo411wJ5jHoNuG0D7Mb8jplvRFHUHAypQ+cCm/E8eYw6DPzYarVOjWsex/FH5DN/B3ihqpdG5YuXhtIkSU4CN4weq+dLVtWqjOfshTtrtzZU9ZL3fm1U/8pY3mw232o0Gn17Jwo9Ar5W1d+dc38BhBDeEJEZ8j1kptR3PYqiZlWyqnUwsRi1DByq7LylB6p6pdfrfbmrg8kgSJqmc1mWXbB6fgB43R4/Id9ef1DVVe/9zzVB6wNMS3t+Ov4Pf4B/Yk4ydUUAAAAASUVORK5CYII=)}.region-screenshot_circle.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyJJREFUWIXF181vVFUYx/HPc4t/gbgAdIFUIjtSJbCAtEOFBfKW0BiFDVP4L2ABkT8DabvAmEgML0JilMJIQtAEiSvDi2AioLH8BYTex8XcKVOmDFPaht/q3HNPnt/3vD8nMtObVPFG3bGs14ZBDJ3ykbA3w5ZIK5JV1b9HeIxr0rmro24mPQ1tvGoKghga8xlOoL+XoJnuKBxtHHTmVSBdAWpf6Vf4Ghvag0e4EOG+0kMhhFVlaU2EXfigLcSNctr+xmEP5g0wdEotwrd4u+nsbHBsctTv3XpUG7c+0/Fgd1X1JBiZrGv0DFCZ/4C3MFXw+eW6yW7GL2rrhOEsfYPlydOC7XNBdABUw35Ds+d/CDuuHPTXfMxbGjxpddHnItbhyTI2/lh3v73NrG0YRDXnbyf/LcQcGoc9KKd9iiksf8bpIF4KUK32DdDHFwsxb4fA/upz0+C4kTkBKrIvQTo73znvpit1PyXnQelE+yjMAAyO+1i1hYJji2XeUpbNmBHW1iYMdAAo7a1Kd1+11V5HjUNuZbrTpLGnE6CwGTJdWGzzlqJwqfLY0gEQOXOu310qAKV7VWlVB0CyAiL8s2QAhUeVVydAUELG7H26mMqyGbvlNQsA/1Y/Vy4VQESz55kezwXwqInZ25X7muqvQOYEuNb0t2sJAXZomsxcSs8B0rmq1F8bt36xnYfHDKgOuiKqU7Ed4Oqom62DItPxxQYozcS8PVl3qwMgSYWjEOyujflkscyHT9mOnRDpSHuaNisfqPK/69iEqXLaxm7pVC+qcoJfNROT6426ze0As67jJMtp+/EE7xR9Lg6etHqB5pewHFMRDryYpHa8CxqHPQhGkqdYV/T5ZeuE4fmaD43bVvX8w+Rphn1z5RcvTUq3jhlMzlT0kvNZOtY49HwBzaXhMQPVgttZVU1l2Hf1YHOb9wwA28a8/4zTmmuipXvC99Kfwd8V3HvCGmkX1rQaJtcjHOiWWfX0MBkcN6J0IsLaro2f63akI1dGfbegh8mLILUJA9KeTFsyrRTeBelhhMfJz32cu1z3W4+gvQMsld746/h/qVcufEyjrBYAAAAASUVORK5CYII=)}.region-screenshot_paint .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA21JREFUWIXNl01oHGUYx3/PzDSdhB4siC0iNdjVgx78QDwkag8KxYsXTSzZ7E7W1gpi8yEaTaiu09omVZst6sHUppPdicTGg156qEUQRGqpHooEemgQxS8q2BioWTa783jQLdPN7mYbk43vafjv8zy/H++8+y4rqspaLmNN6f8HAateoGg0eqtlWc+r6h/ZbPbI1NTUfN0EotHoRtM0v1DVZgDbtpuBZ6FOr8A0zQ+A5lDUWnxYdYF4PL4beKIk/rQuAp2dnXcCqXAmIt+ZpvnGqgt0d3evF5EPgaZQfMUwjHbP87KrLjA7O/uWiNwTzlT1Oc/zLoQzWY2b0HGcx1T1JCBXQSJT6XT6qdLaFd+Bjo6OTarqheHATKFQeKZcfSUBqZBXXa7rGpZlTQCbQvECEJ2YmJgr17PoIjo4cvwTDHkA5YRYDA3sSfxeq8DMzMzLwKMl8UAmkzlbqWfxDhh6DOUHoE/zXDyYGt9RCzwej98PvF4Sn/J9f6RaX8VDOJQaf0ghDboFNbYPvuB8XmlIe3v7Btu2vwXuCMWXTNO82/O836oJVDyEA31dXyK5VuCySLC32hDbtt8vgQeq2rkUvKoAwGDv7l9BzytsrVQTi8XiQLQkftP3/dNLwZcUOHD4+IMgLQrny33uuq4hIj3hTES+bmxsfK0WOFT4Od6fSt9lStAvhkSBy6bQU1ojItLW1tYEbLNt+12gS0T+VNWO0dHRhWUJuG/7NzVY+fdMeBKlAJywFvSl/v6nfyltdBynRVU9Ve3IZDKJWCz2marmfN//vlb4NQKH3vG3rLPyZ1TZjHA0yBcO7X1xV8VhQRDEgduBM47jHIhEIvuSyWRwPfBrBPKF/D6BzUjw+GDvzpPVmhKJhA20FWcEQbB1enp6PTC/bAFBHgY9uxQcIAiC7cBGICsivZlMZvR6wcUV+hZoHvSvWppyudw5YFxVW9Pp9LLhED6EIl+h7BhOjUVe6dt5sVyx637c0LDhym2Tk5MXgMR/AV/FFq/i4dRYJMA4BzIvBK+aVnCqf8+unwDcw0dvtGTdIyLsB25emPvxhmQymV9RAYDhkbF7AzGOAff9G83xzy41AQhcUqRnsK/ro5WALxIoZkNH0i2oblPRW1SlAfRnkG/yc5xOJruy5QatpEBd15r/N1xzgb8BNHA+t65ZrO8AAAAASUVORK5CYII=)}.region-screenshot_paint.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0hJREFUWIXNl0toVFcYx3/fneuo0ywq1AdS0uCjC11UiwhN1CQaEF104xMj6Z0YI4hiYtvUBHU6Wk1sNSNVpNVkJsEHahd2Y0FFJyJqRV2IGxdKae0LC5XGR8Lkzv26sBMmk7mTUTNJz+re/znf+f0499yXqCrD2Yxhpf8fBMyhAi1o5R3HYIPC37E89l9bRteQCcw9wRjToAMoEMD7lAJgHQzRJTBjHAEKEucCRb19uYbPj1ANLEmJv08c5HQFyiJMcyCUEt9F+CLnAosPMDIOxwV8SfEzhOVRi+6cC3S/wVfAjORMlPVRi3t9sxw8CUvCLBLhLCCJTOF0h58VqWMHfQXKWhgvQiQZDjzweVmbbrybgLjkGZsEMeIejgHjk+IegfIfyulMV9PvNtzdHD6DIbNRTolJY/1G/1/ZChTn8xlQ1idU6i9VcsOtpv8KGNqC8jNQqzb3d4faVmYDLw0zC/g8JT7XUUlzpjrXTdgYapur0A6ajxoLGzZ/dNEVfog8HcVtEd5NZAqPRHgvavFnJgHXTVhfa11BYkXAYxFna6ZJ8PFNCtxBWD0QPKMAQENN9R+gdxQmu42ZH6YCpTw5E+HLDosLA8EHFNi1LzwHpFDhTrp+CWI4wqaU+McnMbZnAweXl9HOUPt0jzh1Ykg58NjTH4KAlIzFRxfF+DiAYgH/OHFW3aqm55UEgnuPjvOa9kEPLEWJA6fMHv20rq7y99TC0nYKdTQRlFVRC39JhPOGErtcxU/ZwvsI7Pn6aP4I076uygSEw44d37P1kyrXyRyHCoGpCNdLw+y6/JAdGsB5GXgfATtu7xCYgDgfNtSsOZupqLSNUQLLeucQJn8wjZHw4jPrlQQEmQd6YyA4gCgLFcYA3UBN1M+3LwtOtKS7QG3Q59kUmcpNhDYDil4HDsmbUOQqysqmUOuULbVr7qcbHAx+5/XmPZt0/mPrHuB/HXAvNvEobgq1TnEwboJ0Cc42j+mcq9tY9StAcN/ht0wZsUCEncDEns5f3gwEAvagCgA0NbfOdMRoAd7/L+rkxSr5AAQeKbKpodY6ORjwfgKJrHF/eyGqxSr6tqp4QX8DuWV3ciEQsLrTTTSYAkPahv3fcNgF/gUHfRK9X5iTWQAAAABJRU5ErkJggg==)}.region-screenshot_mosaic .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAU9JREFUWIXtlzFOw0AQRd8QBJHi0wANRDkG7rzyEaiRoEoocwevU/kWUCQuwmlIpCjCuxTEkr2FQbDRpvA0K8/X+n99z4zGYq0lZJwFZT8FAeduIk3TcVVVLyJyDYw88WyBtbX2Mc/zZROQZg2kaTo2xrwCA0/EblQiMsmybFUnWg4YY2bAwFo7F5FnrfXWB6tSagRMgQdgDtzWmFsDNwA+yQG01tvdbvcEYK29amJuDYzqC799uVKq6MJFpMyybF4UxUYpBXDRJeAvcd8F/jRngrdhL6AX0AvonAOHIdPZ51pr+Y+A4A70AnoBvYDOOSAi5bH/G1pLqVJqw/dWFPlcyQDiOI6Gw+EHsNdaX9Z59xOsD+c0juPIM/ns8PjexFoOJElyJyJvHG8t/zTGTBaLRVknWg7keb4UkYmIlMDeI/EeWLnk4DgQIoK3YXABXw1vesmSLj/iAAAAAElFTkSuQmCC)}.region-screenshot_mosaic.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAU9JREFUWIXtlrFOwlAUhr8LCCHladRFCUPr4BM4klBHJ2cTncCRkbUhbrwBAxYdoAM+jeDQSI8LNe0dioZrrkP/8Zzb/l9Oz7k9SkSwqYpV9/8AUNMD3ph2Ijwq4QRwDPlsgFUF7mY+i2xCZXvAG9OWhBegashY11aEzvyaZRrIVUASBkBVhGHjiIdpl40J18snnHhLH+FWKYbAWZrTe+AUwKQ5wLTLhg/uAQSOszm9B5zvB34oL2BSeEARPfcYhjes3QAU1IsAfi2Bq0L/PdeM9TEsAUqAEqDwHvACJvvmPPRRhwBYr0AJUAKUAMX7gCLa9z8/VLml1A1YA069RsvkSgbgjmjR5F0gnvs00rj+CVYA8Za+O6Jl0lyaDAAUvGVzuQpcBJwn8MrfreWfKDphjygN5Cow81mI0AEigdiU6+5dS90ctArYkPUxtA7wBTIzaWOd+fwuAAAAAElFTkSuQmCC)}.region-screenshot_text .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANNJREFUWIXt1rEKwjAQBuD/knQoZHfVF3Dq6FN0cdClT5ZFxK1v4QP4AjoVfIJAaXNuDqXYGIRSuZuOg9x9wwWOmBlzhpp1ugAAmGGhLMszgD0icHmeAwC89zGzAjNf6ro+fAQAKGKGExG01u88YpkVERXD4hhgp5TaTnUzxqwAnAAgy7Jj13XPqTchhNuwRqnfsKqqdd/3dwDQWm+cc4+UPrMvoQAEIAABCEAAAhDAcgFt2/JY/m2MHaVRYa1tvPdXZmZrbZPaJ/ko/VUsdwf+BvACFsE7mJMe4HQAAAAASUVORK5CYII=)}.region-screenshot_text.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOZJREFUWIXtljFqAlEQhr95bmERC7WwjVWwsbLTxitskyIpcpF0OYhFCHZ7BDsP4AW0WhCxWAik0LeTQkixLL64CIsyfzUMzP9/xQyMqCp1ytWabgBAVGzEcfwFPBOAU2nwPf5AVWkt3xH1oaxcVedJkrycBQBGoXAAbXY4tp/+avnZhUaciIyKzTKAiXNuGHI7dAc94BPAdwevUbrfhmbyPF8Ve1L1DKczHlHWJxf6izc2VXxqX0IDMAADMAADMAADMIDbBXAeLasvVdlT+i9lnvTBsRRFM09a1afyU3ot3e4O3A3AL04FPO/v7IR3AAAAAElFTkSuQmCC)}.region-screenshot_arrow .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUBJREFUWIXtlkFKw0AUQN+fuKrgATyBpyhUtMcI2eUE3qG48wghgxdQ3Ej34gFceAChKxGEuMkfNylITWgmmSFd9EMghD95Lz/5ky/OOaYMMyn9KHAIAicxb57n+ayqqntVXVlrX9pyJFYXpGl66px7EpG5iHwBy6IoXnfzolQgz/MZ8CAicwDn3I+qfrflBv8GmrI/Aovm0kZVL621b9EFfOFBBYbAgwkMhQcRGAOHli7IsmypqjcAzrnbsiyfuxb/bTUAEfkAFtba974P8E9AVc+BKwBjjO1auNtqwKau62sfOAx8BWPLPkogJNxbIDTcSyAGvLdALHgvgZjwvQKqGhUOe37HIrICzppz701mtMAWzsBNJoTANj6NMXdpmnYmNGPXOpbARXN0RpIkhS8cDmAqjjaU9o3JK3AUmFzgF9Gc75AgVGnuAAAAAElFTkSuQmCC)}.region-screenshot_arrow.region-screenshot_active .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAURJREFUWIXtljtOw0AQQN84TuNIHIATcAok8wmdjwBBnIE7WHS0LkAIlAsE0ZAAJeIAFBwAKRVCUEBEvBSsKIJNdu1dOUVGcmPN+j3PakYjSimajKBR+lJgEQRCnx9PMqK3Nn2E9LbHfVGO+OqCnXM6n1OuRLEOvAY53dEBD7N5Xq4gyYgmXww0HOBDAt6Lcp0L6LJfArF+NW7BxnCfR+8CtnCnAlXgzgSqwp0I1IFDQRtuntDNhUMAJRzd9bguOzzTaih4DlvEw12eTH/gzyDKYRXY+rHjouxgkhFN2gyE31Ybh7BtA4eKV1C37LUEXMKtBVzDrQR8wI0FfMGNBHzC5woo/MJh/kKSAitaxnrImMS/FRANp+KQMQnTlexlCsfxaXmCBKQ3e4x8CazppzRUzpktHBZgK/a2lJpG4xVYCjQu8A0X1ZG/HE+CigAAAABJRU5ErkJggg==)}.region-screenshot_revocation .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAe9JREFUWIXtl79v00AYhp9zqkRWWcPCwE5b0YGZoRUDGwseqHKSjdQNsfRPaYeIkh92WDKXBdJIbJUQUocGMVZdkGAFkYDPH0PtyqTBEo1jM/RdfLo7+X3uu/NrW4kIZcoq1f0a4H8AWMoa9DyvHobhgYicBUHwuFAArfVN4BBYVUotwhv4yxZ4nldXSg2AVeCTiDwqDMDzvLox5lBE1mLzjSAIPhcCULT5HwBlmAOoJIq11u+Bezne+ztwqpQaiMi+7/snsyaltyDK0RxgGVgRkefAsdZ613Gc6vSkiwpMbcEJsOn7/perumutlzl/iraAbaAGDMfj8cN+v//zEsAiIBK5rrtujDkAbimldrvd7rOZAAlEGIbDmH4EbOQIcQQsWZZ1t9PpjGBGDrRara/AJucVWAGGcSrOpXa7fayUegFUoih6mvTPTMJ4xWmI1/MCABhjXsXNB5kAUxAfgB95ANRqtVHcvJ30Zb4NY4jcsmEymSjLsgAuDl7R3wN34utZKQCVSmUrbr4tHMB13XUR2QZMFEX7hQKkgqgK7PV6vY/JWOYhnEeO49ywbXsNeBKvvAoMbNveSc+7lIRZajQa75RS96/AY4A927Z3ms3mr/TAwioAfANOReSNiLxMlz2tf6rAIlT6f8E1QOkAvwF4y/HzpBvWEgAAAABJRU5ErkJggg==)}.region-screenshot_close .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAp5JREFUWIXtV81OE2EUPXfEtB02PAAQHTe+gezMbNy6kCCUzhcmVNGY9BXKvINgiij9IWAGTNPExGUTH8CN6a7TRacrfACYAF4XdszH5Jt2Rgyw4GyanLkz53yn997JEDPjOqFdq/qtgRttwLbte0KIx5cVEEI8sm37Ydx1Uk2BEOI+gB8AJolo2zCMtXK5/CuNsOM4Wrfb3SSiNQCnzDzXaDS+R+uUCWiaNgNgEgCYueh53pbjOIn/LsdxNM/ztobiAHCXiB4otVRktVr9RkTbErWa1EQoDmBVolu+7zcTGwCAer3+kojeRUy8H2WCiKjX672NiH+Zmpp63m63z5T3jNqERERCiA1mfi1xO4ZhFKM9QURkWdYmgFchx8yHuq7nK5XKaZzGyEiZmev1+hs5CWa2e73etpyEShzAwThxYEwCskBcEuvr6xwVJyK33+8vx8We2gAQ21wfhr9/OWbeDYJgxXXd8yTPTWwAUCcRub7f7/dFkpOHSLWKVT0h4aNhGIU04qkNSEZIQWc7nY6K/38GYro9RD6bze6apjmR6pmXaUIi2gH+jGbIpW3CRAkQEXmet4GLE/Dp+Pj4hWEYRWauSbWFXC63lzSJsQnE7IALcz5MpwrACmuSbMGxBmLG7sD3/Xy02xcWFu5kMpkqERUk+nMul1v6p1WsEmfmQ5U4ALiuex4EwQqAPYl+dnJy0iyVSplYHVUCQ/EtZi7K4oPBYGncnJumOTE9Pb1PRPMS3fJ9f151rzIBy7KeRMSbuq4rTx5Fu90+03U9z8zy+//p7OzssqpeaYCZfwIIX7etIAgWxzWTjEqlchoEwSKAlkQfqWpjm7BQKMxpmjbj+34z7XoNYZrmxPDkR7Va7WsqA1eFm/tdcGvgqvAbDu2HJArxOWkAAAAASUVORK5CYII=)}.region-screenshot_download .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAT1JREFUWIXtl01OwzAQRt9gXyGVuEPZwL6IFhaAOIKzyMESyZfohiwiuAFd5ASoKmeIzMZIIaTNrxohZTaxlPF8LzOjsSPOOaa0i0nVZ4AxAIwxmTEm67tfDwUQkdWQ/f+/BDPADDADDLXWgygMwy0QAE/W2kOD7wLYAntr7fMp3y4ZCIAbIPUCp8RT4Bo46tcZQGv9KCIfwBLIjDGXVZ8oigIRefU+uVLqpSmudLmQRFEUFEWROueugNw5txaRTw+4KL9TSt0lSbIfFQB+pXgJ7PyT0noHbJr6pDdADUTZOolDTQ+0Od+9wMYLdhKvxv8DICKrNme8tfagtV77xsyVUg9tvrwaf9AgiuP4yzl3D9y2abg6G3wj6lLvOpt8FE8OcLQEYRie5ZepLgPvZ9B9+1n0GkRj2uQ9MAN8A0iYdcIARBgzAAAAAElFTkSuQmCC)}.region-screenshot_finish .region-screenshot_tools_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgxJREFUWIXtlsFu0zAYx/8fI1nNqW/Ak3AZQ6IdPQClHJDtceo78AA8AlIkKhS13UaEiihC4jRptLATt73HJECLe2g+LvHmlmZNy9Je+l0c2Yl+P//tOCFmxjrr1lrpG4GNAIDbq4RJKe8R0T4RvQvDcLhSAaVUlYh6ALaZeRfAXWBFSyCl3APQA7Cddp3ZscIFtNYVIvrgwH/6vi/tOBV5EmqtK8zcA1Cy8PF4/KDb7Z7bewpLIIV/dOCnSZLsuHCgoE2olKpics1PkyR52Ol0fk3fe+MJzNhwP7LggJOA1rrOzIqZ37Tb7a/LwLXWj4noPQAPAJj5u+/7lVar9TvrGTeBtwBqRNSXUj5dFK6UesLMl3AAw3nwCQFmHqSXHhEdaq3reeGp8JEDHxhj5sInBIQQzwEcWwlmPpJSvsgDJ6JDBz70PG8viqI/eeQvBYIguBBC1ByJLSIKr5PQWtdnwKt5Zm7rn4Oo2WzeieP4M4CdtGtMRPthGHam4cx84MKNMZW8M88UsBLGmD4z358loZR6BuAAV2/RwBhTXRSeKWAl4jj+BGDXSgB4CcDcFPxaASsxnUTabqXtsRCiFgTBxTLwuQIA0Gg0RKlU6uMqCQAAM38bjUa5d3tWzT2KoyiKy+XyIyL64nSfENHSsbuV+3OcJvEKAIwxr6Moiv8XvpBAUbX2v+KNwEbgL4W1/0SNuoZZAAAAAElFTkSuQmCC)}')),document.head.appendChild(A)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();

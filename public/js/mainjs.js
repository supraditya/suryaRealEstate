!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  var i = [],
    n = i.slice,
    s = i.concat,
    o = i.push,
    a = i.indexOf,
    r = {},
    l = r.toString,
    c = r.hasOwnProperty,
    h = {},
    u = "1.11.1",
    d = function (t, e) {
      return new d.fn.init(t, e);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    f = /^-ms-/,
    m = /-([\da-z])/gi,
    g = function (t, e) {
      return e.toUpperCase();
    };
  function v(t) {
    var e = t.length,
      i = d.type(t);
    return (
      "function" !== i &&
      !d.isWindow(t) &&
      (!(1 !== t.nodeType || !e) ||
        "array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (d.fn = d.prototype = {
    jquery: u,
    constructor: d,
    selector: "",
    length: 0,
    toArray: function () {
      return n.call(this);
    },
    get: function (t) {
      return null != t
        ? 0 > t
          ? this[t + this.length]
          : this[t]
        : n.call(this);
    },
    pushStack: function (t) {
      var e = d.merge(this.constructor(), t);
      return (e.prevObject = this), (e.context = this.context), e;
    },
    each: function (t, e) {
      return d.each(this, t, e);
    },
    map: function (t) {
      return this.pushStack(
        d.map(this, function (e, i) {
          return t.call(e, i, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(n.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (t) {
      var e = this.length,
        i = +t + (0 > t ? e : 0);
      return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: o,
    sort: i.sort,
    splice: i.splice,
  }),
    (d.extend = d.fn.extend = function () {
      var t,
        e,
        i,
        n,
        s,
        o,
        a = arguments[0] || {},
        r = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof a && ((c = a), (a = arguments[r] || {}), r++),
          "object" == typeof a || d.isFunction(a) || (a = {}),
          r === l && ((a = this), r--);
        l > r;
        r++
      )
        if (null != (s = arguments[r]))
          for (n in s)
            (t = a[n]),
              a !== (i = s[n]) &&
                (c && i && (d.isPlainObject(i) || (e = d.isArray(i)))
                  ? (e
                      ? ((e = !1), (o = t && d.isArray(t) ? t : []))
                      : (o = t && d.isPlainObject(t) ? t : {}),
                    (a[n] = d.extend(c, o, i)))
                  : void 0 !== i && (a[n] = i));
      return a;
    }),
    d.extend({
      expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === d.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === d.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return !d.isArray(t) && t - parseFloat(t) >= 0;
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      isPlainObject: function (t) {
        var e;
        if (!t || "object" !== d.type(t) || t.nodeType || d.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !c.call(t, "constructor") &&
            !c.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (t) {
          return !1;
        }
        if (h.ownLast) for (e in t) return c.call(t, e);
        for (e in t);
        return void 0 === e || c.call(t, e);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? r[l.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (e) {
        e &&
          d.trim(e) &&
          (
            t.execScript ||
            function (e) {
              t.eval.call(t, e);
            }
          )(e);
      },
      camelCase: function (t) {
        return t.replace(f, "ms-").replace(m, g);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, i) {
        var n = 0,
          s = t.length,
          o = v(t);
        if (i) {
          if (o) for (; s > n && !1 !== e.apply(t[n], i); n++);
          else for (n in t) if (!1 === e.apply(t[n], i)) break;
        } else if (o) for (; s > n && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(p, "");
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (v(Object(t))
              ? d.merge(i, "string" == typeof t ? [t] : t)
              : o.call(i, t)),
          i
        );
      },
      inArray: function (t, e, i) {
        var n;
        if (e) {
          if (a) return a.call(e, t, i);
          for (
            n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0;
            n > i;
            i++
          )
            if (i in e && e[i] === t) return i;
        }
        return -1;
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; i > n; ) t[s++] = e[n++];
        if (i != i) for (; void 0 !== e[n]; ) t[s++] = e[n++];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        for (var n = [], s = 0, o = t.length, a = !i; o > s; s++)
          !e(t[s], s) !== a && n.push(t[s]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          o = 0,
          a = t.length,
          r = [];
        if (v(t)) for (; a > o; o++) null != (n = e(t[o], o, i)) && r.push(n);
        else for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
        return s.apply([], r);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, s, o;
        return (
          "string" == typeof e && ((o = t[e]), (e = t), (t = o)),
          d.isFunction(t)
            ? ((i = n.call(arguments, 2)),
              ((s = function () {
                return t.apply(e || this, i.concat(n.call(arguments)));
              }).guid = t.guid = t.guid || d.guid++),
              s)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: h,
    }),
    d.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        r["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var b = (function (t) {
    var e,
      i,
      n,
      s,
      o,
      a,
      r,
      l,
      c,
      h,
      u,
      d,
      p,
      f,
      m,
      g,
      v,
      b,
      _,
      y = "sizzle" + -new Date(),
      w = t.document,
      x = 0,
      C = 0,
      k = ot(),
      S = ot(),
      T = ot(),
      I = function (t, e) {
        return t === e && (u = !0), 0;
      },
      D = "undefined",
      P = 1 << 31,
      M = {}.hasOwnProperty,
      E = [],
      A = E.pop,
      N = E.push,
      $ = E.push,
      O = E.slice,
      z =
        E.indexOf ||
        function (t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (this[e] === t) return e;
          return -1;
        },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      F = W.replace("w", "w#"),
      B =
        "\\[" +
        L +
        "*(" +
        W +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        L +
        "*\\]",
      R =
        ":(" +
        W +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        B +
        ")*)|.*)\\)|)",
      q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      j = new RegExp("^" + L + "*," + L + "*"),
      Y = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      X = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(R),
      V = new RegExp("^" + F + "$"),
      K = {
        ID: new RegExp("^#(" + W + ")"),
        CLASS: new RegExp("^\\.(" + W + ")"),
        TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + B),
        PSEUDO: new RegExp("^" + R),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      tt = /[+~]/,
      et = /'|\\/g,
      it = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      nt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n != n || i
          ? e
          : 0 > n
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      };
    try {
      $.apply((E = O.call(w.childNodes)), w.childNodes),
        E[w.childNodes.length].nodeType;
    } catch (t) {
      $ = {
        apply: E.length
          ? function (t, e) {
              N.apply(t, O.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function st(t, e, n, s) {
      var o, r, c, h, u, f, v, b, x, C;
      if (
        ((e ? e.ownerDocument || e : w) !== p && d(e),
        (n = n || []),
        !t || "string" != typeof t)
      )
        return n;
      if (1 !== (h = (e = e || p).nodeType) && 9 !== h) return [];
      if (m && !s) {
        if ((o = J.exec(t)))
          if ((c = o[1])) {
            if (9 === h) {
              if (!(r = e.getElementById(c)) || !r.parentNode) return n;
              if (r.id === c) return n.push(r), n;
            } else if (
              e.ownerDocument &&
              (r = e.ownerDocument.getElementById(c)) &&
              _(e, r) &&
              r.id === c
            )
              return n.push(r), n;
          } else {
            if (o[2]) return $.apply(n, e.getElementsByTagName(t)), n;
            if (
              (c = o[3]) &&
              i.getElementsByClassName &&
              e.getElementsByClassName
            )
              return $.apply(n, e.getElementsByClassName(c)), n;
          }
        if (i.qsa && (!g || !g.test(t))) {
          if (
            ((b = v = y),
            (x = e),
            (C = 9 === h && t),
            1 === h && "object" !== e.nodeName.toLowerCase())
          ) {
            for (
              f = a(t),
                (v = e.getAttribute("id"))
                  ? (b = v.replace(et, "\\$&"))
                  : e.setAttribute("id", b),
                b = "[id='" + b + "'] ",
                u = f.length;
              u--;

            )
              f[u] = b + mt(f[u]);
            (x = (tt.test(t) && pt(e.parentNode)) || e), (C = f.join(","));
          }
          if (C)
            try {
              return $.apply(n, x.querySelectorAll(C)), n;
            } catch (t) {
            } finally {
              v || e.removeAttribute("id");
            }
        }
      }
      return l(t.replace(q, "$1"), e, n, s);
    }
    function ot() {
      var t = [];
      return function e(i, s) {
        return (
          t.push(i + " ") > n.cacheLength && delete e[t.shift()],
          (e[i + " "] = s)
        );
      };
    }
    function at(t) {
      return (t[y] = !0), t;
    }
    function rt(t) {
      var e = p.createElement("div");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function lt(t, e) {
      for (var i = t.split("|"), s = t.length; s--; ) n.attrHandle[i[s]] = e;
    }
    function ct(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || P) - (~t.sourceIndex || P);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ht(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ut(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function dt(t) {
      return at(function (e) {
        return (
          (e = +e),
          at(function (i, n) {
            for (var s, o = t([], i.length, e), a = o.length; a--; )
              i[(s = o[a])] && (i[s] = !(n[s] = i[s]));
          })
        );
      });
    }
    function pt(t) {
      return t && typeof t.getElementsByTagName !== D && t;
    }
    for (e in ((i = st.support = {}),
    (o = st.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }),
    (d = st.setDocument = function (t) {
      var e,
        s = t ? t.ownerDocument || t : w,
        a = s.defaultView;
      return s !== p && 9 === s.nodeType && s.documentElement
        ? ((p = s),
          (f = s.documentElement),
          (m = !o(s)),
          a &&
            a !== a.top &&
            (a.addEventListener
              ? a.addEventListener(
                  "unload",
                  function () {
                    d();
                  },
                  !1
                )
              : a.attachEvent &&
                a.attachEvent("onunload", function () {
                  d();
                })),
          (i.attributes = rt(function (t) {
            return (t.className = "i"), !t.getAttribute("className");
          })),
          (i.getElementsByTagName = rt(function (t) {
            return (
              t.appendChild(s.createComment("")),
              !t.getElementsByTagName("*").length
            );
          })),
          (i.getElementsByClassName =
            Z.test(s.getElementsByClassName) &&
            rt(function (t) {
              return (
                (t.innerHTML = "<div class='a'></div><div class='a i'></div>"),
                (t.firstChild.className = "i"),
                2 === t.getElementsByClassName("i").length
              );
            })),
          (i.getById = rt(function (t) {
            return (
              (f.appendChild(t).id = y),
              !s.getElementsByName || !s.getElementsByName(y).length
            );
          })),
          i.getById
            ? ((n.find.ID = function (t, e) {
                if (typeof e.getElementById !== D && m) {
                  var i = e.getElementById(t);
                  return i && i.parentNode ? [i] : [];
                }
              }),
              (n.filter.ID = function (t) {
                var e = t.replace(it, nt);
                return function (t) {
                  return t.getAttribute("id") === e;
                };
              }))
            : (delete n.find.ID,
              (n.filter.ID = function (t) {
                var e = t.replace(it, nt);
                return function (t) {
                  var i =
                    typeof t.getAttributeNode !== D && t.getAttributeNode("id");
                  return i && i.value === e;
                };
              })),
          (n.find.TAG = i.getElementsByTagName
            ? function (t, e) {
                return typeof e.getElementsByTagName !== D
                  ? e.getElementsByTagName(t)
                  : void 0;
              }
            : function (t, e) {
                var i,
                  n = [],
                  s = 0,
                  o = e.getElementsByTagName(t);
                if ("*" === t) {
                  for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                  return n;
                }
                return o;
              }),
          (n.find.CLASS =
            i.getElementsByClassName &&
            function (t, e) {
              return typeof e.getElementsByClassName !== D && m
                ? e.getElementsByClassName(t)
                : void 0;
            }),
          (v = []),
          (g = []),
          (i.qsa = Z.test(s.querySelectorAll)) &&
            (rt(function (t) {
              (t.innerHTML =
                "<select msallowclip=''><option selected=''></option></select>"),
                t.querySelectorAll("[msallowclip^='']").length &&
                  g.push("[*^$]=" + L + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length ||
                  g.push("\\[" + L + "*(?:value|" + H + ")"),
                t.querySelectorAll(":checked").length || g.push(":checked");
            }),
            rt(function (t) {
              var e = s.createElement("input");
              e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length &&
                  g.push("name" + L + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length ||
                  g.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                g.push(",.*:");
            })),
          (i.matchesSelector = Z.test(
            (b =
              f.matches ||
              f.webkitMatchesSelector ||
              f.mozMatchesSelector ||
              f.oMatchesSelector ||
              f.msMatchesSelector)
          )) &&
            rt(function (t) {
              (i.disconnectedMatch = b.call(t, "div")),
                b.call(t, "[s!='']:x"),
                v.push("!=", R);
            }),
          (g = g.length && new RegExp(g.join("|"))),
          (v = v.length && new RegExp(v.join("|"))),
          (e = Z.test(f.compareDocumentPosition)),
          (_ =
            e || Z.test(f.contains)
              ? function (t, e) {
                  var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                  return (
                    t === n ||
                    !(
                      !n ||
                      1 !== n.nodeType ||
                      !(i.contains
                        ? i.contains(n)
                        : t.compareDocumentPosition &&
                          16 & t.compareDocumentPosition(n))
                    )
                  );
                }
              : function (t, e) {
                  if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                  return !1;
                }),
          (I = e
            ? function (t, e) {
                if (t === e) return (u = !0), 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (t.ownerDocument || t) === (e.ownerDocument || e)
                        ? t.compareDocumentPosition(e)
                        : 1) ||
                  (!i.sortDetached && e.compareDocumentPosition(t) === n)
                    ? t === s || (t.ownerDocument === w && _(w, t))
                      ? -1
                      : e === s || (e.ownerDocument === w && _(w, e))
                      ? 1
                      : h
                      ? z.call(h, t) - z.call(h, e)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (t, e) {
                if (t === e) return (u = !0), 0;
                var i,
                  n = 0,
                  o = t.parentNode,
                  a = e.parentNode,
                  r = [t],
                  l = [e];
                if (!o || !a)
                  return t === s
                    ? -1
                    : e === s
                    ? 1
                    : o
                    ? -1
                    : a
                    ? 1
                    : h
                    ? z.call(h, t) - z.call(h, e)
                    : 0;
                if (o === a) return ct(t, e);
                for (i = t; (i = i.parentNode); ) r.unshift(i);
                for (i = e; (i = i.parentNode); ) l.unshift(i);
                for (; r[n] === l[n]; ) n++;
                return n
                  ? ct(r[n], l[n])
                  : r[n] === w
                  ? -1
                  : l[n] === w
                  ? 1
                  : 0;
              }),
          s)
        : p;
    }),
    (st.matches = function (t, e) {
      return st(t, null, null, e);
    }),
    (st.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== p && d(t),
        (e = e.replace(X, "='$1']")),
        !(!i.matchesSelector || !m || (v && v.test(e)) || (g && g.test(e))))
      )
        try {
          var n = b.call(t, e);
          if (
            n ||
            i.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {}
      return st(e, p, null, [t]).length > 0;
    }),
    (st.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && d(t), _(t, e);
    }),
    (st.attr = function (t, e) {
      (t.ownerDocument || t) !== p && d(t);
      var s = n.attrHandle[e.toLowerCase()],
        o = s && M.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
      return void 0 !== o
        ? o
        : i.attributes || !m
        ? t.getAttribute(e)
        : (o = t.getAttributeNode(e)) && o.specified
        ? o.value
        : null;
    }),
    (st.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (st.uniqueSort = function (t) {
      var e,
        n = [],
        s = 0,
        o = 0;
      if (
        ((u = !i.detectDuplicates),
        (h = !i.sortStable && t.slice(0)),
        t.sort(I),
        u)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
        for (; s--; ) t.splice(n[s], 1);
      }
      return (h = null), t;
    }),
    (s = st.getText = function (t) {
      var e,
        i = "",
        n = 0,
        o = t.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
        } else if (3 === o || 4 === o) return t.nodeValue;
      } else for (; (e = t[n++]); ) i += s(e);
      return i;
    }),
    ((n = st.selectors = {
      cacheLength: 50,
      createPseudo: at,
      match: K,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (t) {
          return (
            (t[1] = t[1].replace(it, nt)),
            (t[3] = (t[3] || t[4] || t[5] || "").replace(it, nt)),
            "~=" === t[2] && (t[3] = " " + t[3] + " "),
            t.slice(0, 4)
          );
        },
        CHILD: function (t) {
          return (
            (t[1] = t[1].toLowerCase()),
            "nth" === t[1].slice(0, 3)
              ? (t[3] || st.error(t[0]),
                (t[4] = +(t[4]
                  ? t[5] + (t[6] || 1)
                  : 2 * ("even" === t[3] || "odd" === t[3]))),
                (t[5] = +(t[7] + t[8] || "odd" === t[3])))
              : t[3] && st.error(t[0]),
            t
          );
        },
        PSEUDO: function (t) {
          var e,
            i = !t[6] && t[2];
          return K.CHILD.test(t[0])
            ? null
            : (t[3]
                ? (t[2] = t[4] || t[5] || "")
                : i &&
                  U.test(i) &&
                  (e = a(i, !0)) &&
                  (e = i.indexOf(")", i.length - e) - i.length) &&
                  ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
              t.slice(0, 3));
        },
      },
      filter: {
        TAG: function (t) {
          var e = t.replace(it, nt).toLowerCase();
          return "*" === t
            ? function () {
                return !0;
              }
            : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e;
              };
        },
        CLASS: function (t) {
          var e = k[t + " "];
          return (
            e ||
            ((e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) &&
              k(t, function (t) {
                return e.test(
                  ("string" == typeof t.className && t.className) ||
                    (typeof t.getAttribute !== D && t.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (t, e, i) {
          return function (n) {
            var s = st.attr(n, t);
            return null == s
              ? "!=" === e
              : !e ||
                  ((s += ""),
                  "=" === e
                    ? s === i
                    : "!=" === e
                    ? s !== i
                    : "^=" === e
                    ? i && 0 === s.indexOf(i)
                    : "*=" === e
                    ? i && s.indexOf(i) > -1
                    : "$=" === e
                    ? i && s.slice(-i.length) === i
                    : "~=" === e
                    ? (" " + s + " ").indexOf(i) > -1
                    : "|=" === e &&
                      (s === i || s.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (t, e, i, n, s) {
          var o = "nth" !== t.slice(0, 3),
            a = "last" !== t.slice(-4),
            r = "of-type" === e;
          return 1 === n && 0 === s
            ? function (t) {
                return !!t.parentNode;
              }
            : function (e, i, l) {
                var c,
                  h,
                  u,
                  d,
                  p,
                  f,
                  m = o !== a ? "nextSibling" : "previousSibling",
                  g = e.parentNode,
                  v = r && e.nodeName.toLowerCase(),
                  b = !l && !r;
                if (g) {
                  if (o) {
                    for (; m; ) {
                      for (u = e; (u = u[m]); )
                        if (
                          r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType
                        )
                          return !1;
                      f = m = "only" === t && !f && "nextSibling";
                    }
                    return !0;
                  }
                  if (((f = [a ? g.firstChild : g.lastChild]), a && b)) {
                    for (
                      p =
                        (c = (h = g[y] || (g[y] = {}))[t] || [])[0] === x &&
                        c[1],
                        d = c[0] === x && c[2],
                        u = p && g.childNodes[p];
                      (u = (++p && u && u[m]) || (d = p = 0) || f.pop());

                    )
                      if (1 === u.nodeType && ++d && u === e) {
                        h[t] = [x, p, d];
                        break;
                      }
                  } else if (b && (c = (e[y] || (e[y] = {}))[t]) && c[0] === x)
                    d = c[1];
                  else
                    for (
                      ;
                      (u = (++p && u && u[m]) || (d = p = 0) || f.pop()) &&
                      ((r
                        ? u.nodeName.toLowerCase() !== v
                        : 1 !== u.nodeType) ||
                        !++d ||
                        (b && ((u[y] || (u[y] = {}))[t] = [x, d]), u !== e));

                    );
                  return (d -= s) === n || (d % n == 0 && d / n >= 0);
                }
              };
        },
        PSEUDO: function (t, e) {
          var i,
            s =
              n.pseudos[t] ||
              n.setFilters[t.toLowerCase()] ||
              st.error("unsupported pseudo: " + t);
          return s[y]
            ? s(e)
            : s.length > 1
            ? ((i = [t, t, "", e]),
              n.setFilters.hasOwnProperty(t.toLowerCase())
                ? at(function (t, i) {
                    for (var n, o = s(t, e), a = o.length; a--; )
                      t[(n = z.call(t, o[a]))] = !(i[n] = o[a]);
                  })
                : function (t) {
                    return s(t, 0, i);
                  })
            : s;
        },
      },
      pseudos: {
        not: at(function (t) {
          var e = [],
            i = [],
            n = r(t.replace(q, "$1"));
          return n[y]
            ? at(function (t, e, i, s) {
                for (var o, a = n(t, null, s, []), r = t.length; r--; )
                  (o = a[r]) && (t[r] = !(e[r] = o));
              })
            : function (t, s, o) {
                return (e[0] = t), n(e, null, o, i), !i.pop();
              };
        }),
        has: at(function (t) {
          return function (e) {
            return st(t, e).length > 0;
          };
        }),
        contains: at(function (t) {
          return function (e) {
            return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
          };
        }),
        lang: at(function (t) {
          return (
            V.test(t || "") || st.error("unsupported lang: " + t),
            (t = t.replace(it, nt).toLowerCase()),
            function (e) {
              var i;
              do {
                if (
                  (i = m
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var i = t.location && t.location.hash;
          return i && i.slice(1) === e.id;
        },
        root: function (t) {
          return t === f;
        },
        focus: function (t) {
          return (
            t === p.activeElement &&
            (!p.hasFocus || p.hasFocus()) &&
            !!(t.type || t.href || ~t.tabIndex)
          );
        },
        enabled: function (t) {
          return !1 === t.disabled;
        },
        disabled: function (t) {
          return !0 === t.disabled;
        },
        checked: function (t) {
          var e = t.nodeName.toLowerCase();
          return (
            ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
          );
        },
        selected: function (t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling)
            if (t.nodeType < 6) return !1;
          return !0;
        },
        parent: function (t) {
          return !n.pseudos.empty(t);
        },
        header: function (t) {
          return Q.test(t.nodeName);
        },
        input: function (t) {
          return G.test(t.nodeName);
        },
        button: function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e && "button" === t.type) || "button" === e;
        },
        text: function (t) {
          var e;
          return (
            "input" === t.nodeName.toLowerCase() &&
            "text" === t.type &&
            (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
          );
        },
        first: dt(function () {
          return [0];
        }),
        last: dt(function (t, e) {
          return [e - 1];
        }),
        eq: dt(function (t, e, i) {
          return [0 > i ? i + e : i];
        }),
        even: dt(function (t, e) {
          for (var i = 0; e > i; i += 2) t.push(i);
          return t;
        }),
        odd: dt(function (t, e) {
          for (var i = 1; e > i; i += 2) t.push(i);
          return t;
        }),
        lt: dt(function (t, e, i) {
          for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
          return t;
        }),
        gt: dt(function (t, e, i) {
          for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
          return t;
        }),
      },
    }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ht(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ut(e);
    function ft() {}
    function mt(t) {
      for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
      return n;
    }
    function gt(t, e, i) {
      var n = e.dir,
        s = i && "parentNode" === n,
        o = C++;
      return e.first
        ? function (e, i, o) {
            for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
          }
        : function (e, i, a) {
            var r,
              l,
              c = [x, o];
            if (a) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || s) && t(e, i, a)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || s) {
                  if (
                    (r = (l = e[y] || (e[y] = {}))[n]) &&
                    r[0] === x &&
                    r[1] === o
                  )
                    return (c[2] = r[2]);
                  if (((l[n] = c), (c[2] = t(e, i, a)))) return !0;
                }
          };
    }
    function vt(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function bt(t, e, i, n, s) {
      for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)
        (o = t[r]) && (!i || i(o, n, s)) && (a.push(o), c && e.push(r));
      return a;
    }
    function _t(t, e, i, n, s, o) {
      return (
        n && !n[y] && (n = _t(n)),
        s && !s[y] && (s = _t(s, o)),
        at(function (o, a, r, l) {
          var c,
            h,
            u,
            d = [],
            p = [],
            f = a.length,
            m =
              o ||
              (function (t, e, i) {
                for (var n = 0, s = e.length; s > n; n++) st(t, e[n], i);
                return i;
              })(e || "*", r.nodeType ? [r] : r, []),
            g = !t || (!o && e) ? m : bt(m, d, t, r, l),
            v = i ? (s || (o ? t : f || n) ? [] : a) : g;
          if ((i && i(g, v, r, l), n))
            for (c = bt(v, p), n(c, [], r, l), h = c.length; h--; )
              (u = c[h]) && (v[p[h]] = !(g[p[h]] = u));
          if (o) {
            if (s || t) {
              if (s) {
                for (c = [], h = v.length; h--; )
                  (u = v[h]) && c.push((g[h] = u));
                s(null, (v = []), c, l);
              }
              for (h = v.length; h--; )
                (u = v[h]) &&
                  (c = s ? z.call(o, u) : d[h]) > -1 &&
                  (o[c] = !(a[c] = u));
            }
          } else (v = bt(v === a ? v.splice(f, v.length) : v)), s ? s(null, a, v, l) : $.apply(a, v);
        })
      );
    }
    function yt(t) {
      for (
        var e,
          i,
          s,
          o = t.length,
          a = n.relative[t[0].type],
          r = a || n.relative[" "],
          l = a ? 1 : 0,
          h = gt(
            function (t) {
              return t === e;
            },
            r,
            !0
          ),
          u = gt(
            function (t) {
              return z.call(e, t) > -1;
            },
            r,
            !0
          ),
          d = [
            function (t, i, n) {
              return (
                (!a && (n || i !== c)) ||
                ((e = i).nodeType ? h(t, i, n) : u(t, i, n))
              );
            },
          ];
        o > l;
        l++
      )
        if ((i = n.relative[t[l].type])) d = [gt(vt(d), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[y]) {
            for (s = ++l; o > s && !n.relative[t[s].type]; s++);
            return _t(
              l > 1 && vt(d),
              l > 1 &&
                mt(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(q, "$1"),
              i,
              s > l && yt(t.slice(l, s)),
              o > s && yt((t = t.slice(s))),
              o > s && mt(t)
            );
          }
          d.push(i);
        }
      return vt(d);
    }
    function wt(t, e) {
      var i = e.length > 0,
        s = t.length > 0,
        o = function (o, a, r, l, h) {
          var u,
            d,
            f,
            m = 0,
            g = "0",
            v = o && [],
            b = [],
            _ = c,
            y = o || (s && n.find.TAG("*", h)),
            w = (x += null == _ ? 1 : Math.random() || 0.1),
            C = y.length;
          for (h && (c = a !== p && a); g !== C && null != (u = y[g]); g++) {
            if (s && u) {
              for (d = 0; (f = t[d++]); )
                if (f(u, a, r)) {
                  l.push(u);
                  break;
                }
              h && (x = w);
            }
            i && ((u = !f && u) && m--, o && v.push(u));
          }
          if (((m += g), i && g !== m)) {
            for (d = 0; (f = e[d++]); ) f(v, b, a, r);
            if (o) {
              if (m > 0) for (; g--; ) v[g] || b[g] || (b[g] = A.call(l));
              b = bt(b);
            }
            $.apply(l, b),
              h && !o && b.length > 0 && m + e.length > 1 && st.uniqueSort(l);
          }
          return h && ((x = w), (c = _)), v;
        };
      return i ? at(o) : o;
    }
    return (
      (ft.prototype = n.filters = n.pseudos),
      (n.setFilters = new ft()),
      (a = st.tokenize = function (t, e) {
        var i,
          s,
          o,
          a,
          r,
          l,
          c,
          h = S[t + " "];
        if (h) return e ? 0 : h.slice(0);
        for (r = t, l = [], c = n.preFilter; r; ) {
          for (a in ((!i || (s = j.exec(r))) &&
            (s && (r = r.slice(s[0].length) || r), l.push((o = []))),
          (i = !1),
          (s = Y.exec(r)) &&
            ((i = s.shift()),
            o.push({ value: i, type: s[0].replace(q, " ") }),
            (r = r.slice(i.length))),
          n.filter))
            !(s = K[a].exec(r)) ||
              (c[a] && !(s = c[a](s))) ||
              ((i = s.shift()),
              o.push({ value: i, type: a, matches: s }),
              (r = r.slice(i.length)));
          if (!i) break;
        }
        return e ? r.length : r ? st.error(t) : S(t, l).slice(0);
      }),
      (r = st.compile = function (t, e) {
        var i,
          n = [],
          s = [],
          o = T[t + " "];
        if (!o) {
          for (e || (e = a(t)), i = e.length; i--; )
            (o = yt(e[i]))[y] ? n.push(o) : s.push(o);
          (o = T(t, wt(s, n))).selector = t;
        }
        return o;
      }),
      (l = st.select = function (t, e, s, o) {
        var l,
          c,
          h,
          u,
          d,
          p = "function" == typeof t && t,
          f = !o && a((t = p.selector || t));
        if (((s = s || []), 1 === f.length)) {
          if (
            (c = f[0] = f[0].slice(0)).length > 2 &&
            "ID" === (h = c[0]).type &&
            i.getById &&
            9 === e.nodeType &&
            m &&
            n.relative[c[1].type]
          ) {
            if (!(e = (n.find.ID(h.matches[0].replace(it, nt), e) || [])[0]))
              return s;
            p && (e = e.parentNode), (t = t.slice(c.shift().value.length));
          }
          for (
            l = K.needsContext.test(t) ? 0 : c.length;
            l-- && ((h = c[l]), !n.relative[(u = h.type)]);

          )
            if (
              (d = n.find[u]) &&
              (o = d(
                h.matches[0].replace(it, nt),
                (tt.test(c[0].type) && pt(e.parentNode)) || e
              ))
            ) {
              if ((c.splice(l, 1), !(t = o.length && mt(c))))
                return $.apply(s, o), s;
              break;
            }
        }
        return (
          (p || r(t, f))(o, e, !m, s, (tt.test(t) && pt(e.parentNode)) || e), s
        );
      }),
      (i.sortStable = y.split("").sort(I).join("") === y),
      (i.detectDuplicates = !!u),
      d(),
      (i.sortDetached = rt(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("div"));
      })),
      rt(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        lt("type|href|height|width", function (t, e, i) {
          return i
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        rt(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        lt("value", function (t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      rt(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        lt(H, function (t, e, i) {
          var n;
          return i
            ? void 0
            : !0 === t[e]
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
      st
    );
  })(t);
  (d.find = b),
    (d.expr = b.selectors),
    (d.expr[":"] = d.expr.pseudos),
    (d.unique = b.uniqueSort),
    (d.text = b.getText),
    (d.isXMLDoc = b.isXML),
    (d.contains = b.contains);
  var _ = d.expr.match.needsContext,
    y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(t, e, i) {
    if (d.isFunction(e))
      return d.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return d.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (w.test(e)) return d.filter(e, t, i);
      e = d.filter(e, t);
    }
    return d.grep(t, function (t) {
      return d.inArray(t, e) >= 0 !== i;
    });
  }
  (d.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? d.find.matchesSelector(n, t)
          ? [n]
          : []
        : d.find.matches(
            t,
            d.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    d.fn.extend({
      find: function (t) {
        var e,
          i = [],
          n = this,
          s = n.length;
        if ("string" != typeof t)
          return this.pushStack(
            d(t).filter(function () {
              for (e = 0; s > e; e++) if (d.contains(n[e], this)) return !0;
            })
          );
        for (e = 0; s > e; e++) d.find(t, n[e], i);
        return (
          ((i = this.pushStack(s > 1 ? d.unique(i) : i)).selector = this
            .selector
            ? this.selector + " " + t
            : t),
          i
        );
      },
      filter: function (t) {
        return this.pushStack(x(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(x(this, t || [], !0));
      },
      is: function (t) {
        return !!x(this, "string" == typeof t && _.test(t) ? d(t) : t || [], !1)
          .length;
      },
    });
  var C,
    k = t.document,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((d.fn.init = function (t, e) {
    var i, n;
    if (!t) return this;
    if ("string" == typeof t) {
      if (
        !(i =
          "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3
            ? [null, t, null]
            : S.exec(t)) ||
        (!i[1] && e)
      )
        return !e || e.jquery ? (e || C).find(t) : this.constructor(e).find(t);
      if (i[1]) {
        if (
          ((e = e instanceof d ? e[0] : e),
          d.merge(
            this,
            d.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : k, !0)
          ),
          y.test(i[1]) && d.isPlainObject(e))
        )
          for (i in e)
            d.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        return this;
      }
      if ((n = k.getElementById(i[2])) && n.parentNode) {
        if (n.id !== i[2]) return C.find(t);
        (this.length = 1), (this[0] = n);
      }
      return (this.context = k), (this.selector = t), this;
    }
    return t.nodeType
      ? ((this.context = this[0] = t), (this.length = 1), this)
      : d.isFunction(t)
      ? void 0 !== C.ready
        ? C.ready(t)
        : t(d)
      : (void 0 !== t.selector &&
          ((this.selector = t.selector), (this.context = t.context)),
        d.makeArray(t, this));
  }).prototype = d.fn),
    (C = d(k));
  var T = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(t, e) {
    do {
      t = t[e];
    } while (t && 1 !== t.nodeType);
    return t;
  }
  d.extend({
    dir: function (t, e, i) {
      for (
        var n = [], s = t[e];
        s &&
        9 !== s.nodeType &&
        (void 0 === i || 1 !== s.nodeType || !d(s).is(i));

      )
        1 === s.nodeType && n.push(s), (s = s[e]);
      return n;
    },
    sibling: function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
  }),
    d.fn.extend({
      has: function (t) {
        var e,
          i = d(t, this),
          n = i.length;
        return this.filter(function () {
          for (e = 0; n > e; e++) if (d.contains(this, i[e])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var i,
            n = 0,
            s = this.length,
            o = [],
            a = _.test(t) || "string" != typeof t ? d(t, e || this.context) : 0;
          s > n;
          n++
        )
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (a
                ? a.index(i) > -1
                : 1 === i.nodeType && d.find.matchesSelector(i, t))
            ) {
              o.push(i);
              break;
            }
        return this.pushStack(o.length > 1 ? d.unique(o) : o);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? d.inArray(this[0], d(t))
            : d.inArray(t.jquery ? t[0] : t, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(d.unique(d.merge(this.get(), d(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
    d.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return d.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return d.dir(t, "parentNode", i);
        },
        next: function (t) {
          return D(t, "nextSibling");
        },
        prev: function (t) {
          return D(t, "previousSibling");
        },
        nextAll: function (t) {
          return d.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return d.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return d.dir(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return d.dir(t, "previousSibling", i);
        },
        siblings: function (t) {
          return d.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return d.sibling(t.firstChild);
        },
        contents: function (t) {
          return d.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : d.merge([], t.childNodes);
        },
      },
      function (t, e) {
        d.fn[t] = function (i, n) {
          var s = d.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = d.filter(n, s)),
            this.length > 1 &&
              (I[t] || (s = d.unique(s)), T.test(t) && (s = s.reverse())),
            this.pushStack(s)
          );
        };
      }
    );
  var P,
    M = /\S+/g,
    E = {};
  function A() {
    k.addEventListener
      ? (k.removeEventListener("DOMContentLoaded", N, !1),
        t.removeEventListener("load", N, !1))
      : (k.detachEvent("onreadystatechange", N), t.detachEvent("onload", N));
  }
  function N() {
    (k.addEventListener ||
      "load" === event.type ||
      "complete" === k.readyState) &&
      (A(), d.ready());
  }
  (d.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? E[t] ||
          (function (t) {
            var e = (E[t] = {});
            return (
              d.each(t.match(M) || [], function (t, i) {
                e[i] = !0;
              }),
              e
            );
          })(t)
        : d.extend({}, t);
    var e,
      i,
      n,
      s,
      o,
      a,
      r = [],
      l = !t.once && [],
      c = function (u) {
        for (
          i = t.memory && u, n = !0, o = a || 0, a = 0, s = r.length, e = !0;
          r && s > o;
          o++
        )
          if (!1 === r[o].apply(u[0], u[1]) && t.stopOnFalse) {
            i = !1;
            break;
          }
        (e = !1),
          r && (l ? l.length && c(l.shift()) : i ? (r = []) : h.disable());
      },
      h = {
        add: function () {
          if (r) {
            var n = r.length;
            !(function e(i) {
              d.each(i, function (i, n) {
                var s = d.type(n);
                "function" === s
                  ? (t.unique && h.has(n)) || r.push(n)
                  : n && n.length && "string" !== s && e(n);
              });
            })(arguments),
              e ? (s = r.length) : i && ((a = n), c(i));
          }
          return this;
        },
        remove: function () {
          return (
            r &&
              d.each(arguments, function (t, i) {
                for (var n; (n = d.inArray(i, r, n)) > -1; )
                  r.splice(n, 1), e && (s >= n && s--, o >= n && o--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? d.inArray(t, r) > -1 : !(!r || !r.length);
        },
        empty: function () {
          return (r = []), (s = 0), this;
        },
        disable: function () {
          return (r = l = i = void 0), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (l = void 0), i || h.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (t, i) {
          return (
            !r ||
              (n && !l) ||
              ((i = [t, (i = i || []).slice ? i.slice() : i]),
              e ? l.push(i) : c(i)),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return h;
  }),
    d.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", d.Callbacks("once memory"), "resolved"],
            ["reject", "fail", d.Callbacks("once memory"), "rejected"],
            ["notify", "progress", d.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return d
                .Deferred(function (i) {
                  d.each(e, function (e, o) {
                    var a = d.isFunction(t[e]) && t[e];
                    s[o[1]](function () {
                      var t = a && a.apply(this, arguments);
                      t && d.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[o[0] + "With"](
                            this === n ? i.promise() : this,
                            a ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? d.extend(t, n) : n;
            },
          },
          s = {};
        return (
          (n.pipe = n.then),
          d.each(e, function (t, o) {
            var a = o[2],
              r = o[3];
            (n[o[1]] = a.add),
              r &&
                a.add(
                  function () {
                    i = r;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (s[o[0]] = function () {
                return s[o[0] + "With"](this === s ? n : this, arguments), this;
              }),
              (s[o[0] + "With"] = a.fireWith);
          }),
          n.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (t) {
        var e,
          i,
          s,
          o = 0,
          a = n.call(arguments),
          r = a.length,
          l = 1 !== r || (t && d.isFunction(t.promise)) ? r : 0,
          c = 1 === l ? t : d.Deferred(),
          h = function (t, i, s) {
            return function (o) {
              (i[t] = this),
                (s[t] = arguments.length > 1 ? n.call(arguments) : o),
                s === e ? c.notifyWith(i, s) : --l || c.resolveWith(i, s);
            };
          };
        if (r > 1)
          for (e = new Array(r), i = new Array(r), s = new Array(r); r > o; o++)
            a[o] && d.isFunction(a[o].promise)
              ? a[o]
                  .promise()
                  .done(h(o, s, a))
                  .fail(c.reject)
                  .progress(h(o, i, e))
              : --l;
        return l || c.resolveWith(s, a), c.promise();
      },
    }),
    (d.fn.ready = function (t) {
      return d.ready.promise().done(t), this;
    }),
    d.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? d.readyWait++ : d.ready(!0);
      },
      ready: function (t) {
        if (!0 === t ? !--d.readyWait : !d.isReady) {
          if (!k.body) return setTimeout(d.ready);
          (d.isReady = !0),
            (!0 !== t && --d.readyWait > 0) ||
              (P.resolveWith(k, [d]),
              d.fn.triggerHandler &&
                (d(k).triggerHandler("ready"), d(k).off("ready")));
        }
      },
    }),
    (d.ready.promise = function (e) {
      if (!P)
        if (((P = d.Deferred()), "complete" === k.readyState))
          setTimeout(d.ready);
        else if (k.addEventListener)
          k.addEventListener("DOMContentLoaded", N, !1),
            t.addEventListener("load", N, !1);
        else {
          k.attachEvent("onreadystatechange", N), t.attachEvent("onload", N);
          var i = !1;
          try {
            i = null == t.frameElement && k.documentElement;
          } catch (t) {}
          i &&
            i.doScroll &&
            (function t() {
              if (!d.isReady) {
                try {
                  i.doScroll("left");
                } catch (e) {
                  return setTimeout(t, 50);
                }
                A(), d.ready();
              }
            })();
        }
      return P.promise(e);
    });
  var $,
    O = "undefined";
  for ($ in d(h)) break;
  (h.ownLast = "0" !== $),
    (h.inlineBlockNeedsLayout = !1),
    d(function () {
      var t, e, i, n;
      (i = k.getElementsByTagName("body")[0]) &&
        i.style &&
        ((e = k.createElement("div")),
        ((n = k.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        i.appendChild(n).appendChild(e),
        typeof e.style.zoom !== O &&
          ((e.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (h.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
          t && (i.style.zoom = 1)),
        i.removeChild(n));
    }),
    (function () {
      var t = k.createElement("div");
      if (null == h.deleteExpando) {
        h.deleteExpando = !0;
        try {
          delete t.test;
        } catch (t) {
          h.deleteExpando = !1;
        }
      }
      t = null;
    })(),
    (d.acceptData = function (t) {
      var e = d.noData[(t.nodeName + " ").toLowerCase()],
        i = +t.nodeType || 1;
      return (
        (1 === i || 9 === i) &&
        (!e || (!0 !== e && t.getAttribute("classid") === e))
      );
    });
  var z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    H = /([A-Z])/g;
  function L(t, e, i) {
    if (void 0 === i && 1 === t.nodeType) {
      var n = "data-" + e.replace(H, "-$1").toLowerCase();
      if ("string" == typeof (i = t.getAttribute(n))) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                ? +i
                : z.test(i)
                ? d.parseJSON(i)
                : i));
        } catch (t) {}
        d.data(t, e, i);
      } else i = void 0;
    }
    return i;
  }
  function W(t) {
    var e;
    for (e in t)
      if (("data" !== e || !d.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
    return !0;
  }
  function F(t, e, n, s) {
    if (d.acceptData(t)) {
      var o,
        a,
        r = d.expando,
        l = t.nodeType,
        c = l ? d.cache : t,
        h = l ? t[r] : t[r] && r;
      if (
        (h && c[h] && (s || c[h].data)) ||
        void 0 !== n ||
        "string" != typeof e
      )
        return (
          h || (h = l ? (t[r] = i.pop() || d.guid++) : r),
          c[h] || (c[h] = l ? {} : { toJSON: d.noop }),
          ("object" == typeof e || "function" == typeof e) &&
            (s
              ? (c[h] = d.extend(c[h], e))
              : (c[h].data = d.extend(c[h].data, e))),
          (a = c[h]),
          s || (a.data || (a.data = {}), (a = a.data)),
          void 0 !== n && (a[d.camelCase(e)] = n),
          "string" == typeof e
            ? null == (o = a[e]) && (o = a[d.camelCase(e)])
            : (o = a),
          o
        );
    }
  }
  function B(t, e, i) {
    if (d.acceptData(t)) {
      var n,
        s,
        o = t.nodeType,
        a = o ? d.cache : t,
        r = o ? t[d.expando] : d.expando;
      if (a[r]) {
        if (e && (n = i ? a[r] : a[r].data)) {
          d.isArray(e)
            ? (e = e.concat(d.map(e, d.camelCase)))
            : e in n
            ? (e = [e])
            : (e = (e = d.camelCase(e)) in n ? [e] : e.split(" ")),
            (s = e.length);
          for (; s--; ) delete n[e[s]];
          if (i ? !W(n) : !d.isEmptyObject(n)) return;
        }
        (i || (delete a[r].data, W(a[r]))) &&
          (o
            ? d.cleanData([t], !0)
            : h.deleteExpando || a != a.window
            ? delete a[r]
            : (a[r] = null));
      }
    }
  }
  d.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (t) {
      return !!(t = t.nodeType ? d.cache[t[d.expando]] : t[d.expando]) && !W(t);
    },
    data: function (t, e, i) {
      return F(t, e, i);
    },
    removeData: function (t, e) {
      return B(t, e);
    },
    _data: function (t, e, i) {
      return F(t, e, i, !0);
    },
    _removeData: function (t, e) {
      return B(t, e, !0);
    },
  }),
    d.fn.extend({
      data: function (t, e) {
        var i,
          n,
          s,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((s = d.data(o)), 1 === o.nodeType && !d._data(o, "parsedAttrs"))
          ) {
            for (i = a.length; i--; )
              a[i] &&
                0 === (n = a[i].name).indexOf("data-") &&
                L(o, (n = d.camelCase(n.slice(5))), s[n]);
            d._data(o, "parsedAttrs", !0);
          }
          return s;
        }
        return "object" == typeof t
          ? this.each(function () {
              d.data(this, t);
            })
          : arguments.length > 1
          ? this.each(function () {
              d.data(this, t, e);
            })
          : o
          ? L(o, t, d.data(o, t))
          : void 0;
      },
      removeData: function (t) {
        return this.each(function () {
          d.removeData(this, t);
        });
      },
    }),
    d.extend({
      queue: function (t, e, i) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = d._data(t, e)),
            i &&
              (!n || d.isArray(i)
                ? (n = d._data(t, e, d.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = d.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = d._queueHooks(t, e);
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(
              t,
              function () {
                d.dequeue(t, e);
              },
              o
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          d._data(t, i) ||
          d._data(t, i, {
            empty: d.Callbacks("once memory").add(function () {
              d._removeData(t, e + "queue"), d._removeData(t, i);
            }),
          })
        );
      },
    }),
    d.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? d.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = d.queue(this, t, e);
                d._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && d.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          d.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          s = d.Deferred(),
          o = this,
          a = this.length,
          r = function () {
            --n || s.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          a--;

        )
          (i = d._data(o[a], t + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(r));
        return r(), s.promise(e);
      },
    });
  var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    q = ["Top", "Right", "Bottom", "Left"],
    j = function (t, e) {
      return (
        (t = e || t),
        "none" === d.css(t, "display") || !d.contains(t.ownerDocument, t)
      );
    },
    Y = (d.access = function (t, e, i, n, s, o, a) {
      var r = 0,
        l = t.length,
        c = null == i;
      if ("object" === d.type(i))
        for (r in ((s = !0), i)) d.access(t, e, r, i[r], !0, o, a);
      else if (
        void 0 !== n &&
        ((s = !0),
        d.isFunction(n) || (a = !0),
        c &&
          (a
            ? (e.call(t, n), (e = null))
            : ((c = e),
              (e = function (t, e, i) {
                return c.call(d(t), i);
              }))),
        e)
      )
        for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
      return s ? t : c ? e.call(t) : l ? e(t[0], i) : o;
    }),
    X = /^(?:checkbox|radio)$/i;
  !(function () {
    var t = k.createElement("input"),
      e = k.createElement("div"),
      i = k.createDocumentFragment();
    if (
      ((e.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (h.leadingWhitespace = 3 === e.firstChild.nodeType),
      (h.tbody = !e.getElementsByTagName("tbody").length),
      (h.htmlSerialize = !!e.getElementsByTagName("link").length),
      (h.html5Clone =
        "<:nav></:nav>" !== k.createElement("nav").cloneNode(!0).outerHTML),
      (t.type = "checkbox"),
      (t.checked = !0),
      i.appendChild(t),
      (h.appendChecked = t.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      i.appendChild(e),
      (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (h.noCloneEvent = !0),
      e.attachEvent &&
        (e.attachEvent("onclick", function () {
          h.noCloneEvent = !1;
        }),
        e.cloneNode(!0).click()),
      null == h.deleteExpando)
    ) {
      h.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        h.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var e,
        i,
        n = k.createElement("div");
      for (e in { submit: !0, change: !0, focusin: !0 })
        (i = "on" + e),
          (h[e + "Bubbles"] = i in t) ||
            (n.setAttribute(i, "t"),
            (h[e + "Bubbles"] = !1 === n.attributes[i].expando));
      n = null;
    })();
  var U = /^(?:input|select|textarea)$/i,
    V = /^key/,
    K = /^(?:mouse|pointer|contextmenu)|click/,
    G = /^(?:focusinfocus|focusoutblur)$/,
    Q = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function J() {
    return !1;
  }
  function tt() {
    try {
      return k.activeElement;
    } catch (t) {}
  }
  function et(t) {
    var e = it.split("|"),
      i = t.createDocumentFragment();
    if (i.createElement) for (; e.length; ) i.createElement(e.pop());
    return i;
  }
  (d.event = {
    global: {},
    add: function (t, e, i, n, s) {
      var o,
        a,
        r,
        l,
        c,
        h,
        u,
        p,
        f,
        m,
        g,
        v = d._data(t);
      if (v) {
        for (
          i.handler && ((i = (l = i).handler), (s = l.selector)),
            i.guid || (i.guid = d.guid++),
            (a = v.events) || (a = v.events = {}),
            (h = v.handle) ||
              ((h = v.handle = function (t) {
                return typeof d === O || (t && d.event.triggered === t.type)
                  ? void 0
                  : d.event.dispatch.apply(h.elem, arguments);
              }).elem = t),
            r = (e = (e || "").match(M) || [""]).length;
          r--;

        )
          (f = g = (o = Q.exec(e[r]) || [])[1]),
            (m = (o[2] || "").split(".").sort()),
            f &&
              ((c = d.event.special[f] || {}),
              (f = (s ? c.delegateType : c.bindType) || f),
              (c = d.event.special[f] || {}),
              (u = d.extend(
                {
                  type: f,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && d.expr.match.needsContext.test(s),
                  namespace: m.join("."),
                },
                l
              )),
              (p = a[f]) ||
                (((p = a[f] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, n, m, h)) ||
                  (t.addEventListener
                    ? t.addEventListener(f, h, !1)
                    : t.attachEvent && t.attachEvent("on" + f, h))),
              c.add &&
                (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              s ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (d.event.global[f] = !0));
        t = null;
      }
    },
    remove: function (t, e, i, n, s) {
      var o,
        a,
        r,
        l,
        c,
        h,
        u,
        p,
        f,
        m,
        g,
        v = d.hasData(t) && d._data(t);
      if (v && (h = v.events)) {
        for (c = (e = (e || "").match(M) || [""]).length; c--; )
          if (
            ((f = g = (r = Q.exec(e[c]) || [])[1]),
            (m = (r[2] || "").split(".").sort()),
            f)
          ) {
            for (
              u = d.event.special[f] || {},
                p = h[(f = (n ? u.delegateType : u.bindType) || f)] || [],
                r =
                  r[2] &&
                  new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = p.length;
              o--;

            )
              (a = p[o]),
                (!s && g !== a.origType) ||
                  (i && i.guid !== a.guid) ||
                  (r && !r.test(a.namespace)) ||
                  (n && n !== a.selector && ("**" !== n || !a.selector)) ||
                  (p.splice(o, 1),
                  a.selector && p.delegateCount--,
                  u.remove && u.remove.call(t, a));
            l &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(t, m, v.handle)) ||
                d.removeEvent(t, f, v.handle),
              delete h[f]);
          } else for (f in h) d.event.remove(t, f + e[c], i, n, !0);
        d.isEmptyObject(h) && (delete v.handle, d._removeData(t, "events"));
      }
    },
    trigger: function (e, i, n, s) {
      var o,
        a,
        r,
        l,
        h,
        u,
        p,
        f = [n || k],
        m = c.call(e, "type") ? e.type : e,
        g = c.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((r = u = n = n || k),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !G.test(m + d.event.triggered) &&
          (m.indexOf(".") >= 0 &&
            ((g = m.split(".")), (m = g.shift()), g.sort()),
          (a = m.indexOf(":") < 0 && "on" + m),
          ((e = e[d.expando]
            ? e
            : new d.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3),
          (e.namespace = g.join(".")),
          (e.namespace_re = e.namespace
            ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : d.makeArray(i, [e])),
          (h = d.event.special[m] || {}),
          s || !h.trigger || !1 !== h.trigger.apply(n, i)))
      ) {
        if (!s && !h.noBubble && !d.isWindow(n)) {
          for (
            l = h.delegateType || m, G.test(l + m) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            f.push(r), (u = r);
          u === (n.ownerDocument || k) &&
            f.push(u.defaultView || u.parentWindow || t);
        }
        for (p = 0; (r = f[p++]) && !e.isPropagationStopped(); )
          (e.type = p > 1 ? l : h.bindType || m),
            (o =
              (d._data(r, "events") || {})[e.type] && d._data(r, "handle")) &&
              o.apply(r, i),
            (o = a && r[a]) &&
              o.apply &&
              d.acceptData(r) &&
              ((e.result = o.apply(r, i)),
              !1 === e.result && e.preventDefault());
        if (
          ((e.type = m),
          !s &&
            !e.isDefaultPrevented() &&
            (!h._default || !1 === h._default.apply(f.pop(), i)) &&
            d.acceptData(n) &&
            a &&
            n[m] &&
            !d.isWindow(n))
        ) {
          (u = n[a]) && (n[a] = null), (d.event.triggered = m);
          try {
            n[m]();
          } catch (t) {}
          (d.event.triggered = void 0), u && (n[a] = u);
        }
        return e.result;
      }
    },
    dispatch: function (t) {
      t = d.event.fix(t);
      var e,
        i,
        s,
        o,
        a,
        r = [],
        l = n.call(arguments),
        c = (d._data(this, "events") || {})[t.type] || [],
        h = d.event.special[t.type] || {};
      if (
        ((l[0] = t),
        (t.delegateTarget = this),
        !h.preDispatch || !1 !== h.preDispatch.call(this, t))
      ) {
        for (
          r = d.event.handlers.call(this, t, c), e = 0;
          (o = r[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, a = 0;
            (s = o.handlers[a++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(s.namespace)) &&
              ((t.handleObj = s),
              (t.data = s.data),
              void 0 !==
                (i = (
                  (d.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, l)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        s,
        o,
        a = [],
        r = e.delegateCount,
        l = t.target;
      if (r && l.nodeType && (!t.button || "click" !== t.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (s = [], o = 0; r > o; o++)
              void 0 === s[(i = (n = e[o]).selector + " ")] &&
                (s[i] = n.needsContext
                  ? d(i, this).index(l) >= 0
                  : d.find(i, this, null, [l]).length),
                s[i] && s.push(n);
            s.length && a.push({ elem: l, handlers: s });
          }
      return r < e.length && a.push({ elem: this, handlers: e.slice(r) }), a;
    },
    fix: function (t) {
      if (t[d.expando]) return t;
      var e,
        i,
        n,
        s = t.type,
        o = t,
        a = this.fixHooks[s];
      for (
        a ||
          (this.fixHooks[s] = a = K.test(s)
            ? this.mouseHooks
            : V.test(s)
            ? this.keyHooks
            : {}),
          n = a.props ? this.props.concat(a.props) : this.props,
          t = new d.Event(o),
          e = n.length;
        e--;

      )
        t[(i = n[e])] = o[i];
      return (
        t.target || (t.target = o.srcElement || k),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        a.filter ? a.filter(t, o) : t
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (t, e) {
        var i,
          n,
          s,
          o = e.button,
          a = e.fromElement;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((s = (n = t.target.ownerDocument || k).documentElement),
            (i = n.body),
            (t.pageX =
              e.clientX +
              ((s && s.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((s && s.clientLeft) || (i && i.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((s && s.scrollTop) || (i && i.scrollTop) || 0) -
              ((s && s.clientTop) || (i && i.clientTop) || 0))),
          !t.relatedTarget &&
            a &&
            (t.relatedTarget = a === t.target ? e.toElement : a),
          t.which ||
            void 0 === o ||
            (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== tt() && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === tt() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return d.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return d.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, i, n) {
      var s = d.extend(new d.Event(), i, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? d.event.trigger(s, null, e) : d.event.dispatch.call(e, s),
        s.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (d.removeEvent = k.removeEventListener
      ? function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i, !1);
        }
      : function (t, e, i) {
          var n = "on" + e;
          t.detachEvent &&
            (typeof t[n] === O && (t[n] = null), t.detachEvent(n, i));
        }),
    (d.Event = function (t, e) {
      return this instanceof d.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Z
                  : J))
            : (this.type = t),
          e && d.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || d.now()),
          void (this[d.expando] = !0))
        : new d.Event(t, e);
    }),
    (d.Event.prototype = {
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = Z),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = Z),
          t &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    d.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        d.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = t.relatedTarget,
              s = t.handleObj;
            return (
              (!n || (n !== this && !d.contains(this, n))) &&
                ((t.type = s.origType),
                (i = s.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    h.submitBubbles ||
      (d.event.special.submit = {
        setup: function () {
          return (
            !d.nodeName(this, "form") &&
            void d.event.add(this, "click._submit keypress._submit", function (
              t
            ) {
              var e = t.target,
                i =
                  d.nodeName(e, "input") || d.nodeName(e, "button")
                    ? e.form
                    : void 0;
              i &&
                !d._data(i, "submitBubbles") &&
                (d.event.add(i, "submit._submit", function (t) {
                  t._submit_bubble = !0;
                }),
                d._data(i, "submitBubbles", !0));
            })
          );
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              d.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          return (
            !d.nodeName(this, "form") && void d.event.remove(this, "._submit")
          );
        },
      }),
    h.changeBubbles ||
      (d.event.special.change = {
        setup: function () {
          return U.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (d.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                d.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    (this._just_changed = !1),
                    d.event.simulate("change", this, t, !0);
                })),
              !1)
            : void d.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                U.test(e.nodeName) &&
                  !d._data(e, "changeBubbles") &&
                  (d.event.add(e, "change._change", function (t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      d.event.simulate("change", this.parentNode, t, !0);
                  }),
                  d._data(e, "changeBubbles", !0));
              });
        },
        handle: function (t) {
          var e = t.target;
          return this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
            ? t.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return d.event.remove(this, "._change"), !U.test(this.nodeName);
        },
      }),
    h.focusinBubbles ||
      d.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          d.event.simulate(e, t.target, d.event.fix(t), !0);
        };
        d.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              s = d._data(n, e);
            s || n.addEventListener(t, i, !0), d._data(n, e, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              s = d._data(n, e) - 1;
            s
              ? d._data(n, e, s)
              : (n.removeEventListener(t, i, !0), d._removeData(n, e));
          },
        };
      }),
    d.fn.extend({
      on: function (t, e, i, n, s) {
        var o, a;
        if ("object" == typeof t) {
          for (o in ("string" != typeof e && ((i = i || e), (e = void 0)), t))
            this.on(o, e, i, t[o], s);
          return this;
        }
        if (
          (null == i && null == n
            ? ((n = e), (i = e = void 0))
            : null == n &&
              ("string" == typeof e
                ? ((n = i), (i = void 0))
                : ((n = i), (i = e), (e = void 0))),
          !1 === n)
        )
          n = J;
        else if (!n) return this;
        return (
          1 === s &&
            ((a = n),
            ((n = function (t) {
              return d().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = d.guid++))),
          this.each(function () {
            d.event.add(this, t, n, i, e);
          })
        );
      },
      one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            d(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this;
        }
        return (
          (!1 === e || "function" == typeof e) && ((i = e), (e = void 0)),
          !1 === i && (i = J),
          this.each(function () {
            d.event.remove(this, t, i, e);
          })
        );
      },
      trigger: function (t, e) {
        return this.each(function () {
          d.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        return i ? d.event.trigger(t, e, i, !0) : void 0;
      },
    });
  var it =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    nt = / jQuery\d+="(?:null|\d+)"/g,
    st = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
    ot = /^\s+/,
    at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    rt = /<([\w:]+)/,
    lt = /<tbody/i,
    ct = /<|&#?\w+;/,
    ht = /<(?:script|style|link)/i,
    ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
    dt = /^$|\/(?:java|ecma)script/i,
    pt = /^true\/(.*)/,
    ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    mt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: h.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    gt = et(k).appendChild(k.createElement("div"));
  function vt(t, e) {
    var i,
      n,
      s = 0,
      o =
        typeof t.getElementsByTagName !== O
          ? t.getElementsByTagName(e || "*")
          : typeof t.querySelectorAll !== O
          ? t.querySelectorAll(e || "*")
          : void 0;
    if (!o)
      for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)
        !e || d.nodeName(n, e) ? o.push(n) : d.merge(o, vt(n, e));
    return void 0 === e || (e && d.nodeName(t, e)) ? d.merge([t], o) : o;
  }
  function bt(t) {
    X.test(t.type) && (t.defaultChecked = t.checked);
  }
  function _t(t, e) {
    return d.nodeName(t, "table") &&
      d.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function yt(t) {
    return (t.type = (null !== d.find.attr(t, "type")) + "/" + t.type), t;
  }
  function wt(t) {
    var e = pt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function xt(t, e) {
    for (var i, n = 0; null != (i = t[n]); n++)
      d._data(i, "globalEval", !e || d._data(e[n], "globalEval"));
  }
  function Ct(t, e) {
    if (1 === e.nodeType && d.hasData(t)) {
      var i,
        n,
        s,
        o = d._data(t),
        a = d._data(e, o),
        r = o.events;
      if (r)
        for (i in (delete a.handle, (a.events = {}), r))
          for (n = 0, s = r[i].length; s > n; n++) d.event.add(e, i, r[i][n]);
      a.data && (a.data = d.extend({}, a.data));
    }
  }
  function kt(t, e) {
    var i, n, s;
    if (1 === e.nodeType) {
      if (((i = e.nodeName.toLowerCase()), !h.noCloneEvent && e[d.expando])) {
        for (n in (s = d._data(e)).events) d.removeEvent(e, n, s.handle);
        e.removeAttribute(d.expando);
      }
      "script" === i && e.text !== t.text
        ? ((yt(e).text = t.text), wt(e))
        : "object" === i
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          h.html5Clone &&
            t.innerHTML &&
            !d.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === i && X.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === i
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" === i || "textarea" === i) &&
          (e.defaultValue = t.defaultValue);
    }
  }
  (mt.optgroup = mt.option),
    (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead),
    (mt.th = mt.td),
    d.extend({
      clone: function (t, e, i) {
        var n,
          s,
          o,
          a,
          r,
          l = d.contains(t.ownerDocument, t);
        if (
          (h.html5Clone || d.isXMLDoc(t) || !st.test("<" + t.nodeName + ">")
            ? (o = t.cloneNode(!0))
            : ((gt.innerHTML = t.outerHTML),
              gt.removeChild((o = gt.firstChild))),
          !(
            (h.noCloneEvent && h.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            d.isXMLDoc(t)
          ))
        )
          for (n = vt(o), r = vt(t), a = 0; null != (s = r[a]); ++a)
            n[a] && kt(s, n[a]);
        if (e)
          if (i)
            for (r = r || vt(t), n = n || vt(o), a = 0; null != (s = r[a]); a++)
              Ct(s, n[a]);
          else Ct(t, o);
        return (
          (n = vt(o, "script")).length > 0 && xt(n, !l && vt(t, "script")),
          (n = r = s = null),
          o
        );
      },
      buildFragment: function (t, e, i, n) {
        for (
          var s, o, a, r, l, c, u, p = t.length, f = et(e), m = [], g = 0;
          p > g;
          g++
        )
          if ((o = t[g]) || 0 === o)
            if ("object" === d.type(o)) d.merge(m, o.nodeType ? [o] : o);
            else if (ct.test(o)) {
              for (
                r = r || f.appendChild(e.createElement("div")),
                  l = (rt.exec(o) || ["", ""])[1].toLowerCase(),
                  u = mt[l] || mt._default,
                  r.innerHTML = u[1] + o.replace(at, "<$1></$2>") + u[2],
                  s = u[0];
                s--;

              )
                r = r.lastChild;
              if (
                (!h.leadingWhitespace &&
                  ot.test(o) &&
                  m.push(e.createTextNode(ot.exec(o)[0])),
                !h.tbody)
              )
                for (
                  s =
                    (o =
                      "table" !== l || lt.test(o)
                        ? "<table>" !== u[1] || lt.test(o)
                          ? 0
                          : r
                        : r.firstChild) && o.childNodes.length;
                  s--;

                )
                  d.nodeName((c = o.childNodes[s]), "tbody") &&
                    !c.childNodes.length &&
                    o.removeChild(c);
              for (d.merge(m, r.childNodes), r.textContent = ""; r.firstChild; )
                r.removeChild(r.firstChild);
              r = f.lastChild;
            } else m.push(e.createTextNode(o));
        for (
          r && f.removeChild(r),
            h.appendChecked || d.grep(vt(m, "input"), bt),
            g = 0;
          (o = m[g++]);

        )
          if (
            (!n || -1 === d.inArray(o, n)) &&
            ((a = d.contains(o.ownerDocument, o)),
            (r = vt(f.appendChild(o), "script")),
            a && xt(r),
            i)
          )
            for (s = 0; (o = r[s++]); ) dt.test(o.type || "") && i.push(o);
        return (r = null), f;
      },
      cleanData: function (t, e) {
        for (
          var n,
            s,
            o,
            a,
            r = 0,
            l = d.expando,
            c = d.cache,
            u = h.deleteExpando,
            p = d.event.special;
          null != (n = t[r]);
          r++
        )
          if ((e || d.acceptData(n)) && (a = (o = n[l]) && c[o])) {
            if (a.events)
              for (s in a.events)
                p[s] ? d.event.remove(n, s) : d.removeEvent(n, s, a.handle);
            c[o] &&
              (delete c[o],
              u
                ? delete n[l]
                : typeof n.removeAttribute !== O
                ? n.removeAttribute(l)
                : (n[l] = null),
              i.push(o));
          }
      },
    }),
    d.fn.extend({
      text: function (t) {
        return Y(
          this,
          function (t) {
            return void 0 === t
              ? d.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || k).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            _t(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = _t(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var i, n = t ? d.filter(t, this) : this, s = 0;
          null != (i = n[s]);
          s++
        )
          e || 1 !== i.nodeType || d.cleanData(vt(i)),
            i.parentNode &&
              (e && d.contains(i.ownerDocument, i) && xt(vt(i, "script")),
              i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && d.cleanData(vt(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && d.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return d.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return Y(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t)
              return 1 === e.nodeType ? e.innerHTML.replace(nt, "") : void 0;
            if (
              !(
                "string" != typeof t ||
                ht.test(t) ||
                (!h.htmlSerialize && st.test(t)) ||
                (!h.leadingWhitespace && ot.test(t)) ||
                mt[(rt.exec(t) || ["", ""])[1].toLowerCase()]
              )
            ) {
              t = t.replace(at, "<$1></$2>");
              try {
                for (; n > i; i++)
                  1 === (e = this[i] || {}).nodeType &&
                    (d.cleanData(vt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              d.cleanData(vt(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, e) {
        t = s.apply([], t);
        var i,
          n,
          o,
          a,
          r,
          l,
          c = 0,
          u = this.length,
          p = this,
          f = u - 1,
          m = t[0],
          g = d.isFunction(m);
        if (g || (u > 1 && "string" == typeof m && !h.checkClone && ut.test(m)))
          return this.each(function (i) {
            var n = p.eq(i);
            g && (t[0] = m.call(this, i, n.html())), n.domManip(t, e);
          });
        if (
          u &&
          ((i = (l = d.buildFragment(t, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === l.childNodes.length && (l = i),
          i)
        ) {
          for (o = (a = d.map(vt(l, "script"), yt)).length; u > c; c++)
            (n = l),
              c !== f &&
                ((n = d.clone(n, !0, !0)), o && d.merge(a, vt(n, "script"))),
              e.call(this[c], n, c);
          if (o)
            for (
              r = a[a.length - 1].ownerDocument, d.map(a, wt), c = 0;
              o > c;
              c++
            )
              (n = a[c]),
                dt.test(n.type || "") &&
                  !d._data(n, "globalEval") &&
                  d.contains(r, n) &&
                  (n.src
                    ? d._evalUrl && d._evalUrl(n.src)
                    : d.globalEval(
                        (n.text || n.textContent || n.innerHTML || "").replace(
                          ft,
                          ""
                        )
                      ));
          l = i = null;
        }
        return this;
      },
    }),
    d.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        d.fn[t] = function (t) {
          for (var i, n = 0, s = [], a = d(t), r = a.length - 1; r >= n; n++)
            (i = n === r ? this : this.clone(!0)),
              d(a[n])[e](i),
              o.apply(s, i.get());
          return this.pushStack(s);
        };
      }
    );
  var St,
    Tt = {};
  function It(e, i) {
    var n,
      s = d(i.createElement(e)).appendTo(i.body),
      o =
        t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0]))
          ? n.display
          : d.css(s[0], "display");
    return s.detach(), o;
  }
  function Dt(t) {
    var e = k,
      i = Tt[t];
    return (
      i ||
        (("none" !== (i = It(t, e)) && i) ||
          ((e = (
            (St = (
              St || d("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement))[0].contentWindow ||
            St[0].contentDocument
          ).document).write(),
          e.close(),
          (i = It(t, e)),
          St.detach()),
        (Tt[t] = i)),
      i
    );
  }
  !(function () {
    var t;
    h.shrinkWrapBlocks = function () {
      return null != t
        ? t
        : ((t = !1),
          (i = k.getElementsByTagName("body")[0]) && i.style
            ? ((e = k.createElement("div")),
              ((n = k.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              i.appendChild(n).appendChild(e),
              typeof e.style.zoom !== O &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(k.createElement("div")).style.width = "5px"),
                (t = 3 !== e.offsetWidth)),
              i.removeChild(n),
              t)
            : void 0);
      var e, i, n;
    };
  })();
  var Pt,
    Mt,
    Et = /^margin/,
    At = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
    Nt = /^(top|right|bottom|left)$/;
  function $t(t, e) {
    return {
      get: function () {
        var i = t();
        if (null != i)
          return i
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
      },
    };
  }
  t.getComputedStyle
    ? ((Pt = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null);
      }),
      (Mt = function (t, e, i) {
        var n,
          s,
          o,
          a,
          r = t.style;
        return (
          (a = (i = i || Pt(t)) ? i.getPropertyValue(e) || i[e] : void 0),
          i &&
            ("" !== a || d.contains(t.ownerDocument, t) || (a = d.style(t, e)),
            At.test(a) &&
              Et.test(e) &&
              ((n = r.width),
              (s = r.minWidth),
              (o = r.maxWidth),
              (r.minWidth = r.maxWidth = r.width = a),
              (a = i.width),
              (r.width = n),
              (r.minWidth = s),
              (r.maxWidth = o))),
          void 0 === a ? a : a + ""
        );
      }))
    : k.documentElement.currentStyle &&
      ((Pt = function (t) {
        return t.currentStyle;
      }),
      (Mt = function (t, e, i) {
        var n,
          s,
          o,
          a,
          r = t.style;
        return (
          null == (a = (i = i || Pt(t)) ? i[e] : void 0) &&
            r &&
            r[e] &&
            (a = r[e]),
          At.test(a) &&
            !Nt.test(e) &&
            ((n = r.left),
            (o = (s = t.runtimeStyle) && s.left) &&
              (s.left = t.currentStyle.left),
            (r.left = "fontSize" === e ? "1em" : a),
            (a = r.pixelLeft + "px"),
            (r.left = n),
            o && (s.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      })),
    (function () {
      var e, i, n, s, o, a, r;
      if (
        (((e = k.createElement("div")).innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (i = (n = e.getElementsByTagName("a")[0]) && n.style))
      ) {
        function l() {
          var e, i, n, l;
          (i = k.getElementsByTagName("body")[0]) &&
            i.style &&
            ((e = k.createElement("div")),
            ((n = k.createElement("div")).style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            i.appendChild(n).appendChild(e),
            (e.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (s = o = !1),
            (r = !0),
            t.getComputedStyle &&
              ((s = "1%" !== (t.getComputedStyle(e, null) || {}).top),
              (o =
                "4px" ===
                (t.getComputedStyle(e, null) || { width: "4px" }).width),
              ((l = e.appendChild(
                k.createElement("div")
              )).style.cssText = e.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (l.style.marginRight = l.style.width = "0"),
              (e.style.width = "1px"),
              (r = !parseFloat(
                (t.getComputedStyle(l, null) || {}).marginRight
              ))),
            (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((l = e.getElementsByTagName("td"))[0].style.cssText =
              "margin:0;border:0;padding:0;display:none"),
            (a = 0 === l[0].offsetHeight) &&
              ((l[0].style.display = ""),
              (l[1].style.display = "none"),
              (a = 0 === l[0].offsetHeight)),
            i.removeChild(n));
        }
        (i.cssText = "float:left;opacity:.5"),
          (h.opacity = "0.5" === i.opacity),
          (h.cssFloat = !!i.cssFloat),
          (e.style.backgroundClip = "content-box"),
          (e.cloneNode(!0).style.backgroundClip = ""),
          (h.clearCloneStyle = "content-box" === e.style.backgroundClip),
          (h.boxSizing =
            "" === i.boxSizing ||
            "" === i.MozBoxSizing ||
            "" === i.WebkitBoxSizing),
          d.extend(h, {
            reliableHiddenOffsets: function () {
              return null == a && l(), a;
            },
            boxSizingReliable: function () {
              return null == o && l(), o;
            },
            pixelPosition: function () {
              return null == s && l(), s;
            },
            reliableMarginRight: function () {
              return null == r && l(), r;
            },
          });
      }
    })(),
    (d.swap = function (t, e, i, n) {
      var s,
        o,
        a = {};
      for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((s = i.apply(t, n || [])), e)) t.style[o] = a[o];
      return s;
    });
  var Ot = /alpha\([^)]*\)/i,
    zt = /opacity\s*=\s*([^)]*)/,
    Ht = /^(none|table(?!-c[ea]).+)/,
    Lt = new RegExp("^(" + R + ")(.*)$", "i"),
    Wt = new RegExp("^([+-])=(" + R + ")", "i"),
    Ft = { position: "absolute", visibility: "hidden", display: "block" },
    Bt = { letterSpacing: "0", fontWeight: "400" },
    Rt = ["Webkit", "O", "Moz", "ms"];
  function qt(t, e) {
    if (e in t) return e;
    for (
      var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Rt.length;
      s--;

    )
      if ((e = Rt[s] + i) in t) return e;
    return n;
  }
  function jt(t, e) {
    for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++)
      (n = t[a]).style &&
        ((o[a] = d._data(n, "olddisplay")),
        (i = n.style.display),
        e
          ? (o[a] || "none" !== i || (n.style.display = ""),
            "" === n.style.display &&
              j(n) &&
              (o[a] = d._data(n, "olddisplay", Dt(n.nodeName))))
          : ((s = j(n)),
            ((i && "none" !== i) || !s) &&
              d._data(n, "olddisplay", s ? i : d.css(n, "display"))));
    for (a = 0; r > a; a++)
      (n = t[a]).style &&
        ((e && "none" !== n.style.display && "" !== n.style.display) ||
          (n.style.display = e ? o[a] || "" : "none"));
    return t;
  }
  function Yt(t, e, i) {
    var n = Lt.exec(e);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
  }
  function Xt(t, e, i, n, s) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      "margin" === i && (a += d.css(t, i + q[o], !0, s)),
        n
          ? ("content" === i && (a -= d.css(t, "padding" + q[o], !0, s)),
            "margin" !== i && (a -= d.css(t, "border" + q[o] + "Width", !0, s)))
          : ((a += d.css(t, "padding" + q[o], !0, s)),
            "padding" !== i &&
              (a += d.css(t, "border" + q[o] + "Width", !0, s)));
    return a;
  }
  function Ut(t, e, i) {
    var n = !0,
      s = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = Pt(t),
      a = h.boxSizing && "border-box" === d.css(t, "boxSizing", !1, o);
    if (0 >= s || null == s) {
      if (
        ((0 > (s = Mt(t, e, o)) || null == s) && (s = t.style[e]), At.test(s))
      )
        return s;
      (n = a && (h.boxSizingReliable() || s === t.style[e])),
        (s = parseFloat(s) || 0);
    }
    return s + Xt(t, e, i || (a ? "border" : "content"), n, o) + "px";
  }
  function Vt(t, e, i, n, s) {
    return new Vt.prototype.init(t, e, i, n, s);
  }
  d.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = Mt(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: h.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
          o,
          a,
          r = d.camelCase(e),
          l = t.style;
        if (
          ((e = d.cssProps[r] || (d.cssProps[r] = qt(l, r))),
          (a = d.cssHooks[e] || d.cssHooks[r]),
          void 0 === i)
        )
          return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
        if (
          ("string" === (o = typeof i) &&
            (s = Wt.exec(i)) &&
            ((i = (s[1] + 1) * s[2] + parseFloat(d.css(t, e))), (o = "number")),
          null != i &&
            i == i &&
            ("number" !== o || d.cssNumber[r] || (i += "px"),
            h.clearCloneStyle ||
              "" !== i ||
              0 !== e.indexOf("background") ||
              (l[e] = "inherit"),
            !(a && "set" in a && void 0 === (i = a.set(t, i, n)))))
        )
          try {
            l[e] = i;
          } catch (t) {}
      }
    },
    css: function (t, e, i, n) {
      var s,
        o,
        a,
        r = d.camelCase(e);
      return (
        (e = d.cssProps[r] || (d.cssProps[r] = qt(t.style, r))),
        (a = d.cssHooks[e] || d.cssHooks[r]) &&
          "get" in a &&
          (o = a.get(t, !0, i)),
        void 0 === o && (o = Mt(t, e, n)),
        "normal" === o && e in Bt && (o = Bt[e]),
        "" === i || i
          ? ((s = parseFloat(o)), !0 === i || d.isNumeric(s) ? s || 0 : o)
          : o
      );
    },
  }),
    d.each(["height", "width"], function (t, e) {
      d.cssHooks[e] = {
        get: function (t, i, n) {
          return i
            ? Ht.test(d.css(t, "display")) && 0 === t.offsetWidth
              ? d.swap(t, Ft, function () {
                  return Ut(t, e, n);
                })
              : Ut(t, e, n)
            : void 0;
        },
        set: function (t, i, n) {
          var s = n && Pt(t);
          return Yt(
            0,
            i,
            n
              ? Xt(
                  t,
                  e,
                  n,
                  h.boxSizing && "border-box" === d.css(t, "boxSizing", !1, s),
                  s
                )
              : 0
          );
        },
      };
    }),
    h.opacity ||
      (d.cssHooks.opacity = {
        get: function (t, e) {
          return zt.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var i = t.style,
            n = t.currentStyle,
            s = d.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            o = (n && n.filter) || i.filter || "";
          (i.zoom = 1),
            ((e >= 1 || "" === e) &&
              "" === d.trim(o.replace(Ot, "")) &&
              i.removeAttribute &&
              (i.removeAttribute("filter"), "" === e || (n && !n.filter))) ||
              (i.filter = Ot.test(o) ? o.replace(Ot, s) : o + " " + s);
        },
      }),
    (d.cssHooks.marginRight = $t(h.reliableMarginRight, function (t, e) {
      return e
        ? d.swap(t, { display: "inline-block" }, Mt, [t, "marginRight"])
        : void 0;
    })),
    d.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (d.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            s[t + q[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        Et.test(t) || (d.cssHooks[t + e].set = Yt);
    }),
    d.fn.extend({
      css: function (t, e) {
        return Y(
          this,
          function (t, e, i) {
            var n,
              s,
              o = {},
              a = 0;
            if (d.isArray(e)) {
              for (n = Pt(t), s = e.length; s > a; a++)
                o[e[a]] = d.css(t, e[a], !1, n);
              return o;
            }
            return void 0 !== i ? d.style(t, e, i) : d.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return jt(this, !0);
      },
      hide: function () {
        return jt(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              j(this) ? d(this).show() : d(this).hide();
            });
      },
    }),
    (d.Tween = Vt),
    (Vt.prototype = {
      constructor: Vt,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (d.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = Vt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Vt.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Vt.propHooks[this.prop];
        return (
          (this.pos = e = this.options.duration
            ? d.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              )
            : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Vt.propHooks._default.set(this),
          this
        );
      },
    }),
    (Vt.prototype.init.prototype = Vt.prototype),
    (Vt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? (e = d.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0
            : t.elem[t.prop];
        },
        set: function (t) {
          d.fx.step[t.prop]
            ? d.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[d.cssProps[t.prop]] || d.cssHooks[t.prop])
            ? d.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (Vt.propHooks.scrollTop = Vt.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      },
    }),
    (d.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (d.fx = Vt.prototype.init),
    (d.fx.step = {});
  var Kt,
    Gt,
    Qt = /^(?:toggle|show|hide)$/,
    Zt = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
    Jt = /queueHooks$/,
    te = [
      function (t, e, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          c,
          u = this,
          p = {},
          f = t.style,
          m = t.nodeType && j(t),
          g = d._data(t, "fxshow");
        for (n in (i.queue ||
          (null == (r = d._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (l = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || l();
            })),
          r.unqueued++,
          u.always(function () {
            u.always(function () {
              r.unqueued--, d.queue(t, "fx").length || r.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (c = d.css(t, "display")),
          "inline" ===
            ("none" === c ? d._data(t, "olddisplay") || Dt(t.nodeName) : c) &&
            "none" === d.css(t, "float") &&
            (h.inlineBlockNeedsLayout && "inline" !== Dt(t.nodeName)
              ? (f.zoom = 1)
              : (f.display = "inline-block"))),
        i.overflow &&
          ((f.overflow = "hidden"),
          h.shrinkWrapBlocks() ||
            u.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
        e))
          if (((s = e[n]), Qt.exec(s))) {
            if (
              (delete e[n],
              (o = o || "toggle" === s),
              s === (m ? "hide" : "show"))
            ) {
              if ("show" !== s || !g || void 0 === g[n]) continue;
              m = !0;
            }
            p[n] = (g && g[n]) || d.style(t, n);
          } else c = void 0;
        if (d.isEmptyObject(p))
          "inline" === ("none" === c ? Dt(t.nodeName) : c) && (f.display = c);
        else
          for (n in (g
            ? "hidden" in g && (m = g.hidden)
            : (g = d._data(t, "fxshow", {})),
          o && (g.hidden = !m),
          m
            ? d(t).show()
            : u.done(function () {
                d(t).hide();
              }),
          u.done(function () {
            var e;
            for (e in (d._removeData(t, "fxshow"), p)) d.style(t, e, p[e]);
          }),
          p))
            (a = se(m ? g[n] : 0, n, u)),
              n in g ||
                ((g[n] = a.start),
                m &&
                  ((a.end = a.start),
                  (a.start = "width" === n || "height" === n ? 1 : 0)));
      },
    ],
    ee = {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e),
            n = i.cur(),
            s = Zt.exec(e),
            o = (s && s[3]) || (d.cssNumber[t] ? "" : "px"),
            a =
              (d.cssNumber[t] || ("px" !== o && +n)) &&
              Zt.exec(d.css(i.elem, t)),
            r = 1,
            l = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (s = s || []), (a = +n || 1);
            do {
              (a /= r = r || ".5"), d.style(i.elem, t, a + o);
            } while (r !== (r = i.cur() / n) && 1 !== r && --l);
          }
          return (
            s &&
              ((a = i.start = +a || +n || 0),
              (i.unit = o),
              (i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2])),
            i
          );
        },
      ],
    };
  function ie() {
    return (
      setTimeout(function () {
        Kt = void 0;
      }),
      (Kt = d.now())
    );
  }
  function ne(t, e) {
    var i,
      n = { height: t },
      s = 0;
    for (e = e ? 1 : 0; 4 > s; s += 2 - e)
      n["margin" + (i = q[s])] = n["padding" + i] = t;
    return e && (n.opacity = n.width = t), n;
  }
  function se(t, e, i) {
    for (
      var n, s = (ee[e] || []).concat(ee["*"]), o = 0, a = s.length;
      a > o;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function oe(t, e, i) {
    var n,
      s,
      o = 0,
      a = te.length,
      r = d.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Kt || ie(),
            i = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (i / c.duration || 0),
            o = 0,
            a = c.tweens.length;
          a > o;
          o++
        )
          c.tweens[o].run(n);
        return (
          r.notifyWith(t, [c, n, i]),
          1 > n && a ? i : (r.resolveWith(t, [c]), !1)
        );
      },
      c = r.promise({
        elem: t,
        props: d.extend({}, e),
        opts: d.extend(!0, { specialEasing: {} }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Kt || ie(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = d.Tween(
            t,
            c.opts,
            e,
            i,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? c.tweens.length : 0;
          if (s) return this;
          for (s = !0; n > i; i++) c.tweens[i].run(1);
          return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this;
        },
      }),
      h = c.props;
    for (
      (function (t, e) {
        var i, n, s, o, a;
        for (i in t)
          if (
            ((s = e[(n = d.camelCase(i))]),
            (o = t[i]),
            d.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (a = d.cssHooks[n]) && ("expand" in a))
          )
            for (i in ((o = a.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = s));
          else e[n] = s;
      })(h, c.opts.specialEasing);
      a > o;
      o++
    )
      if ((n = te[o].call(c, t, h, c.opts))) return n;
    return (
      d.map(h, se, c),
      d.isFunction(c.opts.start) && c.opts.start.call(t, c),
      d.fx.timer(d.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  (d.Animation = d.extend(oe, {
    tweener: function (t, e) {
      d.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var i, n = 0, s = t.length; s > n; n++)
        (i = t[n]), (ee[i] = ee[i] || []), ee[i].unshift(e);
    },
    prefilter: function (t, e) {
      e ? te.unshift(t) : te.push(t);
    },
  })),
    (d.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? d.extend({}, t)
          : {
              complete: i || (!i && e) || (d.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !d.isFunction(e) && e),
            };
      return (
        (n.duration = d.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in d.fx.speeds
          ? d.fx.speeds[n.duration]
          : d.fx.speeds._default),
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          d.isFunction(n.old) && n.old.call(this),
            n.queue && d.dequeue(this, n.queue);
        }),
        n
      );
    }),
    d.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(j)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = d.isEmptyObject(t),
          o = d.speed(e, i, n),
          a = function () {
            var e = oe(this, d.extend({}, t), o);
            (s || d._data(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              s = null != t && t + "queueHooks",
              o = d.timers,
              a = d._data(this);
            if (s) a[s] && a[s].stop && n(a[s]);
            else for (s in a) a[s] && a[s].stop && Jt.test(s) && n(a[s]);
            for (s = o.length; s--; )
              o[s].elem !== this ||
                (null != t && o[s].queue !== t) ||
                (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
            (e || !i) && d.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              i = d._data(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = d.timers,
              a = n ? n.length : 0;
            for (
              i.finish = !0,
                d.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; a > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    d.each(["toggle", "show", "hide"], function (t, e) {
      var i = d.fn[e];
      d.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(ne(e, !0), t, n, s);
      };
    }),
    d.each(
      {
        slideDown: ne("show"),
        slideUp: ne("hide"),
        slideToggle: ne("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        d.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (d.timers = []),
    (d.fx.tick = function () {
      var t,
        e = d.timers,
        i = 0;
      for (Kt = d.now(); i < e.length; i++)
        (t = e[i])() || e[i] !== t || e.splice(i--, 1);
      e.length || d.fx.stop(), (Kt = void 0);
    }),
    (d.fx.timer = function (t) {
      d.timers.push(t), t() ? d.fx.start() : d.timers.pop();
    }),
    (d.fx.interval = 13),
    (d.fx.start = function () {
      Gt || (Gt = setInterval(d.fx.tick, d.fx.interval));
    }),
    (d.fx.stop = function () {
      clearInterval(Gt), (Gt = null);
    }),
    (d.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (d.fn.delay = function (t, e) {
      return (
        (t = (d.fx && d.fx.speeds[t]) || t),
        (e = e || "fx"),
        this.queue(e, function (e, i) {
          var n = setTimeout(e, t);
          i.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (function () {
      var t, e, i, n, s;
      (e = k.createElement("div")).setAttribute("className", "t"),
        (e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = e.getElementsByTagName("a")[0]),
        (s = (i = k.createElement("select")).appendChild(
          k.createElement("option")
        )),
        (t = e.getElementsByTagName("input")[0]),
        (n.style.cssText = "top:1px"),
        (h.getSetAttribute = "t" !== e.className),
        (h.style = /top/.test(n.getAttribute("style"))),
        (h.hrefNormalized = "/a" === n.getAttribute("href")),
        (h.checkOn = !!t.value),
        (h.optSelected = s.selected),
        (h.enctype = !!k.createElement("form").enctype),
        (i.disabled = !0),
        (h.optDisabled = !s.disabled),
        (t = k.createElement("input")).setAttribute("value", ""),
        (h.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (h.radioValue = "t" === t.value);
    })();
  var ae = /\r/g;
  d.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        s = this[0];
      return arguments.length
        ? ((n = d.isFunction(t)),
          this.each(function (i) {
            var s;
            1 === this.nodeType &&
              (null == (s = n ? t.call(this, i, d(this).val()) : t)
                ? (s = "")
                : "number" == typeof s
                ? (s += "")
                : d.isArray(s) &&
                  (s = d.map(s, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                d.valHooks[this.type] ||
                d.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, s, "value")) ||
                (this.value = s));
          }))
        : s
        ? (e = d.valHooks[s.type] || d.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (i = e.get(s, "value"))
          ? i
          : "string" == typeof (i = s.value)
          ? i.replace(ae, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    d.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = d.find.attr(t, "value");
            return null != e ? e : d.trim(d.text(t));
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                s = t.selectedIndex,
                o = "select-one" === t.type || 0 > s,
                a = o ? null : [],
                r = o ? s + 1 : n.length,
                l = 0 > s ? r : o ? s : 0;
              r > l;
              l++
            )
              if (
                !(
                  (!(i = n[l]).selected && l !== s) ||
                  (h.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                  (i.parentNode.disabled &&
                    d.nodeName(i.parentNode, "optgroup"))
                )
              ) {
                if (((e = d(i).val()), o)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = d.makeArray(e), a = s.length;
              a--;

            )
              if (((n = s[a]), d.inArray(d.valHooks.option.get(n), o) >= 0))
                try {
                  n.selected = i = !0;
                } catch (t) {
                  n.scrollHeight;
                }
              else n.selected = !1;
            return i || (t.selectedIndex = -1), s;
          },
        },
      },
    }),
    d.each(["radio", "checkbox"], function () {
      (d.valHooks[this] = {
        set: function (t, e) {
          return d.isArray(e)
            ? (t.checked = d.inArray(d(t).val(), e) >= 0)
            : void 0;
        },
      }),
        h.checkOn ||
          (d.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var re,
    le,
    ce = d.expr.attrHandle,
    he = /^(?:checked|selected)$/i,
    ue = h.getSetAttribute,
    de = h.input;
  d.fn.extend({
    attr: function (t, e) {
      return Y(this, d.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        d.removeAttr(this, t);
      });
    },
  }),
    d.extend({
      attr: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return typeof t.getAttribute === O
            ? d.prop(t, e, i)
            : ((1 === o && d.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (n = d.attrHooks[e] || (d.expr.match.bool.test(e) ? le : re))),
              void 0 === i
                ? n && "get" in n && null !== (s = n.get(t, e))
                  ? s
                  : null == (s = d.find.attr(t, e))
                  ? void 0
                  : s
                : null !== i
                ? n && "set" in n && void 0 !== (s = n.set(t, i, e))
                  ? s
                  : (t.setAttribute(e, i + ""), i)
                : void d.removeAttr(t, e));
      },
      removeAttr: function (t, e) {
        var i,
          n,
          s = 0,
          o = e && e.match(M);
        if (o && 1 === t.nodeType)
          for (; (i = o[s++]); )
            (n = d.propFix[i] || i),
              d.expr.match.bool.test(i)
                ? (de && ue) || !he.test(i)
                  ? (t[n] = !1)
                  : (t[d.camelCase("default-" + i)] = t[n] = !1)
                : d.attr(t, i, ""),
              t.removeAttribute(ue ? i : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!h.radioValue && "radio" === e && d.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
    }),
    (le = {
      set: function (t, e, i) {
        return (
          !1 === e
            ? d.removeAttr(t, i)
            : (de && ue) || !he.test(i)
            ? t.setAttribute((!ue && d.propFix[i]) || i, i)
            : (t[d.camelCase("default-" + i)] = t[i] = !0),
          i
        );
      },
    }),
    d.each(d.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = ce[e] || d.find.attr;
      ce[e] =
        (de && ue) || !he.test(e)
          ? function (t, e, n) {
              var s, o;
              return (
                n ||
                  ((o = ce[e]),
                  (ce[e] = s),
                  (s = null != i(t, e, n) ? e.toLowerCase() : null),
                  (ce[e] = o)),
                s
              );
            }
          : function (t, e, i) {
              return i
                ? void 0
                : t[d.camelCase("default-" + e)]
                ? e.toLowerCase()
                : null;
            };
    }),
    (de && ue) ||
      (d.attrHooks.value = {
        set: function (t, e, i) {
          return d.nodeName(t, "input")
            ? void (t.defaultValue = e)
            : re && re.set(t, e, i);
        },
      }),
    ue ||
      ((re = {
        set: function (t, e, i) {
          var n = t.getAttributeNode(i);
          return (
            n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))),
            (n.value = e += ""),
            "value" === i || e === t.getAttribute(i) ? e : void 0
          );
        },
      }),
      (ce.id = ce.name = ce.coords = function (t, e, i) {
        var n;
        return i
          ? void 0
          : (n = t.getAttributeNode(e)) && "" !== n.value
          ? n.value
          : null;
      }),
      (d.valHooks.button = {
        get: function (t, e) {
          var i = t.getAttributeNode(e);
          return i && i.specified ? i.value : void 0;
        },
        set: re.set,
      }),
      (d.attrHooks.contenteditable = {
        set: function (t, e, i) {
          re.set(t, "" !== e && e, i);
        },
      }),
      d.each(["width", "height"], function (t, e) {
        d.attrHooks[e] = {
          set: function (t, i) {
            return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
          },
        };
      })),
    h.style ||
      (d.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || void 0;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      });
  var pe = /^(?:input|select|textarea|button|object)$/i,
    fe = /^(?:a|area)$/i;
  d.fn.extend({
    prop: function (t, e) {
      return Y(this, d.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return (
        (t = d.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = void 0), delete this[t];
          } catch (t) {}
        })
      );
    },
  }),
    d.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 !== o || !d.isXMLDoc(t)) &&
              ((e = d.propFix[e] || e), (s = d.propHooks[e])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                ? n
                : (t[e] = i)
              : s && "get" in s && null !== (n = s.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = d.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : pe.test(t.nodeName) || (fe.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    h.hrefNormalized ||
      d.each(["href", "src"], function (t, e) {
        d.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      }),
    h.optSelected ||
      (d.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      }),
    d.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        d.propFix[this.toLowerCase()] = this;
      }
    ),
    h.enctype || (d.propFix.enctype = "encoding");
  var me = /[\t\r\n\f]/g;
  d.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r = 0,
        l = this.length,
        c = "string" == typeof t && t;
      if (d.isFunction(t))
        return this.each(function (e) {
          d(this).addClass(t.call(this, e, this.className));
        });
      if (c)
        for (e = (t || "").match(M) || []; l > r; r++)
          if (
            (n =
              1 === (i = this[r]).nodeType &&
              (i.className ? (" " + i.className + " ").replace(me, " ") : " "))
          ) {
            for (o = 0; (s = e[o++]); )
              n.indexOf(" " + s + " ") < 0 && (n += s + " ");
            (a = d.trim(n)), i.className !== a && (i.className = a);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r = 0,
        l = this.length,
        c = 0 === arguments.length || ("string" == typeof t && t);
      if (d.isFunction(t))
        return this.each(function (e) {
          d(this).removeClass(t.call(this, e, this.className));
        });
      if (c)
        for (e = (t || "").match(M) || []; l > r; r++)
          if (
            (n =
              1 === (i = this[r]).nodeType &&
              (i.className ? (" " + i.className + " ").replace(me, " ") : ""))
          ) {
            for (o = 0; (s = e[o++]); )
              for (; n.indexOf(" " + s + " ") >= 0; )
                n = n.replace(" " + s + " ", " ");
            (a = t ? d.trim(n) : ""), i.className !== a && (i.className = a);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : this.each(
            d.isFunction(t)
              ? function (i) {
                  d(this).toggleClass(t.call(this, i, this.className, e), e);
                }
              : function () {
                  if ("string" === i)
                    for (
                      var e, n = 0, s = d(this), o = t.match(M) || [];
                      (e = o[n++]);

                    )
                      s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                  else
                    (i === O || "boolean" === i) &&
                      (this.className &&
                        d._data(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === t
                          ? ""
                          : d._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(me, " ").indexOf(e) >= 0
        )
          return !0;
      return !1;
    },
  }),
    d.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        d.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    d.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    });
  var ge = d.now(),
    ve = /\?/,
    be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (d.parseJSON = function (e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
    var i,
      n = null,
      s = d.trim(e + "");
    return s &&
      !d.trim(
        s.replace(be, function (t, e, s, o) {
          return (
            i && e && (n = 0), 0 === n ? t : ((i = s || e), (n += !o - !s), "")
          );
        })
      )
      ? Function("return " + s)()
      : d.error("Invalid JSON: " + e);
  }),
    (d.parseXML = function (e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        t.DOMParser
          ? (i = new DOMParser().parseFromString(e, "text/xml"))
          : (((i = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            i.loadXML(e));
      } catch (t) {
        i = void 0;
      }
      return (
        (i &&
          i.documentElement &&
          !i.getElementsByTagName("parsererror").length) ||
          d.error("Invalid XML: " + e),
        i
      );
    });
  var _e,
    ye,
    we = /#.*$/,
    xe = /([?&])_=[^&]*/,
    Ce = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    ke = /^(?:GET|HEAD)$/,
    Se = /^\/\//,
    Te = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ie = {},
    De = {},
    Pe = "*/".concat("*");
  try {
    ye = location.href;
  } catch (t) {
    ((ye = k.createElement("a")).href = ""), (ye = ye.href);
  }
  function Me(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(M) || [];
      if (d.isFunction(i))
        for (; (n = o[s++]); )
          "+" === n.charAt(0)
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function Ee(t, e, i, n) {
    var s = {},
      o = t === De;
    function a(r) {
      var l;
      return (
        (s[r] = !0),
        d.each(t[r] || [], function (t, r) {
          var c = r(e, i, n);
          return "string" != typeof c || o || s[c]
            ? o
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), a(c), !1);
        }),
        l
      );
    }
    return a(e.dataTypes[0]) || (!s["*"] && a("*"));
  }
  function Ae(t, e) {
    var i,
      n,
      s = d.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
    return i && d.extend(!0, t, i), t;
  }
  (_e = Te.exec(ye.toLowerCase()) || []),
    d.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ye,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          _e[1]
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pe,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": d.parseJSON,
          "text xml": d.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Ae(Ae(t, d.ajaxSettings), e) : Ae(d.ajaxSettings, t);
      },
      ajaxPrefilter: Me(Ie),
      ajaxTransport: Me(De),
      ajax: function (t, e) {
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var i,
          n,
          s,
          o,
          a,
          r,
          l,
          c,
          h = d.ajaxSetup({}, e),
          u = h.context || h,
          p = h.context && (u.nodeType || u.jquery) ? d(u) : d.event,
          f = d.Deferred(),
          m = d.Callbacks("once memory"),
          g = h.statusCode || {},
          v = {},
          b = {},
          _ = 0,
          y = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === _) {
                if (!c)
                  for (c = {}; (e = Ce.exec(o)); ) c[e[1].toLowerCase()] = e[2];
                e = c[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? o : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return _ || ((t = b[i] = b[i] || t), (v[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return _ || (h.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > _) for (e in t) g[e] = [g[e], t[e]];
                else w.always(t[w.status]);
              return this;
            },
            abort: function (t) {
              var e = t || y;
              return l && l.abort(e), x(0, e), this;
            },
          };
        if (
          ((f.promise(w).complete = m.add),
          (w.success = w.done),
          (w.error = w.fail),
          (h.url = ((t || h.url || ye) + "")
            .replace(we, "")
            .replace(Se, _e[1] + "//")),
          (h.type = e.method || e.type || h.method || h.type),
          (h.dataTypes = d
            .trim(h.dataType || "*")
            .toLowerCase()
            .match(M) || [""]),
          null == h.crossDomain &&
            ((i = Te.exec(h.url.toLowerCase())),
            (h.crossDomain = !(
              !i ||
              (i[1] === _e[1] &&
                i[2] === _e[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (_e[3] || ("http:" === _e[1] ? "80" : "443")))
            ))),
          h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = d.param(h.data, h.traditional)),
          Ee(Ie, h, e, w),
          2 === _)
        )
          return w;
        for (n in ((r = h.global) &&
          0 == d.active++ &&
          d.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !ke.test(h.type)),
        (s = h.url),
        h.hasContent ||
          (h.data &&
            ((s = h.url += (ve.test(s) ? "&" : "?") + h.data), delete h.data),
          !1 === h.cache &&
            (h.url = xe.test(s)
              ? s.replace(xe, "$1_=" + ge++)
              : s + (ve.test(s) ? "&" : "?") + "_=" + ge++)),
        h.ifModified &&
          (d.lastModified[s] &&
            w.setRequestHeader("If-Modified-Since", d.lastModified[s]),
          d.etag[s] && w.setRequestHeader("If-None-Match", d.etag[s])),
        ((h.data && h.hasContent && !1 !== h.contentType) || e.contentType) &&
          w.setRequestHeader("Content-Type", h.contentType),
        w.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Pe + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          w.setRequestHeader(n, h.headers[n]);
        if (h.beforeSend && (!1 === h.beforeSend.call(u, w, h) || 2 === _))
          return w.abort();
        for (n in ((y = "abort"), { success: 1, error: 1, complete: 1 }))
          w[n](h[n]);
        if ((l = Ee(De, h, e, w))) {
          (w.readyState = 1),
            r && p.trigger("ajaxSend", [w, h]),
            h.async &&
              h.timeout > 0 &&
              (a = setTimeout(function () {
                w.abort("timeout");
              }, h.timeout));
          try {
            (_ = 1), l.send(v, x);
          } catch (t) {
            if (!(2 > _)) throw t;
            x(-1, t);
          }
        } else x(-1, "No Transport");
        function x(t, e, i, n) {
          var c,
            v,
            b,
            y,
            x,
            C = e;
          2 !== _ &&
            ((_ = 2),
            a && clearTimeout(a),
            (l = void 0),
            (o = n || ""),
            (w.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && 300 > t) || 304 === t),
            i &&
              (y = (function (t, e, i) {
                for (
                  var n, s, o, a, r = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === s &&
                      (s = t.mimeType || e.getResponseHeader("Content-Type"));
                if (s)
                  for (a in r)
                    if (r[a] && r[a].test(s)) {
                      l.unshift(a);
                      break;
                    }
                if (l[0] in i) o = l[0];
                else {
                  for (a in i) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                      o = a;
                      break;
                    }
                    n || (n = a);
                  }
                  o = o || n;
                }
                return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
              })(h, w, i)),
            (y = (function (t, e, i, n) {
              var s,
                o,
                a,
                r,
                l,
                c = {},
                h = t.dataTypes.slice();
              if (h[1])
                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
              for (o = h.shift(); o; )
                if (
                  (t.responseFields[o] && (i[t.responseFields[o]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = h.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = c[l + " " + o] || c["* " + o]))
                      for (s in c)
                        if (
                          (r = s.split(" "))[1] === o &&
                          (a = c[l + " " + r[0]] || c["* " + r[0]])
                        ) {
                          !0 === a
                            ? (a = c[s])
                            : !0 !== c[s] && ((o = r[0]), h.unshift(r[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && t.throws) e = a(e);
                      else
                        try {
                          e = a(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: a
                              ? t
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(h, y, w, c)),
            c
              ? (h.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")) &&
                    (d.lastModified[s] = x),
                  (x = w.getResponseHeader("etag")) && (d.etag[s] = x)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = y.state), (v = y.data), (c = !(b = y.error))))
              : ((b = C), (t || !C) && ((C = "error"), 0 > t && (t = 0))),
            (w.status = t),
            (w.statusText = (e || C) + ""),
            c ? f.resolveWith(u, [v, C, w]) : f.rejectWith(u, [w, C, b]),
            w.statusCode(g),
            (g = void 0),
            r && p.trigger(c ? "ajaxSuccess" : "ajaxError", [w, h, c ? v : b]),
            m.fireWith(u, [w, C]),
            r &&
              (p.trigger("ajaxComplete", [w, h]),
              --d.active || d.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (t, e, i) {
        return d.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return d.get(t, void 0, e, "script");
      },
    }),
    d.each(["get", "post"], function (t, e) {
      d[e] = function (t, i, n, s) {
        return (
          d.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
          d.ajax({ url: t, type: e, dataType: s, data: i, success: n })
        );
      };
    }),
    d.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        d.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (d._evalUrl = function (t) {
      return d.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    d.fn.extend({
      wrapAll: function (t) {
        if (d.isFunction(t))
          return this.each(function (e) {
            d(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = d(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (t) {
        return this.each(
          d.isFunction(t)
            ? function (e) {
                d(this).wrapInner(t.call(this, e));
              }
            : function () {
                var e = d(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              }
        );
      },
      wrap: function (t) {
        var e = d.isFunction(t);
        return this.each(function (i) {
          d(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (d.expr.filters.hidden = function (t) {
      return (
        (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
        (!h.reliableHiddenOffsets() &&
          "none" === ((t.style && t.style.display) || d.css(t, "display")))
      );
    }),
    (d.expr.filters.visible = function (t) {
      return !d.expr.filters.hidden(t);
    });
  var Ne = /%20/g,
    $e = /\[\]$/,
    Oe = /\r?\n/g,
    ze = /^(?:submit|button|image|reset|file)$/i,
    He = /^(?:input|select|textarea|keygen)/i;
  function Le(t, e, i, n) {
    var s;
    if (d.isArray(e))
      d.each(e, function (e, s) {
        i || $e.test(t)
          ? n(t, s)
          : Le(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n);
      });
    else if (i || "object" !== d.type(e)) n(t, e);
    else for (s in e) Le(t + "[" + s + "]", e[s], i, n);
  }
  (d.param = function (t, e) {
    var i,
      n = [],
      s = function (t, e) {
        (e = d.isFunction(e) ? e() : null == e ? "" : e),
          (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = d.ajaxSettings && d.ajaxSettings.traditional),
      d.isArray(t) || (t.jquery && !d.isPlainObject(t)))
    )
      d.each(t, function () {
        s(this.name, this.value);
      });
    else for (i in t) Le(i, t[i], e, s);
    return n.join("&").replace(Ne, "+");
  }),
    d.fn.extend({
      serialize: function () {
        return d.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = d.prop(this, "elements");
          return t ? d.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !d(this).is(":disabled") &&
              He.test(this.nodeName) &&
              !ze.test(t) &&
              (this.checked || !X.test(t))
            );
          })
          .map(function (t, e) {
            var i = d(this).val();
            return null == i
              ? null
              : d.isArray(i)
              ? d.map(i, function (t) {
                  return { name: e.name, value: t.replace(Oe, "\r\n") };
                })
              : { name: e.name, value: i.replace(Oe, "\r\n") };
          })
          .get();
      },
    }),
    (d.ajaxSettings.xhr =
      void 0 !== t.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Re()) ||
              (function () {
                try {
                  return new t.ActiveXObject("Microsoft.XMLHTTP");
                } catch (t) {}
              })()
            );
          }
        : Re);
  var We = 0,
    Fe = {},
    Be = d.ajaxSettings.xhr();
  function Re() {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  }
  t.ActiveXObject &&
    d(t).on("unload", function () {
      for (var t in Fe) Fe[t](void 0, !0);
    }),
    (h.cors = !!Be && "withCredentials" in Be),
    (Be = h.ajax = !!Be) &&
      d.ajaxTransport(function (t) {
        var e;
        if (!t.crossDomain || h.cors)
          return {
            send: function (i, n) {
              var s,
                o = t.xhr(),
                a = ++We;
              if (
                (o.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) o[s] = t.xhrFields[s];
              for (s in (t.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest"),
              i))
                void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
              o.send((t.hasContent && t.data) || null),
                (e = function (i, s) {
                  var r, l, c;
                  if (e && (s || 4 === o.readyState))
                    if (
                      (delete Fe[a],
                      (e = void 0),
                      (o.onreadystatechange = d.noop),
                      s)
                    )
                      4 !== o.readyState && o.abort();
                    else {
                      (c = {}),
                        (r = o.status),
                        "string" == typeof o.responseText &&
                          (c.text = o.responseText);
                      try {
                        l = o.statusText;
                      } catch (t) {
                        l = "";
                      }
                      r || !t.isLocal || t.crossDomain
                        ? 1223 === r && (r = 204)
                        : (r = c.text ? 200 : 404);
                    }
                  c && n(r, l, c, o.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === o.readyState
                    ? setTimeout(e)
                    : (o.onreadystatechange = Fe[a] = e)
                  : e();
            },
            abort: function () {
              e && e(void 0, !0);
            },
          };
      }),
    d.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return d.globalEval(t), t;
        },
      },
    }),
    d.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    d.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e,
          i = k.head || d("head")[0] || k.documentElement;
        return {
          send: function (n, s) {
            ((e = k.createElement("script")).async = !0),
              t.scriptCharset && (e.charset = t.scriptCharset),
              (e.src = t.url),
              (e.onload = e.onreadystatechange = function (t, i) {
                (i || !e.readyState || /loaded|complete/.test(e.readyState)) &&
                  ((e.onload = e.onreadystatechange = null),
                  e.parentNode && e.parentNode.removeChild(e),
                  (e = null),
                  i || s(200, "success"));
              }),
              i.insertBefore(e, i.firstChild);
          },
          abort: function () {
            e && e.onload(void 0, !0);
          },
        };
      }
    });
  var qe = [],
    je = /(=)\?(?=&|$)|\?\?/;
  d.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = qe.pop() || d.expando + "_" + ge++;
      return (this[t] = !0), t;
    },
  }),
    d.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s,
        o,
        a,
        r =
          !1 !== e.jsonp &&
          (je.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              je.test(e.data) &&
              "data");
      return r || "jsonp" === e.dataTypes[0]
        ? ((s = e.jsonpCallback = d.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(je, "$1" + s))
            : !1 !== e.jsonp &&
              (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
          (e.converters["script json"] = function () {
            return a || d.error(s + " was not called"), a[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[s]),
          (t[s] = function () {
            a = arguments;
          }),
          n.always(function () {
            (t[s] = o),
              e[s] && ((e.jsonpCallback = i.jsonpCallback), qe.push(s)),
              a && d.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (d.parseHTML = function (t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((i = e), (e = !1)), (e = e || k);
      var n = y.exec(t),
        s = !i && [];
      return n
        ? [e.createElement(n[1])]
        : ((n = d.buildFragment([t], e, s)),
          s && s.length && d(s).remove(),
          d.merge([], n.childNodes));
    });
  var Ye = d.fn.load;
  (d.fn.load = function (t, e, i) {
    if ("string" != typeof t && Ye) return Ye.apply(this, arguments);
    var n,
      s,
      o,
      a = this,
      r = t.indexOf(" ");
    return (
      r >= 0 && ((n = d.trim(t.slice(r, t.length))), (t = t.slice(0, r))),
      d.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && "object" == typeof e && (o = "POST"),
      a.length > 0 &&
        d
          .ajax({ url: t, type: o, dataType: "html", data: e })
          .done(function (t) {
            (s = arguments),
              a.html(n ? d("<div>").append(d.parseHTML(t)).find(n) : t);
          })
          .complete(
            i &&
              function (t, e) {
                a.each(i, s || [t.responseText, e, t]);
              }
          ),
      this
    );
  }),
    (d.expr.filters.animated = function (t) {
      return d.grep(d.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var Xe = t.document.documentElement;
  function Ue(t) {
    return d.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  (d.offset = {
    setOffset: function (t, e, i) {
      var n,
        s,
        o,
        a,
        r,
        l,
        c = d.css(t, "position"),
        h = d(t),
        u = {};
      "static" === c && (t.style.position = "relative"),
        (r = h.offset()),
        (o = d.css(t, "top")),
        (l = d.css(t, "left")),
        ("absolute" === c || "fixed" === c) && d.inArray("auto", [o, l]) > -1
          ? ((a = (n = h.position()).top), (s = n.left))
          : ((a = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
        d.isFunction(e) && (e = e.call(t, i, r)),
        null != e.top && (u.top = e.top - r.top + a),
        null != e.left && (u.left = e.left - r.left + s),
        "using" in e ? e.using.call(t, u) : h.css(u);
    },
  }),
    d.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                d.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = { top: 0, left: 0 },
          s = this[0],
          o = s && s.ownerDocument;
        return o
          ? ((e = o.documentElement),
            d.contains(e, s)
              ? (typeof s.getBoundingClientRect !== O &&
                  (n = s.getBoundingClientRect()),
                (i = Ue(o)),
                {
                  top:
                    n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left:
                    n.left +
                    (i.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0),
                })
              : n)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = { top: 0, left: 0 },
            n = this[0];
          return (
            "fixed" === d.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                d.nodeName(t[0], "html") || (i = t.offset()),
                (i.top += d.css(t[0], "borderTopWidth", !0)),
                (i.left += d.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - i.top - d.css(n, "marginTop", !0),
              left: e.left - i.left - d.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || Xe;
            t && !d.nodeName(t, "html") && "static" === d.css(t, "position");

          )
            t = t.offsetParent;
          return t || Xe;
        });
      },
    }),
    d.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      e
    ) {
      var i = /Y/.test(e);
      d.fn[t] = function (n) {
        return Y(
          this,
          function (t, n, s) {
            var o = Ue(t);
            return void 0 === s
              ? o
                ? e in o
                  ? o[e]
                  : o.document.documentElement[n]
                : t[n]
              : void (o
                  ? o.scrollTo(
                      i ? d(o).scrollLeft() : s,
                      i ? s : d(o).scrollTop()
                    )
                  : (t[n] = s));
          },
          t,
          n,
          arguments.length,
          null
        );
      };
    }),
    d.each(["top", "left"], function (t, e) {
      d.cssHooks[e] = $t(h.pixelPosition, function (t, i) {
        return i
          ? ((i = Mt(t, e)), At.test(i) ? d(t).position()[e] + "px" : i)
          : void 0;
      });
    }),
    d.each({ Height: "height", Width: "width" }, function (t, e) {
      d.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (
        i,
        n
      ) {
        d.fn[n] = function (n, s) {
          var o = arguments.length && (i || "boolean" != typeof n),
            a = i || (!0 === n || !0 === s ? "margin" : "border");
          return Y(
            this,
            function (e, i, n) {
              var s;
              return d.isWindow(e)
                ? e.document.documentElement["client" + t]
                : 9 === e.nodeType
                ? ((s = e.documentElement),
                  Math.max(
                    e.body["scroll" + t],
                    s["scroll" + t],
                    e.body["offset" + t],
                    s["offset" + t],
                    s["client" + t]
                  ))
                : void 0 === n
                ? d.css(e, i, a)
                : d.style(e, i, n, a);
            },
            e,
            o ? n : void 0,
            o,
            null
          );
        };
      });
    }),
    (d.fn.size = function () {
      return this.length;
    }),
    (d.fn.andSelf = d.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return d;
      });
  var Ve = t.jQuery,
    Ke = t.$;
  return (
    (d.noConflict = function (e) {
      return t.$ === d && (t.$ = Ke), e && t.jQuery === d && (t.jQuery = Ve), d;
    }),
    typeof e === O && (t.jQuery = t.$ = d),
    d
  );
}),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, s) {
      return jQuery.easing[jQuery.easing.def](t, e, i, n, s);
    },
    easeInQuad: function (t, e, i, n, s) {
      return n * (e /= s) * e + i;
    },
    easeOutQuad: function (t, e, i, n, s) {
      return -n * (e /= s) * (e - 2) + i;
    },
    easeInOutQuad: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e + i
        : (-n / 2) * (--e * (e - 2) - 1) + i;
    },
    easeInCubic: function (t, e, i, n, s) {
      return n * (e /= s) * e * e + i;
    },
    easeOutCubic: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e + 1) + i;
    },
    easeInOutCubic: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e + 2) + i;
    },
    easeInQuart: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e + i;
    },
    easeOutQuart: function (t, e, i, n, s) {
      return -n * ((e = e / s - 1) * e * e * e - 1) + i;
    },
    easeInOutQuart: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e + i
        : (-n / 2) * ((e -= 2) * e * e * e - 2) + i;
    },
    easeInQuint: function (t, e, i, n, s) {
      return n * (e /= s) * e * e * e * e + i;
    },
    easeOutQuint: function (t, e, i, n, s) {
      return n * ((e = e / s - 1) * e * e * e * e + 1) + i;
    },
    easeInOutQuint: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (n / 2) * e * e * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e * e * e + 2) + i;
    },
    easeInSine: function (t, e, i, n, s) {
      return -n * Math.cos((e / s) * (Math.PI / 2)) + n + i;
    },
    easeOutSine: function (t, e, i, n, s) {
      return n * Math.sin((e / s) * (Math.PI / 2)) + i;
    },
    easeInOutSine: function (t, e, i, n, s) {
      return (-n / 2) * (Math.cos((Math.PI * e) / s) - 1) + i;
    },
    easeInExpo: function (t, e, i, n, s) {
      return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i;
    },
    easeOutExpo: function (t, e, i, n, s) {
      return e == s ? i + n : n * (1 - Math.pow(2, (-10 * e) / s)) + i;
    },
    easeInOutExpo: function (t, e, i, n, s) {
      return 0 == e
        ? i
        : e == s
        ? i + n
        : (e /= s / 2) < 1
        ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i
        : (n / 2) * (2 - Math.pow(2, -10 * --e)) + i;
    },
    easeInCirc: function (t, e, i, n, s) {
      return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i;
    },
    easeOutCirc: function (t, e, i, n, s) {
      return n * Math.sqrt(1 - (e = e / s - 1) * e) + i;
    },
    easeInOutCirc: function (t, e, i, n, s) {
      return (e /= s / 2) < 1
        ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + i
        : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
    },
    easeInElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        a = 0,
        r = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((a || (a = 0.3 * s), r < Math.abs(n))) {
        r = n;
        o = a / 4;
      } else o = (a / (2 * Math.PI)) * Math.asin(n / r);
      return (
        -r *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e * s - o) * (2 * Math.PI)) / a) +
        i
      );
    },
    easeOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        a = 0,
        r = n;
      if (0 == e) return i;
      if (1 == (e /= s)) return i + n;
      if ((a || (a = 0.3 * s), r < Math.abs(n))) {
        r = n;
        o = a / 4;
      } else o = (a / (2 * Math.PI)) * Math.asin(n / r);
      return (
        r * Math.pow(2, -10 * e) * Math.sin(((e * s - o) * (2 * Math.PI)) / a) +
        n +
        i
      );
    },
    easeInOutElastic: function (t, e, i, n, s) {
      var o = 1.70158,
        a = 0,
        r = n;
      if (0 == e) return i;
      if (2 == (e /= s / 2)) return i + n;
      if ((a || (a = s * (0.3 * 1.5)), r < Math.abs(n))) {
        r = n;
        o = a / 4;
      } else o = (a / (2 * Math.PI)) * Math.asin(n / r);
      return e < 1
        ? r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e * s - o) * (2 * Math.PI)) / a) *
            -0.5 +
            i
        : r *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e * s - o) * (2 * Math.PI)) / a) *
            0.5 +
            n +
            i;
    },
    easeInBack: function (t, e, i, n, s, o) {
      return (
        null == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
      );
    },
    easeOutBack: function (t, e, i, n, s, o) {
      return (
        null == o && (o = 1.70158),
        n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
      );
    },
    easeInOutBack: function (t, e, i, n, s, o) {
      return (
        null == o && (o = 1.70158),
        (e /= s / 2) < 1
          ? (n / 2) * (e * e * ((1 + (o *= 1.525)) * e - o)) + i
          : (n / 2) * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + i
      );
    },
    easeInBounce: function (t, e, i, n, s) {
      return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i;
    },
    easeOutBounce: function (t, e, i, n, s) {
      return (e /= s) < 1 / 2.75
        ? n * (7.5625 * e * e) + i
        : e < 2 / 2.75
        ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + i
        : e < 2.5 / 2.75
        ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + i
        : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + i;
    },
    easeInOutBounce: function (t, e, i, n, s) {
      return e < s / 2
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) +
            0.5 * n +
            i;
    },
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    t.ui = t.ui || {};
    t.ui.version = "1.12.1";
    var e,
      i = 0,
      n = Array.prototype.slice;
    (t.cleanData =
      ((e = t.cleanData),
      function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
          try {
            (n = t._data(s, "events")) &&
              n.remove &&
              t(s).triggerHandler("remove");
          } catch (t) {}
        e(i);
      })),
      (t.widget = function (e, i, n) {
        var s,
          o,
          a,
          r = {},
          l = e.split(".")[0],
          c = l + "-" + (e = e.split(".")[1]);
        return (
          n || ((n = i), (i = t.Widget)),
          t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
          (t.expr[":"][c.toLowerCase()] = function (e) {
            return !!t.data(e, c);
          }),
          (t[l] = t[l] || {}),
          (s = t[l][e]),
          (o = t[l][e] = function (t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
          t.extend(o, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          ((a = new i()).options = t.widget.extend({}, a.options)),
          t.each(n, function (e, n) {
            t.isFunction(n)
              ? (r[e] = (function () {
                  function t() {
                    return i.prototype[e].apply(this, arguments);
                  }
                  function s(t) {
                    return i.prototype[e].apply(this, t);
                  }
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : (r[e] = n);
          }),
          (o.prototype = t.widget.extend(
            a,
            { widgetEventPrefix: (s && a.widgetEventPrefix) || e },
            r,
            { constructor: o, namespace: l, widgetName: e, widgetFullName: c }
          )),
          s
            ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto);
              }),
              delete s._childConstructors)
            : i._childConstructors.push(o),
          t.widget.bridge(e, o),
          o
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, s, o = n.call(arguments, 1), a = 0, r = o.length;
          a < r;
          a++
        )
          for (i in o[a])
            (s = o[a][i]),
              o[a].hasOwnProperty(i) &&
                void 0 !== s &&
                (t.isPlainObject(s)
                  ? (e[i] = t.isPlainObject(e[i])
                      ? t.widget.extend({}, e[i], s)
                      : t.widget.extend({}, s))
                  : (e[i] = s));
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
          var a = "string" == typeof o,
            r = n.call(arguments, 1),
            l = this;
          return (
            a
              ? this.length || "instance" !== o
                ? this.each(function () {
                    var i,
                      n = t.data(this, s);
                    return "instance" === o
                      ? ((l = n), !1)
                      : n
                      ? t.isFunction(n[o]) && "_" !== o.charAt(0)
                        ? (i = n[o].apply(n, r)) !== n && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0
                        : t.error(
                            "no such method '" +
                              o +
                              "' for " +
                              e +
                              " widget instance"
                          )
                      : t.error(
                          "cannot call methods on " +
                            e +
                            " prior to initialization; attempted to call method '" +
                            o +
                            "'"
                        );
                  })
                : (l = void 0)
              : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
                this.each(function () {
                  var e = t.data(this, s);
                  e
                    ? (e.option(o || {}), e._init && e._init())
                    : t.data(this, s, new i(o, this));
                })),
            l
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (e, n) {
          (n = t(n || this.defaultElement || this)[0]),
            (this.element = t(n)),
            (this.uuid = i++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            (this.classesElementLookup = {}),
            n !== this &&
              (t.data(n, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === n && this.destroy();
                },
              }),
              (this.document = t(n.style ? n.ownerDocument : n.document || n)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          var e = this;
          this._destroy(),
            t.each(this.classesElementLookup, function (t, i) {
              e._removeClass(i, t);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            a = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((a = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = a[e] = t.widget.extend({}, this.options[e]), o = 0;
                o < n.length - 1;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              a[e] = i;
            }
          return this._setOptions(a), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            "classes" === t && this._setOptionClasses(e),
            (this.options[t] = e),
            "disabled" === t && this._setOptionDisabled(e),
            this
          );
        },
        _setOptionClasses: function (e) {
          var i, n, s;
          for (i in e)
            (s = this.classesElementLookup[i]),
              e[i] !== this.options.classes[i] &&
                s &&
                s.length &&
                ((n = t(s.get())),
                this._removeClass(s, i),
                n.addClass(
                  this._classes({ element: n, keys: i, classes: e, add: !0 })
                ));
        },
        _setOptionDisabled: function (t) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!t
          ),
            t &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (e) {
          var i = [],
            n = this;
          function s(s, o) {
            var a, r;
            for (r = 0; r < s.length; r++)
              (a = n.classesElementLookup[s[r]] || t()),
                (a = e.add
                  ? t(t.unique(a.get().concat(e.element.get())))
                  : t(a.not(e.element).get())),
                (n.classesElementLookup[s[r]] = a),
                i.push(s[r]),
                o && e.classes[s[r]] && i.push(e.classes[s[r]]);
          }
          return (
            (e = t.extend(
              { element: this.element, classes: this.options.classes || {} },
              e
            )),
            this._on(e.element, { remove: "_untrackClassesElement" }),
            e.keys && s(e.keys.match(/\S+/g) || [], !0),
            e.extra && s(e.extra.match(/\S+/g) || []),
            i.join(" ")
          );
        },
        _untrackClassesElement: function (e) {
          var i = this;
          t.each(i.classesElementLookup, function (n, s) {
            -1 !== t.inArray(e.target, s) &&
              (i.classesElementLookup[n] = t(s.not(e.target).get()));
          });
        },
        _removeClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !1);
        },
        _addClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function (t, e, i, n) {
          n = "boolean" == typeof n ? n : i;
          var s = "string" == typeof t || null === t,
            o = {
              extra: s ? e : i,
              keys: s ? t : e,
              element: s ? this.element : t,
              add: n,
            };
          return o.element.toggleClass(this._classes(o), n), this;
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, a) {
              function r() {
                if (
                  e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof a ? o[a] : a).apply(o, arguments);
              }
              "string" != typeof a &&
                (r.guid = a.guid = a.guid || r.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                h = l[2];
              h ? s.on(c, h, r) : i.on(c, r);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.off(i).off(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-focus");
              },
              focusout: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            a = this.options[e];
          if (
            ((n = n || {}),
            ((i = t.Event(i)).type = (e === this.widgetEventPrefix
              ? e
              : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(a) &&
                !1 === a.apply(this.element[0], [i].concat(n))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          var a;
          "string" == typeof s && (s = { effect: s });
          var r = s
            ? !0 === s || "number" == typeof s
              ? i
              : s.effect || i
            : e;
          "number" == typeof (s = s || {}) && (s = { duration: s }),
            (a = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            a && t.effects && t.effects.effect[r]
              ? n[e](s)
              : r !== e && n[r]
              ? n[r](s.duration, s.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      });
    t.widget;
    !(function () {
      var e,
        i = Math.max,
        n = Math.abs,
        s = /left|center|right/,
        o = /top|center|bottom/,
        a = /[\+\-]\d+(\.[\d]+)?%?/,
        r = /^\w+/,
        l = /%$/,
        c = t.fn.position;
      function h(t, e, i) {
        return [
          parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1),
          parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1),
        ];
      }
      function u(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
      }
      (t.position = {
        scrollbarWidth: function () {
          if (void 0 !== e) return e;
          var i,
            n,
            s = t(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            o = s.children()[0];
          return (
            t("body").append(s),
            (i = o.offsetWidth),
            s.css("overflow", "scroll"),
            i === (n = o.offsetWidth) && (n = s[0].clientWidth),
            s.remove(),
            (e = i - n)
          );
        },
        getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            s =
              "scroll" === i ||
              ("auto" === i && e.width < e.element[0].scrollWidth);
          return {
            width:
              "scroll" === n ||
              ("auto" === n && e.height < e.element[0].scrollHeight)
                ? t.position.scrollbarWidth()
                : 0,
            height: s ? t.position.scrollbarWidth() : 0,
          };
        },
        getWithinInfo: function (e) {
          var i = t(e || window),
            n = t.isWindow(i[0]),
            s = !!i[0] && 9 === i[0].nodeType;
          return {
            element: i,
            isWindow: n,
            isDocument: s,
            offset: !n && !s ? t(e).offset() : { left: 0, top: 0 },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight(),
          };
        },
      }),
        (t.fn.position = function (e) {
          if (!e || !e.of) return c.apply(this, arguments);
          e = t.extend({}, e);
          var l,
            d,
            p,
            f,
            m,
            g,
            v,
            b,
            _ = t(e.of),
            y = t.position.getWithinInfo(e.within),
            w = t.position.getScrollInfo(y),
            x = (e.collision || "flip").split(" "),
            C = {};
          return (
            (g =
              9 === (b = (v = _)[0]).nodeType
                ? {
                    width: v.width(),
                    height: v.height(),
                    offset: { top: 0, left: 0 },
                  }
                : t.isWindow(b)
                ? {
                    width: v.width(),
                    height: v.height(),
                    offset: { top: v.scrollTop(), left: v.scrollLeft() },
                  }
                : b.preventDefault
                ? {
                    width: 0,
                    height: 0,
                    offset: { top: b.pageY, left: b.pageX },
                  }
                : {
                    width: v.outerWidth(),
                    height: v.outerHeight(),
                    offset: v.offset(),
                  }),
            _[0].preventDefault && (e.at = "left top"),
            (d = g.width),
            (p = g.height),
            (f = g.offset),
            (m = t.extend({}, f)),
            t.each(["my", "at"], function () {
              var t,
                i,
                n = (e[this] || "").split(" ");
              1 === n.length &&
                (n = s.test(n[0])
                  ? n.concat(["center"])
                  : o.test(n[0])
                  ? ["center"].concat(n)
                  : ["center", "center"]),
                (n[0] = s.test(n[0]) ? n[0] : "center"),
                (n[1] = o.test(n[1]) ? n[1] : "center"),
                (t = a.exec(n[0])),
                (i = a.exec(n[1])),
                (C[this] = [t ? t[0] : 0, i ? i[0] : 0]),
                (e[this] = [r.exec(n[0])[0], r.exec(n[1])[0]]);
            }),
            1 === x.length && (x[1] = x[0]),
            "right" === e.at[0]
              ? (m.left += d)
              : "center" === e.at[0] && (m.left += d / 2),
            "bottom" === e.at[1]
              ? (m.top += p)
              : "center" === e.at[1] && (m.top += p / 2),
            (l = h(C.at, d, p)),
            (m.left += l[0]),
            (m.top += l[1]),
            this.each(function () {
              var s,
                o,
                a = t(this),
                r = a.outerWidth(),
                c = a.outerHeight(),
                g = u(this, "marginLeft"),
                v = u(this, "marginTop"),
                b = r + g + u(this, "marginRight") + w.width,
                k = c + v + u(this, "marginBottom") + w.height,
                S = t.extend({}, m),
                T = h(C.my, a.outerWidth(), a.outerHeight());
              "right" === e.my[0]
                ? (S.left -= r)
                : "center" === e.my[0] && (S.left -= r / 2),
                "bottom" === e.my[1]
                  ? (S.top -= c)
                  : "center" === e.my[1] && (S.top -= c / 2),
                (S.left += T[0]),
                (S.top += T[1]),
                (s = { marginLeft: g, marginTop: v }),
                t.each(["left", "top"], function (i, n) {
                  t.ui.position[x[i]] &&
                    t.ui.position[x[i]][n](S, {
                      targetWidth: d,
                      targetHeight: p,
                      elemWidth: r,
                      elemHeight: c,
                      collisionPosition: s,
                      collisionWidth: b,
                      collisionHeight: k,
                      offset: [l[0] + T[0], l[1] + T[1]],
                      my: e.my,
                      at: e.at,
                      within: y,
                      elem: a,
                    });
                }),
                e.using &&
                  (o = function (t) {
                    var s = f.left - S.left,
                      o = s + d - r,
                      l = f.top - S.top,
                      h = l + p - c,
                      u = {
                        target: {
                          element: _,
                          left: f.left,
                          top: f.top,
                          width: d,
                          height: p,
                        },
                        element: {
                          element: a,
                          left: S.left,
                          top: S.top,
                          width: r,
                          height: c,
                        },
                        horizontal: o < 0 ? "left" : s > 0 ? "right" : "center",
                        vertical: h < 0 ? "top" : l > 0 ? "bottom" : "middle",
                      };
                    d < r && n(s + o) < d && (u.horizontal = "center"),
                      p < c && n(l + h) < p && (u.vertical = "middle"),
                      i(n(s), n(o)) > i(n(l), n(h))
                        ? (u.important = "horizontal")
                        : (u.important = "vertical"),
                      e.using.call(this, t, u);
                  }),
                a.offset(t.extend(S, { using: o }));
            })
          );
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var n,
                s = e.within,
                o = s.isWindow ? s.scrollLeft : s.offset.left,
                a = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                l = o - r,
                c = r + e.collisionWidth - a - o;
              e.collisionWidth > a
                ? l > 0 && c <= 0
                  ? ((n = t.left + l + e.collisionWidth - a - o),
                    (t.left += l - n))
                  : (t.left =
                      c > 0 && l <= 0
                        ? o
                        : l > c
                        ? o + a - e.collisionWidth
                        : o)
                : l > 0
                ? (t.left += l)
                : c > 0
                ? (t.left -= c)
                : (t.left = i(t.left - r, t.left));
            },
            top: function (t, e) {
              var n,
                s = e.within,
                o = s.isWindow ? s.scrollTop : s.offset.top,
                a = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                l = o - r,
                c = r + e.collisionHeight - a - o;
              e.collisionHeight > a
                ? l > 0 && c <= 0
                  ? ((n = t.top + l + e.collisionHeight - a - o),
                    (t.top += l - n))
                  : (t.top =
                      c > 0 && l <= 0
                        ? o
                        : l > c
                        ? o + a - e.collisionHeight
                        : o)
                : l > 0
                ? (t.top += l)
                : c > 0
                ? (t.top -= c)
                : (t.top = i(t.top - r, t.top));
            },
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                o = e.within,
                a = o.offset.left + o.scrollLeft,
                r = o.width,
                l = o.isWindow ? o.scrollLeft : o.offset.left,
                c = t.left - e.collisionPosition.marginLeft,
                h = c - l,
                u = c + e.collisionWidth - r - l,
                d =
                  "left" === e.my[0]
                    ? -e.elemWidth
                    : "right" === e.my[0]
                    ? e.elemWidth
                    : 0,
                p =
                  "left" === e.at[0]
                    ? e.targetWidth
                    : "right" === e.at[0]
                    ? -e.targetWidth
                    : 0,
                f = -2 * e.offset[0];
              h < 0
                ? ((i = t.left + d + p + f + e.collisionWidth - r - a) < 0 ||
                    i < n(h)) &&
                  (t.left += d + p + f)
                : u > 0 &&
                  ((s =
                    t.left - e.collisionPosition.marginLeft + d + p + f - l) >
                    0 ||
                    n(s) < u) &&
                  (t.left += d + p + f);
            },
            top: function (t, e) {
              var i,
                s,
                o = e.within,
                a = o.offset.top + o.scrollTop,
                r = o.height,
                l = o.isWindow ? o.scrollTop : o.offset.top,
                c = t.top - e.collisionPosition.marginTop,
                h = c - l,
                u = c + e.collisionHeight - r - l,
                d =
                  "top" === e.my[1]
                    ? -e.elemHeight
                    : "bottom" === e.my[1]
                    ? e.elemHeight
                    : 0,
                p =
                  "top" === e.at[1]
                    ? e.targetHeight
                    : "bottom" === e.at[1]
                    ? -e.targetHeight
                    : 0,
                f = -2 * e.offset[1];
              h < 0
                ? ((s = t.top + d + p + f + e.collisionHeight - r - a) < 0 ||
                    s < n(h)) &&
                  (t.top += d + p + f)
                : u > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) >
                    0 ||
                    n(i) < u) &&
                  (t.top += d + p + f);
            },
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments);
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments);
            },
          },
        });
    })();
    t.ui.position,
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
      }),
      t.fn.extend({
        disableSelection:
          ((s =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown"),
          function () {
            return this.on(s + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          }),
        enableSelection: function () {
          return this.off(".ui-disableSelection");
        },
      });
    var s,
      o,
      a = "ui-effects-animated",
      r = t;
    (t.effects = { effect: {} }),
      (function (t, e) {
        var i,
          n = /^([\-+])=\s*(\d+\.?\d*)/,
          s = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          o = (t.Color = function (e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
          }),
          a = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          r = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          l = (o.support = {}),
          c = t("<p>")[0],
          h = t.each;
        function u(t, e, i) {
          var n = r[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = n.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : n.mod
                ? (t + n.mod) % n.mod
                : 0 > t
                ? 0
                : n.max < t
                ? n.max
                : t);
        }
        function d(e) {
          var n = o(),
            r = (n._rgba = []);
          return (
            (e = e.toLowerCase()),
            h(s, function (t, i) {
              var s,
                o = i.re.exec(e),
                l = o && i.parse(o),
                c = i.space || "rgba";
              if (l)
                return (
                  (s = n[c](l)),
                  (n[a[c].cache] = s[a[c].cache]),
                  (r = n._rgba = s._rgba),
                  !1
                );
            }),
            r.length
              ? ("0,0,0,0" === r.join() && t.extend(r, i.transparent), n)
              : i[e]
          );
        }
        function p(t, e, i) {
          return 6 * (i = (i + 1) % 1) < 1
            ? t + (e - t) * i * 6
            : 2 * i < 1
            ? e
            : 3 * i < 2
            ? t + (e - t) * (2 / 3 - i) * 6
            : t;
        }
        (c.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (l.rgba = c.style.backgroundColor.indexOf("rgba") > -1),
          h(a, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (o.fn = t.extend(o.prototype, {
            parse: function (e, n, s, r) {
              if (void 0 === e)
                return (this._rgba = [null, null, null, null]), this;
              (e.jquery || e.nodeType) && ((e = t(e).css(n)), (n = void 0));
              var l = this,
                c = t.type(e),
                p = (this._rgba = []);
              return (
                void 0 !== n && ((e = [e, n, s, r]), (c = "array")),
                "string" === c
                  ? this.parse(d(e) || i._default)
                  : "array" === c
                  ? (h(a.rgba.props, function (t, i) {
                      p[i.idx] = u(e[i.idx], i);
                    }),
                    this)
                  : "object" === c
                  ? (h(
                      a,
                      e instanceof o
                        ? function (t, i) {
                            e[i.cache] && (l[i.cache] = e[i.cache].slice());
                          }
                        : function (i, n) {
                            var s = n.cache;
                            h(n.props, function (t, i) {
                              if (!l[s] && n.to) {
                                if ("alpha" === t || null == e[t]) return;
                                l[s] = n.to(l._rgba);
                              }
                              l[s][i.idx] = u(e[t], i, !0);
                            }),
                              l[s] &&
                                t.inArray(null, l[s].slice(0, 3)) < 0 &&
                                ((l[s][3] = 1),
                                n.from && (l._rgba = n.from(l[s])));
                          }
                    ),
                    this)
                  : void 0
              );
            },
            is: function (t) {
              var e = o(t),
                i = !0,
                n = this;
              return (
                h(a, function (t, s) {
                  var o,
                    a = e[s.cache];
                  return (
                    a &&
                      ((o = n[s.cache] || (s.to && s.to(n._rgba)) || []),
                      h(s.props, function (t, e) {
                        if (null != a[e.idx])
                          return (i = a[e.idx] === o[e.idx]);
                      })),
                    i
                  );
                }),
                i
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                h(a, function (i, n) {
                  e[n.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var i = o(t),
                n = i._space(),
                s = a[n],
                l = 0 === this.alpha() ? o("transparent") : this,
                c = l[s.cache] || s.to(l._rgba),
                d = c.slice();
              return (
                (i = i[s.cache]),
                h(s.props, function (t, n) {
                  var s = n.idx,
                    o = c[s],
                    a = i[s],
                    l = r[n.type] || {};
                  null !== a &&
                    (null === o
                      ? (d[s] = a)
                      : (l.mod &&
                          (a - o > l.mod / 2
                            ? (o += l.mod)
                            : o - a > l.mod / 2 && (o -= l.mod)),
                        (d[s] = u((a - o) * e + o, n))));
                }),
                this[n](d)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                n = i.pop(),
                s = o(e)._rgba;
              return o(
                t.map(i, function (t, e) {
                  return (1 - n) * s[e] + n * t;
                })
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && e < 3 && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                n = i.pop();
              return (
                e && i.push(~~(255 * n)),
                "#" +
                  t
                    .map(i, function (t) {
                      return 1 === (t = (t || 0).toString(16)).length
                        ? "0" + t
                        : t;
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (o.fn.parse.prototype = o.fn),
          (a.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(n, s, o),
              l = Math.min(n, s, o),
              c = r - l,
              h = r + l,
              u = 0.5 * h;
            return (
              (e =
                l === r
                  ? 0
                  : n === r
                  ? (60 * (s - o)) / c + 360
                  : s === r
                  ? (60 * (o - n)) / c + 120
                  : (60 * (n - s)) / c + 240),
              (i = 0 === c ? 0 : u <= 0.5 ? c / h : c / (2 - h)),
              [Math.round(e) % 360, i, u, null == a ? 1 : a]
            );
          }),
          (a.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              n = t[2],
              s = t[3],
              o = n <= 0.5 ? n * (1 + i) : n + i - n * i,
              a = 2 * n - o;
            return [
              Math.round(255 * p(a, o, e + 1 / 3)),
              Math.round(255 * p(a, o, e)),
              Math.round(255 * p(a, o, e - 1 / 3)),
              s,
            ];
          }),
          h(a, function (e, i) {
            var s = i.props,
              a = i.cache,
              r = i.to,
              l = i.from;
            (o.fn[e] = function (e) {
              if ((r && !this[a] && (this[a] = r(this._rgba)), void 0 === e))
                return this[a].slice();
              var i,
                n = t.type(e),
                c = "array" === n || "object" === n ? e : arguments,
                d = this[a].slice();
              return (
                h(s, function (t, e) {
                  var i = c["object" === n ? t : e.idx];
                  null == i && (i = d[e.idx]), (d[e.idx] = u(i, e));
                }),
                l ? (((i = o(l(d)))[a] = d), i) : o(d)
              );
            }),
              h(s, function (i, s) {
                o.fn[i] ||
                  (o.fn[i] = function (o) {
                    var a,
                      r = t.type(o),
                      l = "alpha" === i ? (this._hsla ? "hsla" : "rgba") : e,
                      c = this[l](),
                      h = c[s.idx];
                    return "undefined" === r
                      ? h
                      : ("function" === r &&
                          ((o = o.call(this, h)), (r = t.type(o))),
                        null == o && s.empty
                          ? this
                          : ("string" === r &&
                              (a = n.exec(o)) &&
                              (o =
                                h + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)),
                            (c[s.idx] = o),
                            this[l](c)));
                  });
              });
          }),
          (o.hook = function (e) {
            var i = e.split(" ");
            h(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, n) {
                  var s,
                    a,
                    r = "";
                  if (
                    "transparent" !== n &&
                    ("string" !== t.type(n) || (s = d(n)))
                  ) {
                    if (((n = o(s || n)), !l.rgba && 1 !== n._rgba[3])) {
                      for (
                        a = "backgroundColor" === i ? e.parentNode : e;
                        ("" === r || "transparent" === r) && a && a.style;

                      )
                        try {
                          (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                        } catch (t) {}
                      n = n.blend(r && "transparent" !== r ? r : "_default");
                    }
                    n = n.toRgbaString();
                  }
                  try {
                    e.style[i] = n;
                  } catch (t) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = o(e.elem, i)),
                    (e.end = o(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          o.hook(
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
          ),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                h(["Top", "Right", "Bottom", "Left"], function (i, n) {
                  e["border" + n + "Color"] = t;
                }),
                e
              );
            },
          }),
          (i = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff",
          });
      })(r),
      (function () {
        var e,
          i = ["add", "remove", "toggle"],
          n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        function s(e) {
          var i,
            n,
            s = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (s && s.length && s[0] && s[s[0]])
            for (n = s.length; n--; )
              "string" == typeof s[(i = s[n])] && (o[t.camelCase(i)] = s[i]);
          else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o;
        }
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, i) {
            t.fx.step[i] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (r.style(t.elem, i, t.end), (t.setAttr = !0));
            };
          }
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (t.effects.animateClass = function (e, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function () {
              var o,
                a = t(this),
                r = a.attr("class") || "",
                c = l.children ? a.find("*").addBack() : a;
              (c = c.map(function () {
                return { el: t(this), start: s(this) };
              })),
                (o = function () {
                  t.each(i, function (t, i) {
                    e[i] && a[i + "Class"](e[i]);
                  });
                })(),
                (c = c.map(function () {
                  return (
                    (this.end = s(this.el[0])),
                    (this.diff = (function (e, i) {
                      var s,
                        o,
                        a = {};
                      for (s in i)
                        (o = i[s]),
                          e[s] !== o &&
                            (n[s] ||
                              (!t.fx.step[s] && isNaN(parseFloat(o))) ||
                              (a[s] = o));
                      return a;
                    })(this.start, this.end)),
                    this
                  );
                })),
                a.attr("class", r),
                (c = c.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    n = t.extend({}, l, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, n), i.promise();
                })),
                t.when.apply(t, c.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    l.complete.call(a[0]);
                });
            });
          }),
          t.fn.extend({
            addClass:
              ((e = t.fn.addClass),
              function (i, n, s, o) {
                return n
                  ? t.effects.animateClass.call(this, { add: i }, n, s, o)
                  : e.apply(this, arguments);
              }),
            removeClass: (function (e) {
              return function (i, n, s, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, n, s, o, a) {
                return "boolean" == typeof n || void 0 === n
                  ? s
                    ? t.effects.animateClass.call(
                        this,
                        n ? { add: i } : { remove: i },
                        s,
                        o,
                        a
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, n, s, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                n,
                s,
                o
              );
            },
          });
      })(),
      (function () {
        var e;
        function i(e, i, n, s) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((s = i), (n = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((s = n), (n = i), (i = {})),
            t.isFunction(n) && ((s = n), (n = null)),
            i && t.extend(e, i),
            (n = n || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof n
              ? n
              : n in t.fx.speeds
              ? t.fx.speeds[n]
              : t.fx.speeds._default),
            (e.complete = s || i.complete),
            e
          );
        }
        function n(e) {
          return (
            !(e && "number" != typeof e && !t.fx.speeds[e]) ||
            ("string" == typeof e && !t.effects.effect[e]) ||
            !!t.isFunction(e) ||
            ("object" == typeof e && !e.effect)
          );
        }
        function s(t, e) {
          var i = e.outerWidth(),
            n = e.outerHeight(),
            s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
              t
            ) || ["", 0, i, n, 0];
          return {
            top: parseFloat(s[1]) || 0,
            right: "auto" === s[2] ? i : parseFloat(s[2]),
            bottom: "auto" === s[3] ? n : parseFloat(s[3]),
            left: parseFloat(s[4]) || 0,
          };
        }
        t.expr &&
          t.expr.filters &&
          t.expr.filters.animated &&
          (t.expr.filters.animated =
            ((e = t.expr.filters.animated),
            function (i) {
              return !!t(i).data(a) || e(i);
            })),
          !1 !== t.uiBackCompat &&
            t.extend(t.effects, {
              save: function (t, e) {
                for (var i = 0, n = e.length; i < n; i++)
                  null !== e[i] &&
                    t.data("ui-effects-" + e[i], t[0].style[e[i]]);
              },
              restore: function (t, e) {
                for (var i, n = 0, s = e.length; n < s; n++)
                  null !== e[n] &&
                    ((i = t.data("ui-effects-" + e[n])), t.css(e[n], i));
              },
              setMode: function (t, e) {
                return (
                  "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                );
              },
              createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float"),
                  },
                  n = t("<div></div>")
                    .addClass("ui-effects-wrapper")
                    .css({
                      fontSize: "100%",
                      background: "transparent",
                      border: "none",
                      margin: 0,
                      padding: 0,
                    }),
                  s = { width: e.width(), height: e.height() },
                  o = document.activeElement;
                try {
                  o.id;
                } catch (t) {
                  o = document.body;
                }
                return (
                  e.wrap(n),
                  (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                  (n = e.parent()),
                  "static" === e.css("position")
                    ? (n.css({ position: "relative" }),
                      e.css({ position: "relative" }))
                    : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index"),
                      }),
                      t.each(["top", "left", "bottom", "right"], function (
                        t,
                        n
                      ) {
                        (i[n] = e.css(n)),
                          isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                      }),
                      e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto",
                      })),
                  e.css(s),
                  n.css(i).show()
                );
              },
              removeWrapper: function (e) {
                var i = document.activeElement;
                return (
                  e.parent().is(".ui-effects-wrapper") &&
                    (e.parent().replaceWith(e),
                    (e[0] === i || t.contains(e[0], i)) &&
                      t(i).trigger("focus")),
                  e
                );
              },
            }),
          t.extend(t.effects, {
            version: "1.12.1",
            define: function (e, i, n) {
              return (
                n || ((n = i), (i = "effect")),
                (t.effects.effect[e] = n),
                (t.effects.effect[e].mode = i),
                n
              );
            },
            scaledDimensions: function (t, e, i) {
              if (0 === e)
                return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
              var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                s = "vertical" !== i ? (e || 100) / 100 : 1;
              return {
                height: t.height() * s,
                width: t.width() * n,
                outerHeight: t.outerHeight() * s,
                outerWidth: t.outerWidth() * n,
              };
            },
            clipToBox: function (t) {
              return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top,
              };
            },
            unshift: function (t, e, i) {
              var n = t.queue();
              e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
                t.dequeue();
            },
            saveStyle: function (t) {
              t.data("ui-effects-style", t[0].style.cssText);
            },
            restoreStyle: function (t) {
              (t[0].style.cssText = t.data("ui-effects-style") || ""),
                t.removeData("ui-effects-style");
            },
            mode: function (t, e) {
              var i = t.is(":hidden");
              return (
                "toggle" === e && (e = i ? "show" : "hide"),
                (i ? "hide" === e : "show" === e) && (e = "none"),
                e
              );
            },
            getBaseline: function (t, e) {
              var i, n;
              switch (t[0]) {
                case "top":
                  i = 0;
                  break;
                case "middle":
                  i = 0.5;
                  break;
                case "bottom":
                  i = 1;
                  break;
                default:
                  i = t[0] / e.height;
              }
              switch (t[1]) {
                case "left":
                  n = 0;
                  break;
                case "center":
                  n = 0.5;
                  break;
                case "right":
                  n = 1;
                  break;
                default:
                  n = t[1] / e.width;
              }
              return { x: n, y: i };
            },
            createPlaceholder: function (e) {
              var i,
                n = e.css("position"),
                s = e.position();
              return (
                e
                  .css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                  })
                  .outerWidth(e.outerWidth())
                  .outerHeight(e.outerHeight()),
                /^(static|relative)/.test(n) &&
                  ((n = "absolute"),
                  (i = t("<" + e[0].nodeName + ">")
                    .insertAfter(e)
                    .css({
                      display: /^(inline|ruby)/.test(e.css("display"))
                        ? "inline-block"
                        : "block",
                      visibility: "hidden",
                      marginTop: e.css("marginTop"),
                      marginBottom: e.css("marginBottom"),
                      marginLeft: e.css("marginLeft"),
                      marginRight: e.css("marginRight"),
                      float: e.css("float"),
                    })
                    .outerWidth(e.outerWidth())
                    .outerHeight(e.outerHeight())
                    .addClass("ui-effects-placeholder")),
                  e.data("ui-effects-placeholder", i)),
                e.css({ position: n, left: s.left, top: s.top }),
                i
              );
            },
            removePlaceholder: function (t) {
              var e = "ui-effects-placeholder",
                i = t.data(e);
              i && (i.remove(), t.removeData(e));
            },
            cleanUp: function (e) {
              t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function (e, i, n, s) {
              return (
                (s = s || {}),
                t.each(i, function (t, i) {
                  var o = e.cssUnit(i);
                  o[0] > 0 && (s[i] = o[0] * n + o[1]);
                }),
                s
              );
            },
          }),
          t.fn.extend({
            effect: function () {
              var e = i.apply(this, arguments),
                n = t.effects.effect[e.effect],
                s = n.mode,
                o = e.queue,
                r = o || "fx",
                l = e.complete,
                c = e.mode,
                h = [],
                u = function (e) {
                  var i = t(this),
                    n = t.effects.mode(i, c) || s;
                  i.data(a, !0),
                    h.push(n),
                    s &&
                      ("show" === n || (n === s && "hide" === n)) &&
                      i.show(),
                    (s && "none" === n) || t.effects.saveStyle(i),
                    t.isFunction(e) && e();
                };
              if (t.fx.off || !n)
                return c
                  ? this[c](e.duration, l)
                  : this.each(function () {
                      l && l.call(this);
                    });
              function d(i) {
                var o = t(this);
                function r() {
                  t.isFunction(l) && l.call(o[0]), t.isFunction(i) && i();
                }
                (e.mode = h.shift()),
                  !1 === t.uiBackCompat || s
                    ? "none" === e.mode
                      ? (o[c](), r())
                      : n.call(o[0], e, function () {
                          o.removeData(a),
                            t.effects.cleanUp(o),
                            "hide" === e.mode && o.hide(),
                            r();
                        })
                    : (o.is(":hidden") ? "hide" === c : "show" === c)
                    ? (o[c](), r())
                    : n.call(o[0], e, r);
              }
              return !1 === o
                ? this.each(u).each(d)
                : this.queue(r, u).queue(r, d);
            },
            show: (function (t) {
              return function (e) {
                if (n(e)) return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "show"), this.effect.call(this, s);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (e) {
                if (n(e)) return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "hide"), this.effect.call(this, s);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (e) {
                if (n(e) || "boolean" == typeof e)
                  return t.apply(this, arguments);
                var s = i.apply(this, arguments);
                return (s.mode = "toggle"), this.effect.call(this, s);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                n = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                }),
                n
              );
            },
            cssClip: function (t) {
              return t
                ? this.css(
                    "clip",
                    "rect(" +
                      t.top +
                      "px " +
                      t.right +
                      "px " +
                      t.bottom +
                      "px " +
                      t.left +
                      "px)"
                  )
                : s(this.css("clip"), this);
            },
            transfer: function (e, i) {
              var n = t(this),
                s = t(e.to),
                o = "fixed" === s.css("position"),
                a = t("body"),
                r = o ? a.scrollTop() : 0,
                l = o ? a.scrollLeft() : 0,
                c = s.offset(),
                h = {
                  top: c.top - r,
                  left: c.left - l,
                  height: s.innerHeight(),
                  width: s.innerWidth(),
                },
                u = n.offset(),
                d = t("<div class='ui-effects-transfer'></div>")
                  .appendTo("body")
                  .addClass(e.className)
                  .css({
                    top: u.top - r,
                    left: u.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: o ? "fixed" : "absolute",
                  })
                  .animate(h, e.duration, e.easing, function () {
                    d.remove(), t.isFunction(i) && i();
                  });
            },
          }),
          (t.fx.step.clip = function (e) {
            e.clipInit ||
              ((e.start = t(e.elem).cssClip()),
              "string" == typeof e.end && (e.end = s(e.end, e.elem)),
              (e.clipInit = !0)),
              t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom:
                  e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left,
              });
          });
      })(),
      (o = {}),
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, e) {
        o[e] = function (e) {
          return Math.pow(e, t + 2);
        };
      }),
      t.extend(o, {
        Sine: function (t) {
          return 1 - Math.cos((t * Math.PI) / 2);
        },
        Circ: function (t) {
          return 1 - Math.sqrt(1 - t * t);
        },
        Elastic: function (t) {
          return 0 === t || 1 === t
            ? t
            : -Math.pow(2, 8 * (t - 1)) *
                Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
        },
        Back: function (t) {
          return t * t * (3 * t - 2);
        },
        Bounce: function (t) {
          for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
          return (
            1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
          );
        },
      }),
      t.each(o, function (e, i) {
        (t.easing["easeIn" + e] = i),
          (t.easing["easeOut" + e] = function (t) {
            return 1 - i(1 - t);
          }),
          (t.easing["easeInOut" + e] = function (t) {
            return t < 0.5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
          });
      });
    t.effects,
      t.effects.define("blind", "hide", function (e, i) {
        var n = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"],
          },
          s = t(this),
          o = e.direction || "up",
          a = s.cssClip(),
          r = { clip: t.extend({}, a) },
          l = t.effects.createPlaceholder(s);
        (r.clip[n[o][0]] = r.clip[n[o][1]]),
          "show" === e.mode &&
            (s.cssClip(r.clip),
            l && l.css(t.effects.clipToBox(r)),
            (r.clip = a)),
          l && l.animate(t.effects.clipToBox(r), e.duration, e.easing),
          s.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      t.effects.define("bounce", function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = e.mode,
          l = "hide" === r,
          c = "show" === r,
          h = e.direction || "up",
          u = e.distance,
          d = e.times || 5,
          p = 2 * d + (c || l ? 1 : 0),
          f = e.duration / p,
          m = e.easing,
          g = "up" === h || "down" === h ? "top" : "left",
          v = "up" === h || "left" === h,
          b = 0,
          _ = a.queue().length;
        for (
          t.effects.createPlaceholder(a),
            o = a.css(g),
            u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3),
            c &&
              (((s = { opacity: 1 })[g] = o),
              a
                .css("opacity", 0)
                .css(g, v ? 2 * -u : 2 * u)
                .animate(s, f, m)),
            l && (u /= Math.pow(2, d - 1)),
            (s = {})[g] = o;
          b < d;
          b++
        )
          ((n = {})[g] = (v ? "-=" : "+=") + u),
            a.animate(n, f, m).animate(s, f, m),
            (u = l ? 2 * u : u / 2);
        l &&
          (((n = { opacity: 0 })[g] = (v ? "-=" : "+=") + u),
          a.animate(n, f, m)),
          a.queue(i),
          t.effects.unshift(a, _, p + 1);
      }),
      t.effects.define("clip", "hide", function (e, i) {
        var n,
          s = {},
          o = t(this),
          a = e.direction || "vertical",
          r = "both" === a,
          l = r || "horizontal" === a,
          c = r || "vertical" === a;
        (n = o.cssClip()),
          (s.clip = {
            top: c ? (n.bottom - n.top) / 2 : n.top,
            right: l ? (n.right - n.left) / 2 : n.right,
            bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
            left: l ? (n.right - n.left) / 2 : n.left,
          }),
          t.effects.createPlaceholder(o),
          "show" === e.mode && (o.cssClip(s.clip), (s.clip = n)),
          o.animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      t.effects.define("drop", "hide", function (e, i) {
        var n,
          s = t(this),
          o = "show" === e.mode,
          a = e.direction || "left",
          r = "up" === a || "down" === a ? "top" : "left",
          l = "up" === a || "left" === a ? "-=" : "+=",
          c = "+=" === l ? "-=" : "+=",
          h = { opacity: 0 };
        t.effects.createPlaceholder(s),
          (n =
            e.distance ||
            s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2),
          (h[r] = l + n),
          o && (s.css(h), (h[r] = c + n), (h.opacity = 1)),
          s.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      t.effects.define("explode", "hide", function (e, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
          h = c,
          u = t(this),
          d = "show" === e.mode,
          p = u.show().css("visibility", "hidden").offset(),
          f = Math.ceil(u.outerWidth() / h),
          m = Math.ceil(u.outerHeight() / c),
          g = [];
        function v() {
          g.push(this),
            g.length === c * h &&
              (u.css({ visibility: "visible" }), t(g).remove(), i());
        }
        for (n = 0; n < c; n++)
          for (a = p.top + n * m, l = n - (c - 1) / 2, s = 0; s < h; s++)
            (o = p.left + s * f),
              (r = s - (h - 1) / 2),
              u
                .clone()
                .appendTo("body")
                .wrap("<div></div>")
                .css({
                  position: "absolute",
                  visibility: "visible",
                  left: -s * f,
                  top: -n * m,
                })
                .parent()
                .addClass("ui-effects-explode")
                .css({
                  position: "absolute",
                  overflow: "hidden",
                  width: f,
                  height: m,
                  left: o + (d ? r * f : 0),
                  top: a + (d ? l * m : 0),
                  opacity: d ? 0 : 1,
                })
                .animate(
                  {
                    left: o + (d ? 0 : r * f),
                    top: a + (d ? 0 : l * m),
                    opacity: d ? 1 : 0,
                  },
                  e.duration || 500,
                  e.easing,
                  v
                );
      }),
      t.effects.define("fade", "toggle", function (e, i) {
        var n = "show" === e.mode;
        t(this)
          .css("opacity", n ? 0 : 1)
          .animate(
            { opacity: n ? 1 : 0 },
            { queue: !1, duration: e.duration, easing: e.easing, complete: i }
          );
      }),
      t.effects.define("fold", "hide", function (e, i) {
        var n = t(this),
          s = e.mode,
          o = "show" === s,
          a = "hide" === s,
          r = e.size || 15,
          l = /([0-9]+)%/.exec(r),
          c = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
          h = e.duration / 2,
          u = t.effects.createPlaceholder(n),
          d = n.cssClip(),
          p = { clip: t.extend({}, d) },
          f = { clip: t.extend({}, d) },
          m = [d[c[0]], d[c[1]]],
          g = n.queue().length;
        l && (r = (parseInt(l[1], 10) / 100) * m[a ? 0 : 1]),
          (p.clip[c[0]] = r),
          (f.clip[c[0]] = r),
          (f.clip[c[1]] = 0),
          o &&
            (n.cssClip(f.clip),
            u && u.css(t.effects.clipToBox(f)),
            (f.clip = d)),
          n
            .queue(function (i) {
              u &&
                u
                  .animate(t.effects.clipToBox(p), h, e.easing)
                  .animate(t.effects.clipToBox(f), h, e.easing),
                i();
            })
            .animate(p, h, e.easing)
            .animate(f, h, e.easing)
            .queue(i),
          t.effects.unshift(n, g, 4);
      }),
      t.effects.define("highlight", "show", function (e, i) {
        var n = t(this),
          s = { backgroundColor: n.css("backgroundColor") };
        "hide" === e.mode && (s.opacity = 0),
          t.effects.saveStyle(n),
          n
            .css({
              backgroundImage: "none",
              backgroundColor: e.color || "#ffff99",
            })
            .animate(s, {
              queue: !1,
              duration: e.duration,
              easing: e.easing,
              complete: i,
            });
      }),
      t.effects.define("size", function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = ["fontSize"],
          l = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          c = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          h = e.mode,
          u = "effect" !== h,
          d = e.scale || "both",
          p = e.origin || ["middle", "center"],
          f = a.css("position"),
          m = a.position(),
          g = t.effects.scaledDimensions(a),
          v = e.from || g,
          b = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a),
          "show" === h && ((o = v), (v = b), (b = o)),
          (s = {
            from: { y: v.height / g.height, x: v.width / g.width },
            to: { y: b.height / g.height, x: b.width / g.width },
          }),
          ("box" !== d && "both" !== d) ||
            (s.from.y !== s.to.y &&
              ((v = t.effects.setTransition(a, l, s.from.y, v)),
              (b = t.effects.setTransition(a, l, s.to.y, b))),
            s.from.x !== s.to.x &&
              ((v = t.effects.setTransition(a, c, s.from.x, v)),
              (b = t.effects.setTransition(a, c, s.to.x, b)))),
          ("content" !== d && "both" !== d) ||
            (s.from.y !== s.to.y &&
              ((v = t.effects.setTransition(a, r, s.from.y, v)),
              (b = t.effects.setTransition(a, r, s.to.y, b)))),
          p &&
            ((n = t.effects.getBaseline(p, g)),
            (v.top = (g.outerHeight - v.outerHeight) * n.y + m.top),
            (v.left = (g.outerWidth - v.outerWidth) * n.x + m.left),
            (b.top = (g.outerHeight - b.outerHeight) * n.y + m.top),
            (b.left = (g.outerWidth - b.outerWidth) * n.x + m.left)),
          a.css(v),
          ("content" !== d && "both" !== d) ||
            ((l = l.concat(["marginTop", "marginBottom"]).concat(r)),
            (c = c.concat(["marginLeft", "marginRight"])),
            a.find("*[width]").each(function () {
              var i = t(this),
                n = t.effects.scaledDimensions(i),
                o = {
                  height: n.height * s.from.y,
                  width: n.width * s.from.x,
                  outerHeight: n.outerHeight * s.from.y,
                  outerWidth: n.outerWidth * s.from.x,
                },
                a = {
                  height: n.height * s.to.y,
                  width: n.width * s.to.x,
                  outerHeight: n.height * s.to.y,
                  outerWidth: n.width * s.to.x,
                };
              s.from.y !== s.to.y &&
                ((o = t.effects.setTransition(i, l, s.from.y, o)),
                (a = t.effects.setTransition(i, l, s.to.y, a))),
                s.from.x !== s.to.x &&
                  ((o = t.effects.setTransition(i, c, s.from.x, o)),
                  (a = t.effects.setTransition(i, c, s.to.x, a))),
                u && t.effects.saveStyle(i),
                i.css(o),
                i.animate(a, e.duration, e.easing, function () {
                  u && t.effects.restoreStyle(i);
                });
            })),
          a.animate(b, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              var e = a.offset();
              0 === b.opacity && a.css("opacity", v.opacity),
                u ||
                  (a.css("position", "static" === f ? "relative" : f).offset(e),
                  t.effects.saveStyle(a)),
                i();
            },
          });
      }),
      t.effects.define("scale", function (e, i) {
        var n = t(this),
          s = e.mode,
          o =
            parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
          a = t.extend(
            !0,
            {
              from: t.effects.scaledDimensions(n),
              to: t.effects.scaledDimensions(n, o, e.direction || "both"),
              origin: e.origin || ["middle", "center"],
            },
            e
          );
        e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)),
          t.effects.effect.size.call(this, a, i);
      }),
      t.effects.define("puff", "hide", function (e, i) {
        var n = t.extend(!0, {}, e, {
          fade: !0,
          percent: parseInt(e.percent, 10) || 150,
        });
        t.effects.effect.scale.call(this, n, i);
      }),
      t.effects.define("pulsate", "show", function (e, i) {
        var n = t(this),
          s = e.mode,
          o = "show" === s,
          a = o || "hide" === s,
          r = 2 * (e.times || 5) + (a ? 1 : 0),
          l = e.duration / r,
          c = 0,
          h = 1,
          u = n.queue().length;
        for (
          (!o && n.is(":visible")) || (n.css("opacity", 0).show(), (c = 1));
          h < r;
          h++
        )
          n.animate({ opacity: c }, l, e.easing), (c = 1 - c);
        n.animate({ opacity: c }, l, e.easing),
          n.queue(i),
          t.effects.unshift(n, u, r + 1);
      }),
      t.effects.define("shake", function (e, i) {
        var n = 1,
          s = t(this),
          o = e.direction || "left",
          a = e.distance || 20,
          r = e.times || 3,
          l = 2 * r + 1,
          c = Math.round(e.duration / l),
          h = "up" === o || "down" === o ? "top" : "left",
          u = "up" === o || "left" === o,
          d = {},
          p = {},
          f = {},
          m = s.queue().length;
        for (
          t.effects.createPlaceholder(s),
            d[h] = (u ? "-=" : "+=") + a,
            p[h] = (u ? "+=" : "-=") + 2 * a,
            f[h] = (u ? "-=" : "+=") + 2 * a,
            s.animate(d, c, e.easing);
          n < r;
          n++
        )
          s.animate(p, c, e.easing).animate(f, c, e.easing);
        s
          .animate(p, c, e.easing)
          .animate(d, c / 2, e.easing)
          .queue(i),
          t.effects.unshift(s, m, l + 1);
      }),
      t.effects.define("slide", "show", function (e, i) {
        var n,
          s,
          o = t(this),
          a = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"],
          },
          r = e.mode,
          l = e.direction || "left",
          c = "up" === l || "down" === l ? "top" : "left",
          h = "up" === l || "left" === l,
          u = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
          d = {};
        t.effects.createPlaceholder(o),
          (n = o.cssClip()),
          (s = o.position()[c]),
          (d[c] = (h ? -1 : 1) * u + s),
          (d.clip = o.cssClip()),
          (d.clip[a[l][1]] = d.clip[a[l][0]]),
          "show" === r &&
            (o.cssClip(d.clip), o.css(c, d[c]), (d.clip = n), (d[c] = s)),
          o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      });
    !1 !== t.uiBackCompat &&
      t.effects.define("transfer", function (e, i) {
        t(this).transfer(e, i);
      });
    (t.ui.focusable = function (e, i) {
      var n,
        s,
        o,
        a,
        r,
        l = e.nodeName.toLowerCase();
      return "area" === l
        ? ((s = (n = e.parentNode).name),
          !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) &&
            (o = t("img[usemap='#" + s + "']")).length > 0 &&
            o.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? (a = !e.disabled) &&
              (r = t(e).closest("fieldset")[0]) &&
              (a = !r.disabled)
            : (a = ("a" === l && e.href) || i),
          a &&
            t(e).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "hidden" !== e;
            })(t(e)));
    }),
      t.extend(t.expr[":"], {
        focusable: function (e) {
          return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        },
      });
    t.ui.focusable,
      (t.fn.form = function () {
        return "string" == typeof this[0].form
          ? this.closest("form")
          : t(this[0].form);
      }),
      (t.ui.formResetMixin = {
        _formResetHandler: function () {
          var e = t(this);
          setTimeout(function () {
            var i = e.data("ui-form-reset-instances");
            t.each(i, function () {
              this.refresh();
            });
          });
        },
        _bindFormResetHandler: function () {
          if (((this.form = this.element.form()), this.form.length)) {
            var t = this.form.data("ui-form-reset-instances") || [];
            t.length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
              t.push(this),
              this.form.data("ui-form-reset-instances", t);
          }
        },
        _unbindFormResetHandler: function () {
          if (this.form.length) {
            var e = this.form.data("ui-form-reset-instances");
            e.splice(t.inArray(this, e), 1),
              e.length
                ? this.form.data("ui-form-reset-instances", e)
                : this.form
                    .removeData("ui-form-reset-instances")
                    .off("reset.ui-form-reset");
          }
        },
      });
    "1.7" === t.fn.jquery.substring(0, 3) &&
      (t.each(["Width", "Height"], function (e, i) {
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          s = i.toLowerCase(),
          o = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        function a(e, i, s, o) {
          return (
            t.each(n, function () {
              (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }),
            i
          );
        }
        (t.fn["inner" + i] = function (e) {
          return void 0 === e
            ? o["inner" + i].call(this)
            : this.each(function () {
                t(this).css(s, a(this, e) + "px");
              });
        }),
          (t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e
              ? o["outer" + i].call(this, e)
              : this.each(function () {
                  t(this).css(s, a(this, e, !0, n) + "px");
                });
          });
      }),
      (t.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }));
    var l, c;
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
      (t.ui.escapeSelector =
        ((l = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g),
        function (t) {
          return t.replace(l, "\\$1");
        })),
      (t.fn.labels = function () {
        var e, i, n, s, o;
        return this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((s = this.eq(0).parents("label")),
            (n = this.attr("id")) &&
              ((o = (e = this.eq(0).parents().last()).add(
                e.length ? e.siblings() : this.siblings()
              )),
              (i = "label[for='" + t.ui.escapeSelector(n) + "']"),
              (s = s.add(o.find(i).addBack(i)))),
            this.pushStack(s));
      }),
      (t.fn.scrollParent = function (e) {
        var i = this.css("position"),
          n = "absolute" === i,
          s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          o = this.parents()
            .filter(function () {
              var e = t(this);
              return (
                (!n || "static" !== e.css("position")) &&
                s.test(
                  e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
                )
              );
            })
            .eq(0);
        return "fixed" !== i && o.length
          ? o
          : t(this[0].ownerDocument || document);
      }),
      t.extend(t.expr[":"], {
        tabbable: function (e) {
          var i = t.attr(e, "tabindex"),
            n = null != i;
          return (!n || i >= 0) && t.ui.focusable(e, n);
        },
      }),
      t.fn.extend({
        uniqueId:
          ((c = 0),
          function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++c);
            });
          }),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
          active: 0,
          animate: {},
          classes: {
            "ui-accordion-header": "ui-corner-top",
            "ui-accordion-header-collapsed": "ui-corner-all",
            "ui-accordion-content": "ui-corner-bottom",
          },
          collapsible: !1,
          event: "click",
          header: "> li > :first-child, > :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide",
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show",
        },
        _create: function () {
          var e = this.options;
          (this.prevShow = this.prevHide = t()),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            e.collapsible ||
              (!1 !== e.active && null != e.active) ||
              (e.active = 0),
            this._processPanels(),
            e.active < 0 && (e.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : t(),
          };
        },
        _createIcons: function () {
          var e,
            i,
            n = this.options.icons;
          n &&
            ((e = t("<span>")),
            this._addClass(
              e,
              "ui-accordion-header-icon",
              "ui-icon " + n.header
            ),
            e.prependTo(this.headers),
            (i = this.active.children(".ui-accordion-header-icon")),
            this._removeClass(i, n.header)
              ._addClass(i, null, n.activeHeader)
              ._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function () {
          var t;
          this.element.removeAttr("role"),
            this.headers
              .removeAttr(
                "role aria-expanded aria-selected aria-controls tabIndex"
              )
              .removeUniqueId(),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .css("display", "")
              .removeAttr("role aria-hidden aria-labelledby")
              .removeUniqueId()),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          "active" !== t
            ? ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              "icons" === t && (this._destroyIcons(), e && this._createIcons()))
            : this._activate(e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(
              this.headers.add(this.headers.next()),
              null,
              "ui-state-disabled",
              !!t
            );
        },
        _keydown: function (e) {
          if (!e.altKey && !e.ctrlKey) {
            var i = t.ui.keyCode,
              n = this.headers.length,
              s = this.headers.index(e.target),
              o = !1;
            switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                o = this.headers[(s + 1) % n];
                break;
              case i.LEFT:
              case i.UP:
                o = this.headers[(s - 1 + n) % n];
                break;
              case i.SPACE:
              case i.ENTER:
                this._eventHandler(e);
                break;
              case i.HOME:
                o = this.headers[0];
                break;
              case i.END:
                o = this.headers[n - 1];
            }
            o &&
              (t(e.target).attr("tabIndex", -1),
              t(o).attr("tabIndex", 0),
              t(o).trigger("focus"),
              e.preventDefault());
          }
        },
        _panelKeyDown: function (e) {
          e.keyCode === t.ui.keyCode.UP &&
            e.ctrlKey &&
            t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function () {
          var e = this.options;
          this._processPanels(),
            (!1 === e.active && !0 === e.collapsible) || !this.headers.length
              ? ((e.active = !1), (this.active = t()))
              : !1 === e.active
              ? this._activate(0)
              : this.active.length &&
                !t.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(Math.max(0, e.active - 1))
              : (e.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          var t = this.headers,
            e = this.panels;
          (this.headers = this.element.find(this.options.header)),
            this._addClass(
              this.headers,
              "ui-accordion-header ui-accordion-header-collapsed",
              "ui-state-default"
            ),
            (this.panels = this.headers
              .next()
              .filter(":not(.ui-accordion-content-active)")
              .hide()),
            this._addClass(
              this.panels,
              "ui-accordion-content",
              "ui-helper-reset ui-widget-content"
            ),
            e &&
              (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function () {
          var e,
            i = this.options,
            n = i.heightStyle,
            s = this.element.parent();
          (this.active = this._findActive(i.active)),
            this._addClass(
              this.active,
              "ui-accordion-header-active",
              "ui-state-active"
            )._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers
              .attr("role", "tab")
              .each(function () {
                var e = t(this),
                  i = e.uniqueId().attr("id"),
                  n = e.next(),
                  s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              })
              .next()
              .attr({ "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  })
                  .next()
                  .attr({ "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === n
              ? ((e = s.height()),
                this.element.siblings(":visible").each(function () {
                  var i = t(this),
                    n = i.css("position");
                  "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
                }),
                this.headers.each(function () {
                  e -= t(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    t(this).height(
                      Math.max(0, e - t(this).innerHeight() + t(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === n &&
                ((e = 0),
                this.headers
                  .next()
                  .each(function () {
                    var i = t(this).is(":visible");
                    i || t(this).show(),
                      (e = Math.max(e, t(this).css("height", "").height())),
                      i || t(this).hide();
                  })
                  .height(e));
        },
        _activate: function (e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] &&
            ((i = i || this.active[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function (e) {
          var i = { keydown: "_keydown" };
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (e) {
          var i,
            n,
            s = this.options,
            o = this.active,
            a = t(e.currentTarget),
            r = a[0] === o[0],
            l = r && s.collapsible,
            c = l ? t() : a.next(),
            h = o.next(),
            u = {
              oldHeader: o,
              oldPanel: h,
              newHeader: l ? t() : a,
              newPanel: c,
            };
          e.preventDefault(),
            (r && !s.collapsible) ||
              !1 === this._trigger("beforeActivate", e, u) ||
              ((s.active = !l && this.headers.index(a)),
              (this.active = r ? t() : a),
              this._toggle(u),
              this._removeClass(
                o,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              s.icons &&
                ((i = o.children(".ui-accordion-header-icon")),
                this._removeClass(i, null, s.icons.activeHeader)._addClass(
                  i,
                  null,
                  s.icons.header
                )),
              r ||
                (this._removeClass(
                  a,
                  "ui-accordion-header-collapsed"
                )._addClass(a, "ui-accordion-header-active", "ui-state-active"),
                s.icons &&
                  ((n = a.children(".ui-accordion-header-icon")),
                  this._removeClass(n, null, s.icons.header)._addClass(
                    n,
                    null,
                    s.icons.activeHeader
                  )),
                this._addClass(a.next(), "ui-accordion-content-active")));
        },
        _toggle: function (e) {
          var i = e.newPanel,
            n = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = i),
            (this.prevHide = n),
            this.options.animate
              ? this._animate(i, n, e)
              : (n.hide(), i.show(), this._toggleComplete(e)),
            n.attr({ "aria-hidden": "true" }),
            n
              .prev()
              .attr({ "aria-selected": "false", "aria-expanded": "false" }),
            i.length && n.length
              ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
              : i.length &&
                this.headers
                  .filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10);
                  })
                  .attr("tabIndex", -1),
            i
              .attr("aria-hidden", "false")
              .prev()
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              });
        },
        _animate: function (t, e, i) {
          var n,
            s,
            o,
            a = this,
            r = 0,
            l = t.css("box-sizing"),
            c = t.length && (!e.length || t.index() < e.index()),
            h = this.options.animate || {},
            u = (c && h.down) || h,
            d = function () {
              a._toggleComplete(i);
            };
          return (
            "number" == typeof u && (o = u),
            "string" == typeof u && (s = u),
            (s = s || u.easing || h.easing),
            (o = o || u.duration || h.duration),
            e.length
              ? t.length
                ? ((n = t.show().outerHeight()),
                  e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (t, i) {
                      (i.now = Math.round(t)),
                        "height" !== i.prop
                          ? "content-box" === l && (r += i.now)
                          : "content" !== a.options.heightStyle &&
                            ((i.now = Math.round(n - e.outerHeight() - r)),
                            (r = 0));
                    },
                  }))
                : e.animate(this.hideProps, o, s, d)
              : t.animate(this.showProps, o, s, d)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel,
            i = e.prev();
          this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(
              i,
              "ui-accordion-header-collapsed"
            ),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      }),
      (t.ui.safeActiveElement = function (t) {
        var e;
        try {
          e = t.activeElement;
        } catch (i) {
          e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
      }),
      t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-caret-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .attr({ role: this.options.role, tabIndex: 0 }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (e) {
                var i = t(e.target),
                  n = t(t.ui.safeActiveElement(this.document[0]));
                !this.mouseHandled &&
                  i.not(".ui-state-disabled").length &&
                  (this.select(e),
                  e.isPropagationStopped() || (this.mouseHandled = !0),
                  i.has(".ui-menu").length
                    ? this.expand(e)
                    : !this.element.is(":focus") &&
                      n.closest(".ui-menu").length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (e) {
                if (!this.previousFilter) {
                  var i = t(e.target).closest(".ui-menu-item"),
                    n = t(e.currentTarget);
                  i[0] === n[0] &&
                    (this._removeClass(
                      n.siblings().children(".ui-state-active"),
                      null,
                      "ui-state-active"
                    ),
                    this.focus(e, n));
                }
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (e) {
                this._delay(function () {
                  !t.contains(
                    this.element[0],
                    t.ui.safeActiveElement(this.document[0])
                  ) && this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          var e = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled")
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeAttr(
              "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
            )
            .removeUniqueId()
            .show(),
            e.children().each(function () {
              var e = t(this);
              e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function (e) {
          var i,
            n,
            s,
            o,
            a = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case t.ui.keyCode.UP:
              this.previous(e);
              break;
            case t.ui.keyCode.DOWN:
              this.next(e);
              break;
            case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case t.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (a = !1),
                (n = this.previousFilter || ""),
                (o = !1),
                (s =
                  e.keyCode >= 96 && e.keyCode <= 105
                    ? (e.keyCode - 96).toString()
                    : String.fromCharCode(e.keyCode)),
                clearTimeout(this.filterTimer),
                s === n ? (o = !0) : (s = n + s),
                (i = this._filterMenuItems(s)),
                (i =
                  o && -1 !== i.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : i).length ||
                  ((s = String.fromCharCode(e.keyCode)),
                  (i = this._filterMenuItems(s))),
                i.length
                  ? (this.focus(e, i),
                    (this.previousFilter = s),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          a && e.preventDefault();
        },
        _activate: function (t) {
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            (this.active.children("[aria-haspopup='true']").length
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var e,
            i,
            n,
            s,
            o = this,
            a = this.options.icons.submenu,
            r = this.element.find(this.options.menus);
          this._toggleClass(
            "ui-menu-icons",
            null,
            !!this.element.find(".ui-icon").length
          ),
            (i = r
              .filter(":not(.ui-menu)")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var e = t(this),
                  i = e.prev(),
                  n = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + a),
                  i.attr("aria-haspopup", "true").prepend(n),
                  e.attr("aria-labelledby", i.attr("id"));
              })),
            this._addClass(
              i,
              "ui-menu",
              "ui-widget ui-widget-content ui-front"
            ),
            (e = r.add(this.element).find(this.options.items))
              .not(".ui-menu-item")
              .each(function () {
                var e = t(this);
                o._isDivider(e) &&
                  o._addClass(e, "ui-menu-divider", "ui-widget-content");
              }),
            (s = (n = e.not(".ui-menu-item, .ui-menu-divider"))
              .children()
              .not(".ui-menu")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() })),
            this._addClass(n, "ui-menu-item")._addClass(
              s,
              "ui-menu-item-wrapper"
            ),
            e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !t.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          if ("icons" === t) {
            var i = this.element.find(".ui-menu-icon");
            this._removeClass(i, null, this.options.icons.submenu)._addClass(
              i,
              null,
              e.submenu
            );
          }
          this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", String(t)),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function (t, e) {
          var i, n, s;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (n = this.active.children(".ui-menu-item-wrapper")),
            this._addClass(n, null, "ui-state-active"),
            this.options.role &&
              this.element.attr("aria-activedescendant", n.attr("id")),
            (s = this.active
              .parent()
              .closest(".ui-menu-item")
              .children(".ui-menu-item-wrapper")),
            this._addClass(s, null, "ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")).length &&
              t &&
              /^mouse/.test(t.type) &&
              this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (e) {
          var i, n, s, o, a, r;
          this._hasScroll() &&
            ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
            (s = e.offset().top - this.activeMenu.offset().top - i - n),
            (o = this.activeMenu.scrollTop()),
            (a = this.activeMenu.height()),
            (r = e.outerHeight()),
            s < 0
              ? this.activeMenu.scrollTop(o + s)
              : s + r > a && this.activeMenu.scrollTop(o + s - a + r));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this._removeClass(
                this.active.children(".ui-menu-item-wrapper"),
                null,
                "ui-state-active"
              ),
              this._trigger("blur", t, { item: this.active }),
              (this.active = null));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (e) {
          var i = t.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(i);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var n = i
                ? this.element
                : t(e && e.target).closest(this.element.find(".ui-menu"));
              n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                this._removeClass(
                  n.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = n);
            }, this.delay));
        },
        _close: function (t) {
          t || (t = this.active ? this.active.parent() : this.element),
            t
              .find(".ui-menu")
              .hide()
              .attr("aria-hidden", "true")
              .attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function (e) {
          return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var n;
          this.active &&
            (n =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item"
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (n && n.length && this.active) ||
              (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n);
        },
        nextPage: function (e) {
          var i, n, s;
          this.active
            ? this.isLastItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (i = t(this)).offset().top - n - s < 0;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? "last" : "first"]()
                  ))
            : this.next(e);
        },
        previousPage: function (e) {
          var i, n, s;
          this.active
            ? this.isFirstItem() ||
              (this._hasScroll()
                ? ((n = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return (i = t(this)).offset().top - n + s > 0;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu.find(this.options.items).first()
                  ))
            : this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i);
        },
        _filterMenuItems: function (e) {
          var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            n = new RegExp("^" + i, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return n.test(
                t.trim(t(this).children(".ui-menu-item-wrapper").text())
              );
            });
        },
      });
    t.widget("ui.autocomplete", {
      version: "1.12.1",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var e,
          i,
          n,
          s = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === s,
          a = "input" === s;
        (this.isMultiLine = o || (!a && this._isContentEditable(this.element))),
          (this.valueMethod = this.element[o || a ? "val" : "text"]),
          (this.isNewMenu = !0),
          this._addClass("ui-autocomplete-input"),
          this.element.attr("autocomplete", "off"),
          this._on(this.element, {
            keydown: function (s) {
              if (this.element.prop("readOnly"))
                return (e = !0), (n = !0), void (i = !0);
              (e = !1), (n = !1), (i = !1);
              var o = t.ui.keyCode;
              switch (s.keyCode) {
                case o.PAGE_UP:
                  (e = !0), this._move("previousPage", s);
                  break;
                case o.PAGE_DOWN:
                  (e = !0), this._move("nextPage", s);
                  break;
                case o.UP:
                  (e = !0), this._keyEvent("previous", s);
                  break;
                case o.DOWN:
                  (e = !0), this._keyEvent("next", s);
                  break;
                case o.ENTER:
                  this.menu.active &&
                    ((e = !0), s.preventDefault(), this.menu.select(s));
                  break;
                case o.TAB:
                  this.menu.active && this.menu.select(s);
                  break;
                case o.ESCAPE:
                  this.menu.element.is(":visible") &&
                    (this.isMultiLine || this._value(this.term),
                    this.close(s),
                    s.preventDefault());
                  break;
                default:
                  (i = !0), this._searchTimeout(s);
              }
            },
            keypress: function (n) {
              if (e)
                return (
                  (e = !1),
                  void (
                    (this.isMultiLine && !this.menu.element.is(":visible")) ||
                    n.preventDefault()
                  )
                );
              if (!i) {
                var s = t.ui.keyCode;
                switch (n.keyCode) {
                  case s.PAGE_UP:
                    this._move("previousPage", n);
                    break;
                  case s.PAGE_DOWN:
                    this._move("nextPage", n);
                    break;
                  case s.UP:
                    this._keyEvent("previous", n);
                    break;
                  case s.DOWN:
                    this._keyEvent("next", n);
                }
              }
            },
            input: function (t) {
              if (n) return (n = !1), void t.preventDefault();
              this._searchTimeout(t);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              this.cancelBlur
                ? delete this.cancelBlur
                : (clearTimeout(this.searching),
                  this.close(t),
                  this._change(t));
            },
          }),
          this._initSource(),
          (this.menu = t("<ul>")
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .menu("instance")),
          this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
          this._on(this.menu.element, {
            mousedown: function (e) {
              e.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur,
                    this.element[0] !==
                      t.ui.safeActiveElement(this.document[0]) &&
                      this.element.trigger("focus");
                });
            },
            menufocus: function (e, i) {
              var n, s;
              if (
                this.isNewMenu &&
                ((this.isNewMenu = !1),
                e.originalEvent && /^mouse/.test(e.originalEvent.type))
              )
                return (
                  this.menu.blur(),
                  void this.document.one("mousemove", function () {
                    t(e.target).trigger(e.originalEvent);
                  })
                );
              (s = i.item.data("ui-autocomplete-item")),
                !1 !== this._trigger("focus", e, { item: s }) &&
                  e.originalEvent &&
                  /^key/.test(e.originalEvent.type) &&
                  this._value(s.value),
                (n = i.item.attr("aria-label") || s.value) &&
                  t.trim(n).length &&
                  (this.liveRegion.children().hide(),
                  t("<div>").text(n).appendTo(this.liveRegion));
            },
            menuselect: function (e, i) {
              var n = i.item.data("ui-autocomplete-item"),
                s = this.previous;
              this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                (this.element.trigger("focus"),
                (this.previous = s),
                this._delay(function () {
                  (this.previous = s), (this.selectedItem = n);
                })),
                !1 !== this._trigger("select", e, { item: n }) &&
                  this._value(n.value),
                (this.term = this._value()),
                this.close(e),
                (this.selectedItem = n);
            },
          }),
          (this.liveRegion = t("<div>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions",
          }).appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element.removeAttr("autocomplete"),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "source" === t && this._initSource(),
          "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
          "disabled" === t && e && this.xhr && this.xhr.abort();
      },
      _isEventTargetInWidget: function (e) {
        var i = this.menu.element[0];
        return (
          e.target === this.element[0] ||
          e.target === i ||
          t.contains(i, e.target)
        );
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return (
          e &&
            (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
          e.length || (e = this.document[0].body),
          e
        );
      },
      _initSource: function () {
        var e,
          i,
          n = this;
        t.isArray(this.options.source)
          ? ((e = this.options.source),
            (this.source = function (i, n) {
              n(t.ui.autocomplete.filter(e, i.term));
            }))
          : "string" == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (e, s) {
              n.xhr && n.xhr.abort(),
                (n.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: "json",
                  success: function (t) {
                    s(t);
                  },
                  error: function () {
                    s([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            var e = this.term === this._value(),
              i = this.menu.element.is(":visible"),
              n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            (e && (!e || i || n)) ||
              ((this.selectedItem = null), this.search(null, t));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : !1 !== this._trigger("search", e)
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this._addClass("ui-autocomplete-loading"),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var e = ++this.requestIndex;
        return t.proxy(function (t) {
          e === this.requestIndex && this.__response(t),
            this.pending--,
            this.pending || this._removeClass("ui-autocomplete-loading");
        }, this);
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger("response", null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger("open"))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this._off(this.document, "mousedown"),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", t));
      },
      _change: function (t) {
        this.previous !== this._value() &&
          this._trigger("change", t, { item: this.selectedItem });
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value
          ? e
          : t.map(e, function (e) {
              return "string" == typeof e
                ? { label: e, value: e }
                : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label,
                  });
            });
      },
      _suggest: function (e) {
        var i = this.menu.element.empty();
        this._renderMenu(i, e),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(t.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(),
          this._on(this.document, { mousedown: "_closeOnClickOutside" });
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(
          Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (e, i) {
        var n = this;
        t.each(i, function (t, i) {
          n._renderItemData(e, i);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-autocomplete-item", e);
      },
      _renderItem: function (e, i) {
        return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
      },
      _move: function (t, e) {
        if (this.menu.element.is(":visible"))
          return (this.menu.isFirstItem() && /^previous/.test(t)) ||
            (this.menu.isLastItem() && /^next/.test(t))
            ? (this.isMultiLine || this._value(this.term),
              void this.menu.blur())
            : void this.menu[t](e);
        this.search(null, e);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (this.isMultiLine && !this.menu.element.is(":visible")) ||
          (this._move(t, e), e.preventDefault());
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1;
        var e = t.prop("contentEditable");
        return "inherit" === e
          ? this._isContentEditable(t.parent())
          : "true" === e;
      },
    }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      });
    t.ui.autocomplete;
    var h = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
      version: "1.12.1",
      defaultElement: "<div>",
      options: {
        direction: "horizontal",
        disabled: null,
        onlyVisible: !0,
        items: {
          button:
            "input[type=button], input[type=submit], input[type=reset], button, a",
          controlgroupLabel: ".ui-controlgroup-label",
          checkboxradio: "input[type='checkbox'], input[type='radio']",
          selectmenu: "select",
          spinner: ".ui-spinner-input",
        },
      },
      _create: function () {
        this._enhance();
      },
      _enhance: function () {
        this.element.attr("role", "toolbar"), this.refresh();
      },
      _destroy: function () {
        this._callChildMethod("destroy"),
          this.childWidgets.removeData("ui-controlgroup-data"),
          this.element.removeAttr("role"),
          this.options.items.controlgroupLabel &&
            this.element
              .find(this.options.items.controlgroupLabel)
              .find(".ui-controlgroup-label-contents")
              .contents()
              .unwrap();
      },
      _initWidgets: function () {
        var e = this,
          i = [];
        t.each(this.options.items, function (n, s) {
          var o,
            a = {};
          if (s)
            return "controlgroupLabel" === n
              ? ((o = e.element.find(s)).each(function () {
                  var e = t(this);
                  e.children(".ui-controlgroup-label-contents").length ||
                    e
                      .contents()
                      .wrapAll(
                        "<span class='ui-controlgroup-label-contents'></span>"
                      );
                }),
                e._addClass(
                  o,
                  null,
                  "ui-widget ui-widget-content ui-state-default"
                ),
                void (i = i.concat(o.get())))
              : void (
                  t.fn[n] &&
                  ((a = e["_" + n + "Options"]
                    ? e["_" + n + "Options"]("middle")
                    : { classes: {} }),
                  e.element.find(s).each(function () {
                    var s = t(this),
                      o = s[n]("instance"),
                      r = t.widget.extend({}, a);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                      o || (o = s[n]()[n]("instance")),
                        o &&
                          (r.classes = e._resolveClassesValues(r.classes, o)),
                        s[n](r);
                      var l = s[n]("widget");
                      t.data(
                        l[0],
                        "ui-controlgroup-data",
                        o || s[n]("instance")
                      ),
                        i.push(l[0]);
                    }
                  }))
                );
        }),
          (this.childWidgets = t(t.unique(i))),
          this._addClass(this.childWidgets, "ui-controlgroup-item");
      },
      _callChildMethod: function (e) {
        this.childWidgets.each(function () {
          var i = t(this).data("ui-controlgroup-data");
          i && i[e] && i[e]();
        });
      },
      _updateCornerClass: function (t, e) {
        var i = this._buildSimpleOptions(e, "label").classes.label;
        this._removeClass(
          t,
          null,
          "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
        ),
          this._addClass(t, null, i);
      },
      _buildSimpleOptions: function (t, e) {
        var i = "vertical" === this.options.direction,
          n = { classes: {} };
        return (
          (n.classes[e] = {
            middle: "",
            first: "ui-corner-" + (i ? "top" : "left"),
            last: "ui-corner-" + (i ? "bottom" : "right"),
            only: "ui-corner-all",
          }[t]),
          n
        );
      },
      _spinnerOptions: function (t) {
        var e = this._buildSimpleOptions(t, "ui-spinner");
        return (
          (e.classes["ui-spinner-up"] = ""),
          (e.classes["ui-spinner-down"] = ""),
          e
        );
      },
      _buttonOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-button");
      },
      _checkboxradioOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-checkboxradio-label");
      },
      _selectmenuOptions: function (t) {
        var e = "vertical" === this.options.direction;
        return {
          width: !!e && "auto",
          classes: {
            middle: {
              "ui-selectmenu-button-open": "",
              "ui-selectmenu-button-closed": "",
            },
            first: {
              "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "top" : "left"),
            },
            last: {
              "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "bottom" : "right"),
            },
            only: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
          }[t],
        };
      },
      _resolveClassesValues: function (e, i) {
        var n = {};
        return (
          t.each(e, function (s) {
            var o = i.options.classes[s] || "";
            (o = t.trim(o.replace(h, ""))),
              (n[s] = (o + " " + e[s]).replace(/\s+/g, " "));
          }),
          n
        );
      },
      _setOption: function (t, e) {
        "direction" === t &&
          this._removeClass("ui-controlgroup-" + this.options.direction),
          this._super(t, e),
          "disabled" !== t
            ? this.refresh()
            : this._callChildMethod(e ? "disable" : "enable");
      },
      refresh: function () {
        var e,
          i = this;
        this._addClass(
          "ui-controlgroup ui-controlgroup-" + this.options.direction
        ),
          "horizontal" === this.options.direction &&
            this._addClass(null, "ui-helper-clearfix"),
          this._initWidgets(),
          (e = this.childWidgets),
          this.options.onlyVisible && (e = e.filter(":visible")),
          e.length &&
            (t.each(["first", "last"], function (t, n) {
              var s = e[n]().data("ui-controlgroup-data");
              if (s && i["_" + s.widgetName + "Options"]) {
                var o = i["_" + s.widgetName + "Options"](
                  1 === e.length ? "only" : n
                );
                (o.classes = i._resolveClassesValues(o.classes, s)),
                  s.element[s.widgetName](o);
              } else i._updateCornerClass(e[n](), n);
            }),
            this._callChildMethod("refresh"));
      },
    });
    t.widget("ui.checkboxradio", [
      t.ui.formResetMixin,
      {
        version: "1.12.1",
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: {
            "ui-checkboxradio-label": "ui-corner-all",
            "ui-checkboxradio-icon": "ui-corner-all",
          },
        },
        _getCreateOptions: function () {
          var e,
            i,
            n = this,
            s = this._super() || {};
          return (
            this._readType(),
            (i = this.element.labels()),
            (this.label = t(i[i.length - 1])),
            this.label.length ||
              t.error("No label found for checkboxradio widget"),
            (this.originalLabel = ""),
            this.label
              .contents()
              .not(this.element[0])
              .each(function () {
                n.originalLabel +=
                  3 === this.nodeType ? t(this).text() : this.outerHTML;
              }),
            this.originalLabel && (s.label = this.originalLabel),
            null != (e = this.element[0].disabled) && (s.disabled = e),
            s
          );
        },
        _create: function () {
          var t = this.element[0].checked;
          this._bindFormResetHandler(),
            null == this.options.disabled &&
              (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(
              this.label,
              "ui-checkboxradio-label",
              "ui-button ui-widget"
            ),
            "radio" === this.type &&
              this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(
                this.label,
                "ui-checkboxradio-checked",
                "ui-state-active"
              ),
              this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
              change: "_toggleClasses",
              focus: function () {
                this._addClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
              blur: function () {
                this._removeClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
            });
        },
        _readType: function () {
          var e = this.element[0].nodeName.toLowerCase();
          (this.type = this.element[0].type),
            ("input" === e && /radio|checkbox/.test(this.type)) ||
              t.error(
                "Can't create checkboxradio on element.nodeName=" +
                  e +
                  " and element.type=" +
                  this.type
              );
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked);
        },
        widget: function () {
          return this.label;
        },
        _getRadioGroup: function () {
          var e = this.element[0].name,
            i = "input[name='" + t.ui.escapeSelector(e) + "']";
          return e
            ? (this.form.length
                ? t(this.form[0].elements).filter(i)
                : t(i).filter(function () {
                    return 0 === t(this).form().length;
                  })
              ).not(this.element)
            : t([]);
        },
        _toggleClasses: function () {
          var e = this.element[0].checked;
          this._toggleClass(
            this.label,
            "ui-checkboxradio-checked",
            "ui-state-active",
            e
          ),
            this.options.icon &&
              "checkbox" === this.type &&
              this._toggleClass(
                this.icon,
                null,
                "ui-icon-check ui-state-checked",
                e
              )._toggleClass(this.icon, null, "ui-icon-blank", !e),
            "radio" === this.type &&
              this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e &&
                  e._removeClass(
                    e.label,
                    "ui-checkboxradio-checked",
                    "ui-state-active"
                  );
              });
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function (t, e) {
          if ("label" !== t || e) {
            if ((this._super(t, e), "disabled" === t))
              return (
                this._toggleClass(this.label, null, "ui-state-disabled", e),
                void (this.element[0].disabled = e)
              );
            this.refresh();
          }
        },
        _updateIcon: function (e) {
          var i = "ui-icon ui-icon-background ";
          this.options.icon
            ? (this.icon ||
                ((this.icon = t("<span>")),
                (this.iconSpace = t("<span> </span>")),
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
              "checkbox" === this.type
                ? ((i += e
                    ? "ui-icon-check ui-state-checked"
                    : "ui-icon-blank"),
                  this._removeClass(
                    this.icon,
                    null,
                    e ? "ui-icon-blank" : "ui-icon-check"
                  ))
                : (i += "ui-icon-blank"),
              this._addClass(this.icon, "ui-checkboxradio-icon", i),
              e ||
                this._removeClass(
                  this.icon,
                  null,
                  "ui-icon-check ui-state-checked"
                ),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon &&
              (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function () {
          var t = this.label.contents().not(this.element[0]);
          this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label);
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled;
          this._updateIcon(t),
            this._toggleClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active",
              t
            ),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e });
        },
      },
    ]);
    t.ui.checkboxradio;
    t.widget("ui.button", {
      version: "1.12.1",
      defaultElement: "<button>",
      options: {
        classes: { "ui-button": "ui-corner-all" },
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0,
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          (this.isInput = this.element.is("input")),
          null != (t = this.element[0].disabled) && (e.disabled = t),
          (this.originalLabel = this.isInput
            ? this.element.val()
            : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        );
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon &&
          (this.options.showLabel = !0),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr("title")),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput
              ? this.element.val(this.options.label)
              : this.element.html(this.options.label)),
          this._addClass("ui-button", "ui-widget"),
          this._setOption("disabled", this.options.disabled),
          this._enhance(),
          this.element.is("a") &&
            this._on({
              keyup: function (e) {
                e.keyCode === t.ui.keyCode.SPACE &&
                  (e.preventDefault(),
                  this.element[0].click
                    ? this.element[0].click()
                    : this.element.trigger("click"));
              },
            });
      },
      _enhance: function () {
        this.element.is("button") || this.element.attr("role", "button"),
          this.options.icon &&
            (this._updateIcon("icon", this.options.icon),
            this._updateTooltip());
      },
      _updateTooltip: function () {
        (this.title = this.element.attr("title")),
          this.options.showLabel ||
            this.title ||
            this.element.attr("title", this.options.label);
      },
      _updateIcon: function (e, i) {
        var n = "iconPosition" !== e,
          s = n ? this.options.iconPosition : i,
          o = "top" === s || "bottom" === s;
        this.icon
          ? n && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = t("<span>")),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
          n && this._addClass(this.icon, null, i),
          this._attachIcon(s),
          o
            ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
              this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = t("<span> </span>")),
                this._addClass(this.iconSpace, "ui-button-icon-space")),
              this._removeClass(this.icon, null, "ui-wiget-icon-block"),
              this._attachIconSpace(s));
      },
      _destroy: function () {
        this.element.removeAttr("role"),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr("title");
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
          this.iconSpace
        );
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
          this.icon
        );
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t);
      },
      _setOption: function (t, e) {
        "icon" === t &&
          (e
            ? this._updateIcon(t, e)
            : this.icon &&
              (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          "iconPosition" === t && this._updateIcon(t, e),
          "showLabel" === t &&
            (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
          "label" === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition),
                  this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          "disabled" === t &&
            (this._toggleClass(null, "ui-state-disabled", e),
            (this.element[0].disabled = e),
            e && this.element.blur());
      },
      refresh: function () {
        var t = this.element.is("input, button")
          ? this.element[0].disabled
          : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({ disabled: t }),
          this._updateTooltip();
      },
    }),
      !1 !== t.uiBackCompat &&
        (t.widget("ui.button", t.ui.button, {
          options: { text: !0, icons: { primary: null, secondary: null } },
          _create: function () {
            this.options.showLabel &&
              !this.options.text &&
              (this.options.showLabel = this.options.text),
              !this.options.showLabel &&
                this.options.text &&
                (this.options.text = this.options.showLabel),
              this.options.icon ||
              (!this.options.icons.primary && !this.options.icons.secondary)
                ? this.options.icon &&
                  (this.options.icons.primary = this.options.icon)
                : this.options.icons.primary
                ? (this.options.icon = this.options.icons.primary)
                : ((this.options.icon = this.options.icons.secondary),
                  (this.options.iconPosition = "end")),
              this._super();
          },
          _setOption: function (t, e) {
            "text" !== t
              ? ("showLabel" === t && (this.options.text = e),
                "icon" === t && (this.options.icons.primary = e),
                "icons" === t &&
                  (e.primary
                    ? (this._super("icon", e.primary),
                      this._super("iconPosition", "beginning"))
                    : e.secondary &&
                      (this._super("icon", e.secondary),
                      this._super("iconPosition", "end"))),
                this._superApply(arguments))
              : this._super("showLabel", e);
          },
        }),
        (t.fn.button = (function (e) {
          return function () {
            return !this.length ||
              (this.length && "INPUT" !== this[0].tagName) ||
              (this.length &&
                "INPUT" === this[0].tagName &&
                "checkbox" !== this.attr("type") &&
                "radio" !== this.attr("type"))
              ? e.apply(this, arguments)
              : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
                0 === arguments.length
                  ? this.checkboxradio({ icon: !1 })
                  : this.checkboxradio.apply(this, arguments));
          };
        })(t.fn.button)),
        (t.fn.buttonset = function () {
          return (
            t.ui.controlgroup || t.error("Controlgroup widget missing"),
            "option" === arguments[0] &&
            "items" === arguments[1] &&
            arguments[2]
              ? this.controlgroup.apply(this, [
                  arguments[0],
                  "items.button",
                  arguments[2],
                ])
              : "option" === arguments[0] && "items" === arguments[1]
              ? this.controlgroup.apply(this, [arguments[0], "items.button"])
              : ("object" == typeof arguments[0] &&
                  arguments[0].items &&
                  (arguments[0].items = { button: arguments[0].items }),
                this.controlgroup.apply(this, arguments))
          );
        }));
    var u;
    t.ui.button;
    function d() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = p(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function p(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .on("mouseout", i, function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .on("mouseover", i, f);
    }
    function f() {
      t.datepicker._isDisabledDatepicker(
        u.inline ? u.dpDiv.parent()[0] : u.input[0]
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function m(e, i) {
      for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
      return e;
    }
    t.extend(t.ui, { datepicker: { version: "1.12.1" } }),
      t.extend(d.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return m(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
          var n, s, o;
          (s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
            ((o = this._newInst(t(e), s)).settings = t.extend({}, i || {})),
            "input" === n
              ? this._connectDatepicker(e, o)
              : s && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, i) {
          return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: i,
            dpDiv: i
              ? p(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, i) {
          var n = t(e);
          (i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .on("keydown", this._doKeyDown)
                .on("keypress", this._doKeyPress)
                .on("keyup", this._doKeyUp),
              this._autoSize(i),
              t.data(e, "datepicker", i),
              i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
          var n,
            s,
            o,
            a = this._get(i, "appendText"),
            r = this._get(i, "isRTL");
          i.append && i.append.remove(),
            a &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + a + "</span>"
              )),
              e[r ? "before" : "after"](i.append)),
            e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            ("focus" !== (n = this._get(i, "showOn")) && "both" !== n) ||
              e.on("focus", this._showDatepicker),
            ("button" !== n && "both" !== n) ||
              ((s = this._get(i, "buttonText")),
              (o = this._get(i, "buttonImage")),
              (i.trigger = t(
                this._get(i, "buttonImageOnly")
                  ? t("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: o, alt: s, title: s })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s
                      )
              )),
              e[r ? "before" : "after"](i.trigger),
              i.trigger.on("click", function () {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                      t.datepicker._lastInput !== e[0]
                    ? (t.datepicker._hideDatepicker(),
                      t.datepicker._showDatepicker(e[0]))
                    : t.datepicker._showDatepicker(e[0]),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          if (this._get(t, "autoSize") && !t.inline) {
            var e,
              i,
              n,
              s,
              o = new Date(2009, 11, 20),
              a = this._get(t, "dateFormat");
            a.match(/[DM]/) &&
              ((e = function (t) {
                for (i = 0, n = 0, s = 0; s < t.length; s++)
                  t[s].length > i && ((i = t[s].length), (n = s));
                return n;
              }),
              o.setMonth(
                e(
                  this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort")
                )
              ),
              o.setDate(
                e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay()
              )),
              t.input.attr("size", this._formatDate(t, o).length);
          }
        },
        _inlineDatepicker: function (e, i) {
          var n = t(e);
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, n, s, o) {
          var a,
            r,
            l,
            c,
            h,
            u = this._dialogInst;
          return (
            u ||
              ((this.uuid += 1),
              (a = "dp" + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  a +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.on("keydown", this._doKeyDown),
              t("body").append(this._dialogInput),
              ((u = this._dialogInst = this._newInst(
                this._dialogInput,
                !1
              )).settings = {}),
              t.data(this._dialogInput[0], "datepicker", u)),
            m(u.settings, s || {}),
            (i = i && i.constructor === Date ? this._formatDate(u, i) : i),
            this._dialogInput.val(i),
            (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
            this._pos ||
              ((r = document.documentElement.clientWidth),
              (l = document.documentElement.clientHeight),
              (c =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (h =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [r / 2 - 100 + c, l / 2 - 150 + h])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (u.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", u),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var i,
            n = t(e),
            s = t.data(e, "datepicker");
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, "datepicker"),
            "input" === i
              ? (s.append.remove(),
                s.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .off("focus", this._showDatepicker)
                  .off("keydown", this._doKeyDown)
                  .off("keypress", this._doKeyPress)
                  .off("keyup", this._doKeyUp))
              : ("div" !== i && "span" !== i) ||
                n.removeClass(this.markerClassName).empty(),
            u === s && (u = null));
        },
        _enableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !1),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" !== i && "span" !== i) ||
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .removeClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !0),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" !== i && "span" !== i) ||
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .addClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; e < this._disabledInputs.length; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return t.data(e, "datepicker");
          } catch (t) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (e, i, n) {
          var s,
            o,
            a,
            r,
            l = this._getInst(e);
          if (2 === arguments.length && "string" == typeof i)
            return "defaults" === i
              ? t.extend({}, t.datepicker._defaults)
              : l
              ? "all" === i
                ? t.extend({}, l.settings)
                : this._get(l, i)
              : null;
          (s = i || {}),
            "string" == typeof i && ((s = {})[i] = n),
            l &&
              (this._curInst === l && this._hideDatepicker(),
              (o = this._getDateDatepicker(e, !0)),
              (a = this._getMinMaxDate(l, "min")),
              (r = this._getMinMaxDate(l, "max")),
              m(l.settings, s),
              null !== a &&
                void 0 !== s.dateFormat &&
                void 0 === s.minDate &&
                (l.settings.minDate = this._formatDate(l, a)),
              null !== r &&
                void 0 !== s.dateFormat &&
                void 0 === s.maxDate &&
                (l.settings.maxDate = this._formatDate(l, r)),
              "disabled" in s &&
                (s.disabled
                  ? this._disableDatepicker(e)
                  : this._enableDatepicker(e)),
              this._attachments(t(e), l),
              this._autoSize(l),
              this._setDate(l, o),
              this._updateAlternate(l),
              this._updateDatepicker(l));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          );
        },
        _doKeyDown: function (e) {
          var i,
            n,
            s,
            o = t.datepicker._getInst(e.target),
            a = !0,
            r = o.dpDiv.is(".ui-datepicker-rtl");
          if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (a = !1);
                break;
              case 13:
                return (
                  (s = t(
                    "td." +
                      t.datepicker._dayOverClass +
                      ":not(." +
                      t.datepicker._currentClass +
                      ")",
                    o.dpDiv
                  ))[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      o.selectedMonth,
                      o.selectedYear,
                      s[0]
                    ),
                  (i = t.datepicker._get(o, "onSelect"))
                    ? ((n = t.datepicker._formatDate(o)),
                      i.apply(o.input ? o.input[0] : null, [n, o]))
                    : t.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                t.datepicker._hideDatepicker();
                break;
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(o, "stepBigMonths")
                        : -t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 38:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, "D"),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(o, "stepBigMonths")
                        : +t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 40:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, "D"),
                  (a = e.ctrlKey || e.metaKey);
                break;
              default:
                a = !1;
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (a = !1);
          a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var i,
            n,
            s = t.datepicker._getInst(e.target);
          if (t.datepicker._get(s, "constrainInput"))
            return (
              (i = t.datepicker._possibleChars(
                t.datepicker._get(s, "dateFormat")
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode
              )),
              e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
            );
        },
        _doKeyUp: function (e) {
          var i = t.datepicker._getInst(e.target);
          if (i.input.val() !== i.lastVal)
            try {
              t.datepicker.parseDate(
                t.datepicker._get(i, "dateFormat"),
                i.input ? i.input.val() : null,
                t.datepicker._getFormatConfig(i)
              ) &&
                (t.datepicker._setDateFromField(i),
                t.datepicker._updateAlternate(i),
                t.datepicker._updateDatepicker(i));
            } catch (t) {}
          return !0;
        },
        _showDatepicker: function (e) {
          var i, n, s, o, a, r, l;
          ("input" !== (e = e.target || e).nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          t.datepicker._isDisabledDatepicker(e) ||
            t.datepicker._lastInput === e) ||
            ((i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !==
              (s = (n = t.datepicker._get(i, "beforeShow"))
                ? n.apply(e, [e, i])
                : {}) &&
              (m(i.settings, s),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (o = !1),
              t(e)
                .parents()
                .each(function () {
                  return !(o |= "fixed" === t(this).css("position"));
                }),
              (a = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (a = t.datepicker._checkOffset(i, a, o)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : o
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px",
              }),
              i.inline ||
                ((r = t.datepicker._get(i, "showAnim")),
                (l = t.datepicker._get(i, "duration")),
                i.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(t(e)) + 1
                ),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[r]
                  ? i.dpDiv.show(r, t.datepicker._get(i, "showOptions"), l)
                  : i.dpDiv[r || "show"](r ? l : null),
                t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                (t.datepicker._curInst = i))));
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4),
            (u = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
          var i,
            n = this._getNumberOfMonths(e),
            s = n[1],
            o = e.dpDiv.find("." + this._dayOverClass + " a");
          o.length > 0 && f.apply(o.get(0)),
            e.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
              )
              .width(""),
            s > 1 &&
              e.dpDiv
                .addClass("ui-datepicker-multi-" + s)
                .css("width", 17 * s + "em"),
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi"
            ),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl"
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.trigger("focus"),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function () {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (e, i, n) {
          var s = e.dpDiv.outerWidth(),
            o = e.dpDiv.outerHeight(),
            a = e.input ? e.input.outerWidth() : 0,
            r = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            c =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop());
          return (
            (i.left -= this._get(e, "isRTL") ? s - a : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + r
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
            )),
            (i.top -= Math.min(
              i.top,
              i.top + o > c && c > o ? Math.abs(o + r) : 0
            )),
            i
          );
        },
        _findPos: function (e) {
          for (
            var i, n = this._getInst(e), s = this._get(n, "isRTL");
            e &&
            ("hidden" === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[s ? "previousSibling" : "nextSibling"];
          return [(i = t(e).offset()).left, i.top];
        },
        _hideDatepicker: function (e) {
          var i,
            n,
            s,
            o,
            a = this._curInst;
          !a ||
            (e && a !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
              ((i = this._get(a, "showAnim")),
              (n = this._get(a, "duration")),
              (s = function () {
                t.datepicker._tidyDialog(a);
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s)
                : a.dpDiv[
                    "slideDown" === i
                      ? "slideUp"
                      : "fadeIn" === i
                      ? "fadeOut"
                      : "hide"
                  ](i ? n : null, s),
              i || s(),
              (this._datepickerShowing = !1),
              (o = this._get(a, "onClose")) &&
                o.apply(a.input ? a.input[0] : null, [
                  a.input ? a.input.val() : "",
                  a,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
            ((i[0].id === t.datepicker._mainDivId ||
              0 !== i.parents("#" + t.datepicker._mainDivId).length ||
              i.hasClass(t.datepicker.markerClassName) ||
              i.closest("." + t.datepicker._triggerClass).length ||
              !t.datepicker._datepickerShowing ||
              (t.datepicker._inDialog && t.blockUI)) &&
              (!i.hasClass(t.datepicker.markerClassName) ||
                t.datepicker._curInst === n)) ||
              t.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          this._isDisabledDatepicker(s[0]) ||
            (this._adjustInstDate(
              o,
              i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
              n
            ),
            this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
          var i,
            n = t(e),
            s = this._getInst(n[0]);
          this._get(s, "gotoCurrent") && s.currentDay
            ? ((s.selectedDay = s.currentDay),
              (s.drawMonth = s.selectedMonth = s.currentMonth),
              (s.drawYear = s.selectedYear = s.currentYear))
            : ((i = new Date()),
              (s.selectedDay = i.getDate()),
              (s.drawMonth = s.selectedMonth = i.getMonth()),
              (s.drawYear = s.selectedYear = i.getFullYear())),
            this._notifyChange(s),
            this._adjustDate(n);
        },
        _selectMonthYear: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          (o["selected" + ("M" === n ? "Month" : "Year")] = o[
            "draw" + ("M" === n ? "Month" : "Year")
          ] = parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(o),
            this._adjustDate(s);
        },
        _selectDay: function (e, i, n, s) {
          var o,
            a = t(e);
          t(s).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(a[0]) ||
            (((o = this._getInst(a[0])).selectedDay = o.currentDay = t(
              "a",
              s
            ).html()),
            (o.selectedMonth = o.currentMonth = i),
            (o.selectedYear = o.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
            ));
        },
        _clearDate: function (e) {
          var i = t(e);
          this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
          var n,
            s = t(e),
            o = this._getInst(s[0]);
          (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect"))
              ? n.apply(o.input ? o.input[0] : null, [i, o])
              : o.input && o.input.trigger("change"),
            o.inline
              ? this._updateDatepicker(o)
              : (this._hideDatepicker(),
                (this._lastInput = o.input[0]),
                "object" != typeof o.input[0] && o.input.trigger("focus"),
                (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var i,
            n,
            s,
            o = this._get(e, "altField");
          o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
            (n = this._getDate(e)),
            (s = this.formatDate(i, n, this._getFormatConfig(e))),
            t(o).val(s));
        },
        noWeekends: function (t) {
          var e = t.getDay();
          return [e > 0 && e < 6, ""];
        },
        iso8601Week: function (t) {
          var e,
            i = new Date(t.getTime());
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, i, n) {
          if (null == e || null == i) throw "Invalid arguments";
          if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
            return null;
          var s,
            o,
            a,
            r,
            l = 0,
            c =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            h =
              "string" != typeof c
                ? c
                : (new Date().getFullYear() % 100) + parseInt(c, 10),
            u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (n ? n.dayNames : null) || this._defaults.dayNames,
            p =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            f = (n ? n.monthNames : null) || this._defaults.monthNames,
            m = -1,
            g = -1,
            v = -1,
            b = -1,
            _ = !1,
            y = function (t) {
              var i = s + 1 < e.length && e.charAt(s + 1) === t;
              return i && s++, i;
            },
            w = function (t) {
              var e = y(t),
                n =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                s = new RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                o = i.substring(l).match(s);
              if (!o) throw "Missing number at position " + l;
              return (l += o[0].length), parseInt(o[0], 10);
            },
            x = function (e, n, s) {
              var o = -1,
                a = t
                  .map(y(e) ? s : n, function (t, e) {
                    return [[e, t]];
                  })
                  .sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                  });
              if (
                (t.each(a, function (t, e) {
                  var n = e[1];
                  if (i.substr(l, n.length).toLowerCase() === n.toLowerCase())
                    return (o = e[0]), (l += n.length), !1;
                }),
                -1 !== o)
              )
                return o + 1;
              throw "Unknown name at position " + l;
            },
            C = function () {
              if (i.charAt(l) !== e.charAt(s))
                throw "Unexpected literal at position " + l;
              l++;
            };
          for (s = 0; s < e.length; s++)
            if (_) "'" !== e.charAt(s) || y("'") ? C() : (_ = !1);
            else
              switch (e.charAt(s)) {
                case "d":
                  v = w("d");
                  break;
                case "D":
                  x("D", u, d);
                  break;
                case "o":
                  b = w("o");
                  break;
                case "m":
                  g = w("m");
                  break;
                case "M":
                  g = x("M", p, f);
                  break;
                case "y":
                  m = w("y");
                  break;
                case "@":
                  (m = (r = new Date(w("@"))).getFullYear()),
                    (g = r.getMonth() + 1),
                    (v = r.getDate());
                  break;
                case "!":
                  (m = (r = new Date(
                    (w("!") - this._ticksTo1970) / 1e4
                  )).getFullYear()),
                    (g = r.getMonth() + 1),
                    (v = r.getDate());
                  break;
                case "'":
                  y("'") ? C() : (_ = !0);
                  break;
                default:
                  C();
              }
          if (l < i.length && ((a = i.substr(l)), !/^\s+/.test(a)))
            throw "Extra/unparsed characters found in date: " + a;
          if (
            (-1 === m
              ? (m = new Date().getFullYear())
              : m < 100 &&
                (m +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (m <= h ? 0 : -100)),
            b > -1)
          )
            for (g = 1, v = b; ; ) {
              if (v <= (o = this._getDaysInMonth(m, g - 1))) break;
              g++, (v -= o);
            }
          if (
            (r = this._daylightSavingAdjust(
              new Date(m, g - 1, v)
            )).getFullYear() !== m ||
            r.getMonth() + 1 !== g ||
            r.getDate() !== v
          )
            throw "Invalid date";
          return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          24 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
          60 *
          60 *
          1e7,
        formatDate: function (t, e, i) {
          if (!e) return "";
          var n,
            s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            a =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            r = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var i = n + 1 < t.length && t.charAt(n + 1) === e;
              return i && n++, i;
            },
            c = function (t, e, i) {
              var n = "" + e;
              if (l(t)) for (; n.length < i; ) n = "0" + n;
              return n;
            },
            h = function (t, e, i, n) {
              return l(t) ? n[e] : i[e];
            },
            u = "",
            d = !1;
          if (e)
            for (n = 0; n < t.length; n++)
              if (d)
                "'" !== t.charAt(n) || l("'") ? (u += t.charAt(n)) : (d = !1);
              else
                switch (t.charAt(n)) {
                  case "d":
                    u += c("d", e.getDate(), 2);
                    break;
                  case "D":
                    u += h("D", e.getDay(), s, o);
                    break;
                  case "o":
                    u += c(
                      "o",
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate()
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    );
                    break;
                  case "m":
                    u += c("m", e.getMonth() + 1, 2);
                    break;
                  case "M":
                    u += h("M", e.getMonth(), a, r);
                    break;
                  case "y":
                    u += l("y")
                      ? e.getFullYear()
                      : (e.getFullYear() % 100 < 10 ? "0" : "") +
                        (e.getFullYear() % 100);
                    break;
                  case "@":
                    u += e.getTime();
                    break;
                  case "!":
                    u += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (u += "'") : (d = !0);
                    break;
                  default:
                    u += t.charAt(n);
                }
          return u;
        },
        _possibleChars: function (t) {
          var e,
            i = "",
            n = !1,
            s = function (i) {
              var n = e + 1 < t.length && t.charAt(e + 1) === i;
              return n && e++, n;
            };
          for (e = 0; e < t.length; e++)
            if (n)
              "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
            else
              switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  s("'") ? (i += "'") : (n = !0);
                  break;
                default:
                  i += t.charAt(e);
              }
          return i;
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              n = (t.lastVal = t.input ? t.input.val() : null),
              s = this._getDefaultDate(t),
              o = s,
              a = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, n, a) || s;
            } catch (t) {
              n = e ? "" : n;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = n ? o.getDate() : 0),
              (t.currentMonth = n ? o.getMonth() : 0),
              (t.currentYear = n ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date())
          );
        },
        _determineDate: function (e, i, n) {
          var s =
            null == i || "" === i
              ? n
              : "string" == typeof i
              ? (function (i) {
                  try {
                    return t.datepicker.parseDate(
                      t.datepicker._get(e, "dateFormat"),
                      i,
                      t.datepicker._getFormatConfig(e)
                    );
                  } catch (t) {}
                  for (
                    var n =
                        (i.toLowerCase().match(/^c/)
                          ? t.datepicker._getDate(e)
                          : null) || new Date(),
                      s = n.getFullYear(),
                      o = n.getMonth(),
                      a = n.getDate(),
                      r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      l = r.exec(i);
                    l;

                  ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        a += parseInt(l[1], 10);
                        break;
                      case "w":
                      case "W":
                        a += 7 * parseInt(l[1], 10);
                        break;
                      case "m":
                      case "M":
                        (o += parseInt(l[1], 10)),
                          (a = Math.min(a, t.datepicker._getDaysInMonth(s, o)));
                        break;
                      case "y":
                      case "Y":
                        (s += parseInt(l[1], 10)),
                          (a = Math.min(a, t.datepicker._getDaysInMonth(s, o)));
                    }
                    l = r.exec(i);
                  }
                  return new Date(s, o, a);
                })(i)
              : "number" == typeof i
              ? isNaN(i)
                ? n
                : (function (t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e;
                  })(i)
              : new Date(i.getTime());
          return (
            (s = s && "Invalid Date" === s.toString() ? n : s) &&
              (s.setHours(0),
              s.setMinutes(0),
              s.setSeconds(0),
              s.setMilliseconds(0)),
            this._daylightSavingAdjust(s)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var n = !e,
            s = t.selectedMonth,
            o = t.selectedYear,
            a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = a.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
            (s === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          return !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
        },
        _attachHandlers: function (e) {
          var i = this._get(e, "stepMonths"),
            n = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function () {
            var e = {
              prev: function () {
                t.datepicker._adjustDate(n, -i, "M");
              },
              next: function () {
                t.datepicker._adjustDate(n, +i, "M");
              },
              hide: function () {
                t.datepicker._hideDatepicker();
              },
              today: function () {
                t.datepicker._gotoToday(n);
              },
              selectDay: function () {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return t.datepicker._selectMonthYear(n, this, "M"), !1;
              },
              selectYear: function () {
                return t.datepicker._selectMonthYear(n, this, "Y"), !1;
              },
            };
            t(this).on(
              this.getAttribute("data-event"),
              e[this.getAttribute("data-handler")]
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            n,
            s,
            o,
            a,
            r,
            l,
            c,
            h,
            u,
            d,
            p,
            f,
            m,
            g,
            v,
            b,
            _,
            y,
            w,
            x,
            C,
            k,
            S,
            T,
            I,
            D,
            P,
            M,
            E,
            A,
            N,
            $,
            O,
            z,
            H,
            L,
            W,
            F = new Date(),
            B = this._daylightSavingAdjust(
              new Date(F.getFullYear(), F.getMonth(), F.getDate())
            ),
            R = this._get(t, "isRTL"),
            q = this._get(t, "showButtonPanel"),
            j = this._get(t, "hideIfNoPrevNext"),
            Y = this._get(t, "navigationAsDateFormat"),
            X = this._getNumberOfMonths(t),
            U = this._get(t, "showCurrentAtPos"),
            V = this._get(t, "stepMonths"),
            K = 1 !== X[0] || 1 !== X[1],
            G = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            Q = this._getMinMaxDate(t, "min"),
            Z = this._getMinMaxDate(t, "max"),
            J = t.drawMonth - U,
            tt = t.drawYear;
          if ((J < 0 && ((J += 12), tt--), Z))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  Z.getFullYear(),
                  Z.getMonth() - X[0] * X[1] + 1,
                  Z.getDate()
                )
              ),
                e = Q && e < Q ? Q : e;
              this._daylightSavingAdjust(new Date(tt, J, 1)) > e;

            )
              --J < 0 && ((J = 11), tt--);
          for (
            t.drawMonth = J,
              t.drawYear = tt,
              i = this._get(t, "prevText"),
              i = Y
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, J - V, 1)),
                    this._getFormatConfig(t)
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, J)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>"
                : j
                ? ""
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>",
              s = this._get(t, "nextText"),
              s = Y
                ? this.formatDate(
                    s,
                    this._daylightSavingAdjust(new Date(tt, J + V, 1)),
                    this._getFormatConfig(t)
                  )
                : s,
              o = this._canAdjustMonth(t, 1, tt, J)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>"
                : j
                ? ""
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (R ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>",
              a = this._get(t, "currentText"),
              r = this._get(t, "gotoCurrent") && t.currentDay ? G : B,
              a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
              l = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              c = q
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (R ? l : "") +
                  (this._isInRange(t, r)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      a +
                      "</button>"
                    : "") +
                  (R ? "" : l) +
                  "</div>"
                : "",
              h = parseInt(this._get(t, "firstDay"), 10),
              h = isNaN(h) ? 0 : h,
              u = this._get(t, "showWeek"),
              d = this._get(t, "dayNames"),
              p = this._get(t, "dayNamesMin"),
              f = this._get(t, "monthNames"),
              m = this._get(t, "monthNamesShort"),
              g = this._get(t, "beforeShowDay"),
              v = this._get(t, "showOtherMonths"),
              b = this._get(t, "selectOtherMonths"),
              _ = this._getDefaultDate(t),
              y = "",
              x = 0;
            x < X[0];
            x++
          ) {
            for (C = "", this.maxRows = 4, k = 0; k < X[1]; k++) {
              if (
                ((S = this._daylightSavingAdjust(
                  new Date(tt, J, t.selectedDay)
                )),
                (T = " ui-corner-all"),
                (I = ""),
                K)
              ) {
                if (((I += "<div class='ui-datepicker-group"), X[1] > 1))
                  switch (k) {
                    case 0:
                      (I += " ui-datepicker-group-first"),
                        (T = " ui-corner-" + (R ? "right" : "left"));
                      break;
                    case X[1] - 1:
                      (I += " ui-datepicker-group-last"),
                        (T = " ui-corner-" + (R ? "left" : "right"));
                      break;
                    default:
                      (I += " ui-datepicker-group-middle"), (T = "");
                  }
                I += "'>";
              }
              for (
                I +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  T +
                  "'>" +
                  (/all|left/.test(T) && 0 === x ? (R ? o : n) : "") +
                  (/all|right/.test(T) && 0 === x ? (R ? n : o) : "") +
                  this._generateMonthYearHeader(
                    t,
                    J,
                    tt,
                    Q,
                    Z,
                    x > 0 || k > 0,
                    f,
                    m
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  D = u
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  w = 0;
                w < 7;
                w++
              )
                D +=
                  "<th scope='col'" +
                  ((w + h + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[(P = (w + h) % 7)] +
                  "'>" +
                  p[P] +
                  "</span></th>";
              for (
                I += D + "</tr></thead><tbody>",
                  M = this._getDaysInMonth(tt, J),
                  tt === t.selectedYear &&
                    J === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, M)),
                  E = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7,
                  A = Math.ceil((E + M) / 7),
                  N = K && this.maxRows > A ? this.maxRows : A,
                  this.maxRows = N,
                  $ = this._daylightSavingAdjust(new Date(tt, J, 1 - E)),
                  O = 0;
                O < N;
                O++
              ) {
                for (
                  I += "<tr>",
                    z = u
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")($) +
                        "</td>"
                      : "",
                    w = 0;
                  w < 7;
                  w++
                )
                  (H = g
                    ? g.apply(t.input ? t.input[0] : null, [$])
                    : [!0, ""]),
                    (W =
                      ((L = $.getMonth() !== J) && !b) ||
                      !H[0] ||
                      (Q && $ < Q) ||
                      (Z && $ > Z)),
                    (z +=
                      "<td class='" +
                      ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                      (L ? " ui-datepicker-other-month" : "") +
                      (($.getTime() === S.getTime() &&
                        J === t.selectedMonth &&
                        t._keyEvent) ||
                      (_.getTime() === $.getTime() &&
                        _.getTime() === S.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (W
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (L && !v
                        ? ""
                        : " " +
                          H[1] +
                          ($.getTime() === G.getTime()
                            ? " " + this._currentClass
                            : "") +
                          ($.getTime() === B.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((L && !v) || !H[2]
                        ? ""
                        : " title='" + H[2].replace(/'/g, "&#39;") + "'") +
                      (W
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          $.getMonth() +
                          "' data-year='" +
                          $.getFullYear() +
                          "'") +
                      ">" +
                      (L && !v
                        ? "&#xa0;"
                        : W
                        ? "<span class='ui-state-default'>" +
                          $.getDate() +
                          "</span>"
                        : "<a class='ui-state-default" +
                          ($.getTime() === B.getTime()
                            ? " ui-state-highlight"
                            : "") +
                          ($.getTime() === G.getTime()
                            ? " ui-state-active"
                            : "") +
                          (L ? " ui-priority-secondary" : "") +
                          "' href='#'>" +
                          $.getDate() +
                          "</a>") +
                      "</td>"),
                    $.setDate($.getDate() + 1),
                    ($ = this._daylightSavingAdjust($));
                I += z + "</tr>";
              }
              ++J > 11 && ((J = 0), tt++),
                (C += I +=
                  "</tbody></table>" +
                  (K
                    ? "</div>" +
                      (X[0] > 0 && k === X[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : ""));
            }
            y += C;
          }
          return (y += c), (t._keyEvent = !1), y;
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
          var l,
            c,
            h,
            u,
            d,
            p,
            f,
            m,
            g = this._get(t, "changeMonth"),
            v = this._get(t, "changeYear"),
            b = this._get(t, "showMonthAfterYear"),
            _ = "<div class='ui-datepicker-title'>",
            y = "";
          if (o || !g)
            y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
          else {
            for (
              l = n && n.getFullYear() === i,
                c = s && s.getFullYear() === i,
                y +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                h = 0;
              h < 12;
              h++
            )
              (!l || h >= n.getMonth()) &&
                (!c || h <= s.getMonth()) &&
                (y +=
                  "<option value='" +
                  h +
                  "'" +
                  (h === e ? " selected='selected'" : "") +
                  ">" +
                  r[h] +
                  "</option>");
            y += "</select>";
          }
          if ((b || (_ += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !v))
              _ += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                u = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  f = (p = function (t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? d + parseInt(t, 10)
                      : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                  })(u[0]),
                  m = Math.max(f, p(u[1] || "")),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  m = s ? Math.min(m, s.getFullYear()) : m,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                f <= m;
                f++
              )
                t.yearshtml +=
                  "<option value='" +
                  f +
                  "'" +
                  (f === i ? " selected='selected'" : "") +
                  ">" +
                  f +
                  "</option>";
              (t.yearshtml += "</select>"),
                (_ += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (_ += this._get(t, "yearSuffix")),
            b && (_ += (!o && g && v ? "" : "&#xa0;") + y),
            (_ += "</div>")
          );
        },
        _adjustInstDate: function (t, e, i) {
          var n = t.selectedYear + ("Y" === i ? e : 0),
            s = t.selectedMonth + ("M" === i ? e : 0),
            o =
              Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
              ("D" === i ? e : 0),
            a = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, s, o))
            );
          (t.selectedDay = a.getDate()),
            (t.drawMonth = t.selectedMonth = a.getMonth()),
            (t.drawYear = t.selectedYear = a.getFullYear()),
            ("M" !== i && "Y" !== i) || this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            n = this._getMinMaxDate(t, "max"),
            s = i && e < i ? i : e;
          return n && s > n ? n : s;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, n) {
          var s = this._getNumberOfMonths(t),
            o = this._daylightSavingAdjust(
              new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1)
            );
          return (
            e < 0 &&
              o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
          );
        },
        _isInRange: function (t, e) {
          var i,
            n,
            s = this._getMinMaxDate(t, "min"),
            o = this._getMinMaxDate(t, "max"),
            a = null,
            r = null,
            l = this._get(t, "yearRange");
          return (
            l &&
              ((i = l.split(":")),
              (n = new Date().getFullYear()),
              (a = parseInt(i[0], 10)),
              (r = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (a += n),
              i[1].match(/[+\-].*/) && (r += n)),
            (!s || e.getTime() >= s.getTime()) &&
              (!o || e.getTime() <= o.getTime()) &&
              (!a || e.getFullYear() >= a) &&
              (!r || e.getFullYear() <= r)
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return {
            shortYearCutoff: (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          };
        },
        _formatDate: function (t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          var s = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            s,
            this._getFormatConfig(t)
          );
        },
      }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).on("mousedown", t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new d()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.12.1");
    t.datepicker,
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var g = !1;
    t(document).on("mouseup", function () {
      g = !1;
    });
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent"))
              return (
                t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!g) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            n = 1 === e.which,
            s =
              !("string" != typeof this.options.cancel || !e.target.nodeName) &&
              t(e.target).closest(this.options.cancel).length;
          return (
            !(n && !s && this._mouseCapture(e)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                i.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(e) &&
            this._mouseDelayMet(e) &&
            ((this._mouseStarted = !1 !== this._mouseStart(e)),
            !this._mouseStarted)
              ? (e.preventDefault(), !0)
              : (!0 ===
                  t.data(e.target, this.widgetName + ".preventClickEvent") &&
                  t.removeData(
                    e.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (t) {
                  return i._mouseMove(t);
                }),
                (this._mouseUpDelegate = function (t) {
                  return i._mouseUp(t);
                }),
                this.document
                  .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                (g = !0),
                !0))
          );
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (g = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; s < o.length; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      }),
      (t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
      });
    t.widget("ui.draggable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass("ui-draggable"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "handle" === t &&
            (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        (this.helper || this.element).is(".ui-draggable-dragging")
          ? (this.destroyOnClear = !0)
          : (this._removeHandleClassName(), this._mouseDestroy());
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return (
          !(
            this.helper ||
            i.disabled ||
            t(e.target).closest(".ui-resizable-handle").length > 0
          ) &&
          ((this.handle = this._getHandle(e)),
          !!this.handle &&
            (this._blurActiveElement(e),
            this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
            !0))
        );
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t("<div>")
            .css("position", "absolute")
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]);
        t(e.target).closest(i).length || t.ui.safeBlur(i);
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this._addClass(this.helper, "ui-draggable-dragging"),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return "fixed" === t(this).css("position");
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position = this._generatePosition(
            e,
            !1
          )),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          !1 === this._trigger("start", e)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager &&
                !i.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          });
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var n = this._uiHash();
          if (!1 === this._trigger("drag", e, n))
            return this._mouseUp(new t.Event("mouseup", e)), !1;
          this.position = n.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          n = !1;
        return (
          t.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (n = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((n = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !n) ||
          ("valid" === this.options.revert && n) ||
          !0 === this.options.revert ||
          (t.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, n))
            ? t(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  !1 !== i._trigger("stop", e) && i._clear();
                }
              )
            : !1 !== this._trigger("stop", e) && this._clear(),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.trigger("focus"),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] }))
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return (
          !this.options.handle ||
          !!t(e.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this._addClass(this.handleElement, "ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, "ui-draggable-handle");
      },
      _createHelper: function (e) {
        var i = this.options,
          n = t.isFunction(i.helper),
          s = n
            ? t(i.helper.apply(this.element[0], [e]))
            : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          s.parents("body").length ||
            s.appendTo(
              "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          n && s[0] === this.element[0] && this._setPositionRelative(),
          s[0] === this.element[0] ||
            /(fixed|absolute)/.test(s.css("position")) ||
            s.css("position", "absolute"),
          s
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          n,
          s = this.options,
          o = this.document[0];
        (this.relativeContainer = null),
          s.containment
            ? "window" !== s.containment
              ? "document" !== s.containment
                ? s.containment.constructor !== Array
                  ? ("parent" === s.containment &&
                      (s.containment = this.helper[0].parentNode),
                    (n = (i = t(s.containment))[0]) &&
                      ((e = /(scroll|auto)/.test(i.css("overflow"))),
                      (this.containment = [
                        (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                          (parseInt(i.css("paddingLeft"), 10) || 0),
                        (parseInt(i.css("borderTopWidth"), 10) || 0) +
                          (parseInt(i.css("paddingTop"), 10) || 0),
                        (e
                          ? Math.max(n.scrollWidth, n.offsetWidth)
                          : n.offsetWidth) -
                          (parseInt(i.css("borderRightWidth"), 10) || 0) -
                          (parseInt(i.css("paddingRight"), 10) || 0) -
                          this.helperProportions.width -
                          this.margins.left -
                          this.margins.right,
                        (e
                          ? Math.max(n.scrollHeight, n.offsetHeight)
                          : n.offsetHeight) -
                          (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                          (parseInt(i.css("paddingBottom"), 10) || 0) -
                          this.helperProportions.height -
                          this.margins.top -
                          this.margins.bottom,
                      ]),
                      (this.relativeContainer = i)))
                  : (this.containment = s.containment)
                : (this.containment = [
                    0,
                    0,
                    t(o).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    (t(o).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
              : (this.containment = [
                  t(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  t(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  t(window).scrollLeft() +
                    t(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = null);
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1,
          n = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : n
              ? 0
              : this.offset.scroll.top) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : n
              ? 0
              : this.offset.scroll.left) *
              i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          n,
          s,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          l = t.pageX,
          c = t.pageY;
        return (
          (r && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft(),
            }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((n = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + n.left,
                    this.containment[1] + n.top,
                    this.containment[2] + n.left,
                    this.containment[3] + n.top,
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] &&
                (l = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] &&
                (c = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] &&
                (l = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] &&
                (c = i[3] + this.offset.click.top)),
            a.grid &&
              ((s = a.grid[1]
                ? this.originalPageY +
                  Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (c = i
                ? s - this.offset.click.top >= i[1] ||
                  s - this.offset.click.top > i[3]
                  ? s
                  : s - this.offset.click.top >= i[1]
                  ? s - a.grid[1]
                  : s + a.grid[1]
                : s),
              (o = a.grid[0]
                ? this.originalPageX +
                  Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (l = i
                ? o - this.offset.click.left >= i[0] ||
                  o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o)),
            "y" === a.axis && (l = this.originalPageX),
            "x" === a.axis && (c = this.originalPageY)),
          {
            top:
              c -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : r
                ? 0
                : this.offset.scroll.top),
            left:
              l -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : r
                ? 0
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this._removeClass(this.helper, "ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _trigger: function (e, i, n) {
        return (
          (n = n || this._uiHash()),
          t.ui.plugin.call(this, e, [i, n, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo("absolute")),
            (n.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, n)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.sortables = []),
            t(n.options.connectToSortable).each(function () {
              var i = t(this).sortable("instance");
              i &&
                !i.options.disabled &&
                (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, s));
            });
        },
        stop: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.cancelHelperRemoval = !1),
            t.each(n.sortables, function () {
              this.isOver
                ? ((this.isOver = 0),
                  (n.cancelHelperRemoval = !0),
                  (this.cancelHelperRemoval = !1),
                  (this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left"),
                  }),
                  this._mouseStop(e),
                  (this.options.helper = this.options._helper))
                : ((this.cancelHelperRemoval = !0),
                  this._trigger("deactivate", e, s));
            });
        },
        drag: function (e, i, n) {
          t.each(n.sortables, function () {
            var s = !1,
              o = this;
            (o.positionAbs = n.positionAbs),
              (o.helperProportions = n.helperProportions),
              (o.offset.click = n.offset.click),
              o._intersectsWith(o.containerCache) &&
                ((s = !0),
                t.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== o &&
                      this._intersectsWith(this.containerCache) &&
                      t.contains(o.element[0], this.element[0]) &&
                      (s = !1),
                    s
                  );
                })),
              s
                ? (o.isOver ||
                    ((o.isOver = 1),
                    (n._parent = i.helper.parent()),
                    (o.currentItem = i.helper
                      .appendTo(o.element)
                      .data("ui-sortable-item", !0)),
                    (o.options._helper = o.options.helper),
                    (o.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = o.currentItem[0]),
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    (o.offset.click.top = n.offset.click.top),
                    (o.offset.click.left = n.offset.click.left),
                    (o.offset.parent.left -=
                      n.offset.parent.left - o.offset.parent.left),
                    (o.offset.parent.top -=
                      n.offset.parent.top - o.offset.parent.top),
                    n._trigger("toSortable", e),
                    (n.dropped = o.element),
                    t.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (o.fromOutside = n)),
                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                : o.isOver &&
                  ((o.isOver = 0),
                  (o.cancelHelperRemoval = !0),
                  (o.options._revert = o.options.revert),
                  (o.options.revert = !1),
                  o._trigger("out", e, o._uiHash(o)),
                  o._mouseStop(e, !0),
                  (o.options.revert = o.options._revert),
                  (o.options.helper = o.options._helper),
                  o.placeholder && o.placeholder.remove(),
                  i.helper.appendTo(n._parent),
                  n._refreshOffsets(e),
                  (i.position = n._generatePosition(e, !0)),
                  n._trigger("fromSortable", e),
                  (n.dropped = !1),
                  t.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
          var s = t("body"),
            o = n.options;
          s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._cursor && t("body").css("cursor", s._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (e, i, n) {
          var s = n.options,
            o = !1,
            a = n.scrollParentNotHidden[0],
            r = n.document[0];
          a !== r && "HTML" !== a.tagName
            ? ((s.axis && "x" === s.axis) ||
                (n.overflowOffset.top + a.offsetHeight - e.pageY <
                s.scrollSensitivity
                  ? (a.scrollTop = o = a.scrollTop + s.scrollSpeed)
                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                    (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (n.overflowOffset.left + a.offsetWidth - e.pageX <
                s.scrollSensitivity
                  ? (a.scrollLeft = o = a.scrollLeft + s.scrollSpeed)
                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                    (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(r).scrollTop() < s.scrollSensitivity
                  ? (o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed))
                  : t(window).height() - (e.pageY - t(r).scrollTop()) <
                      s.scrollSensitivity &&
                    (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(r).scrollLeft() < s.scrollSensitivity
                  ? (o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed))
                  : t(window).width() - (e.pageX - t(r).scrollLeft()) <
                      s.scrollSensitivity &&
                    (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))),
            !1 !== o &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(n, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
          var s = n.options;
          (n.snapElements = []),
            t(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap
            ).each(function () {
              var e = t(this),
                i = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: i.top,
                  left: i.left,
                });
            });
        },
        drag: function (e, i, n) {
          var s,
            o,
            a,
            r,
            l,
            c,
            h,
            u,
            d,
            p,
            f = n.options,
            m = f.snapTolerance,
            g = i.offset.left,
            v = g + n.helperProportions.width,
            b = i.offset.top,
            _ = b + n.helperProportions.height;
          for (d = n.snapElements.length - 1; d >= 0; d--)
            (c =
              (l = n.snapElements[d].left - n.margins.left) +
              n.snapElements[d].width),
              (u =
                (h = n.snapElements[d].top - n.margins.top) +
                n.snapElements[d].height),
              v < l - m ||
              g > c + m ||
              _ < h - m ||
              b > u + m ||
              !t.contains(
                n.snapElements[d].item.ownerDocument,
                n.snapElements[d].item
              )
                ? (n.snapElements[d].snapping &&
                    n.options.snap.release &&
                    n.options.snap.release.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = Math.abs(h - _) <= m),
                    (o = Math.abs(u - b) <= m),
                    (a = Math.abs(l - v) <= m),
                    (r = Math.abs(c - g) <= m),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h - n.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0,
                      }).top),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width,
                      }).left),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c,
                      }).left)),
                  (p = s || o || a || r),
                  "outer" !== f.snapMode &&
                    ((s = Math.abs(h - b) <= m),
                    (o = Math.abs(u - _) <= m),
                    (a = Math.abs(l - g) <= m),
                    (r = Math.abs(c - v) <= m),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0,
                      }).top),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l,
                      }).left),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c - n.helperProportions.width,
                      }).left)),
                  !n.snapElements[d].snapping &&
                    (s || o || a || r || p) &&
                    n.options.snap.snap &&
                    n.options.snap.snap.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = s || o || a || r || p));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
          var s,
            o = n.options,
            a = t.makeArray(t(o.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          a.length &&
            ((s = parseInt(t(a[0]).css("zIndex"), 10) || 0),
            t(a).each(function (e) {
              t(this).css("zIndex", s + e);
            }),
            this.css("zIndex", s + a.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      });
    t.ui.draggable;
    t.widget("ui.resizable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _num: function (t) {
        return parseFloat(t) || 0;
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t));
      },
      _hasScroll: function (e, i) {
        if ("hidden" === t(e).css("overflow")) return !1;
        var n,
          s = i && "left" === i ? "scrollLeft" : "scrollTop";
        return e[s] > 0 || ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
      },
      _create: function () {
        var e,
          i = this.options,
          n = this;
        this._addClass("ui-resizable"),
          t.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              i.helper || i.ghost || i.animate
                ? i.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /^(canvas|textarea|input|select|button|img)$/i
          ) &&
            (this.element.wrap(
              t(
                "<div class='ui-wrapper' style='overflow: hidden;'></div>"
              ).css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left"),
              })
            ),
            (this.element = this.element
              .parent()
              .data("ui-resizable", this.element.resizable("instance"))),
            (this.elementIsWrapper = !0),
            (e = {
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
              marginLeft: this.originalElement.css("marginLeft"),
            }),
            this.element.css(e),
            this.originalElement.css("margin", 0),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              })
            ),
            this.originalElement.css(e),
            this._proportionallyResize()),
          this._setupHandles(),
          i.autoHide &&
            t(this.element)
              .on("mouseenter", function () {
                i.disabled ||
                  (n._removeClass("ui-resizable-autohide"), n._handles.show());
              })
              .on("mouseleave", function () {
                i.disabled ||
                  n.resizing ||
                  (n._addClass("ui-resizable-autohide"), n._handles.hide());
              }),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        var e,
          i = function (e) {
            t(e)
              .removeData("resizable")
              .removeData("ui-resizable")
              .off(".resizable")
              .find(".ui-resizable-handle")
              .remove();
          };
        return (
          this.elementIsWrapper &&
            (i(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left"),
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css("resize", this.originalResizeStyle),
          i(this.originalElement),
          this
        );
      },
      _setOption: function (t, e) {
        switch ((this._super(t, e), t)) {
          case "handles":
            this._removeHandles(), this._setupHandles();
        }
      },
      _setupHandles: function () {
        var e,
          i,
          n,
          s,
          o,
          a = this.options,
          r = this;
        if (
          ((this.handles =
            a.handles ||
            (t(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          (this._handles = t()),
          this.handles.constructor === String)
        )
          for (
            "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
              n = this.handles.split(","),
              this.handles = {},
              i = 0;
            i < n.length;
            i++
          )
            (s = "ui-resizable-" + (e = t.trim(n[i]))),
              (o = t("<div>")),
              this._addClass(o, "ui-resizable-handle " + s),
              o.css({ zIndex: a.zIndex }),
              (this.handles[e] = ".ui-resizable-" + e),
              this.element.append(o);
        (this._renderAxis = function (e) {
          var i, n, s, o;
          for (i in ((e = e || this.element), this.handles))
            this.handles[i].constructor === String
              ? (this.handles[i] = this.element
                  .children(this.handles[i])
                  .first()
                  .show())
              : (this.handles[i].jquery || this.handles[i].nodeType) &&
                ((this.handles[i] = t(this.handles[i])),
                this._on(this.handles[i], { mousedown: r._mouseDown })),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /^(textarea|input|select|button)$/i
                ) &&
                ((n = t(this.handles[i], this.element)),
                (o = /sw|ne|nw|se|n|s/.test(i)
                  ? n.outerHeight()
                  : n.outerWidth()),
                (s = [
                  "padding",
                  /ne|nw|n/.test(i)
                    ? "Top"
                    : /se|sw|s/.test(i)
                    ? "Bottom"
                    : /^e$/.test(i)
                    ? "Right"
                    : "Left",
                ].join("")),
                e.css(s, o),
                this._proportionallyResize()),
              (this._handles = this._handles.add(this.handles[i]));
        }),
          this._renderAxis(this.element),
          (this._handles = this._handles.add(
            this.element.find(".ui-resizable-handle")
          )),
          this._handles.disableSelection(),
          this._handles.on("mouseover", function () {
            r.resizing ||
              (this.className &&
                (o = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (r.axis = o && o[1] ? o[1] : "se"));
          }),
          a.autoHide &&
            (this._handles.hide(), this._addClass("ui-resizable-autohide"));
      },
      _removeHandles: function () {
        this._handles.remove();
      },
      _mouseCapture: function (e) {
        var i,
          n,
          s = !1;
        for (i in this.handles)
          ((n = t(this.handles[i])[0]) === e.target ||
            t.contains(n, e.target)) &&
            (s = !0);
        return !this.options.disabled && s;
      },
      _mouseStart: function (e) {
        var i,
          n,
          s,
          o = this.options,
          a = this.element;
        return (
          (this.resizing = !0),
          this._renderProxy(),
          (i = this._num(this.helper.css("left"))),
          (n = this._num(this.helper.css("top"))),
          o.containment &&
            ((i += t(o.containment).scrollLeft() || 0),
            (n += t(o.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: i, top: n }),
          (this.size = this._helper
            ? { width: this.helper.width(), height: this.helper.height() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.sizeDiff = {
            width: a.outerWidth() - a.width(),
            height: a.outerHeight() - a.height(),
          }),
          (this.originalPosition = { left: i, top: n }),
          (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
          (this.aspectRatio =
            "number" == typeof o.aspectRatio
              ? o.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (s = t(".ui-resizable-" + this.axis).css("cursor")),
          t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
          this._addClass("ui-resizable-resizing"),
          this._propagate("start", e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          n,
          s = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - s.left || 0,
          r = e.pageY - s.top || 0,
          l = this._change[o];
        return (
          this._updatePrevProperties(),
          !!l &&
            ((i = l.apply(this, [e, a, r])),
            this._updateVirtualBoundaries(e.shiftKey),
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
            (i = this._respectSize(i, e)),
            this._updateCache(i),
            this._propagate("resize", e),
            (n = this._applyChanges()),
            !this._helper &&
              this._proportionallyResizeElements.length &&
              this._proportionallyResize(),
            t.isEmptyObject(n) ||
              (this._updatePrevProperties(),
              this._trigger("resize", e, this.ui()),
              this._applyChanges()),
            !1)
        );
      },
      _mouseStop: function (e) {
        this.resizing = !1;
        var i,
          n,
          s,
          o,
          a,
          r,
          l,
          c = this.options;
        return (
          this._helper &&
            ((s =
              (n =
                (i = this._proportionallyResizeElements).length &&
                /textarea/i.test(i[0].nodeName)) &&
              this._hasScroll(i[0], "left")
                ? 0
                : this.sizeDiff.height),
            (o = n ? 0 : this.sizeDiff.width),
            (a = {
              width: this.helper.width() - o,
              height: this.helper.height() - s,
            }),
            (r =
              parseFloat(this.element.css("left")) +
                (this.position.left - this.originalPosition.left) || null),
            (l =
              parseFloat(this.element.css("top")) +
                (this.position.top - this.originalPosition.top) || null),
            c.animate || this.element.css(t.extend(a, { top: l, left: r })),
            this.helper.height(this.size.height),
            this.helper.width(this.size.width),
            this._helper && !c.animate && this._proportionallyResize()),
          t("body").css("cursor", "auto"),
          this._removeClass("ui-resizable-resizing"),
          this._propagate("stop", e),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updatePrevProperties: function () {
        (this.prevPosition = {
          top: this.position.top,
          left: this.position.left,
        }),
          (this.prevSize = {
            width: this.size.width,
            height: this.size.height,
          });
      },
      _applyChanges: function () {
        var t = {};
        return (
          this.position.top !== this.prevPosition.top &&
            (t.top = this.position.top + "px"),
          this.position.left !== this.prevPosition.left &&
            (t.left = this.position.left + "px"),
          this.size.width !== this.prevSize.width &&
            (t.width = this.size.width + "px"),
          this.size.height !== this.prevSize.height &&
            (t.height = this.size.height + "px"),
          this.helper.css(t),
          t
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          n,
          s,
          o,
          a = this.options;
        (o = {
          minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
          maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
          maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
        }),
          (this._aspectRatio || t) &&
            ((e = o.minHeight * this.aspectRatio),
            (n = o.minWidth / this.aspectRatio),
            (i = o.maxHeight * this.aspectRatio),
            (s = o.maxWidth / this.aspectRatio),
            e > o.minWidth && (o.minWidth = e),
            n > o.minHeight && (o.minHeight = n),
            i < o.maxWidth && (o.maxWidth = i),
            s < o.maxHeight && (o.maxHeight = s)),
          (this._vBoundaries = o);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          this._isNumber(t.left) && (this.position.left = t.left),
          this._isNumber(t.top) && (this.position.top = t.top),
          this._isNumber(t.height) && (this.size.height = t.height),
          this._isNumber(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          n = this.axis;
        return (
          this._isNumber(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : this._isNumber(t.width) &&
              (t.height = t.width / this.aspectRatio),
          "sw" === n &&
            ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          "nw" === n &&
            ((t.top = e.top + (i.height - t.height)),
            (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          l = this.originalPosition.top + this.originalSize.height,
          c = /sw|nw|w/.test(i),
          h = /nw|ne|n/.test(i);
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          n && (t.width = e.maxWidth),
          s && (t.height = e.maxHeight),
          o && c && (t.left = r - e.minWidth),
          n && c && (t.left = r - e.maxWidth),
          a && h && (t.top = l - e.minHeight),
          s && h && (t.top = l - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (
          var e = 0,
            i = [],
            n = [
              t.css("borderTopWidth"),
              t.css("borderRightWidth"),
              t.css("borderBottomWidth"),
              t.css("borderLeftWidth"),
            ],
            s = [
              t.css("paddingTop"),
              t.css("paddingRight"),
              t.css("paddingBottom"),
              t.css("paddingLeft"),
            ];
          e < 4;
          e++
        )
          (i[e] = parseFloat(n[e]) || 0), (i[e] += parseFloat(s[e]) || 0);
        return { height: i[0] + i[2], width: i[1] + i[3] };
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (
            var t, e = 0, i = this.helper || this.element;
            e < this._proportionallyResizeElements.length;
            e++
          )
            (t = this._proportionallyResizeElements[e]),
              this.outerDimensions ||
                (this.outerDimensions = this._getPaddingPlusBorderDimensions(
                  t
                )),
              t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0,
              });
      },
      _renderProxy: function () {
        var e = this.element,
          i = this.options;
        (this.elementOffset = e.offset()),
          this._helper
            ? ((this.helper =
                this.helper || t("<div style='overflow:hidden;'></div>")),
              this._addClass(this.helper, this._helper),
              this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex,
              }),
              this.helper.appendTo("body").disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize;
          return { left: this.originalPosition.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var n = this.originalSize;
          return { top: this.originalPosition.top + i, height: n.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (e, i, n) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [e, i, n])
          );
        },
        sw: function (e, i, n) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [e, i, n])
          );
        },
        ne: function (e, i, n) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [e, i, n])
          );
        },
        nw: function (e, i, n) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [e, i, n])
          );
        },
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]),
          "resize" !== e && this._trigger(e, i, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).resizable("instance"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            r = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - r, height: i.size.height - a },
            c =
              parseFloat(i.element.css("left")) +
                (i.position.left - i.originalPosition.left) || null,
            h =
              parseFloat(i.element.css("top")) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(l, h && c ? { top: h, left: c } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseFloat(i.element.css("width")),
                height: parseFloat(i.element.css("height")),
                top: parseFloat(i.element.css("top")),
                left: parseFloat(i.element.css("left")),
              };
              s &&
                s.length &&
                t(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            i,
            n,
            s,
            o,
            a,
            r,
            l = t(this).resizable("instance"),
            c = l.options,
            h = l.element,
            u = c.containment,
            d =
              u instanceof t
                ? u.get(0)
                : /parent/.test(u)
                ? h.parent().get(0)
                : u;
          d &&
            ((l.containerElement = t(d)),
            /document/.test(u) || u === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(d)),
                (i = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  i[t] = l._num(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - i[3],
                  width: e.innerWidth() - i[1],
                }),
                (n = l.containerOffset),
                (s = l.containerSize.height),
                (o = l.containerSize.width),
                (a = l._hasScroll(d, "left") ? d.scrollWidth : o),
                (r = l._hasScroll(d) ? d.scrollHeight : s),
                (l.parentData = {
                  element: d,
                  left: n.left,
                  top: n.top,
                  width: a,
                  height: r,
                })));
        },
        resize: function (e) {
          var i,
            n,
            s,
            o,
            a = t(this).resizable("instance"),
            r = a.options,
            l = a.containerOffset,
            c = a.position,
            h = a._aspectRatio || e.shiftKey,
            u = { top: 0, left: 0 },
            d = a.containerElement,
            p = !0;
          d[0] !== document && /static/.test(d.css("position")) && (u = l),
            c.left < (a._helper ? l.left : 0) &&
              ((a.size.width =
                a.size.width +
                (a._helper
                  ? a.position.left - l.left
                  : a.position.left - u.left)),
              h && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
              (a.position.left = r.helper ? l.left : 0)),
            c.top < (a._helper ? l.top : 0) &&
              ((a.size.height =
                a.size.height +
                (a._helper ? a.position.top - l.top : a.position.top)),
              h && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
              (a.position.top = a._helper ? l.top : 0)),
            (s = a.containerElement.get(0) === a.element.parent().get(0)),
            (o = /relative|absolute/.test(a.containerElement.css("position"))),
            s && o
              ? ((a.offset.left = a.parentData.left + a.position.left),
                (a.offset.top = a.parentData.top + a.position.top))
              : ((a.offset.left = a.element.offset().left),
                (a.offset.top = a.element.offset().top)),
            (i = Math.abs(
              a.sizeDiff.width +
                (a._helper ? a.offset.left - u.left : a.offset.left - l.left)
            )),
            (n = Math.abs(
              a.sizeDiff.height +
                (a._helper ? a.offset.top - u.top : a.offset.top - l.top)
            )),
            i + a.size.width >= a.parentData.width &&
              ((a.size.width = a.parentData.width - i),
              h && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
            n + a.size.height >= a.parentData.height &&
              ((a.size.height = a.parentData.height - n),
              h && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
            p ||
              ((a.position.left = a.prevPosition.left),
              (a.position.top = a.prevPosition.top),
              (a.size.width = a.prevSize.width),
              (a.size.height = a.prevSize.height));
        },
        stop: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            a = t(e.helper),
            r = a.offset(),
            l = a.outerWidth() - e.sizeDiff.width,
            c = a.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: r.left - s.left - n.left,
              width: l,
              height: c,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).resizable("instance").options;
          t(e.alsoResize).each(function () {
            var e = t(this);
            e.data("ui-resizable-alsoresize", {
              width: parseFloat(e.width()),
              height: parseFloat(e.height()),
              left: parseFloat(e.css("left")),
              top: parseFloat(e.css("top")),
            });
          });
        },
        resize: function (e, i) {
          var n = t(this).resizable("instance"),
            s = n.options,
            o = n.originalSize,
            a = n.originalPosition,
            r = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - a.top || 0,
              left: n.position.left - a.left || 0,
            };
          t(s.alsoResize).each(function () {
            var e = t(this),
              n = t(this).data("ui-resizable-alsoresize"),
              s = {},
              o = e.parents(i.originalElement[0]).length
                ? ["width", "height"]
                : ["width", "height", "top", "left"];
            t.each(o, function (t, e) {
              var i = (n[e] || 0) + (r[e] || 0);
              i && i >= 0 && (s[e] = i || null);
            }),
              e.css(s);
          });
        },
        stop: function () {
          t(this).removeData("ui-resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost.css({
              opacity: 0.25,
              display: "block",
              position: "relative",
              height: i.height,
              width: i.width,
              margin: 0,
              left: 0,
              top: 0,
            }),
            e._addClass(e.ghost, "ui-resizable-ghost"),
            !1 !== t.uiBackCompat &&
              "string" == typeof e.options.ghost &&
              e.ghost.addClass(this.options.ghost),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).resizable("instance");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).resizable("instance");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e,
            i = t(this).resizable("instance"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            a = i.originalPosition,
            r = i.axis,
            l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
            c = l[0] || 1,
            h = l[1] || 1,
            u = Math.round((s.width - o.width) / c) * c,
            d = Math.round((s.height - o.height) / h) * h,
            p = o.width + u,
            f = o.height + d,
            m = n.maxWidth && n.maxWidth < p,
            g = n.maxHeight && n.maxHeight < f,
            v = n.minWidth && n.minWidth > p,
            b = n.minHeight && n.minHeight > f;
          (n.grid = l),
            v && (p += c),
            b && (f += h),
            m && (p -= c),
            g && (f -= h),
            /^(se|s|e)$/.test(r)
              ? ((i.size.width = p), (i.size.height = f))
              : /^(ne)$/.test(r)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.top = a.top - d))
              : /^(sw)$/.test(r)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.left = a.left - u))
              : ((f - h <= 0 || p - c <= 0) &&
                  (e = i._getPaddingPlusBorderDimensions(this)),
                f - h > 0
                  ? ((i.size.height = f), (i.position.top = a.top - d))
                  : ((f = h - e.height),
                    (i.size.height = f),
                    (i.position.top = a.top + o.height - f)),
                p - c > 0
                  ? ((i.size.width = p), (i.position.left = a.left - u))
                  : ((p = c - e.width),
                    (i.size.width = p),
                    (i.position.left = a.left + o.width - p)));
        },
      });
    t.ui.resizable;
    t.widget("ui.dialog", {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        classes: {
          "ui-dialog": "ui-corner-all",
          "ui-dialog-titlebar": "ui-corner-all",
        },
        closeOnEscape: !0,
        closeText: "Close",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function (e) {
            var i = t(this).css(e).offset().top;
            i < 0 && t(this).css("top", e.top - i);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      resizableRelatedOptions: {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
      },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr("title")),
          null == this.options.title &&
            null != this.originalTitle &&
            (this.options.title = this.originalTitle),
          this.options.disabled && (this.options.disabled = !1),
          this._createWrapper(),
          this.element.show().removeAttr("title").appendTo(this.uiDialog),
          this._addClass("ui-dialog-content", "ui-widget-content"),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType)
          ? t(e)
          : this.document.find(e || "body").eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element.removeUniqueId().css(this.originalCss).detach(),
          this.uiDialog.remove(),
          this.originalTitle && this.element.attr("title", this.originalTitle),
          (t = e.parent.children().eq(e.index)).length &&
          t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this;
        this._isOpen &&
          !1 !== this._trigger("beforeClose", e) &&
          ((this._isOpen = !1),
          (this._focusedElement = null),
          this._destroyOverlay(),
          this._untrackInstance(),
          this.opener.filter(":focusable").trigger("focus").length ||
            t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
          this._hide(this.uiDialog, this.options.hide, function () {
            i._trigger("close", e);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (e, i) {
        var n = !1,
          s = this.uiDialog
            .siblings(".ui-front:visible")
            .map(function () {
              return +t(this).css("z-index");
            })
            .get(),
          o = Math.max.apply(null, s);
        return (
          o >= +this.uiDialog.css("z-index") &&
            (this.uiDialog.css("z-index", o + 1), (n = !0)),
          n && !i && this._trigger("focus", e),
          n
        );
      },
      open: function () {
        var e = this;
        this._isOpen
          ? this._moveToTop() && this._focusTabbable()
          : ((this._isOpen = !0),
            (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay &&
              this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger("focus");
            }),
            this._makeFocusTarget(),
            this._trigger("open"));
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        t || (t = this.element.find("[autofocus]")),
          t.length || (t = this.element.find(":tabbable")),
          t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
          t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
          t.length || (t = this.uiDialog),
          t.eq(0).trigger("focus");
      },
      _keepFocus: function (e) {
        function i() {
          var e = t.ui.safeActiveElement(this.document[0]);
          this.uiDialog[0] === e ||
            t.contains(this.uiDialog[0], e) ||
            this._focusTabbable();
        }
        e.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function () {
        (this.uiDialog = t("<div>")
          .hide()
          .attr({ tabIndex: -1, role: "dialog" })
          .appendTo(this._appendTo())),
          this._addClass(
            this.uiDialog,
            "ui-dialog",
            "ui-widget ui-widget-content ui-front"
          ),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), void this.close(e);
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                var i = this.uiDialog.find(":tabbable"),
                  n = i.filter(":first"),
                  s = i.filter(":last");
                (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                e.shiftKey
                  ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (this._delay(function () {
                      s.trigger("focus");
                    }),
                    e.preventDefault())
                  : (this._delay(function () {
                      n.trigger("focus");
                    }),
                    e.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find("[aria-describedby]").length ||
            this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id"),
            });
      },
      _createTitlebar: function () {
        var e;
        (this.uiDialogTitlebar = t("<div>")),
          this._addClass(
            this.uiDialogTitlebar,
            "ui-dialog-titlebar",
            "ui-widget-header ui-helper-clearfix"
          ),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest(".ui-dialog-titlebar-close") ||
                this.uiDialog.trigger("focus");
            },
          }),
          (this.uiDialogTitlebarClose = t("<button type='button'></button>")
            .button({
              label: t("<a>").text(this.options.closeText).html(),
              icon: "ui-icon-closethick",
              showLabel: !1,
            })
            .appendTo(this.uiDialogTitlebar)),
          this._addClass(
            this.uiDialogTitlebarClose,
            "ui-dialog-titlebar-close"
          ),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
          this._addClass(e, "ui-dialog-title"),
          this._title(e),
          this.uiDialogTitlebar.prependTo(this.uiDialog),
          this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html("&#160;");
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = t("<div>")),
          this._addClass(
            this.uiDialogButtonPane,
            "ui-dialog-buttonpane",
            "ui-widget-content ui-helper-clearfix"
          ),
          (this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
          this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
          this._createButtons();
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons;
        this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
            : (t.each(i, function (i, n) {
                var s, o;
                (n = t.isFunction(n) ? { click: n, text: i } : n),
                  (n = t.extend({ type: "button" }, n)),
                  (s = n.click),
                  (o = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text,
                  }),
                  delete n.click,
                  delete n.icon,
                  delete n.iconPosition,
                  delete n.showLabel,
                  delete n.icons,
                  "boolean" == typeof n.text && delete n.text,
                  t("<button></button>", n)
                    .button(o)
                    .appendTo(e.uiButtonSet)
                    .on("click", function () {
                      s.apply(e.element[0], arguments);
                    });
              }),
              this._addClass(this.uiDialog, "ui-dialog-buttons"),
              this.uiDialogButtonPane.appendTo(this.uiDialog));
      },
      _makeDraggable: function () {
        var e = this,
          i = this.options;
        function n(t) {
          return { position: t.position, offset: t.offset };
        }
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (i, s) {
            e._addClass(t(this), "ui-dialog-dragging"),
              e._blockFrames(),
              e._trigger("dragStart", i, n(s));
          },
          drag: function (t, i) {
            e._trigger("drag", t, n(i));
          },
          stop: function (s, o) {
            var a = o.offset.left - e.document.scrollLeft(),
              r = o.offset.top - e.document.scrollTop();
            (i.position = {
              my: "left top",
              at:
                "left" +
                (a >= 0 ? "+" : "") +
                a +
                " top" +
                (r >= 0 ? "+" : "") +
                r,
              of: e.window,
            }),
              e._removeClass(t(this), "ui-dialog-dragging"),
              e._unblockFrames(),
              e._trigger("dragStop", s, n(o));
          },
        });
      },
      _makeResizable: function () {
        var e = this,
          i = this.options,
          n = i.resizable,
          s = this.uiDialog.css("position"),
          o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
        function a(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: i.maxWidth,
            maxHeight: i.maxHeight,
            minWidth: i.minWidth,
            minHeight: this._minHeight(),
            handles: o,
            start: function (i, n) {
              e._addClass(t(this), "ui-dialog-resizing"),
                e._blockFrames(),
                e._trigger("resizeStart", i, a(n));
            },
            resize: function (t, i) {
              e._trigger("resize", t, a(i));
            },
            stop: function (n, s) {
              var o = e.uiDialog.offset(),
                r = o.left - e.document.scrollLeft(),
                l = o.top - e.document.scrollTop();
              (i.height = e.uiDialog.height()),
                (i.width = e.uiDialog.width()),
                (i.position = {
                  my: "left top",
                  at:
                    "left" +
                    (r >= 0 ? "+" : "") +
                    r +
                    " top" +
                    (l >= 0 ? "+" : "") +
                    l,
                  of: e.window,
                }),
                e._removeClass(t(this), "ui-dialog-resizing"),
                e._unblockFrames(),
                e._trigger("resizeStop", n, a(s));
            },
          })
          .css("position", s);
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), (this._focusedElement = t(e.target));
          },
        });
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(),
          i = t.inArray(this, e);
        -1 !== i && e.splice(i, 1);
      },
      _trackingInstances: function () {
        var t = this.document.data("ui-dialog-instances");
        return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide();
      },
      _setOptions: function (e) {
        var i = this,
          n = !1,
          s = {};
        t.each(e, function (t, e) {
          i._setOption(t, e),
            t in i.sizeRelatedOptions && (n = !0),
            t in i.resizableRelatedOptions && (s[t] = e);
        }),
          n && (this._size(), this._position()),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", s);
      },
      _setOption: function (e, i) {
        var n,
          s,
          o = this.uiDialog;
        "disabled" !== e &&
          (this._super(e, i),
          "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
          "buttons" === e && this._createButtons(),
          "closeText" === e &&
            this.uiDialogTitlebarClose.button({
              label: t("<a>")
                .text("" + this.options.closeText)
                .html(),
            }),
          "draggable" === e &&
            ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"),
            !n && i && this._makeDraggable()),
          "position" === e && this._position(),
          "resizable" === e &&
            ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"),
            s && "string" == typeof i && o.resizable("option", "handles", i),
            s || !1 === i || this._makeResizable()),
          "title" === e &&
            this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
      },
      _size: function () {
        var t,
          e,
          i,
          n = this.options;
        this.element
          .show()
          .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
          n.minWidth > n.width && (n.width = n.minWidth),
          (t = this.uiDialog
            .css({ height: "auto", width: n.width })
            .outerHeight()),
          (e = Math.max(0, n.minHeight - t)),
          (i =
            "number" == typeof n.maxHeight
              ? Math.max(0, n.maxHeight - t)
              : "none"),
          "auto" === n.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
            : this.element.height(Math.max(0, n.height - t)),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var e = t(this);
          return t("<div>")
            .css({
              position: "absolute",
              width: e.outerWidth(),
              height: e.outerHeight(),
            })
            .appendTo(e.parent())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (e) {
        return (
          !!t(e.target).closest(".ui-dialog").length ||
          !!t(e.target).closest(".ui-datepicker").length
        );
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0;
          this._delay(function () {
            e = !1;
          }),
            this.document.data("ui-dialog-overlays") ||
              this._on(this.document, {
                focusin: function (t) {
                  e ||
                    this._allowInteraction(t) ||
                    (t.preventDefault(),
                    this._trackingInstances()[0]._focusTabbable());
                },
              }),
            (this.overlay = t("<div>").appendTo(this._appendTo())),
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
            this._on(this.overlay, { mousedown: "_keepFocus" }),
            this.document.data(
              "ui-dialog-overlays",
              (this.document.data("ui-dialog-overlays") || 0) + 1
            );
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data("ui-dialog-overlays") - 1;
          t
            ? this.document.data("ui-dialog-overlays", t)
            : (this._off(this.document, "focusin"),
              this.document.removeData("ui-dialog-overlays")),
            this.overlay.remove(),
            (this.overlay = null);
        }
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.dialog", t.ui.dialog, {
          options: { dialogClass: "" },
          _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
          },
          _setOption: function (t, e) {
            "dialogClass" === t &&
              this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
              this._superApply(arguments);
          },
        });
    t.ui.dialog;
    t.widget("ui.droppable", {
      version: "1.12.1",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        addClasses: !0,
        greedy: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var e,
          i = this.options,
          n = i.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(n)
            ? n
            : function (t) {
                return t.is(n);
              }),
          (this.proportions = function () {
            if (!arguments.length)
              return (
                e ||
                (e = {
                  width: this.element[0].offsetWidth,
                  height: this.element[0].offsetHeight,
                })
              );
            e = arguments[0];
          }),
          this._addToManager(i.scope),
          i.addClasses && this._addClass("ui-droppable");
      },
      _addToManager: function (e) {
        (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
          t.ui.ddmanager.droppables[e].push(this);
      },
      _splice: function (t) {
        for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(e);
      },
      _setOption: function (e, i) {
        if ("accept" === e)
          this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              };
        else if ("scope" === e) {
          var n = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(n), this._addToManager(i);
        }
        this._super(e, i);
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this._removeActiveClass(),
          i && this._trigger("deactivate", e, this.ui(i));
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
      },
      _drop: function (e, i) {
        var n = i || t.ui.ddmanager.current,
          s = !1;
        return (
          !(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
          (this.element
            .find(":data(ui-droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var i = t(this).droppable("instance");
              if (
                i.options.greedy &&
                !i.options.disabled &&
                i.options.scope === n.options.scope &&
                i.accept.call(i.element[0], n.currentItem || n.element) &&
                v(
                  n,
                  t.extend(i, { offset: i.element.offset() }),
                  i.options.tolerance,
                  e
                )
              )
                return (s = !0), !1;
            }),
          !s &&
            !!this.accept.call(this.element[0], n.currentItem || n.element) &&
            (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", e, this.ui(n)),
            this.element))
        );
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs,
        };
      },
      _addHoverClass: function () {
        this._addClass("ui-droppable-hover");
      },
      _removeHoverClass: function () {
        this._removeClass("ui-droppable-hover");
      },
      _addActiveClass: function () {
        this._addClass("ui-droppable-active");
      },
      _removeActiveClass: function () {
        this._removeClass("ui-droppable-active");
      },
    });
    var v = (t.ui.intersect = (function () {
      function t(t, e, i) {
        return t >= e && t < e + i;
      }
      return function (e, i, n, s) {
        if (!i.offset) return !1;
        var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          l = a + e.helperProportions.height,
          c = i.offset.left,
          h = i.offset.top,
          u = c + i.proportions().width,
          d = h + i.proportions().height;
        switch (n) {
          case "fit":
            return c <= o && r <= u && h <= a && l <= d;
          case "intersect":
            return (
              c < o + e.helperProportions.width / 2 &&
              r - e.helperProportions.width / 2 < u &&
              h < a + e.helperProportions.height / 2 &&
              l - e.helperProportions.height / 2 < d
            );
          case "pointer":
            return (
              t(s.pageY, h, i.proportions().height) &&
              t(s.pageX, c, i.proportions().width)
            );
          case "touch":
            return (
              ((a >= h && a <= d) || (l >= h && l <= d) || (a < h && l > d)) &&
              ((o >= c && o <= u) || (r >= c && r <= u) || (o < c && r > u))
            );
          default:
            return !1;
        }
      };
    })());
    (t.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (e, i) {
        var n,
          s,
          o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element)
            .find(":data(ui-droppable)")
            .addBack();
        t: for (n = 0; n < o.length; n++)
          if (
            !(
              o[n].options.disabled ||
              (e &&
                !o[n].accept.call(o[n].element[0], e.currentItem || e.element))
            )
          ) {
            for (s = 0; s < r.length; s++)
              if (r[s] === o[n].element[0]) {
                o[n].proportions().height = 0;
                continue t;
              }
            (o[n].visible = "none" !== o[n].element.css("display")),
              o[n].visible &&
                ("mousedown" === a && o[n]._activate.call(o[n], i),
                (o[n].offset = o[n].element.offset()),
                o[n].proportions({
                  width: o[n].element[0].offsetWidth,
                  height: o[n].element[0].offsetHeight,
                }));
          }
      },
      drop: function (e, i) {
        var n = !1;
        return (
          t.each(
            (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
            function () {
              this.options &&
                (!this.options.disabled &&
                  this.visible &&
                  v(e, this, this.options.tolerance, i) &&
                  (n = this._drop.call(this, i) || n),
                !this.options.disabled &&
                  this.visible &&
                  this.accept.call(
                    this.element[0],
                    e.currentItem || e.element
                  ) &&
                  ((this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, i)));
            }
          ),
          n
        );
      },
      dragStart: function (e, i) {
        e.element.parentsUntil("body").on("scroll.droppable", function () {
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        });
      },
      drag: function (e, i) {
        e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
          t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
              var n,
                s,
                o,
                a = v(e, this, this.options.tolerance, i),
                r =
                  !a && this.isover
                    ? "isout"
                    : a && !this.isover
                    ? "isover"
                    : null;
              r &&
                (this.options.greedy &&
                  ((s = this.options.scope),
                  (o = this.element
                    .parents(":data(ui-droppable)")
                    .filter(function () {
                      return t(this).droppable("instance").options.scope === s;
                    })).length &&
                    ((n = t(o[0]).droppable("instance")).greedyChild =
                      "isover" === r)),
                n &&
                  "isover" === r &&
                  ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                (this[r] = !0),
                (this["isout" === r ? "isover" : "isout"] = !1),
                this["isover" === r ? "_over" : "_out"].call(this, i),
                n &&
                  "isout" === r &&
                  ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
            }
          });
      },
      dragStop: function (e, i) {
        e.element.parentsUntil("body").off("scroll.droppable"),
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.droppable", t.ui.droppable, {
          options: { hoverClass: !1, activeClass: !1 },
          _addActiveClass: function () {
            this._super(),
              this.options.activeClass &&
                this.element.addClass(this.options.activeClass);
          },
          _removeActiveClass: function () {
            this._super(),
              this.options.activeClass &&
                this.element.removeClass(this.options.activeClass);
          },
          _addHoverClass: function () {
            this._super(),
              this.options.hoverClass &&
                this.element.addClass(this.options.hoverClass);
          },
          _removeHoverClass: function () {
            this._super(),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass);
          },
        });
    t.ui.droppable,
      t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
          classes: {
            "ui-progressbar": "ui-corner-all",
            "ui-progressbar-value": "ui-corner-left",
            "ui-progressbar-complete": "ui-corner-right",
          },
          max: 100,
          value: 0,
          change: null,
          complete: null,
        },
        min: 0,
        _create: function () {
          (this.oldValue = this.options.value = this._constrainedValue()),
            this.element.attr({
              role: "progressbar",
              "aria-valuemin": this.min,
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            (this.valueDiv = t("<div>").appendTo(this.element)),
            this._addClass(
              this.valueDiv,
              "ui-progressbar-value",
              "ui-widget-header"
            ),
            this._refreshValue();
        },
        _destroy: function () {
          this.element.removeAttr(
            "role aria-valuemin aria-valuemax aria-valuenow"
          ),
            this.valueDiv.remove();
        },
        value: function (t) {
          if (void 0 === t) return this.options.value;
          (this.options.value = this._constrainedValue(t)),
            this._refreshValue();
        },
        _constrainedValue: function (t) {
          return (
            void 0 === t && (t = this.options.value),
            (this.indeterminate = !1 === t),
            "number" != typeof t && (t = 0),
            !this.indeterminate &&
              Math.min(this.options.max, Math.max(this.min, t))
          );
        },
        _setOptions: function (t) {
          var e = t.value;
          delete t.value,
            this._super(t),
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue();
        },
        _setOption: function (t, e) {
          "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function () {
          return this.indeterminate
            ? 100
            : (100 * (this.options.value - this.min)) /
                (this.options.max - this.min);
        },
        _refreshValue: function () {
          var e = this.options.value,
            i = this._percentage();
          this.valueDiv
            .toggle(this.indeterminate || e > this.min)
            .width(i.toFixed(0) + "%"),
            this._toggleClass(
              this.valueDiv,
              "ui-progressbar-complete",
              null,
              e === this.options.max
            )._toggleClass(
              "ui-progressbar-indeterminate",
              null,
              this.indeterminate
            ),
            this.indeterminate
              ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv ||
                  ((this.overlayDiv = t("<div>").appendTo(this.valueDiv)),
                  this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
              : (this.element.attr({
                  "aria-valuemax": this.options.max,
                  "aria-valuenow": e,
                }),
                this.overlayDiv &&
                  (this.overlayDiv.remove(), (this.overlayDiv = null))),
            this.oldValue !== e &&
              ((this.oldValue = e), this._trigger("change")),
            e === this.options.max && this._trigger("complete");
        },
      }),
      t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null,
        },
        _create: function () {
          var e = this;
          this._addClass("ui-selectable"),
            (this.dragged = !1),
            (this.refresh = function () {
              (e.elementPos = t(e.element[0]).offset()),
                (e.selectees = t(e.options.filter, e.element[0])),
                e._addClass(e.selectees, "ui-selectee"),
                e.selectees.each(function () {
                  var i = t(this),
                    n = i.offset(),
                    s = {
                      left: n.left - e.elementPos.left,
                      top: n.top - e.elementPos.top,
                    };
                  t.data(this, "selectable-item", {
                    element: this,
                    $element: i,
                    left: s.left,
                    top: s.top,
                    right: s.left + i.outerWidth(),
                    bottom: s.top + i.outerHeight(),
                    startselected: !1,
                    selected: i.hasClass("ui-selected"),
                    selecting: i.hasClass("ui-selecting"),
                    unselecting: i.hasClass("ui-unselecting"),
                  });
                });
            }),
            this.refresh(),
            this._mouseInit(),
            (this.helper = t("<div>")),
            this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function () {
          this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function (e) {
          var i = this,
            n = this.options;
          (this.opos = [e.pageX, e.pageY]),
            (this.elementPos = t(this.element[0]).offset()),
            this.options.disabled ||
              ((this.selectees = t(n.filter, this.element[0])),
              this._trigger("start", e),
              t(n.appendTo).append(this.helper),
              this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0,
              }),
              n.autoRefresh && this.refresh(),
              this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                (n.startselected = !0),
                  e.metaKey ||
                    e.ctrlKey ||
                    (i._removeClass(n.$element, "ui-selected"),
                    (n.selected = !1),
                    i._addClass(n.$element, "ui-unselecting"),
                    (n.unselecting = !0),
                    i._trigger("unselecting", e, { unselecting: n.element }));
              }),
              t(e.target)
                .parents()
                .addBack()
                .each(function () {
                  var n,
                    s = t.data(this, "selectable-item");
                  if (s)
                    return (
                      (n =
                        (!e.metaKey && !e.ctrlKey) ||
                        !s.$element.hasClass("ui-selected")),
                      i
                        ._removeClass(
                          s.$element,
                          n ? "ui-unselecting" : "ui-selected"
                        )
                        ._addClass(
                          s.$element,
                          n ? "ui-selecting" : "ui-unselecting"
                        ),
                      (s.unselecting = !n),
                      (s.selecting = n),
                      (s.selected = n),
                      n
                        ? i._trigger("selecting", e, { selecting: s.element })
                        : i._trigger("unselecting", e, {
                            unselecting: s.element,
                          }),
                      !1
                    );
                }));
        },
        _mouseDrag: function (e) {
          if (((this.dragged = !0), !this.options.disabled)) {
            var i,
              n = this,
              s = this.options,
              o = this.opos[0],
              a = this.opos[1],
              r = e.pageX,
              l = e.pageY;
            return (
              o > r && ((i = r), (r = o), (o = i)),
              a > l && ((i = l), (l = a), (a = i)),
              this.helper.css({ left: o, top: a, width: r - o, height: l - a }),
              this.selectees.each(function () {
                var i = t.data(this, "selectable-item"),
                  c = !1,
                  h = {};
                i &&
                  i.element !== n.element[0] &&
                  ((h.left = i.left + n.elementPos.left),
                  (h.right = i.right + n.elementPos.left),
                  (h.top = i.top + n.elementPos.top),
                  (h.bottom = i.bottom + n.elementPos.top),
                  "touch" === s.tolerance
                    ? (c = !(
                        h.left > r ||
                        h.right < o ||
                        h.top > l ||
                        h.bottom < a
                      ))
                    : "fit" === s.tolerance &&
                      (c =
                        h.left > o && h.right < r && h.top > a && h.bottom < l),
                  c
                    ? (i.selected &&
                        (n._removeClass(i.$element, "ui-selected"),
                        (i.selected = !1)),
                      i.unselecting &&
                        (n._removeClass(i.$element, "ui-unselecting"),
                        (i.unselecting = !1)),
                      i.selecting ||
                        (n._addClass(i.$element, "ui-selecting"),
                        (i.selecting = !0),
                        n._trigger("selecting", e, { selecting: i.element })))
                    : (i.selecting &&
                        ((e.metaKey || e.ctrlKey) && i.startselected
                          ? (n._removeClass(i.$element, "ui-selecting"),
                            (i.selecting = !1),
                            n._addClass(i.$element, "ui-selected"),
                            (i.selected = !0))
                          : (n._removeClass(i.$element, "ui-selecting"),
                            (i.selecting = !1),
                            i.startselected &&
                              (n._addClass(i.$element, "ui-unselecting"),
                              (i.unselecting = !0)),
                            n._trigger("unselecting", e, {
                              unselecting: i.element,
                            }))),
                      i.selected &&
                        (e.metaKey ||
                          e.ctrlKey ||
                          i.startselected ||
                          (n._removeClass(i.$element, "ui-selected"),
                          (i.selected = !1),
                          n._addClass(i.$element, "ui-unselecting"),
                          (i.unselecting = !0),
                          n._trigger("unselecting", e, {
                            unselecting: i.element,
                          })))));
              }),
              !1
            );
          }
        },
        _mouseStop: function (e) {
          var i = this;
          return (
            (this.dragged = !1),
            t(".ui-unselecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              i._removeClass(n.$element, "ui-unselecting"),
                (n.unselecting = !1),
                (n.startselected = !1),
                i._trigger("unselected", e, { unselected: n.element });
            }),
            t(".ui-selecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              i
                ._removeClass(n.$element, "ui-selecting")
                ._addClass(n.$element, "ui-selected"),
                (n.selecting = !1),
                (n.selected = !0),
                (n.startselected = !0),
                i._trigger("selected", e, { selected: n.element });
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
          );
        },
      }),
      t.widget("ui.selectmenu", [
        t.ui.formResetMixin,
        {
          version: "1.12.1",
          defaultElement: "<select>",
          options: {
            appendTo: null,
            classes: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
            disabled: null,
            icons: { button: "ui-icon-triangle-1-s" },
            position: { my: "left top", at: "left bottom", collision: "none" },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null,
          },
          _create: function () {
            var e = this.element.uniqueId().attr("id");
            (this.ids = {
              element: e,
              button: e + "-button",
              menu: e + "-menu",
            }),
              this._drawButton(),
              this._drawMenu(),
              this._bindFormResetHandler(),
              (this._rendered = !1),
              (this.menuItems = t());
          },
          _drawButton: function () {
            var e,
              i = this,
              n = this._parseOption(
                this.element.find("option:selected"),
                this.element[0].selectedIndex
              );
            (this.labels = this.element.labels().attr("for", this.ids.button)),
              this._on(this.labels, {
                click: function (t) {
                  this.button.focus(), t.preventDefault();
                },
              }),
              this.element.hide(),
              (this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title"),
              }).insertAfter(this.element)),
              this._addClass(
                this.button,
                "ui-selectmenu-button ui-selectmenu-button-closed",
                "ui-button ui-widget"
              ),
              (e = t("<span>").appendTo(this.button)),
              this._addClass(
                e,
                "ui-selectmenu-icon",
                "ui-icon " + this.options.icons.button
              ),
              (this.buttonItem = this._renderButtonItem(n).appendTo(
                this.button
              )),
              !1 !== this.options.width && this._resizeButton(),
              this._on(this.button, this._buttonEvents),
              this.button.one("focusin", function () {
                i._rendered || i._refreshMenu();
              });
          },
          _drawMenu: function () {
            var e = this;
            (this.menu = t("<ul>", {
              "aria-hidden": "true",
              "aria-labelledby": this.ids.button,
              id: this.ids.menu,
            })),
              (this.menuWrap = t("<div>").append(this.menu)),
              this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
              this.menuWrap.appendTo(this._appendTo()),
              (this.menuInstance = this.menu
                .menu({
                  classes: { "ui-menu": "ui-corner-bottom" },
                  role: "listbox",
                  select: function (t, i) {
                    t.preventDefault(),
                      e._setSelection(),
                      e._select(i.item.data("ui-selectmenu-item"), t);
                  },
                  focus: function (t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex &&
                      n.index !== e.focusIndex &&
                      (e._trigger("focus", t, { item: n }),
                      e.isOpen || e._select(n, t)),
                      (e.focusIndex = n.index),
                      e.button.attr(
                        "aria-activedescendant",
                        e.menuItems.eq(n.index).attr("id")
                      );
                  },
                })
                .menu("instance")),
              this.menuInstance._off(this.menu, "mouseleave"),
              (this.menuInstance._closeOnDocumentClick = function () {
                return !1;
              }),
              (this.menuInstance._isDivider = function () {
                return !1;
              });
          },
          refresh: function () {
            this._refreshMenu(),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(
                  this._getSelectedItem().data("ui-selectmenu-item") || {}
                ))
              ),
              null === this.options.width && this._resizeButton();
          },
          _refreshMenu: function () {
            var t,
              e = this.element.find("option");
            this.menu.empty(),
              this._parseOptions(e),
              this._renderMenu(this.menu, this.items),
              this.menuInstance.refresh(),
              (this.menuItems = this.menu
                .find("li")
                .not(".ui-selectmenu-optgroup")
                .find(".ui-menu-item-wrapper")),
              (this._rendered = !0),
              e.length &&
                ((t = this._getSelectedItem()),
                this.menuInstance.focus(null, t),
                this._setAria(t.data("ui-selectmenu-item")),
                this._setOption("disabled", this.element.prop("disabled")));
          },
          open: function (t) {
            this.options.disabled ||
              (this._rendered
                ? (this._removeClass(
                    this.menu.find(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.menuInstance.focus(null, this._getSelectedItem()))
                : this._refreshMenu(),
              this.menuItems.length &&
                ((this.isOpen = !0),
                this._toggleAttr(),
                this._resizeMenu(),
                this._position(),
                this._on(this.document, this._documentClick),
                this._trigger("open", t)));
          },
          _position: function () {
            this.menuWrap.position(
              t.extend({ of: this.button }, this.options.position)
            );
          },
          close: function (t) {
            this.isOpen &&
              ((this.isOpen = !1),
              this._toggleAttr(),
              (this.range = null),
              this._off(this.document),
              this._trigger("close", t));
          },
          widget: function () {
            return this.button;
          },
          menuWidget: function () {
            return this.menu;
          },
          _renderButtonItem: function (e) {
            var i = t("<span>");
            return (
              this._setText(i, e.label),
              this._addClass(i, "ui-selectmenu-text"),
              i
            );
          },
          _renderMenu: function (e, i) {
            var n = this,
              s = "";
            t.each(i, function (i, o) {
              var a;
              o.optgroup !== s &&
                ((a = t("<li>", { text: o.optgroup })),
                n._addClass(
                  a,
                  "ui-selectmenu-optgroup",
                  "ui-menu-divider" +
                    (o.element.parent("optgroup").prop("disabled")
                      ? " ui-state-disabled"
                      : "")
                ),
                a.appendTo(e),
                (s = o.optgroup)),
                n._renderItemData(e, o);
            });
          },
          _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
          },
          _renderItem: function (e, i) {
            var n = t("<li>"),
              s = t("<div>", { title: i.element.attr("title") });
            return (
              i.disabled && this._addClass(n, null, "ui-state-disabled"),
              this._setText(s, i.label),
              n.append(s).appendTo(e)
            );
          },
          _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;");
          },
          _move: function (t, e) {
            var i,
              n,
              s = ".ui-menu-item";
            this.isOpen
              ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
              : ((i = this.menuItems
                  .eq(this.element[0].selectedIndex)
                  .parent("li")),
                (s += ":not(.ui-state-disabled)")),
              (n =
                "first" === t || "last" === t
                  ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                  : i[t + "All"](s).eq(0)).length &&
                this.menuInstance.focus(e, n);
          },
          _getSelectedItem: function () {
            return this.menuItems
              .eq(this.element[0].selectedIndex)
              .parent("li");
          },
          _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t);
          },
          _setSelection: function () {
            var t;
            this.range &&
              (window.getSelection
                ? ((t = window.getSelection()).removeAllRanges(),
                  t.addRange(this.range))
                : this.range.select(),
              this.button.focus());
          },
          _documentClick: {
            mousedown: function (e) {
              this.isOpen &&
                (t(e.target).closest(
                  ".ui-selectmenu-menu, #" +
                    t.ui.escapeSelector(this.ids.button)
                ).length ||
                  this.close(e));
            },
          },
          _buttonEvents: {
            mousedown: function () {
              var t;
              window.getSelection
                ? (t = window.getSelection()).rangeCount &&
                  (this.range = t.getRangeAt(0))
                : (this.range = document.selection.createRange());
            },
            click: function (t) {
              this._setSelection(), this._toggle(t);
            },
            keydown: function (e) {
              var i = !0;
              switch (e.keyCode) {
                case t.ui.keyCode.TAB:
                case t.ui.keyCode.ESCAPE:
                  this.close(e), (i = !1);
                  break;
                case t.ui.keyCode.ENTER:
                  this.isOpen && this._selectFocusedItem(e);
                  break;
                case t.ui.keyCode.UP:
                  e.altKey ? this._toggle(e) : this._move("prev", e);
                  break;
                case t.ui.keyCode.DOWN:
                  e.altKey ? this._toggle(e) : this._move("next", e);
                  break;
                case t.ui.keyCode.SPACE:
                  this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                  break;
                case t.ui.keyCode.LEFT:
                  this._move("prev", e);
                  break;
                case t.ui.keyCode.RIGHT:
                  this._move("next", e);
                  break;
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.PAGE_UP:
                  this._move("first", e);
                  break;
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_DOWN:
                  this._move("last", e);
                  break;
                default:
                  this.menu.trigger(e), (i = !1);
              }
              i && e.preventDefault();
            },
          },
          _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") ||
              this._select(e.data("ui-selectmenu-item"), t);
          },
          _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            (this.element[0].selectedIndex = t.index),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(t))
              ),
              this._setAria(t),
              this._trigger("select", e, { item: t }),
              t.index !== i && this._trigger("change", e, { item: t }),
              this.close(e);
          },
          _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
              "aria-labelledby": e,
              "aria-activedescendant": e,
            }),
              this.menu.attr("aria-activedescendant", e);
          },
          _setOption: function (t, e) {
            if ("icons" === t) {
              var i = this.button.find("span.ui-icon");
              this._removeClass(i, null, this.options.icons.button)._addClass(
                i,
                null,
                e.button
              );
            }
            this._super(t, e),
              "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
              "width" === t && this._resizeButton();
          },
          _setOptionDisabled: function (t) {
            this._super(t),
              this.menuInstance.option("disabled", t),
              this.button.attr("aria-disabled", t),
              this._toggleClass(this.button, null, "ui-state-disabled", t),
              this.element.prop("disabled", t),
              t
                ? (this.button.attr("tabindex", -1), this.close())
                : this.button.attr("tabindex", 0);
          },
          _appendTo: function () {
            var e = this.options.appendTo;
            return (
              e &&
                (e =
                  e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
              (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
              e.length || (e = this.document[0].body),
              e
            );
          },
          _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen),
              this._removeClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
              )
                ._addClass(
                  this.button,
                  "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
                )
                ._toggleClass(
                  this.menuWrap,
                  "ui-selectmenu-open",
                  null,
                  this.isOpen
                ),
              this.menu.attr("aria-hidden", !this.isOpen);
          },
          _resizeButton: function () {
            var t = this.options.width;
            !1 !== t
              ? (null === t &&
                  ((t = this.element.show().outerWidth()), this.element.hide()),
                this.button.outerWidth(t))
              : this.button.css("width", "");
          },
          _resizeMenu: function () {
            this.menu.outerWidth(
              Math.max(
                this.button.outerWidth(),
                this.menu.width("").outerWidth() + 1
              )
            );
          },
          _getCreateOptions: function () {
            var t = this._super();
            return (t.disabled = this.element.prop("disabled")), t;
          },
          _parseOptions: function (e) {
            var i = this,
              n = [];
            e.each(function (e, s) {
              n.push(i._parseOption(t(s), e));
            }),
              (this.items = n);
          },
          _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
              element: t,
              index: e,
              value: t.val(),
              label: t.text(),
              optgroup: i.attr("label") || "",
              disabled: i.prop("disabled") || t.prop("disabled"),
            };
          },
          _destroy: function () {
            this._unbindFormResetHandler(),
              this.menuWrap.remove(),
              this.button.remove(),
              this.element.show(),
              this.element.removeUniqueId(),
              this.labels.attr("for", this.ids.element);
          },
        },
      ]),
      t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          classes: {
            "ui-slider": "ui-corner-all",
            "ui-slider-handle": "ui-corner-all",
            "ui-slider-range": "ui-corner-all ui-widget-header",
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass(
              "ui-slider ui-slider-" + this.orientation,
              "ui-widget ui-widget-content"
            ),
            this._refresh(),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var e,
            i,
            n = this.options,
            s = this.element.find(".ui-slider-handle"),
            o = [];
          for (
            i = (n.values && n.values.length) || 1,
              s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
              e = s.length;
            e < i;
            e++
          )
            o.push("<span tabindex='0'></span>");
          (this.handles = s.add(t(o.join("")).appendTo(this.element))),
            this._addClass(
              this.handles,
              "ui-slider-handle",
              "ui-state-default"
            ),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function () {
          var e = this.options;
          e.range
            ? (!0 === e.range &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : t.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(
                    this.range,
                    "ui-slider-range-min ui-slider-range-max"
                  ),
                  this.range.css({ left: "", bottom: "" }))
                : ((this.range = t("<div>").appendTo(this.element)),
                  this._addClass(this.range, "ui-slider-range")),
              ("min" !== e.range && "max" !== e.range) ||
                this._addClass(this.range, "ui-slider-range-" + e.range))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            c = this,
            h = this.options;
          return (
            !h.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (n = this._normValueFromMouse(i)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(n - c.values(e));
              (s > i ||
                (s === i &&
                  (e === c._lastChangedValue || c.values(e) === h.min))) &&
                ((s = i), (o = t(this)), (a = e));
            }),
            !1 !== this._start(e, a) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = a),
              this._addClass(o, null, "ui-state-active"),
              o.trigger("focus"),
              (r = o.offset()),
              (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = l
                ? { left: 0, top: 0 }
                : {
                    left: e.pageX - r.left - o.width() / 2,
                    top:
                      e.pageY -
                      r.top -
                      o.height() / 2 -
                      (parseInt(o.css("borderTopWidth"), 10) || 0) -
                      (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(o.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(e, a, n),
              (this._animateOff = !0),
              !0))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function (t) {
          return (
            this._removeClass(this.handles, null, "ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e, i, n, s, o;
          return (
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                (i =
                  t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((e = this.elementSize.height),
                (i =
                  t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (n = i / e) > 1 && (n = 1),
            n < 0 && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            (s = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + n * s),
            this._trimAlignValue(o)
          );
        },
        _uiHash: function (t, e, i) {
          var n = {
            handle: this.handles[t],
            handleIndex: t,
            value: void 0 !== e ? e : this.value(),
          };
          return (
            this._hasMultipleValues() &&
              ((n.value = void 0 !== e ? e : this.values(t)),
              (n.values = i || this.values())),
            n
          );
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length;
        },
        _start: function (t, e) {
          return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function (t, e, i) {
          var n,
            s = this.value(),
            o = this.values();
          this._hasMultipleValues() &&
            ((n = this.values(e ? 0 : 1)),
            (s = this.values(e)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            (o[e] = i)),
            i !== s &&
              !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
        },
        _stop: function (t, e) {
          this._trigger("stop", t, this._uiHash(e));
        },
        _change: function (t, e) {
          this._keySliding ||
            this._mouseSliding ||
            ((this._lastChangedValue = e),
            this._trigger("change", t, this._uiHash(e)));
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (e, i) {
          var n, s, o;
          if (arguments.length > 1)
            return (
              (this.options.values[e] = this._trimAlignValue(i)),
              this._refreshValue(),
              void this._change(null, e)
            );
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0]))
            return this._hasMultipleValues() ? this._values(e) : this.value();
          for (
            n = this.options.values, s = arguments[0], o = 0;
            o < n.length;
            o += 1
          )
            (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
          this._refreshValue();
        },
        _setOption: function (e, i) {
          var n,
            s = 0;
          switch (
            ("range" === e &&
              !0 === this.options.range &&
              ("min" === i
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === i &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            t.isArray(this.options.values) && (s = this.options.values.length),
            this._super(e, i),
            e)
          ) {
            case "orientation":
              this._detectOrientation(),
                this._removeClass(
                  "ui-slider-horizontal ui-slider-vertical"
                )._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), n = s - 1;
                n >= 0;
                n--
              )
                this._change(null, n);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _setOptionDisabled: function (t) {
          this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function () {
          var t = this.options.value;
          return (t = this._trimAlignValue(t));
        },
        _values: function (t) {
          var e, i, n;
          if (arguments.length)
            return (e = this.options.values[t]), (e = this._trimAlignValue(e));
          if (this._hasMultipleValues()) {
            for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)
              i[n] = this._trimAlignValue(i[n]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (t <= this._valueMin()) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
          return (
            2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
          (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            (this.max = parseFloat(t.toFixed(this._precision())));
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = t.toString(),
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshRange: function (t) {
          "vertical" === t && this.range.css({ width: "", left: "" }),
            "horizontal" === t && this.range.css({ height: "", bottom: "" });
        },
        _refreshValue: function () {
          var e,
            i,
            n,
            s,
            o,
            a = this.options.range,
            r = this.options,
            l = this,
            c = !this._animateOff && r.animate,
            h = {};
          this._hasMultipleValues()
            ? this.handles.each(function (n) {
                (i =
                  ((l.values(n) - l._valueMin()) /
                    (l._valueMax() - l._valueMin())) *
                  100),
                  (h["horizontal" === l.orientation ? "left" : "bottom"] =
                    i + "%"),
                  t(this).stop(1, 1)[c ? "animate" : "css"](h, r.animate),
                  !0 === l.options.range &&
                    ("horizontal" === l.orientation
                      ? (0 === n &&
                          l.range
                            .stop(1, 1)
                            [c ? "animate" : "css"](
                              { left: i + "%" },
                              r.animate
                            ),
                        1 === n &&
                          l.range[c ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: r.animate }
                          ))
                      : (0 === n &&
                          l.range
                            .stop(1, 1)
                            [c ? "animate" : "css"](
                              { bottom: i + "%" },
                              r.animate
                            ),
                        1 === n &&
                          l.range[c ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: r.animate }
                          ))),
                  (e = i);
              })
            : ((n = this.value()),
              (s = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
              (h["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[c ? "animate" : "css"](h, r.animate),
              "min" === a &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"]({ width: i + "%" }, r.animate),
              "max" === a &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
              "min" === a &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"]({ height: i + "%" }, r.animate),
              "max" === a &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [c ? "animate" : "css"](
                    { height: 100 - i + "%" },
                    r.animate
                  ));
        },
        _handleEvents: {
          keydown: function (e) {
            var i,
              n,
              s,
              o = t(e.target).data("ui-slider-handle-index");
            switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    this._addClass(t(e.target), null, "ui-state-active"),
                    !1 === this._start(e, o)))
                )
                  return;
            }
            switch (
              ((s = this.options.step),
              (i = n = this._hasMultipleValues()
                ? this.values(o)
                : this.value()),
              e.keyCode)
            ) {
              case t.ui.keyCode.HOME:
                n = this._valueMin();
                break;
              case t.ui.keyCode.END:
                n = this._valueMax();
                break;
              case t.ui.keyCode.PAGE_UP:
                n = this._trimAlignValue(
                  i + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.PAGE_DOWN:
                n = this._trimAlignValue(
                  i - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                if (i === this._valueMax()) return;
                n = this._trimAlignValue(i + s);
                break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (i === this._valueMin()) return;
                n = this._trimAlignValue(i - s);
            }
            this._slide(e, o, n);
          },
          keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, i),
              this._change(e, i),
              this._removeClass(t(e.target), null, "ui-state-active"));
          },
        },
      }),
      t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null,
        },
        _isOverAxis: function (t, e, i) {
          return t >= e && t < e + i;
        },
        _isFloating: function (t) {
          return (
            /left|right/.test(t.css("float")) ||
            /inline|table-cell/.test(t.css("display"))
          );
        },
        _create: function () {
          (this.containerCache = {}),
            this._addClass("ui-sortable"),
            this.refresh(),
            (this.offset = this.element.offset()),
            this._mouseInit(),
            this._setHandleClassName(),
            (this.ready = !0);
        },
        _setOption: function (t, e) {
          this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function () {
          var e = this;
          this._removeClass(
            this.element.find(".ui-sortable-handle"),
            "ui-sortable-handle"
          ),
            t.each(this.items, function () {
              e._addClass(
                this.instance.options.handle
                  ? this.item.find(this.instance.options.handle)
                  : this.item,
                "ui-sortable-handle"
              );
            });
        },
        _destroy: function () {
          this._mouseDestroy();
          for (var t = this.items.length - 1; t >= 0; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
          return this;
        },
        _mouseCapture: function (e, i) {
          var n = null,
            s = !1,
            o = this;
          return (
            !this.reverting &&
            !this.options.disabled &&
            "static" !== this.options.type &&
            (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                if (t.data(this, o.widgetName + "-item") === o)
                  return (n = t(this)), !1;
              }),
            t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
            !!n &&
              !(
                this.options.handle &&
                !i &&
                (t(this.options.handle, n)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === e.target && (s = !0);
                  }),
                !s)
              ) &&
              ((this.currentItem = n), this._removeCurrentsFromItems(), !0))
          );
        },
        _mouseStart: function (e, i, n) {
          var s,
            o,
            a = this.options;
          if (
            ((this.currentContainer = this),
            this.refreshPositions(),
            (this.helper = this._createHelper(e)),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            (this.scrollParent = this.helper.scrollParent()),
            (this.offset = this.currentItem.offset()),
            (this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left,
            }),
            t.extend(this.offset, {
              click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top,
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
            this.helper.css("position", "absolute"),
            (this.cssPosition = this.helper.css("position")),
            (this.originalPosition = this._generatePosition(e)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            (this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0],
            }),
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor &&
              "auto" !== a.cursor &&
              ((o = this.document.find("body")),
              (this.storedCursor = o.css("cursor")),
              o.css("cursor", a.cursor),
              (this.storedStylesheet = t(
                "<style>*{ cursor: " + a.cursor + " !important; }</style>"
              ).appendTo(o))),
            a.opacity &&
              (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", a.opacity)),
            a.zIndex &&
              (this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] &&
              "HTML" !== this.scrollParent[0].tagName &&
              (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !n)
          )
            for (s = this.containers.length - 1; s >= 0; s--)
              this.containers[s]._trigger("activate", e, this._uiHash(this));
          return (
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager &&
              !a.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(this, e),
            (this.dragging = !0),
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s,
            o,
            a = this.options,
            r = !1;
          for (
            this.position = this._generatePosition(e),
              this.positionAbs = this._convertPositionTo("absolute"),
              this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
              this.options.scroll &&
                (this.scrollParent[0] !== this.document[0] &&
                "HTML" !== this.scrollParent[0].tagName
                  ? (this.overflowOffset.top +
                      this.scrollParent[0].offsetHeight -
                      e.pageY <
                    a.scrollSensitivity
                      ? (this.scrollParent[0].scrollTop = r =
                          this.scrollParent[0].scrollTop + a.scrollSpeed)
                      : e.pageY - this.overflowOffset.top <
                          a.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = r =
                          this.scrollParent[0].scrollTop - a.scrollSpeed),
                    this.overflowOffset.left +
                      this.scrollParent[0].offsetWidth -
                      e.pageX <
                    a.scrollSensitivity
                      ? (this.scrollParent[0].scrollLeft = r =
                          this.scrollParent[0].scrollLeft + a.scrollSpeed)
                      : e.pageX - this.overflowOffset.left <
                          a.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = r =
                          this.scrollParent[0].scrollLeft - a.scrollSpeed))
                  : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                      ? (r = this.document.scrollTop(
                          this.document.scrollTop() - a.scrollSpeed
                        ))
                      : this.window.height() -
                          (e.pageY - this.document.scrollTop()) <
                          a.scrollSensitivity &&
                        (r = this.document.scrollTop(
                          this.document.scrollTop() + a.scrollSpeed
                        )),
                    e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                      ? (r = this.document.scrollLeft(
                          this.document.scrollLeft() - a.scrollSpeed
                        ))
                      : this.window.width() -
                          (e.pageX - this.document.scrollLeft()) <
                          a.scrollSensitivity &&
                        (r = this.document.scrollLeft(
                          this.document.scrollLeft() + a.scrollSpeed
                        ))),
                !1 !== r &&
                  t.ui.ddmanager &&
                  !a.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e)),
              this.positionAbs = this._convertPositionTo("absolute"),
              (this.options.axis && "y" === this.options.axis) ||
                (this.helper[0].style.left = this.position.left + "px"),
              (this.options.axis && "x" === this.options.axis) ||
                (this.helper[0].style.top = this.position.top + "px"),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            if (
              ((s = (n = this.items[i]).item[0]),
              (o = this._intersectsWithPointer(n)) &&
                n.instance === this.currentContainer &&
                !(
                  s === this.currentItem[0] ||
                  this.placeholder[1 === o ? "next" : "prev"]()[0] === s ||
                  t.contains(this.placeholder[0], s) ||
                  ("semi-dynamic" === this.options.type &&
                    t.contains(this.element[0], s))
                ))
            ) {
              if (
                ((this.direction = 1 === o ? "down" : "up"),
                "pointer" !== this.options.tolerance &&
                  !this._intersectsWithSides(n))
              )
                break;
              this._rearrange(e, n), this._trigger("change", e, this._uiHash());
              break;
            }
          return (
            this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            (this.lastPositionAbs = this.positionAbs),
            !1
          );
        },
        _mouseStop: function (e, i) {
          if (e) {
            if (
              (t.ui.ddmanager &&
                !this.options.dropBehaviour &&
                t.ui.ddmanager.drop(this, e),
              this.options.revert)
            ) {
              var n = this,
                s = this.placeholder.offset(),
                o = this.options.axis,
                a = {};
              (o && "x" !== o) ||
                (a.left =
                  s.left -
                  this.offset.parent.left -
                  this.margins.left +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollLeft)),
                (o && "y" !== o) ||
                  (a.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                t(this.helper).animate(
                  a,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    n._clear(e);
                  }
                );
            } else this._clear(e, i);
            return !1;
          }
        },
        cancel: function () {
          if (this.dragging) {
            this._mouseUp(new t.Event("mouseup", { target: null })),
              "original" === this.options.helper
                ? (this.currentItem.css(this._storedCSS),
                  this._removeClass(this.currentItem, "ui-sortable-helper"))
                : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)
              this.containers[e]._trigger(
                "deactivate",
                null,
                this._uiHash(this)
              ),
                this.containers[e].containerCache.over &&
                  (this.containers[e]._trigger("out", null, this._uiHash(this)),
                  (this.containers[e].containerCache.over = 0));
          }
          return (
            this.placeholder &&
              (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
              "original" !== this.options.helper &&
                this.helper &&
                this.helper[0].parentNode &&
                this.helper.remove(),
              t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null,
              }),
              this.domPosition.prev
                ? t(this.domPosition.prev).after(this.currentItem)
                : t(this.domPosition.parent).prepend(this.currentItem)),
            this
          );
        },
        serialize: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            t(i).each(function () {
              var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
                e.expression || /(.+)[\-=_](.+)/
              );
              i &&
                n.push(
                  (e.key || i[1] + "[]") +
                    "=" +
                    (e.key && e.expression ? i[1] : i[2])
                );
            }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
          );
        },
        toArray: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            i.each(function () {
              n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }),
            n
          );
        },
        _intersectsWith: function (t) {
          var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            n = this.positionAbs.top,
            s = n + this.helperProportions.height,
            o = t.left,
            a = o + t.width,
            r = t.top,
            l = r + t.height,
            c = this.offset.click.top,
            h = this.offset.click.left,
            u = "x" === this.options.axis || (n + c > r && n + c < l),
            d = "y" === this.options.axis || (e + h > o && e + h < a),
            p = u && d;
          return "pointer" === this.options.tolerance ||
            this.options.forcePointerForContainers ||
            ("pointer" !== this.options.tolerance &&
              this.helperProportions[this.floating ? "width" : "height"] >
                t[this.floating ? "width" : "height"])
            ? p
            : o < e + this.helperProportions.width / 2 &&
                i - this.helperProportions.width / 2 < a &&
                r < n + this.helperProportions.height / 2 &&
                s - this.helperProportions.height / 2 < l;
        },
        _intersectsWithPointer: function (t) {
          var e,
            i,
            n =
              "x" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.top + this.offset.click.top,
                t.top,
                t.height
              ),
            s =
              "y" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.left + this.offset.click.left,
                t.left,
                t.width
              );
          return (
            !(!n || !s) &&
            ((e = this._getDragVerticalDirection()),
            (i = this._getDragHorizontalDirection()),
            this.floating
              ? "right" === i || "down" === e
                ? 2
                : 1
              : e && ("down" === e ? 2 : 1))
          );
        },
        _intersectsWithSides: function (t) {
          var e = this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top + t.height / 2,
              t.height
            ),
            i = this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2,
              t.width
            ),
            n = this._getDragVerticalDirection(),
            s = this._getDragHorizontalDirection();
          return this.floating && s
            ? ("right" === s && i) || ("left" === s && !i)
            : n && (("down" === n && e) || ("up" === n && !e));
        },
        _getDragVerticalDirection: function () {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function () {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function (t) {
          return (
            this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
          );
        },
        _connectWith: function () {
          var t = this.options;
          return t.connectWith.constructor === String
            ? [t.connectWith]
            : t.connectWith;
        },
        _getItemsAsjQuery: function (e) {
          var i,
            n,
            s,
            o,
            a = [],
            r = [],
            l = this._connectWith();
          if (l && e)
            for (i = l.length - 1; i >= 0; i--)
              for (n = (s = t(l[i], this.document[0])).length - 1; n >= 0; n--)
                (o = t.data(s[n], this.widgetFullName)) &&
                  o !== this &&
                  !o.options.disabled &&
                  r.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element)
                      : t(o.options.items, o.element)
                          .not(".ui-sortable-helper")
                          .not(".ui-sortable-placeholder"),
                    o,
                  ]);
          function c() {
            a.push(this);
          }
          for (
            r.push([
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"),
              this,
            ]),
              i = r.length - 1;
            i >= 0;
            i--
          )
            r[i][0].each(c);
          return t(a);
        },
        _removeCurrentsFromItems: function () {
          var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = t.grep(this.items, function (t) {
            for (var i = 0; i < e.length; i++)
              if (e[i] === t.item[0]) return !1;
            return !0;
          });
        },
        _refreshItems: function (e) {
          (this.items = []), (this.containers = [this]);
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            c,
            h = this.items,
            u = [
              [
                t.isFunction(this.options.items)
                  ? this.options.items.call(this.element[0], e, {
                      item: this.currentItem,
                    })
                  : t(this.options.items, this.element),
                this,
              ],
            ],
            d = this._connectWith();
          if (d && this.ready)
            for (i = d.length - 1; i >= 0; i--)
              for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)
                (o = t.data(s[n], this.widgetFullName)) &&
                  o !== this &&
                  !o.options.disabled &&
                  (u.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, {
                          item: this.currentItem,
                        })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
          for (i = u.length - 1; i >= 0; i--)
            for (a = u[i][1], n = 0, c = (r = u[i][0]).length; n < c; n++)
              (l = t(r[n])).data(this.widgetName + "-item", a),
                h.push({
                  item: l,
                  instance: a,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                });
        },
        refreshPositions: function (e) {
          var i, n, s, o;
          for (
            this.floating =
              !!this.items.length &&
              ("x" === this.options.axis ||
                this._isFloating(this.items[0].item)),
              this.offsetParent &&
                this.helper &&
                (this.offset.parent = this._getParentOffset()),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            ((n = this.items[i]).instance !== this.currentContainer &&
              this.currentContainer &&
              n.item[0] !== this.currentItem[0]) ||
              ((s = this.options.toleranceElement
                ? t(this.options.toleranceElement, n.item)
                : n.item),
              e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
              (o = s.offset()),
              (n.left = o.left),
              (n.top = o.top));
          if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
          else
            for (i = this.containers.length - 1; i >= 0; i--)
              (o = this.containers[i].element.offset()),
                (this.containers[i].containerCache.left = o.left),
                (this.containers[i].containerCache.top = o.top),
                (this.containers[i].containerCache.width = this.containers[
                  i
                ].element.outerWidth()),
                (this.containers[i].containerCache.height = this.containers[
                  i
                ].element.outerHeight());
          return this;
        },
        _createPlaceholder: function (e) {
          var i,
            n = (e = e || this).options;
          (n.placeholder && n.placeholder.constructor !== String) ||
            ((i = n.placeholder),
            (n.placeholder = {
              element: function () {
                var n = e.currentItem[0].nodeName.toLowerCase(),
                  s = t("<" + n + ">", e.document[0]);
                return (
                  e
                    ._addClass(
                      s,
                      "ui-sortable-placeholder",
                      i || e.currentItem[0].className
                    )
                    ._removeClass(s, "ui-sortable-helper"),
                  "tbody" === n
                    ? e._createTrPlaceholder(
                        e.currentItem.find("tr").eq(0),
                        t("<tr>", e.document[0]).appendTo(s)
                      )
                    : "tr" === n
                    ? e._createTrPlaceholder(e.currentItem, s)
                    : "img" === n && s.attr("src", e.currentItem.attr("src")),
                  i || s.css("visibility", "hidden"),
                  s
                );
              },
              update: function (t, s) {
                (i && !n.forcePlaceholderSize) ||
                  (s.height() ||
                    s.height(
                      e.currentItem.innerHeight() -
                        parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                    ),
                  s.width() ||
                    s.width(
                      e.currentItem.innerWidth() -
                        parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(e.currentItem.css("paddingRight") || 0, 10)
                    ));
              },
            })),
            (e.placeholder = t(
              n.placeholder.element.call(e.element, e.currentItem)
            )),
            e.currentItem.after(e.placeholder),
            n.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function (e, i) {
          var n = this;
          e.children().each(function () {
            t("<td>&#160;</td>", n.document[0])
              .attr("colspan", t(this).attr("colspan") || 1)
              .appendTo(i);
          });
        },
        _contactContainers: function (e) {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            c,
            h,
            u,
            d = null,
            p = null;
          for (i = this.containers.length - 1; i >= 0; i--)
            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
              if (this._intersectsWith(this.containers[i].containerCache)) {
                if (
                  d &&
                  t.contains(this.containers[i].element[0], d.element[0])
                )
                  continue;
                (d = this.containers[i]), (p = i);
              } else
                this.containers[i].containerCache.over &&
                  (this.containers[i]._trigger("out", e, this._uiHash(this)),
                  (this.containers[i].containerCache.over = 0));
          if (d)
            if (1 === this.containers.length)
              this.containers[p].containerCache.over ||
                (this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1));
            else {
              for (
                s = 1e4,
                  o = null,
                  a = (h = d.floating || this._isFloating(this.currentItem))
                    ? "left"
                    : "top",
                  r = h ? "width" : "height",
                  u = h ? "pageX" : "pageY",
                  n = this.items.length - 1;
                n >= 0;
                n--
              )
                t.contains(
                  this.containers[p].element[0],
                  this.items[n].item[0]
                ) &&
                  this.items[n].item[0] !== this.currentItem[0] &&
                  ((l = this.items[n].item.offset()[a]),
                  (c = !1),
                  e[u] - l > this.items[n][r] / 2 && (c = !0),
                  Math.abs(e[u] - l) < s &&
                    ((s = Math.abs(e[u] - l)),
                    (o = this.items[n]),
                    (this.direction = c ? "up" : "down")));
              if (!o && !this.options.dropOnEmpty) return;
              if (this.currentContainer === this.containers[p])
                return void (
                  this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger("over", e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1))
                );
              o
                ? this._rearrange(e, o, null, !0)
                : this._rearrange(e, null, this.containers[p].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[p]._trigger("change", e, this._uiHash(this)),
                (this.currentContainer = this.containers[p]),
                this.options.placeholder.update(
                  this.currentContainer,
                  this.placeholder
                ),
                this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1);
            }
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper)
              ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
              : "clone" === i.helper
              ? this.currentItem.clone()
              : this.currentItem;
          return (
            n.parents("body").length ||
              t(
                "parent" !== i.appendTo
                  ? i.appendTo
                  : this.currentItem[0].parentNode
              )[0].appendChild(n[0]),
            n[0] === this.currentItem[0] &&
              (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left"),
              }),
            (n[0].style.width && !i.forceHelperSize) ||
              n.width(this.currentItem.width()),
            (n[0].style.height && !i.forceHelperSize) ||
              n.height(this.currentItem.height()),
            n
          );
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function () {
          this.offsetParent = this.helper.offsetParent();
          var e = this.offsetParent.offset();
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            (this.offsetParent[0] === this.document[0].body ||
              (this.offsetParent[0].tagName &&
                "html" === this.offsetParent[0].tagName.toLowerCase() &&
                t.ui.ie)) &&
              (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return {
              top:
                t.top -
                (parseInt(this.helper.css("top"), 10) || 0) +
                this.scrollParent.scrollTop(),
              left:
                t.left -
                (parseInt(this.helper.css("left"), 10) || 0) +
                this.scrollParent.scrollLeft(),
            };
          }
          return { top: 0, left: 0 };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options;
          "parent" === s.containment &&
            (s.containment = this.helper[0].parentNode),
            ("document" !== s.containment && "window" !== s.containment) ||
              (this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                "document" === s.containment
                  ? this.document.width()
                  : this.window.width() -
                    this.helperProportions.width -
                    this.margins.left,
                ("document" === s.containment
                  ? this.document.height() ||
                    document.body.parentNode.scrollHeight
                  : this.window.height() ||
                    this.document[0].body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ]),
            /^(document|window|parent)$/.test(s.containment) ||
              ((e = t(s.containment)[0]),
              (i = t(s.containment).offset()),
              (n = "hidden" !== t(e).css("overflow")),
              (this.containment = [
                i.left +
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                  this.margins.left,
                i.top +
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingTop"), 10) || 0) -
                  this.margins.top,
                i.left +
                  (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingRight"), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left,
                i.top +
                  (n
                    ? Math.max(e.scrollHeight, e.offsetHeight)
                    : e.offsetHeight) -
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top,
              ]));
        },
        _convertPositionTo: function (e, i) {
          i || (i = this.position);
          var n = "absolute" === e ? 1 : -1,
            s =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            o = /(html|body)/i.test(s[0].tagName);
          return {
            top:
              i.top +
              this.offset.relative.top * n +
              this.offset.parent.top * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                ? 0
                : s.scrollTop()) *
                n,
            left:
              i.left +
              this.offset.relative.left * n +
              this.offset.parent.left * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                ? 0
                : s.scrollLeft()) *
                n,
          };
        },
        _generatePosition: function (e) {
          var i,
            n,
            s = this.options,
            o = e.pageX,
            a = e.pageY,
            r =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            l = /(html|body)/i.test(r[0].tagName);
          return (
            "relative" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0] !== this.offsetParent[0]) ||
              (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition &&
              (this.containment &&
                (e.pageX - this.offset.click.left < this.containment[0] &&
                  (o = this.containment[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < this.containment[1] &&
                  (a = this.containment[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > this.containment[2] &&
                  (o = this.containment[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > this.containment[3] &&
                  (a = this.containment[3] + this.offset.click.top)),
              s.grid &&
                ((i =
                  this.originalPageY +
                  Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]),
                (a = this.containment
                  ? i - this.offset.click.top >= this.containment[1] &&
                    i - this.offset.click.top <= this.containment[3]
                    ? i
                    : i - this.offset.click.top >= this.containment[1]
                    ? i - s.grid[1]
                    : i + s.grid[1]
                  : i),
                (n =
                  this.originalPageX +
                  Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
                (o = this.containment
                  ? n - this.offset.click.left >= this.containment[0] &&
                    n - this.offset.click.left <= this.containment[2]
                    ? n
                    : n - this.offset.click.left >= this.containment[0]
                    ? n - s.grid[0]
                    : n + s.grid[0]
                  : n))),
            {
              top:
                a -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : l
                  ? 0
                  : r.scrollTop()),
              left:
                o -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : l
                  ? 0
                  : r.scrollLeft()),
            }
          );
        },
        _rearrange: function (t, e, i, n) {
          i
            ? i[0].appendChild(this.placeholder[0])
            : e.item[0].parentNode.insertBefore(
                this.placeholder[0],
                "down" === this.direction ? e.item[0] : e.item[0].nextSibling
              ),
            (this.counter = this.counter ? ++this.counter : 1);
          var s = this.counter;
          this._delay(function () {
            s === this.counter && this.refreshPositions(!n);
          });
        },
        _clear: function (t, e) {
          this.reverting = !1;
          var i,
            n = [];
          if (
            (!this._noFinalSort &&
              this.currentItem.parent().length &&
              this.placeholder.before(this.currentItem),
            (this._noFinalSort = null),
            this.helper[0] === this.currentItem[0])
          ) {
            for (i in this._storedCSS)
              ("auto" !== this._storedCSS[i] &&
                "static" !== this._storedCSS[i]) ||
                (this._storedCSS[i] = "");
            this.currentItem.css(this._storedCSS),
              this._removeClass(this.currentItem, "ui-sortable-helper");
          } else this.currentItem.show();
          function s(t, e, i) {
            return function (n) {
              i._trigger(t, n, e._uiHash(e));
            };
          }
          for (
            this.fromOutside &&
              !e &&
              n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
              }),
              (!this.fromOutside &&
                this.domPosition.prev ===
                  this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                this.domPosition.parent === this.currentItem.parent()[0]) ||
                e ||
                n.push(function (t) {
                  this._trigger("update", t, this._uiHash());
                }),
              this !== this.currentContainer &&
                (e ||
                  (n.push(function (t) {
                    this._trigger("remove", t, this._uiHash());
                  }),
                  n.push(
                    function (t) {
                      return function (e) {
                        t._trigger("receive", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ),
                  n.push(
                    function (t) {
                      return function (e) {
                        t._trigger("update", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ))),
              i = this.containers.length - 1;
            i >= 0;
            i--
          )
            e || n.push(s("deactivate", this, this.containers[i])),
              this.containers[i].containerCache.over &&
                (n.push(s("out", this, this.containers[i])),
                (this.containers[i].containerCache.over = 0));
          if (
            (this.storedCursor &&
              (this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()),
            this._storedOpacity &&
              this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex &&
              this.helper.css(
                "zIndex",
                "auto" === this._storedZIndex ? "" : this._storedZIndex
              ),
            (this.dragging = !1),
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval ||
              (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)),
            !e)
          ) {
            for (i = 0; i < n.length; i++) n[i].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !this.cancelHelperRemoval;
        },
        _trigger: function () {
          !1 === t.Widget.prototype._trigger.apply(this, arguments) &&
            this.cancel();
        },
        _uiHash: function (e) {
          var i = e || this;
          return {
            helper: i.helper,
            placeholder: i.placeholder || t([]),
            position: i.position,
            originalPosition: i.originalPosition,
            offset: i.positionAbs,
            item: i.currentItem,
            sender: e ? e.element : null,
          };
        },
      });
    function b(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    t.widget("ui.spinner", {
      version: "1.12.1",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        classes: {
          "ui-spinner": "ui-corner-all",
          "ui-spinner-down": "ui-corner-br",
          "ui-spinner-up": "ui-corner-tr",
        },
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          "" !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var e = this._super(),
          i = this.element;
        return (
          t.each(["min", "max", "step"], function (t, n) {
            var s = i.attr(n);
            null != s && s.length && (e[n] = s);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          this.cancelBlur
            ? delete this.cancelBlur
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger("change", t));
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (e) {
          var i;
          function n() {
            this.element[0] === t.ui.safeActiveElement(this.document[0]) ||
              (this.element.trigger("focus"),
              (this.previous = i),
              this._delay(function () {
                this.previous = i;
              }));
          }
          (i =
            this.element[0] === t.ui.safeActiveElement(this.document[0])
              ? this.previous
              : this.element.val()),
            e.preventDefault(),
            n.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, n.call(this);
            }),
            !1 !== this._start(e) &&
              this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              );
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (e) {
          if (t(e.currentTarget).hasClass("ui-state-active"))
            return (
              !1 !== this._start(e) &&
              void this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              )
            );
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _enhance: function () {
        this.uiSpinner = this.element
          .attr("autocomplete", "off")
          .wrap("<span>")
          .parent()
          .append("<a></a><a></a>");
      },
      _draw: function () {
        this._enhance(),
          this._addClass(
            this.uiSpinner,
            "ui-spinner",
            "ui-widget ui-widget-content"
          ),
          this._addClass("ui-spinner-input"),
          this.element.attr("role", "spinbutton"),
          (this.buttons = this.uiSpinner
            .children("a")
            .attr("tabIndex", -1)
            .attr("aria-hidden", !0)
            .button({ classes: { "ui-button": "" } })),
          this._removeClass(this.buttons, "ui-corner-all"),
          this._addClass(
            this.buttons.first(),
            "ui-spinner-button ui-spinner-up"
          ),
          this._addClass(
            this.buttons.last(),
            "ui-spinner-button ui-spinner-down"
          ),
          this.buttons
            .first()
            .button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons
            .last()
            .button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            this.uiSpinner.height() > 0 &&
            this.uiSpinner.height(this.uiSpinner.height());
      },
      _keydown: function (e) {
        var i = this.options,
          n = t.ui.keyCode;
        switch (e.keyCode) {
          case n.UP:
            return this._repeat(null, 1, e), !0;
          case n.DOWN:
            return this._repeat(null, -1, e), !0;
          case n.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case n.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _start: function (t) {
        return (
          !(!this.spinning && !1 === this._trigger("start", t)) &&
          (this.counter || (this.counter = 1), (this.spinning = !0), !0)
        );
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
            (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i
          ? t.isFunction(i)
            ? i(e)
            : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          n = this.options;
        return (
          (i = t - (e = null !== n.min ? n.min : 0)),
          (t = e + (i = Math.round(i / n.step) * n.step)),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== n.max && t > n.max
            ? n.max
            : null !== n.min && t < n.min
            ? n.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        var i, n, s;
        if ("culture" === t || "numberFormat" === t)
          return (
            (i = this._parse(this.element.val())),
            (this.options[t] = e),
            void this.element.val(this._format(i))
          );
        ("max" !== t && "min" !== t && "step" !== t) ||
          ("string" == typeof e && (e = this._parse(e))),
          "icons" === t &&
            ((n = this.buttons.first().find(".ui-icon")),
            this._removeClass(n, null, this.options.icons.up),
            this._addClass(n, null, e.up),
            (s = this.buttons.last().find(".ui-icon")),
            this._removeClass(s, null, this.options.icons.down),
            this._addClass(s, null, e.down)),
          this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
          this.element.prop("disabled", !!t),
          this.buttons.button(t ? "disable" : "enable");
      },
      _setOptions: b(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null !== t && t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        "" !== t &&
          null !== (i = this._parse(t)) &&
          (e || (i = this._adjustValue(i)), (t = this._format(i))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .prop("disabled", !1)
          .removeAttr(
            "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
          ),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: b(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: b(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: b(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: b(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        if (!arguments.length) return this._parse(this.element.val());
        b(this._value).call(this, t);
      },
      widget: function () {
        return this.uiSpinner;
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.spinner", t.ui.spinner, {
          _enhance: function () {
            this.uiSpinner = this.element
              .attr("autocomplete", "off")
              .wrap(this._uiSpinnerHtml())
              .parent()
              .append(this._buttonHtml());
          },
          _uiSpinnerHtml: function () {
            return "<span>";
          },
          _buttonHtml: function () {
            return "<a></a><a></a>";
          },
        });
    var _;
    t.ui.spinner;
    t.widget("ui.tabs", {
      version: "1.12.1",
      delay: 300,
      options: {
        active: null,
        classes: {
          "ui-tabs": "ui-corner-all",
          "ui-tabs-nav": "ui-corner-all",
          "ui-tabs-panel": "ui-corner-bottom",
          "ui-tabs-tab": "ui-corner-top",
        },
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _isLocal:
        ((_ = /#.*$/),
        function (t) {
          var e, i;
          (e = t.href.replace(_, "")), (i = location.href.replace(_, ""));
          try {
            e = decodeURIComponent(e);
          } catch (t) {}
          try {
            i = decodeURIComponent(i);
          } catch (t) {}
          return t.hash.length > 1 && e === i;
        }),
      _create: function () {
        var e = this,
          i = this.options;
        (this.running = !1),
          this._addClass("ui-tabs", "ui-widget ui-widget-content"),
          this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          !1 !== this.options.active && this.anchors.length
            ? (this.active = this._findActive(i.active))
            : (this.active = t()),
          this._refresh(),
          this.active.length && this.load(i.active);
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          n = location.hash.substring(1);
        return (
          null === e &&
            (n &&
              this.tabs.each(function (i, s) {
                if (t(s).attr("aria-controls") === n) return (e = i), !1;
              }),
            null === e &&
              (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null !== e && -1 !== e) || (e = !!this.tabs.length && 0)),
          !1 !== e &&
            -1 === (e = this.tabs.index(this.tabs.eq(e))) &&
            (e = !i && 0),
          !i && !1 === e && this.anchors.length && (e = 0),
          e
        );
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t(),
        };
      },
      _tabKeydown: function (e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          n = this.tabs.index(i),
          s = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              n++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              (s = !1), n--;
              break;
            case t.ui.keyCode.END:
              n = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              n = 0;
              break;
            case t.ui.keyCode.SPACE:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(n)
              );
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(n !== this.options.active && n)
              );
            default:
              return;
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (n = this._focusNextTab(n, s)),
            e.ctrlKey ||
              e.metaKey ||
              (i.attr("aria-selected", "false"),
              this.tabs.eq(n).attr("aria-selected", "true"),
              (this.activating = this._delay(function () {
                this.option("active", n);
              }, this.delay)));
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey &&
            e.keyCode === t.ui.keyCode.UP &&
            (e.preventDefault(), this.active.trigger("focus")));
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0;
      },
      _findNextTab: function (e, i) {
        var n = this.tabs.length - 1;
        for (
          ;
          -1 !==
          t.inArray(
            (e > n && (e = 0), e < 0 && (e = n), e),
            this.options.disabled
          );

        )
          e = i ? e + 1 : e - 1;
        return e;
      },
      _focusNextTab: function (t, e) {
        return (
          (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t
        );
      },
      _setOption: function (t, e) {
        "active" !== t
          ? (this._super(t, e),
            "collapsible" === t &&
              (this._toggleClass("ui-tabs-collapsible", null, e),
              e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e))
          : this._activate(e);
      },
      _sanitizeSelector: function (t) {
        return t
          ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
          : "";
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(":has(a[href])");
        (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t);
        })),
          this._processTabs(),
          !1 !== e.active && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(
                    this._findNextTab(Math.max(0, e.active - 1), !1)
                  )
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh();
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ "aria-hidden": "true" }),
          this.active.length
            ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              }),
              this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
              this._getPanelForTab(this.active)
                .show()
                .attr({ "aria-hidden": "false" }))
            : this.tabs.eq(0).attr("tabIndex", 0);
      },
      _processTabs: function () {
        var e = this,
          i = this.tabs,
          n = this.anchors,
          s = this.panels;
        (this.tablist = this._getList().attr("role", "tablist")),
          this._addClass(
            this.tablist,
            "ui-tabs-nav",
            "ui-helper-reset ui-helper-clearfix ui-widget-header"
          ),
          this.tablist
            .on("mousedown" + this.eventNamespace, "> li", function (e) {
              t(this).is(".ui-state-disabled") && e.preventDefault();
            })
            .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
              t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }),
          (this.tabs = this.tablist
            .find("> li:has(a[href])")
            .attr({ role: "tab", tabIndex: -1 })),
          this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
          (this.anchors = this.tabs
            .map(function () {
              return t("a", this)[0];
            })
            .attr({ role: "presentation", tabIndex: -1 })),
          this._addClass(this.anchors, "ui-tabs-anchor"),
          (this.panels = t()),
          this.anchors.each(function (i, n) {
            var s,
              o,
              a,
              r = t(n).uniqueId().attr("id"),
              l = t(n).closest("li"),
              c = l.attr("aria-controls");
            e._isLocal(n)
              ? ((a = (s = n.hash).substring(1)),
                (o = e.element.find(e._sanitizeSelector(s))))
              : ((s =
                  "#" +
                  (a = l.attr("aria-controls") || t({}).uniqueId()[0].id)),
                (o = e.element.find(s)).length ||
                  (o = e._createPanel(a)).insertAfter(
                    e.panels[i - 1] || e.tablist
                  ),
                o.attr("aria-live", "polite")),
              o.length && (e.panels = e.panels.add(o)),
              c && l.data("ui-tabs-aria-controls", c),
              l.attr({ "aria-controls": a, "aria-labelledby": r }),
              o.attr("aria-labelledby", r);
          }),
          this.panels.attr("role", "tabpanel"),
          this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
          i &&
            (this._off(i.not(this.tabs)),
            this._off(n.not(this.anchors)),
            this._off(s.not(this.panels)));
      },
      _getList: function () {
        return this.tablist || this.element.find("ol, ul").eq(0);
      },
      _createPanel: function (e) {
        return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
      },
      _setOptionDisabled: function (e) {
        var i, n, s;
        for (
          t.isArray(e) &&
            (e.length
              ? e.length === this.anchors.length && (e = !0)
              : (e = !1)),
            s = 0;
          (n = this.tabs[s]);
          s++
        )
          (i = t(n)),
            !0 === e || -1 !== t.inArray(s, e)
              ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled"))
              : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
        (this.options.disabled = e),
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !0 === e
          );
      },
      _setupEvents: function (e) {
        var i = {};
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault();
            },
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: "_tabKeydown" }),
          this._on(this.panels, { keydown: "_panelKeydown" }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (e) {
        var i,
          n = this.element.parent();
        "fill" === e
          ? ((i = n.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function () {
              var e = t(this),
                n = e.css("position");
              "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                t(this).height(
                  Math.max(0, i - t(this).innerHeight() + t(this).height())
                );
              })
              .css("overflow", "auto"))
          : "auto" === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, t(this).height("").height());
              })
              .height(i));
      },
      _eventHandler: function (e) {
        var i = this.options,
          n = this.active,
          s = t(e.currentTarget).closest("li"),
          o = s[0] === n[0],
          a = o && i.collapsible,
          r = a ? t() : this._getPanelForTab(s),
          l = n.length ? this._getPanelForTab(n) : t(),
          c = { oldTab: n, oldPanel: l, newTab: a ? t() : s, newPanel: r };
        e.preventDefault(),
          s.hasClass("ui-state-disabled") ||
            s.hasClass("ui-tabs-loading") ||
            this.running ||
            (o && !i.collapsible) ||
            !1 === this._trigger("beforeActivate", e, c) ||
            ((i.active = !a && this.tabs.index(s)),
            (this.active = o ? t() : s),
            this.xhr && this.xhr.abort(),
            l.length ||
              r.length ||
              t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            r.length && this.load(this.tabs.index(s), e),
            this._toggle(e, c));
      },
      _toggle: function (e, i) {
        var n = this,
          s = i.newPanel,
          o = i.oldPanel;
        function a() {
          (n.running = !1), n._trigger("activate", e, i);
        }
        function r() {
          n._addClass(
            i.newTab.closest("li"),
            "ui-tabs-active",
            "ui-state-active"
          ),
            s.length && n.options.show
              ? n._show(s, n.options.show, a)
              : (s.show(), a());
        }
        (this.running = !0),
          o.length && this.options.hide
            ? this._hide(o, this.options.hide, function () {
                n._removeClass(
                  i.oldTab.closest("li"),
                  "ui-tabs-active",
                  "ui-state-active"
                ),
                  r();
              })
            : (this._removeClass(
                i.oldTab.closest("li"),
                "ui-tabs-active",
                "ui-state-active"
              ),
              o.hide(),
              r()),
          o.attr("aria-hidden", "true"),
          i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
          s.length && o.length
            ? i.oldTab.attr("tabIndex", -1)
            : s.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr("tabIndex");
                })
                .attr("tabIndex", -1),
          s.attr("aria-hidden", "false"),
          i.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0,
          });
      },
      _activate: function (e) {
        var i,
          n = this._findActive(e);
        n[0] !== this.active[0] &&
          (n.length || (n = this.active),
          (i = n.find(".ui-tabs-anchor")[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop,
          }));
      },
      _findActive: function (e) {
        return !1 === e ? t() : this.tabs.eq(e);
      },
      _getIndex: function (e) {
        return (
          "string" == typeof e &&
            (e = this.anchors.index(
              this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']")
            )),
          e
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.tablist.removeAttr("role").off(this.eventNamespace),
          this.anchors.removeAttr("role tabIndex").removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            t.data(this, "ui-tabs-destroy")
              ? t(this).remove()
              : t(this).removeAttr(
                  "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
                );
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data("ui-tabs-aria-controls");
            i
              ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
              : e.removeAttr("aria-controls");
          }),
          this.panels.show(),
          "content" !== this.options.heightStyle &&
            this.panels.css("height", "");
      },
      enable: function (e) {
        var i = this.options.disabled;
        !1 !== i &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null;
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null;
                  }))),
          this._setOptionDisabled(i));
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (!0 !== i) {
          if (void 0 === e) i = !0;
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e];
          }
          this._setOptionDisabled(i);
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var n = this,
          s = this.tabs.eq(e),
          o = s.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(s),
          r = { tab: s, panel: a },
          l = function (t, e) {
            "abort" === e && n.panels.stop(!1, !0),
              n._removeClass(s, "ui-tabs-loading"),
              a.removeAttr("aria-busy"),
              t === n.xhr && delete n.xhr;
          };
        this._isLocal(o[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (this._addClass(s, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr
              .done(function (t, e, s) {
                setTimeout(function () {
                  a.html(t), n._trigger("load", i, r), l(s, e);
                }, 1);
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  l(t, e);
                }, 1);
              })));
      },
      _ajaxSettings: function (e, i, n) {
        var s = this;
        return {
          url: e.attr("href").replace(/#.*$/, ""),
          beforeSend: function (e, o) {
            return s._trigger(
              "beforeLoad",
              i,
              t.extend({ jqXHR: e, ajaxSettings: o }, n)
            );
          },
        };
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i));
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.tabs", t.ui.tabs, {
          _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
          },
        });
    t.ui.tabs;
    t.widget("ui.tooltip", {
      version: "1.12.1",
      options: {
        classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
        content: function () {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html();
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip",
        },
        show: !0,
        track: !1,
        close: null,
        open: null,
      },
      _addDescribedBy: function (e, i) {
        var n = (e.attr("aria-describedby") || "").split(/\s+/);
        n.push(i),
          e
            .data("ui-tooltip-id", i)
            .attr("aria-describedby", t.trim(n.join(" ")));
      },
      _removeDescribedBy: function (e) {
        var i = e.data("ui-tooltip-id"),
          n = (e.attr("aria-describedby") || "").split(/\s+/),
          s = t.inArray(i, n);
        -1 !== s && n.splice(s, 1),
          e.removeData("ui-tooltip-id"),
          (n = t.trim(n.join(" ")))
            ? e.attr("aria-describedby", n)
            : e.removeAttr("aria-describedby");
      },
      _create: function () {
        this._on({ mouseover: "open", focusin: "open" }),
          (this.tooltips = {}),
          (this.parents = {}),
          (this.liveRegion = t("<div>")
            .attr({
              role: "log",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
            .appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          (this.disabledTitles = t([]));
      },
      _setOption: function (e, i) {
        var n = this;
        this._super(e, i),
          "content" === e &&
            t.each(this.tooltips, function (t, e) {
              n._updateContent(e.element);
            });
      },
      _setOptionDisabled: function (t) {
        this[t ? "_disable" : "_enable"]();
      },
      _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, n) {
          var s = t.Event("blur");
          (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
        }),
          (this.disabledTitles = this.disabledTitles.add(
            this.element
              .find(this.options.items)
              .addBack()
              .filter(function () {
                var e = t(this);
                if (e.is("[title]"))
                  return e
                    .data("ui-tooltip-title", e.attr("title"))
                    .removeAttr("title");
              })
          ));
      },
      _enable: function () {
        this.disabledTitles.each(function () {
          var e = t(this);
          e.data("ui-tooltip-title") &&
            e.attr("title", e.data("ui-tooltip-title"));
        }),
          (this.disabledTitles = t([]));
      },
      open: function (e) {
        var i = this,
          n = t(e ? e.target : this.element).closest(this.options.items);
        n.length &&
          !n.data("ui-tooltip-id") &&
          (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
          n.data("ui-tooltip-open", !0),
          e &&
            "mouseover" === e.type &&
            n.parents().each(function () {
              var e,
                n = t(this);
              n.data("ui-tooltip-open") &&
                (((e = t.Event("blur")).target = e.currentTarget = this),
                i.close(e, !0)),
                n.attr("title") &&
                  (n.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: n.attr("title"),
                  }),
                  n.attr("title", ""));
            }),
          this._registerCloseHandlers(e, n),
          this._updateContent(n, e));
      },
      _updateContent: function (t, e) {
        var i,
          n = this.options.content,
          s = this,
          o = e ? e.type : null;
        if ("string" == typeof n || n.nodeType || n.jquery)
          return this._open(e, t, n);
        (i = n.call(t[0], function (i) {
          s._delay(function () {
            t.data("ui-tooltip-open") &&
              (e && (e.type = o), this._open(e, t, i));
          });
        })) && this._open(e, t, i);
      },
      _open: function (e, i, n) {
        var s,
          o,
          a,
          r,
          l = t.extend({}, this.options.position);
        function c(t) {
          (l.of = t), o.is(":hidden") || o.position(l);
        }
        n &&
          ((s = this._find(i))
            ? s.tooltip.find(".ui-tooltip-content").html(n)
            : (i.is("[title]") &&
                (e && "mouseover" === e.type
                  ? i.attr("title", "")
                  : i.removeAttr("title")),
              (s = this._tooltip(i)),
              (o = s.tooltip),
              this._addDescribedBy(i, o.attr("id")),
              o.find(".ui-tooltip-content").html(n),
              this.liveRegion.children().hide(),
              (r = t("<div>").html(o.find(".ui-tooltip-content").html()))
                .removeAttr("name")
                .find("[name]")
                .removeAttr("name"),
              r.removeAttr("id").find("[id]").removeAttr("id"),
              r.appendTo(this.liveRegion),
              this.options.track && e && /^mouse/.test(e.type)
                ? (this._on(this.document, { mousemove: c }), c(e))
                : o.position(t.extend({ of: i }, this.options.position)),
              o.hide(),
              this._show(o, this.options.show),
              this.options.track &&
                this.options.show &&
                this.options.show.delay &&
                (a = this.delayedShow = setInterval(function () {
                  o.is(":visible") && (c(l.of), clearInterval(a));
                }, t.fx.interval)),
              this._trigger("open", e, { tooltip: o })));
      },
      _registerCloseHandlers: function (e, i) {
        var n = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var n = t.Event(e);
              (n.currentTarget = i[0]), this.close(n, !0);
            }
          },
        };
        i[0] !== this.element[0] &&
          (n.remove = function () {
            this._removeTooltip(this._find(i).tooltip);
          }),
          (e && "mouseover" !== e.type) || (n.mouseleave = "close"),
          (e && "focusin" !== e.type) || (n.focusout = "close"),
          this._on(!0, i, n);
      },
      close: function (e) {
        var i,
          n = this,
          s = t(e ? e.currentTarget : this.element),
          o = this._find(s);
        o
          ? ((i = o.tooltip),
            o.closing ||
              (clearInterval(this.delayedShow),
              s.data("ui-tooltip-title") &&
                !s.attr("title") &&
                s.attr("title", s.data("ui-tooltip-title")),
              this._removeDescribedBy(s),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                n._removeTooltip(t(this));
              }),
              s.removeData("ui-tooltip-open"),
              this._off(s, "mouseleave focusout keyup"),
              s[0] !== this.element[0] && this._off(s, "remove"),
              this._off(this.document, "mousemove"),
              e &&
                "mouseleave" === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr("title", i.title), delete n.parents[e];
                }),
              (o.closing = !0),
              this._trigger("close", e, { tooltip: i }),
              o.hiding || (o.closing = !1)))
          : s.removeData("ui-tooltip-open");
      },
      _tooltip: function (e) {
        var i = t("<div>").attr("role", "tooltip"),
          n = t("<div>").appendTo(i),
          s = i.uniqueId().attr("id");
        return (
          this._addClass(n, "ui-tooltip-content"),
          this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
          i.appendTo(this._appendTo(e)),
          (this.tooltips[s] = { element: e, tooltip: i })
        );
      },
      _find: function (t) {
        var e = t.data("ui-tooltip-id");
        return e ? this.tooltips[e] : null;
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")];
      },
      _appendTo: function (t) {
        var e = t.closest(".ui-front, dialog");
        return e.length || (e = this.document[0].body), e;
      },
      _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, n) {
          var s = t.Event("blur"),
            o = n.element;
          (s.target = s.currentTarget = o[0]),
            e.close(s, !0),
            t("#" + i).remove(),
            o.data("ui-tooltip-title") &&
              (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
              o.removeData("ui-tooltip-title"));
        }),
          this.liveRegion.remove();
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.tooltip", t.ui.tooltip, {
          options: { tooltipClass: null },
          _tooltip: function () {
            var t = this._superApply(arguments);
            return (
              this.options.tooltipClass &&
                t.tooltip.addClass(this.options.tooltipClass),
              t
            );
          },
        });
    t.ui.tooltip;
  }),
  (function (t) {
    var e = !0;
    (t.flexslider = function (i, n) {
      var s = t(i);
      void 0 === n.rtl && "rtl" == t("html").attr("dir") && (n.rtl = !0),
        (s.vars = t.extend({}, t.flexslider.defaults, n));
      var o,
        a = s.vars.namespace,
        r =
          window.navigator &&
          window.navigator.msPointerEnabled &&
          window.MSGesture,
        l =
          ("ontouchstart" in window ||
            r ||
            (window.DocumentTouch && document instanceof DocumentTouch)) &&
          s.vars.touch,
        c = "click touchend MSPointerUp keyup",
        h = "",
        u = "vertical" === s.vars.direction,
        d = s.vars.reverse,
        p = s.vars.itemWidth > 0,
        f = "fade" === s.vars.animation,
        m = "" !== s.vars.asNavFor,
        g = {};
      t.data(i, "flexslider", s),
        (g = {
          init: function () {
            (s.animating = !1),
              (s.currentSlide = parseInt(
                s.vars.startAt ? s.vars.startAt : 0,
                10
              )),
              isNaN(s.currentSlide) && (s.currentSlide = 0),
              (s.animatingTo = s.currentSlide),
              (s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last),
              (s.containerSelector = s.vars.selector.substr(
                0,
                s.vars.selector.search(" ")
              )),
              (s.slides = t(s.vars.selector, s)),
              (s.container = t(s.containerSelector, s)),
              (s.count = s.slides.length),
              (s.syncExists = t(s.vars.sync).length > 0),
              "slide" === s.vars.animation && (s.vars.animation = "swing"),
              (s.prop = u ? "top" : s.vars.rtl ? "marginRight" : "marginLeft"),
              (s.args = {}),
              (s.manualPause = !1),
              (s.stopped = !1),
              (s.started = !1),
              (s.startTimeout = null),
              (s.transitions =
                !s.vars.video &&
                !f &&
                s.vars.useCSS &&
                (function () {
                  var t = document.createElement("div"),
                    e = [
                      "perspectiveProperty",
                      "WebkitPerspective",
                      "MozPerspective",
                      "OPerspective",
                      "msPerspective",
                    ];
                  for (var i in e)
                    if (void 0 !== t.style[e[i]])
                      return (
                        (s.pfx = e[i].replace("Perspective", "").toLowerCase()),
                        (s.prop = "-" + s.pfx + "-transform"),
                        !0
                      );
                  return !1;
                })()),
              (s.isFirefox =
                navigator.userAgent.toLowerCase().indexOf("firefox") > -1),
              (s.ensureAnimationEnd = ""),
              "" !== s.vars.controlsContainer &&
                (s.controlsContainer =
                  t(s.vars.controlsContainer).length > 0 &&
                  t(s.vars.controlsContainer)),
              "" !== s.vars.manualControls &&
                (s.manualControls =
                  t(s.vars.manualControls).length > 0 &&
                  t(s.vars.manualControls)),
              "" !== s.vars.customDirectionNav &&
                (s.customDirectionNav =
                  2 === t(s.vars.customDirectionNav).length &&
                  t(s.vars.customDirectionNav)),
              s.vars.randomize &&
                (s.slides.sort(function () {
                  return Math.round(Math.random()) - 0.5;
                }),
                s.container.empty().append(s.slides)),
              s.doMath(),
              s.setup("init"),
              s.vars.controlNav && g.controlNav.setup(),
              s.vars.directionNav && g.directionNav.setup(),
              s.vars.keyboard &&
                (1 === t(s.containerSelector).length ||
                  s.vars.multipleKeyboard) &&
                t(document).bind("keyup", function (t) {
                  var e = t.keyCode;
                  if (!s.animating && (39 === e || 37 === e)) {
                    var i = s.vars.rtl
                      ? 37 === e
                        ? s.getTarget("next")
                        : 39 === e && s.getTarget("prev")
                      : 39 === e
                      ? s.getTarget("next")
                      : 37 === e && s.getTarget("prev");
                    s.flexAnimate(i, s.vars.pauseOnAction);
                  }
                }),
              s.vars.mousewheel &&
                s.bind("mousewheel", function (t, e, i, n) {
                  t.preventDefault();
                  var o = e < 0 ? s.getTarget("next") : s.getTarget("prev");
                  s.flexAnimate(o, s.vars.pauseOnAction);
                }),
              s.vars.pausePlay && g.pausePlay.setup(),
              s.vars.slideshow &&
                s.vars.pauseInvisible &&
                g.pauseInvisible.init(),
              s.vars.slideshow &&
                (s.vars.pauseOnHover &&
                  s.hover(
                    function () {
                      s.manualPlay || s.manualPause || s.pause();
                    },
                    function () {
                      s.manualPause || s.manualPlay || s.stopped || s.play();
                    }
                  ),
                (s.vars.pauseInvisible && g.pauseInvisible.isHidden()) ||
                  (s.vars.initDelay > 0
                    ? (s.startTimeout = setTimeout(s.play, s.vars.initDelay))
                    : s.play())),
              m && g.asNav.setup(),
              l && s.vars.touch && g.touch(),
              (!f || (f && s.vars.smoothHeight)) &&
                t(window).bind("resize orientationchange focus", g.resize),
              s.find("img").attr("draggable", "false"),
              setTimeout(function () {
                s.vars.start(s);
              }, 200);
          },
          asNav: {
            setup: function () {
              (s.asNav = !0),
                (s.animatingTo = Math.floor(s.currentSlide / s.move)),
                (s.currentItem = s.currentSlide),
                s.slides
                  .removeClass(a + "active-slide")
                  .eq(s.currentItem)
                  .addClass(a + "active-slide"),
                r
                  ? ((i._slider = s),
                    s.slides.each(function () {
                      (this._gesture = new MSGesture()),
                        (this._gesture.target = this),
                        this.addEventListener(
                          "MSPointerDown",
                          function (t) {
                            t.preventDefault(),
                              t.currentTarget._gesture &&
                                t.currentTarget._gesture.addPointer(
                                  t.pointerId
                                );
                          },
                          !1
                        ),
                        this.addEventListener("MSGestureTap", function (e) {
                          e.preventDefault();
                          var i = t(this),
                            n = i.index();
                          t(s.vars.asNavFor).data("flexslider").animating ||
                            i.hasClass("active") ||
                            ((s.direction =
                              s.currentItem < n ? "next" : "prev"),
                            s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0));
                        });
                    }))
                  : s.slides.on(c, function (e) {
                      e.preventDefault();
                      var i = t(this),
                        n = i.index();
                      (s.vars.rtl
                        ? -1 * (i.offset().right - t(s).scrollLeft())
                        : i.offset().left - t(s).scrollLeft()) <= 0 &&
                      i.hasClass(a + "active-slide")
                        ? s.flexAnimate(s.getTarget("prev"), !0)
                        : t(s.vars.asNavFor).data("flexslider").animating ||
                          i.hasClass(a + "active-slide") ||
                          ((s.direction = s.currentItem < n ? "next" : "prev"),
                          s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0));
                    });
            },
          },
          controlNav: {
            setup: function () {
              s.manualControls
                ? g.controlNav.setupManual()
                : g.controlNav.setupPaging();
            },
            setupPaging: function () {
              var e,
                i,
                n =
                  "thumbnails" === s.vars.controlNav
                    ? "control-thumbs"
                    : "control-paging",
                o = 1;
              if (
                ((s.controlNavScaffold = t(
                  '<ol class="' + a + "control-nav " + a + n + '"></ol>'
                )),
                s.pagingCount > 1)
              )
                for (var r = 0; r < s.pagingCount; r++) {
                  void 0 === (i = s.slides.eq(r)).attr("data-thumb-alt") &&
                    i.attr("data-thumb-alt", "");
                  var l =
                    "" !== i.attr("data-thumb-alt")
                      ? (l = ' alt="' + i.attr("data-thumb-alt") + '"')
                      : "";
                  if (
                    ((e =
                      "thumbnails" === s.vars.controlNav
                        ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>"
                        : '<a href="#">' + o + "</a>"),
                    "thumbnails" === s.vars.controlNav &&
                      !0 === s.vars.thumbCaptions)
                  ) {
                    var u = i.attr("data-thumbcaption");
                    "" !== u &&
                      void 0 !== u &&
                      (e += '<span class="' + a + 'caption">' + u + "</span>");
                  }
                  s.controlNavScaffold.append("<li>" + e + "</li>"), o++;
                }
              s.controlsContainer
                ? t(s.controlsContainer).append(s.controlNavScaffold)
                : s.append(s.controlNavScaffold),
                g.controlNav.set(),
                g.controlNav.active(),
                s.controlNavScaffold.delegate("a, img", c, function (e) {
                  if ((e.preventDefault(), "" === h || h === e.type)) {
                    var i = t(this),
                      n = s.controlNav.index(i);
                    i.hasClass(a + "active") ||
                      ((s.direction = n > s.currentSlide ? "next" : "prev"),
                      s.flexAnimate(n, s.vars.pauseOnAction));
                  }
                  "" === h && (h = e.type), g.setToClearWatchedEvent();
                });
            },
            setupManual: function () {
              (s.controlNav = s.manualControls),
                g.controlNav.active(),
                s.controlNav.bind(c, function (e) {
                  if ((e.preventDefault(), "" === h || h === e.type)) {
                    var i = t(this),
                      n = s.controlNav.index(i);
                    i.hasClass(a + "active") ||
                      (n > s.currentSlide
                        ? (s.direction = "next")
                        : (s.direction = "prev"),
                      s.flexAnimate(n, s.vars.pauseOnAction));
                  }
                  "" === h && (h = e.type), g.setToClearWatchedEvent();
                });
            },
            set: function () {
              var e = "thumbnails" === s.vars.controlNav ? "img" : "a";
              s.controlNav = t(
                "." + a + "control-nav li " + e,
                s.controlsContainer ? s.controlsContainer : s
              );
            },
            active: function () {
              s.controlNav
                .removeClass(a + "active")
                .eq(s.animatingTo)
                .addClass(a + "active");
            },
            update: function (e, i) {
              s.pagingCount > 1 && "add" === e
                ? s.controlNavScaffold.append(
                    t('<li><a href="#">' + s.count + "</a></li>")
                  )
                : 1 === s.pagingCount
                ? s.controlNavScaffold.find("li").remove()
                : s.controlNav.eq(i).closest("li").remove(),
                g.controlNav.set(),
                s.pagingCount > 1 && s.pagingCount !== s.controlNav.length
                  ? s.update(i, e)
                  : g.controlNav.active();
            },
          },
          directionNav: {
            setup: function () {
              var e = t(
                '<ul class="' +
                  a +
                  'direction-nav"><li class="' +
                  a +
                  'nav-prev"><a class="' +
                  a +
                  'prev" href="#">' +
                  s.vars.prevText +
                  '</a></li><li class="' +
                  a +
                  'nav-next"><a class="' +
                  a +
                  'next" href="#">' +
                  s.vars.nextText +
                  "</a></li></ul>"
              );
              s.customDirectionNav
                ? (s.directionNav = s.customDirectionNav)
                : s.controlsContainer
                ? (t(s.controlsContainer).append(e),
                  (s.directionNav = t(
                    "." + a + "direction-nav li a",
                    s.controlsContainer
                  )))
                : (s.append(e),
                  (s.directionNav = t("." + a + "direction-nav li a", s))),
                g.directionNav.update(),
                s.directionNav.bind(c, function (e) {
                  var i;
                  e.preventDefault(),
                    ("" !== h && h !== e.type) ||
                      ((i = t(this).hasClass(a + "next")
                        ? s.getTarget("next")
                        : s.getTarget("prev")),
                      s.flexAnimate(i, s.vars.pauseOnAction)),
                    "" === h && (h = e.type),
                    g.setToClearWatchedEvent();
                });
            },
            update: function () {
              var t = a + "disabled";
              1 === s.pagingCount
                ? s.directionNav.addClass(t).attr("tabindex", "-1")
                : s.vars.animationLoop
                ? s.directionNav.removeClass(t).removeAttr("tabindex")
                : 0 === s.animatingTo
                ? s.directionNav
                    .removeClass(t)
                    .filter("." + a + "prev")
                    .addClass(t)
                    .attr("tabindex", "-1")
                : s.animatingTo === s.last
                ? s.directionNav
                    .removeClass(t)
                    .filter("." + a + "next")
                    .addClass(t)
                    .attr("tabindex", "-1")
                : s.directionNav.removeClass(t).removeAttr("tabindex");
            },
          },
          pausePlay: {
            setup: function () {
              var e = t(
                '<div class="' + a + 'pauseplay"><a href="#"></a></div>'
              );
              s.controlsContainer
                ? (s.controlsContainer.append(e),
                  (s.pausePlay = t(
                    "." + a + "pauseplay a",
                    s.controlsContainer
                  )))
                : (s.append(e), (s.pausePlay = t("." + a + "pauseplay a", s))),
                g.pausePlay.update(s.vars.slideshow ? a + "pause" : a + "play"),
                s.pausePlay.bind(c, function (e) {
                  e.preventDefault(),
                    ("" !== h && h !== e.type) ||
                      (t(this).hasClass(a + "pause")
                        ? ((s.manualPause = !0), (s.manualPlay = !1), s.pause())
                        : ((s.manualPause = !1),
                          (s.manualPlay = !0),
                          s.play())),
                    "" === h && (h = e.type),
                    g.setToClearWatchedEvent();
                });
            },
            update: function (t) {
              "play" === t
                ? s.pausePlay
                    .removeClass(a + "pause")
                    .addClass(a + "play")
                    .html(s.vars.playText)
                : s.pausePlay
                    .removeClass(a + "play")
                    .addClass(a + "pause")
                    .html(s.vars.pauseText);
            },
          },
          touch: function () {
            var t,
              e,
              n,
              o,
              a,
              l,
              c,
              h,
              m,
              g = !1,
              v = 0,
              b = 0,
              _ = 0;
            if (r) {
              (i.style.msTouchAction = "none"),
                (i._gesture = new MSGesture()),
                (i._gesture.target = i),
                i.addEventListener(
                  "MSPointerDown",
                  function (t) {
                    t.stopPropagation(),
                      s.animating
                        ? t.preventDefault()
                        : (s.pause(),
                          i._gesture.addPointer(t.pointerId),
                          (_ = 0),
                          (o = u ? s.h : s.w),
                          (l = Number(new Date())),
                          (n =
                            p && d && s.animatingTo === s.last
                              ? 0
                              : p && d
                              ? s.limit -
                                (s.itemW + s.vars.itemMargin) *
                                  s.move *
                                  s.animatingTo
                              : p && s.currentSlide === s.last
                              ? s.limit
                              : p
                              ? (s.itemW + s.vars.itemMargin) *
                                s.move *
                                s.currentSlide
                              : d
                              ? (s.last - s.currentSlide + s.cloneOffset) * o
                              : (s.currentSlide + s.cloneOffset) * o));
                  },
                  !1
                ),
                (i._slider = s),
                i.addEventListener(
                  "MSGestureChange",
                  function (t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (!e) return;
                    var s = -t.translationX,
                      r = -t.translationY;
                    if (
                      ((_ += u ? r : s),
                      (a = (e.vars.rtl ? -1 : 1) * _),
                      (g = u
                        ? Math.abs(_) < Math.abs(-s)
                        : Math.abs(_) < Math.abs(-r)),
                      t.detail === t.MSGESTURE_FLAG_INERTIA)
                    )
                      return void setImmediate(function () {
                        i._gesture.stop();
                      });
                    (!g || Number(new Date()) - l > 500) &&
                      (t.preventDefault(),
                      !f &&
                        e.transitions &&
                        (e.vars.animationLoop ||
                          (a =
                            _ /
                            ((0 === e.currentSlide && _ < 0) ||
                            (e.currentSlide === e.last && _ > 0)
                              ? Math.abs(_) / o + 2
                              : 1)),
                        e.setProps(n + a, "setTouch")));
                  },
                  !1
                ),
                i.addEventListener(
                  "MSGestureEnd",
                  function (i) {
                    i.stopPropagation();
                    var s = i.target._slider;
                    if (!s) return;
                    if (s.animatingTo === s.currentSlide && !g && null !== a) {
                      var r = d ? -a : a,
                        c = r > 0 ? s.getTarget("next") : s.getTarget("prev");
                      s.canAdvance(c) &&
                      ((Number(new Date()) - l < 550 && Math.abs(r) > 50) ||
                        Math.abs(r) > o / 2)
                        ? s.flexAnimate(c, s.vars.pauseOnAction)
                        : f ||
                          s.flexAnimate(
                            s.currentSlide,
                            s.vars.pauseOnAction,
                            !0
                          );
                    }
                    (t = null), (e = null), (a = null), (n = null), (_ = 0);
                  },
                  !1
                );
            } else
              (c = function (a) {
                s.animating
                  ? a.preventDefault()
                  : (window.navigator.msPointerEnabled ||
                      1 === a.touches.length) &&
                    (s.pause(),
                    (o = u ? s.h : s.w),
                    (l = Number(new Date())),
                    (v = a.touches[0].pageX),
                    (b = a.touches[0].pageY),
                    (n =
                      p && d && s.animatingTo === s.last
                        ? 0
                        : p && d
                        ? s.limit -
                          (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo
                        : p && s.currentSlide === s.last
                        ? s.limit
                        : p
                        ? (s.itemW + s.vars.itemMargin) *
                          s.move *
                          s.currentSlide
                        : d
                        ? (s.last - s.currentSlide + s.cloneOffset) * o
                        : (s.currentSlide + s.cloneOffset) * o),
                    (t = u ? b : v),
                    (e = u ? v : b),
                    i.addEventListener("touchmove", h, !1),
                    i.addEventListener("touchend", m, !1));
              }),
                (h = function (i) {
                  (v = i.touches[0].pageX),
                    (b = i.touches[0].pageY),
                    (a = u ? t - b : (s.vars.rtl ? -1 : 1) * (t - v));
                  (!(g = u
                    ? Math.abs(a) < Math.abs(v - e)
                    : Math.abs(a) < Math.abs(b - e)) ||
                    Number(new Date()) - l > 500) &&
                    (i.preventDefault(),
                    !f &&
                      s.transitions &&
                      (s.vars.animationLoop ||
                        (a /=
                          (0 === s.currentSlide && a < 0) ||
                          (s.currentSlide === s.last && a > 0)
                            ? Math.abs(a) / o + 2
                            : 1),
                      s.setProps(n + a, "setTouch")));
                }),
                (m = function (r) {
                  if (
                    (i.removeEventListener("touchmove", h, !1),
                    s.animatingTo === s.currentSlide && !g && null !== a)
                  ) {
                    var c = d ? -a : a,
                      u = c > 0 ? s.getTarget("next") : s.getTarget("prev");
                    s.canAdvance(u) &&
                    ((Number(new Date()) - l < 550 && Math.abs(c) > 50) ||
                      Math.abs(c) > o / 2)
                      ? s.flexAnimate(u, s.vars.pauseOnAction)
                      : f ||
                        s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0);
                  }
                  i.removeEventListener("touchend", m, !1),
                    (t = null),
                    (e = null),
                    (a = null),
                    (n = null);
                }),
                i.addEventListener("touchstart", c, !1);
          },
          resize: function () {
            !s.animating &&
              s.is(":visible") &&
              (p || s.doMath(),
              f
                ? g.smoothHeight()
                : p
                ? (s.slides.width(s.computedW),
                  s.update(s.pagingCount),
                  s.setProps())
                : u
                ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal"))
                : (s.vars.smoothHeight && g.smoothHeight(),
                  s.newSlides.width(s.computedW),
                  s.setProps(s.computedW, "setTotal")));
          },
          smoothHeight: function (t) {
            if (!u || f) {
              var e = f ? s : s.viewport;
              t
                ? e.animate(
                    { height: s.slides.eq(s.animatingTo).innerHeight() },
                    t
                  )
                : e.innerHeight(s.slides.eq(s.animatingTo).innerHeight());
            }
          },
          sync: function (e) {
            var i = t(s.vars.sync).data("flexslider"),
              n = s.animatingTo;
            switch (e) {
              case "animate":
                i.flexAnimate(n, s.vars.pauseOnAction, !1, !0);
                break;
              case "play":
                i.playing || i.asNav || i.play();
                break;
              case "pause":
                i.pause();
            }
          },
          uniqueID: function (e) {
            return (
              e
                .filter("[id]")
                .add(e.find("[id]"))
                .each(function () {
                  var e = t(this);
                  e.attr("id", e.attr("id") + "_clone");
                }),
              e
            );
          },
          pauseInvisible: {
            visProp: null,
            init: function () {
              var t = g.pauseInvisible.getHiddenProp();
              if (t) {
                var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                document.addEventListener(e, function () {
                  g.pauseInvisible.isHidden()
                    ? s.startTimeout
                      ? clearTimeout(s.startTimeout)
                      : s.pause()
                    : s.started
                    ? s.play()
                    : s.vars.initDelay > 0
                    ? setTimeout(s.play, s.vars.initDelay)
                    : s.play();
                });
              }
            },
            isHidden: function () {
              var t = g.pauseInvisible.getHiddenProp();
              return !!t && document[t];
            },
            getHiddenProp: function () {
              var t = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var e = 0; e < t.length; e++)
                if (t[e] + "Hidden" in document) return t[e] + "Hidden";
              return null;
            },
          },
          setToClearWatchedEvent: function () {
            clearTimeout(o),
              (o = setTimeout(function () {
                h = "";
              }, 3e3));
          },
        }),
        (s.flexAnimate = function (e, i, n, o, r) {
          if (
            (s.vars.animationLoop ||
              e === s.currentSlide ||
              (s.direction = e > s.currentSlide ? "next" : "prev"),
            m &&
              1 === s.pagingCount &&
              (s.direction = s.currentItem < e ? "next" : "prev"),
            !s.animating && (s.canAdvance(e, r) || n) && s.is(":visible"))
          ) {
            if (m && o) {
              var c = t(s.vars.asNavFor).data("flexslider");
              if (
                ((s.atEnd = 0 === e || e === s.count - 1),
                c.flexAnimate(e, !0, !1, !0, r),
                (s.direction = s.currentItem < e ? "next" : "prev"),
                (c.direction = s.direction),
                Math.ceil((e + 1) / s.visible) - 1 === s.currentSlide ||
                  0 === e)
              )
                return (
                  (s.currentItem = e),
                  s.slides
                    .removeClass(a + "active-slide")
                    .eq(e)
                    .addClass(a + "active-slide"),
                  !1
                );
              (s.currentItem = e),
                s.slides
                  .removeClass(a + "active-slide")
                  .eq(e)
                  .addClass(a + "active-slide"),
                (e = Math.floor(e / s.visible));
            }
            if (
              ((s.animating = !0),
              (s.animatingTo = e),
              i && s.pause(),
              s.vars.before(s),
              s.syncExists && !r && g.sync("animate"),
              s.vars.controlNav && g.controlNav.active(),
              p ||
                s.slides
                  .removeClass(a + "active-slide")
                  .eq(e)
                  .addClass(a + "active-slide"),
              (s.atEnd = 0 === e || e === s.last),
              s.vars.directionNav && g.directionNav.update(),
              e === s.last &&
                (s.vars.end(s), s.vars.animationLoop || s.pause()),
              f)
            )
              l
                ? (s.slides.eq(s.currentSlide).css({ opacity: 0, zIndex: 1 }),
                  s.slides.eq(e).css({ opacity: 1, zIndex: 2 }),
                  s.wrapup(_))
                : (s.slides
                    .eq(s.currentSlide)
                    .css({ zIndex: 1 })
                    .animate(
                      { opacity: 0 },
                      s.vars.animationSpeed,
                      s.vars.easing
                    ),
                  s.slides
                    .eq(e)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      s.vars.animationSpeed,
                      s.vars.easing,
                      s.wrapup
                    ));
            else {
              var h,
                v,
                b,
                _ = u ? s.slides.filter(":first").height() : s.computedW;
              p
                ? ((h = s.vars.itemMargin),
                  (v =
                    (b = (s.itemW + h) * s.move * s.animatingTo) > s.limit &&
                    1 !== s.visible
                      ? s.limit
                      : b))
                : (v =
                    0 === s.currentSlide &&
                    e === s.count - 1 &&
                    s.vars.animationLoop &&
                    "next" !== s.direction
                      ? d
                        ? (s.count + s.cloneOffset) * _
                        : 0
                      : s.currentSlide === s.last &&
                        0 === e &&
                        s.vars.animationLoop &&
                        "prev" !== s.direction
                      ? d
                        ? 0
                        : (s.count + 1) * _
                      : d
                      ? (s.count - 1 - e + s.cloneOffset) * _
                      : (e + s.cloneOffset) * _),
                s.setProps(v, "", s.vars.animationSpeed),
                s.transitions
                  ? ((s.vars.animationLoop && s.atEnd) ||
                      ((s.animating = !1), (s.currentSlide = s.animatingTo)),
                    s.container.unbind("webkitTransitionEnd transitionend"),
                    s.container.bind(
                      "webkitTransitionEnd transitionend",
                      function () {
                        clearTimeout(s.ensureAnimationEnd), s.wrapup(_);
                      }
                    ),
                    clearTimeout(s.ensureAnimationEnd),
                    (s.ensureAnimationEnd = setTimeout(function () {
                      s.wrapup(_);
                    }, s.vars.animationSpeed + 100)))
                  : s.container.animate(
                      s.args,
                      s.vars.animationSpeed,
                      s.vars.easing,
                      function () {
                        s.wrapup(_);
                      }
                    );
            }
            s.vars.smoothHeight && g.smoothHeight(s.vars.animationSpeed);
          }
        }),
        (s.wrapup = function (t) {
          f ||
            p ||
            (0 === s.currentSlide &&
            s.animatingTo === s.last &&
            s.vars.animationLoop
              ? s.setProps(t, "jumpEnd")
              : s.currentSlide === s.last &&
                0 === s.animatingTo &&
                s.vars.animationLoop &&
                s.setProps(t, "jumpStart")),
            (s.animating = !1),
            (s.currentSlide = s.animatingTo),
            s.vars.after(s);
        }),
        (s.animateSlides = function () {
          !s.animating && e && s.flexAnimate(s.getTarget("next"));
        }),
        (s.pause = function () {
          clearInterval(s.animatedSlides),
            (s.animatedSlides = null),
            (s.playing = !1),
            s.vars.pausePlay && g.pausePlay.update("play"),
            s.syncExists && g.sync("pause");
        }),
        (s.play = function () {
          s.playing && clearInterval(s.animatedSlides),
            (s.animatedSlides =
              s.animatedSlides ||
              setInterval(s.animateSlides, s.vars.slideshowSpeed)),
            (s.started = s.playing = !0),
            s.vars.pausePlay && g.pausePlay.update("pause"),
            s.syncExists && g.sync("play");
        }),
        (s.stop = function () {
          s.pause(), (s.stopped = !0);
        }),
        (s.canAdvance = function (t, e) {
          var i = m ? s.pagingCount - 1 : s.last;
          return (
            !!e ||
            !(
              !m ||
              s.currentItem !== s.count - 1 ||
              0 !== t ||
              "prev" !== s.direction
            ) ||
            ((!m ||
              0 !== s.currentItem ||
              t !== s.pagingCount - 1 ||
              "next" === s.direction) &&
              !(t === s.currentSlide && !m) &&
              (!!s.vars.animationLoop ||
                ((!s.atEnd ||
                  0 !== s.currentSlide ||
                  t !== i ||
                  "next" === s.direction) &&
                  (!s.atEnd ||
                    s.currentSlide !== i ||
                    0 !== t ||
                    "next" !== s.direction))))
          );
        }),
        (s.getTarget = function (t) {
          return (
            (s.direction = t),
            "next" === t
              ? s.currentSlide === s.last
                ? 0
                : s.currentSlide + 1
              : 0 === s.currentSlide
              ? s.last
              : s.currentSlide - 1
          );
        }),
        (s.setProps = function (t, e, i) {
          var n,
            o =
              ((n =
                t || (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo),
              (function () {
                if (p)
                  return "setTouch" === e
                    ? t
                    : d && s.animatingTo === s.last
                    ? 0
                    : d
                    ? s.limit -
                      (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo
                    : s.animatingTo === s.last
                    ? s.limit
                    : n;
                switch (e) {
                  case "setTotal":
                    return d
                      ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t
                      : (s.currentSlide + s.cloneOffset) * t;
                  case "setTouch":
                    return t;
                  case "jumpEnd":
                    return d ? t : s.count * t;
                  case "jumpStart":
                    return d ? s.count * t : t;
                  default:
                    return t;
                }
              })() *
                (s.vars.rtl ? 1 : -1) +
                "px");
          s.transitions &&
            ((o = s.isFirefox
              ? u
                ? "translate3d(0," + o + ",0)"
                : "translate3d(" + parseInt(o) + "px,0,0)"
              : u
              ? "translate3d(0," + o + ",0)"
              : "translate3d(" +
                (s.vars.rtl ? -1 : 1) * parseInt(o) +
                "px,0,0)"),
            (i = void 0 !== i ? i / 1e3 + "s" : "0s"),
            s.container.css("-" + s.pfx + "-transition-duration", i),
            s.container.css("transition-duration", i)),
            (s.args[s.prop] = o),
            (s.transitions || void 0 === i) && s.container.css(s.args),
            s.container.css("transform", o);
        }),
        (s.setup = function (e) {
          var i, n;
          f
            ? (s.vars.rtl
                ? s.slides.css({
                    width: "100%",
                    float: "right",
                    marginLeft: "-100%",
                    position: "relative",
                  })
                : s.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative",
                  }),
              "init" === e &&
                (l
                  ? s.slides
                      .css({
                        opacity: 0,
                        display: "block",
                        webkitTransition:
                          "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1,
                      })
                      .eq(s.currentSlide)
                      .css({ opacity: 1, zIndex: 2 })
                  : 0 == s.vars.fadeFirstSlide
                  ? s.slides
                      .css({ opacity: 0, display: "block", zIndex: 1 })
                      .eq(s.currentSlide)
                      .css({ zIndex: 2 })
                      .css({ opacity: 1 })
                  : s.slides
                      .css({ opacity: 0, display: "block", zIndex: 1 })
                      .eq(s.currentSlide)
                      .css({ zIndex: 2 })
                      .animate(
                        { opacity: 1 },
                        s.vars.animationSpeed,
                        s.vars.easing
                      )),
              s.vars.smoothHeight && g.smoothHeight())
            : ("init" === e &&
                ((s.viewport = t('<div class="' + a + 'viewport"></div>')
                  .css({ overflow: "hidden", position: "relative" })
                  .appendTo(s)
                  .append(s.container)),
                (s.cloneCount = 0),
                (s.cloneOffset = 0),
                d &&
                  ((n = t.makeArray(s.slides).reverse()),
                  (s.slides = t(n)),
                  s.container.empty().append(s.slides))),
              s.vars.animationLoop &&
                !p &&
                ((s.cloneCount = 2),
                (s.cloneOffset = 1),
                "init" !== e && s.container.find(".clone").remove(),
                s.container
                  .append(
                    g
                      .uniqueID(s.slides.first().clone().addClass("clone"))
                      .attr("aria-hidden", "true")
                  )
                  .prepend(
                    g
                      .uniqueID(s.slides.last().clone().addClass("clone"))
                      .attr("aria-hidden", "true")
                  )),
              (s.newSlides = t(s.vars.selector, s)),
              (i = d
                ? s.count - 1 - s.currentSlide + s.cloneOffset
                : s.currentSlide + s.cloneOffset),
              u && !p
                ? (s.container
                    .height(200 * (s.count + s.cloneCount) + "%")
                    .css("position", "absolute")
                    .width("100%"),
                  setTimeout(
                    function () {
                      s.newSlides.css({ display: "block" }),
                        s.doMath(),
                        s.viewport.height(s.h),
                        s.setProps(i * s.h, "init");
                    },
                    "init" === e ? 100 : 0
                  ))
                : (s.container.width(200 * (s.count + s.cloneCount) + "%"),
                  s.setProps(i * s.computedW, "init"),
                  setTimeout(
                    function () {
                      s.doMath(),
                        s.vars.rtl && s.isFirefox
                          ? s.newSlides.css({
                              width: s.computedW,
                              marginRight: s.computedM,
                              float: "right",
                              display: "block",
                            })
                          : s.newSlides.css({
                              width: s.computedW,
                              marginRight: s.computedM,
                              float: "left",
                              display: "block",
                            }),
                        s.vars.smoothHeight && g.smoothHeight();
                    },
                    "init" === e ? 100 : 0
                  )));
          p ||
            s.slides
              .removeClass(a + "active-slide")
              .eq(s.currentSlide)
              .addClass(a + "active-slide"),
            s.vars.init(s);
        }),
        (s.doMath = function () {
          var t = s.slides.first(),
            e = s.vars.itemMargin,
            i = s.vars.minItems,
            n = s.vars.maxItems;
          (s.w = void 0 === s.viewport ? s.width() : s.viewport.width()),
            s.isFirefox && (s.w = s.width()),
            (s.h = t.height()),
            (s.boxPadding = t.outerWidth() - t.width()),
            p
              ? ((s.itemT = s.vars.itemWidth + e),
                (s.itemM = e),
                (s.minW = i ? i * s.itemT : s.w),
                (s.maxW = n ? n * s.itemT - e : s.w),
                (s.itemW =
                  s.minW > s.w
                    ? (s.w - e * (i - 1)) / i
                    : s.maxW < s.w
                    ? (s.w - e * (n - 1)) / n
                    : s.vars.itemWidth > s.w
                    ? s.w
                    : s.vars.itemWidth),
                (s.visible = Math.floor(s.w / s.itemW)),
                (s.move =
                  s.vars.move > 0 && s.vars.move < s.visible
                    ? s.vars.move
                    : s.visible),
                (s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1)),
                (s.last = s.pagingCount - 1),
                (s.limit =
                  1 === s.pagingCount
                    ? 0
                    : s.vars.itemWidth > s.w
                    ? s.itemW * (s.count - 1) + e * (s.count - 1)
                    : (s.itemW + e) * s.count - s.w - e))
              : ((s.itemW = s.w),
                (s.itemM = e),
                (s.pagingCount = s.count),
                (s.last = s.count - 1)),
            (s.computedW = s.itemW - s.boxPadding),
            (s.computedM = s.itemM);
        }),
        (s.update = function (t, e) {
          s.doMath(),
            p ||
              (t < s.currentSlide
                ? (s.currentSlide += 1)
                : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1),
              (s.animatingTo = s.currentSlide)),
            s.vars.controlNav &&
              !s.manualControls &&
              (("add" === e && !p) || s.pagingCount > s.controlNav.length
                ? g.controlNav.update("add")
                : (("remove" === e && !p) ||
                    s.pagingCount < s.controlNav.length) &&
                  (p &&
                    s.currentSlide > s.last &&
                    ((s.currentSlide -= 1), (s.animatingTo -= 1)),
                  g.controlNav.update("remove", s.last))),
            s.vars.directionNav && g.directionNav.update();
        }),
        (s.addSlide = function (e, i) {
          var n = t(e);
          (s.count += 1),
            (s.last = s.count - 1),
            u && d
              ? void 0 !== i
                ? s.slides.eq(s.count - i).after(n)
                : s.container.prepend(n)
              : void 0 !== i
              ? s.slides.eq(i).before(n)
              : s.container.append(n),
            s.update(i, "add"),
            (s.slides = t(s.vars.selector + ":not(.clone)", s)),
            s.setup(),
            s.vars.added(s);
        }),
        (s.removeSlide = function (e) {
          var i = isNaN(e) ? s.slides.index(t(e)) : e;
          (s.count -= 1),
            (s.last = s.count - 1),
            isNaN(e)
              ? t(e, s.slides).remove()
              : u && d
              ? s.slides.eq(s.last).remove()
              : s.slides.eq(e).remove(),
            s.doMath(),
            s.update(i, "remove"),
            (s.slides = t(s.vars.selector + ":not(.clone)", s)),
            s.setup(),
            s.vars.removed(s);
        }),
        g.init();
    }),
      t(window)
        .blur(function (t) {
          e = !1;
        })
        .focus(function (t) {
          e = !0;
        }),
      (t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "",
        nextText: "",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        isFirefox: !1,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {},
        rtl: !1,
      }),
      (t.fn.flexslider = function (e) {
        if ((void 0 === e && (e = {}), "object" == typeof e))
          return this.each(function () {
            var i = t(this),
              n = e.selector ? e.selector : ".slides > li",
              s = i.find(n);
            (1 === s.length && !1 === e.allowOneSlide) || 0 === s.length
              ? (s.fadeIn(400), e.start && e.start(i))
              : void 0 === i.data("flexslider") && new t.flexslider(this, e);
          });
        var i = t(this).data("flexslider");
        switch (e) {
          case "play":
            i.play();
            break;
          case "pause":
            i.pause();
            break;
          case "stop":
            i.stop();
            break;
          case "next":
            i.flexAnimate(i.getTarget("next"), !0);
            break;
          case "prev":
          case "previous":
            i.flexAnimate(i.getTarget("prev"), !0);
            break;
          default:
            "number" == typeof e && i.flexAnimate(e, !0);
        }
      });
  })(jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function (t) {
    function e(e) {
      var a = e || window.event,
        r = l.call(arguments, 1),
        c = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0;
      if (
        (((e = t.event.fix(a)).type = "mousewheel"),
        "detail" in a && (d = -1 * a.detail),
        "wheelDelta" in a && (d = a.wheelDelta),
        "wheelDeltaY" in a && (d = a.wheelDeltaY),
        "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX),
        "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((u = -1 * d), (d = 0)),
        (c = 0 === d ? u : d),
        "deltaY" in a && (c = d = -1 * a.deltaY),
        "deltaX" in a && ((u = a.deltaX), 0 === d && (c = -1 * u)),
        0 !== d || 0 !== u)
      ) {
        if (1 === a.deltaMode) {
          var g = t.data(this, "mousewheel-line-height");
          (c *= g), (d *= g), (u *= g);
        } else if (2 === a.deltaMode) {
          var v = t.data(this, "mousewheel-page-height");
          (c *= v), (d *= v), (u *= v);
        }
        if (
          ((p = Math.max(Math.abs(d), Math.abs(u))),
          (!o || o > p) && ((o = p), n(a, p) && (o /= 40)),
          n(a, p) && ((c /= 40), (u /= 40), (d /= 40)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / o)),
          (u = Math[u >= 1 ? "floor" : "ceil"](u / o)),
          (d = Math[d >= 1 ? "floor" : "ceil"](d / o)),
          h.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var b = this.getBoundingClientRect();
          (f = e.clientX - b.left), (m = e.clientY - b.top);
        }
        return (
          (e.deltaX = u),
          (e.deltaY = d),
          (e.deltaFactor = o),
          (e.offsetX = f),
          (e.offsetY = m),
          (e.deltaMode = 0),
          r.unshift(e, c, u, d),
          s && clearTimeout(s),
          (s = setTimeout(i, 200)),
          (t.event.dispatch || t.event.handle).apply(this, r)
        );
      }
    }
    function i() {
      o = null;
    }
    function n(t, e) {
      return (
        h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
      );
    }
    var s,
      o,
      a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
    if (t.event.fixHooks)
      for (var c = a.length; c; ) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
    var h = (t.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var i = r.length; i; ) this.addEventListener(r[--i], e, !1);
        else this.onmousewheel = e;
        t.data(this, "mousewheel-line-height", h.getLineHeight(this)),
          t.data(this, "mousewheel-page-height", h.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var i = r.length; i; ) this.removeEventListener(r[--i], e, !1);
        else this.onmousewheel = null;
        t.removeData(this, "mousewheel-line-height"),
          t.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var i = t(e),
          n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
        return (
          n.length || (n = t("body")),
          parseInt(n.css("fontSize"), 10) ||
            parseInt(i.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return t(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    t.fn.extend({
      mousewheel: function (t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function (t) {
        return this.unbind("mousewheel", t);
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function (t) {
    function e(e) {
      var a = e || window.event,
        r = l.call(arguments, 1),
        c = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0;
      if (
        (((e = t.event.fix(a)).type = "mousewheel"),
        "detail" in a && (d = -1 * a.detail),
        "wheelDelta" in a && (d = a.wheelDelta),
        "wheelDeltaY" in a && (d = a.wheelDeltaY),
        "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX),
        "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((u = -1 * d), (d = 0)),
        (c = 0 === d ? u : d),
        "deltaY" in a && (c = d = -1 * a.deltaY),
        "deltaX" in a && ((u = a.deltaX), 0 === d && (c = -1 * u)),
        0 !== d || 0 !== u)
      ) {
        if (1 === a.deltaMode) {
          var g = t.data(this, "mousewheel-line-height");
          (c *= g), (d *= g), (u *= g);
        } else if (2 === a.deltaMode) {
          var v = t.data(this, "mousewheel-page-height");
          (c *= v), (d *= v), (u *= v);
        }
        if (
          ((p = Math.max(Math.abs(d), Math.abs(u))),
          (!o || o > p) && ((o = p), n(a, p) && (o /= 40)),
          n(a, p) && ((c /= 40), (u /= 40), (d /= 40)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / o)),
          (u = Math[u >= 1 ? "floor" : "ceil"](u / o)),
          (d = Math[d >= 1 ? "floor" : "ceil"](d / o)),
          h.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var b = this.getBoundingClientRect();
          (f = e.clientX - b.left), (m = e.clientY - b.top);
        }
        return (
          (e.deltaX = u),
          (e.deltaY = d),
          (e.deltaFactor = o),
          (e.offsetX = f),
          (e.offsetY = m),
          (e.deltaMode = 0),
          r.unshift(e, c, u, d),
          s && clearTimeout(s),
          (s = setTimeout(i, 200)),
          (t.event.dispatch || t.event.handle).apply(this, r)
        );
      }
    }
    function i() {
      o = null;
    }
    function n(t, e) {
      return (
        h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
      );
    }
    var s,
      o,
      a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
    if (t.event.fixHooks)
      for (var c = a.length; c; ) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
    var h = (t.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var i = r.length; i; ) this.addEventListener(r[--i], e, !1);
        else this.onmousewheel = e;
        t.data(this, "mousewheel-line-height", h.getLineHeight(this)),
          t.data(this, "mousewheel-page-height", h.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var i = r.length; i; ) this.removeEventListener(r[--i], e, !1);
        else this.onmousewheel = null;
        t.removeData(this, "mousewheel-line-height"),
          t.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var i = t(e),
          n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
        return (
          n.length || (n = t("body")),
          parseInt(n.css("fontSize"), 10) ||
            parseInt(i.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return t(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    t.fn.extend({
      mousewheel: function (t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function (t) {
        return this.unbind("mousewheel", t);
      },
    });
  }),
  (function (t) {
    "undefined" != typeof module && module.exports
      ? (module.exports = t)
      : t(jQuery, window, document);
  })(function (t) {
    var e, i, n;
    (e = "function" == typeof define && define.amd),
      (i = "undefined" != typeof module && module.exports),
      (n = "https:" == document.location.protocol ? "https:" : "http:"),
      e ||
        (i
          ? require("jquery-mousewheel")(t)
          : t.event.special.mousewheel ||
            t("head").append(
              decodeURI(
                "%3Cscript src=" +
                  n +
                  "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"
              )
            )),
      (function () {
        var e,
          i = "mCustomScrollbar",
          n = "mCS",
          s = ".mCustomScrollbar",
          o = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
              enable: !0,
              scrollAmount: "auto",
              axis: "y",
              deltaFactor: "auto",
              disableOver: [
                "select",
                "option",
                "keygen",
                "datalist",
                "textarea",
              ],
            },
            scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
            keyboard: {
              enable: !0,
              scrollType: "stepless",
              scrollAmount: "auto",
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
              autoScrollOnFocus:
                "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
              updateOnContentResize: !0,
              updateOnImageLoad: "auto",
              autoUpdateTimeout: 60,
            },
            theme: "light",
            callbacks: {
              onTotalScrollOffset: 0,
              onTotalScrollBackOffset: 0,
              alwaysTriggerOffsets: !0,
            },
          },
          a = 0,
          r = {},
          l = window.attachEvent && !window.addEventListener ? 1 : 0,
          c = !1,
          h = [
            "mCSB_dragger_onDrag",
            "mCSB_scrollTools_onDrag",
            "mCS_img_loaded",
            "mCS_disabled",
            "mCS_destroyed",
            "mCS_no_scrollbar",
            "mCS-autoHide",
            "mCS-dir-rtl",
            "mCS_no_scrollbar_y",
            "mCS_no_scrollbar_x",
            "mCS_y_hidden",
            "mCS_x_hidden",
            "mCSB_draggerContainer",
            "mCSB_buttonUp",
            "mCSB_buttonDown",
            "mCSB_buttonLeft",
            "mCSB_buttonRight",
          ],
          u = {
            init: function (e) {
              var e = t.extend(!0, {}, o, e),
                i = d.call(this);
              if (e.live) {
                var l = e.liveSelector || this.selector || s,
                  c = t(l);
                if ("off" === e.live) return void f(l);
                r[l] = setTimeout(function () {
                  c.mCustomScrollbar(e), "once" === e.live && c.length && f(l);
                }, 500);
              } else f(l);
              return (
                (e.setWidth = e.set_width ? e.set_width : e.setWidth),
                (e.setHeight = e.set_height ? e.set_height : e.setHeight),
                (e.axis = e.horizontalScroll ? "x" : m(e.axis)),
                (e.scrollInertia =
                  e.scrollInertia > 0 && e.scrollInertia < 17
                    ? 17
                    : e.scrollInertia),
                "object" != typeof e.mouseWheel &&
                  1 == e.mouseWheel &&
                  (e.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1,
                  }),
                (e.mouseWheel.scrollAmount = e.mouseWheelPixels
                  ? e.mouseWheelPixels
                  : e.mouseWheel.scrollAmount),
                (e.mouseWheel.normalizeDelta = e.advanced
                  .normalizeMouseWheelDelta
                  ? e.advanced.normalizeMouseWheelDelta
                  : e.mouseWheel.normalizeDelta),
                (e.scrollButtons.scrollType = g(e.scrollButtons.scrollType)),
                p(e),
                t(i).each(function () {
                  var i = t(this);
                  if (!i.data(n)) {
                    i.data(n, {
                      idx: ++a,
                      opt: e,
                      scrollRatio: { y: null, x: null },
                      overflowed: null,
                      contentReset: { y: null, x: null },
                      bindEvents: !1,
                      tweenRunning: !1,
                      sequential: {},
                      langDir: i.css("direction"),
                      cbOffsets: null,
                      trigger: null,
                      poll: {
                        size: { o: 0, n: 0 },
                        img: { o: 0, n: 0 },
                        change: { o: 0, n: 0 },
                      },
                    });
                    var s = i.data(n),
                      o = s.opt,
                      r = i.data("mcs-axis"),
                      l = i.data("mcs-scrollbar-position"),
                      c = i.data("mcs-theme");
                    r && (o.axis = r),
                      l && (o.scrollbarPosition = l),
                      c && ((o.theme = c), p(o)),
                      v.call(this),
                      s &&
                        o.callbacks.onCreate &&
                        "function" == typeof o.callbacks.onCreate &&
                        o.callbacks.onCreate.call(this),
                      t(
                        "#mCSB_" + s.idx + "_container img:not(." + h[2] + ")"
                      ).addClass(h[2]),
                      u.update.call(null, i);
                  }
                })
              );
            },
            update: function (e, i) {
              var s = e || d.call(this);
              return t(s).each(function () {
                var e = t(this);
                if (e.data(n)) {
                  var s = e.data(n),
                    o = s.opt,
                    a = t("#mCSB_" + s.idx + "_container"),
                    r = t("#mCSB_" + s.idx),
                    l = [
                      t("#mCSB_" + s.idx + "_dragger_vertical"),
                      t("#mCSB_" + s.idx + "_dragger_horizontal"),
                    ];
                  if (!a.length) return;
                  s.tweenRunning && Y(e),
                    i &&
                      s &&
                      o.callbacks.onBeforeUpdate &&
                      "function" == typeof o.callbacks.onBeforeUpdate &&
                      o.callbacks.onBeforeUpdate.call(this),
                    e.hasClass(h[3]) && e.removeClass(h[3]),
                    e.hasClass(h[4]) && e.removeClass(h[4]),
                    r.css("max-height", "none"),
                    r.height() !== e.height() &&
                      r.css("max-height", e.height()),
                    _.call(this),
                    "y" === o.axis ||
                      o.advanced.autoExpandHorizontalScroll ||
                      a.css("width", b(a)),
                    (s.overflowed = k.call(this)),
                    D.call(this),
                    o.autoDraggerLength && w.call(this),
                    x.call(this),
                    T.call(this);
                  var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                  "x" !== o.axis &&
                    (s.overflowed[0]
                      ? l[0].height() > l[0].parent().height()
                        ? S.call(this)
                        : (X(e, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none",
                          }),
                          (s.contentReset.y = null))
                      : (S.call(this),
                        "y" === o.axis
                          ? I.call(this)
                          : "yx" === o.axis &&
                            s.overflowed[1] &&
                            X(e, c[1].toString(), {
                              dir: "x",
                              dur: 0,
                              overwrite: "none",
                            }))),
                    "y" !== o.axis &&
                      (s.overflowed[1]
                        ? l[1].width() > l[1].parent().width()
                          ? S.call(this)
                          : (X(e, c[1].toString(), {
                              dir: "x",
                              dur: 0,
                              overwrite: "none",
                            }),
                            (s.contentReset.x = null))
                        : (S.call(this),
                          "x" === o.axis
                            ? I.call(this)
                            : "yx" === o.axis &&
                              s.overflowed[0] &&
                              X(e, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none",
                              }))),
                    i &&
                      s &&
                      (2 === i &&
                      o.callbacks.onImageLoad &&
                      "function" == typeof o.callbacks.onImageLoad
                        ? o.callbacks.onImageLoad.call(this)
                        : 3 === i &&
                          o.callbacks.onSelectorChange &&
                          "function" == typeof o.callbacks.onSelectorChange
                        ? o.callbacks.onSelectorChange.call(this)
                        : o.callbacks.onUpdate &&
                          "function" == typeof o.callbacks.onUpdate &&
                          o.callbacks.onUpdate.call(this)),
                    j.call(this);
                }
              });
            },
            scrollTo: function (e, i) {
              if (void 0 !== e && null != e) {
                var s = d.call(this);
                return t(s).each(function () {
                  var s = t(this);
                  if (s.data(n)) {
                    var o = s.data(n),
                      a = o.opt,
                      r = {
                        trigger: "external",
                        scrollInertia: a.scrollInertia,
                        scrollEasing: "mcsEaseInOut",
                        moveDragger: !1,
                        timeout: 60,
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0,
                      },
                      l = t.extend(!0, {}, r, i),
                      c = R.call(this, e),
                      h =
                        l.scrollInertia > 0 && l.scrollInertia < 17
                          ? 17
                          : l.scrollInertia;
                    (c[0] = q.call(this, c[0], "y")),
                      (c[1] = q.call(this, c[1], "x")),
                      l.moveDragger &&
                        ((c[0] *= o.scrollRatio.y), (c[1] *= o.scrollRatio.x)),
                      (l.dur = et() ? 0 : h),
                      setTimeout(function () {
                        null !== c[0] &&
                          void 0 !== c[0] &&
                          "x" !== a.axis &&
                          o.overflowed[0] &&
                          ((l.dir = "y"),
                          (l.overwrite = "all"),
                          X(s, c[0].toString(), l)),
                          null !== c[1] &&
                            void 0 !== c[1] &&
                            "y" !== a.axis &&
                            o.overflowed[1] &&
                            ((l.dir = "x"),
                            (l.overwrite = "none"),
                            X(s, c[1].toString(), l));
                      }, l.timeout);
                  }
                });
              }
            },
            stop: function () {
              var e = d.call(this);
              return t(e).each(function () {
                var e = t(this);
                e.data(n) && Y(e);
              });
            },
            disable: function (e) {
              var i = d.call(this);
              return t(i).each(function () {
                var i = t(this);
                i.data(n) &&
                  (i.data(n),
                  j.call(this, "remove"),
                  I.call(this),
                  e && S.call(this),
                  D.call(this, !0),
                  i.addClass(h[3]));
              });
            },
            destroy: function () {
              var e = d.call(this);
              return t(e).each(function () {
                var s = t(this);
                if (s.data(n)) {
                  var o = s.data(n),
                    a = o.opt,
                    r = t("#mCSB_" + o.idx),
                    l = t("#mCSB_" + o.idx + "_container"),
                    c = t(".mCSB_" + o.idx + "_scrollbar");
                  a.live && f(a.liveSelector || t(e).selector),
                    j.call(this, "remove"),
                    I.call(this),
                    S.call(this),
                    s.removeData(n),
                    G(this, "mcs"),
                    c.remove(),
                    l.find("img." + h[2]).removeClass(h[2]),
                    r.replaceWith(l.contents()),
                    s
                      .removeClass(
                        i +
                          " _" +
                          n +
                          "_" +
                          o.idx +
                          " " +
                          h[6] +
                          " " +
                          h[7] +
                          " " +
                          h[5] +
                          " " +
                          h[3]
                      )
                      .addClass(h[4]);
                }
              });
            },
          },
          d = function () {
            return "object" != typeof t(this) || t(this).length < 1 ? s : this;
          },
          p = function (e) {
            (e.autoDraggerLength =
              !(
                t.inArray(e.theme, [
                  "rounded",
                  "rounded-dark",
                  "rounded-dots",
                  "rounded-dots-dark",
                ]) > -1
              ) && e.autoDraggerLength),
              (e.autoExpandScrollbar =
                !(
                  t.inArray(e.theme, [
                    "rounded-dots",
                    "rounded-dots-dark",
                    "3d",
                    "3d-dark",
                    "3d-thick",
                    "3d-thick-dark",
                    "inset",
                    "inset-dark",
                    "inset-2",
                    "inset-2-dark",
                    "inset-3",
                    "inset-3-dark",
                  ]) > -1
                ) && e.autoExpandScrollbar),
              (e.scrollButtons.enable =
                !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) &&
                e.scrollButtons.enable),
              (e.autoHideScrollbar =
                t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ||
                e.autoHideScrollbar),
              (e.scrollbarPosition =
                t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1
                  ? "outside"
                  : e.scrollbarPosition);
          },
          f = function (t) {
            r[t] && (clearTimeout(r[t]), G(r, t));
          },
          m = function (t) {
            return "yx" === t || "xy" === t || "auto" === t
              ? "yx"
              : "x" === t || "horizontal" === t
              ? "x"
              : "y";
          },
          g = function (t) {
            return "stepped" === t ||
              "pixels" === t ||
              "step" === t ||
              "click" === t
              ? "stepped"
              : "stepless";
          },
          v = function () {
            var e = t(this),
              s = e.data(n),
              o = s.opt,
              a = o.autoExpandScrollbar ? " " + h[1] + "_expand" : "",
              r = [
                "<div id='mCSB_" +
                  s.idx +
                  "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                  s.idx +
                  "_scrollbar mCS-" +
                  o.theme +
                  " mCSB_scrollTools_vertical" +
                  a +
                  "'><div class='" +
                  h[12] +
                  "'><div id='mCSB_" +
                  s.idx +
                  "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                "<div id='mCSB_" +
                  s.idx +
                  "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                  s.idx +
                  "_scrollbar mCS-" +
                  o.theme +
                  " mCSB_scrollTools_horizontal" +
                  a +
                  "'><div class='" +
                  h[12] +
                  "'><div id='mCSB_" +
                  s.idx +
                  "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
              ],
              l =
                "yx" === o.axis
                  ? "mCSB_vertical_horizontal"
                  : "x" === o.axis
                  ? "mCSB_horizontal"
                  : "mCSB_vertical",
              c = "yx" === o.axis ? r[0] + r[1] : "x" === o.axis ? r[1] : r[0],
              u =
                "yx" === o.axis
                  ? "<div id='mCSB_" +
                    s.idx +
                    "_container_wrapper' class='mCSB_container_wrapper' />"
                  : "",
              d = o.autoHideScrollbar ? " " + h[6] : "",
              p = "x" !== o.axis && "rtl" === s.langDir ? " " + h[7] : "";
            o.setWidth && e.css("width", o.setWidth),
              o.setHeight && e.css("height", o.setHeight),
              (o.setLeft =
                "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft),
              e
                .addClass(i + " _" + n + "_" + s.idx + d + p)
                .wrapInner(
                  "<div id='mCSB_" +
                    s.idx +
                    "' class='mCustomScrollBox mCS-" +
                    o.theme +
                    " " +
                    l +
                    "'><div id='mCSB_" +
                    s.idx +
                    "_container' class='mCSB_container' style='position:relative; top:" +
                    o.setTop +
                    "; left:" +
                    o.setLeft +
                    ";' dir=" +
                    s.langDir +
                    " /></div>"
                );
            var f = t("#mCSB_" + s.idx),
              m = t("#mCSB_" + s.idx + "_container");
            "y" === o.axis ||
              o.advanced.autoExpandHorizontalScroll ||
              m.css("width", b(m)),
              "outside" === o.scrollbarPosition
                ? ("static" === e.css("position") &&
                    e.css("position", "relative"),
                  e.css("overflow", "visible"),
                  f.addClass("mCSB_outside").after(c))
                : (f.addClass("mCSB_inside").append(c), m.wrap(u)),
              y.call(this);
            var g = [
              t("#mCSB_" + s.idx + "_dragger_vertical"),
              t("#mCSB_" + s.idx + "_dragger_horizontal"),
            ];
            g[0].css("min-height", g[0].height()),
              g[1].css("min-width", g[1].width());
          },
          b = function (e) {
            var i = [
                e[0].scrollWidth,
                Math.max.apply(
                  Math,
                  e
                    .children()
                    .map(function () {
                      return t(this).outerWidth(!0);
                    })
                    .get()
                ),
              ],
              n = e.parent().width();
            return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%";
          },
          _ = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = t("#mCSB_" + i.idx + "_container");
            if (s.advanced.autoExpandHorizontalScroll && "y" !== s.axis) {
              o.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
              var a = Math.ceil(o[0].scrollWidth);
              3 === s.advanced.autoExpandHorizontalScroll ||
              (2 !== s.advanced.autoExpandHorizontalScroll &&
                a > o.parent().width())
                ? o.css({
                    width: a,
                    "min-width": "100%",
                    "overflow-x": "inherit",
                  })
                : o
                    .css({ "overflow-x": "inherit", position: "absolute" })
                    .wrap(
                      "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                    )
                    .css({
                      width:
                        Math.ceil(o[0].getBoundingClientRect().right + 0.4) -
                        Math.floor(o[0].getBoundingClientRect().left),
                      "min-width": "100%",
                      position: "relative",
                    })
                    .unwrap();
            }
          },
          y = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = t(".mCSB_" + i.idx + "_scrollbar:first"),
              a = J(s.scrollButtons.tabindex)
                ? "tabindex='" + s.scrollButtons.tabindex + "'"
                : "",
              r = [
                "<a href='#' class='" +
                  h[13] +
                  "' oncontextmenu='return false;' " +
                  a +
                  " />",
                "<a href='#' class='" +
                  h[14] +
                  "' oncontextmenu='return false;' " +
                  a +
                  " />",
                "<a href='#' class='" +
                  h[15] +
                  "' oncontextmenu='return false;' " +
                  a +
                  " />",
                "<a href='#' class='" +
                  h[16] +
                  "' oncontextmenu='return false;' " +
                  a +
                  " />",
              ],
              l = [
                "x" === s.axis ? r[2] : r[0],
                "x" === s.axis ? r[3] : r[1],
                r[2],
                r[3],
              ];
            s.scrollButtons.enable &&
              o
                .prepend(l[0])
                .append(l[1])
                .next(".mCSB_scrollTools")
                .prepend(l[2])
                .append(l[3]);
          },
          w = function () {
            var e = t(this),
              i = e.data(n),
              s = t("#mCSB_" + i.idx),
              o = t("#mCSB_" + i.idx + "_container"),
              a = [
                t("#mCSB_" + i.idx + "_dragger_vertical"),
                t("#mCSB_" + i.idx + "_dragger_horizontal"),
              ],
              r = [
                s.height() / o.outerHeight(!1),
                s.width() / o.outerWidth(!1),
              ],
              c = [
                parseInt(a[0].css("min-height")),
                Math.round(r[0] * a[0].parent().height()),
                parseInt(a[1].css("min-width")),
                Math.round(r[1] * a[1].parent().width()),
              ],
              h = l && c[1] < c[0] ? c[0] : c[1],
              u = l && c[3] < c[2] ? c[2] : c[3];
            a[0]
              .css({ height: h, "max-height": a[0].parent().height() - 10 })
              .find(".mCSB_dragger_bar")
              .css({ "line-height": c[0] + "px" }),
              a[1].css({ width: u, "max-width": a[1].parent().width() - 10 });
          },
          x = function () {
            var e = t(this),
              i = e.data(n),
              s = t("#mCSB_" + i.idx),
              o = t("#mCSB_" + i.idx + "_container"),
              a = [
                t("#mCSB_" + i.idx + "_dragger_vertical"),
                t("#mCSB_" + i.idx + "_dragger_horizontal"),
              ],
              r = [
                o.outerHeight(!1) - s.height(),
                o.outerWidth(!1) - s.width(),
              ],
              l = [
                r[0] / (a[0].parent().height() - a[0].height()),
                r[1] / (a[1].parent().width() - a[1].width()),
              ];
            i.scrollRatio = { y: l[0], x: l[1] };
          },
          C = function (t, e, i) {
            var n = i ? h[0] + "_expanded" : "",
              s = t.closest(".mCSB_scrollTools");
            "active" === e
              ? (t.toggleClass(h[0] + " " + n),
                s.toggleClass(h[1]),
                (t[0]._draggable = t[0]._draggable ? 0 : 1))
              : t[0]._draggable ||
                ("hide" === e
                  ? (t.removeClass(h[0]), s.removeClass(h[1]))
                  : (t.addClass(h[0]), s.addClass(h[1])));
          },
          k = function () {
            var e = t(this),
              i = e.data(n),
              s = t("#mCSB_" + i.idx),
              o = t("#mCSB_" + i.idx + "_container"),
              a = null == i.overflowed ? o.height() : o.outerHeight(!1),
              r = null == i.overflowed ? o.width() : o.outerWidth(!1),
              l = o[0].scrollHeight,
              c = o[0].scrollWidth;
            return (
              l > a && (a = l),
              c > r && (r = c),
              [a > s.height(), r > s.width()]
            );
          },
          S = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = t("#mCSB_" + i.idx),
              a = t("#mCSB_" + i.idx + "_container"),
              r = [
                t("#mCSB_" + i.idx + "_dragger_vertical"),
                t("#mCSB_" + i.idx + "_dragger_horizontal"),
              ];
            if (
              (Y(e),
              (("x" !== s.axis && !i.overflowed[0]) ||
                ("y" === s.axis && i.overflowed[0])) &&
                (r[0].add(a).css("top", 0), X(e, "_resetY")),
              ("y" !== s.axis && !i.overflowed[1]) ||
                ("x" === s.axis && i.overflowed[1]))
            ) {
              var l = (dx = 0);
              "rtl" === i.langDir &&
                ((l = o.width() - a.outerWidth(!1)),
                (dx = Math.abs(l / i.scrollRatio.x))),
                a.css("left", l),
                r[1].css("left", dx),
                X(e, "_resetX");
            }
          },
          T = function () {
            var e,
              i = t(this),
              s = i.data(n),
              o = s.opt;
            s.bindEvents ||
              (M.call(this),
              o.contentTouchScroll && E.call(this),
              A.call(this),
              o.mouseWheel.enable &&
                (function n() {
                  e = setTimeout(function () {
                    t.event.special.mousewheel
                      ? (clearTimeout(e), N.call(i[0]))
                      : n();
                  }, 100);
                })(),
              z.call(this),
              L.call(this),
              o.advanced.autoScrollOnFocus && H.call(this),
              o.scrollButtons.enable && W.call(this),
              o.keyboard.enable && F.call(this),
              (s.bindEvents = !0));
          },
          I = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = n + "_" + i.idx,
              a = ".mCSB_" + i.idx + "_scrollbar",
              r = t(
                "#mCSB_" +
                  i.idx +
                  ",#mCSB_" +
                  i.idx +
                  "_container,#mCSB_" +
                  i.idx +
                  "_container_wrapper," +
                  a +
                  " ." +
                  h[12] +
                  ",#mCSB_" +
                  i.idx +
                  "_dragger_vertical,#mCSB_" +
                  i.idx +
                  "_dragger_horizontal," +
                  a +
                  ">a"
              ),
              l = t("#mCSB_" + i.idx + "_container");
            s.advanced.releaseDraggableSelectors &&
              r.add(t(s.advanced.releaseDraggableSelectors)),
              s.advanced.extraDraggableSelectors &&
                r.add(t(s.advanced.extraDraggableSelectors)),
              i.bindEvents &&
                (t(document)
                  .add(t(!$() || top.document))
                  .unbind("." + o),
                r.each(function () {
                  t(this).unbind("." + o);
                }),
                clearTimeout(e[0]._focusTimeout),
                G(e[0], "_focusTimeout"),
                clearTimeout(i.sequential.step),
                G(i.sequential, "step"),
                clearTimeout(l[0].onCompleteTimeout),
                G(l[0], "onCompleteTimeout"),
                (i.bindEvents = !1));
          },
          D = function (e) {
            var i = t(this),
              s = i.data(n),
              o = s.opt,
              a = t("#mCSB_" + s.idx + "_container_wrapper"),
              r = a.length ? a : t("#mCSB_" + s.idx + "_container"),
              l = [
                t("#mCSB_" + s.idx + "_scrollbar_vertical"),
                t("#mCSB_" + s.idx + "_scrollbar_horizontal"),
              ],
              c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
            "x" !== o.axis &&
              (s.overflowed[0] && !e
                ? (l[0]
                    .add(c[0])
                    .add(l[0].children("a"))
                    .css("display", "block"),
                  r.removeClass(h[8] + " " + h[10]))
                : (o.alwaysShowScrollbar
                    ? (2 !== o.alwaysShowScrollbar &&
                        c[0].css("display", "none"),
                      r.removeClass(h[10]))
                    : (l[0].css("display", "none"), r.addClass(h[10])),
                  r.addClass(h[8]))),
              "y" !== o.axis &&
                (s.overflowed[1] && !e
                  ? (l[1]
                      .add(c[1])
                      .add(l[1].children("a"))
                      .css("display", "block"),
                    r.removeClass(h[9] + " " + h[11]))
                  : (o.alwaysShowScrollbar
                      ? (2 !== o.alwaysShowScrollbar &&
                          c[1].css("display", "none"),
                        r.removeClass(h[11]))
                      : (l[1].css("display", "none"), r.addClass(h[11])),
                    r.addClass(h[9]))),
              s.overflowed[0] || s.overflowed[1]
                ? i.removeClass(h[5])
                : i.addClass(h[5]);
          },
          P = function (e) {
            var i = e.type,
              n =
                e.target.ownerDocument !== document
                  ? [
                      t(frameElement).offset().top,
                      t(frameElement).offset().left,
                    ]
                  : null,
              s =
                $() && e.target.ownerDocument !== top.document
                  ? [
                      t(e.view.frameElement).offset().top,
                      t(e.view.frameElement).offset().left,
                    ]
                  : [0, 0];
            switch (i) {
              case "pointerdown":
              case "MSPointerDown":
              case "pointermove":
              case "MSPointerMove":
              case "pointerup":
              case "MSPointerUp":
                return n
                  ? [
                      e.originalEvent.pageY - n[0] + s[0],
                      e.originalEvent.pageX - n[1] + s[1],
                      !1,
                    ]
                  : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
              case "touchstart":
              case "touchmove":
              case "touchend":
                var o =
                    e.originalEvent.touches[0] ||
                    e.originalEvent.changedTouches[0],
                  a =
                    e.originalEvent.touches.length ||
                    e.originalEvent.changedTouches.length;
                return e.target.ownerDocument !== document
                  ? [o.screenY, o.screenX, a > 1]
                  : [o.pageY, o.pageX, a > 1];
              default:
                return n
                  ? [e.pageY - n[0] + s[0], e.pageX - n[1] + s[1], !1]
                  : [e.pageY, e.pageX, !1];
            }
          },
          M = function () {
            function e(t) {
              var e = f.find("iframe");
              if (e.length) {
                var i = t ? "auto" : "none";
                e.css("pointer-events", i);
              }
            }
            function i(t, e, i, n) {
              if (
                ((f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0),
                s.attr("id") === p[1])
              )
                var o = "x",
                  a = (s[0].offsetLeft - e + n) * h.scrollRatio.x;
              else
                var o = "y",
                  a = (s[0].offsetTop - t + i) * h.scrollRatio.y;
              X(r, a.toString(), { dir: o, drag: !0 });
            }
            var s,
              o,
              a,
              r = t(this),
              h = r.data(n),
              u = h.opt,
              d = n + "_" + h.idx,
              p = [
                "mCSB_" + h.idx + "_dragger_vertical",
                "mCSB_" + h.idx + "_dragger_horizontal",
              ],
              f = t("#mCSB_" + h.idx + "_container"),
              m = t("#" + p[0] + ",#" + p[1]),
              g = u.advanced.releaseDraggableSelectors
                ? m.add(t(u.advanced.releaseDraggableSelectors))
                : m,
              v = u.advanced.extraDraggableSelectors
                ? t(!$() || top.document).add(
                    t(u.advanced.extraDraggableSelectors)
                  )
                : t(!$() || top.document);
            m
              .bind(
                "mousedown." +
                  d +
                  " touchstart." +
                  d +
                  " pointerdown." +
                  d +
                  " MSPointerDown." +
                  d,
                function (i) {
                  if (
                    (i.stopImmediatePropagation(), i.preventDefault(), Q(i))
                  ) {
                    (c = !0),
                      l &&
                        (document.onselectstart = function () {
                          return !1;
                        }),
                      e(!1),
                      Y(r);
                    var n = (s = t(this)).offset(),
                      h = P(i)[0] - n.top,
                      d = P(i)[1] - n.left,
                      p = s.height() + n.top,
                      f = s.width() + n.left;
                    p > h && h > 0 && f > d && d > 0 && ((o = h), (a = d)),
                      C(s, "active", u.autoExpandScrollbar);
                  }
                }
              )
              .bind("touchmove." + d, function (t) {
                t.stopImmediatePropagation(), t.preventDefault();
                var e = s.offset(),
                  n = P(t)[0] - e.top,
                  r = P(t)[1] - e.left;
                i(o, a, n, r);
              }),
              t(document)
                .add(v)
                .bind(
                  "mousemove." +
                    d +
                    " pointermove." +
                    d +
                    " MSPointerMove." +
                    d,
                  function (t) {
                    if (s) {
                      var e = s.offset(),
                        n = P(t)[0] - e.top,
                        r = P(t)[1] - e.left;
                      if (o === n && a === r) return;
                      i(o, a, n, r);
                    }
                  }
                )
                .add(g)
                .bind(
                  "mouseup." +
                    d +
                    " touchend." +
                    d +
                    " pointerup." +
                    d +
                    " MSPointerUp." +
                    d,
                  function (t) {
                    s && (C(s, "active", u.autoExpandScrollbar), (s = null)),
                      (c = !1),
                      l && (document.onselectstart = null),
                      e(!0);
                  }
                );
          },
          E = function () {
            function i(t) {
              if (!Z(t) || c || P(t)[2]) e = 0;
              else {
                (e = 1),
                  (x = 0),
                  (C = 0),
                  (h = 1),
                  k.removeClass("mCS_touch_action");
                var i = M.offset();
                (u = P(t)[0] - i.top),
                  (d = P(t)[1] - i.left),
                  (H = [P(t)[0], P(t)[1]]);
              }
            }
            function s(t) {
              if (
                Z(t) &&
                !c &&
                !P(t)[2] &&
                (T.documentTouchScroll || t.preventDefault(),
                t.stopImmediatePropagation(),
                (!C || x) && h)
              ) {
                g = V();
                var e = D.offset(),
                  i = P(t)[0] - e.top,
                  n = P(t)[1] - e.left,
                  s = "mcsLinearOut";
                if (
                  (A.push(i),
                  N.push(n),
                  (H[2] = Math.abs(P(t)[0] - H[0])),
                  (H[3] = Math.abs(P(t)[1] - H[1])),
                  S.overflowed[0])
                )
                  var o = E[0].parent().height() - E[0].height(),
                    a =
                      u - i > 0 &&
                      i - u > -o * S.scrollRatio.y &&
                      (2 * H[3] < H[2] || "yx" === T.axis);
                if (S.overflowed[1])
                  var r = E[1].parent().width() - E[1].width(),
                    p =
                      d - n > 0 &&
                      n - d > -r * S.scrollRatio.x &&
                      (2 * H[2] < H[3] || "yx" === T.axis);
                a || p
                  ? (F || t.preventDefault(), (x = 1))
                  : ((C = 1), k.addClass("mCS_touch_action")),
                  F && t.preventDefault(),
                  (y =
                    "yx" === T.axis
                      ? [u - i, d - n]
                      : "x" === T.axis
                      ? [null, d - n]
                      : [u - i, null]),
                  (M[0].idleTimer = 250),
                  S.overflowed[0] && l(y[0], O, s, "y", "all", !0),
                  S.overflowed[1] && l(y[1], O, s, "x", z, !0);
              }
            }
            function o(t) {
              if (!Z(t) || c || P(t)[2]) e = 0;
              else {
                (e = 1), t.stopImmediatePropagation(), Y(k), (m = V());
                var i = D.offset();
                (p = P(t)[0] - i.top),
                  (f = P(t)[1] - i.left),
                  (A = []),
                  (N = []);
              }
            }
            function a(t) {
              if (Z(t) && !c && !P(t)[2]) {
                (h = 0),
                  t.stopImmediatePropagation(),
                  (x = 0),
                  (C = 0),
                  (v = V());
                var e = D.offset(),
                  i = P(t)[0] - e.top,
                  n = P(t)[1] - e.left;
                if (!(v - g > 30)) {
                  var s = "mcsEaseOut",
                    o = 2.5 > (_ = 1e3 / (v - m)),
                    a = o ? [A[A.length - 2], N[N.length - 2]] : [0, 0];
                  b = o ? [i - a[0], n - a[1]] : [i - p, n - f];
                  var u = [Math.abs(b[0]), Math.abs(b[1])];
                  _ = o ? [Math.abs(b[0] / 4), Math.abs(b[1] / 4)] : [_, _];
                  var d = [
                    Math.abs(M[0].offsetTop) - b[0] * r(u[0] / _[0], _[0]),
                    Math.abs(M[0].offsetLeft) - b[1] * r(u[1] / _[1], _[1]),
                  ];
                  (y =
                    "yx" === T.axis
                      ? [d[0], d[1]]
                      : "x" === T.axis
                      ? [null, d[1]]
                      : [d[0], null]),
                    (w = [
                      4 * u[0] + T.scrollInertia,
                      4 * u[1] + T.scrollInertia,
                    ]);
                  var k = parseInt(T.contentTouchScroll) || 0;
                  (y[0] = u[0] > k ? y[0] : 0),
                    (y[1] = u[1] > k ? y[1] : 0),
                    S.overflowed[0] && l(y[0], w[0], s, "y", z, !1),
                    S.overflowed[1] && l(y[1], w[1], s, "x", z, !1);
                }
              }
            }
            function r(t, e) {
              var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
              return t > 90
                ? e > 4
                  ? i[0]
                  : i[3]
                : t > 60
                ? e > 3
                  ? i[3]
                  : i[2]
                : t > 30
                ? e > 8
                  ? i[1]
                  : e > 6
                  ? i[0]
                  : e > 4
                  ? e
                  : i[2]
                : e > 8
                ? e
                : i[3];
            }
            function l(t, e, i, n, s, o) {
              t &&
                X(k, t.toString(), {
                  dur: e,
                  scrollEasing: i,
                  dir: n,
                  overwrite: s,
                  drag: o,
                });
            }
            var h,
              u,
              d,
              p,
              f,
              m,
              g,
              v,
              b,
              _,
              y,
              w,
              x,
              C,
              k = t(this),
              S = k.data(n),
              T = S.opt,
              I = n + "_" + S.idx,
              D = t("#mCSB_" + S.idx),
              M = t("#mCSB_" + S.idx + "_container"),
              E = [
                t("#mCSB_" + S.idx + "_dragger_vertical"),
                t("#mCSB_" + S.idx + "_dragger_horizontal"),
              ],
              A = [],
              N = [],
              O = 0,
              z = "yx" === T.axis ? "none" : "all",
              H = [],
              L = M.find("iframe"),
              W = [
                "touchstart." + I + " pointerdown." + I + " MSPointerDown." + I,
                "touchmove." + I + " pointermove." + I + " MSPointerMove." + I,
                "touchend." + I + " pointerup." + I + " MSPointerUp." + I,
              ],
              F = void 0 !== document.body.style.touchAction;
            M.bind(W[0], function (t) {
              i(t);
            }).bind(W[1], function (t) {
              s(t);
            }),
              D.bind(W[0], function (t) {
                o(t);
              }).bind(W[2], function (t) {
                a(t);
              }),
              L.length &&
                L.each(function () {
                  t(this).load(function () {
                    $(this) &&
                      t(this.contentDocument || this.contentWindow.document)
                        .bind(W[0], function (t) {
                          i(t), o(t);
                        })
                        .bind(W[1], function (t) {
                          s(t);
                        })
                        .bind(W[2], function (t) {
                          a(t);
                        });
                  });
                });
          },
          A = function () {
            function i(t, e, i) {
              (l.type = i && s ? "stepped" : "stepless"),
                (l.scrollAmount = 10),
                B(o, t, e, "mcsLinearOut", i ? 60 : null);
            }
            var s,
              o = t(this),
              a = o.data(n),
              r = a.opt,
              l = a.sequential,
              h = n + "_" + a.idx,
              u = t("#mCSB_" + a.idx + "_container"),
              d = u.parent();
            u.bind("mousedown." + h, function (t) {
              e || s || ((s = 1), (c = !0));
            })
              .add(document)
              .bind("mousemove." + h, function (t) {
                if (
                  !e &&
                  s &&
                  (window.getSelection
                    ? window.getSelection().toString()
                    : document.selection &&
                      "Control" != document.selection.type &&
                      document.selection.createRange().text)
                ) {
                  var n = u.offset(),
                    o = P(t)[0] - n.top + u[0].offsetTop,
                    c = P(t)[1] - n.left + u[0].offsetLeft;
                  o > 0 && o < d.height() && c > 0 && c < d.width()
                    ? l.step && i("off", null, "stepped")
                    : ("x" !== r.axis &&
                        a.overflowed[0] &&
                        (0 > o ? i("on", 38) : o > d.height() && i("on", 40)),
                      "y" !== r.axis &&
                        a.overflowed[1] &&
                        (0 > c ? i("on", 37) : c > d.width() && i("on", 39)));
                }
              })
              .bind("mouseup." + h + " dragend." + h, function (t) {
                e || (s && ((s = 0), i("off", null)), (c = !1));
              });
          },
          N = function () {
            function e(e, n) {
              if ((Y(i), !O(i, e.target))) {
                var a =
                    "auto" !== o.mouseWheel.deltaFactor
                      ? parseInt(o.mouseWheel.deltaFactor)
                      : l && e.deltaFactor < 100
                      ? 100
                      : e.deltaFactor || 100,
                  h = o.scrollInertia;
                if ("x" === o.axis || "x" === o.mouseWheel.axis)
                  var u = "x",
                    d = [
                      Math.round(a * s.scrollRatio.x),
                      parseInt(o.mouseWheel.scrollAmount),
                    ],
                    p =
                      "auto" !== o.mouseWheel.scrollAmount
                        ? d[1]
                        : d[0] >= r.width()
                        ? 0.9 * r.width()
                        : d[0],
                    f = Math.abs(
                      t("#mCSB_" + s.idx + "_container")[0].offsetLeft
                    ),
                    m = c[1][0].offsetLeft,
                    g = c[1].parent().width() - c[1].width(),
                    v = e.deltaX || e.deltaY || n;
                else
                  var u = "y",
                    d = [
                      Math.round(a * s.scrollRatio.y),
                      parseInt(o.mouseWheel.scrollAmount),
                    ],
                    p =
                      "auto" !== o.mouseWheel.scrollAmount
                        ? d[1]
                        : d[0] >= r.height()
                        ? 0.9 * r.height()
                        : d[0],
                    f = Math.abs(
                      t("#mCSB_" + s.idx + "_container")[0].offsetTop
                    ),
                    m = c[0][0].offsetTop,
                    g = c[0].parent().height() - c[0].height(),
                    v = e.deltaY || n;
                ("y" === u && !s.overflowed[0]) ||
                  ("x" === u && !s.overflowed[1]) ||
                  ((o.mouseWheel.invert ||
                    e.webkitDirectionInvertedFromDevice) &&
                    (v = -v),
                  o.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                  ((v > 0 && 0 !== m) ||
                    (0 > v && m !== g) ||
                    o.mouseWheel.preventDefault) &&
                    (e.stopImmediatePropagation(), e.preventDefault()),
                  e.deltaFactor < 2 &&
                    !o.mouseWheel.normalizeDelta &&
                    ((p = e.deltaFactor), (h = 17)),
                  X(i, (f - v * p).toString(), { dir: u, dur: h }));
              }
            }
            if (t(this).data(n)) {
              var i = t(this),
                s = i.data(n),
                o = s.opt,
                a = n + "_" + s.idx,
                r = t("#mCSB_" + s.idx),
                c = [
                  t("#mCSB_" + s.idx + "_dragger_vertical"),
                  t("#mCSB_" + s.idx + "_dragger_horizontal"),
                ],
                h = t("#mCSB_" + s.idx + "_container").find("iframe");
              h.length &&
                h.each(function () {
                  t(this).load(function () {
                    $(this) &&
                      t(
                        this.contentDocument || this.contentWindow.document
                      ).bind("mousewheel." + a, function (t, i) {
                        e(t, i);
                      });
                  });
                }),
                r.bind("mousewheel." + a, function (t, i) {
                  e(t, i);
                });
            }
          },
          $ = function (t) {
            var e = null;
            if (t) {
              try {
                var i = t.contentDocument || t.contentWindow.document;
                e = i.body.innerHTML;
              } catch (t) {}
              return null !== e;
            }
            try {
              var i = top.document;
              e = i.body.innerHTML;
            } catch (t) {}
            return null !== e;
          },
          O = function (e, i) {
            var s = i.nodeName.toLowerCase(),
              o = e.data(n).opt.mouseWheel.disableOver;
            return (
              t.inArray(s, o) > -1 &&
              !(t.inArray(s, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
            );
          },
          z = function () {
            var e,
              i = t(this),
              s = i.data(n),
              o = n + "_" + s.idx,
              a = t("#mCSB_" + s.idx + "_container"),
              r = a.parent(),
              l = t(".mCSB_" + s.idx + "_scrollbar ." + h[12]);
            l.bind(
              "mousedown." +
                o +
                " touchstart." +
                o +
                " pointerdown." +
                o +
                " MSPointerDown." +
                o,
              function (i) {
                (c = !0), t(i.target).hasClass("mCSB_dragger") || (e = 1);
              }
            )
              .bind(
                "touchend." + o + " pointerup." + o + " MSPointerUp." + o,
                function (t) {
                  c = !1;
                }
              )
              .bind("click." + o, function (n) {
                if (
                  e &&
                  ((e = 0),
                  t(n.target).hasClass(h[12]) ||
                    t(n.target).hasClass("mCSB_draggerRail"))
                ) {
                  Y(i);
                  var o = t(this),
                    l = o.find(".mCSB_dragger");
                  if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                    if (!s.overflowed[1]) return;
                    var c = "x",
                      u = n.pageX > l.offset().left ? -1 : 1,
                      d = Math.abs(a[0].offsetLeft) - 0.9 * u * r.width();
                  } else {
                    if (!s.overflowed[0]) return;
                    var c = "y",
                      u = n.pageY > l.offset().top ? -1 : 1,
                      d = Math.abs(a[0].offsetTop) - 0.9 * u * r.height();
                  }
                  X(i, d.toString(), { dir: c, scrollEasing: "mcsEaseInOut" });
                }
              });
          },
          H = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = n + "_" + i.idx,
              a = t("#mCSB_" + i.idx + "_container"),
              r = a.parent();
            a.bind("focusin." + o, function (i) {
              var n = t(document.activeElement),
                o = a.find(".mCustomScrollBox").length;
              n.is(s.advanced.autoScrollOnFocus) &&
                (Y(e),
                clearTimeout(e[0]._focusTimeout),
                (e[0]._focusTimer = o ? 17 * o : 0),
                (e[0]._focusTimeout = setTimeout(function () {
                  var t = [tt(n)[0], tt(n)[1]],
                    i = [a[0].offsetTop, a[0].offsetLeft],
                    o = [
                      i[0] + t[0] >= 0 &&
                        i[0] + t[0] < r.height() - n.outerHeight(!1),
                      i[1] + t[1] >= 0 &&
                        i[0] + t[1] < r.width() - n.outerWidth(!1),
                    ],
                    l = "yx" !== s.axis || o[0] || o[1] ? "all" : "none";
                  "x" === s.axis ||
                    o[0] ||
                    X(e, t[0].toString(), {
                      dir: "y",
                      scrollEasing: "mcsEaseInOut",
                      overwrite: l,
                      dur: 0,
                    }),
                    "y" === s.axis ||
                      o[1] ||
                      X(e, t[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: 0,
                      });
                }, e[0]._focusTimer)));
            });
          },
          L = function () {
            var e = t(this),
              i = e.data(n),
              s = n + "_" + i.idx,
              o = t("#mCSB_" + i.idx + "_container").parent();
            o.bind("scroll." + s, function (e) {
              (0 !== o.scrollTop() || 0 !== o.scrollLeft()) &&
                t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden");
            });
          },
          W = function () {
            var e = t(this),
              i = e.data(n),
              s = i.opt,
              o = i.sequential,
              a = n + "_" + i.idx,
              r = ".mCSB_" + i.idx + "_scrollbar",
              l = t(r + ">a");
            l.bind(
              "mousedown." +
                a +
                " touchstart." +
                a +
                " pointerdown." +
                a +
                " MSPointerDown." +
                a +
                " mouseup." +
                a +
                " touchend." +
                a +
                " pointerup." +
                a +
                " MSPointerUp." +
                a +
                " mouseout." +
                a +
                " pointerout." +
                a +
                " MSPointerOut." +
                a +
                " click." +
                a,
              function (n) {
                function a(t, i) {
                  (o.scrollAmount = s.scrollButtons.scrollAmount), B(e, t, i);
                }
                if ((n.preventDefault(), Q(n))) {
                  var r = t(this).attr("class");
                  switch (((o.type = s.scrollButtons.scrollType), n.type)) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                      if ("stepped" === o.type) return;
                      (c = !0), (i.tweenRunning = !1), a("on", r);
                      break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                      if ("stepped" === o.type) return;
                      (c = !1), o.dir && a("off", r);
                      break;
                    case "click":
                      if ("stepped" !== o.type || i.tweenRunning) return;
                      a("on", r);
                  }
                }
              }
            );
          },
          F = function () {
            function e(e) {
              function n(t, e) {
                (a.type = o.keyboard.scrollType),
                  (a.scrollAmount = o.keyboard.scrollAmount),
                  ("stepped" === a.type && s.tweenRunning) || B(i, t, e);
              }
              switch (e.type) {
                case "blur":
                  s.tweenRunning && a.dir && n("off", null);
                  break;
                case "keydown":
                case "keyup":
                  var r = e.keyCode ? e.keyCode : e.which,
                    l = "on";
                  if (
                    ("x" !== o.axis && (38 === r || 40 === r)) ||
                    ("y" !== o.axis && (37 === r || 39 === r))
                  ) {
                    if (
                      ((38 === r || 40 === r) && !s.overflowed[0]) ||
                      ((37 === r || 39 === r) && !s.overflowed[1])
                    )
                      return;
                    "keyup" === e.type && (l = "off"),
                      t(document.activeElement).is(u) ||
                        (e.preventDefault(),
                        e.stopImmediatePropagation(),
                        n(l, r));
                  } else if (33 === r || 34 === r) {
                    if (
                      ((s.overflowed[0] || s.overflowed[1]) &&
                        (e.preventDefault(), e.stopImmediatePropagation()),
                      "keyup" === e.type)
                    ) {
                      Y(i);
                      var d = 34 === r ? -1 : 1;
                      if (
                        "x" === o.axis ||
                        ("yx" === o.axis && s.overflowed[1] && !s.overflowed[0])
                      )
                        var p = "x",
                          f = Math.abs(c[0].offsetLeft) - 0.9 * d * h.width();
                      else
                        var p = "y",
                          f = Math.abs(c[0].offsetTop) - 0.9 * d * h.height();
                      X(i, f.toString(), {
                        dir: p,
                        scrollEasing: "mcsEaseInOut",
                      });
                    }
                  } else if (
                    (35 === r || 36 === r) &&
                    !t(document.activeElement).is(u) &&
                    ((s.overflowed[0] || s.overflowed[1]) &&
                      (e.preventDefault(), e.stopImmediatePropagation()),
                    "keyup" === e.type)
                  ) {
                    if (
                      "x" === o.axis ||
                      ("yx" === o.axis && s.overflowed[1] && !s.overflowed[0])
                    )
                      var p = "x",
                        f =
                          35 === r ? Math.abs(h.width() - c.outerWidth(!1)) : 0;
                    else
                      var p = "y",
                        f =
                          35 === r
                            ? Math.abs(h.height() - c.outerHeight(!1))
                            : 0;
                    X(i, f.toString(), {
                      dir: p,
                      scrollEasing: "mcsEaseInOut",
                    });
                  }
              }
            }
            var i = t(this),
              s = i.data(n),
              o = s.opt,
              a = s.sequential,
              r = n + "_" + s.idx,
              l = t("#mCSB_" + s.idx),
              c = t("#mCSB_" + s.idx + "_container"),
              h = c.parent(),
              u =
                "input,textarea,select,datalist,keygen,[contenteditable='true']",
              d = c.find("iframe"),
              p = ["blur." + r + " keydown." + r + " keyup." + r];
            d.length &&
              d.each(function () {
                t(this).load(function () {
                  $(this) &&
                    t(this.contentDocument || this.contentWindow.document).bind(
                      p[0],
                      function (t) {
                        e(t);
                      }
                    );
                });
              }),
              l.attr("tabindex", "0").bind(p[0], function (t) {
                e(t);
              });
          },
          B = function (e, i, s, o, a) {
            function r(t) {
              c.snapAmount &&
                (u.scrollAmount =
                  c.snapAmount instanceof Array
                    ? "x" === u.dir[0]
                      ? c.snapAmount[1]
                      : c.snapAmount[0]
                    : c.snapAmount);
              var i = "stepped" !== u.type,
                n = a || (t ? (i ? f / 1.5 : m) : 1e3 / 60),
                s = t ? (i ? 7.5 : 40) : 2.5,
                h = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
                p = [
                  l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y,
                  l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x,
                ],
                g =
                  "x" === u.dir[0]
                    ? h[1] + u.dir[1] * p[1] * s
                    : h[0] + u.dir[1] * p[0] * s,
                v =
                  "x" === u.dir[0]
                    ? h[1] + u.dir[1] * parseInt(u.scrollAmount)
                    : h[0] + u.dir[1] * parseInt(u.scrollAmount),
                b = "auto" !== u.scrollAmount ? v : g,
                _ =
                  o ||
                  (t ? (i ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
                y = !!t;
              return (
                t && 17 > n && (b = "x" === u.dir[0] ? h[1] : h[0]),
                X(e, b.toString(), {
                  dir: u.dir[0],
                  scrollEasing: _,
                  dur: n,
                  onComplete: y,
                }),
                t
                  ? void (u.dir = !1)
                  : (clearTimeout(u.step),
                    void (u.step = setTimeout(function () {
                      r();
                    }, n)))
              );
            }
            var l = e.data(n),
              c = l.opt,
              u = l.sequential,
              d = t("#mCSB_" + l.idx + "_container"),
              p = "stepped" === u.type,
              f = c.scrollInertia < 26 ? 26 : c.scrollInertia,
              m = c.scrollInertia < 1 ? 17 : c.scrollInertia;
            switch (i) {
              case "on":
                if (
                  ((u.dir = [
                    s === h[16] || s === h[15] || 39 === s || 37 === s
                      ? "x"
                      : "y",
                    s === h[13] || s === h[15] || 38 === s || 37 === s ? -1 : 1,
                  ]),
                  Y(e),
                  J(s) && "stepped" === u.type)
                )
                  return;
                r(p);
                break;
              case "off":
                clearTimeout(u.step),
                  G(u, "step"),
                  Y(e),
                  (p || (l.tweenRunning && u.dir)) && r(!0);
            }
          },
          R = function (e) {
            var i = t(this).data(n).opt,
              s = [];
            return (
              "function" == typeof e && (e = e()),
              e instanceof Array
                ? (s =
                    e.length > 1
                      ? [e[0], e[1]]
                      : "x" === i.axis
                      ? [null, e[0]]
                      : [e[0], null])
                : ((s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e),
                  (s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e)),
              "function" == typeof s[0] && (s[0] = s[0]()),
              "function" == typeof s[1] && (s[1] = s[1]()),
              s
            );
          },
          q = function (e, i) {
            if (null != e && void 0 !== e) {
              var s = t(this),
                o = s.data(n),
                a = o.opt,
                r = t("#mCSB_" + o.idx + "_container"),
                l = r.parent(),
                c = typeof e;
              i || (i = "x" === a.axis ? "x" : "y");
              var h = "x" === i ? r.outerWidth(!1) : r.outerHeight(!1),
                d = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                p = "x" === i ? "left" : "top";
              switch (c) {
                case "function":
                  return e();
                case "object":
                  var f = e.jquery ? e : t(e);
                  if (!f.length) return;
                  return "x" === i ? tt(f)[1] : tt(f)[0];
                case "string":
                case "number":
                  if (J(e)) return Math.abs(e);
                  if (-1 !== e.indexOf("%"))
                    return Math.abs((h * parseInt(e)) / 100);
                  if (-1 !== e.indexOf("-="))
                    return Math.abs(d - parseInt(e.split("-=")[1]));
                  if (-1 !== e.indexOf("+=")) {
                    var m = d + parseInt(e.split("+=")[1]);
                    return m >= 0 ? 0 : Math.abs(m);
                  }
                  if (-1 !== e.indexOf("px") && J(e.split("px")[0]))
                    return Math.abs(e.split("px")[0]);
                  if ("top" === e || "left" === e) return 0;
                  if ("bottom" === e)
                    return Math.abs(l.height() - r.outerHeight(!1));
                  if ("right" === e)
                    return Math.abs(l.width() - r.outerWidth(!1));
                  if ("first" === e || "last" === e) {
                    var f = r.find(":" + e);
                    return "x" === i ? tt(f)[1] : tt(f)[0];
                  }
                  return t(e).length
                    ? "x" === i
                      ? tt(t(e))[1]
                      : tt(t(e))[0]
                    : (r.css(p, e), void u.update.call(null, s[0]));
              }
            }
          },
          j = function (e) {
            function i(t) {
              clearTimeout(r[0].autoUpdate), u.update.call(null, s[0], t);
            }
            var s = t(this),
              o = s.data(n),
              a = o.opt,
              r = t("#mCSB_" + o.idx + "_container");
            return e
              ? (clearTimeout(r[0].autoUpdate), void G(r[0], "autoUpdate"))
              : void (function e() {
                  return (
                    clearTimeout(r[0].autoUpdate),
                    0 === s.parents("html").length
                      ? void (s = null)
                      : void (r[0].autoUpdate = setTimeout(function () {
                          return a.advanced.updateOnSelectorChange &&
                            ((o.poll.change.n = (function () {
                              !0 === a.advanced.updateOnSelectorChange &&
                                (a.advanced.updateOnSelectorChange = "*");
                              var t = 0,
                                e = r.find(a.advanced.updateOnSelectorChange);
                              return (
                                a.advanced.updateOnSelectorChange &&
                                  e.length > 0 &&
                                  e.each(function () {
                                    t += this.offsetHeight + this.offsetWidth;
                                  }),
                                t
                              );
                            })()),
                            o.poll.change.n !== o.poll.change.o)
                            ? ((o.poll.change.o = o.poll.change.n), void i(3))
                            : a.advanced.updateOnContentResize &&
                              ((o.poll.size.n =
                                s[0].scrollHeight +
                                s[0].scrollWidth +
                                r[0].offsetHeight +
                                s[0].offsetHeight +
                                s[0].offsetWidth),
                              o.poll.size.n !== o.poll.size.o)
                            ? ((o.poll.size.o = o.poll.size.n), void i(1))
                            : !a.advanced.updateOnImageLoad ||
                              ("auto" === a.advanced.updateOnImageLoad &&
                                "y" === a.axis) ||
                              ((o.poll.img.n = r.find("img").length),
                              o.poll.img.n === o.poll.img.o)
                            ? void (
                                (a.advanced.updateOnSelectorChange ||
                                  a.advanced.updateOnContentResize ||
                                  a.advanced.updateOnImageLoad) &&
                                e()
                              )
                            : ((o.poll.img.o = o.poll.img.n),
                              void r.find("img").each(function () {
                                !(function (e) {
                                  if (t(e).hasClass(h[2])) i();
                                  else {
                                    var n = new Image();
                                    (n.onload = (function (t, e) {
                                      return function () {
                                        return e.apply(t, arguments);
                                      };
                                    })(n, function () {
                                      (this.onload = null),
                                        t(e).addClass(h[2]),
                                        i(2);
                                    })),
                                      (n.src = e.src);
                                  }
                                })(this);
                              }));
                        }, a.advanced.autoUpdateTimeout))
                  );
                })();
          },
          Y = function (e) {
            var i = e.data(n),
              s = t(
                "#mCSB_" +
                  i.idx +
                  "_container,#mCSB_" +
                  i.idx +
                  "_container_wrapper,#mCSB_" +
                  i.idx +
                  "_dragger_vertical,#mCSB_" +
                  i.idx +
                  "_dragger_horizontal"
              );
            s.each(function () {
              K.call(this);
            });
          },
          X = function (e, i, s) {
            function o(t) {
              return r && l.callbacks[t] && "function" == typeof l.callbacks[t];
            }
            function a() {
              var t = [d[0].offsetTop, d[0].offsetLeft],
                i = [v[0].offsetTop, v[0].offsetLeft],
                n = [d.outerHeight(!1), d.outerWidth(!1)],
                o = [u.height(), u.width()];
              e[0].mcs = {
                content: d,
                top: t[0],
                left: t[1],
                draggerTop: i[0],
                draggerLeft: i[1],
                topPct: Math.round(
                  (100 * Math.abs(t[0])) / (Math.abs(n[0]) - o[0])
                ),
                leftPct: Math.round(
                  (100 * Math.abs(t[1])) / (Math.abs(n[1]) - o[1])
                ),
                direction: s.dir,
              };
            }
            var r = e.data(n),
              l = r.opt,
              c = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: l.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0,
              },
              s = t.extend(c, s),
              h = [s.dur, s.drag ? 0 : s.dur],
              u = t("#mCSB_" + r.idx),
              d = t("#mCSB_" + r.idx + "_container"),
              p = d.parent(),
              f = l.callbacks.onTotalScrollOffset
                ? R.call(e, l.callbacks.onTotalScrollOffset)
                : [0, 0],
              m = l.callbacks.onTotalScrollBackOffset
                ? R.call(e, l.callbacks.onTotalScrollBackOffset)
                : [0, 0];
            if (
              ((r.trigger = s.trigger),
              (0 !== p.scrollTop() || 0 !== p.scrollLeft()) &&
                (t(".mCSB_" + r.idx + "_scrollbar").css(
                  "visibility",
                  "visible"
                ),
                p.scrollTop(0).scrollLeft(0)),
              "_resetY" !== i ||
                r.contentReset.y ||
                (o("onOverflowYNone") && l.callbacks.onOverflowYNone.call(e[0]),
                (r.contentReset.y = 1)),
              "_resetX" !== i ||
                r.contentReset.x ||
                (o("onOverflowXNone") && l.callbacks.onOverflowXNone.call(e[0]),
                (r.contentReset.x = 1)),
              "_resetY" !== i && "_resetX" !== i)
            ) {
              if (
                ((!r.contentReset.y && e[0].mcs) ||
                  !r.overflowed[0] ||
                  (o("onOverflowY") && l.callbacks.onOverflowY.call(e[0]),
                  (r.contentReset.x = null)),
                (!r.contentReset.x && e[0].mcs) ||
                  !r.overflowed[1] ||
                  (o("onOverflowX") && l.callbacks.onOverflowX.call(e[0]),
                  (r.contentReset.x = null)),
                l.snapAmount)
              ) {
                var g =
                  l.snapAmount instanceof Array
                    ? "x" === s.dir
                      ? l.snapAmount[1]
                      : l.snapAmount[0]
                    : l.snapAmount;
                i = (function (t, e, i) {
                  return Math.round(t / e) * e - i;
                })(i, g, l.snapOffset);
              }
              switch (s.dir) {
                case "x":
                  var v = t("#mCSB_" + r.idx + "_dragger_horizontal"),
                    b = "left",
                    _ = d[0].offsetLeft,
                    y = [
                      u.width() - d.outerWidth(!1),
                      v.parent().width() - v.width(),
                    ],
                    w = [i, 0 === i ? 0 : i / r.scrollRatio.x],
                    x = f[1],
                    k = m[1],
                    S = x > 0 ? x / r.scrollRatio.x : 0,
                    T = k > 0 ? k / r.scrollRatio.x : 0;
                  break;
                case "y":
                  var v = t("#mCSB_" + r.idx + "_dragger_vertical"),
                    b = "top",
                    _ = d[0].offsetTop,
                    y = [
                      u.height() - d.outerHeight(!1),
                      v.parent().height() - v.height(),
                    ],
                    w = [i, 0 === i ? 0 : i / r.scrollRatio.y],
                    x = f[0],
                    k = m[0],
                    S = x > 0 ? x / r.scrollRatio.y : 0,
                    T = k > 0 ? k / r.scrollRatio.y : 0;
              }
              w[1] < 0 || (0 === w[0] && 0 === w[1])
                ? (w = [0, 0])
                : w[1] >= y[1]
                ? (w = [y[0], y[1]])
                : (w[0] = -w[0]),
                e[0].mcs || (a(), o("onInit") && l.callbacks.onInit.call(e[0])),
                clearTimeout(d[0].onCompleteTimeout),
                U(v[0], b, Math.round(w[1]), h[1], s.scrollEasing),
                (r.tweenRunning ||
                  !((0 === _ && w[0] >= 0) || (_ === y[0] && w[0] <= y[0]))) &&
                  U(
                    d[0],
                    b,
                    Math.round(w[0]),
                    h[0],
                    s.scrollEasing,
                    s.overwrite,
                    {
                      onStart: function () {
                        s.callbacks &&
                          s.onStart &&
                          !r.tweenRunning &&
                          (o("onScrollStart") &&
                            (a(), l.callbacks.onScrollStart.call(e[0])),
                          (r.tweenRunning = !0),
                          C(v),
                          (r.cbOffsets = [
                            l.callbacks.alwaysTriggerOffsets || _ >= y[0] + x,
                            l.callbacks.alwaysTriggerOffsets || -k >= _,
                          ]));
                      },
                      onUpdate: function () {
                        s.callbacks &&
                          s.onUpdate &&
                          o("whileScrolling") &&
                          (a(), l.callbacks.whileScrolling.call(e[0]));
                      },
                      onComplete: function () {
                        if (s.callbacks && s.onComplete) {
                          "yx" === l.axis &&
                            clearTimeout(d[0].onCompleteTimeout);
                          var t = d[0].idleTimer || 0;
                          d[0].onCompleteTimeout = setTimeout(function () {
                            o("onScroll") &&
                              (a(), l.callbacks.onScroll.call(e[0])),
                              o("onTotalScroll") &&
                                w[1] >= y[1] - S &&
                                r.cbOffsets[0] &&
                                (a(), l.callbacks.onTotalScroll.call(e[0])),
                              o("onTotalScrollBack") &&
                                w[1] <= T &&
                                r.cbOffsets[1] &&
                                (a(), l.callbacks.onTotalScrollBack.call(e[0])),
                              (r.tweenRunning = !1),
                              (d[0].idleTimer = 0),
                              C(v, "hide");
                          }, t);
                        }
                      },
                    }
                  );
            }
          },
          U = function (t, e, i, n, s, o, a) {
            function r() {
              b.stop ||
                (m || u.call(),
                (m = V() - f),
                l(),
                m >= b.time &&
                  ((b.time = m > b.time ? m + c - (m - b.time) : m + c - 1),
                  b.time < m + 1 && (b.time = m + 1)),
                b.time < n ? (b.id = h(r)) : p.call());
            }
            function l() {
              n > 0
                ? ((b.currVal = (function (t, e, i, n, s) {
                    switch (s) {
                      case "linear":
                      case "mcsLinear":
                        return (i * t) / n + e;
                      case "mcsLinearOut":
                        return (t /= n), t--, i * Math.sqrt(1 - t * t) + e;
                      case "easeInOutSmooth":
                        return 1 > (t /= n / 2)
                          ? (i / 2) * t * t + e
                          : (-i / 2) * (--t * (t - 2) - 1) + e;
                      case "easeInOutStrong":
                        return 1 > (t /= n / 2)
                          ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e
                          : (t--, (i / 2) * (2 - Math.pow(2, -10 * t)) + e);
                      case "easeInOut":
                      case "mcsEaseInOut":
                        return 1 > (t /= n / 2)
                          ? (i / 2) * t * t * t + e
                          : (i / 2) * ((t -= 2) * t * t + 2) + e;
                      case "easeOutSmooth":
                        return (t /= n), -i * (--t * t * t * t - 1) + e;
                      case "easeOutStrong":
                        return i * (1 - Math.pow(2, (-10 * t) / n)) + e;
                      case "easeOut":
                      case "mcsEaseOut":
                      default:
                        var o = (t /= n) * t,
                          a = o * t;
                        return (
                          e +
                          i *
                            (0.499999999999997 * a * o +
                              -2.5 * o * o +
                              5.5 * a +
                              -6.5 * o +
                              4 * t)
                        );
                    }
                  })(b.time, g, _, n, s)),
                  (v[e] = Math.round(b.currVal) + "px"))
                : (v[e] = i + "px"),
                d.call();
            }
            t._mTween || (t._mTween = { top: {}, left: {} });
            var c,
              h,
              a = a || {},
              u = a.onStart || function () {},
              d = a.onUpdate || function () {},
              p = a.onComplete || function () {},
              f = V(),
              m = 0,
              g = t.offsetTop,
              v = t.style,
              b = t._mTween[e];
            "left" === e && (g = t.offsetLeft);
            var _ = i - g;
            (b.stop = 0),
              "none" !== o &&
                null != b.id &&
                (window.requestAnimationFrame
                  ? window.cancelAnimationFrame(b.id)
                  : clearTimeout(b.id),
                (b.id = null)),
              (c = 1e3 / 60),
              (b.time = m + c),
              (h = window.requestAnimationFrame
                ? window.requestAnimationFrame
                : function (t) {
                    return l(), setTimeout(t, 0.01);
                  }),
              (b.id = h(r));
          },
          V = function () {
            return window.performance && window.performance.now
              ? window.performance.now()
              : window.performance && window.performance.webkitNow
              ? window.performance.webkitNow()
              : Date.now
              ? Date.now()
              : new Date().getTime();
          },
          K = function () {
            var t = this;
            t._mTween || (t._mTween = { top: {}, left: {} });
            for (var e = ["top", "left"], i = 0; i < e.length; i++) {
              var n = e[i];
              t._mTween[n].id &&
                (window.requestAnimationFrame
                  ? window.cancelAnimationFrame(t._mTween[n].id)
                  : clearTimeout(t._mTween[n].id),
                (t._mTween[n].id = null),
                (t._mTween[n].stop = 1));
            }
          },
          G = function (t, e) {
            try {
              delete t[e];
            } catch (i) {
              t[e] = null;
            }
          },
          Q = function (t) {
            return !(t.which && 1 !== t.which);
          },
          Z = function (t) {
            var e = t.originalEvent.pointerType;
            return !(e && "touch" !== e && 2 !== e);
          },
          J = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          },
          tt = function (t) {
            var e = t.parents(".mCSB_container");
            return [
              t.offset().top - e.offset().top,
              t.offset().left - e.offset().left,
            ];
          },
          et = function () {
            var t = (function () {
              var t = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var e = 0; e < t.length; e++)
                if (t[e] + "Hidden" in document) return t[e] + "Hidden";
              return null;
            })();
            return !!t && document[t];
          };
        (t.fn[i] = function (e) {
          return u[e]
            ? u[e].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof e && e
            ? void t.error("Method " + e + " does not exist")
            : u.init.apply(this, arguments);
        }),
          (t[i] = function (e) {
            return u[e]
              ? u[e].apply(this, Array.prototype.slice.call(arguments, 1))
              : "object" != typeof e && e
              ? void t.error("Method " + e + " does not exist")
              : u.init.apply(this, arguments);
          }),
          (t[i].defaults = o),
          (window[i] = !0),
          t(window).load(function () {
            t(s)[i](),
              t.extend(t.expr[":"], {
                mcsInView:
                  t.expr[":"].mcsInView ||
                  function (e) {
                    var i,
                      n,
                      s = t(e),
                      o = s.parents(".mCSB_container");
                    if (o.length)
                      return (
                        (i = o.parent()),
                        (n = [o[0].offsetTop, o[0].offsetLeft])[0] + tt(s)[0] >=
                          0 &&
                          n[0] + tt(s)[0] < i.height() - s.outerHeight(!1) &&
                          n[1] + tt(s)[1] >= 0 &&
                          n[1] + tt(s)[1] < i.width() - s.outerWidth(!1)
                      );
                  },
                mcsOverflow:
                  t.expr[":"].mcsOverflow ||
                  function (e) {
                    var i = t(e).data(n);
                    if (i) return i.overflowed[0] || i.overflowed[1];
                  },
              });
          });
      })();
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define("viewer", ["jquery"], t)
      : "object" == typeof exports
      ? t(require("jquery"))
      : t(jQuery);
  })(function (t) {
    "use strict";
    var e = t(window),
      i = t(document),
      n = document.createElement("viewer"),
      s = "viewer-fixed",
      o = "viewer-show",
      a = "viewer-hide",
      r = "viewer-hide-xs-down",
      l = "viewer-hide-sm-down",
      c = "viewer-hide-md-down",
      h = "viewer-fade",
      u = "viewer-in",
      d = "viewer-transition",
      p = "mousedown touchstart pointerdown MSPointerDown",
      f =
        "mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",
      m = void 0 !== n.style.transition,
      g = Math.round,
      v = Math.sqrt,
      b = Math.abs,
      _ = Math.min,
      y = Math.max,
      w = Number;
    function x(t) {
      return "string" == typeof t;
    }
    function C(t) {
      return "number" == typeof t && !isNaN(t);
    }
    function k(t) {
      return void 0 === t;
    }
    function S(t, e) {
      var i = [];
      return C(e) && i.push(e), i.slice.apply(t, i);
    }
    function T(t, e) {
      var i = S(arguments, 2);
      return function () {
        return t.apply(e, i.concat(S(arguments)));
      };
    }
    function I(t) {
      return t.offsetWidth;
    }
    function D(t, e) {
      var i;
      if (t.naturalWidth) return e(t.naturalWidth, t.naturalHeight);
      ((i = document.createElement("img")).onload = function () {
        e(this.width, this.height);
      }),
        (i.src = t.src);
    }
    function P(t) {
      switch (t) {
        case 2:
          return r;
        case 3:
          return l;
        case 4:
          return c;
      }
    }
    function M(e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, M.DEFAULTS, t.isPlainObject(i) && i)),
        (this.isImg = !1),
        (this.isBuilt = !1),
        (this.isShown = !1),
        (this.isViewed = !1),
        (this.isFulled = !1),
        (this.isPlayed = !1),
        (this.wheeling = !1),
        (this.playing = !1),
        (this.fading = !1),
        (this.tooltiping = !1),
        (this.transitioning = !1),
        (this.action = !1),
        (this.target = !1),
        (this.timeout = !1),
        (this.index = 0),
        (this.length = 0),
        this.init();
    }
    (M.prototype = {
      constructor: M,
      init: function () {
        var e = this.options,
          i = this.$element,
          n = i.is("img"),
          s = n ? i : i.find("img"),
          o = s.length,
          a = t.proxy(this.ready, this);
        o &&
          (t.isFunction(e.build) && i.one("build.viewer", e.build),
          this.trigger("build.viewer").isDefaultPrevented() ||
            (m || (e.transition = !1),
            (this.isImg = n),
            (this.length = o),
            (this.count = 0),
            (this.$images = s),
            (this.$body = t("body")),
            e.inline
              ? (i.one(
                  "built.viewer",
                  t.proxy(function () {
                    this.view();
                  }, this)
                ),
                s.each(function () {
                  this.complete ? a() : t(this).one("load.viewer", a);
                }))
              : i.on("click.viewer", t.proxy(this.start, this))));
      },
      ready: function () {
        this.count++, this.count === this.length && this.build();
      },
      build: function () {
        var e,
          i,
          n,
          o,
          r,
          l,
          c = this.options,
          u = this.$element;
        this.isBuilt ||
          ((this.$parent = e = u.parent()),
          (this.$viewer = i = t(M.TEMPLATE)),
          (this.$canvas = i.find(".viewer-canvas")),
          (this.$footer = i.find(".viewer-footer")),
          (this.$title = n = i.find(".viewer-title")),
          (this.$toolbar = o = i.find(".viewer-toolbar")),
          (this.$navbar = r = i.find(".viewer-navbar")),
          (this.$button = l = i.find(".viewer-button")),
          (this.$tooltip = i.find(".viewer-tooltip")),
          (this.$player = i.find(".viewer-player")),
          (this.$list = i.find(".viewer-list")),
          n.addClass(c.title ? P(c.title) : a),
          o.addClass(c.toolbar ? P(c.toolbar) : a),
          o
            .find("li[class*=zoom]")
            .toggleClass("viewer-invisible", !c.zoomable),
          o
            .find("li[class*=flip]")
            .toggleClass("viewer-invisible", !c.scalable),
          c.rotatable ||
            o
              .find("li[class*=rotate]")
              .addClass("viewer-invisible")
              .appendTo(o),
          r.addClass(c.navbar ? P(c.navbar) : a),
          c.inline
            ? (l.addClass("viewer-fullscreen"),
              i.css("z-index", c.zIndexInline),
              "static" === e.css("position") && e.css("position", "relative"))
            : (l.addClass("viewer-close"),
              i.css("z-index", c.zIndex).addClass([s, h, a].join(" "))),
          u.after(i),
          c.inline && (this.render(), this.bind(), (this.isShown = !0)),
          (this.isBuilt = !0),
          t.isFunction(c.built) && u.one("built.viewer", c.built),
          this.trigger("built.viewer"));
      },
      unbuild: function () {
        var t = this.options,
          e = this.$element;
        this.isBuilt && (t.inline && e.removeClass(a), this.$viewer.remove());
      },
      bind: function () {
        var n = this.options,
          s = this.$element;
        t.isFunction(n.view) && s.on("view.viewer", n.view),
          t.isFunction(n.viewed) && s.on("viewed.viewer", n.viewed),
          this.$viewer
            .on("click.viewer", t.proxy(this.click, this))
            .on("wheel mousewheel DOMMouseScroll", t.proxy(this.wheel, this)),
          this.$canvas.on(p, t.proxy(this.mousedown, this)),
          i
            .on(
              "mousemove touchmove pointermove MSPointerMove",
              (this._mousemove = T(this.mousemove, this))
            )
            .on(f, (this._mouseup = T(this.mouseup, this)))
            .on("keydown.viewer", (this._keydown = T(this.keydown, this))),
          e.on("resize.viewer", (this._resize = T(this.resize, this)));
      },
      unbind: function () {
        var n = this.options,
          s = this.$element;
        t.isFunction(n.view) && s.off("view.viewer", n.view),
          t.isFunction(n.viewed) && s.off("viewed.viewer", n.viewed),
          this.$viewer
            .off("click.viewer", this.click)
            .off("wheel mousewheel DOMMouseScroll", this.wheel),
          this.$canvas.off(p, this.mousedown),
          i
            .off(
              "mousemove touchmove pointermove MSPointerMove",
              this._mousemove
            )
            .off(f, this._mouseup)
            .off("keydown.viewer", this._keydown),
          e.off("resize.viewer", this._resize);
      },
      render: function () {
        this.initContainer(),
          this.initViewer(),
          this.initList(),
          this.renderViewer();
      },
      initContainer: function () {
        this.container = { width: e.innerWidth(), height: e.innerHeight() };
      },
      initViewer: function () {
        var e,
          i = this.options,
          n = this.$parent;
        i.inline &&
          (this.parent = e = {
            width: y(n.width(), i.minWidth),
            height: y(n.height(), i.minHeight),
          }),
          (!this.isFulled && e) || (e = this.container),
          (this.viewer = t.extend({}, e));
      },
      renderViewer: function () {
        this.options.inline && !this.isFulled && this.$viewer.css(this.viewer);
      },
      initList: function () {
        var e = this.options,
          i = this.$element,
          n = this.$list,
          s = [];
        this.$images.each(function (i) {
          var n = this.src,
            o =
              this.alt ||
              (function (t) {
                return x(t)
                  ? t.replace(/^.*\//, "").replace(/[\?&#].*$/, "")
                  : "";
              })(n),
            a = e.url;
          n &&
            (x(a)
              ? (a = this.getAttribute(a))
              : t.isFunction(a) && (a = a.call(this, this)),
            s.push(
              '<li><img src="' +
                n +
                '" data-action="view" data-index="' +
                i +
                '" data-original-url="' +
                (a || n) +
                '" alt="' +
                o +
                '"></li>'
            ));
        }),
          n
            .html(s.join(""))
            .find("img")
            .one("load.viewer", { filled: !0 }, t.proxy(this.loadImage, this)),
          (this.$items = n.children()),
          e.transition &&
            i.one("viewed.viewer", function () {
              n.addClass(d);
            });
      },
      renderList: function (t) {
        var e = t || this.index,
          i = this.$items.eq(e).width(),
          n = i + 1;
        this.$list.css({
          width: n * this.length,
          marginLeft: (this.viewer.width - i) / 2 - n * e,
        });
      },
      resetList: function () {
        this.$list.empty().removeClass(d).css("margin-left", 0);
      },
      initImage: function (e) {
        var i = this.options,
          n = this.$image,
          s = this.viewer,
          o = this.$footer.height(),
          a = s.width,
          r = y(s.height - o, o),
          l = this.image || {};
        D(
          n[0],
          t.proxy(function (n, s) {
            var o,
              c,
              h = n / s,
              u = a,
              d = r;
            r * h > a ? (d = a / h) : (u = r * h),
              (c = {
                naturalWidth: n,
                naturalHeight: s,
                aspectRatio: h,
                ratio: (u = _(0.9 * u, n)) / n,
                width: u,
                height: (d = _(0.9 * d, s)),
                left: (a - u) / 2,
                top: (r - d) / 2,
              }),
              (o = t.extend({}, c)),
              i.rotatable && ((c.rotate = l.rotate || 0), (o.rotate = 0)),
              i.scalable &&
                ((c.scaleX = l.scaleX || 1),
                (c.scaleY = l.scaleY || 1),
                (o.scaleX = 1),
                (o.scaleY = 1)),
              (this.image = c),
              (this.initialImage = o),
              t.isFunction(e) && e();
          }, this)
        );
      },
      renderImage: function (e) {
        var i,
          n,
          s,
          o,
          a,
          r = this.image,
          l = this.$image;
        l.css({
          width: r.width,
          height: r.height,
          marginLeft: r.left,
          marginTop: r.top,
          transform:
            ((i = r),
            (n = []),
            (s = i.rotate),
            (o = i.scaleX),
            (a = i.scaleY),
            C(s) && n.push("rotate(" + s + "deg)"),
            C(o) && C(a) && n.push("scale(" + o + "," + a + ")"),
            n.length ? n.join(" ") : "none"),
        }),
          t.isFunction(e) &&
            (this.transitioning ? l.one("transitionend", e) : e());
      },
      resetImage: function () {
        this.$image.remove(), (this.$image = null);
      },
      start: function (e) {
        var i = e.target;
        t(i).is("img") && ((this.target = i), this.show());
      },
      click: function (e) {
        var i = t(e.target),
          n = i.data("action"),
          s = this.image;
        switch (n) {
          case "mix":
            this.isPlayed
              ? this.stop()
              : this.options.inline
              ? this.isFulled
                ? this.exit()
                : this.full()
              : this.hide();
            break;
          case "view":
            this.view(i.data("index"));
            break;
          case "zoom-in":
            this.zoom(0.1, !0);
            break;
          case "zoom-out":
            this.zoom(-0.1, !0);
            break;
          case "one-to-one":
            this.toggle();
            break;
          case "reset":
            this.reset();
            break;
          case "prev":
            this.prev();
            break;
          case "play":
            this.play();
            break;
          case "next":
            this.next();
            break;
          case "rotate-left":
            this.rotate(-90);
            break;
          case "rotate-right":
            this.rotate(90);
            break;
          case "flip-horizontal":
            this.scaleX(-s.scaleX || -1);
            break;
          case "flip-vertical":
            this.scaleY(-s.scaleY || -1);
            break;
          default:
            this.isPlayed && this.stop();
        }
      },
      load: function () {
        var e = this.options,
          i = this.viewer,
          n = this.$image;
        this.timeout && (clearTimeout(this.timeout), (this.timeout = !1)),
          n
            .removeClass("viewer-invisible")
            .css(
              "cssText",
              "width:0;height:0;margin-left:" +
                i.width / 2 +
                "px;margin-top:" +
                i.height / 2 +
                "px;max-width:none!important;visibility:visible;"
            ),
          this.initImage(
            t.proxy(function () {
              n
                .toggleClass(d, e.transition)
                .toggleClass("viewer-move", e.movable),
                this.renderImage(
                  t.proxy(function () {
                    (this.isViewed = !0), this.trigger("viewed.viewer");
                  }, this)
                );
            }, this)
          );
      },
      loadImage: function (e) {
        var i = e.target,
          n = t(i),
          s = n.parent(),
          o = s.width(),
          a = s.height(),
          r = e.data && e.data.filled;
        D(i, function (t, e) {
          var i = t / e,
            s = o,
            l = a;
          a * i > o
            ? r
              ? (s = a * i)
              : (l = o / i)
            : r
            ? (l = o / i)
            : (s = a * i),
            n.css({
              width: s,
              height: l,
              marginLeft: (o - s) / 2,
              marginTop: (a - l) / 2,
            });
        });
      },
      resize: function () {
        this.initContainer(),
          this.initViewer(),
          this.renderViewer(),
          this.renderList(),
          this.initImage(
            t.proxy(function () {
              this.renderImage();
            }, this)
          ),
          this.isPlayed &&
            this.$player
              .find("img")
              .one("load.viewer", t.proxy(this.loadImage, this))
              .trigger("load.viewer");
      },
      wheel: function (e) {
        var i = e.originalEvent || e,
          n = w(this.options.zoomRatio) || 0.1,
          s = 1;
        this.isViewed &&
          (e.preventDefault(),
          this.wheeling ||
            ((this.wheeling = !0),
            setTimeout(
              t.proxy(function () {
                this.wheeling = !1;
              }, this),
              50
            ),
            i.deltaY
              ? (s = i.deltaY > 0 ? 1 : -1)
              : i.wheelDelta
              ? (s = -i.wheelDelta / 120)
              : i.detail && (s = i.detail > 0 ? 1 : -1),
            this.zoom(-s * n, !0, e)));
      },
      keydown: function (t) {
        var e = this.options,
          i = t.which;
        if (this.isFulled && e.keyboard)
          switch (i) {
            case 27:
              this.isPlayed
                ? this.stop()
                : e.inline
                ? this.isFulled && this.exit()
                : this.hide();
              break;
            case 32:
              this.isPlayed && this.stop();
              break;
            case 37:
              this.prev();
              break;
            case 38:
              t.preventDefault(), this.zoom(e.zoomRatio, !0);
              break;
            case 39:
              this.next();
              break;
            case 40:
              t.preventDefault(), this.zoom(-e.zoomRatio, !0);
              break;
            case 48:
            case 49:
              (t.ctrlKey || t.shiftKey) && (t.preventDefault(), this.toggle());
          }
      },
      mousedown: function (t) {
        var e,
          i = this.options,
          n = t.originalEvent,
          s = n && n.touches,
          o = t,
          a = !!i.movable && "move";
        if (this.isViewed) {
          if (s) {
            if ((e = s.length) > 1) {
              if (!i.zoomable || 2 !== e) return;
              (o = s[1]),
                (this.startX2 = o.pageX),
                (this.startY2 = o.pageY),
                (a = "zoom");
            } else this.isSwitchable() && (a = "switch");
            o = s[0];
          }
          a &&
            (t.preventDefault(),
            (this.action = a),
            (this.startX = o.pageX || (n && n.pageX)),
            (this.startY = o.pageY || (n && n.pageY)));
        }
      },
      mousemove: function (t) {
        var e,
          i = this.options,
          n = this.action,
          s = this.$image,
          o = t.originalEvent,
          a = o && o.touches,
          r = t;
        if (this.isViewed) {
          if (a) {
            if ((e = a.length) > 1) {
              if (!i.zoomable || 2 !== e) return;
              (r = a[1]), (this.endX2 = r.pageX), (this.endY2 = r.pageY);
            }
            r = a[0];
          }
          n &&
            (t.preventDefault(),
            "move" === n && i.transition && s.hasClass(d) && s.removeClass(d),
            (this.endX = r.pageX || (o && o.pageX)),
            (this.endY = r.pageY || (o && o.pageY)),
            this.change(t));
        }
      },
      mouseup: function (t) {
        var e = this.action;
        e &&
          (t.preventDefault(),
          "move" === e && this.options.transition && this.$image.addClass(d),
          (this.action = !1));
      },
      show: function () {
        var e,
          i = this.options;
        i.inline ||
          this.transitioning ||
          (this.isBuilt || this.build(),
          t.isFunction(i.show) && this.$element.one("show.viewer", i.show),
          this.trigger("show.viewer").isDefaultPrevented() ||
            (this.$body.addClass("viewer-open"),
            (e = this.$viewer.removeClass(a)),
            this.$element.one(
              "shown.viewer",
              t.proxy(function () {
                this.view(
                  this.target ? this.$images.index(this.target) : this.index
                ),
                  (this.target = !1);
              }, this)
            ),
            i.transition
              ? ((this.transitioning = !0),
                e.addClass(d),
                I(e[0]),
                e.one("transitionend", t.proxy(this.shown, this)).addClass(u))
              : (e.addClass(u), this.shown())));
      },
      hide: function () {
        var e = this.options,
          i = this.$viewer;
        e.inline ||
          this.transitioning ||
          !this.isShown ||
          (t.isFunction(e.hide) && this.$element.one("hide.viewer", e.hide),
          this.trigger("hide.viewer").isDefaultPrevented() ||
            (this.isViewed && e.transition
              ? ((this.transitioning = !0),
                this.$image.one(
                  "transitionend",
                  t.proxy(function () {
                    i.one(
                      "transitionend",
                      t.proxy(this.hidden, this)
                    ).removeClass(u);
                  }, this)
                ),
                this.zoomTo(0, !1, !1, !0))
              : (i.removeClass(u), this.hidden())));
      },
      view: function (e) {
        var i,
          n,
          s,
          o,
          a,
          r = this.$title;
        (e = Number(e) || 0),
          !this.isShown ||
            this.isPlayed ||
            e < 0 ||
            e >= this.length ||
            (this.isViewed && e === this.index) ||
            this.trigger("view.viewer").isDefaultPrevented() ||
            ((o = (s = (n = this.$items.eq(e)).find("img")).data(
              "originalUrl"
            )),
            (a = s.attr("alt")),
            (this.$image = i = t('<img src="' + o + '" alt="' + a + '">')),
            this.isViewed &&
              this.$items.eq(this.index).removeClass("viewer-active"),
            n.addClass("viewer-active"),
            (this.isViewed = !1),
            (this.index = e),
            (this.image = null),
            this.$canvas.html(i.addClass("viewer-invisible")),
            this.renderList(),
            r.empty(),
            this.$element.one(
              "viewed.viewer",
              t.proxy(function () {
                var t = this.image;
                t.naturalWidth, t.naturalHeight;
                r.html(a);
              }, this)
            ),
            i[0].complete
              ? this.load()
              : (i.one("load.viewer", t.proxy(this.load, this)),
                this.timeout && clearTimeout(this.timeout),
                (this.timeout = setTimeout(
                  t.proxy(function () {
                    i.removeClass("viewer-invisible"), (this.timeout = !1);
                  }, this),
                  1e3
                ))));
      },
      prev: function () {
        this.view(y(this.index - 1, 0));
      },
      next: function () {
        this.view(_(this.index + 1, this.length - 1));
      },
      move: function (t, e) {
        var i = this.image;
        this.moveTo(k(t) ? t : i.left + w(t), k(e) ? e : i.top + w(e));
      },
      moveTo: function (t, e) {
        var i = this.image,
          n = !1;
        k(e) && (e = t),
          (t = w(t)),
          (e = w(e)),
          this.isViewed &&
            !this.isPlayed &&
            this.options.movable &&
            (C(t) && ((i.left = t), (n = !0)),
            C(e) && ((i.top = e), (n = !0)),
            n && this.renderImage());
      },
      zoom: function (t, e, i) {
        var n = this.image;
        (t = (t = w(t)) < 0 ? 1 / (1 - t) : 1 + t),
          this.zoomTo((n.width * t) / n.naturalWidth, e, i);
      },
      zoomTo: function (e, i, n, s) {
        var o,
          a,
          r,
          l,
          c,
          h,
          u,
          d,
          p,
          f = this.options,
          m = 0.01,
          g = 100,
          v = this.image,
          b = v.width,
          w = v.height;
        C((e = y(0, e))) &&
          this.isViewed &&
          !this.isPlayed &&
          (s || f.zoomable) &&
          (s ||
            ((m = y(m, f.minZoomRatio)),
            (g = _(g, f.maxZoomRatio)),
            (e = _(y(e, m), g))),
          e > 0.95 && e < 1.05 && (e = 1),
          (a = v.naturalWidth * e),
          (r = v.naturalHeight * e),
          n && (o = n.originalEvent)
            ? ((l = this.$viewer.offset()),
              (c = o.touches
                ? ((h = o.touches),
                  (u = h.length),
                  (d = 0),
                  (p = 0),
                  u &&
                    (t.each(h, function (t, e) {
                      (d += e.pageX), (p += e.pageY);
                    }),
                    (d /= u),
                    (p /= u)),
                  { pageX: d, pageY: p })
                : {
                    pageX: n.pageX || o.pageX || 0,
                    pageY: n.pageY || o.pageY || 0,
                  }),
              (v.left -= (a - b) * ((c.pageX - l.left - v.left) / b)),
              (v.top -= (r - w) * ((c.pageY - l.top - v.top) / w)))
            : ((v.left -= (a - b) / 2), (v.top -= (r - w) / 2)),
          (v.width = a),
          (v.height = r),
          (v.ratio = e),
          this.renderImage(),
          i && this.tooltip());
      },
      rotate: function (t) {
        this.rotateTo((this.image.rotate || 0) + w(t));
      },
      rotateTo: function (t) {
        var e = this.image;
        C((t = w(t))) &&
          this.isViewed &&
          !this.isPlayed &&
          this.options.rotatable &&
          ((e.rotate = t), this.renderImage());
      },
      scale: function (t, e) {
        var i = this.image,
          n = !1;
        k(e) && (e = t),
          (t = w(t)),
          (e = w(e)),
          this.isViewed &&
            !this.isPlayed &&
            this.options.scalable &&
            (C(t) && ((i.scaleX = t), (n = !0)),
            C(e) && ((i.scaleY = e), (n = !0)),
            n && this.renderImage());
      },
      scaleX: function (t) {
        this.scale(t, this.image.scaleY);
      },
      scaleY: function (t) {
        this.scale(this.image.scaleX, t);
      },
      play: function () {
        var e,
          i = this.options,
          n = this.$player,
          s = t.proxy(this.loadImage, this),
          a = [],
          r = 0,
          l = 0;
        this.isShown &&
          !this.isPlayed &&
          (i.fullscreen && this.requestFullscreen(),
          (this.isPlayed = !0),
          n.addClass(o),
          this.$items.each(function (e) {
            var o = t(this),
              c = o.find("img"),
              p = t(
                '<img src="' +
                  c.data("originalUrl") +
                  '" alt="' +
                  c.attr("alt") +
                  '">'
              );
            r++,
              p.addClass(h).toggleClass(d, i.transition),
              o.hasClass("viewer-active") && (p.addClass(u), (l = e)),
              a.push(p),
              p.one("load.viewer", { filled: !1 }, s),
              n.append(p);
          }),
          C(i.interval) &&
            i.interval > 0 &&
            ((e = t.proxy(function () {
              this.playing = setTimeout(function () {
                a[l].removeClass(u), a[(l = ++l < r ? l : 0)].addClass(u), e();
              }, i.interval);
            }, this)),
            r > 1 && e()));
      },
      stop: function () {
        this.isPlayed &&
          (this.options.fullscreen && this.exitFullscreen(),
          (this.isPlayed = !1),
          clearTimeout(this.playing),
          this.$player.removeClass(o).empty());
      },
      full: function () {
        var e = this.options,
          i = this.$image,
          n = this.$list;
        this.isShown &&
          !this.isPlayed &&
          !this.isFulled &&
          e.inline &&
          ((this.isFulled = !0),
          this.$body.addClass("viewer-open"),
          this.$button.addClass("viewer-fullscreen-exit"),
          e.transition && (i.removeClass(d), n.removeClass(d)),
          this.$viewer.addClass(s).removeAttr("style").css("z-index", e.zIndex),
          this.initContainer(),
          (this.viewer = t.extend({}, this.container)),
          this.renderList(),
          this.initImage(
            t.proxy(function () {
              this.renderImage(function () {
                e.transition &&
                  setTimeout(function () {
                    i.addClass(d), n.addClass(d);
                  }, 0);
              });
            }, this)
          ));
      },
      exit: function () {
        var e = this.options,
          i = this.$image,
          n = this.$list;
        this.isFulled &&
          ((this.isFulled = !1),
          this.$body.removeClass("viewer-open"),
          this.$button.removeClass("viewer-fullscreen-exit"),
          e.transition && (i.removeClass(d), n.removeClass(d)),
          this.$viewer.removeClass(s).css("z-index", e.zIndexInline),
          (this.viewer = t.extend({}, this.parent)),
          this.renderViewer(),
          this.renderList(),
          this.initImage(
            t.proxy(function () {
              this.renderImage(function () {
                e.transition &&
                  setTimeout(function () {
                    i.addClass(d), n.addClass(d);
                  }, 0);
              });
            }, this)
          ));
      },
      tooltip: function () {
        var e = this.options,
          i = this.$tooltip,
          n = this.image,
          s = [o, h, d].join(" ");
        this.isViewed &&
          !this.isPlayed &&
          e.tooltip &&
          (i.text(g(100 * n.ratio) + "%"),
          this.tooltiping
            ? clearTimeout(this.tooltiping)
            : e.transition
            ? (this.fading && i.trigger("transitionend"),
              i.addClass(s),
              I(i[0]),
              i.addClass(u))
            : i.addClass(o),
          (this.tooltiping = setTimeout(
            t.proxy(function () {
              e.transition
                ? (i
                    .one(
                      "transitionend",
                      t.proxy(function () {
                        i.removeClass(s), (this.fading = !1);
                      }, this)
                    )
                    .removeClass(u),
                  (this.fading = !0))
                : i.removeClass(o),
                (this.tooltiping = !1);
            }, this),
            1e3
          )));
      },
      toggle: function () {
        1 === this.image.ratio
          ? this.zoomTo(this.initialImage.ratio, !0)
          : this.zoomTo(1, !0);
      },
      reset: function () {
        this.isViewed &&
          !this.isPlayed &&
          ((this.image = t.extend({}, this.initialImage)), this.renderImage());
      },
      update: function () {
        var e,
          i = this.$element,
          n = this.$images,
          s = [];
        if (this.isImg) {
          if (!i.parent().length) return this.destroy();
        } else (this.$images = n = i.find("img")), (this.length = n.length);
        this.isBuilt &&
          (t.each(this.$items, function (e) {
            var i = t(this).find("img")[0],
              o = n[e];
            o ? o.src !== i.src && s.push(e) : s.push(e);
          }),
          this.$list.width("auto"),
          this.initList(),
          this.isShown &&
            (this.length
              ? this.isViewed &&
                ((e = t.inArray(this.index, s)) >= 0
                  ? ((this.isViewed = !1),
                    this.view(y(this.index - (e + 1), 0)))
                  : this.$items.eq(this.index).addClass("viewer-active"))
              : ((this.$image = null),
                (this.isViewed = !1),
                (this.index = 0),
                (this.image = null),
                this.$canvas.empty(),
                this.$title.empty())));
      },
      destroy: function () {
        var t = this.$element;
        this.options.inline
          ? this.unbind()
          : (this.isShown && this.unbind(), t.off("click.viewer", this.start)),
          this.unbuild(),
          t.removeData("viewer");
      },
      trigger: function (e, i) {
        var n = t.Event(e, i);
        return this.$element.trigger(n), n;
      },
      shown: function () {
        var e = this.options;
        (this.transitioning = !1),
          (this.isFulled = !0),
          (this.isShown = !0),
          (this.isVisible = !0),
          this.render(),
          this.bind(),
          t.isFunction(e.shown) && this.$element.one("shown.viewer", e.shown),
          this.trigger("shown.viewer");
      },
      hidden: function () {
        var e = this.options;
        (this.transitioning = !1),
          (this.isViewed = !1),
          (this.isFulled = !1),
          (this.isShown = !1),
          (this.isVisible = !1),
          this.unbind(),
          this.$body.removeClass("viewer-open"),
          this.$viewer.addClass(a),
          this.resetList(),
          this.resetImage(),
          t.isFunction(e.hidden) &&
            this.$element.one("hidden.viewer", e.hidden),
          this.trigger("hidden.viewer");
      },
      requestFullscreen: function () {
        var t = document.documentElement;
        !this.isFulled ||
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          (t.requestFullscreen
            ? t.requestFullscreen()
            : t.msRequestFullscreen
            ? t.msRequestFullscreen()
            : t.mozRequestFullScreen
            ? t.mozRequestFullScreen()
            : t.webkitRequestFullscreen &&
              t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT));
      },
      exitFullscreen: function () {
        this.isFulled &&
          (document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen());
      },
      change: function (t) {
        var e,
          i,
          n,
          s,
          o,
          a = this.endX - this.startX,
          r = this.endY - this.startY;
        switch (this.action) {
          case "move":
            this.move(a, r);
            break;
          case "zoom":
            this.zoom(
              ((e = b(this.startX - this.startX2)),
              (i = b(this.startY - this.startY2)),
              (n = b(this.endX - this.endX2)),
              (s = b(this.endY - this.endY2)),
              (o = v(e * e + i * i)),
              (v(n * n + s * s) - o) / o),
              !1,
              t
            ),
              (this.startX2 = this.endX2),
              (this.startY2 = this.endY2);
            break;
          case "switch":
            (this.action = "switched"),
              b(a) > b(r) && (a > 1 ? this.prev() : a < -1 && this.next());
        }
        (this.startX = this.endX), (this.startY = this.endY);
      },
      isSwitchable: function () {
        var t = this.image,
          e = this.viewer;
        return (
          t.left >= 0 &&
          t.top >= 0 &&
          t.width <= e.width &&
          t.height <= e.height
        );
      },
    }),
      (M.DEFAULTS = {
        inline: !1,
        button: !0,
        navbar: !0,
        title: !0,
        toolbar: !0,
        tooltip: !0,
        movable: !0,
        zoomable: !0,
        rotatable: !0,
        scalable: !0,
        transition: !0,
        fullscreen: !0,
        keyboard: !0,
        interval: 5e3,
        minWidth: 200,
        minHeight: 100,
        zoomRatio: 0.1,
        minZoomRatio: 0.01,
        maxZoomRatio: 100,
        zIndex: 2015,
        zIndexInline: 0,
        url: "src",
        build: null,
        built: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null,
        view: null,
        viewed: null,
      }),
      (M.TEMPLATE =
        '<div class="viewer-container"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><ul class="viewer-toolbar"><li class="viewer-zoom-in" data-action="zoom-in"></li><li class="viewer-zoom-out" data-action="zoom-out"></li><li class="viewer-one-to-one" data-action="one-to-one"></li><li class="viewer-reset" data-action="reset"></li><li class="viewer-prev" data-action="prev"></li><li class="viewer-play" data-action="play"></li><li class="viewer-next" data-action="next"></li><li class="viewer-rotate-left" data-action="rotate-left"></li><li class="viewer-rotate-right" data-action="rotate-right"></li><li class="viewer-flip-horizontal" data-action="flip-horizontal"></li><li class="viewer-flip-vertical" data-action="flip-vertical"></li></ul><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div class="viewer-button" data-action="mix"></div><div class="viewer-player"></div></div>'),
      (M.other = t.fn.viewer),
      (t.fn.viewer = function (e) {
        var i,
          n = S(arguments, 1);
        return (
          this.each(function () {
            var s,
              o = t(this),
              a = o.data("viewer");
            if (!a) {
              if (/destroy|hide|exit|stop|reset/.test(e)) return;
              o.data("viewer", (a = new M(this, e)));
            }
            x(e) && t.isFunction((s = a[e])) && (i = s.apply(a, n));
          }),
          k(i) ? this : i
        );
      }),
      (t.fn.viewer.Constructor = M),
      (t.fn.viewer.setDefaults = M.setDefaults),
      (t.fn.viewer.noConflict = function () {
        return (t.fn.viewer = M.other), this;
      });
  }),
  $(window).load(function () {
    "use strict";
    var t = window.console || { log: function () {} },
      e = $(".docs-pictures"),
      i = $(".docs-toggles"),
      n = $(".docs-buttons"),
      s = {
        url: "data-original",
        build: function (e) {
          t.log(e.type);
        },
        built: function (e) {
          t.log(e.type);
        },
        show: function (e) {
          t.log(e.type);
        },
        shown: function (e) {
          t.log(e.type);
        },
        hide: function (e) {
          t.log(e.type);
        },
        hidden: function (e) {
          t.log(e.type);
        },
        view: function (e) {
          t.log(e.type);
        },
        viewed: function (e) {
          t.log(e.type);
        },
      };
    function o(t) {
      /modal|inline|none/.test(t) &&
        n
          .find("button[data-enable]")
          .prop("disabled", !0)
          .filter('[data-enable*="' + t + '"]')
          .prop("disabled", !1);
    }
    e
      .on({
        "build.viewer": function (e) {
          t.log(e.type);
        },
        "built.viewer": function (e) {
          t.log(e.type);
        },
        "show.viewer": function (e) {
          t.log(e.type);
        },
        "shown.viewer": function (e) {
          t.log(e.type);
        },
        "hide.viewer": function (e) {
          t.log(e.type);
        },
        "hidden.viewer": function (e) {
          t.log(e.type);
        },
        "view.viewer": function (e) {
          t.log(e.type);
        },
        "viewed.viewer": function (e) {
          t.log(e.type);
        },
      })
      .viewer(s),
      o(s.inline ? "inline" : "modal"),
      i.on("change", "input", function () {
        var t = $(this),
          i = t.attr("name");
        (s[i] = "inline" === i ? t.data("value") : t.prop("checked")),
          e.viewer("destroy").viewer(s),
          o(s.inline ? "inline" : "modal");
      }),
      n.on("click", "button", function () {
        var t = $(this).data(),
          i = t.arguments || [];
        if (t.method)
          switch (
            (t.target
              ? e.viewer(t.method, $(t.target).val())
              : e.viewer(t.method, i[0], i[1]),
            t.method)
          ) {
            case "scaleX":
            case "scaleY":
              i[0] = -i[0];
              break;
            case "destroy":
              o("none");
          }
      });
  }),
  (function (t) {
    var e,
      i,
      n,
      s,
      o,
      a,
      r,
      l = function () {},
      c = !!window.jQuery,
      h = t(window),
      u = function (t, i) {
        e.ev.on("mfp" + t + ".mfp", i);
      },
      d = function (e, i, n, s) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + e),
          n && (o.innerHTML = n),
          s ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)),
          o
        );
      },
      p = function (i, n) {
        e.ev.triggerHandler("mfp" + i, n),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] &&
              e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
      },
      f = function (i) {
        return (
          (i === r && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (r = i)),
          e.currTemplate.closeBtn
        );
      },
      m = function () {
        t.magnificPopup.instance ||
          ((e = new l()).init(), (t.magnificPopup.instance = e));
      };
    (l.prototype = {
      constructor: l,
      init: function () {
        var i = navigator.appVersion;
        (e.isIE7 = -1 !== i.indexOf("MSIE 7.")),
          (e.isIE8 = -1 !== i.indexOf("MSIE 8.")),
          (e.isLowIE = e.isIE7 || e.isIE8),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = (function () {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (s = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        var o;
        if ((n || (n = t(document.body)), !1 === i.isObj)) {
          (e.items = i.items.toArray()), (e.index = 0);
          var r,
            l = i.items;
          for (o = 0; o < l.length; o++)
            if (((r = l[o]).parsed && (r = r.el[0]), r === i.el[0])) {
              e.index = o;
              break;
            }
        } else
          (e.items = t.isArray(i.items) ? i.items : [i.items]),
            (e.index = i.index || 0);
        if (!e.isOpen) {
          (e.types = []),
            (a = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = s),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = d("bg").on("click.mfp", function () {
                e.close();
              })),
              (e.wrap = d("wrap")
                .attr("tabindex", -1)
                .on("click.mfp", function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = d("container", e.wrap))),
            (e.contentContainer = d("content")),
            e.st.preloader &&
              (e.preloader = d("preloader", e.container, e.st.tLoading));
          var c = t.magnificPopup.modules;
          for (o = 0; o < c.length; o++) {
            var m = c[o];
            (m = m.charAt(0).toUpperCase() + m.slice(1)), e["init" + m].call(e);
          }
          p("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (u("MarkupParse", function (t, e, i, n) {
                    i.close_replaceWith = f(n.type);
                  }),
                  (a += " mfp-close-btn-in"))
                : e.wrap.append(f())),
            e.st.alignTop && (a += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: h.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: s.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              s.on("keyup.mfp", function (t) {
                27 === t.keyCode && e.close();
              }),
            h.on("resize.mfp", function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && e.wrap.addClass(a);
          var g = (e.wH = h.height()),
            v = {};
          if (e.fixedContentPos && e._hasScrollBar(g)) {
            var b = e._getScrollbarSize();
            b && (v.marginRight = b);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (v.overflow = "hidden"));
          var _ = e.st.mainClass;
          return (
            e.isIE7 && (_ += " mfp-ie7"),
            _ && e._addClassToMFP(_),
            e.updateItemHTML(),
            p("BuildControls"),
            t("html").css(v),
            e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP("mfp-ready"), e._setFocus())
                : e.bgOverlay.addClass("mfp-ready"),
                s.on("focusin.mfp", e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(g),
            p("Open"),
            i
          );
        }
        e.updateItemHTML();
      },
      close: function () {
        e.isOpen &&
          (p("BeforeClose"),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP("mfp-removing"),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        p("Close");
        var i = "mfp-removing mfp-ready ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + " "),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var n = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (n.overflow = ""),
            t("html").css(n);
        }
        s.off("keyup.mfp focusin.mfp"),
          e.ev.off(".mfp"),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          p("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          e.wrap.css("height", n), (e.wH = n);
        } else e.wH = t || h.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), p("Resize");
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          i.parsed || (i = e.parseEl(e.index));
        var n = i.type;
        if (
          (p("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
          (e.currItem = i),
          !e.currTemplate[n])
        ) {
          var s = !!e.st[n] && e.st[n].markup;
          p("FirstMarkupParse", s), (e.currTemplate[n] = !s || t(s));
        }
        o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
        var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](
          i,
          e.currTemplate[n]
        );
        e.appendContent(a, n),
          (i.preloaded = !0),
          p("Change", i),
          (o = i.type),
          e.container.prepend(e.contentContainer),
          p("AfterChange");
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[i]
              ? e.content.find(".mfp-close").length || e.content.append(f())
              : (e.content = t)
            : (e.content = ""),
          p("BeforeAppend"),
          e.container.addClass("mfp-" + i + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var n,
          s = e.items[i];
        if (
          (s.tagName
            ? (s = { el: t(s) })
            : ((n = s.type), (s = { data: s, src: s.src })),
          s.el)
        ) {
          for (var o = e.types, a = 0; a < o.length; a++)
            if (s.el.hasClass("mfp-" + o[a])) {
              n = o[a];
              break;
            }
          (s.src = s.el.attr("data-mfp-src")),
            s.src || (s.src = s.el.attr("href"));
        }
        return (
          (s.type = n || e.st.type || "inline"),
          (s.index = i),
          (s.parsed = !0),
          (e.items[i] = s),
          p("ElementParse", s),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var n = function (n) {
          (n.mfpEl = this), e._openClick(n, t, i);
        };
        i || (i = {});
        var s = "click.magnificPopup";
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(s).on(s, n))
            : ((i.isObj = !1),
              i.delegate
                ? t.off(s).on(s, i.delegate, n)
                : ((i.items = t), t.off(s).on(s, n)));
      },
      _openClick: function (i, n, s) {
        if (
          (void 0 !== s.midClick
            ? s.midClick
            : t.magnificPopup.defaults.midClick) ||
          (2 !== i.which && !i.ctrlKey && !i.metaKey)
        ) {
          var o =
            void 0 !== s.disableOn
              ? s.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (o)
            if (t.isFunction(o)) {
              if (!o.call(e)) return !0;
            } else if (h.width() < o) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (s.el = t(i.mfpEl)),
            s.delegate && (s.items = n.find(s.delegate)),
            e.open(s);
        }
      },
      updateStatus: function (t, n) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i),
            n || "loading" !== t || (n = e.st.tLoading);
          var s = { status: t, text: n };
          p("UpdateStatus", s),
            (t = s.status),
            (n = s.text),
            e.preloader.html(n),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass("mfp-prevent-close")) {
          var n = e.st.closeOnContentClick,
            s = e.st.closeOnBgClick;
          if (n && s) return !0;
          if (
            !e.content ||
            t(i).hasClass("mfp-close") ||
            (e.preloader && i === e.preloader[0])
          )
            return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (n) return !0;
          } else if (s && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? s.height() : document.body.scrollHeight) >
          (t || h.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
          return e._setFocus(), !1;
      },
      _parseMarkup: function (e, i, n) {
        var s;
        n.data && (i = t.extend(n.data, i)),
          p("MarkupParse", [e, i, n]),
          t.each(i, function (t, i) {
            if (void 0 === i || !1 === i) return !0;
            if ((s = t.split("_")).length > 1) {
              var n = e.find(".mfp-" + s[0]);
              if (n.length > 0) {
                var o = s[1];
                "replaceWith" === o
                  ? n[0] !== i[0] && n.replaceWith(i)
                  : "img" === o
                  ? n.is("img")
                    ? n.attr("src", i)
                    : n.replaceWith(
                        '<img src="' +
                          i +
                          '" class="' +
                          n.attr("class") +
                          '" />'
                      )
                  : n.attr(s[1], i);
              }
            } else e.find(".mfp-" + t).html(i);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.id = "mfp-sbm"),
            (t.style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: l.prototype,
        modules: [],
        open: function (e, i) {
          return (
            m(),
            ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = i || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&times;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
        },
      }),
      (t.fn.magnificPopup = function (i) {
        m();
        var n = t(this);
        if ("string" == typeof i)
          if ("open" === i) {
            var s,
              o = c ? n.data("magnificPopup") : n[0].magnificPopup,
              a = parseInt(arguments[1], 10) || 0;
            o.items
              ? (s = o.items[a])
              : ((s = n),
                o.delegate && (s = s.find(o.delegate)),
                (s = s.eq(a))),
              e._openClick({ mfpEl: s }, n, o);
          } else
            e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else
          (i = t.extend(!0, {}, i)),
            c ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
            e.addGroup(n, i);
        return n;
      });
    var g,
      v,
      b,
      _ = function () {
        b && (v.after(b.addClass(g)).detach(), (b = null));
      };
    t.magnificPopup.registerModule("inline", {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push("inline"),
            u("Close.inline", function () {
              _();
            });
        },
        getInline: function (i, n) {
          if ((_(), i.src)) {
            var s = e.st.inline,
              o = t(i.src);
            if (o.length) {
              var a = o[0].parentNode;
              a &&
                a.tagName &&
                (v || ((g = s.hiddenClass), (v = d(g)), (g = "mfp-" + g)),
                (b = o.after(v).detach().removeClass(g))),
                e.updateStatus("ready");
            } else e.updateStatus("error", s.tNotFound), (o = t("<div>"));
            return (i.inlineElement = o), o;
          }
          return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
        },
      },
    });
    var y,
      w = function () {
        y && n.removeClass(y);
      },
      x = function () {
        w(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule("ajax", {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push("ajax"),
            (y = e.st.ajax.cursor),
            u("Close.ajax", x),
            u("BeforeChange.ajax", x);
        },
        getAjax: function (i) {
          y && n.addClass(y), e.updateStatus("loading");
          var s = t.extend(
            {
              url: i.src,
              success: function (n, s, o) {
                var a = { data: n, xhr: o };
                p("ParseAjax", a),
                  e.appendContent(t(a.data), "ajax"),
                  (i.finished = !0),
                  w(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass("mfp-ready");
                  }, 16),
                  e.updateStatus("ready"),
                  p("AjaxContentAdded");
              },
              error: function () {
                w(),
                  (i.finished = i.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", i.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(s)), "";
        },
      },
    });
    var C,
      k = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
          if (t.isFunction(n)) return n.call(e, i);
          if (i.el) return i.el.attr(n) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var t = e.st.image,
            i = ".image";
          e.types.push("image"),
            u("Open" + i, function () {
              "image" === e.currItem.type && t.cursor && n.addClass(t.cursor);
            }),
            u("Close" + i, function () {
              t.cursor && n.removeClass(t.cursor), h.off("resize.mfp");
            }),
            u("Resize" + i, e.resizeImage),
            e.isLowIE && u("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE &&
              (i =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            C && clearInterval(C),
            (t.isCheckingImgSize = !1),
            p("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            n = t.img[0],
            s = function (o) {
              C && clearInterval(C),
                (C = setInterval(function () {
                  n.naturalWidth > 0
                    ? e._onImageHasSize(t)
                    : (i > 200 && clearInterval(C),
                      3 === ++i
                        ? s(10)
                        : 40 === i
                        ? s(50)
                        : 100 === i && s(500));
                }, o));
            };
          s(1);
        },
        getImage: function (i, n) {
          var s = 0,
            o = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === e.currItem &&
                      (e._onImageHasSize(i), e.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    p("ImageLoadComplete"))
                  : ++s < 200
                  ? setTimeout(o, 100)
                  : a());
            },
            a = function () {
              i &&
                (i.img.off(".mfploader"),
                i === e.currItem &&
                  (e._onImageHasSize(i),
                  e.updateStatus("error", r.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            r = e.st.image,
            l = n.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              (i.img = t(c).on("load.mfploader", o).on("error.mfploader", a)),
              (c.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (c = i.img[0]).naturalWidth > 0
                ? (i.hasSize = !0)
                : c.width || (i.hasSize = !1);
          }
          return (
            e._parseMarkup(n, { title: k(i), img_replaceWith: i.img }, i),
            e.resizeImage(),
            i.hasSize
              ? (C && clearInterval(C),
                i.loadError
                  ? (n.addClass("mfp-loading"),
                    e.updateStatus("error", r.tError.replace("%url%", i.src)))
                  : (n.removeClass("mfp-loading"), e.updateStatus("ready")),
                n)
              : (e.updateStatus("loading"),
                (i.loading = !0),
                i.hasSize ||
                  ((i.imgHidden = !0),
                  n.addClass("mfp-loading"),
                  e.findImageSize(i)),
                n)
          );
        },
      },
    });
    var S;
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            i = e.st.zoom,
            n = ".zoom";
          if (i.enabled && e.supportsTransition) {
            var s,
              o,
              a = i.duration,
              r = function (t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  n = "all " + i.duration / 1e3 + "s " + i.easing,
                  s = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[
                    o
                  ] = n),
                  e.css(s),
                  e
                );
              },
              l = function () {
                e.content.css("visibility", "visible");
              };
            u("BuildControls" + n, function () {
              if (e._allowZoom()) {
                if (
                  (clearTimeout(s),
                  e.content.css("visibility", "hidden"),
                  !(t = e._getItemToZoom()))
                )
                  return void l();
                (o = r(t)).css(e._getOffset()),
                  e.wrap.append(o),
                  (s = setTimeout(function () {
                    o.css(e._getOffset(!0)),
                      (s = setTimeout(function () {
                        l(),
                          setTimeout(function () {
                            o.remove(), (t = o = null), p("ZoomAnimationEnded");
                          }, 16);
                      }, a));
                  }, 16));
              }
            }),
              u("BeforeClose" + n, function () {
                if (e._allowZoom()) {
                  if ((clearTimeout(s), (e.st.removalDelay = a), !t)) {
                    if (!(t = e._getItemToZoom())) return;
                    o = r(t);
                  }
                  o.css(e._getOffset(!0)),
                    e.wrap.append(o),
                    e.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      o.css(e._getOffset());
                    }, 16);
                }
              }),
              u("Close" + n, function () {
                e._allowZoom() && (l(), o && o.remove(), (t = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type;
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img;
        },
        _getOffset: function (i) {
          var n,
            s = (n = i
              ? e.currItem.img
              : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            o = parseInt(n.css("padding-top"), 10),
            a = parseInt(n.css("padding-bottom"), 10);
          s.top -= t(window).scrollTop() - o;
          var r = {
            width: n.width(),
            height: (c ? n.innerHeight() : n[0].offsetHeight) - a - o,
          };
          return (
            void 0 === S &&
              (S = void 0 !== document.createElement("p").style.MozTransform),
            S
              ? (r["-moz-transform"] = r.transform =
                  "translate(" + s.left + "px," + s.top + "px)")
              : ((r.left = s.left), (r.top = s.top)),
            r
          );
        },
      },
    });
    var T = function (t) {
      if (e.currTemplate.iframe) {
        var i = e.currTemplate.iframe.find("iframe");
        i.length &&
          (t || (i[0].src = "//about:blank"),
          e.isIE8 && i.css("display", t ? "block" : "none"));
      }
    };
    t.magnificPopup.registerModule("iframe", {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "https://player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "https://maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push("iframe"),
            u("BeforeChange", function (t, e, i) {
              e !== i && ("iframe" === e ? T() : "iframe" === i && T(!0));
            }),
            u("Close.iframe", function () {
              T();
            });
        },
        getIframe: function (i, n) {
          var s = i.src,
            o = e.st.iframe;
          t.each(o.patterns, function () {
            if (s.indexOf(this.index) > -1)
              return (
                this.id &&
                  (s =
                    "string" == typeof this.id
                      ? s.substr(
                          s.lastIndexOf(this.id) + this.id.length,
                          s.length
                        )
                      : this.id.call(this, s)),
                (s = this.src.replace("%id%", s)),
                !1
              );
          });
          var a = {};
          return (
            o.srcAction && (a[o.srcAction] = s),
            e._parseMarkup(n, a, i),
            e.updateStatus("ready"),
            n
          );
        },
      },
    });
    var I = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : t < 0 ? i + t : t;
      },
      D = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            n = ".mfp-gallery",
            o = Boolean(t.fn.mfpFastClick);
          if (((e.direction = !0), !i || !i.enabled)) return !1;
          (a += " mfp-gallery"),
            u("Open" + n, function () {
              i.navigateByImgClick &&
                e.wrap.on("click" + n, ".mfp-img", function () {
                  if (e.items.length > 1) return e.next(), !1;
                }),
                s.on("keydown" + n, function (t) {
                  37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                });
            }),
            u("UpdateStatus" + n, function (t, i) {
              i.text && (i.text = D(i.text, e.currItem.index, e.items.length));
            }),
            u("MarkupParse" + n, function (t, n, s, o) {
              var a = e.items.length;
              s.counter = a > 1 ? D(i.tCounter, o.index, a) : "";
            }),
            u("BuildControls" + n, function () {
              if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                var n = i.arrowMarkup,
                  s = (e.arrowLeft = t(
                    n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                  ).addClass("mfp-prevent-close")),
                  a = (e.arrowRight = t(
                    n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")
                  ).addClass("mfp-prevent-close")),
                  r = o ? "mfpFastClick" : "click";
                s[r](function () {
                  e.prev();
                }),
                  a[r](function () {
                    e.next();
                  }),
                  e.isIE7 &&
                    (d("b", s[0], !1, !0),
                    d("a", s[0], !1, !0),
                    d("b", a[0], !1, !0),
                    d("a", a[0], !1, !0)),
                  e.container.append(s.add(a));
              }
            }),
            u("Change" + n, function () {
              e._preloadTimeout && clearTimeout(e._preloadTimeout),
                (e._preloadTimeout = setTimeout(function () {
                  e.preloadNearbyImages(), (e._preloadTimeout = null);
                }, 16));
            }),
            u("Close" + n, function () {
              s.off(n),
                e.wrap.off("click" + n),
                e.arrowLeft &&
                  o &&
                  e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(),
                (e.arrowRight = e.arrowLeft = null);
            });
        },
        next: function () {
          (e.direction = !0), (e.index = I(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = I(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            n = Math.min(i[0], e.items.length),
            s = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? s : n); t++)
            e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? n : s); t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = I(i)), !e.items[i].preloaded)) {
            var n = e.items[i];
            n.parsed || (n = e.parseEl(i)),
              p("LazyLoad", n),
              "image" === n.type &&
                (n.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    n.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (n.hasSize = !0), (n.loadError = !0), p("LazyLoadError", n);
                  })
                  .attr("src", n.src)),
              (n.preloaded = !0);
          }
        },
      },
    });
    var P, M, E;
    t.magnificPopup.registerModule("retina", {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (u("ImageHasSize.retina", function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              u("ElementParse.retina", function (e, n) {
                n.src = t.replaceSrc(n, i);
              }));
          }
        },
      },
    }),
      (P = "ontouchstart" in window),
      (M = function () {
        h.off("touchmove" + E + " touchend" + E);
      }),
      (E = ".mfpFastClick"),
      (t.fn.mfpFastClick = function (e) {
        return t(this).each(function () {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            c = t(this);
          P &&
            c.on("touchstart" + E, function (t) {
              (a = !1),
                (l = 1),
                (r = t.originalEvent
                  ? t.originalEvent.touches[0]
                  : t.touches[0]),
                (s = r.clientX),
                (o = r.clientY),
                h
                  .on("touchmove" + E, function (t) {
                    (r = t.originalEvent ? t.originalEvent.touches : t.touches),
                      (l = r.length),
                      (r = r[0]),
                      (Math.abs(r.clientX - s) > 10 ||
                        Math.abs(r.clientY - o) > 10) &&
                        ((a = !0), M());
                  })
                  .on("touchend" + E, function (t) {
                    M(),
                      a ||
                        l > 1 ||
                        ((i = !0),
                        t.preventDefault(),
                        clearTimeout(n),
                        (n = setTimeout(function () {
                          i = !1;
                        }, 1e3)),
                        e());
                  });
            }),
            c.on("click" + E, function () {
              i || e();
            });
        });
      }),
      (t.fn.destroyMfpFastClick = function () {
        t(this).off("touchstart" + E + " click" + E),
          P && h.off("touchmove" + E + " touchend" + E);
      }),
      m();
  })(window.jQuery || window.Zepto),
  "function" != typeof Object.create &&
    (Object.create = function (t) {
      function e() {}
      return (e.prototype = t), new e();
    }),
  (function (t, e, i, n) {
    var s = {
      init: function (e, i) {
        var n = this;
        (n.$elem = t(i)),
          (n.options = t.extend(
            {},
            t.fn.owlCarousel.options,
            n.$elem.data(),
            e
          )),
          (n.userOptions = e),
          n.loadContent();
      },
      loadContent: function () {
        var e = this;
        if (
          ("function" == typeof e.options.beforeInit &&
            e.options.beforeInit.apply(this, [e.$elem]),
          "string" == typeof e.options.jsonPath)
        ) {
          var i = e.options.jsonPath;
          t.getJSON(i, function (t) {
            if ("function" == typeof e.options.jsonSuccess)
              e.options.jsonSuccess.apply(this, [t]);
            else {
              var i = "";
              for (var n in t.owl) i += t.owl[n].item;
              e.$elem.html(i);
            }
            e.logIn();
          });
        } else e.logIn();
      },
      logIn: function (t) {
        var e = this;
        e.$elem
          .data("owl-originalStyles", e.$elem.attr("style"))
          .data("owl-originalClasses", e.$elem.attr("class")),
          e.$elem.css({ opacity: 0 }),
          (e.orignalItems = e.options.items),
          e.checkBrowser(),
          (e.wrapperWidth = 0),
          e.checkVisible,
          e.setVars();
      },
      setVars: function () {
        var t = this;
        if (0 === t.$elem.children().length) return !1;
        t.baseClass(),
          t.eventTypes(),
          (t.$userItems = t.$elem.children()),
          (t.itemsAmount = t.$userItems.length),
          t.wrapItems(),
          (t.$owlItems = t.$elem.find(".owl-item")),
          (t.$owlWrapper = t.$elem.find(".owl-wrapper")),
          (t.playDirection = "next"),
          (t.prevItem = 0),
          (t.prevArr = [0]),
          (t.currentItem = 0),
          t.customEvents(),
          t.onStartup();
      },
      onStartup: function () {
        var t = this;
        t.updateItems(),
          t.calculateAll(),
          t.buildControls(),
          t.updateControls(),
          t.response(),
          t.moveEvents(),
          t.stopOnHover(),
          t.owlStatus(),
          !1 !== t.options.transitionStyle &&
            t.transitionTypes(t.options.transitionStyle),
          !0 === t.options.autoPlay && (t.options.autoPlay = 5e3),
          t.play(),
          t.$elem.find(".owl-wrapper").css("display", "block"),
          t.$elem.is(":visible")
            ? t.$elem.css("opacity", 1)
            : t.watchVisibility(),
          (t.onstartup = !1),
          t.eachMoveUpdate(),
          "function" == typeof t.options.afterInit &&
            t.options.afterInit.apply(this, [t.$elem]);
      },
      eachMoveUpdate: function () {
        var t = this;
        !0 === t.options.lazyLoad && t.lazyLoad(),
          !0 === t.options.autoHeight && t.autoHeight(),
          t.onVisibleItems(),
          "function" == typeof t.options.afterAction &&
            t.options.afterAction.apply(this, [t.$elem]);
      },
      updateVars: function () {
        var t = this;
        "function" == typeof t.options.beforeUpdate &&
          t.options.beforeUpdate.apply(this, [t.$elem]),
          t.watchVisibility(),
          t.updateItems(),
          t.calculateAll(),
          t.updatePosition(),
          t.updateControls(),
          t.eachMoveUpdate(),
          "function" == typeof t.options.afterUpdate &&
            t.options.afterUpdate.apply(this, [t.$elem]);
      },
      reload: function (t) {
        var e = this;
        setTimeout(function () {
          e.updateVars();
        }, 0);
      },
      watchVisibility: function () {
        var t = this;
        if (!1 !== t.$elem.is(":visible")) return !1;
        t.$elem.css({ opacity: 0 }),
          clearInterval(t.autoPlayInterval),
          clearInterval(t.checkVisible),
          (t.checkVisible = setInterval(function () {
            t.$elem.is(":visible") &&
              (t.reload(),
              t.$elem.animate({ opacity: 1 }, 200),
              clearInterval(t.checkVisible));
          }, 500));
      },
      wrapItems: function () {
        var t = this;
        t.$userItems
          .wrapAll('<div class="owl-wrapper">')
          .wrap('<div class="owl-item"></div>'),
          t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
          (t.wrapperOuter = t.$elem.find(".owl-wrapper-outer")),
          t.$elem.css("display", "block");
      },
      baseClass: function () {
        var t = this,
          e = t.$elem.hasClass(t.options.baseClass),
          i = t.$elem.hasClass(t.options.theme);
        e || t.$elem.addClass(t.options.baseClass),
          i || t.$elem.addClass(t.options.theme);
      },
      updateItems: function () {
        var e = this;
        if (!1 === e.options.responsive) return !1;
        if (!0 === e.options.singleItem)
          return (
            (e.options.items = e.orignalItems = 1),
            (e.options.itemsCustom = !1),
            (e.options.itemsDesktop = !1),
            (e.options.itemsDesktopSmall = !1),
            (e.options.itemsTablet = !1),
            (e.options.itemsTabletSmall = !1),
            (e.options.itemsMobile = !1),
            !1
          );
        var i = t(e.options.responsiveBaseWidth).width();
        if (
          (i > (e.options.itemsDesktop[0] || e.orignalItems) &&
            (e.options.items = e.orignalItems),
          void 0 !== e.options.itemsCustom && !1 !== e.options.itemsCustom)
        )
          for (var n in (e.options.itemsCustom.sort(function (t, e) {
            return t[0] - e[0];
          }),
          e.options.itemsCustom))
            void 0 !== e.options.itemsCustom[n] &&
              e.options.itemsCustom[n][0] <= i &&
              (e.options.items = e.options.itemsCustom[n][1]);
        else
          i <= e.options.itemsDesktop[0] &&
            !1 !== e.options.itemsDesktop &&
            (e.options.items = e.options.itemsDesktop[1]),
            i <= e.options.itemsDesktopSmall[0] &&
              !1 !== e.options.itemsDesktopSmall &&
              (e.options.items = e.options.itemsDesktopSmall[1]),
            i <= e.options.itemsTablet[0] &&
              !1 !== e.options.itemsTablet &&
              (e.options.items = e.options.itemsTablet[1]),
            i <= e.options.itemsTabletSmall[0] &&
              !1 !== e.options.itemsTabletSmall &&
              (e.options.items = e.options.itemsTabletSmall[1]),
            i <= e.options.itemsMobile[0] &&
              !1 !== e.options.itemsMobile &&
              (e.options.items = e.options.itemsMobile[1]);
        e.options.items > e.itemsAmount &&
          !0 === e.options.itemsScaleUp &&
          (e.options.items = e.itemsAmount);
      },
      response: function () {
        var i,
          n = this;
        if (!0 !== n.options.responsive) return !1;
        var s = t(e).width();
        (n.resizer = function () {
          t(e).width() !== s &&
            (!1 !== n.options.autoPlay && clearInterval(n.autoPlayInterval),
            clearTimeout(i),
            (i = setTimeout(function () {
              (s = t(e).width()), n.updateVars();
            }, n.options.responsiveRefreshRate)));
        }),
          t(e).resize(n.resizer);
      },
      updatePosition: function () {
        var t = this;
        t.jumpTo(t.currentItem), !1 !== t.options.autoPlay && t.checkAp();
      },
      appendItemsSizes: function () {
        var e = this,
          i = 0,
          n = e.itemsAmount - e.options.items;
        e.$owlItems.each(function (s) {
          var o = t(this);
          o.css({ width: e.itemWidth }).data("owl-item", Number(s)),
            (s % e.options.items != 0 && s !== n) || s > n || (i += 1),
            o.data("owl-roundPages", i);
        });
      },
      appendWrapperSizes: function () {
        var t = this,
          e = t.$owlItems.length * t.itemWidth;
        t.$owlWrapper.css({ width: 2 * e, left: 0 }), t.appendItemsSizes();
      },
      calculateAll: function () {
        var t = this;
        t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max();
      },
      calculateWidth: function () {
        var t = this;
        t.itemWidth = Math.round(t.$elem.width() / t.options.items);
      },
      max: function () {
        var t = this,
          e =
            -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
        return (
          t.options.items > t.itemsAmount
            ? ((t.maximumItem = 0), (e = 0), (t.maximumPixels = 0))
            : ((t.maximumItem = t.itemsAmount - t.options.items),
              (t.maximumPixels = e)),
          e
        );
      },
      min: function () {
        return 0;
      },
      loops: function () {
        var e = this;
        (e.positionsInArray = [0]), (e.pagesInArray = []);
        for (var i = 0, n = 0, s = 0; s < e.itemsAmount; s++)
          if (
            ((n += e.itemWidth),
            e.positionsInArray.push(-n),
            !0 === e.options.scrollPerPage)
          ) {
            var o = t(e.$owlItems[s]).data("owl-roundPages");
            o !== i && ((e.pagesInArray[i] = e.positionsInArray[s]), (i = o));
          }
      },
      buildControls: function () {
        var e = this;
        (!0 !== e.options.navigation && !0 !== e.options.pagination) ||
          (e.owlControls = t('<div class="owl-controls"/>')
            .toggleClass("clickable", !e.browser.isTouch)
            .appendTo(e.$elem)),
          !0 === e.options.pagination && e.buildPagination(),
          !0 === e.options.navigation && e.buildButtons();
      },
      buildButtons: function () {
        var e = this,
          i = t('<div class="owl-buttons"/>');
        e.owlControls.append(i),
          (e.buttonPrev = t("<div/>", {
            class: "owl-prev",
            html: e.options.navigationText[0] || "",
          })),
          (e.buttonNext = t("<div/>", {
            class: "owl-next",
            html: e.options.navigationText[1] || "",
          })),
          i.append(e.buttonPrev).append(e.buttonNext),
          i.on(
            "touchstart.owlControls mousedown.owlControls",
            'div[class^="owl"]',
            function (t) {
              t.preventDefault();
            }
          ),
          i.on(
            "touchend.owlControls mouseup.owlControls",
            'div[class^="owl"]',
            function (i) {
              i.preventDefault(),
                t(this).hasClass("owl-next") ? e.next() : e.prev();
            }
          );
      },
      buildPagination: function () {
        var e = this;
        (e.paginationWrapper = t('<div class="owl-pagination"/>')),
          e.owlControls.append(e.paginationWrapper),
          e.paginationWrapper.on(
            "touchend.owlControls mouseup.owlControls",
            ".owl-page",
            function (i) {
              i.preventDefault(),
                Number(t(this).data("owl-page")) !== e.currentItem &&
                  e.goTo(Number(t(this).data("owl-page")), !0);
            }
          );
      },
      updatePagination: function () {
        var e = this;
        if (!1 === e.options.pagination) return !1;
        e.paginationWrapper.html("");
        for (
          var i = 0,
            n = e.itemsAmount - (e.itemsAmount % e.options.items),
            s = 0;
          s < e.itemsAmount;
          s++
        )
          if (s % e.options.items == 0) {
            if (((i += 1), n === s)) var o = e.itemsAmount - e.options.items;
            var a = t("<div/>", { class: "owl-page" }),
              r = t("<span></span>", {
                text: !0 === e.options.paginationNumbers ? i : "",
                class: !0 === e.options.paginationNumbers ? "owl-numbers" : "",
              });
            a.append(r),
              a.data("owl-page", n === s ? o : s),
              a.data("owl-roundPages", i),
              e.paginationWrapper.append(a);
          }
        e.checkPagination();
      },
      checkPagination: function () {
        var e = this;
        if (!1 === e.options.pagination) return !1;
        e.paginationWrapper.find(".owl-page").each(function (i, n) {
          t(this).data("owl-roundPages") ===
            t(e.$owlItems[e.currentItem]).data("owl-roundPages") &&
            (e.paginationWrapper.find(".owl-page").removeClass("active"),
            t(this).addClass("active"));
        });
      },
      checkNavigation: function () {
        var t = this;
        if (!1 === t.options.navigation) return !1;
        !1 === t.options.rewindNav &&
          (0 === t.currentItem && 0 === t.maximumItem
            ? (t.buttonPrev.addClass("disabled"),
              t.buttonNext.addClass("disabled"))
            : 0 === t.currentItem && 0 !== t.maximumItem
            ? (t.buttonPrev.addClass("disabled"),
              t.buttonNext.removeClass("disabled"))
            : t.currentItem === t.maximumItem
            ? (t.buttonPrev.removeClass("disabled"),
              t.buttonNext.addClass("disabled"))
            : 0 !== t.currentItem &&
              t.currentItem !== t.maximumItem &&
              (t.buttonPrev.removeClass("disabled"),
              t.buttonNext.removeClass("disabled")));
      },
      updateControls: function () {
        var t = this;
        t.updatePagination(),
          t.checkNavigation(),
          t.owlControls &&
            (t.options.items >= t.itemsAmount
              ? t.owlControls.hide()
              : t.owlControls.show());
      },
      destroyControls: function () {
        this.owlControls && this.owlControls.remove();
      },
      next: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (
          ((e.currentItem +=
            !0 === e.options.scrollPerPage ? e.options.items : 1),
          e.currentItem >
            e.maximumItem +
              (1 == e.options.scrollPerPage ? e.options.items - 1 : 0))
        ) {
          if (!0 !== e.options.rewindNav)
            return (e.currentItem = e.maximumItem), !1;
          (e.currentItem = 0), (t = "rewind");
        }
        e.goTo(e.currentItem, t);
      },
      prev: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (
          (!0 === e.options.scrollPerPage &&
          e.currentItem > 0 &&
          e.currentItem < e.options.items
            ? (e.currentItem = 0)
            : (e.currentItem -=
                !0 === e.options.scrollPerPage ? e.options.items : 1),
          e.currentItem < 0)
        ) {
          if (!0 !== e.options.rewindNav) return (e.currentItem = 0), !1;
          (e.currentItem = e.maximumItem), (t = "rewind");
        }
        e.goTo(e.currentItem, t);
      },
      goTo: function (t, e, i) {
        var n = this;
        if (n.isTransition) return !1;
        if (
          ("function" == typeof n.options.beforeMove &&
            n.options.beforeMove.apply(this, [n.$elem]),
          t >= n.maximumItem ? (t = n.maximumItem) : t <= 0 && (t = 0),
          (n.currentItem = n.owl.currentItem = t),
          !1 !== n.options.transitionStyle &&
            "drag" !== i &&
            1 === n.options.items &&
            !0 === n.browser.support3d)
        )
          return (
            n.swapSpeed(0),
            !0 === n.browser.support3d
              ? n.transition3d(n.positionsInArray[t])
              : n.css2slide(n.positionsInArray[t], 1),
            n.afterGo(),
            n.singleItemTransition(),
            !1
          );
        var s = n.positionsInArray[t];
        !0 === n.browser.support3d
          ? ((n.isCss3Finish = !1),
            !0 === e
              ? (n.swapSpeed("paginationSpeed"),
                setTimeout(function () {
                  n.isCss3Finish = !0;
                }, n.options.paginationSpeed))
              : "rewind" === e
              ? (n.swapSpeed(n.options.rewindSpeed),
                setTimeout(function () {
                  n.isCss3Finish = !0;
                }, n.options.rewindSpeed))
              : (n.swapSpeed("slideSpeed"),
                setTimeout(function () {
                  n.isCss3Finish = !0;
                }, n.options.slideSpeed)),
            n.transition3d(s))
          : !0 === e
          ? n.css2slide(s, n.options.paginationSpeed)
          : "rewind" === e
          ? n.css2slide(s, n.options.rewindSpeed)
          : n.css2slide(s, n.options.slideSpeed),
          n.afterGo();
      },
      jumpTo: function (t) {
        var e = this;
        "function" == typeof e.options.beforeMove &&
          e.options.beforeMove.apply(this, [e.$elem]),
          t >= e.maximumItem || -1 === t
            ? (t = e.maximumItem)
            : t <= 0 && (t = 0),
          e.swapSpeed(0),
          !0 === e.browser.support3d
            ? e.transition3d(e.positionsInArray[t])
            : e.css2slide(e.positionsInArray[t], 1),
          (e.currentItem = e.owl.currentItem = t),
          e.afterGo();
      },
      afterGo: function () {
        var t = this;
        t.prevArr.push(t.currentItem),
          (t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2]),
          t.prevArr.shift(0),
          t.prevItem !== t.currentItem &&
            (t.checkPagination(),
            t.checkNavigation(),
            t.eachMoveUpdate(),
            !1 !== t.options.autoPlay && t.checkAp()),
          "function" == typeof t.options.afterMove &&
            t.prevItem !== t.currentItem &&
            t.options.afterMove.apply(this, [t.$elem]);
      },
      stop: function () {
        (this.apStatus = "stop"), clearInterval(this.autoPlayInterval);
      },
      checkAp: function () {
        "stop" !== this.apStatus && this.play();
      },
      play: function () {
        var t = this;
        if (((t.apStatus = "play"), !1 === t.options.autoPlay)) return !1;
        clearInterval(t.autoPlayInterval),
          (t.autoPlayInterval = setInterval(function () {
            t.next(!0);
          }, t.options.autoPlay));
      },
      swapSpeed: function (t) {
        var e = this;
        "slideSpeed" === t
          ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
          : "paginationSpeed" === t
          ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
          : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t));
      },
      addCssSpeed: function (t) {
        return {
          "-webkit-transition": "all " + t + "ms ease",
          "-moz-transition": "all " + t + "ms ease",
          "-o-transition": "all " + t + "ms ease",
          transition: "all " + t + "ms ease",
        };
      },
      removeTransition: function () {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: "",
        };
      },
      doTranslate: function (t) {
        return {
          "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
          transform: "translate3d(" + t + "px, 0px,0px)",
        };
      },
      transition3d: function (t) {
        this.$owlWrapper.css(this.doTranslate(t));
      },
      css2move: function (t) {
        this.$owlWrapper.css({ left: t });
      },
      css2slide: function (t, e) {
        var i = this;
        (i.isCssFinish = !1),
          i.$owlWrapper.stop(!0, !0).animate(
            { left: t },
            {
              duration: e || i.options.slideSpeed,
              complete: function () {
                i.isCssFinish = !0;
              },
            }
          );
      },
      checkBrowser: function () {
        var t = "translate3d(0px, 0px, 0px)",
          n = i.createElement("div");
        n.style.cssText =
          "  -moz-transform:" +
          t +
          "; -ms-transform:" +
          t +
          "; -o-transform:" +
          t +
          "; -webkit-transform:" +
          t +
          "; transform:" +
          t;
        var s = n.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),
          o = null !== s && 1 === s.length,
          a = "ontouchstart" in e || navigator.msMaxTouchPoints;
        this.browser = { support3d: o, isTouch: a };
      },
      moveEvents: function () {
        var t = this;
        (!1 === t.options.mouseDrag && !1 === t.options.touchDrag) ||
          (t.gestures(), t.disabledEvents());
      },
      eventTypes: function () {
        var t = this,
          e = ["s", "e", "x"];
        (t.ev_types = {}),
          !0 === t.options.mouseDrag && !0 === t.options.touchDrag
            ? (e = [
                "touchstart.owl mousedown.owl",
                "touchmove.owl mousemove.owl",
                "touchend.owl touchcancel.owl mouseup.owl",
              ])
            : !1 === t.options.mouseDrag && !0 === t.options.touchDrag
            ? (e = [
                "touchstart.owl",
                "touchmove.owl",
                "touchend.owl touchcancel.owl",
              ])
            : !0 === t.options.mouseDrag &&
              !1 === t.options.touchDrag &&
              (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
          (t.ev_types.start = e[0]),
          (t.ev_types.move = e[1]),
          (t.ev_types.end = e[2]);
      },
      disabledEvents: function () {
        this.$elem.on("dragstart.owl", function (t) {
          t.preventDefault();
        }),
          this.$elem.on("mousedown.disableTextSelect", function (e) {
            return t(e.target).is("input, textarea, select, option");
          });
      },
      gestures: function () {
        var s = this,
          o = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null,
          };
        function a(t) {
          return t.touches
            ? { x: t.touches[0].pageX, y: t.touches[0].pageY }
            : t.pageX !== n
            ? { x: t.pageX, y: t.pageY }
            : { x: t.clientX, y: t.clientY };
        }
        function r(e) {
          "on" === e
            ? (t(i).on(s.ev_types.move, l), t(i).on(s.ev_types.end, c))
            : "off" === e &&
              (t(i).off(s.ev_types.move), t(i).off(s.ev_types.end));
        }
        function l(n) {
          n = n.originalEvent || n || e.event;
          (s.newPosX = a(n).x - o.offsetX),
            (s.newPosY = a(n).y - o.offsetY),
            (s.newRelativeX = s.newPosX - o.relativePos),
            "function" == typeof s.options.startDragging &&
              !0 !== o.dragging &&
              0 !== s.newRelativeX &&
              ((o.dragging = !0), s.options.startDragging.apply(s, [s.$elem])),
            (s.newRelativeX > 8 ||
              (s.newRelativeX < -8 && !0 === s.browser.isTouch)) &&
              (n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
              (o.sliding = !0)),
            (s.newPosY > 10 || s.newPosY < -10) &&
              !1 === o.sliding &&
              t(i).off("touchmove.owl");
          (s.newPosX = Math.max(
            Math.min(s.newPosX, s.newRelativeX / 5),
            s.maximumPixels + s.newRelativeX / 5
          )),
            !0 === s.browser.support3d
              ? s.transition3d(s.newPosX)
              : s.css2move(s.newPosX);
        }
        function c(i) {
          if (
            (((i = i.originalEvent || i || e.event).target =
              i.target || i.srcElement),
            (o.dragging = !1),
            !0 !== s.browser.isTouch && s.$owlWrapper.removeClass("grabbing"),
            s.newRelativeX < 0
              ? (s.dragDirection = s.owl.dragDirection = "left")
              : (s.dragDirection = s.owl.dragDirection = "right"),
            0 !== s.newRelativeX)
          ) {
            var n = s.getNewPosition();
            if (
              (s.goTo(n, !1, "drag"),
              o.targetElement === i.target && !0 !== s.browser.isTouch)
            ) {
              t(i.target).on("click.disable", function (e) {
                e.stopImmediatePropagation(),
                  e.stopPropagation(),
                  e.preventDefault(),
                  t(i.target).off("click.disable");
              });
              var a = t._data(i.target, "events").click,
                l = a.pop();
              a.splice(0, 0, l);
            }
          }
          r("off");
        }
        (s.isCssFinish = !0),
          s.$elem.on(s.ev_types.start, ".owl-wrapper", function (i) {
            if (3 === (i = i.originalEvent || i || e.event).which) return !1;
            if (!(s.itemsAmount <= s.options.items)) {
              if (!1 === s.isCssFinish && !s.options.dragBeforeAnimFinish)
                return !1;
              if (!1 === s.isCss3Finish && !s.options.dragBeforeAnimFinish)
                return !1;
              !1 !== s.options.autoPlay && clearInterval(s.autoPlayInterval),
                !0 === s.browser.isTouch ||
                  s.$owlWrapper.hasClass("grabbing") ||
                  s.$owlWrapper.addClass("grabbing"),
                (s.newPosX = 0),
                (s.newRelativeX = 0),
                t(this).css(s.removeTransition());
              var n = t(this).position();
              (o.relativePos = n.left),
                (o.offsetX = a(i).x - n.left),
                (o.offsetY = a(i).y - n.top),
                r("on"),
                (o.sliding = !1),
                (o.targetElement = i.target || i.srcElement);
            }
          });
      },
      getNewPosition: function () {
        var t,
          e = this;
        return (
          (t = e.closestItem()) > e.maximumItem
            ? ((e.currentItem = e.maximumItem), (t = e.maximumItem))
            : e.newPosX >= 0 && ((t = 0), (e.currentItem = 0)),
          t
        );
      },
      closestItem: function () {
        var e = this,
          i =
            !0 === e.options.scrollPerPage
              ? e.pagesInArray
              : e.positionsInArray,
          n = e.newPosX,
          s = null;
        return (
          t.each(i, function (o, a) {
            n - e.itemWidth / 20 > i[o + 1] &&
            n - e.itemWidth / 20 < a &&
            "left" === e.moveDirection()
              ? ((s = a),
                !0 === e.options.scrollPerPage
                  ? (e.currentItem = t.inArray(s, e.positionsInArray))
                  : (e.currentItem = o))
              : n + e.itemWidth / 20 < a &&
                n + e.itemWidth / 20 > (i[o + 1] || i[o] - e.itemWidth) &&
                "right" === e.moveDirection() &&
                (!0 === e.options.scrollPerPage
                  ? ((s = i[o + 1] || i[i.length - 1]),
                    (e.currentItem = t.inArray(s, e.positionsInArray)))
                  : ((s = i[o + 1]), (e.currentItem = o + 1)));
          }),
          e.currentItem
        );
      },
      moveDirection: function () {
        var t,
          e = this;
        return (
          e.newRelativeX < 0
            ? ((t = "right"), (e.playDirection = "next"))
            : ((t = "left"), (e.playDirection = "prev")),
          t
        );
      },
      customEvents: function () {
        var t = this;
        t.$elem.on("owl.next", function () {
          t.next();
        }),
          t.$elem.on("owl.prev", function () {
            t.prev();
          }),
          t.$elem.on("owl.play", function (e, i) {
            (t.options.autoPlay = i), t.play(), (t.hoverStatus = "play");
          }),
          t.$elem.on("owl.stop", function () {
            t.stop(), (t.hoverStatus = "stop");
          }),
          t.$elem.on("owl.goTo", function (e, i) {
            t.goTo(i);
          }),
          t.$elem.on("owl.jumpTo", function (e, i) {
            t.jumpTo(i);
          });
      },
      stopOnHover: function () {
        var t = this;
        !0 === t.options.stopOnHover &&
          !0 !== t.browser.isTouch &&
          !1 !== t.options.autoPlay &&
          (t.$elem.on("mouseover", function () {
            t.stop();
          }),
          t.$elem.on("mouseout", function () {
            "stop" !== t.hoverStatus && t.play();
          }));
      },
      lazyLoad: function () {
        var e = this;
        if (!1 === e.options.lazyLoad) return !1;
        for (var i = 0; i < e.itemsAmount; i++) {
          var s = t(e.$owlItems[i]);
          if ("loaded" !== s.data("owl-loaded")) {
            var o = s.data("owl-item"),
              a = s.find(".lazyOwl");
            "string" == typeof a.data("src")
              ? (s.data("owl-loaded") === n &&
                  (a.hide(),
                  s.addClass("loading").data("owl-loaded", "checked")),
                (!0 !== e.options.lazyFollow || o >= e.currentItem) &&
                  o < e.currentItem + e.options.items &&
                  a.length &&
                  e.lazyPreload(s, a))
              : s.data("owl-loaded", "loaded");
          }
        }
      },
      lazyPreload: function (t, e) {
        var i = this,
          n = 0;
        if ("DIV" === e.prop("tagName")) {
          e.css("background-image", "url(" + e.data("src") + ")");
          var s = !0;
        } else e[0].src = e.data("src");
        function o() {
          t.data("owl-loaded", "loaded").removeClass("loading"),
            e.removeAttr("data-src"),
            "fade" === i.options.lazyEffect ? e.fadeIn(400) : e.show(),
            "function" == typeof i.options.afterLazyLoad &&
              i.options.afterLazyLoad.apply(this, [i.$elem]);
        }
        !(function t() {
          n += 1;
          i.completeImg(e.get(0)) || !0 === s
            ? o()
            : n <= 100
            ? setTimeout(t, 100)
            : o();
        })();
      },
      autoHeight: function () {
        var e = this,
          i = t(e.$owlItems[e.currentItem]).find("img");
        if (i.get(0) !== n) {
          var s = 0;
          !(function t() {
            s += 1;
            e.completeImg(i.get(0))
              ? o()
              : s <= 100
              ? setTimeout(t, 100)
              : e.wrapperOuter.css("height", "");
          })();
        } else o();
        function o() {
          var i = t(e.$owlItems[e.currentItem]).height();
          e.wrapperOuter.css("height", i + "px"),
            e.wrapperOuter.hasClass("autoHeight") ||
              setTimeout(function () {
                e.wrapperOuter.addClass("autoHeight");
              }, 0);
        }
      },
      completeImg: function (t) {
        return (
          !!t.complete && (void 0 === t.naturalWidth || 0 != t.naturalWidth)
        );
      },
      onVisibleItems: function () {
        var e = this;
        !0 === e.options.addClassActive && e.$owlItems.removeClass("active"),
          (e.visibleItems = []);
        for (var i = e.currentItem; i < e.currentItem + e.options.items; i++)
          e.visibleItems.push(i),
            !0 === e.options.addClassActive &&
              t(e.$owlItems[i]).addClass("active");
        e.owl.visibleItems = e.visibleItems;
      },
      transitionTypes: function (t) {
        (this.outClass = "owl-" + t + "-out"),
          (this.inClass = "owl-" + t + "-in");
      },
      singleItemTransition: function () {
        var t = this;
        t.isTransition = !0;
        var e = t.outClass,
          i = t.inClass,
          n = t.$owlItems.eq(t.currentItem),
          s = t.$owlItems.eq(t.prevItem),
          o =
            Math.abs(t.positionsInArray[t.currentItem]) +
            t.positionsInArray[t.prevItem],
          a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
        t.$owlWrapper
          .addClass("owl-origin")
          .css({
            "-webkit-transform-origin": a + "px",
            "-moz-perspective-origin": a + "px",
            "perspective-origin": a + "px",
          });
        var r,
          l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
        s
          .css(((r = o), { position: "relative", left: r + "px" }))
          .addClass(e)
          .on(l, function () {
            (t.endPrev = !0), s.off(l), t.clearTransStyle(s, e);
          }),
          n.addClass(i).on(l, function () {
            (t.endCurrent = !0), n.off(l), t.clearTransStyle(n, i);
          });
      },
      clearTransStyle: function (t, e) {
        var i = this;
        t.css({ position: "", left: "" }).removeClass(e),
          i.endPrev &&
            i.endCurrent &&
            (i.$owlWrapper.removeClass("owl-origin"),
            (i.endPrev = !1),
            (i.endCurrent = !1),
            (i.isTransition = !1));
      },
      owlStatus: function () {
        var t = this;
        t.owl = {
          userOptions: t.userOptions,
          baseElement: t.$elem,
          userItems: t.$userItems,
          owlItems: t.$owlItems,
          currentItem: t.currentItem,
          prevItem: t.prevItem,
          visibleItems: t.visibleItems,
          isTouch: t.browser.isTouch,
          browser: t.browser,
          dragDirection: t.dragDirection,
        };
      },
      clearEvents: function () {
        this.$elem.off(".owl owl mousedown.disableTextSelect"),
          t(i).off(".owl owl"),
          t(e).off("resize", this.resizer);
      },
      unWrap: function () {
        var t = this;
        0 !== t.$elem.children().length &&
          (t.$owlWrapper.unwrap(),
          t.$userItems.unwrap().unwrap(),
          t.owlControls && t.owlControls.remove()),
          t.clearEvents(),
          t.$elem
            .attr("style", t.$elem.data("owl-originalStyles") || "")
            .attr("class", t.$elem.data("owl-originalClasses"));
      },
      destroy: function () {
        var t = this;
        t.stop(),
          clearInterval(t.checkVisible),
          t.unWrap(),
          t.$elem.removeData();
      },
      reinit: function (e) {
        var i = this,
          n = t.extend({}, i.userOptions, e);
        i.unWrap(), i.init(n, i.$elem);
      },
      addItem: function (t, e) {
        var i,
          s = this;
        return (
          !!t &&
          (0 === s.$elem.children().length
            ? (s.$elem.append(t), s.setVars(), !1)
            : (s.unWrap(),
              (i = e === n || -1 === e ? -1 : e) >= s.$userItems.length ||
              -1 === i
                ? s.$userItems.eq(-1).after(t)
                : s.$userItems.eq(i).before(t),
              void s.setVars()))
        );
      },
      removeItem: function (t) {
        var e,
          i = this;
        if (0 === i.$elem.children().length) return !1;
        (e = t === n || -1 === t ? -1 : t),
          i.unWrap(),
          i.$userItems.eq(e).remove(),
          i.setVars();
      },
    };
    (t.fn.owlCarousel = function (e) {
      return this.each(function () {
        if (!0 === t(this).data("owl-init")) return !1;
        t(this).data("owl-init", !0);
        var i = Object.create(s);
        i.init(e, this), t.data(this, "owlCarousel", i);
      });
    }),
      (t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1,
      });
  })(jQuery, window, document),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    t.extend(t.fn, {
      validate: function (e) {
        if (this.length) {
          var i = t.data(this[0], "validator");
          return (
            i ||
            (this.attr("novalidate", "novalidate"),
            (i = new t.validator(e, this[0])),
            t.data(this[0], "validator", i),
            i.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target),
                  t(this).hasClass("cancel") && (i.cancelSubmit = !0),
                  void 0 !== t(this).attr("formnovalidate") &&
                    (i.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (e) {
                function n() {
                  var n, s;
                  return (
                    !i.settings.submitHandler ||
                    (i.submitButton &&
                      (n = t("<input type='hidden'/>")
                        .attr("name", i.submitButton.name)
                        .val(t(i.submitButton).val())
                        .appendTo(i.currentForm)),
                    (s = i.settings.submitHandler.call(i, i.currentForm, e)),
                    i.submitButton && n.remove(),
                    void 0 !== s && s)
                  );
                }
                return (
                  i.settings.debug && e.preventDefault(),
                  i.cancelSubmit
                    ? ((i.cancelSubmit = !1), n())
                    : i.form()
                    ? i.pendingRequest
                      ? ((i.formSubmitted = !0), !1)
                      : n()
                    : (i.focusInvalid(), !1)
                );
              })),
            i)
          );
        }
        e &&
          e.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function () {
        var e, i, n;
        return (
          t(this[0]).is("form")
            ? (e = this.validate().form())
            : ((n = []),
              (e = !0),
              (i = t(this[0].form).validate()),
              this.each(function () {
                (e = i.element(this) && e) || (n = n.concat(i.errorList));
              }),
              (i.errorList = n)),
          e
        );
      },
      rules: function (e, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          c = this[0];
        if (null != c && null != c.form) {
          if (e)
            switch (
              ((n = t.data(c.form, "validator").settings),
              (s = n.rules),
              (o = t.validator.staticRules(c)),
              e)
            ) {
              case "add":
                t.extend(o, t.validator.normalizeRule(i)),
                  delete o.messages,
                  (s[c.name] = o),
                  i.messages &&
                    (n.messages[c.name] = t.extend(
                      n.messages[c.name],
                      i.messages
                    ));
                break;
              case "remove":
                return i
                  ? ((l = {}),
                    t.each(i.split(/\s/), function (e, i) {
                      (l[i] = o[i]),
                        delete o[i],
                        "required" === i && t(c).removeAttr("aria-required");
                    }),
                    l)
                  : (delete s[c.name], o);
            }
          return (
            (a = t.validator.normalizeRules(
              t.extend(
                {},
                t.validator.classRules(c),
                t.validator.attributeRules(c),
                t.validator.dataRules(c),
                t.validator.staticRules(c)
              ),
              c
            )).required &&
              ((r = a.required),
              delete a.required,
              (a = t.extend({ required: r }, a)),
              t(c).attr("aria-required", "true")),
            a.remote &&
              ((r = a.remote),
              delete a.remote,
              (a = t.extend(a, { remote: r }))),
            a
          );
        }
      },
    }),
      t.extend(t.expr[":"], {
        blank: function (e) {
          return !t.trim("" + t(e).val());
        },
        filled: function (e) {
          var i = t(e).val();
          return null !== i && !!t.trim("" + i);
        },
        unchecked: function (e) {
          return !t(e).prop("checked");
        },
      }),
      (t.validator = function (e, i) {
        (this.settings = t.extend(!0, {}, t.validator.defaults, e)),
          (this.currentForm = i),
          this.init();
      }),
      (t.validator.format = function (e, i) {
        return 1 === arguments.length
          ? function () {
              var i = t.makeArray(arguments);
              return i.unshift(e), t.validator.format.apply(this, i);
            }
          : void 0 === i
          ? e
          : (arguments.length > 2 &&
              i.constructor !== Array &&
              (i = t.makeArray(arguments).slice(1)),
            i.constructor !== Array && (i = [i]),
            t.each(i, function (t, i) {
              e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i;
              });
            }),
            e);
      }),
      t.extend(t.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: t([]),
          errorLabelContainer: t([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (t) {
            (this.lastActive = t),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    t,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(t)));
          },
          onfocusout: function (t) {
            this.checkable(t) ||
              (!(t.name in this.submitted) && this.optional(t)) ||
              this.element(t);
          },
          onkeyup: function (e, i) {
            (9 === i.which && "" === this.elementValue(e)) ||
              -1 !==
                t.inArray(i.keyCode, [
                  16,
                  17,
                  18,
                  20,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  45,
                  144,
                  225,
                ]) ||
              ((e.name in this.submitted || e.name in this.invalid) &&
                this.element(e));
          },
          onclick: function (t) {
            t.name in this.submitted
              ? this.element(t)
              : t.parentNode.name in this.submitted &&
                this.element(t.parentNode);
          },
          highlight: function (e, i, n) {
            "radio" === e.type
              ? this.findByName(e.name).addClass(i).removeClass(n)
              : t(e).addClass(i).removeClass(n);
          },
          unhighlight: function (e, i, n) {
            "radio" === e.type
              ? this.findByName(e.name).removeClass(i).addClass(n)
              : t(e).removeClass(i).addClass(n);
          },
        },
        setDefaults: function (e) {
          t.extend(t.validator.defaults, e);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: t.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: t.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: t.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: t.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: t.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: t.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: t.validator.format("Please enter a multiple of {0}."),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function e(e) {
              !this.form &&
                this.hasAttribute("contenteditable") &&
                (this.form = t(this).closest("form")[0]);
              var i = t.data(this.form, "validator"),
                n = "on" + e.type.replace(/^validate/, ""),
                s = i.settings;
              s[n] && !t(this).is(s.ignore) && s[n].call(i, this, e);
            }
            (this.labelContainer = t(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                t(this.currentForm)),
              (this.containers = t(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var i,
              n = (this.groups = {});
            t.each(this.settings.groups, function (e, i) {
              "string" == typeof i && (i = i.split(/\s/)),
                t.each(i, function (t, i) {
                  n[i] = e;
                });
            }),
              (i = this.settings.rules),
              t.each(i, function (e, n) {
                i[e] = t.validator.normalizeRule(n);
              }),
              t(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",
                  e
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  e
                ),
              this.settings.invalidHandler &&
                t(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                ),
              t(this.currentForm)
                .find("[required], [data-rule-required], .required")
                .attr("aria-required", "true");
          },
          form: function () {
            return (
              this.checkForm(),
              t.extend(this.submitted, this.errorMap),
              (this.invalid = t.extend({}, this.errorMap)),
              this.valid() ||
                t(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var t = 0, e = (this.currentElements = this.elements());
              e[t];
              t++
            )
              this.check(e[t]);
            return this.valid();
          },
          element: function (e) {
            var i,
              n,
              s = this.clean(e),
              o = this.validationTargetFor(s),
              a = this,
              r = !0;
            return (
              void 0 === o
                ? delete this.invalid[s.name]
                : (this.prepareElement(o),
                  (this.currentElements = t(o)),
                  (n = this.groups[o.name]) &&
                    t.each(this.groups, function (t, e) {
                      e === n &&
                        t !== o.name &&
                        (s = a.validationTargetFor(a.clean(a.findByName(t)))) &&
                        s.name in a.invalid &&
                        (a.currentElements.push(s), (r = a.check(s) && r));
                    }),
                  (i = !1 !== this.check(o)),
                  (r = r && i),
                  (this.invalid[o.name] = !i),
                  this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  t(e).attr("aria-invalid", !i)),
              r
            );
          },
          showErrors: function (e) {
            if (e) {
              var i = this;
              t.extend(this.errorMap, e),
                (this.errorList = t.map(this.errorMap, function (t, e) {
                  return { message: t, element: i.findByName(e)[0] };
                })),
                (this.successList = t.grep(this.successList, function (t) {
                  return !(t.name in e);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function () {
            t.fn.resetForm && t(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var e = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
            this.resetElements(e);
          },
          resetElements: function (t) {
            var e;
            if (this.settings.unhighlight)
              for (e = 0; t[e]; e++)
                this.settings.unhighlight.call(
                  this,
                  t[e],
                  this.settings.errorClass,
                  ""
                ),
                  this.findByName(t[e].name).removeClass(
                    this.settings.validClass
                  );
            else
              t.removeClass(this.settings.errorClass).removeClass(
                this.settings.validClass
              );
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (t) {
            var e,
              i = 0;
            for (e in t) t[e] && i++;
            return i;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (t) {
            t.not(this.containers).text(""), this.addWrapper(t).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                t(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch (t) {}
          },
          findLastActive: function () {
            var e = this.lastActive;
            return (
              e &&
              1 ===
                t.grep(this.errorList, function (t) {
                  return t.element.name === e.name;
                }).length &&
              e
            );
          },
          elements: function () {
            var e = this,
              i = {};
            return t(this.currentForm)
              .find("input, select, textarea, [contenteditable]")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                var n = this.name || t(this).attr("name");
                return (
                  !n &&
                    e.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  this.hasAttribute("contenteditable") &&
                    (this.form = t(this).closest("form")[0]),
                  !(
                    n in i ||
                    !e.objectLength(t(this).rules()) ||
                    ((i[n] = !0), 0)
                  )
                );
              });
          },
          clean: function (e) {
            return t(e)[0];
          },
          errors: function () {
            var e = this.settings.errorClass.split(" ").join(".");
            return t(this.settings.errorElement + "." + e, this.errorContext);
          },
          resetInternals: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = t([])),
              (this.toHide = t([]));
          },
          reset: function () {
            this.resetInternals(), (this.currentElements = t([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (t) {
            this.reset(), (this.toHide = this.errorsFor(t));
          },
          elementValue: function (e) {
            var i,
              n,
              s = t(e),
              o = e.type;
            return "radio" === o || "checkbox" === o
              ? this.findByName(e.name).filter(":checked").val()
              : "number" === o && void 0 !== e.validity
              ? e.validity.badInput
                ? "NaN"
                : s.val()
              : ((i = e.hasAttribute("contenteditable") ? s.text() : s.val()),
                "file" === o
                  ? "C:\\fakepath\\" === i.substr(0, 12)
                    ? i.substr(12)
                    : (n = i.lastIndexOf("/")) >= 0
                    ? i.substr(n + 1)
                    : (n = i.lastIndexOf("\\")) >= 0
                    ? i.substr(n + 1)
                    : i
                  : "string" == typeof i
                  ? i.replace(/\r/g, "")
                  : i);
          },
          check: function (e) {
            e = this.validationTargetFor(this.clean(e));
            var i,
              n,
              s,
              o = t(e).rules(),
              a = t.map(o, function (t, e) {
                return e;
              }).length,
              r = !1,
              l = this.elementValue(e);
            if ("function" == typeof o.normalizer) {
              if ("string" != typeof (l = o.normalizer.call(e, l)))
                throw new TypeError(
                  "The normalizer should return a string value."
                );
              delete o.normalizer;
            }
            for (n in o) {
              s = { method: n, parameters: o[n] };
              try {
                if (
                  "dependency-mismatch" ===
                    (i = t.validator.methods[n].call(
                      this,
                      l,
                      e,
                      s.parameters
                    )) &&
                  1 === a
                ) {
                  r = !0;
                  continue;
                }
                if (((r = !1), "pending" === i))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(e)
                  ));
                if (!i) return this.formatAndAdd(e, s), !1;
              } catch (t) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        e.id +
                        ", check the '" +
                        s.method +
                        "' method.",
                      t
                    ),
                  t instanceof TypeError &&
                    (t.message +=
                      ".  Exception occurred when checking element " +
                      e.id +
                      ", check the '" +
                      s.method +
                      "' method."),
                  t)
                );
              }
            }
            if (!r) return this.objectLength(o) && this.successList.push(e), !0;
          },
          customDataMessage: function (e, i) {
            return (
              t(e).data(
                "msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
              ) || t(e).data("msg")
            );
          },
          customMessage: function (t, e) {
            var i = this.settings.messages[t];
            return i && (i.constructor === String ? i : i[e]);
          },
          findDefined: function () {
            for (var t = 0; t < arguments.length; t++)
              if (void 0 !== arguments[t]) return arguments[t];
          },
          defaultMessage: function (e, i) {
            "string" == typeof i && (i = { method: i });
            var n = this.findDefined(
                this.customMessage(e.name, i.method),
                this.customDataMessage(e, i.method),
                (!this.settings.ignoreTitle && e.title) || void 0,
                t.validator.messages[i.method],
                "<strong>Warning: No message defined for " +
                  e.name +
                  "</strong>"
              ),
              s = /\$?\{(\d+)\}/g;
            return (
              "function" == typeof n
                ? (n = n.call(this, i.parameters, e))
                : s.test(n) &&
                  (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)),
              n
            );
          },
          formatAndAdd: function (t, e) {
            var i = this.defaultMessage(t, e);
            this.errorList.push({ message: i, element: t, method: e.method }),
              (this.errorMap[t.name] = i),
              (this.submitted[t.name] = i);
          },
          addWrapper: function (t) {
            return (
              this.settings.wrapper &&
                (t = t.add(t.parent(this.settings.wrapper))),
              t
            );
          },
          defaultShowErrors: function () {
            var t, e, i;
            for (t = 0; this.errorList[t]; t++)
              (i = this.errorList[t]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    i.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(i.element, i.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (t = 0; this.successList[t]; t++)
                this.showLabel(this.successList[t]);
            if (this.settings.unhighlight)
              for (t = 0, e = this.validElements(); e[t]; t++)
                this.settings.unhighlight.call(
                  this,
                  e[t],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return t(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (e, i) {
            var n,
              s,
              o,
              a,
              r = this.errorsFor(e),
              l = this.idOrName(e),
              c = t(e).attr("aria-describedby");
            r.length
              ? (r
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                r.html(i))
              : ((n = r = t("<" + this.settings.errorElement + ">")
                  .attr("id", l + "-error")
                  .addClass(this.settings.errorClass)
                  .html(i || "")),
                this.settings.wrapper &&
                  (n = r
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(n)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, n, t(e))
                  : n.insertAfter(e),
                r.is("label")
                  ? r.attr("for", l)
                  : 0 ===
                      r.parents("label[for='" + this.escapeCssMeta(l) + "']")
                        .length &&
                    ((o = r.attr("id")),
                    c
                      ? c.match(
                          new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")
                        ) || (c += " " + o)
                      : (c = o),
                    t(e).attr("aria-describedby", c),
                    (s = this.groups[e.name]) &&
                      ((a = this),
                      t.each(a.groups, function (e, i) {
                        i === s &&
                          t(
                            "[name='" + a.escapeCssMeta(e) + "']",
                            a.currentForm
                          ).attr("aria-describedby", r.attr("id"));
                      })))),
              !i &&
                this.settings.success &&
                (r.text(""),
                "string" == typeof this.settings.success
                  ? r.addClass(this.settings.success)
                  : this.settings.success(r, e)),
              (this.toShow = this.toShow.add(r));
          },
          errorsFor: function (e) {
            var i = this.escapeCssMeta(this.idOrName(e)),
              n = t(e).attr("aria-describedby"),
              s = "label[for='" + i + "'], label[for='" + i + "'] *";
            return (
              n &&
                (s = s + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
              this.errors().filter(s)
            );
          },
          escapeCssMeta: function (t) {
            return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function (t) {
            return (
              this.groups[t.name] ||
              (this.checkable(t) ? t.name : t.id || t.name)
            );
          },
          validationTargetFor: function (e) {
            return (
              this.checkable(e) && (e = this.findByName(e.name)),
              t(e).not(this.settings.ignore)[0]
            );
          },
          checkable: function (t) {
            return /radio|checkbox/i.test(t.type);
          },
          findByName: function (e) {
            return t(this.currentForm).find(
              "[name='" + this.escapeCssMeta(e) + "']"
            );
          },
          getLength: function (e, i) {
            switch (i.nodeName.toLowerCase()) {
              case "select":
                return t("option:selected", i).length;
              case "input":
                if (this.checkable(i))
                  return this.findByName(i.name).filter(":checked").length;
            }
            return e.length;
          },
          depend: function (t, e) {
            return (
              !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            );
          },
          dependTypes: {
            boolean: function (t) {
              return t;
            },
            string: function (e, i) {
              return !!t(e, i.form).length;
            },
            function: function (t, e) {
              return t(e);
            },
          },
          optional: function (e) {
            var i = this.elementValue(e);
            return (
              !t.validator.methods.required.call(this, i, e) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (e) {
            this.pending[e.name] ||
              (this.pendingRequest++,
              t(e).addClass(this.settings.pendingClass),
              (this.pending[e.name] = !0));
          },
          stopRequest: function (e, i) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[e.name],
              t(e).removeClass(this.settings.pendingClass),
              i &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (t(this.currentForm).submit(), (this.formSubmitted = !1))
                : !i &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (t(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (e, i) {
            return (
              (i = ("string" == typeof i && i) || "remote"),
              t.data(e, "previousValue") ||
                t.data(e, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(e, { method: i }),
                })
            );
          },
          destroy: function () {
            this.resetForm(),
              t(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur");
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (e, i) {
          e.constructor === String
            ? (this.classRuleSettings[e] = i)
            : t.extend(this.classRuleSettings, e);
        },
        classRules: function (e) {
          var i = {},
            n = t(e).attr("class");
          return (
            n &&
              t.each(n.split(" "), function () {
                this in t.validator.classRuleSettings &&
                  t.extend(i, t.validator.classRuleSettings[this]);
              }),
            i
          );
        },
        normalizeAttributeRule: function (t, e, i, n) {
          /min|max|step/.test(i) &&
            (null === e || /number|range|text/.test(e)) &&
            ((n = Number(n)), isNaN(n) && (n = void 0)),
            n || 0 === n ? (t[i] = n) : e === i && "range" !== e && (t[i] = !0);
        },
        attributeRules: function (e) {
          var i,
            n,
            s = {},
            o = t(e),
            a = e.getAttribute("type");
          for (i in t.validator.methods)
            "required" === i
              ? ("" === (n = e.getAttribute(i)) && (n = !0), (n = !!n))
              : (n = o.attr(i)),
              this.normalizeAttributeRule(s, a, i, n);
          return (
            s.maxlength &&
              /-1|2147483647|524288/.test(s.maxlength) &&
              delete s.maxlength,
            s
          );
        },
        dataRules: function (e) {
          var i,
            n,
            s = {},
            o = t(e),
            a = e.getAttribute("type");
          for (i in t.validator.methods)
            (n = o.data(
              "rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(s, a, i, n);
          return s;
        },
        staticRules: function (e) {
          var i = {},
            n = t.data(e.form, "validator");
          return (
            n.settings.rules &&
              (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}),
            i
          );
        },
        normalizeRules: function (e, i) {
          return (
            t.each(e, function (n, s) {
              if (!1 !== s) {
                if (s.param || s.depends) {
                  var o = !0;
                  switch (typeof s.depends) {
                    case "string":
                      o = !!t(s.depends, i.form).length;
                      break;
                    case "function":
                      o = s.depends.call(i, i);
                  }
                  o
                    ? (e[n] = void 0 === s.param || s.param)
                    : (t.data(i.form, "validator").resetElements(t(i)),
                      delete e[n]);
                }
              } else delete e[n];
            }),
            t.each(e, function (n, s) {
              e[n] = t.isFunction(s) && "normalizer" !== n ? s(i) : s;
            }),
            t.each(["minlength", "maxlength"], function () {
              e[this] && (e[this] = Number(e[this]));
            }),
            t.each(["rangelength", "range"], function () {
              var i;
              e[this] &&
                (t.isArray(e[this])
                  ? (e[this] = [Number(e[this][0]), Number(e[this][1])])
                  : "string" == typeof e[this] &&
                    ((i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (e[this] = [Number(i[0]), Number(i[1])])));
            }),
            t.validator.autoCreateRanges &&
              (null != e.min &&
                null != e.max &&
                ((e.range = [e.min, e.max]), delete e.min, delete e.max),
              null != e.minlength &&
                null != e.maxlength &&
                ((e.rangelength = [e.minlength, e.maxlength]),
                delete e.minlength,
                delete e.maxlength)),
            e
          );
        },
        normalizeRule: function (e) {
          if ("string" == typeof e) {
            var i = {};
            t.each(e.split(/\s/), function () {
              i[this] = !0;
            }),
              (e = i);
          }
          return e;
        },
        addMethod: function (e, i, n) {
          (t.validator.methods[e] = i),
            (t.validator.messages[e] =
              void 0 !== n ? n : t.validator.messages[e]),
            i.length < 3 &&
              t.validator.addClassRules(e, t.validator.normalizeRule(e));
        },
        methods: {
          required: function (e, i, n) {
            if (!this.depend(n, i)) return "dependency-mismatch";
            if ("select" === i.nodeName.toLowerCase()) {
              var s = t(i).val();
              return s && s.length > 0;
            }
            return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0;
          },
          email: function (t, e) {
            return (
              this.optional(e) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                t
              )
            );
          },
          url: function (t, e) {
            return (
              this.optional(e) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                t
              )
            );
          },
          date: function (t, e) {
            return (
              this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            );
          },
          dateISO: function (t, e) {
            return (
              this.optional(e) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                t
              )
            );
          },
          number: function (t, e) {
            return (
              this.optional(e) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            );
          },
          digits: function (t, e) {
            return this.optional(e) || /^\d+$/.test(t);
          },
          minlength: function (e, i, n) {
            var s = t.isArray(e) ? e.length : this.getLength(e, i);
            return this.optional(i) || s >= n;
          },
          maxlength: function (e, i, n) {
            var s = t.isArray(e) ? e.length : this.getLength(e, i);
            return this.optional(i) || s <= n;
          },
          rangelength: function (e, i, n) {
            var s = t.isArray(e) ? e.length : this.getLength(e, i);
            return this.optional(i) || (s >= n[0] && s <= n[1]);
          },
          min: function (t, e, i) {
            return this.optional(e) || t >= i;
          },
          max: function (t, e, i) {
            return this.optional(e) || t <= i;
          },
          range: function (t, e, i) {
            return this.optional(e) || (t >= i[0] && t <= i[1]);
          },
          step: function (e, i, n) {
            var s,
              o = t(i).attr("type"),
              a = "Step attribute on input type " + o + " is not supported.",
              r = new RegExp("\\b" + o + "\\b"),
              l = function (t) {
                var e = ("" + t).match(/(?:\.(\d+))?$/);
                return e && e[1] ? e[1].length : 0;
              },
              c = function (t) {
                return Math.round(t * Math.pow(10, s));
              },
              h = !0;
            if (o && !r.test(["text", "number", "range"].join()))
              throw new Error(a);
            return (
              (s = l(n)),
              (l(e) > s || c(e) % c(n) != 0) && (h = !1),
              this.optional(i) || h
            );
          },
          equalTo: function (e, i, n) {
            var s = t(n);
            return (
              this.settings.onfocusout &&
                s.not(".validate-equalTo-blur").length &&
                s
                  .addClass("validate-equalTo-blur")
                  .on("blur.validate-equalTo", function () {
                    t(i).valid();
                  }),
              e === s.val()
            );
          },
          remote: function (e, i, n, s) {
            if (this.optional(i)) return "dependency-mismatch";
            s = ("string" == typeof s && s) || "remote";
            var o,
              a,
              r,
              l = this.previousValue(i, s);
            return (
              this.settings.messages[i.name] ||
                (this.settings.messages[i.name] = {}),
              (l.originalMessage =
                l.originalMessage || this.settings.messages[i.name][s]),
              (this.settings.messages[i.name][s] = l.message),
              (n = ("string" == typeof n && { url: n }) || n),
              (r = t.param(t.extend({ data: e }, n.data))),
              l.old === r
                ? l.valid
                : ((l.old = r),
                  (o = this),
                  this.startRequest(i),
                  ((a = {})[i.name] = e),
                  t.ajax(
                    t.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: a,
                        context: o.currentForm,
                        success: function (t) {
                          var n,
                            a,
                            r,
                            c = !0 === t || "true" === t;
                          (o.settings.messages[i.name][s] = l.originalMessage),
                            c
                              ? ((r = o.formSubmitted),
                                o.resetInternals(),
                                (o.toHide = o.errorsFor(i)),
                                (o.formSubmitted = r),
                                o.successList.push(i),
                                (o.invalid[i.name] = !1),
                                o.showErrors())
                              : ((n = {}),
                                (a =
                                  t ||
                                  o.defaultMessage(i, {
                                    method: s,
                                    parameters: e,
                                  })),
                                (n[i.name] = l.message = a),
                                (o.invalid[i.name] = !0),
                                o.showErrors(n)),
                            (l.valid = c),
                            o.stopRequest(i, c);
                        },
                      },
                      n
                    )
                  ),
                  "pending")
            );
          },
        },
      });
    var e,
      i = {};
    t.ajaxPrefilter
      ? t.ajaxPrefilter(function (t, e, n) {
          var s = t.port;
          "abort" === t.mode && (i[s] && i[s].abort(), (i[s] = n));
        })
      : ((e = t.ajax),
        (t.ajax = function (n) {
          var s = ("mode" in n ? n : t.ajaxSettings).mode,
            o = ("port" in n ? n : t.ajaxSettings).port;
          return "abort" === s
            ? (i[o] && i[o].abort(), (i[o] = e.apply(this, arguments)), i[o])
            : e.apply(this, arguments);
        }));
  }),
  (window.Modernizr = (function (t, e, i) {
    function n(t) {
      m.cssText = t;
    }
    function s(t, e) {
      return typeof t === e;
    }
    function o(t, e) {
      return !!~("" + t).indexOf(e);
    }
    function a(t, e) {
      for (var n in t) {
        var s = t[n];
        if (!o(s, "-") && m[s] !== i) return "pfx" != e || s;
      }
      return !1;
    }
    function r(t, e, n) {
      for (var o in t) {
        var a = e[t[o]];
        if (a !== i)
          return !1 === n ? t[o] : s(a, "function") ? a.bind(n || e) : a;
      }
      return !1;
    }
    function l(t, e, i) {
      var n = t.charAt(0).toUpperCase() + t.slice(1),
        o = (t + " " + w.join(n + " ") + n).split(" ");
      return s(e, "string") || s(e, "undefined")
        ? a(o, e)
        : r((o = (t + " " + x.join(n + " ") + n).split(" ")), e, i);
    }
    var c,
      h,
      u = {},
      d = e.documentElement,
      p = "modernizr",
      f = e.createElement(p),
      m = f.style,
      g = e.createElement("input"),
      v = ":)",
      b = {}.toString,
      _ = " -webkit- -moz- -o- -ms- ".split(" "),
      y = "Webkit Moz O ms",
      w = y.split(" "),
      x = y.toLowerCase().split(" "),
      C = "http://www.w3.org/2000/svg",
      k = {},
      S = {},
      T = {},
      I = [],
      D = I.slice,
      P = function (t, i, n, s) {
        var o,
          a,
          r,
          l,
          c = e.createElement("div"),
          h = e.body,
          u = h || e.createElement("body");
        if (parseInt(n, 10))
          for (; n--; )
            ((r = e.createElement("div")).id = s ? s[n] : p + (n + 1)),
              c.appendChild(r);
        return (
          (o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join("")),
          (c.id = p),
          ((h ? c : u).innerHTML += o),
          u.appendChild(c),
          h ||
            ((u.style.background = ""),
            (u.style.overflow = "hidden"),
            (l = d.style.overflow),
            (d.style.overflow = "hidden"),
            d.appendChild(u)),
          (a = i(c, t)),
          h
            ? c.parentNode.removeChild(c)
            : (u.parentNode.removeChild(u), (d.style.overflow = l)),
          !!a
        );
      },
      M = (function () {
        var t = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img",
        };
        return function (n, o) {
          o = o || e.createElement(t[n] || "div");
          var a = (n = "on" + n) in o;
          return (
            a ||
              (o.setAttribute || (o = e.createElement("div")),
              o.setAttribute &&
                o.removeAttribute &&
                (o.setAttribute(n, ""),
                (a = s(o[n], "function")),
                s(o[n], "undefined") || (o[n] = i),
                o.removeAttribute(n))),
            (o = null),
            a
          );
        };
      })(),
      E = {}.hasOwnProperty;
    for (var A in ((h =
      s(E, "undefined") || s(E.call, "undefined")
        ? function (t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined");
          }
        : function (t, e) {
            return E.call(t, e);
          }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError();
        var i = D.call(arguments, 1),
          n = function () {
            if (this instanceof n) {
              var s = function () {};
              s.prototype = e.prototype;
              var o = new s(),
                a = e.apply(o, i.concat(D.call(arguments)));
              return Object(a) === a ? a : o;
            }
            return e.apply(t, i.concat(D.call(arguments)));
          };
        return n;
      }),
    (k.flexbox = function () {
      return l("flexWrap");
    }),
    (k.flexboxlegacy = function () {
      return l("boxDirection");
    }),
    (k.canvas = function () {
      var t = e.createElement("canvas");
      return !(!t.getContext || !t.getContext("2d"));
    }),
    (k.canvastext = function () {
      return !(
        !u.canvas ||
        !s(e.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (k.webgl = function () {
      return !!t.WebGLRenderingContext;
    }),
    (k.touch = function () {
      var i;
      return (
        "ontouchstart" in t || (t.DocumentTouch && e instanceof DocumentTouch)
          ? (i = !0)
          : P(
              [
                "@media (",
                _.join("touch-enabled),("),
                p,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (t) {
                i = 9 === t.offsetTop;
              }
            ),
        i
      );
    }),
    (k.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (k.postmessage = function () {
      return !!t.postMessage;
    }),
    (k.websqldatabase = function () {
      return !!t.openDatabase;
    }),
    (k.indexedDB = function () {
      return !!l("indexedDB", t);
    }),
    (k.hashchange = function () {
      return M("hashchange", t) && (e.documentMode === i || e.documentMode > 7);
    }),
    (k.history = function () {
      return !(!t.history || !history.pushState);
    }),
    (k.draganddrop = function () {
      var t = e.createElement("div");
      return "draggable" in t || ("ondragstart" in t && "ondrop" in t);
    }),
    (k.websockets = function () {
      return "WebSocket" in t || "MozWebSocket" in t;
    }),
    (k.rgba = function () {
      return (
        n("background-color:rgba(150,255,150,.5)"), o(m.backgroundColor, "rgba")
      );
    }),
    (k.hsla = function () {
      return (
        n("background-color:hsla(120,40%,100%,.5)"),
        o(m.backgroundColor, "rgba") || o(m.backgroundColor, "hsla")
      );
    }),
    (k.multiplebgs = function () {
      return (
        n("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(m.background)
      );
    }),
    (k.backgroundsize = function () {
      return l("backgroundSize");
    }),
    (k.borderimage = function () {
      return l("borderImage");
    }),
    (k.borderradius = function () {
      return l("borderRadius");
    }),
    (k.boxshadow = function () {
      return l("boxShadow");
    }),
    (k.textshadow = function () {
      return "" === e.createElement("div").style.textShadow;
    }),
    (k.opacity = function () {
      return (
        (t = "opacity:.55"),
        n(_.join(t + ";") + (e || "")),
        /^0.55$/.test(m.opacity)
      );
      var t, e;
    }),
    (k.cssanimations = function () {
      return l("animationName");
    }),
    (k.csscolumns = function () {
      return l("columnCount");
    }),
    (k.cssgradients = function () {
      var t = "background-image:";
      return (
        n(
          (
            t +
            "-webkit- "
              .split(" ")
              .join(
                "gradient(linear,left top,right bottom,from(#9f9),to(white));" +
                  t
              ) +
            _.join("linear-gradient(left top,#9f9, white);" + t)
          ).slice(0, -t.length)
        ),
        o(m.backgroundImage, "gradient")
      );
    }),
    (k.cssreflections = function () {
      return l("boxReflect");
    }),
    (k.csstransforms = function () {
      return !!l("transform");
    }),
    (k.csstransforms3d = function () {
      var t = !!l("perspective");
      return (
        t &&
          "webkitPerspective" in d.style &&
          P(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (e) {
              t = 9 === e.offsetLeft && 3 === e.offsetHeight;
            }
          ),
        t
      );
    }),
    (k.csstransitions = function () {
      return l("transition");
    }),
    (k.fontface = function () {
      var t;
      return (
        P('@font-face {font-family:"font";src:url("https://")}', function (
          i,
          n
        ) {
          var s = e.getElementById("smodernizr"),
            o = s.sheet || s.styleSheet,
            a = o
              ? o.cssRules && o.cssRules[0]
                ? o.cssRules[0].cssText
                : o.cssText || ""
              : "";
          t = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0]);
        }),
        t
      );
    }),
    (k.generatedcontent = function () {
      var t;
      return (
        P(
          [
            "#",
            p,
            "{font:0/0 a}#",
            p,
            ':after{content:"',
            v,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (e) {
            t = e.offsetHeight >= 3;
          }
        ),
        t
      );
    }),
    (k.video = function () {
      var t = e.createElement("video"),
        i = !1;
      try {
        (i = !!t.canPlayType) &&
          (((i = new Boolean(i)).ogg = t
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (i.h264 = t
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (i.webm = t
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")));
      } catch (t) {}
      return i;
    }),
    (k.audio = function () {
      var t = e.createElement("audio"),
        i = !1;
      try {
        (i = !!t.canPlayType) &&
          (((i = new Boolean(i)).ogg = t
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, "")),
          (i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (i.m4a = (
            t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (t) {}
      return i;
    }),
    (k.localstorage = function () {
      try {
        return localStorage.setItem(p, p), localStorage.removeItem(p), !0;
      } catch (t) {
        return !1;
      }
    }),
    (k.sessionstorage = function () {
      try {
        return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0;
      } catch (t) {
        return !1;
      }
    }),
    (k.webworkers = function () {
      return !!t.Worker;
    }),
    (k.applicationcache = function () {
      return !!t.applicationCache;
    }),
    (k.svg = function () {
      return !!e.createElementNS && !!e.createElementNS(C, "svg").createSVGRect;
    }),
    (k.inlinesvg = function () {
      var t = e.createElement("div");
      return (
        (t.innerHTML = "<svg/>"),
        (t.firstChild && t.firstChild.namespaceURI) == C
      );
    }),
    (k.smil = function () {
      return (
        !!e.createElementNS &&
        /SVGAnimate/.test(b.call(e.createElementNS(C, "animate")))
      );
    }),
    (k.svgclippaths = function () {
      return (
        !!e.createElementNS &&
        /SVGClipPath/.test(b.call(e.createElementNS(C, "clipPath")))
      );
    }),
    k))
      h(k, A) &&
        ((c = A.toLowerCase()),
        (u[c] = k[A]()),
        I.push((u[c] ? "" : "no-") + c));
    return (
      u.input ||
        ((u.input = (function (i) {
          for (var n = 0, s = i.length; s > n; n++) T[i[n]] = !!(i[n] in g);
          return (
            T.list &&
              (T.list = !(
                !e.createElement("datalist") || !t.HTMLDataListElement
              )),
            T
          );
        })(
          "autocomplete autofocus list placeholder max min multiple pattern required step".split(
            " "
          )
        )),
        (u.inputtypes = (function (t) {
          for (var n, s, o, a = 0, r = t.length; r > a; a++)
            g.setAttribute("type", (s = t[a])),
              (n = "text" !== g.type) &&
                ((g.value = v),
                (g.style.cssText = "position:absolute;visibility:hidden;"),
                /^range$/.test(s) && g.style.WebkitAppearance !== i
                  ? (d.appendChild(g),
                    (n =
                      (o = e.defaultView).getComputedStyle &&
                      "textfield" !==
                        o.getComputedStyle(g, null).WebkitAppearance &&
                      0 !== g.offsetHeight),
                    d.removeChild(g))
                  : /^(search|tel)$/.test(s) ||
                    (n = /^(url|email)$/.test(s)
                      ? g.checkValidity && !1 === g.checkValidity()
                      : g.value != v)),
              (S[t[a]] = !!n);
          return S;
        })(
          "search tel url email datetime date month week time datetime-local number range color".split(
            " "
          )
        ))),
      (u.addTest = function (t, e) {
        if ("object" == typeof t)
          for (var n in t) h(t, n) && u.addTest(n, t[n]);
        else {
          if (((t = t.toLowerCase()), u[t] !== i)) return u;
          (e = "function" == typeof e ? e() : e),
            (d.className += " " + (e ? "" : "no-") + t),
            (u[t] = e);
        }
        return u;
      }),
      n(""),
      (f = g = null),
      (function (t, e) {
        function i() {
          var t = m.elements;
          return "string" == typeof t ? t.split(" ") : t;
        }
        function n(t) {
          var e = f[t[d]];
          return e || ((e = {}), p++, (t[d] = p), (f[p] = e)), e;
        }
        function s(t, i, s) {
          return (
            i || (i = e),
            l
              ? i.createElement(t)
              : (s || (s = n(i)),
                !(o = s.cache[t]
                  ? s.cache[t].cloneNode()
                  : u.test(t)
                  ? (s.cache[t] = s.createElem(t)).cloneNode()
                  : s.createElem(t)).canHaveChildren ||
                h.test(t) ||
                o.tagUrn
                  ? o
                  : s.frag.appendChild(o))
          );
          var o;
        }
        function o(t, e) {
          e.cache ||
            ((e.cache = {}),
            (e.createElem = t.createElement),
            (e.createFrag = t.createDocumentFragment),
            (e.frag = e.createFrag())),
            (t.createElement = function (i) {
              return m.shivMethods ? s(i, t, e) : e.createElem(i);
            }),
            (t.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                i()
                  .join()
                  .replace(/[\w\-]+/g, function (t) {
                    return (
                      e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    );
                  }) +
                ");return n}"
            )(m, e.frag));
        }
        function a(t) {
          t || (t = e);
          var i = n(t);
          return (
            !m.shivCSS ||
              r ||
              i.hasCSS ||
              (i.hasCSS = !!(function (t, e) {
                var i = t.createElement("p"),
                  n = t.getElementsByTagName("head")[0] || t.documentElement;
                return (
                  (i.innerHTML = "x<style>" + e + "</style>"),
                  n.insertBefore(i.lastChild, n.firstChild)
                );
              })(
                t,
                "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
              )),
            l || o(t, i),
            t
          );
        }
        var r,
          l,
          c = t.html5 || {},
          h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          d = "_html5shiv",
          p = 0,
          f = {};
        !(function () {
          try {
            var t = e.createElement("a");
            (t.innerHTML = "<xyz></xyz>"),
              (r = "hidden" in t),
              (l =
                1 == t.childNodes.length ||
                (function () {
                  e.createElement("a");
                  var t = e.createDocumentFragment();
                  return (
                    void 0 === t.cloneNode ||
                    void 0 === t.createDocumentFragment ||
                    void 0 === t.createElement
                  );
                })());
          } catch (t) {
            (r = !0), (l = !0);
          }
        })();
        var m = {
          elements:
            c.elements ||
            "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: "3.7.0",
          shivCSS: !1 !== c.shivCSS,
          supportsUnknownElements: l,
          shivMethods: !1 !== c.shivMethods,
          type: "default",
          shivDocument: a,
          createElement: s,
          createDocumentFragment: function (t, s) {
            if ((t || (t = e), l)) return t.createDocumentFragment();
            for (
              var o = (s = s || n(t)).frag.cloneNode(),
                a = 0,
                r = i(),
                c = r.length;
              c > a;
              a++
            )
              o.createElement(r[a]);
            return o;
          },
        };
        (t.html5 = m), a(e);
      })(this, e),
      (u._version = "2.8.3"),
      (u._prefixes = _),
      (u._domPrefixes = x),
      (u._cssomPrefixes = w),
      (u.mq = function (e) {
        var i,
          n = t.matchMedia || t.msMatchMedia;
        return n
          ? (n(e) && n(e).matches) || !1
          : (P(
              "@media " + e + " { #" + p + " { position: absolute; } }",
              function (e) {
                i =
                  "absolute" ==
                  (t.getComputedStyle
                    ? getComputedStyle(e, null)
                    : e.currentStyle
                  ).position;
              }
            ),
            i);
      }),
      (u.hasEvent = M),
      (u.testProp = function (t) {
        return a([t]);
      }),
      (u.testAllProps = l),
      (u.testStyles = P),
      (u.prefixed = function (t, e, i) {
        return e ? l(t, e, i) : l(t, "pfx");
      }),
      (d.className =
        d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        " js " +
        I.join(" ")),
      u
    );
  })(this, this.document));
var target,
  csrfName = "",
  csrfHash = "";
$(document).ready(function () {
  $.get(site_url + "home/get_csrf_token_name", function (t) {
    var e = JSON.parse(t);
    (csrfName = e.csrfName), (csrfHash = e.csrfHash);
  });
});
var interval,
  scrollval,
  currentscrollval,
  storss,
  stor1,
  count = 0,
  count1 = 0,
  stors = 0,
  flg = 1,
  last = 0,
  $window = $(window),
  flexslider = { vars: {} },
  flexslider1 = { vars1: {} };
(flexslider2 = { vars2: {} }),
  $(document).ready(function () {
    function t() {
      return window.innerWidth < 460
        ? 1
        : window.innerWidth < 600
        ? 2
        : (window.innerWidth, 3);
    }
    function e() {
      return window.innerWidth < 460
        ? 1
        : window.innerWidth < 600
        ? 2
        : (window.innerWidth, 3);
    }
    function i() {
      return window.innerWidth < 460
        ? 1
        : window.innerWidth < 600
        ? 2
        : (window.innerWidth, 3);
    }
    onResize(),
      $("p:empty").remove(),
      $("#links_serach li").on("click", function () {
        $("#links_serach li").removeClass("active"), $(this).addClass("active");
      }),
      0 == $(".slides li").length &&
        $(".slides").closest(".flexslider").removeClass("flexslider"),
      $(window).trigger("resize"),
      $(".hp_fea .flexslider").flexslider({ animation: "slide", touch: !1 }),
      $(".hpbar .flexslider").flexslider({ animation: "slide" }),
      $(".flex3 .flexslider").attr("data-item-width", "370"),
      $(".flex3 .flexslider").flexslider({
        animation: "slide",
        move: 1,
        itemWidth: 370,
        itemMargin: 14,
        animationLoop: !0,
        minItems: t(),
        maxItems: t(),
        start: function (t) {
          flexslider = t;
        },
      }),
      $(".flex4 .flexslider").flexslider({
        animation: "slide",
        itemWidth: 275,
        itemMargin: 14,
      }),
      $(".flexkit .flexslider").flexslider({
        animation: "slide",
        itemWidth: 275,
        itemMargin: 14,
        minItems: e(),
        maxItems: e(),
        start: function (t) {
          flexslider1 = t;
        },
      }),
      $(".flexvedio .flexslider").flexslider({
        animation: "slide",
        itemWidth: 275,
        itemMargin: 14,
        minItems: e(),
        maxItems: e(),
        start: function (t) {
          flexslider1 = t;
        },
      }),
      $(".gallerycls").flexslider({
        animation: "slide",
        animationLoop: !0,
        itemWidth: 359,
        itemMargin: 10,
        minItems: i(),
        maxItems: i(),
        start: function (t) {
          flexslider2 = t;
        },
      }),
      $(window).resize(function () {
        var n = t(),
          s = e(),
          o = i();
        (flexslider.vars.minItems = n),
          (flexslider.vars.maxItems = n),
          (flexslider1.vars1.minItems = s),
          (flexslider1.vars1.maxItems = s),
          (flexslider2.vars2.minItems = o),
          (flexslider2.vars2.maxItems = o);
      });
    var n,
      s = "";
    $("header .lt a").hover(
      function () {
        $("header .lt a").removeClass("active"),
          $(this).addClass("active"),
          (s = $(this).attr("rel")),
          $(".topmenu").stop(!0, !0).show(),
          $(".mn").hide(),
          $(".mn_" + s)
            .stop(!0)
            .fadeIn(500);
      },
      function () {
        $("header .lt a").removeClass("active"),
          (s = $(this).attr("rel")),
          $(".topmenu").stop(!0, !0).hide();
      }
    ),
      $(".topmenu").hover(
        function () {
          $("header .lt a").removeClass("active"),
            "wwa" == s
              ? $("header .lt a").eq(0).addClass("active")
              : "wwd" == s
              ? $("header .lt a").eq(1).addClass("active")
              : "wwc" == s && $("header .lt a").eq(2).removeClass("active"),
            $(this).stop(!0, !0).show();
        },
        function () {
          $("header .lt a").removeClass("active"), $(this).stop(!0, !0).hide();
        }
      ),
      $(".csr_demo").owlCarousel({
        navigation: !0,
        slideSpeed: 600,
        paginationSpeed: 800,
        singleItem: !0,
        items: 1,
        pagination: !0,
        stopOnHover: !0,
      }),
      $(".close_bt").click(function () {
        $(".whitePopup").fadeOut();
      }),
      $(".close").click(function () {
        $(".alert").fadeOut();
      }),
      setTimeout(function () {
        $(".alert").fadeOut();
      }, 3e3),
      $(document).on(
        "click",
        ".gallery_cls .lk, .pg_bod .dv .lk,.gallery .slides .gallery,.innercont .ct_yr_rt a,.pr_lf a.lk,.ct_yr_rt_vk a.lk,.flex3 a.gallery,.formattable.pr_cv .hd.pr_rt a.lk",
        function () {
          var t = $(this).parent().index();
          $(".whitePopup").stop(!0, !0).fadeIn(500);
          var e = $(this).find("img").attr("src"),
            i = $(this).parent().find(".tx1").text(),
            n = $(this).parent().find(".tx2").text(),
            s = $(this).parent().find(".tx3").html();
          $(".whitePopup .ct .img").attr("src", ""),
            $(".whitePopup .ct .img").attr("src", e),
            $(".whitePopup .ct .tx1").html(i),
            $(".whitePopup .ct .tx2").html(n),
            $(".whitePopup .ct .tx3").html(s),
            $(".pop_slider_cntr .owl-wrapper").trigger("owl.goTo", t),
            ($(".whitePopup .ct .tx1:empty") ||
              $(".whitePopup .ct .tx2:empty") ||
              $(".whitePopup .ct .tx3:empty")) &&
              ($(".whitePopup .ct .tx1:empty").remove(),
              $(".whitePopup .ct .tx2:empty").remove(),
              $(".whitePopup .ct .tx3:empty").remove());
        }
      ),
      $(".whitePopup .cl").click(function () {
        $(".whitePopup").stop(!0, !0).fadeOut(500);
      }),
      $("span.ic_arr i").removeClass("fa-angle-up").addClass("fa-angle-down"),
      $(".accordion .hdr").click(function () {
        var t = $(this).next(".cnt").height(),
          e = $(this).next(".cnt").find(".ht").height() + 25;
        $(".cnt").stop(!0).animate({ height: 0 }, 1e3, "easeOutExpo"),
          $(".accordion .hdr").removeClass("active"),
          $("span.ic_arr i")
            .removeClass("fa-angle-up")
            .addClass("fa-angle-down"),
          t > 10
            ? ($(this)
                .find("span.icon_plus i")
                .removeClass("fa-minus")
                .addClass("fa-plus"),
              $(this)
                .find("span.ic_arr i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down"),
              $(this)
                .next(".cnt")
                .stop(!0)
                .animate({ height: 0 }, 500, "easeOutExpo"))
            : ($(this).addClass("active"),
              $(this)
                .find("span.icon_plus i")
                .removeClass("fa-plus")
                .addClass("fa-minus"),
              $(this)
                .find("span.ic_arr i")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up"),
              $(this)
                .next(".cnt")
                .stop(!0)
                .animate({ height: e }, 1e3, "easeOutExpo"));
      }),
      $(".readmore .rm_btn").click(function () {
        $(this).parent().find(".rm_ct").height();
        var t = $(this).parent().find(".rm_ct .ht").height() + 20;
        $(this).hide(),
          $(this)
            .parent()
            .find(".rm_ct")
            .stop(!0, !0)
            .animate({ height: t }, 500, "easeOutExpo", function () {});
      }),
      $(".innercont .ct_yr_lf").length > 0 &&
        (n = $(".innercont .ct_yr_lf").offset().top),
      $(".homecont .msg_pop").css({ bottom: "50px" }),
      $(".msg_pop").click(function () {
        $("#test-popup").fadeIn(500);
      }),
      $(".mfp-close").click(function () {
        $("#test-popup").fadeOut(500);
      });
    var o = 1;
    $(window).on("scroll", function () {
      console.log(11111);
      var t = $(window).scrollTop() + $("header").height();
      $(".innercont").length > 0 &&
        (n < t &&
        $(".innercont").innerHeight() +
          $(".innercont").offset().top -
          ($(".innercont .ct_yr_lf").height() + 200) >
          t
          ? $(".innercont .ct_yr_lf").css({
              position: "fixed",
              top: "70px",
              "z-index": "unset",
            })
          : $(".innercont").innerHeight() +
              $(".innercont").offset().top -
              ($(".innercont .ct_yr_lf").height() + 200) >
            t
          ? $(".innercont .ct_yr_lf").css({
              position: "unset",
              bottom: "50px",
              top: "unset",
              "z-index": "unset",
            })
          : $(".innercont .ct_yr_lf").css({
              position: "absolute",
              bottom: "150px",
              top: "unset",
              "z-index": "1",
            })),
        $(window).scrollTop() >= 40
          ? (o &&
              ($("header .md img")
                .eq(0)
                .stop(!0)
                .animate({ opacity: 0, marginTop: -26 }, 500),
              $("header .md img")
                .eq(1)
                .stop(!0)
                .animate({ opacity: 1, marginTop: -26 }, 500),
              (o = 0)),
            $("header .md img").parent().addClass("foo"),
            $("header,.topmenu").addClass("foo"),
            $(".mobile_menu_cl").addClass("foo_mn"),
            $(".search").addClass("search_mn"),
            $(".topmenu").removeAttr("style"),
            $(".topmenu").css({ top: $("header.foo").position().top + 70 }),
            $(".topmenu").css({ top: $("header.foo").offset().top + 70 }),
            $(".topmenu").hide())
          : (0 == o &&
              ($("header .md img")
                .eq(0)
                .stop(!0)
                .animate({ opacity: 1, marginTop: 0 }, 500),
              $("header .md img")
                .eq(1)
                .stop(!0)
                .animate({ opacity: 0, marginTop: 0 }, 500),
              (o = 1)),
            $("header .md img").parent().removeClass("foo"),
            $("header,.topmenu").removeClass("foo").removeAttr("style"),
            $(".mobile_menu_cl").removeClass("foo_mn"),
            $(".search").removeClass("search_mn"),
            $(".topmenu").removeAttr("style"));
    }),
      $("a.lk.search").on("click", function () {
        $(".search-panel").fadeIn(500).addClass("foo"),
          $(".mobile_menu_cl.mobile_menu_cl_add").eq(0).trigger("click"),
          $(".mobile_menu_cl").removeAttr("style"),
          $(".mobile_menu_cl").removeAttr("style"),
          $(".search-input__input input[type=text]").focus(),
          $("body").css({ overflow: "hidden" });
      }),
      $("a.js-search-close, .close_btn").on("click", function () {
        $(".search-panel").fadeOut(100).removeClass("foo").removeAttr("style"),
          $("body").removeAttr("style"),
          onResize();
      }),
      $(".innercont.pg_bod.DN .dv").each(function (t) {
        var e = (t % 4) + 1;
        $(this).addClass("class-" + e);
      });
  }),
  $(window).resize(function () {
    onResize();
  }),
  $(function () {
    $("select[name=app_for]").addClass("required"),
      $("form").each(function () {
        $(this)
          .not(
            "form#contactform.common_form,form#main-search.search-panel__form"
          )
          .validate({
            submitHandler: function (t) {
              t.submit();
            },
          });
      });
  });
var flagmenu = !0;
function onResize() {
  var t = $(window).width(),
    e = $(window).height();
  $(".whitePopup .ct").css({ height: e - 100 }),
    $(".whitePopup .ct .sc").css({ height: e - 200 }),
    $(".fs").css({ height: e }),
    $(".search-panel").css({ height: $(window).innerHeight() }),
    1 == flagmenu &&
      t < 768 &&
      ($(".hpbar .tx1").wrapInner(
        '<a href="javascript:void(0)" class="wrapper"><a>'
      ),
      $(".hpbar .foo .rt a").each(function (t, e) {
        var i = $(".hpbar .foo .rt a").eq(t).attr("href");
        $(".hpbar .foo .lt")
          .eq(t)
          .wrap('<a href="' + i + '" class="wrapper"></a>');
      }),
      $(".pg_contact .address-div .add-box").after(
        $(".pg_contact .address-div .select-wrapper").addClass("foo")
      ),
      $(".pg_contact .address-div .select-wrapper.foo").before(
        '<div class="clear"></div>'
      ),
      $(".showmore").closest(".commercial_pg .regi_tp2").removeAttr("style"),
      $(".showmore").closest(".commercial_pg .mp_ltr").removeAttr("style"),
      $(".dynamicText").addClass("info"),
      setTimeout(function () {
        $("ul.slides > li > a").length &&
          ($(".flex-direction-nav a.flex-prev").css({
            height: 2 * $("ul.slides > li > a").height(),
          }),
          $(".flex-direction-nav a.flex-next").css({
            height: 2 * $("ul.slides > li > a").height(),
          }),
          $(".client_slid .flex-direction-nav a.flex-prev").removeAttr("style"),
          $(".client_slid .flex-direction-nav a.flex-next").removeAttr(
            "style"
          ));
      }, 800),
      $("p")
        .filter(function () {
          return "&nbsp;" == this.innerHTML;
        })
        .addClass("removeTxt"),
      $(".deat_form.deat_form_detail").mCustomScrollbar("destroy"),
      (flagmenu = !1)),
    t > 980 && $(".mobile_menu_cl.mobile_menu_cl_add").eq(0).trigger("click"),
    t > 769 &&
      ($(".deat_form.deat_form_detail").mCustomScrollbar(),
      $(".hpbar .foo a.wrapper").contents().unwrap(),
      $(".pg_contact .address-div .add-box .ttl_cap").after(
        $(".pg_contact .address-div .select-wrapper").removeClass("foo")
      ),
      $(".flex-direction-nav a.flex-prev").removeAttr("style"),
      $(".flex-direction-nav a.flex-next").removeAttr("style"),
      $(".dynamicText").removeClass("info"),
      (flagmenu = !0)),
    $(".search-panel__content").css({ height: e - 250 }),
    $(".no_menu_scrol").css({ height: e - 100 });
}
var flag = 1;
$(document).ready(function () {
  $(".mobile_menu_cl").on("click", function () {
    $(".mobile_menu_cl").toggleClass("mobile_menu_cl_add"),
      $(".mobile_menu").toggleClass("mobile_menu_add"),
      $("header").toggleClass("header_add"),
      $(".main_logo").toggleClass("main_logo_add"),
      $(".search_mo").toggleClass("search_mo_add"),
      $(".nav-arrow").removeClass("nav-rotate"),
      $("li.nav_item.test > span >i.nav-arrow").addClass("nav-rotate"),
      $("ul.multi_menu").slideUp(100),
      $(".multi_menu.first").slideDown(),
      $(".multi_menu.second").slideDown(),
      $(this).hasClass("mobile_menu_cl_add")
        ? ($("body").removeAttr("style"), $("body").css("overflow-y", "hidden"))
        : ($("body").removeAttr("style"),
          $("body").css("overflow-y", "auto"),
          $(".mobile_menu_cl").removeAttr("style")),
      console.log(
        $("li.nav_item.test > span >i.nav-arrow").addClass("nav-arrow")
      );
  }),
    $(document).on("click", "a.re_ac", function () {
      $(this).hasClass("active")
        ? ($(this).removeClass("active"),
          $(this)
            .next()
            .slideUp(500, function () {
              $(this).closest(".mbdv").removeClass("active");
            }))
        : ($("a.re_ac").removeClass("active"),
          $(".mbdv").removeClass("active"),
          $(this).addClass("active"),
          $(this).closest(".mbdv").addClass("active"),
          $(".top_accord").slideUp(500, function () {
            $(this).closest(".mbdv").removeClass("active");
          }),
          $(this).next().slideDown(500));
    }),
    $(".nav_item")
      .has("ul")
      .prepend(
        '<span class="nav-click"><i class="nav-arrow nav-rotate"></i></span>'
      ),
    $(".nav-click").on("click", function () {
      $(this).siblings(".multi_menu").slideToggle(),
        $(this).children(".nav-arrow").toggleClass("nav-rotate");
    }),
    onResize1(),
    $(window).trigger("resize");
}),
  $(document).ready(function () {
    $("#content-1").mCustomScrollbar({ theme: "minimal" }),
      $("header .lt a").addClass("foo"),
      $(".serach_tx").addClass("mCustomScrollbar _mCS_2 _mCS_1 _mCS_3"),
      onResize1();
  }),
  $(document).ready(function () {
    onResize1(),
      $(".more_click").click(function () {
        $(this).hide(), $(".more_box").slideDown(), $(".less_click").show();
      }),
      $(".less_click").click(function () {
        $(this).hide(), $(".more_box").slideUp(), $(".more_click").show();
      });
  });
var mflag = 1;
function onResize1() {
  1 == mflag &&
    $("#mCSB_1_container > li").length &&
    ($("header .lt a")
      .clone(!0)
      .each(function (t, e) {
        $("#mCSB_1_container > li").eq(t).append(e);
      }),
    $(".mn.mn_wwa .dv a.ttl")
      .clone(!0)
      .each(function (t, e) {
        $("#mCSB_1_container > li > ul.multi_menu.first > li").eq(t).append(e);
      }),
    $(".mn.mn_wwa .dv:first a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $("#mCSB_1_container > li > ul.multi_menu.first .first_ac li")
          .eq(t)
          .append(i);
      }),
    $(".mn.mn_wwa .dv")
      .eq(1)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $("#mCSB_1_container > li > ul.multi_menu.first .second_ac li")
          .eq(t)
          .append(i);
      }),
    $(".mn.mn_wwa .dv")
      .eq(2)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $("#mCSB_1_container > li > ul.multi_menu.first .third_ac li")
          .eq(t)
          .append(i);
      }),
    $("#mCSB_1_container > li > ul.multi_menu.first > li  a.ttl")
      .eq(2)
      .each(function () {
        $(this).insertBefore(
          $(this).prev("#mCSB_1_container > li > ul.multi_menu.first .third_ac")
        );
      }),
    $(".mn.mn_wwd .dv a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $("#mCSB_1_container > li > ul.multi_menu.second > li").eq(t).append(i);
      }),
    $(".mn.mn_wwd .dv")
      .eq(0)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $(
          "#mCSB_1_container > li > ul.multi_menu.second > li > ul.seconds_ac0 > li"
        )
          .eq(t)
          .append(i);
      }),
    $(".mn.mn_wwd .dv")
      .eq(1)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $(
          "#mCSB_1_container > li > ul.multi_menu.second > li > ul.seconds_ac1 > li"
        )
          .eq(t)
          .append(i);
      }),
    $(".mn.mn_wwd .dv")
      .eq(2)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $(
          "#mCSB_1_container > li > ul.multi_menu.second > li > ul.seconds_ac2 > li"
        )
          .eq(t)
          .append(i);
      }),
    $(".mn.mn_wwd .dv")
      .eq(3)
      .find("a")
      .not("a.ttl")
      .clone(!0)
      .each(function (t, e) {
        var i = e;
        $(
          "#mCSB_1_container > li > ul.multi_menu.second > li > ul.seconds_ac3 > li"
        )
          .eq(t)
          .append(i);
      }),
    $("a.foo").each(function () {
      $(this).insertBefore($(this).prev("ul.multi_menu"));
    }),
    $(".multi_menu.first_ac")
      .next()
      .each(function () {
        $(this).insertBefore($(this).prev("ul.multi_menu.first_ac"));
      }),
    $(".multi_menu.second_ac")
      .next()
      .each(function () {
        $(this).insertBefore($(this).prev("ul.multi_menu.second_ac"));
      }),
    $(".multi_menu.seconds_ac")
      .next()
      .each(function () {
        $(this).insertBefore($(this).prev("ul.multi_menu.seconds_ac"));
      }),
    (mflag = 0));
}
function isNumber(t) {
  var e = (t = t || window.event).charCode
    ? t.charCode
    : t.keyCode
    ? t.keyCode
    : t.which
    ? t.which
    : 0;
  return !(e > 31 && (e < 48 || e > 57)) && !($("input[type=text]") < 10);
}
function ValidateAlpha(t) {
  var e = t.which ? t.which : t.keyCode;
  return !(e < 65 || e > 90) || !(e < 97 || e > 123) || 32 == e;
}
$(document).ready(function () {
  $(".amen_pra h3").click(function (t) {
    t.stopPropagation(),
      $(this).toggleClass("active"),
      $(this)
        .parent()
        .children(".phase_tabs")
        .slideToggle(500, function () {
          $(this).is(":visible") && $(window).width() < 768
            ? $(this)
                .closest("div.Amenities_tb")
                .css({ height: $(this).height() + 215 })
            : $(this).closest("div.Amenities_tb").removeAttr("style");
        }),
      $(this).parent().siblings().find(".phase_tabs").slideUp(),
      $(this).parent().siblings().find("h3").removeClass("active");
  }),
    $("#newsletterForm button").on("click", function () {
      $("#newsletter_phone-error").length &&
        $("#newsletterForm .sel_pn").after($("#newsletter_phone-error"));
    }),
    $(".ame_tab li").click(function (t) {
      t.stopPropagation(),
        $(".phase_tabs").slideUp(),
        $("div.Amenities_tb").removeAttr("style"),
        $(".dynamicText.info .ctsh").removeAttr("style"),
        $(".dynamicText.info .ctsh").css({
          height: "184px",
          overflow: "hidden",
        }),
        $(".dynamicText.info a.showmore").text("Show More"),
        $(".amen_pra h3").removeClass("active"),
        $("div.Amenities_tb")
          .find("ul.ame_tab li ul.scroll_box")
          .removeAttr("style");
    }),
    $(".cl_sin").click(function () {
      $(".pop_slider2").fadeIn(function () {
        $(".sin_pop").fadeIn();
      });
    }),
    $(".sin_pop_box a.close_bt").click(function () {
      $(".sin_pop").fadeOut(),
        setTimeout(function () {
          $(".pop_slider2").fadeOut();
        });
    }),
    $(".grid").children(".dv").length <= 2 &&
      ($(this).find(".grid").css({ "text-align": "center" }),
      $(this)
        .find(".grid .dv")
        .css({ float: "none", display: "inline-block" })),
    $(".gallery_box").find(".slides li").length;
}),
  (equalheight = function (t) {
    var e,
      i = 0,
      n = 0,
      s = new Array();
    $(t).each(function () {
      if (
        ((e = $(this)),
        $(e).height("auto"),
        (topPostion = e.position().top),
        n != topPostion)
      ) {
        for (currentDiv = 0; currentDiv < s.length; currentDiv++)
          s[currentDiv].height(i);
        (s.length = 0), (n = topPostion), (i = e.height()), s.push(e);
      } else s.push(e), (i = i < e.height() ? e.height() : i);
      for (currentDiv = 0; currentDiv < s.length; currentDiv++)
        s[currentDiv].height(i);
    });
  }),
  $(window).load(function () {
    equalheight(".address-box li"),
      equalheight(".commercial_pg .ct .foo"),
      equalheight(".content .dv"),
      equalheight(".site_map .dv"),
      equalheight("li.social-media-feed");
  }),
  $(window).resize(function () {
    equalheight(".address-box li"),
      equalheight(".commercial_pg .ct .foo"),
      equalheight(".content .dv"),
      equalheight(".site_map .dv");
    var t =
      $(".commercial_pg .ct .foo").height() -
      $(".regi_tp2 h1").innerHeight() -
      10;
    $(".commercial_pg .ct .foo1").css({ height: t }),
      equalheight("li.social-media-feed");
  }),
  $(document).ready(function () {
    equalheight(".address-box li"),
      equalheight(".content .dv"),
      equalheight("li.social-media-feed ");
    var t =
      $(".commercial_pg .ct .foo").height() -
      $(".regi_tp2 h1").innerHeight() -
      10;
    $(".commercial_pg .ct .foo1").css({ height: t }),
      equalheight(".commercial_pg .ct .foo"),
      $(".showmore").click(function (t) {
        t.stopPropagation();
        var e = $(this).parent().find(".height").height();
        "Show More" == $(this).text()
          ? ($(this)
              .parent()
              .find(".ctsh")
              .stop((!0).true)
              .animate({ height: e }, 500, "easeOutExpo"),
            $(this)
              .closest("div.Amenities_tb")
              .stop((!0).true)
              .animate({ height: e + 100 }, 500, "easeOutExpo"),
            $(this)
              .closest(".mp_ltr .regi_tp_read_mr")
              .stop((!0).true)
              .animate({ height: e + 110 }, 500, "easeOutExpo"),
            $(this)
              .closest("div.Amenities_tb")
              .find("ul.ame_tab li ul.scroll_box")
              .css({ height: "100%" }),
            $(this)
              .closest(".commercial_pg .regi_tp2")
              .stop((!0).true)
              .animate({ height: e + 110 }, 500, "easeOutExpo"),
            $(this)
              .closest(".commercial_pg .mp_ltr")
              .stop((!0).true)
              .animate({ height: e + 110 }, 500, "easeOutExpo"),
            $(this)
              .closest(".commercial_pg .deat_form")
              .stop((!0).true)
              .animate({ height: e + 110 }, 500, "easeOutExpo"),
            $(this).closest(".dynamicText.info .ctsh").css({ height: "auto" }),
            $(this).text("Show Less"))
          : ($(this)
              .parent()
              .find(".ctsh")
              .stop((!0).true)
              .animate({ height: 184 }, 500, "easeOutExpo"),
            $(this).closest("div.Amenities_tb").removeAttr("style"),
            $(this).closest(".commercial_pg .regi_tp2").removeAttr("style"),
            $(this).closest(".mp_ltr .regi_tp_read_mr").removeAttr("style"),
            $(this).closest(".commercial_pg .mp_ltr").removeAttr("style"),
            $(this).closest("ul.ame_tab li ul.scroll_box").removeAttr("style"),
            $(this).text("Show More"));
      }),
      $("input.datepicker").datepicker(),
      $(".owl-carousel .item-video iframe").addClass("youtube-iframe"),
      $(document).on("click", "a.close_bt img", function (t) {
        $("iframe.youtube-iframe").each(function (t) {
          $(this).attr("src", $(this).attr("src"));
        });
      }),
      $("#select_contact").change(function () {
        $(".frm").hide(),
          1 == $(this).val()
            ? $("#buying_form").show()
            : 2 == $(this).val()
            ? $("#sobha_vendor").show()
            : 3 == $(this).val()
            ? $("#channel_partner").show()
            : 4 == $(this).val()
            ? $("#general_enquiries").show()
            : 5 == $(this).val()
            ? $("#media_enquiries").show()
            : 6 == $(this).val()
            ? $("#investor_enquiries").show()
            : 7 == $(this).val() && $("#email_alerts").show();
      }),
      $("#select_sobha_offices").change(function () {
        $(".offi").hide(),
          $("#shoba_offices_" + $(this).val()).show(),
          equalheight(".address-box li");
      }),
      $("#select_sobha_offices").val(2).change();
  });

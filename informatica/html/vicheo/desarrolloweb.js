!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 9));
})([
  function (e, t, n) {
    "use strict";
    var a = n(1),
      r = n(14),
      i = Object.prototype.toString;
    function o(e) {
      return "[object Array]" === i.call(e);
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function l(e) {
      return "[object Function]" === i.call(e);
    }
    function u(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), o(e)))
          for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
        else
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.call(null, e[r], r, e);
    }
    e.exports = {
      isArray: o,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === i.call(e);
      },
      isBuffer: r,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === i.call(e);
      },
      isFile: function (e) {
        return "[object File]" === i.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === i.call(e);
      },
      isFunction: l,
      isStream: function (e) {
        return s(e) && l(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function e() {
        var t = {};
        function n(n, a) {
          "object" == typeof t[a] && "object" == typeof n
            ? (t[a] = e(t[a], n))
            : (t[a] = n);
        }
        for (var a = 0, r = arguments.length; a < r; a++) u(arguments[a], n);
        return t;
      },
      deepMerge: function e() {
        var t = {};
        function n(n, a) {
          "object" == typeof t[a] && "object" == typeof n
            ? (t[a] = e(t[a], n))
            : (t[a] = "object" == typeof n ? e({}, n) : n);
        }
        for (var a = 0, r = arguments.length; a < r; a++) u(arguments[a], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          u(t, function (t, r) {
            e[r] = n && "function" == typeof t ? a(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
          n[a] = arguments[a];
        return e.apply(t, n);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    function r(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, n) {
      if (!t) return e;
      var i;
      if (n) i = n(t);
      else if (a.isURLSearchParams(t)) i = t.toString();
      else {
        var o = [];
        a.forEach(t, function (e, t) {
          null != e &&
            (a.isArray(e) ? (t += "[]") : (e = [e]),
            a.forEach(e, function (e) {
              a.isDate(e)
                ? (e = e.toISOString())
                : a.isObject(e) && (e = JSON.stringify(e)),
                o.push(r(t) + "=" + r(e));
            }));
        }),
          (i = o.join("&"));
      }
      if (i) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var a = n(0),
        r = n(20),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function o(e, t) {
        !a.isUndefined(e) &&
          a.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var s,
        l = {
          adapter:
            (void 0 !== t &&
            "[object process]" === Object.prototype.toString.call(t)
              ? (s = n(5))
              : "undefined" != typeof XMLHttpRequest && (s = n(5)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                r(t, "Accept"),
                r(t, "Content-Type"),
                a.isFormData(e) ||
                a.isArrayBuffer(e) ||
                a.isBuffer(e) ||
                a.isStream(e) ||
                a.isFile(e) ||
                a.isBlob(e)
                  ? e
                  : a.isArrayBufferView(e)
                  ? e.buffer
                  : a.isURLSearchParams(e)
                  ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : a.isObject(e)
                  ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (l.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        a.forEach(["delete", "get", "head"], function (e) {
          l.headers[e] = {};
        }),
        a.forEach(["post", "put", "patch"], function (e) {
          l.headers[e] = a.merge(i);
        }),
        (e.exports = l);
    }.call(this, n(19)));
  },
  function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n(21),
      i = n(2),
      o = n(23),
      s = n(24),
      l = n(6);
    e.exports = function (e) {
      return new Promise(function (t, u) {
        var c = e.data,
          p = e.headers;
        a.isFormData(c) && delete p["Content-Type"];
        var d = new XMLHttpRequest();
        if (e.auth) {
          var g = e.auth.username || "",
            f = e.auth.password || "";
          p.Authorization = "Basic " + btoa(g + ":" + f);
        }
        if (
          (d.open(
            e.method.toUpperCase(),
            i(e.url, e.params, e.paramsSerializer),
            !0
          ),
          (d.timeout = e.timeout),
          (d.onreadystatechange = function () {
            if (
              d &&
              4 === d.readyState &&
              (0 !== d.status ||
                (d.responseURL && 0 === d.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in d
                    ? o(d.getAllResponseHeaders())
                    : null,
                a = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? d.response
                      : d.responseText,
                  status: d.status,
                  statusText: d.statusText,
                  headers: n,
                  config: e,
                  request: d,
                };
              r(t, u, a), (d = null);
            }
          }),
          (d.onabort = function () {
            d && (u(l("Request aborted", e, "ECONNABORTED", d)), (d = null));
          }),
          (d.onerror = function () {
            u(l("Network Error", e, null, d)), (d = null);
          }),
          (d.ontimeout = function () {
            u(
              l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)
            ),
              (d = null);
          }),
          a.isStandardBrowserEnv())
        ) {
          var h = n(25),
            m =
              (e.withCredentials || s(e.url)) && e.xsrfCookieName
                ? h.read(e.xsrfCookieName)
                : void 0;
          m && (p[e.xsrfHeaderName] = m);
        }
        if (
          ("setRequestHeader" in d &&
            a.forEach(p, function (e, t) {
              void 0 === c && "content-type" === t.toLowerCase()
                ? delete p[t]
                : d.setRequestHeader(t, e);
            }),
          e.withCredentials && (d.withCredentials = !0),
          e.responseType)
        )
          try {
            d.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          d.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            d.upload &&
            d.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              d && (d.abort(), u(e), (d = null));
            }),
          void 0 === c && (c = null),
          d.send(c);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(22);
    e.exports = function (e, t, n, r, i) {
      var o = new Error(e);
      return a(o, t, n, r, i);
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function (e, t) {
      t = t || {};
      var n = {};
      return (
        a.forEach(["url", "method", "params", "data"], function (e) {
          void 0 !== t[e] && (n[e] = t[e]);
        }),
        a.forEach(["headers", "auth", "proxy"], function (r) {
          a.isObject(t[r])
            ? (n[r] = a.deepMerge(e[r], t[r]))
            : void 0 !== t[r]
            ? (n[r] = t[r])
            : a.isObject(e[r])
            ? (n[r] = a.deepMerge(e[r]))
            : void 0 !== e[r] && (n[r] = e[r]);
        }),
        a.forEach(
          [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "maxContentLength",
            "validateStatus",
            "maxRedirects",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
          ],
          function (a) {
            void 0 !== t[a] ? (n[a] = t[a]) : void 0 !== e[a] && (n[a] = e[a]);
          }
        ),
        n
      );
    };
  },
  function (e, t, n) {
    "use strict";
    function a(e) {
      this.message = e;
    }
    (a.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (a.prototype.__CANCEL__ = !0),
      (e.exports = a);
  },
  function (e, t, n) {
    n(10), (e.exports = n(33));
  },
  function (e, t, n) {
    n(11), n(30), n(32);
  },
  function (e, t, n) {
    (window.axios = n(12)),
      (window.axios.defaults.headers.common["X-Requested-With"] =
        "XMLHttpRequest");
    var a = document.head.querySelector('meta[name="csrf-token"]');
    a
      ? (window.axios.defaults.headers.common["X-CSRF-TOKEN"] = a.content)
      : console.error(
          "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
        );
  },
  function (e, t, n) {
    e.exports = n(13);
  },
  function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n(1),
      i = n(15),
      o = n(7);
    function s(e) {
      var t = new i(e),
        n = r(i.prototype.request, t);
      return a.extend(n, i.prototype, t), a.extend(n, t), n;
    }
    var l = s(n(4));
    (l.Axios = i),
      (l.create = function (e) {
        return s(o(l.defaults, e));
      }),
      (l.Cancel = n(8)),
      (l.CancelToken = n(28)),
      (l.isCancel = n(3)),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = n(29)),
      (e.exports = l),
      (e.exports.default = l);
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        null != e &&
        null != e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n(2),
      i = n(16),
      o = n(17),
      s = n(7);
    function l(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (l.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        ((e = s(this.defaults, e)).method = e.method
          ? e.method.toLowerCase()
          : "get");
      var t = [o, void 0],
        n = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift());
      return n;
    }),
      (l.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      a.forEach(["delete", "get", "head", "options"], function (e) {
        l.prototype[e] = function (t, n) {
          return this.request(a.merge(n || {}, { method: e, url: t }));
        };
      }),
      a.forEach(["post", "put", "patch"], function (e) {
        l.prototype[e] = function (t, n, r) {
          return this.request(a.merge(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = l);
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    function r() {
      this.handlers = [];
    }
    (r.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (r.prototype.forEach = function (e) {
        a.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n(18),
      i = n(3),
      o = n(4),
      s = n(26),
      l = n(27);
    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        u(e),
        e.baseURL && !s(e.url) && (e.url = l(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = r(e.data, e.headers, e.transformRequest)),
        (e.headers = a.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers || {}
        )),
        a.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || o.adapter)(e).then(
          function (t) {
            return (
              u(e), (t.data = r(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (u(e),
                t &&
                  t.response &&
                  (t.response.data = r(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function (e, t, n) {
      return (
        a.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var n,
      a,
      r = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        a = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        a = o;
      }
    })();
    var l,
      u = [],
      c = !1,
      p = -1;
    function d() {
      c &&
        l &&
        ((c = !1), l.length ? (u = l.concat(u)) : (p = -1), u.length && g());
    }
    function g() {
      if (!c) {
        var e = s(d);
        c = !0;
        for (var t = u.length; t; ) {
          for (l = u, u = []; ++p < t; ) l && l[p].run();
          (p = -1), (t = u.length);
        }
        (l = null),
          (c = !1),
          (function (e) {
            if (a === clearTimeout) return clearTimeout(e);
            if ((a === o || !a) && clearTimeout)
              return (a = clearTimeout), clearTimeout(e);
            try {
              a(e);
            } catch (t) {
              try {
                return a.call(null, e);
              } catch (t) {
                return a.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new f(e, t)), 1 !== u.length || c || s(g);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = h),
      (r.addListener = h),
      (r.once = h),
      (r.off = h),
      (r.removeListener = h),
      (r.removeAllListeners = h),
      (r.emit = h),
      (r.prependListener = h),
      (r.prependOnceListener = h),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function (e, t) {
      a.forEach(e, function (n, a) {
        a !== t &&
          a.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[a]);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(6);
    e.exports = function (e, t, n) {
      var r = n.config.validateStatus;
      !r || r(n.status)
        ? e(n)
        : t(
            a(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, a, r) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = a),
        (e.response = r),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0),
      r = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        n,
        i,
        o = {};
      return e
        ? (a.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = a.trim(e.substr(0, i)).toLowerCase()),
              (n = a.trim(e.substr(i + 1))),
              t)
            ) {
              if (o[t] && r.indexOf(t) >= 0) return;
              o[t] =
                "set-cookie" === t
                  ? (o[t] ? o[t] : []).concat([n])
                  : o[t]
                  ? o[t] + ", " + n
                  : n;
            }
          }),
          o)
        : o;
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = a.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function r(e) {
            var a = e;
            return (
              t && (n.setAttribute("href", a), (a = n.href)),
              n.setAttribute("href", a),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = r(window.location.href)),
            function (t) {
              var n = a.isString(t) ? r(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = a.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, r, i, o) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              a.isString(r) && s.push("path=" + r),
              a.isString(i) && s.push("domain=" + i),
              !0 === o && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, n) {
    "use strict";
    var a = n(8);
    function r(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new a(e)), t(n.reason));
      });
    }
    (r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (r.source = function () {
        var e;
        return {
          token: new r(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, n) {
    (function (t) {
      var n,
        a,
        r,
        i,
        o = (function (e) {
          var t = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            a = {
              manual: e.Prism && e.Prism.manual,
              disableWorkerMessageHandler:
                e.Prism && e.Prism.disableWorkerMessageHandler,
              util: {
                encode: function (e) {
                  return e instanceof r
                    ? new r(e.type, a.util.encode(e.content), e.alias)
                    : Array.isArray(e)
                    ? e.map(a.util.encode)
                    : e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var r,
                    i,
                    o = a.util.type(t);
                  switch (((n = n || {}), o)) {
                    case "Object":
                      if (((i = a.util.objId(t)), n[i])) return n[i];
                      for (var s in ((r = {}), (n[i] = r), t))
                        t.hasOwnProperty(s) && (r[s] = e(t[s], n));
                      return r;
                    case "Array":
                      return (
                        (i = a.util.objId(t)),
                        n[i]
                          ? n[i]
                          : ((r = []),
                            (n[i] = r),
                            t.forEach(function (t, a) {
                              r[a] = e(t, n);
                            }),
                            r)
                      );
                    default:
                      return t;
                  }
                },
              },
              languages: {
                extend: function (e, t) {
                  var n = a.util.clone(a.languages[e]);
                  for (var r in t) n[r] = t[r];
                  return n;
                },
                insertBefore: function (e, t, n, r) {
                  var i = (r = r || a.languages)[e],
                    o = {};
                  for (var s in i)
                    if (i.hasOwnProperty(s)) {
                      if (s == t)
                        for (var l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
                      n.hasOwnProperty(s) || (o[s] = i[s]);
                    }
                  var u = r[e];
                  return (
                    (r[e] = o),
                    a.languages.DFS(a.languages, function (t, n) {
                      n === u && t != e && (this[t] = o);
                    }),
                    o
                  );
                },
                DFS: function e(t, n, r, i) {
                  i = i || {};
                  var o = a.util.objId;
                  for (var s in t)
                    if (t.hasOwnProperty(s)) {
                      n.call(t, s, t[s], r || s);
                      var l = t[s],
                        u = a.util.type(l);
                      "Object" !== u || i[o(l)]
                        ? "Array" !== u ||
                          i[o(l)] ||
                          ((i[o(l)] = !0), e(l, n, s, i))
                        : ((i[o(l)] = !0), e(l, n, null, i));
                    }
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                a.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var r = {
                  callback: n,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                a.hooks.run("before-highlightall", r);
                for (
                  var i, o = e.querySelectorAll(r.selector), s = 0;
                  (i = o[s++]);

                )
                  a.highlightElement(i, !0 === t, r.callback);
              },
              highlightElement: function (n, r, i) {
                for (var o, s = "none", l = n; l && !t.test(l.className); )
                  l = l.parentNode;
                l &&
                  ((s = (l.className.match(t) || [, "none"])[1].toLowerCase()),
                  (o = a.languages[s])),
                  (n.className =
                    n.className.replace(t, "").replace(/\s+/g, " ") +
                    " language-" +
                    s),
                  n.parentNode &&
                    ((l = n.parentNode),
                    /pre/i.test(l.nodeName) &&
                      (l.className =
                        l.className.replace(t, "").replace(/\s+/g, " ") +
                        " language-" +
                        s));
                var u = {
                    element: n,
                    language: s,
                    grammar: o,
                    code: n.textContent,
                  },
                  c = function (e) {
                    (u.highlightedCode = e),
                      a.hooks.run("before-insert", u),
                      (u.element.innerHTML = u.highlightedCode),
                      a.hooks.run("after-highlight", u),
                      a.hooks.run("complete", u),
                      i && i.call(u.element);
                  };
                if ((a.hooks.run("before-sanity-check", u), u.code))
                  if ((a.hooks.run("before-highlight", u), u.grammar))
                    if (r && e.Worker) {
                      var p = new Worker(a.filename);
                      (p.onmessage = function (e) {
                        c(e.data);
                      }),
                        p.postMessage(
                          JSON.stringify({
                            language: u.language,
                            code: u.code,
                            immediateClose: !0,
                          })
                        );
                    } else c(a.highlight(u.code, u.grammar, u.language));
                  else c(a.util.encode(u.code));
                else a.hooks.run("complete", u);
              },
              highlight: function (e, t, n) {
                var i = { code: e, grammar: t, language: n };
                return (
                  a.hooks.run("before-tokenize", i),
                  (i.tokens = a.tokenize(i.code, i.grammar)),
                  a.hooks.run("after-tokenize", i),
                  r.stringify(a.util.encode(i.tokens), i.language)
                );
              },
              matchGrammar: function (e, t, n, i, o, s, l) {
                for (var u in n)
                  if (n.hasOwnProperty(u) && n[u]) {
                    var c = n[u];
                    c = Array.isArray(c) ? c : [c];
                    for (var p = 0; p < c.length; ++p) {
                      if (l && l == u + "," + p) return;
                      var d = c[p],
                        g = d.inside,
                        f = !!d.lookbehind,
                        h = !!d.greedy,
                        m = 0,
                        b = d.alias;
                      if (h && !d.pattern.global) {
                        var y = d.pattern.toString().match(/[imuy]*$/)[0];
                        d.pattern = RegExp(d.pattern.source, y + "g");
                      }
                      d = d.pattern || d;
                      for (
                        var E = i, w = o;
                        E < t.length;
                        w += t[E].length, ++E
                      ) {
                        var v = t[E];
                        if (t.length > e.length) return;
                        if (!(v instanceof r)) {
                          if (h && E != t.length - 1) {
                            if (((d.lastIndex = w), !(x = d.exec(e)))) break;
                            for (
                              var k = x.index + (f && x[1] ? x[1].length : 0),
                                S = x.index + x[0].length,
                                A = E,
                                T = w,
                                N = t.length;
                              A < N &&
                              (T < S || (!t[A].type && !t[A - 1].greedy));
                              ++A
                            )
                              (T += t[A].length) <= k && (++E, (w = T));
                            if (t[E] instanceof r) continue;
                            (R = A - E), (v = e.slice(w, T)), (x.index -= w);
                          } else {
                            d.lastIndex = 0;
                            var x = d.exec(v),
                              R = 1;
                          }
                          if (x) {
                            f && (m = x[1] ? x[1].length : 0),
                              (S =
                                (k = x.index + m) + (x = x[0].slice(m)).length);
                            var O = v.slice(0, k),
                              I = v.slice(S),
                              L = [E, R];
                            O && (++E, (w += O.length), L.push(O));
                            var _ = new r(u, g ? a.tokenize(x, g) : x, b, x, h);
                            if (
                              (L.push(_),
                              I && L.push(I),
                              Array.prototype.splice.apply(t, L),
                              1 != R &&
                                a.matchGrammar(e, t, n, E, w, !0, u + "," + p),
                              s)
                            )
                              break;
                          } else if (s) break;
                        }
                      }
                    }
                  }
              },
              tokenize: function (e, t) {
                var n = [e],
                  r = t.rest;
                if (r) {
                  for (var i in r) t[i] = r[i];
                  delete t.rest;
                }
                return a.matchGrammar(e, n, t, 0, 0, !1), n;
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = a.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = a.hooks.all[e];
                  if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
                },
              },
              Token: r,
            };
          function r(e, t, n, a, r) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (a || "").length),
              (this.greedy = !!r);
          }
          if (
            ((e.Prism = a),
            (r.stringify = function (e, t) {
              if ("string" == typeof e) return e;
              if (Array.isArray(e))
                return e
                  .map(function (e) {
                    return r.stringify(e, t);
                  })
                  .join("");
              var n = {
                type: e.type,
                content: r.stringify(e.content, t),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t,
              };
              if (e.alias) {
                var i = Array.isArray(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(n.classes, i);
              }
              a.hooks.run("wrap", n);
              var o = Object.keys(n.attributes)
                .map(function (e) {
                  return (
                    e +
                    '="' +
                    (n.attributes[e] || "").replace(/"/g, "&quot;") +
                    '"'
                  );
                })
                .join(" ");
              return (
                "<" +
                n.tag +
                ' class="' +
                n.classes.join(" ") +
                '"' +
                (o ? " " + o : "") +
                ">" +
                n.content +
                "</" +
                n.tag +
                ">"
              );
            }),
            !e.document)
          )
            return (
              e.addEventListener &&
                (a.disableWorkerMessageHandler ||
                  e.addEventListener(
                    "message",
                    function (t) {
                      var n = JSON.parse(t.data),
                        r = n.language,
                        i = n.code,
                        o = n.immediateClose;
                      e.postMessage(a.highlight(i, a.languages[r], r)),
                        o && e.close();
                    },
                    !1
                  )),
              a
            );
          var i =
            document.currentScript ||
            [].slice.call(document.getElementsByTagName("script")).pop();
          return (
            i &&
              ((a.filename = i.src),
              a.manual ||
                i.hasAttribute("data-manual") ||
                ("loading" !== document.readyState
                  ? window.requestAnimationFrame
                    ? window.requestAnimationFrame(a.highlightAll)
                    : window.setTimeout(a.highlightAll, 16)
                  : document.addEventListener(
                      "DOMContentLoaded",
                      a.highlightAll
                    ))),
            a
          );
        })(
          "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {}
        );
      e.exports && (e.exports = o),
        void 0 !== t && (t.Prism = o),
        (o.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: /<!DOCTYPE[\s\S]+?>/i,
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                  punctuation: [
                    /^=/,
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                  ],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: /&#?[\da-z]{1,8};/i,
        }),
        (o.languages.markup.tag.inside["attr-value"].inside.entity =
          o.languages.markup.entity),
        o.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(o.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: o.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var a = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a["language-" + t] = { pattern: /[\s\S]+/, inside: o.languages[t] };
            var r = {};
            (r[e] = {
              pattern: RegExp(
                "(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(
                  /__/g,
                  e
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              o.languages.insertBefore("markup", "cdata", r);
          },
        }),
        (o.languages.xml = o.languages.extend("markup", {})),
        (o.languages.html = o.languages.markup),
        (o.languages.mathml = o.languages.markup),
        (o.languages.svg = o.languages.markup),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
              inside: { rule: /@[\w-]+/ },
            },
            url: {
              pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
              inside: { function: /^url/i, punctuation: /^\(|\)$/ },
            },
            selector: RegExp(
              "[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"
            ),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    "attr-name": {
                      pattern: /^\s*style/i,
                      inside: n.tag.inside,
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: e.languages.css },
                  },
                  alias: "language-css",
                },
              },
              n.tag
            ));
        })(o),
        (o.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (o.languages.javascript = o.languages.extend("clike", {
          "class-name": [
            o.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (o.languages.javascript[
          "class-name"
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        o.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          "function-variable": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: o.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: o.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: o.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: o.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        o.languages.insertBefore("javascript", "string", {
          "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\${|}$/,
                    alias: "punctuation",
                  },
                  rest: o.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        o.languages.markup &&
          o.languages.markup.tag.addInlined("script", "javascript"),
        (o.languages.js = o.languages.javascript),
        (o.languages.c = o.languages.extend("clike", {
          "class-name": {
            pattern: /(\b(?:enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*\/%&|^!=<>]=?/,
          number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        o.languages.insertBefore("c", "string", {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
              string: {
                pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                lookbehind: !0,
              },
              directive: {
                pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete o.languages.c.boolean,
        (o.languages.csharp = o.languages.extend("clike", {
          keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
          string: [
            { pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 },
          ],
          "class-name": [
            {
              pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
              inside: { punctuation: /\./ },
            },
            {
              pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            {
              pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            {
              pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          ],
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
          operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*\/%&|^!=<>]=?/,
          punctuation: /\?\.?|::|[{}[\];(),.:]/,
        })),
        o.languages.insertBefore("csharp", "class-name", {
          "generic-method": {
            pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
            inside: {
              function: /^\w+/,
              "class-name": {
                pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
                inside: { punctuation: /\./ },
              },
              keyword: o.languages.csharp.keyword,
              punctuation: /[<>(),.:]/,
            },
          },
          preprocessor: {
            pattern: /(^\s*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
              directive: {
                pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
        }),
        (o.languages.dotnet = o.languages.cs = o.languages.csharp),
        (n = /%%?[~:\w]+%?|!\S+!/),
        (a = {
          pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
          alias: "attr-name",
          inside: { punctuation: /:/ },
        }),
        (r = /"[^"]*"/),
        (i = /(?:\b|-)\d+\b/),
        (o.languages.batch = {
          comment: [
            /^::.*/m,
            {
              pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
            },
          ],
          label: { pattern: /^:.*/m, alias: "property" },
          command: [
            {
              pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
              lookbehind: !0,
              inside: {
                keyword: /^for\b|\b(?:in|do)\b/i,
                string: r,
                parameter: a,
                variable: n,
                number: i,
                punctuation: /[()',]/,
              },
            },
            {
              pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
              lookbehind: !0,
              inside: {
                keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                string: r,
                parameter: a,
                variable: n,
                number: i,
                operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i,
              },
            },
            {
              pattern: /((?:^|[&()])[ \t]*)else\b/im,
              lookbehind: !0,
              inside: { keyword: /^else\b/i },
            },
            {
              pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              inside: {
                keyword: /^set\b/i,
                string: r,
                parameter: a,
                variable: [n, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                number: i,
                operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                punctuation: /[()',]/,
              },
            },
            {
              pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              inside: {
                keyword: /^\w+\b/i,
                string: r,
                parameter: a,
                label: {
                  pattern: /(^\s*):\S+/m,
                  lookbehind: !0,
                  alias: "property",
                },
                variable: n,
                number: i,
                operator: /\^/,
              },
            },
          ],
          operator: /[&@]/,
          punctuation: /[()']/,
        }),
        (o.languages.aspnet = o.languages.extend("markup", {
          "page-directive tag": {
            pattern: /<%\s*@.*%>/i,
            inside: {
              "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
              rest: o.languages.markup.tag.inside,
            },
          },
          "directive tag": {
            pattern: /<%.*%>/i,
            inside: {
              "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
              rest: o.languages.csharp,
            },
          },
        })),
        (o.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
        o.languages.insertBefore(
          "inside",
          "punctuation",
          { "directive tag": o.languages.aspnet["directive tag"] },
          o.languages.aspnet.tag.inside["attr-value"]
        ),
        o.languages.insertBefore("aspnet", "comment", {
          "asp comment": /<%--[\s\S]*?--%>/,
        }),
        o.languages.insertBefore(
          "aspnet",
          o.languages.javascript ? "script" : "tag",
          {
            "asp script": {
              pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
              lookbehind: !0,
              inside: o.languages.csharp || {},
            },
          }
        ),
        (o.languages.css.selector = {
          pattern: o.languages.css.selector,
          inside: {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                "case-sensitivity": {
                  pattern: /(\s)[si]$/i,
                  lookbehind: !0,
                  alias: "keyword",
                },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                attribute: {
                  pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                  lookbehind: !0,
                },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  {
                    pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                    lookbehind: !0,
                  },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            "n-th": [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            punctuation: /[()]/,
          },
        }),
        o.languages.insertBefore("css", "property", {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        o.languages.insertBefore("css", "function", {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: { pattern: /(^|[^\w.-])-?\d*\.?\d+/, lookbehind: !0 },
        }),
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, a, r, i) {
                if (n.language === a) {
                  var o = (n.tokenStack = []);
                  (n.code = n.code.replace(r, function (e) {
                    if ("function" == typeof i && !i(e)) return e;
                    for (
                      var r, s = o.length;
                      -1 !== n.code.indexOf((r = t(a, s)));

                    )
                      ++s;
                    return (o[s] = e), r;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, a) {
                if (n.language === a && n.tokenStack) {
                  n.grammar = e.languages[a];
                  var r = 0,
                    i = Object.keys(n.tokenStack);
                  !(function o(s) {
                    for (var l = 0; l < s.length && !(r >= i.length); l++) {
                      var u = s[l];
                      if (
                        "string" == typeof u ||
                        (u.content && "string" == typeof u.content)
                      ) {
                        var c = i[r],
                          p = n.tokenStack[c],
                          d = "string" == typeof u ? u : u.content,
                          g = t(a, c),
                          f = d.indexOf(g);
                        if (-1 < f) {
                          ++r;
                          var h = d.substring(0, f),
                            m = new e.Token(
                              a,
                              e.tokenize(p, n.grammar),
                              "language-" + a,
                              p
                            ),
                            b = d.substring(f + g.length),
                            y = [];
                          h && y.push.apply(y, o([h])),
                            y.push(m),
                            b && y.push.apply(y, o([b])),
                            "string" == typeof u
                              ? s.splice.apply(s, [l, 1].concat(y))
                              : (u.content = y);
                        }
                      } else u.content && o(u.content);
                    }
                    return s;
                  })(n.tokens);
                }
              },
            },
          });
        })(o),
        (o.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-â€“].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (o.languages.go = o.languages.extend("clike", {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete o.languages.go["class-name"],
        (o.languages.less = o.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        o.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (function (e) {
          var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend("clike", {
            "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
            ],
            number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*\/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("java", "class-name", {
              annotation: {
                alias: "punctuation",
                pattern: /(^|[^.])@\w+/,
                lookbehind: !0,
              },
              namespace: {
                pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              generics: {
                pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  "class-name": n,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
            });
        })(o),
        (function (e) {
          (e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("php", "string", {
              "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment",
              },
            }),
            e.languages.insertBefore("php", "comment", {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important",
              },
            }),
            e.languages.insertBefore("php", "keyword", {
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            e.languages.insertBefore("php", "operator", {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php },
          };
          e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            "heredoc-string": {
              pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: t,
              },
            },
            "single-quoted-string": {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: "string",
            },
            "double-quoted-string": {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: t },
            },
          }),
            delete e.languages.php.string,
            e.hooks.add("before-tokenize", function (t) {
              /<\?/.test(t.code) &&
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "php",
                  /<\?(?:[^"'\/#]|\/(?![*\/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
                );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(t, "php");
            });
        })(o),
        (function (e) {
          function t(e, t) {
            return (
              (e = e.replace(
                /<inner>/g,
                "(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"
              )),
              t && (e = e + "|" + e.replace(/_/g, "\\*")),
              RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")")
            );
          }
          var n = "(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+",
            a = "\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g, n),
            r =
              "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + r + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + r + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(n),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + r + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(n),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                  lookbehind: !0,
                  alias: "keyword",
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: t("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: t("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: t("(~~?)(?:(?!~)<inner>)+?\\2", !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: t(
                  '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',
                  !1
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike"].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, a = t.length; n < a; n++) {
                      var r = t[n];
                      if ("code" === r.type) {
                        var i = r.content[1],
                          o = r.content[3];
                        if (
                          i &&
                          o &&
                          "code-language" === i.type &&
                          "code-block" === o.type &&
                          "string" == typeof i.content
                        ) {
                          var s =
                            "language-" +
                            i.content.trim().split(/\s+/)[0].toLowerCase();
                          o.alias
                            ? "string" == typeof o.alias
                              ? (o.alias = [o.alias, s])
                              : o.alias.push(s)
                            : (o.alias = [s]);
                        }
                      } else e(r.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", a = 0, r = t.classes.length; a < r; a++) {
                  var i = t.classes[a],
                    o = /language-(.+)/.exec(i);
                  if (o) {
                    n = o[1];
                    break;
                  }
                }
                var s = e.languages[n];
                if (s) {
                  var l = t.content
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&");
                  t.content = e.highlight(l, s, n);
                } else if (n && "none" !== n && e.plugins.autoloader) {
                  var u =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(o),
        (o.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (o.languages.typescript = o.languages.extend("javascript", {
          keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (o.languages.ts = o.languages.typescript),
        (o.languages.objectivec = o.languages.extend("c", {
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete o.languages.objectivec["class-name"],
        o.languages.insertBefore("php", "variable", {
          this: /\$this\b/,
          global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
          scope: {
            pattern: /\b[\w\\]+::/,
            inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
          },
        }),
        (o.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (o.languages.scss = o.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        o.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        o.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        o.languages.insertBefore("scss", "function", {
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (o.languages.scss.atrule.inside.rest = o.languages.scss),
        (o.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (o.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = o.languages.python),
        (o.languages.py = o.languages.python),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              "attr-value"
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside[
              "class-name"
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                  alias: "language-javascript",
                },
              },
              e.languages.jsx.tag
            );
          var n = function e(t) {
            return t
              ? "string" == typeof t
                ? t
                : "string" == typeof t.content
                ? t.content
                : t.content.map(e).join("")
              : "";
          };
          e.hooks.add("after-tokenize", function (t) {
            ("jsx" !== t.language && "tsx" !== t.language) ||
              (function t(a) {
                for (var r = [], i = 0; i < a.length; i++) {
                  var o = a[i],
                    s = !1;
                  if (
                    ("string" != typeof o &&
                      ("tag" === o.type &&
                      o.content[0] &&
                      "tag" === o.content[0].type
                        ? "</" === o.content[0].content[0].content
                          ? 0 < r.length &&
                            r[r.length - 1].tagName ===
                              n(o.content[0].content[1]) &&
                            r.pop()
                          : "/>" === o.content[o.content.length - 1].content ||
                            r.push({
                              tagName: n(o.content[0].content[1]),
                              openedBraces: 0,
                            })
                        : 0 < r.length &&
                          "punctuation" === o.type &&
                          "{" === o.content
                        ? r[r.length - 1].openedBraces++
                        : 0 < r.length &&
                          0 < r[r.length - 1].openedBraces &&
                          "punctuation" === o.type &&
                          "}" === o.content
                        ? r[r.length - 1].openedBraces--
                        : (s = !0)),
                    (s || "string" == typeof o) &&
                      0 < r.length &&
                      0 === r[r.length - 1].openedBraces)
                  ) {
                    var l = n(o);
                    i < a.length - 1 &&
                      ("string" == typeof a[i + 1] ||
                        "plain-text" === a[i + 1].type) &&
                      ((l += n(a[i + 1])), a.splice(i + 1, 1)),
                      0 < i &&
                        ("string" == typeof a[i - 1] ||
                          "plain-text" === a[i - 1].type) &&
                        ((l = n(a[i - 1]) + l), a.splice(i - 1, 1), i--),
                      (a[i] = new e.Token("plain-text", l, null, l));
                  }
                  o.content && "string" != typeof o.content && t(o.content);
                }
              })(t.tokens);
          });
        })(o),
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(o),
        (o.languages.swift = o.languages.extend("clike", {
          string: {
            pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: {
                  delimiter: { pattern: /^\\\(|\)$/, alias: "variable" },
                },
              },
            },
          },
          keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
          number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
          builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/,
        })),
        (o.languages.swift.string.inside.interpolation.inside.rest =
          o.languages.swift);
    }.call(this, n(31)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    function n() {
      (window["ga-disable-" + gtagId] = !1), gtag("config", gtagId);
    }
    function a() {
      (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0;
    }
    function r() {
      (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    }
    window.addEventListener("load", function () {
      window.cookieconsent &&
        window.cookieconsent.initialise({
          onInitialise: function (e) {
            this.hasConsented("analytics") && n(),
              this.hasConsented("marketing") ? a() : r(),
              ((adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0);
          },
          onAllow: function (e) {
            "analytics" == e && n(), "marketing" == e && a();
          },
          onRevoke: function (e) {
            "analytics" == e && (window["ga-disable-" + gtagId] = !0),
              "marketing" == e && r();
          },
        });
    });
  },
  function (e, t) {},
]);

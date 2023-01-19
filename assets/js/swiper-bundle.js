/**
 * Swiper 6.5.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 31, 2021
 */

!(function (e, t) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
    ? define(t)
    : ((e = typeof globalThis !== 'undefined' ? globalThis : e || self).Swiper =
        t())
})(this, function () {
  'use strict'
  function e(e, t) {
    for (let a = 0; a < t.length; a++) {
      const i = t[a]
      ;(i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const a = arguments[t]
          for (const i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
        }
        return e
      }).apply(this, arguments)
  }
  function a(e) {
    return (
      e !== null &&
      typeof e === 'object' &&
      'constructor' in e &&
      e.constructor === Object
    )
  }
  function i(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (s) {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
      })
  }
  const s = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: { blur () {}, nodeName: '' },
    querySelector () {
      return null
    },
    querySelectorAll () {
      return []
    },
    getElementById () {
      return null
    },
    createEvent () {
      return { initEvent () {} }
    },
    createElement () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute () {},
        getElementsByTagName () {
          return []
        },
      }
    },
    createElementNS () {
      return {}
    },
    importNode () {
      return null
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  }
  function r() {
    const e = typeof document !== 'undefined' ? document : {}
    return i(e, s), e
  }
  const n = {
    document: s,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: {
      replaceState () {},
      pushState () {},
      go () {},
      back () {},
    },
    CustomEvent () {
      return this
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
      return {
        getPropertyValue () {
          return ''
        },
      }
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
      return {}
    },
    requestAnimationFrame (e) {
      return typeof setTimeout === 'undefined' ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame (e) {
      typeof setTimeout !== 'undefined' && clearTimeout(e)
    },
  }
  function l() {
    const e = typeof window !== 'undefined' ? window : {}
    return i(e, n), e
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e
      })(e, t)
  }
  function p() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return !1
    if (Reflect.construct.sham) return !1
    if (typeof Proxy === 'function') return !0
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      )
    } catch (e) {
      return !1
    }
  }
  function c(e, t, a) {
    return (c = p()
      ? Reflect.construct
      : function (e, t, a) {
          const i = [null]
          i.push.apply(i, t)
          const s = new (Function.bind.apply(e, i))()
          return a && d(s, a.prototype), s
        }).apply(null, arguments)
  }
  function u(e) {
    const t = typeof Map === 'function' ? new Map() : void 0
    return (u = function (e) {
      if (
        e === null ||
        ((a = e), !Function.toString.call(a).includes('[native code]'))
      )
        return e
      let a
      if (typeof e !== 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e)
        t.set(e, i)
      }
      function i() {
        return c(e, arguments, o(this).constructor)
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(i, e)
      )
    })(e)
  }
  const h = (function (e) {
    let t, a
    function i(t) {
      let a, i, s
      return (
        (a = e.call.apply(e, [this].concat(t)) || this),
        (i = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e
        })(a)),
        (s = i.__proto__),
        Object.defineProperty(i, '__proto__', {
          get () {
            return s
          },
          set (e) {
            s.__proto__ = e
          },
        }),
        a
      )
    }
    return (
      (a = e),
      ((t = i).prototype = Object.create(a.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = a),
      i
    )
  })(u(Array))
  function v(e) {
    void 0 === e && (e = [])
    const t = []
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e)
      }),
      t
    )
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t)
  }
  function m(e, t) {
    const a = l();
      const i = r();
      let s = []
    if (!t && e instanceof h) return e
    if (!e) return new h(s)
    if (typeof e === 'string') {
      const n = e.trim()
      if (n.includes('<') && n.includes('>')) {
        let o = 'div'
        n.indexOf('<li') === 0 && (o = 'ul'),
          n.indexOf('<tr') === 0 && (o = 'tbody'),
          (n.indexOf('<td') !== 0 && n.indexOf('<th') !== 0) || (o = 'tr'),
          n.indexOf('<tbody') === 0 && (o = 'table'),
          n.indexOf('<option') === 0 && (o = 'select')
        const d = i.createElement(o)
        d.innerHTML = n
        for (let p = 0; p < d.childNodes.length; p += 1) s.push(d.childNodes[p])
      } else
        s = (function (e, t) {
          if (typeof e !== 'string') return [e]
          for (
            var a = [], i = t.querySelectorAll(e), s = 0;
            s < i.length;
            s += 1
          )
            a.push(i[s])
          return a
        })(e.trim(), t || i)
    } else if (e.nodeType || e === a || e === i) s.push(e)
    else if (Array.isArray(e)) {
      if (e instanceof h) return e
      s = e
    }
    return new h(
      (function (e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          !t.includes(e[a]) && t.push(e[a])
        return t
      })(s)
    )
  }
  m.fn = h.prototype
  let g;
    let b;
    let w;
    const y = {
      addClass () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        const i = v(
          t.map(function (e) {
            return e.split(' ')
          })
        )
        return (
          this.forEach(function (e) {
            let t
            ;(t = e.classList).add.apply(t, i)
          }),
          this
        )
      },
      removeClass () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        const i = v(
          t.map(function (e) {
            return e.split(' ')
          })
        )
        return (
          this.forEach(function (e) {
            let t
            ;(t = e.classList).remove.apply(t, i)
          }),
          this
        )
      },
      hasClass () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        const i = v(
          t.map(function (e) {
            return e.split(' ')
          })
        )
        return (
          f(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t)
              }).length > 0
            )
          }).length > 0
        )
      },
      toggleClass () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        const i = v(
          t.map(function (e) {
            return e.split(' ')
          })
        )
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t)
          })
        })
      },
      attr (e, t) {
        if (arguments.length === 1 && typeof e === 'string')
          return this[0] ? this[0].getAttribute(e) : void 0
        for (let a = 0; a < this.length; a += 1)
          if (arguments.length === 2) this[a].setAttribute(e, t)
          else
            for (const i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i])
        return this
      },
      removeAttr (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e)
        return this
      },
      transform (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e
        return this
      },
      transition (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration = typeof e !== 'string' ? e + 'ms' : e
        return this
      },
      on () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        let i = t[0];
          let s = t[1];
          let r = t[2];
          let n = t[3]
        function l(e) {
          const t = e.target
          if (t) {
            const a = e.target.dom7EventData || []
            if ((!a.includes(e) && a.unshift(e), m(t).is(s))) r.apply(t, a)
            else
              for (let i = m(t).parents(), n = 0; n < i.length; n += 1)
                m(i[n]).is(s) && r.apply(i[n], a)
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || []
          !t.includes(e) && t.unshift(e), r.apply(this, t)
        }
        typeof t[1] === 'function' &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1)
        for (var d, p = i.split(' '), c = 0; c < this.length; c += 1) {
          const u = this[c]
          if (s)
            for (d = 0; d < p.length; d += 1) {
              const h = p[d]
              u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
                u.dom7LiveListeners[h].push({ listener: r, proxyListener: l }),
                u.addEventListener(h, l, n)
            }
          else
            for (d = 0; d < p.length; d += 1) {
              const v = p[d]
              u.dom7Listeners || (u.dom7Listeners = {}),
                u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                u.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                u.addEventListener(v, o, n)
            }
        }
        return this
      },
      off () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        let i = t[0];
          let s = t[1];
          let r = t[2];
          let n = t[3]
        typeof t[1] === 'function' &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1)
        for (let l = i.split(' '), o = 0; o < l.length; o += 1)
          for (let d = l[o], p = 0; p < this.length; p += 1) {
            const c = this[p];
              let u = void 0
            if (
              (!s && c.dom7Listeners
                ? (u = c.dom7Listeners[d])
                : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
              u && u.length)
            )
              for (let h = u.length - 1; h >= 0; h -= 1) {
                const v = u[h]
                ;(r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (c.removeEventListener(d, v.proxyListener, n),
                    u.splice(h, 1))
                  : r ||
                    (c.removeEventListener(d, v.proxyListener, n),
                    u.splice(h, 1))
              }
          }
        return this
      },
      trigger () {
        for (
          var e = l(), t = arguments.length, a = new Array(t), i = 0;
          i < t;
          i++
        )
          a[i] = arguments[i]
        for (let s = a[0].split(' '), r = a[1], n = 0; n < s.length; n += 1)
          for (let o = s[n], d = 0; d < this.length; d += 1) {
            const p = this[d]
            if (e.CustomEvent) {
              const c = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              })
              ;(p.dom7EventData = a.filter(function (e, t) {
                return t > 0
              })),
                p.dispatchEvent(c),
                (p.dom7EventData = []),
                delete p.dom7EventData
            }
          }
        return this
      },
      transitionEnd (e) {
        const t = this
        return (
          e &&
            t.on('transitionend', function a(i) {
              i.target === this && (e.call(this, i), t.off('transitionend', a))
            }),
          this
        )
      },
      outerWidth (e) {
        if (this.length > 0) {
          if (e) {
            const t = this.styles()
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            )
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight (e) {
        if (this.length > 0) {
          if (e) {
            const t = this.styles()
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            )
          }
          return this[0].offsetHeight
        }
        return null
      },
      styles () {
        const e = l()
        return this[0] ? e.getComputedStyle(this[0], null) : {}
      },
      offset () {
        if (this.length > 0) {
          const e = l();
            const t = r();
            const a = this[0];
            const i = a.getBoundingClientRect();
            const s = t.body;
            const n = a.clientTop || s.clientTop || 0;
            const o = a.clientLeft || s.clientLeft || 0;
            const d = a === e ? e.scrollY : a.scrollTop;
            const p = a === e ? e.scrollX : a.scrollLeft
          return { top: i.top + d - n, left: i.left + p - o }
        }
        return null
      },
      css (e, t) {
        let a;
          const i = l()
        if (arguments.length === 1) {
          if (typeof e !== 'string') {
            for (a = 0; a < this.length; a += 1)
              for (const s in e) this[a].style[s] = e[s]
            return this
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (arguments.length === 2 && typeof e === 'string') {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t
          return this
        }
        return this
      },
      each (e) {
        return e
          ? (this.forEach(function (t, a) {
              e.apply(t, [t, a])
            }),
            this)
          : this
      },
      html (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e
        return this
      },
      text (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e
        return this
      },
      is (e) {
        let t;
          let a;
          const i = l();
          const s = r();
          const n = this[0]
        if (!n || void 0 === e) return !1
        if (typeof e === 'string') {
          if (n.matches) return n.matches(e)
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e)
          if (n.msMatchesSelector) return n.msMatchesSelector(e)
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0
          return !1
        }
        if (e === s) return n === s
        if (e === i) return n === i
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
            if (t[a] === n) return !0
          return !1
        }
        return !1
      },
      index () {
        let e;
          let t = this[0]
        if (t) {
          for (e = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (e += 1)
          return e
        }
      },
      eq (e) {
        if (void 0 === e) return this
        const t = this.length
        if (e > t - 1) return m([])
        if (e < 0) {
          const a = t + e
          return m(a < 0 ? [] : [this[a]])
        }
        return m([this[e]])
      },
      append () {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a]
          for (let i = 0; i < this.length; i += 1)
            if (typeof e === 'string') {
              const s = t.createElement('div')
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild)
            } else if (e instanceof h)
              for (let n = 0; n < e.length; n += 1) this[i].appendChild(e[n])
            else this[i].appendChild(e)
        }
        return this
      },
      prepend (e) {
        let t;
          let a;
          const i = r()
        for (t = 0; t < this.length; t += 1)
          if (typeof e === 'string') {
            const s = i.createElement('div')
            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0])
          } else if (e instanceof h)
            for (a = 0; a < e.length; a += 1)
              this[t].insertBefore(e[a], this[t].childNodes[0])
          else this[t].insertBefore(e, this[t].childNodes[0])
        return this
      },
      next (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([])
      },
      nextAll (e) {
        const t = [];
          let a = this[0]
        if (!a) return m([])
        for (; a.nextElementSibling; ) {
          const i = a.nextElementSibling
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i)
        }
        return m(t)
      },
      prev (e) {
        if (this.length > 0) {
          const t = this[0]
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([])
        }
        return m([])
      },
      prevAll (e) {
        const t = [];
          let a = this[0]
        if (!a) return m([])
        for (; a.previousElementSibling; ) {
          const i = a.previousElementSibling
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i)
        }
        return m(t)
      },
      parent (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          this[a].parentNode !== null &&
            (e
              ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
              : t.push(this[a].parentNode))
        return m(t)
      },
      parents (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (let i = this[a].parentNode; i; )
            e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode)
        return m(t)
      },
      closest (e) {
        let t = this
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      },
      find (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (let i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
            t.push(i[s])
        return m(t)
      },
      children (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (let i = this[a].children, s = 0; s < i.length; s += 1)
            (e && !m(i[s]).is(e)) || t.push(i[s])
        return m(t)
      },
      filter (e) {
        return m(f(this, e))
      },
      remove () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e])
        return this
      },
    }
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t)
  }
  function x() {
    return Date.now()
  }
  function T(e, t) {
    void 0 === t && (t = 'x')
    let a;
      let i;
      let s;
      const r = l();
      const n = (function (e) {
        let t;
          const a = l()
        return (
          a.getComputedStyle && (t = a.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        )
      })(e)
    return (
      r.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform).split(',').length > 6 &&
            (i = i
              .split(', ')
              .map(function (e) {
                return e.replace(',', '.')
              })
              .join(', ')),
          (s = new r.WebKitCSSMatrix(i === 'none' ? '' : i)))
        : (a = (s =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,'))
            .toString()
            .split(',')),
      t === 'x' &&
        (i = r.WebKitCSSMatrix
          ? s.m41
          : a.length === 16
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      t === 'y' &&
        (i = r.WebKitCSSMatrix
          ? s.m42
          : a.length === 16
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    )
  }
  function S(e) {
    return (
      typeof e === 'object' &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === 'Object'
    )
  }
  function C() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ['__proto__', 'constructor', 'prototype'],
        a = 1;
      a < arguments.length;
      a += 1
    ) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a]
      if (i != null)
        for (
          let s = Object.keys(Object(i)).filter(function (e) {
              return !t.includes(e)
            }),
            r = 0,
            n = s.length;
          r < n;
          r += 1
        ) {
          const l = s[r];
            const o = Object.getOwnPropertyDescriptor(i, l)
          void 0 !== o &&
            o.enumerable &&
            (S(e[l]) && S(i[l])
              ? i[l].__swiper__
                ? (e[l] = i[l])
                : C(e[l], i[l])
              : !S(e[l]) && S(i[l])
              ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : C(e[l], i[l]))
              : (e[l] = i[l]))
        }
    }
    return e
  }
  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      S(t[a]) &&
        Object.keys(t[a]).forEach(function (i) {
          typeof t[a][i] === 'function' && (t[a][i] = t[a][i].bind(e))
        }),
        (e[a] = t[a])
    })
  }
  function z() {
    return (
      g ||
        (g = (function () {
          const e = l();
            const t = r()
          return {
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              'maxTouchPoints' in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: 'MutationObserver' in e || 'WebkitMutationObserver' in e,
            passiveListener: (function () {
              let t = !1
              try {
                const a = Object.defineProperty({}, 'passive', {
                  get () {
                    t = !0
                  },
                })
                e.addEventListener('testPassiveListener', null, a)
              } catch (e) {}
              return t
            })(),
            gestures: 'ongesturestart' in e,
          }
        })()),
      g
    )
  }
  function P(e) {
    return (
      void 0 === e && (e = {}),
      b ||
        (b = (function (e) {
          const t = (void 0 === e ? {} : e).userAgent;
            const a = z();
            const i = l();
            const s = i.navigator.platform;
            const r = t || i.navigator.userAgent;
            const n = { ios: !1, android: !1 };
            const o = i.screen.width;
            const d = i.screen.height;
            const p = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/);
            const h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const v = s === 'Win32';
            let f = s === 'MacIntel'
          return (
            !c &&
              f &&
              a.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].includes(o + 'x' + d) &&
              ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, '13_0_0']),
              (f = !1)),
            p && !v && ((n.os = 'android'), (n.android = !0)),
            (c || h || u) && ((n.os = 'ios'), (n.ios = !0)),
            n
          )
        })(e)),
      b
    )
  }
  function k() {
    return (
      w ||
        (w = (function () {
          let e;
            const t = l()
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.includes('safari') &&
                !e.includes('chrome') &&
                !e.includes('android')),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          }
        })()),
      w
    )
  }
  Object.keys(y).forEach(function (e) {
    m.fn[e] = y[e]
  })
  const L = {
      name: 'resize',
      create () {
        const e = this
        C(e, {
          resize: {
            observer: null,
            createObserver () {
              e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  const a = e.width;
                    const i = e.height;
                    let s = a;
                    let r = i
                  t.forEach(function (t) {
                    const a = t.contentBoxSize;
                      const i = t.contentRect;
                      const n = t.target
                    ;(n && n !== e.el) ||
                      ((s = i ? i.width : (a[0] || a).inlineSize),
                      (r = i ? i.height : (a[0] || a).blockSize))
                  }),
                    (s === a && r === i) || e.resize.resizeHandler()
                })),
                e.resize.observer.observe(e.el))
            },
            removeObserver () {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null))
            },
            resizeHandler () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit('beforeResize'), e.emit('resize'))
            },
            orientationChangeHandler () {
              e && !e.destroyed && e.initialized && e.emit('orientationchange')
            },
          },
        })
      },
      on: {
        init (e) {
          const t = l()
          e.params.resizeObserver && void 0 !== l().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener('resize', e.resize.resizeHandler),
              t.addEventListener(
                'orientationchange',
                e.resize.orientationChangeHandler
              ))
        },
        destroy (e) {
          const t = l()
          e.resize.removeObserver(),
            t.removeEventListener('resize', e.resize.resizeHandler),
            t.removeEventListener(
              'orientationchange',
              e.resize.orientationChangeHandler
            )
        },
      },
    };
    const $ = {
      attach (e, t) {
        void 0 === t && (t = {})
        const a = l();
          const i = this;
          const s = new (a.MutationObserver || a.WebkitMutationObserver)(function (
            e
          ) {
            if (e.length !== 1) {
              const t = function () {
                i.emit('observerUpdate', e[0])
              }
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0)
            } else i.emit('observerUpdate', e[0])
          })
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s)
      },
      init () {
        const e = this
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (let t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a])
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 })
        }
      },
      destroy () {
        this.observer.observers.forEach(function (e) {
          e.disconnect()
        }),
          (this.observer.observers = [])
      },
    };
    const I = {
      name: 'observer',
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create () {
        M(this, { observer: t({}, $, { observers: [] }) })
      },
      on: {
        init (e) {
          e.observer.init()
        },
        destroy (e) {
          e.observer.destroy()
        },
      },
    }
  function O(e) {
    const t = this;
      const a = r();
      const i = l();
      const s = t.touchEventsData;
      const n = t.params;
      const o = t.touches
    if (!t.animating || !n.preventInteractionOnTransition) {
      let d = e
      d.originalEvent && (d = d.originalEvent)
      let p = m(d.target)
      if (n.touchEventsTarget !== 'wrapper' || p.closest(t.wrapperEl).length)
        if (
          ((s.isTouchEvent = d.type === 'touchstart'),
          s.isTouchEvent || !('which' in d) || d.which !== 3)
        )
          if (!(!s.isTouchEvent && 'button' in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                (!!n.noSwipingClass &&
                  n.noSwipingClass !== '' &&
                  d.target &&
                  d.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (p = m(e.path[0])),
                n.noSwiping &&
                  p.closest(
                    n.noSwipingSelector
                      ? n.noSwipingSelector
                      : '.' + n.noSwipingClass
                  )[0])
              )
                t.allowClick = !0
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                ;(o.currentX =
                  d.type === 'touchstart' ? d.targetTouches[0].pageX : d.pageX),
                  (o.currentY =
                    d.type === 'touchstart'
                      ? d.targetTouches[0].pageY
                      : d.pageY)
                const c = o.currentX;
                  const u = o.currentY;
                  const h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection;
                  const v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold
                if (h && (c <= v || c >= i.innerWidth - v)) {
                  if (h !== 'prevent') return
                  e.preventDefault()
                }
                if (
                  (C(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = c),
                  (o.startY = u),
                  (s.touchStartTime = x()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  n.threshold > 0 && (s.allowThresholdMove = !1),
                  d.type !== 'touchstart')
                ) {
                  let f = !0
                  p.is(s.formElements) && (f = !1),
                    a.activeElement &&
                      m(a.activeElement).is(s.formElements) &&
                      a.activeElement !== p[0] &&
                      a.activeElement.blur()
                  const g = f && t.allowTouchMove && n.touchStartPreventDefault
                  ;(!n.touchStartForcePreventDefault && !g) ||
                    p[0].isContentEditable ||
                    d.preventDefault()
                }
                t.emit('touchStart', d)
              }
    }
  }
  function A(e) {
    const t = r();
      const a = this;
      const i = a.touchEventsData;
      const s = a.params;
      const n = a.touches;
      const l = a.rtlTranslate;
      let o = e
    if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || o.type === 'touchmove') {
        const d =
            o.type === 'touchmove' &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]);
          const p = o.type === 'touchmove' ? d.pageX : o.pageX;
          const c = o.type === 'touchmove' ? d.pageY : o.pageY
        if (o.preventedByNestedSwiper)
          return (n.startX = p), void (n.startY = c)
        if (!a.allowTouchMove)
          return (
            (a.allowClick = !1),
            void (
              i.isTouched &&
              (C(n, { startX: p, startY: c, currentX: p, currentY: c }),
              (i.touchStartTime = x()))
            )
          )
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (
              (c < n.startY && a.translate <= a.maxTranslate()) ||
              (c > n.startY && a.translate >= a.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1)
          } else if (
            (p < n.startX && a.translate <= a.maxTranslate()) ||
            (p > n.startX && a.translate >= a.minTranslate())
          )
            return
        if (
          i.isTouchEvent &&
          t.activeElement &&
          o.target === t.activeElement &&
          m(o.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (a.allowClick = !1)
        if (
          (i.allowTouchCallbacks && a.emit('touchMove', o),
          !(o.targetTouches && o.targetTouches.length > 1))
        ) {
          ;(n.currentX = p), (n.currentY = c)
          const u = n.currentX - n.startX;
            const h = n.currentY - n.startY
          if (
            !(
              a.params.threshold &&
              Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2)) < a.params.threshold
            )
          ) {
            let v
            if (void 0 === i.isScrolling)
              (a.isHorizontal() && n.currentY === n.startY) ||
              (a.isVertical() && n.currentX === n.startX)
                ? (i.isScrolling = !1)
                : u * u + h * h >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
                  (i.isScrolling = a.isHorizontal()
                    ? v > s.touchAngle
                    : 90 - v > s.touchAngle))
            if (
              (i.isScrolling && a.emit('touchMoveOpposite', o),
              void 0 === i.startMoving &&
                ((n.currentX === n.startX && n.currentY === n.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1
            else if (i.startMoving) {
              ;(a.allowClick = !1),
                !s.cssMode && o.cancelable && o.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                i.isMoved ||
                  (s.loop && a.loopFix(),
                  (i.startTranslate = a.getTranslate()),
                  a.setTransition(0),
                  a.animating &&
                    a.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                    a.setGrabCursor(!0),
                  a.emit('sliderFirstMove', o)),
                a.emit('sliderMove', o),
                (i.isMoved = !0)
              let f = a.isHorizontal() ? u : h
              ;(n.diff = f),
                (f *= s.touchRatio),
                l && (f = -f),
                (a.swipeDirection = f > 0 ? 'prev' : 'next'),
                (i.currentTranslate = f + i.startTranslate)
              let g = !0;
                let b = s.resistanceRatio
              if (
                (s.touchReleaseOnEdges && (b = 0),
                f > 0 && i.currentTranslate > a.minTranslate()
                  ? ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.minTranslate() -
                        1 +
                        Math.pow(-a.minTranslate() + i.startTranslate + f, b)))
                  : f < 0 &&
                    i.currentTranslate < a.maxTranslate() &&
                    ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.maxTranslate() +
                        1 -
                        Math.pow(a.maxTranslate() - i.startTranslate - f, b))),
                g && (o.preventedByNestedSwiper = !0),
                !a.allowSlideNext &&
                  a.swipeDirection === 'next' &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !a.allowSlidePrev &&
                  a.swipeDirection === 'prev' &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                a.allowSlidePrev ||
                  a.allowSlideNext ||
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate)
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (n.startX = n.currentX),
                    (n.startY = n.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (n.diff = a.isHorizontal()
                      ? n.currentX - n.startX
                      : n.currentY - n.startY)
                  )
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (a.updateActiveIndex(), a.updateSlidesClasses()),
                s.freeMode &&
                  (i.velocities.length === 0 &&
                    i.velocities.push({
                      position: n[a.isHorizontal() ? 'startX' : 'startY'],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: n[a.isHorizontal() ? 'currentX' : 'currentY'],
                    time: x(),
                  })),
                a.updateProgress(i.currentTranslate),
                a.setTranslate(i.currentTranslate))
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && a.emit('touchMoveOpposite', o)
  }
  function D(e) {
    const t = this;
      const a = t.touchEventsData;
      const i = t.params;
      const s = t.touches;
      const r = t.rtlTranslate;
      const n = t.$wrapperEl;
      const l = t.slidesGrid;
      const o = t.snapGrid;
      let d = e
    if (
      (d.originalEvent && (d = d.originalEvent),
      a.allowTouchCallbacks && t.emit('touchEnd', d),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    )
      return (
        a.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (a.isMoved = !1),
        void (a.startMoving = !1)
      )
    i.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1)
    let p;
      const c = x();
      const u = c - a.touchStartTime
    if (
      (t.allowClick &&
        (t.updateClickedSlide(d),
        t.emit('tap click', d),
        u < 300 &&
          c - a.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', d)),
      (a.lastClickTime = x()),
      E(function () {
        t.destroyed || (t.allowClick = !0)
      }),
      !a.isTouched ||
        !a.isMoved ||
        !t.swipeDirection ||
        s.diff === 0 ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
    if (
      ((a.isTouched = !1),
      (a.isMoved = !1),
      (a.startMoving = !1),
      (p = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -a.currentTranslate),
      !i.cssMode)
    )
      if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex)
        if (p > -t.maxTranslate())
          return void (t.slides.length < o.length
            ? t.slideTo(o.length - 1)
            : t.slideTo(t.slides.length - 1))
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            const h = a.velocities.pop();
              const v = a.velocities.pop();
              const f = h.position - v.position;
              const m = h.time - v.time
            ;(t.velocity = f / m),
              (t.velocity /= 2),
              Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (m > 150 || x() - h.time > 300) && (t.velocity = 0)
          } else t.velocity = 0
          ;(t.velocity *= i.freeModeMomentumVelocityRatio),
            (a.velocities.length = 0)
          let g = 1e3 * i.freeModeMomentumRatio;
            const b = t.velocity * g;
            let w = t.translate + b
          r && (w = -w)
          let y;
            let T;
            let S = !1;
            const C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio
          if (w < t.maxTranslate())
            i.freeModeMomentumBounce
              ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C),
                (y = t.maxTranslate()),
                (S = !0),
                (a.allowMomentumBounce = !0))
              : (w = t.maxTranslate()),
              i.loop && i.centeredSlides && (T = !0)
          else if (w > t.minTranslate())
            i.freeModeMomentumBounce
              ? (w - t.minTranslate() > C && (w = t.minTranslate() + C),
                (y = t.minTranslate()),
                (S = !0),
                (a.allowMomentumBounce = !0))
              : (w = t.minTranslate()),
              i.loop && i.centeredSlides && (T = !0)
          else if (i.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1)
              if (o[z] > -w) {
                M = z
                break
              }
            w = -(w =
              Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) ||
              t.swipeDirection === 'next'
                ? o[M]
                : o[M - 1])
          }
          if (
            (T &&
              t.once('transitionEnd', function () {
                t.loopFix()
              }),
            t.velocity !== 0)
          ) {
            if (
              ((g = r
                ? Math.abs((-w - t.translate) / t.velocity)
                : Math.abs((w - t.translate) / t.velocity)),
              i.freeModeSticky)
            ) {
              const P = Math.abs((r ? -w : w) - t.translate);
                const k = t.slidesSizesGrid[t.activeIndex]
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed
            }
          } else if (i.freeModeSticky) return void t.slideToClosest()
          i.freeModeMomentumBounce && S
            ? (t.updateProgress(y),
              t.setTransition(g),
              t.setTranslate(w),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  a.allowMomentumBounce &&
                  (t.emit('momentumBounce'),
                  t.setTransition(i.speed),
                  setTimeout(function () {
                    t.setTranslate(y),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                      })
                  }, 0))
              }))
            : t.velocity
            ? (t.updateProgress(w),
              t.setTransition(g),
              t.setTranslate(w),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd()
                })))
            : (t.emit('_freeModeNoMomentumRelease'), t.updateProgress(w)),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        } else {
          if (i.freeModeSticky) return void t.slideToClosest()
          i.freeMode && t.emit('_freeModeNoMomentumRelease')
        }
        ;(!i.freeModeMomentum || u >= i.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
      } else {
        for (
          var L = 0, $ = t.slidesSizesGrid[0], I = 0;
          I < l.length;
          I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
          void 0 !== l[I + O]
            ? p >= l[I] && p < l[I + O] && ((L = I), ($ = l[I + O] - l[I]))
            : p >= l[I] && ((L = I), ($ = l[l.length - 1] - l[l.length - 2]))
        }
        const A = (p - l[L]) / $;
          const D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex)
          t.swipeDirection === 'next' &&
            (A >= i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)),
            t.swipeDirection === 'prev' &&
              (A > 1 - i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex)
          t.navigation &&
          (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
            ? d.target === t.navigation.nextEl
              ? t.slideTo(L + D)
              : t.slideTo(L)
            : (t.swipeDirection === 'next' && t.slideTo(L + D),
              t.swipeDirection === 'prev' && t.slideTo(L))
        }
      }
  }
  function N() {
    const e = this;
      const t = e.params;
      const a = e.el
    if (!a || a.offsetWidth !== 0) {
      t.breakpoints && e.setBreakpoint()
      const i = e.allowSlideNext;
        const s = e.allowSlidePrev;
        const r = e.snapGrid
      ;(e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
  }
  function G(e) {
    const t = this
    t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()))
  }
  function B() {
    const e = this;
      const t = e.wrapperEl;
      const a = e.rtlTranslate
    ;(e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = a
            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
            : -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === -0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses()
    const i = e.maxTranslate() - e.minTranslate()
    ;(i === 0 ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
      e.updateProgress(a ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1)
  }
  let H = !1
  function X() {}
  const Y = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    const R = {
      modular: {
        useParams (e) {
          const t = this
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              const i = t.modules[a]
              i.params && C(e, i.params)
            })
        },
        useModules (e) {
          void 0 === e && (e = {})
          const t = this
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              const i = t.modules[a];
                const s = e[a] || {}
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function (e) {
                  t.on(e, i.on[e])
                }),
                i.create && i.create.bind(t)(s)
            })
        },
      },
      eventsEmitter: {
        on (e, t, a) {
          const i = this
          if (typeof t !== 'function') return i
          const s = a ? 'unshift' : 'push'
          return (
            e.split(' ').forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t)
            }),
            i
          )
        },
        once (e, t, a) {
          const i = this
          if (typeof t !== 'function') return i
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
              r[n] = arguments[n]
            t.apply(i, r)
          }
          return (s.__emitterProxy = t), i.on(e, s, a)
        },
        onAny (e, t) {
          const a = this
          if (typeof e !== 'function') return a
          const i = t ? 'unshift' : 'push'
          return (
            !a.eventsAnyListeners.includes(e) && a.eventsAnyListeners[i](e), a
          )
        },
        offAny (e) {
          const t = this
          if (!t.eventsAnyListeners) return t
          const a = t.eventsAnyListeners.indexOf(e)
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t
        },
        off (e, t) {
          const a = this
          return a.eventsListeners
            ? (e.split(' ').forEach(function (e) {
                void 0 === t
                  ? (a.eventsListeners[e] = [])
                  : a.eventsListeners[e] &&
                    a.eventsListeners[e].forEach(function (i, s) {
                      ;(i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        a.eventsListeners[e].splice(s, 1)
                    })
              }),
              a)
            : a
        },
        emit () {
          let e;
            let t;
            let a;
            const i = this
          if (!i.eventsListeners) return i
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n]
          typeof r[0] === 'string' || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
            : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
            t.unshift(a)
          const l = Array.isArray(e) ? e : e.split(' ')
          return (
            l.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(a, [e].concat(t))
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(a, t)
                  })
            }),
            i
          )
        },
      },
      update: {
        updateSize () {
          let e;
            let t;
            const a = this;
            const i = a.$el
          ;(e =
            void 0 !== a.params.width && a.params.width !== null
              ? a.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== a.params.height && a.params.height !== null
                ? a.params.height
                : i[0].clientHeight),
            (e === 0 && a.isHorizontal()) ||
              (t === 0 && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css('padding-left') || 0, 10) -
                parseInt(i.css('padding-right') || 0, 10)),
              (t =
                t -
                parseInt(i.css('padding-top') || 0, 10) -
                parseInt(i.css('padding-bottom') || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              C(a, { width: e, height: t, size: a.isHorizontal() ? e : t }))
        },
        updateSlides () {
          const e = this;
            const t = function (t) {
              return e.isHorizontal()
                ? t
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[t]
            };
            const a = function (e, a) {
              return parseFloat(e.getPropertyValue(t(a)) || 0)
            };
            const i = e.params;
            const s = e.$wrapperEl;
            const r = e.size;
            const n = e.rtlTranslate;
            const l = e.wrongRTL;
            const o = e.virtual && i.virtual.enabled;
            const d = o ? e.virtual.slides.length : e.slides.length;
            const p = s.children('.' + e.params.slideClass);
            const c = o ? e.virtual.slides.length : p.length;
            let u = [];
            const h = [];
            const v = [];
            let f = i.slidesOffsetBefore
          typeof f === 'function' && (f = i.slidesOffsetBefore.call(e))
          let m = i.slidesOffsetAfter
          typeof m === 'function' && (m = i.slidesOffsetAfter.call(e))
          const g = e.snapGrid.length;
            const b = e.slidesGrid.length;
            let w = i.spaceBetween;
            let y = -f;
            let E = 0;
            let x = 0
          if (void 0 !== r) {
            let T, S
            typeof w === 'string' &&
              w.includes('%') &&
              (w = (parseFloat(w.replace('%', '')) / 100) * r),
              (e.virtualSize = -w),
              n
                ? p.css({ marginLeft: '', marginTop: '' })
                : p.css({ marginRight: '', marginBottom: '' }),
              i.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(c / i.slidesPerColumn) ===
                  c / e.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn),
                i.slidesPerView !== 'auto' &&
                  i.slidesPerColumnFill === 'row' &&
                  (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)))
            for (
              var M,
                z,
                P,
                k = i.slidesPerColumn,
                L = T / k,
                $ = Math.floor(c / i.slidesPerColumn),
                I = 0;
              I < c;
              I += 1
            ) {
              S = 0
              const O = p.eq(I)
              if (i.slidesPerColumn > 1) {
                let A = void 0;
                  let D = void 0;
                  let N = void 0
                if (i.slidesPerColumnFill === 'row' && i.slidesPerGroup > 1) {
                  const G = Math.floor(
                      I / (i.slidesPerGroup * i.slidesPerColumn)
                    );
                    const B = I - i.slidesPerColumn * i.slidesPerGroup * G;
                    const H =
                      G === 0
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((c - G * k * i.slidesPerGroup) / k),
                            i.slidesPerGroup
                          )
                  ;(A =
                    (D =
                      B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) +
                    (N * T) / k),
                    O.css({
                      '-webkit-box-ordinal-group': A,
                      '-moz-box-ordinal-group': A,
                      '-ms-flex-order': A,
                      '-webkit-order': A,
                      order: A,
                    })
                } else
                  i.slidesPerColumnFill === 'column'
                    ? ((N = I - (D = Math.floor(I / k)) * k),
                      (D > $ || (D === $ && N === k - 1)) &&
                        (N += 1) >= k &&
                        ((N = 0), (D += 1)))
                    : (D = I - (N = Math.floor(I / L)) * L)
                O.css(
                  t('margin-top'),
                  N !== 0 && i.spaceBetween && i.spaceBetween + 'px'
                )
              }
              if (O.css('display') !== 'none') {
                if (i.slidesPerView === 'auto') {
                  const X = getComputedStyle(O[0]);
                    const Y = O[0].style.transform;
                    const R = O[0].style.webkitTransform
                  if (
                    (Y && (O[0].style.transform = 'none'),
                    R && (O[0].style.webkitTransform = 'none'),
                    i.roundLengths)
                  )
                    S = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0)
                  else {
                    const V = a(X, 'width');
                      const W = a(X, 'padding-left');
                      const F = a(X, 'padding-right');
                      const _ = a(X, 'margin-left');
                      const q = a(X, 'margin-right');
                      const j = X.getPropertyValue('box-sizing')
                    if (j && j === 'border-box') S = V + _ + q
                    else {
                      const U = O[0];
                        const K = U.clientWidth
                      S = V + W + F + _ + q + (U.offsetWidth - K)
                    }
                  }
                  Y && (O[0].style.transform = Y),
                    R && (O[0].style.webkitTransform = R),
                    i.roundLengths && (S = Math.floor(S))
                } else
                  (S = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                    i.roundLengths && (S = Math.floor(S)),
                    p[I] && (p[I].style[t('width')] = S + 'px')
                p[I] && (p[I].swiperSlideSize = S),
                  v.push(S),
                  i.centeredSlides
                    ? ((y = y + S / 2 + E / 2 + w),
                      E === 0 && I !== 0 && (y = y - r / 2 - w),
                      I === 0 && (y = y - r / 2 - w),
                      Math.abs(y) < 0.001 && (y = 0),
                      i.roundLengths && (y = Math.floor(y)),
                      x % i.slidesPerGroup == 0 && u.push(y),
                      h.push(y))
                    : (i.roundLengths && (y = Math.floor(y)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && u.push(y),
                      h.push(y),
                      (y = y + S + w)),
                  (e.virtualSize += S + w),
                  (E = S),
                  (x += 1)
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + m),
              n &&
                l &&
                (i.effect === 'slide' || i.effect === 'coverflow') &&
                s.css({ width: e.virtualSize + i.spaceBetween + 'px' }),
              i.setWrapperSize)
            )
              s.css(
                (((z = {})[t('width')] = e.virtualSize + i.spaceBetween + 'px'),
                z)
              )
            if (i.slidesPerColumn > 1)
              if (
                ((e.virtualSize = (S + i.spaceBetween) * T),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / i.slidesPerColumn) -
                  i.spaceBetween),
                s.css(
                  (((P = {})[t('width')] =
                    e.virtualSize + i.spaceBetween + 'px'),
                  P)
                ),
                i.centeredSlides)
              ) {
                M = []
                for (let Z = 0; Z < u.length; Z += 1) {
                  let J = u[Z]
                  i.roundLengths && (J = Math.floor(J)),
                    u[Z] < e.virtualSize + u[0] && M.push(J)
                }
                u = M
              }
            if (!i.centeredSlides) {
              M = []
              for (let Q = 0; Q < u.length; Q += 1) {
                let ee = u[Q]
                i.roundLengths && (ee = Math.floor(ee)),
                  u[Q] <= e.virtualSize - r && M.push(ee)
              }
              ;(u = M),
                Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) >
                  1 && u.push(e.virtualSize - r)
            }
            if ((u.length === 0 && (u = [0]), i.spaceBetween !== 0)) {
              let te;
                const ae = e.isHorizontal() && n ? 'marginLeft' : t('marginRight')
              p.filter(function (e, t) {
                return !i.cssMode || t !== p.length - 1
              }).css((((te = {})[ae] = w + 'px'), te))
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let ie = 0
              v.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0)
              })
              const se = (ie -= i.spaceBetween) - r
              u = u.map(function (e) {
                return e < 0 ? -f : e > se ? se + m : e
              })
            }
            if (i.centerInsufficientSlides) {
              let re = 0
              if (
                (v.forEach(function (e) {
                  re += e + (i.spaceBetween ? i.spaceBetween : 0)
                }),
                (re -= i.spaceBetween) < r)
              ) {
                const ne = (r - re) / 2
                u.forEach(function (e, t) {
                  u[t] = e - ne
                }),
                  h.forEach(function (e, t) {
                    h[t] = e + ne
                  })
              }
            }
            C(e, { slides: p, snapGrid: u, slidesGrid: h, slidesSizesGrid: v }),
              c !== d && e.emit('slidesLengthChange'),
              u.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit('snapGridLengthChange')),
              h.length !== b && e.emit('slidesGridLengthChange'),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                e.updateSlidesOffset()
          }
        },
        updateAutoHeight (e) {
          let t;
            const a = this;
            const i = [];
            let s = 0
          if (
            (typeof e === 'number'
              ? a.setTransition(e)
              : !0 === e && a.setTransition(a.params.speed),
            a.params.slidesPerView !== 'auto' && a.params.slidesPerView > 1)
          )
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e) {
                i.push(e)
              })
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                const r = a.activeIndex + t
                if (r > a.slides.length) break
                i.push(a.slides.eq(r)[0])
              }
          else i.push(a.slides.eq(a.activeIndex)[0])
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              const n = i[t].offsetHeight
              s = n > s ? n : s
            }
          s && a.$wrapperEl.css('height', s + 'px')
        },
        updateSlidesOffset () {
          for (let e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop
        },
        updateSlidesProgress (e) {
          void 0 === e && (e = (this && this.translate) || 0)
          const t = this;
            const a = t.params;
            const i = t.slides;
            const s = t.rtlTranslate
          if (i.length !== 0) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset()
            let r = -e
            s && (r = e),
              i.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = [])
            for (let n = 0; n < i.length; n += 1) {
              const l = i[n];
                const o =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    l.swiperSlideOffset) /
                  (l.swiperSlideSize + a.spaceBetween)
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                const d = -(r - l.swiperSlideOffset);
                  const p = d + t.slidesSizesGrid[n]
                ;((d >= 0 && d < t.size - 1) ||
                  (p > 1 && p <= t.size) ||
                  (d <= 0 && p >= t.size)) &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(n),
                  i.eq(n).addClass(a.slideVisibleClass))
              }
              l.progress = s ? -o : o
            }
            t.visibleSlides = m(t.visibleSlides)
          }
        },
        updateProgress (e) {
          const t = this
          if (void 0 === e) {
            const a = t.rtlTranslate ? -1 : 1
            e = (t && t.translate && t.translate * a) || 0
          }
          const i = t.params;
            const s = t.maxTranslate() - t.minTranslate();
            let r = t.progress;
            let n = t.isBeginning;
            let l = t.isEnd;
            const o = n;
            const d = l
          s === 0
            ? ((r = 0), (n = !0), (l = !0))
            : ((n = (r = (e - t.minTranslate()) / s) <= 0), (l = r >= 1)),
            C(t, { progress: r, isBeginning: n, isEnd: l }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit('reachBeginning toEdge'),
            l && !d && t.emit('reachEnd toEdge'),
            ((o && !n) || (d && !l)) && t.emit('fromEdge'),
            t.emit('progress', r)
        },
        updateSlidesClasses () {
          let e;
            const t = this;
            const a = t.slides;
            const i = t.params;
            const s = t.$wrapperEl;
            const r = t.activeIndex;
            const n = t.realIndex;
            const l = t.virtual && i.virtual.enabled
          a.removeClass(
            i.slideActiveClass +
              ' ' +
              i.slideNextClass +
              ' ' +
              i.slidePrevClass +
              ' ' +
              i.slideDuplicateActiveClass +
              ' ' +
              i.slideDuplicateNextClass +
              ' ' +
              i.slideDuplicatePrevClass
          ),
            (e = l
              ? t.$wrapperEl.find(
                  '.' + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
                )
              : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass))
          let o = e
            .nextAll('.' + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass)
          i.loop && o.length === 0 && (o = a.eq(0)).addClass(i.slideNextClass)
          let d = e
            .prevAll('.' + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass)
          i.loop && d.length === 0 && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr('data-swiper-slide-index') +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr('data-swiper-slide-index') +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      '.' +
                        i.slideClass +
                        ':not(.' +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr('data-swiper-slide-index') +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      '.' +
                        i.slideClass +
                        '.' +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr('data-swiper-slide-index') +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses()
        },
        updateActiveIndex (e) {
          let t;
            const a = this;
            const i = a.rtlTranslate ? a.translate : -a.translate;
            const s = a.slidesGrid;
            const r = a.snapGrid;
            const n = a.params;
            const l = a.activeIndex;
            const o = a.realIndex;
            const d = a.snapIndex;
            let p = e
          if (void 0 === p) {
            for (let c = 0; c < s.length; c += 1)
              void 0 !== s[c + 1]
                ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
                  ? (p = c)
                  : i >= s[c] && i < s[c + 1] && (p = c + 1)
                : i >= s[c] && (p = c)
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
          }
          if (r.includes(i)) t = r.indexOf(i)
          else {
            const u = Math.min(n.slidesPerGroupSkip, p)
            t = u + Math.floor((p - u) / n.slidesPerGroup)
          }
          if ((t >= r.length && (t = r.length - 1), p !== l)) {
            const h = parseInt(
              a.slides.eq(p).attr('data-swiper-slide-index') || p,
              10
            )
            C(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p,
            }),
              a.emit('activeIndexChange'),
              a.emit('snapIndexChange'),
              o !== h && a.emit('realIndexChange'),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit('slideChange')
          } else t !== d && ((a.snapIndex = t), a.emit('snapIndexChange'))
        },
        updateClickedSlide (e) {
          let t;
            const a = this;
            const i = a.params;
            const s = m(e.target).closest('.' + i.slideClass)[0];
            let r = !1
          if (s)
            for (let n = 0; n < a.slides.length; n += 1)
              if (a.slides[n] === s) {
                ;(r = !0), (t = n)
                break
              }
          if (!s || !r)
            return (a.clickedSlide = void 0), void (a.clickedIndex = void 0)
          ;(a.clickedSlide = s),
            a.virtual && a.params.virtual.enabled
              ? (a.clickedIndex = parseInt(
                  m(s).attr('data-swiper-slide-index'),
                  10
                ))
              : (a.clickedIndex = t),
            i.slideToClickedSlide &&
              void 0 !== a.clickedIndex &&
              a.clickedIndex !== a.activeIndex &&
              a.slideToClickedSlide()
        },
      },
      translate: {
        getTranslate (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y')
          const t = this;
            const a = t.params;
            const i = t.rtlTranslate;
            const s = t.translate;
            const r = t.$wrapperEl
          if (a.virtualTranslate) return i ? -s : s
          if (a.cssMode) return s
          let n = T(r[0], e)
          return i && (n = -n), n || 0
        },
        setTranslate (e, t) {
          const a = this;
            const i = a.rtlTranslate;
            const s = a.params;
            const r = a.$wrapperEl;
            const n = a.wrapperEl;
            const l = a.progress;
            let o = 0;
            let d = 0
          a.isHorizontal() ? (o = i ? -e : e) : (d = e),
            s.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            s.cssMode
              ? (n[a.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  a.isHorizontal() ? -o : -d)
              : s.virtualTranslate ||
                r.transform('translate3d(' + o + 'px, ' + d + 'px, 0px)'),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? o : d)
          const p = a.maxTranslate() - a.minTranslate()
          ;(p === 0 ? 0 : (e - a.minTranslate()) / p) !== l &&
            a.updateProgress(e),
            a.emit('setTranslate', a.translate, t)
        },
        minTranslate () {
          return -this.snapGrid[0]
        },
        maxTranslate () {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo (e, t, a, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            void 0 === i && (i = !0)
          const r = this;
            const n = r.params;
            const l = r.wrapperEl
          if (r.animating && n.preventInteractionOnTransition) return !1
          let o;
            const d = r.minTranslate();
            const p = r.maxTranslate()
          if (
            ((o = i && e > d ? d : i && e < p ? p : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            let c;
              const u = r.isHorizontal()
            if (t === 0) l[u ? 'scrollLeft' : 'scrollTop'] = -o
            else if (l.scrollTo)
              l.scrollTo(
                (((c = {})[u ? 'left' : 'top'] = -o),
                (c.behavior = 'smooth'),
                c)
              )
            else l[u ? 'scrollLeft' : 'scrollTop'] = -o
            return !0
          }
          return (
            t === 0
              ? (r.setTransition(0),
                r.setTranslate(o),
                a &&
                  (r.emit('beforeTransitionStart', t, s),
                  r.emit('transitionEnd')))
              : (r.setTransition(t),
                r.setTranslate(o),
                a &&
                  (r.emit('beforeTransitionStart', t, s),
                  r.emit('transitionStart')),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        a && r.emit('transitionEnd'))
                    }),
                  r.$wrapperEl[0].addEventListener(
                    'transitionend',
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          )
        },
      },
      transition: {
        setTransition (e, t) {
          const a = this
          a.params.cssMode || a.$wrapperEl.transition(e),
            a.emit('setTransition', e, t)
        },
        transitionStart (e, t) {
          void 0 === e && (e = !0)
          const a = this;
            const i = a.activeIndex;
            const s = a.params;
            const r = a.previousIndex
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight()
            let n = t
            if (
              (n || (n = i > r ? 'next' : i < r ? 'prev' : 'reset'),
              a.emit('transitionStart'),
              e && i !== r)
            ) {
              if (n === 'reset') return void a.emit('slideResetTransitionStart')
              a.emit('slideChangeTransitionStart'),
                n === 'next'
                  ? a.emit('slideNextTransitionStart')
                  : a.emit('slidePrevTransitionStart')
            }
          }
        },
        transitionEnd (e, t) {
          void 0 === e && (e = !0)
          const a = this;
            const i = a.activeIndex;
            const s = a.previousIndex;
            const r = a.params
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0)
            let n = t
            if (
              (n || (n = i > s ? 'next' : i < s ? 'prev' : 'reset'),
              a.emit('transitionEnd'),
              e && i !== s)
            ) {
              if (n === 'reset') return void a.emit('slideResetTransitionEnd')
              a.emit('slideChangeTransitionEnd'),
                n === 'next'
                  ? a.emit('slideNextTransitionEnd')
                  : a.emit('slidePrevTransitionEnd')
            }
          }
        },
      },
      slide: {
        slideTo (e, t, a, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            typeof e !== 'number' && typeof e !== 'string')
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                '] given.'
            )
          if (typeof e === 'string') {
            const s = parseInt(e, 10)
            if (!isFinite(s))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  '] given.'
              )
            e = s
          }
          const r = this;
            let n = e
          n < 0 && (n = 0)
          const l = r.params;
            const o = r.snapGrid;
            const d = r.slidesGrid;
            const p = r.previousIndex;
            const c = r.activeIndex;
            const u = r.rtlTranslate;
            const h = r.wrapperEl
          if (r.animating && l.preventInteractionOnTransition) return !1
          const v = Math.min(r.params.slidesPerGroupSkip, n);
            let f = v + Math.floor((n - v) / r.params.slidesPerGroup)
          f >= o.length && (f = o.length - 1),
            (c || l.initialSlide || 0) === (p || 0) &&
              a &&
              r.emit('beforeSlideChangeStart')
          let m;
            const g = -o[f]
          if ((r.updateProgress(g), l.normalizeSlideIndex))
            for (let b = 0; b < d.length; b += 1) {
              const w = -Math.floor(100 * g);
                const y = Math.floor(100 * d[b]);
                const E = Math.floor(100 * d[b + 1])
              void 0 !== d[b + 1]
                ? w >= y && w < E - (E - y) / 2
                  ? (n = b)
                  : w >= y && w < E && (n = b + 1)
                : w >= y && (n = b)
            }
          if (r.initialized && n !== c) {
            if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
              return !1
            if (
              !r.allowSlidePrev &&
              g > r.translate &&
              g > r.maxTranslate() &&
              (c || 0) !== n
            )
              return !1
          }
          if (
            ((m = n > c ? 'next' : n < c ? 'prev' : 'reset'),
            (u && -g === r.translate) || (!u && g === r.translate))
          )
            return (
              r.updateActiveIndex(n),
              l.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              l.effect !== 'slide' && r.setTranslate(g),
              m !== 'reset' && (r.transitionStart(a, m), r.transitionEnd(a, m)),
              !1
            )
          if (l.cssMode) {
            let x;
              const T = r.isHorizontal();
              let S = -g
            if ((u && (S = h.scrollWidth - h.offsetWidth - S), t === 0))
              h[T ? 'scrollLeft' : 'scrollTop'] = S
            else if (h.scrollTo)
              h.scrollTo(
                (((x = {})[T ? 'left' : 'top'] = S), (x.behavior = 'smooth'), x)
              )
            else h[T ? 'scrollLeft' : 'scrollTop'] = S
            return !0
          }
          return (
            t === 0
              ? (r.setTransition(0),
                r.setTranslate(g),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit('beforeTransitionStart', t, i),
                r.transitionStart(a, m),
                r.transitionEnd(a, m))
              : (r.setTransition(t),
                r.setTranslate(g),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit('beforeTransitionStart', t, i),
                r.transitionStart(a, m),
                r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(a, m))
                    }),
                  r.$wrapperEl[0].addEventListener(
                    'transitionend',
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    r.onSlideToWrapperTransitionEnd
                  ))),
            !0
          )
        },
        slideToLoop (e, t, a, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0)
          const s = this;
            let r = e
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i)
        },
        slideNext (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
          const i = this;
            const s = i.params;
            const r = i.animating;
            const n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
          }
          return i.slideTo(i.activeIndex + n, e, t, a)
        },
        slidePrev (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
          const i = this;
            const s = i.params;
            const r = i.animating;
            const n = i.snapGrid;
            const l = i.slidesGrid;
            const o = i.rtlTranslate
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = d(o ? i.translate : -i.translate);
            const c = n.map(function (e) {
              return d(e)
            })
          n[c.indexOf(p)]
          let u;
            let h = n[c.indexOf(p) - 1]
          return (
            void 0 === h &&
              s.cssMode &&
              n.forEach(function (e) {
                !h && p >= e && (h = e)
              }),
            void 0 !== h && (u = l.indexOf(h)) < 0 && (u = i.activeIndex - 1),
            i.slideTo(u, e, t, a)
          )
        },
        slideReset (e, t, a) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
          )
        },
        slideToClosest (e, t, a, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5)
          const s = this;
            let r = s.activeIndex;
            const n = Math.min(s.params.slidesPerGroupSkip, r);
            const l = n + Math.floor((r - n) / s.params.slidesPerGroup);
            const o = s.rtlTranslate ? s.translate : -s.translate
          if (o >= s.snapGrid[l]) {
            const d = s.snapGrid[l]
            o - d > (s.snapGrid[l + 1] - d) * i &&
              (r += s.params.slidesPerGroup)
          } else {
            const p = s.snapGrid[l - 1]
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup)
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, a)
          )
        },
        slideToClickedSlide () {
          let e;
            const t = this;
            const a = t.params;
            const i = t.$wrapperEl;
            const s =
              a.slidesPerView === 'auto'
                ? t.slidesPerViewDynamic()
                : a.slidesPerView;
            let r = t.clickedIndex
          if (a.loop) {
            if (t.animating) return
            ;(e = parseInt(
              m(t.clickedSlide).attr('data-swiper-slide-index'),
              10
            )),
              a.centeredSlides
                ? r < t.loopedSlides - s / 2 ||
                  r > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        '.' +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ')'
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r)
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - s
                ? (t.loopFix(),
                  (r = i
                    .children(
                      '.' +
                        a.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        a.slideDuplicateClass +
                        ')'
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r)
                  }))
                : t.slideTo(r)
          } else t.slideTo(r)
        },
      },
      loop: {
        loopCreate () {
          const e = this;
            const t = r();
            const a = e.params;
            const i = e.$wrapperEl
          i.children('.' + a.slideClass + '.' + a.slideDuplicateClass).remove()
          let s = i.children('.' + a.slideClass)
          if (a.loopFillGroupWithBlank) {
            const n = a.slidesPerGroup - (s.length % a.slidesPerGroup)
            if (n !== a.slidesPerGroup) {
              for (let l = 0; l < n; l += 1) {
                const o = m(t.createElement('div')).addClass(
                  a.slideClass + ' ' + a.slideBlankClass
                )
                i.append(o)
              }
              s = i.children('.' + a.slideClass)
            }
          }
          a.slidesPerView !== 'auto' ||
            a.loopedSlides ||
            (a.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (e.loopedSlides += a.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length)
          const d = [];
            const p = []
          s.each(function (t, a) {
            const i = m(t)
            a < e.loopedSlides && p.push(t),
              a < s.length && a >= s.length - e.loopedSlides && d.push(t),
              i.attr('data-swiper-slide-index', a)
          })
          for (let c = 0; c < p.length; c += 1)
            i.append(m(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass))
          for (let u = d.length - 1; u >= 0; u -= 1)
            i.prepend(m(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
        },
        loopFix () {
          const e = this
          e.emit('beforeLoopFix')
          let t;
            const a = e.activeIndex;
            const i = e.slides;
            const s = e.loopedSlides;
            const r = e.allowSlidePrev;
            const n = e.allowSlideNext;
            const l = e.snapGrid;
            const o = e.rtlTranslate
          ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
          const d = -l[a] - e.getTranslate()
          if (a < s)
            (t = i.length - 3 * s + a),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                d !== 0 &&
                e.setTranslate((o ? -e.translate : e.translate) - d)
          else if (a >= i.length - s) {
            ;(t = -i.length + a + s),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                d !== 0 &&
                e.setTranslate((o ? -e.translate : e.translate) - d)
          }
          ;(e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit('loopFix')
        },
        loopDestroy () {
          const e = this;
            const t = e.$wrapperEl;
            const a = e.params;
            const i = e.slides
          t
            .children(
              '.' +
                a.slideClass +
                '.' +
                a.slideDuplicateClass +
                ',.' +
                a.slideClass +
                '.' +
                a.slideBlankClass
            )
            .remove(),
            i.removeAttr('data-swiper-slide-index')
        },
      },
      grabCursor: {
        setGrabCursor (e) {
          const t = this
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            const a = t.el
            ;(a.style.cursor = 'move'),
              (a.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (a.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (a.style.cursor = e ? 'grabbing' : 'grab')
          }
        },
        unsetGrabCursor () {
          const e = this
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = '')
        },
      },
      manipulation: {
        appendSlide (e) {
          const t = this;
            const a = t.$wrapperEl;
            const i = t.params
          if (
            (i.loop && t.loopDestroy(), typeof e === 'object' && 'length' in e)
          )
            for (let s = 0; s < e.length; s += 1) e[s] && a.append(e[s])
          else a.append(e)
          i.loop && t.loopCreate(),
            (i.observer && t.support.observer) || t.update()
        },
        prependSlide (e) {
          const t = this;
            const a = t.params;
            const i = t.$wrapperEl;
            const s = t.activeIndex
          a.loop && t.loopDestroy()
          let r = s + 1
          if (typeof e === 'object' && 'length' in e) {
            for (let n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n])
            r = s + e.length
          } else i.prepend(e)
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            t.slideTo(r, 0, !1)
        },
        addSlide (e, t) {
          const a = this;
            const i = a.$wrapperEl;
            const s = a.params;
            let r = a.activeIndex
          s.loop &&
            ((r -= a.loopedSlides),
            a.loopDestroy(),
            (a.slides = i.children('.' + s.slideClass)))
          const n = a.slides.length
          if (e <= 0) a.prependSlide(t)
          else if (e >= n) a.appendSlide(t)
          else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              const p = a.slides.eq(d)
              p.remove(), o.unshift(p)
            }
            if (typeof t === 'object' && 'length' in t) {
              for (let c = 0; c < t.length; c += 1) t[c] && i.append(t[c])
              l = r > e ? r + t.length : r
            } else i.append(t)
            for (let u = 0; u < o.length; u += 1) i.append(o[u])
            s.loop && a.loopCreate(),
              (s.observer && a.support.observer) || a.update(),
              s.loop
                ? a.slideTo(l + a.loopedSlides, 0, !1)
                : a.slideTo(l, 0, !1)
          }
        },
        removeSlide (e) {
          const t = this;
            const a = t.params;
            const i = t.$wrapperEl;
            let s = t.activeIndex
          a.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children('.' + a.slideClass)))
          let r;
            let n = s
          if (typeof e === 'object' && 'length' in e) {
            for (let l = 0; l < e.length; l += 1)
              (r = e[l]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1)
            n = Math.max(n, 0)
          } else
            (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1),
              (n = Math.max(n, 0))
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        },
        removeAllSlides () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t)
          this.removeSlide(e)
        },
      },
      events: {
        attachEvents () {
          const e = this;
            const t = r();
            const a = e.params;
            const i = e.touchEvents;
            const s = e.el;
            const n = e.wrapperEl;
            const l = e.device;
            const o = e.support
          ;(e.onTouchStart = O.bind(e)),
            (e.onTouchMove = A.bind(e)),
            (e.onTouchEnd = D.bind(e)),
            a.cssMode && (e.onScroll = B.bind(e)),
            (e.onClick = G.bind(e))
          const d = !!a.nested
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1),
              t.addEventListener(i.move, e.onTouchMove, d),
              t.addEventListener(i.end, e.onTouchEnd, !1)
          else {
            if (o.touch) {
              const p = !(
                i.start !== 'touchstart' ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 }
              s.addEventListener(i.start, e.onTouchStart, p),
                s.addEventListener(
                  i.move,
                  e.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: d } : d
                ),
                s.addEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p),
                H || (t.addEventListener('touchstart', X), (H = !0))
            }
            ;((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.addEventListener('mousedown', e.onTouchStart, !1),
              t.addEventListener('mousemove', e.onTouchMove, d),
              t.addEventListener('mouseup', e.onTouchEnd, !1))
          }
          ;(a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener('click', e.onClick, !0),
            a.cssMode && n.addEventListener('scroll', e.onScroll),
            a.updateOnWindowResize
              ? e.on(
                  l.ios || l.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  N,
                  !0
                )
              : e.on('observerUpdate', N, !0)
        },
        detachEvents () {
          const e = this;
            const t = r();
            const a = e.params;
            const i = e.touchEvents;
            const s = e.el;
            const n = e.wrapperEl;
            const l = e.device;
            const o = e.support;
            const d = !!a.nested
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, e.onTouchStart, !1),
              t.removeEventListener(i.move, e.onTouchMove, d),
              t.removeEventListener(i.end, e.onTouchEnd, !1)
          else {
            if (o.touch) {
              const p = !(
                i.start !== 'onTouchStart' ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 }
              s.removeEventListener(i.start, e.onTouchStart, p),
                s.removeEventListener(i.move, e.onTouchMove, d),
                s.removeEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p)
            }
            ;((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.removeEventListener('mousedown', e.onTouchStart, !1),
              t.removeEventListener('mousemove', e.onTouchMove, d),
              t.removeEventListener('mouseup', e.onTouchEnd, !1))
          }
          ;(a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener('click', e.onClick, !0),
            a.cssMode && n.removeEventListener('scroll', e.onScroll),
            e.off(
              l.ios || l.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              N
            )
        },
      },
      breakpoints: {
        setBreakpoint () {
          const e = this;
            const t = e.activeIndex;
            const a = e.initialized;
            const i = e.loopedSlides;
            const s = void 0 === i ? 0 : i;
            const r = e.params;
            const n = e.$el;
            const l = r.breakpoints
          if (l && (!l || Object.keys(l).length !== 0)) {
            const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el)
            if (o && e.currentBreakpoint !== o) {
              const d = o in l ? l[o] : void 0
              d &&
                [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup',
                  'slidesPerGroupSkip',
                  'slidesPerColumn',
                ].forEach(function (e) {
                  const t = d[e]
                  void 0 !== t &&
                    (d[e] =
                      e !== 'slidesPerView' || (t !== 'AUTO' && t !== 'auto')
                        ? e === 'slidesPerView'
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : 'auto')
                })
              const p = d || e.originalParams;
                const c = r.slidesPerColumn > 1;
                const u = p.slidesPerColumn > 1
              c && !u
                ? (n.removeClass(
                    r.containerModifierClass +
                      'multirow ' +
                      r.containerModifierClass +
                      'multirow-column'
                  ),
                  e.emitContainerClasses())
                : !c &&
                  u &&
                  (n.addClass(r.containerModifierClass + 'multirow'),
                  p.slidesPerColumnFill === 'column' &&
                    n.addClass(r.containerModifierClass + 'multirow-column'),
                  e.emitContainerClasses())
              const h = p.direction && p.direction !== r.direction;
                const v = r.loop && (p.slidesPerView !== r.slidesPerView || h)
              h && a && e.changeDirection(),
                C(e.params, p),
                C(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = o),
                e.emit('_beforeBreakpoint', p),
                v &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', p)
            }
          }
        },
        getBreakpoint (e, t, a) {
          if ((void 0 === t && (t = 'window'), e && (t !== 'container' || a))) {
            let i = !1;
              const s = l();
              const r = t === 'window' ? s.innerWidth : a.clientWidth;
              const n = t === 'window' ? s.innerHeight : a.clientHeight;
              const o = Object.keys(e).map(function (e) {
                if (typeof e === 'string' && e.indexOf('@') === 0) {
                  const t = parseFloat(e.substr(1))
                  return { value: n * t, point: e }
                }
                return { value: e, point: e }
              })
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10)
            })
            for (let d = 0; d < o.length; d += 1) {
              const p = o[d];
                const c = p.point
              p.value <= r && (i = c)
            }
            return i || 'max'
          }
        },
      },
      checkOverflow: {
        checkOverflow () {
          const e = this;
            const t = e.params;
            const a = e.isLocked;
            const i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked = e.snapGrid.length === 1),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
            a &&
              a !== e.isLocked &&
              ((e.isEnd = !1), e.navigation && e.navigation.update())
        },
      },
      classes: {
        addClasses () {
          let e;
            let t;
            let a;
            const i = this;
            const s = i.classNames;
            const r = i.params;
            const n = i.rtl;
            const l = i.$el;
            const o = i.device;
            const d = i.support;
            const p =
              ((e = [
                'initialized',
                r.direction,
                { 'pointer-events': d.pointerEvents && !d.touch },
                { 'free-mode': r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: n },
                { multirow: r.slidesPerColumn > 1 },
                {
                  'multirow-column':
                    r.slidesPerColumn > 1 && r.slidesPerColumnFill === 'column',
                },
                { android: o.android },
                { ios: o.ios },
                { 'css-mode': r.cssMode },
              ]),
              (t = r.containerModifierClass),
              (a = []),
              e.forEach(function (e) {
                typeof e === 'object'
                  ? Object.keys(e).forEach(function (i) {
                      e[i] && a.push(t + i)
                    })
                  : typeof e === 'string' && a.push(t + e)
              }),
              a)
          s.push.apply(s, p),
            l.addClass([].concat(s).join(' ')),
            i.emitContainerClasses()
        },
        removeClasses () {
          const e = this;
            const t = e.$el;
            const a = e.classNames
          t.removeClass(a.join(' ')), e.emitContainerClasses()
        },
      },
      images: {
        loadImage (e, t, a, i, s, r) {
          let n;
            const o = l()
          function d() {
            r && r()
          }
          m(e).parent('picture')[0] || (e.complete && s)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : d()
        },
        preloadImages () {
          const e = this
          function t() {
            e != null &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')))
          }
          e.imagesToLoad = e.$el.find('img')
          for (let a = 0; a < e.imagesToLoad.length; a += 1) {
            const i = e.imagesToLoad[a]
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute('src'),
              i.srcset || i.getAttribute('srcset'),
              i.sizes || i.getAttribute('sizes'),
              !0,
              t
            )
          }
        },
      },
    };
    const V = {};
    const W = (function () {
      function t() {
        for (
          var e, a, i = arguments.length, s = new Array(i), r = 0;
          r < i;
          r++
        )
          s[r] = arguments[r]
        if (
          (s.length === 1 &&
          s[0].constructor &&
          Object.prototype.toString.call(s[0]).slice(8, -1) === 'Object'
            ? (a = s[0])
            : ((e = s[0]), (a = s[1])),
          a || (a = {}),
          (a = C({}, a)),
          e && !a.el && (a.el = e),
          a.el && m(a.el).length > 1)
        ) {
          const n = []
          return (
            m(a.el).each(function (e) {
              const i = C({}, a, { el: e })
              n.push(new t(i))
            }),
            n
          )
        }
        const l = this
        ;(l.__swiper__ = !0),
          (l.support = z()),
          (l.device = P({ userAgent: a.userAgent })),
          (l.browser = k()),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            const t = l.modules[e]
            if (t.params) {
              const i = Object.keys(t.params)[0];
                const s = t.params[i]
              if (typeof s !== 'object' || s === null) return
              if (!(i in a) || !('enabled' in s)) return
              !0 === a[i] && (a[i] = { enabled: !0 }),
                typeof a[i] !== 'object' ||
                  'enabled' in a[i] ||
                  (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 })
            }
          })
        let o;
          let d;
          const p = C({}, Y)
        return (
          l.useParams(p),
          (l.params = C({}, p, V, a)),
          (l.originalParams = C({}, l.params)),
          (l.passedParams = C({}, a)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach(function (e) {
              l.on(e, l.params.on[e])
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          (l.$ = m),
          C(l, {
            el: e,
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal () {
              return l.params.direction === 'horizontal'
            },
            isVertical () {
              return l.params.direction === 'vertical'
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEvents:
              ((o = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
              (d = ['mousedown', 'mousemove', 'mouseup']),
              l.support.pointerEvents &&
                (d = ['pointerdown', 'pointermove', 'pointerup']),
              (l.touchEventsTouch = {
                start: o[0],
                move: o[1],
                end: o[2],
                cancel: o[3],
              }),
              (l.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
              l.support.touch || !l.params.simulateTouch
                ? l.touchEventsTouch
                : l.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements:
                'input, select, option, textarea, button, video, label',
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.useModules(),
          l.emit('_swiper'),
          l.params.init && l.init(),
          l
        )
      }
      let a;
        let i;
        let s;
        const r = t.prototype
      return (
        (r.emitContainerClasses = function () {
          const e = this
          if (e.params._emitClasses && e.el) {
            const t = e.el.className.split(' ').filter(function (t) {
              return (
                t.indexOf('swiper-container') === 0 ||
                t.indexOf(e.params.containerModifierClass) === 0
              )
            })
            e.emit('_containerClasses', t.join(' '))
          }
        }),
        (r.getSlideClasses = function (e) {
          const t = this
          return e.className
            .split(' ')
            .filter(function (e) {
              return (
                e.indexOf('swiper-slide') === 0 ||
                e.indexOf(t.params.slideClass) === 0
              )
            })
            .join(' ')
        }),
        (r.emitSlidesClasses = function () {
          const e = this
          if (e.params._emitClasses && e.el) {
            const t = []
            e.slides.each(function (a) {
              const i = e.getSlideClasses(a)
              t.push({ slideEl: a, classNames: i }), e.emit('_slideClass', a, i)
            }),
              e.emit('_slideClasses', t)
          }
        }),
        (r.slidesPerViewDynamic = function () {
          const e = this;
            const t = e.params;
            const a = e.slides;
            const i = e.slidesGrid;
            const s = e.size;
            const r = e.activeIndex;
            let n = 1
          if (t.centeredSlides) {
            for (
              var l, o = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !l &&
                ((n += 1), (o += a[d].swiperSlideSize) > s && (l = !0))
            for (let p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !l &&
                ((n += 1), (o += a[p].swiperSlideSize) > s && (l = !0))
          } else
            for (let c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1)
          return n
        }),
        (r.update = function () {
          const e = this
          if (e && !e.destroyed) {
            const t = e.snapGrid;
              const a = e.params
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : ((e.params.slidesPerView === 'auto' ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit('update')
          }
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate;
              const a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0)
          const a = this;
            const i = a.params.direction
          return (
            e || (e = i === 'horizontal' ? 'vertical' : 'horizontal'),
            e === i ||
              (e !== 'horizontal' && e !== 'vertical') ||
              (a.$el
                .removeClass('' + a.params.containerModifierClass + i)
                .addClass('' + a.params.containerModifierClass + e),
              a.emitContainerClasses(),
              (a.params.direction = e),
              a.slides.each(function (t) {
                e === 'vertical' ? (t.style.width = '') : (t.style.height = '')
              }),
              a.emit('changeDirection'),
              t && a.update()),
            a
          )
        }),
        (r.mount = function (e) {
          const t = this
          if (t.mounted) return !0
          let a;
            const i = m(e || t.params.el)
          return (
            !!(e = i[0]) &&
            ((e.swiper = t),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((a = m(
                  e.shadowRoot.querySelector('.' + t.params.wrapperClass)
                )).children = function (e) {
                  return i.children(e)
                })
              : (a = i.children('.' + t.params.wrapperClass)),
            C(t, {
              $el: i,
              el: e,
              $wrapperEl: a,
              wrapperEl: a[0],
              mounted: !0,
              rtl:
                e.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl',
              rtlTranslate:
                t.params.direction === 'horizontal' &&
                (e.dir.toLowerCase() === 'rtl' || i.css('direction') === 'rtl'),
              wrongRTL: a.css('display') === '-webkit-box',
            }),
            !0)
          )
        }),
        (r.init = function (e) {
          const t = this
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit('beforeInit'),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit('init'),
              t.emit('afterInit')),
            t
          )
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0)
          let a;
            const i = this;
            const s = i.params;
            const r = i.$el;
            const n = i.$wrapperEl;
            const l = i.slides
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r.removeAttr('style'),
                n.removeAttr('style'),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e)
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (a = i),
                Object.keys(a).forEach(function (e) {
                  try {
                    a[e] = null
                  } catch (e) {}
                  try {
                    delete a[e]
                  } catch (e) {}
                })),
              (i.destroyed = !0)),
            null
          )
        }),
        (t.extendDefaults = function (e) {
          C(V, e)
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {})
          const a = e.name || Object.keys(t.prototype.modules).length + '_' + x()
          t.prototype.modules[a] = e
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e)
              }),
              t)
            : (t.installModule(e), t)
        }),
        (a = t),
        (s = [
          {
            key: 'extendedDefaults',
            get () {
              return V
            },
          },
          {
            key: 'defaults',
            get () {
              return Y
            },
          },
        ]),
        (i = null) && e(a.prototype, i),
        s && e(a, s),
        t
      )
    })()
  Object.keys(R).forEach(function (e) {
    Object.keys(R[e]).forEach(function (t) {
      W.prototype[t] = R[e][t]
    })
  }),
    W.use([L, I])
  const F = {
      update (e) {
        const t = this;
          const a = t.params;
          const i = a.slidesPerView;
          const s = a.slidesPerGroup;
          const r = a.centeredSlides;
          const n = t.params.virtual;
          const l = n.addSlidesBefore;
          const o = n.addSlidesAfter;
          const d = t.virtual;
          const p = d.from;
          const c = d.to;
          const u = d.slides;
          const h = d.slidesGrid;
          const v = d.renderSlide;
          const f = d.offset
        t.updateActiveIndex()
        let m;
          let g;
          let b;
          const w = t.activeIndex || 0
        ;(m = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
          r
            ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l))
        const y = Math.max((w || 0) - b, 0);
          const E = Math.min((w || 0) + g, u.length - 1);
          const x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0)
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (
          (C(t.virtual, {
            from: y,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          p === y && c === E && !e)
        )
          return (
            t.slidesGrid !== h && x !== f && t.slides.css(m, x + 'px'),
            void t.updateProgress()
          )
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: y,
              to: E,
              slides: (function () {
                for (var e = [], t = y; t <= E; t += 1) e.push(u[t])
                return e
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          )
        const S = [];
          const M = []
        if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove()
        else
          for (let z = p; z <= c; z += 1)
            (z < y || z > E) &&
              t.$wrapperEl
                .find(
                  '.' +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove()
        for (let P = 0; P < u.length; P += 1)
          P >= y &&
            P <= E &&
            (void 0 === c || e
              ? M.push(P)
              : (P > c && M.push(P), P < p && S.push(P)))
        M.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e))
        }),
          S.sort(function (e, t) {
            return t - e
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e))
          }),
          t.$wrapperEl.children('.swiper-slide').css(m, x + 'px'),
          T()
      },
      renderSlide (e, t) {
        const a = this;
          const i = a.params.virtual
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t]
        const s = i.renderSlide
          ? m(i.renderSlide.call(a, e, t))
          : m(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                '</div>'
            )
        return (
          s.attr('data-swiper-slide-index') ||
            s.attr('data-swiper-slide-index', t),
          i.cache && (a.virtual.cache[t] = s),
          s
        )
      },
      appendSlide (e) {
        const t = this
        if (typeof e === 'object' && 'length' in e)
          for (let a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a])
        else t.virtual.slides.push(e)
        t.virtual.update(!0)
      },
      prependSlide (e) {
        const t = this;
          const a = t.activeIndex;
          let i = a + 1;
          let s = 1
        if (Array.isArray(e)) {
          for (let r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r])
          ;(i = a + e.length), (s = e.length)
        } else t.virtual.slides.unshift(e)
        if (t.params.virtual.cache) {
          const n = t.virtual.cache;
            const l = {}
          Object.keys(n).forEach(function (e) {
            const t = n[e];
              const a = t.attr('data-swiper-slide-index')
            a && t.attr('data-swiper-slide-index', parseInt(a, 10) + 1),
              (l[parseInt(e, 10) + s] = t)
          }),
            (t.virtual.cache = l)
        }
        t.virtual.update(!0), t.slideTo(i, 0)
      },
      removeSlide (e) {
        const t = this
        if (e != null) {
          let a = t.activeIndex
          if (Array.isArray(e))
            for (let i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0))
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0))
          t.virtual.update(!0), t.slideTo(a, 0)
        }
      },
      removeAllSlides () {
        const e = this
        ;(e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0)
      },
    };
    const _ = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create () {
        M(this, {
          virtual: t({}, F, { slides: this.params.virtual.slides, cache: {} }),
        })
      },
      on: {
        beforeInit (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + 'virtual')
            const t = { watchSlidesProgress: !0 }
            C(e.params, t),
              C(e.originalParams, t),
              e.params.initialSlide || e.virtual.update()
          }
        },
        setTranslate (e) {
          e.params.virtual.enabled && e.virtual.update()
        },
      },
    };
    const q = {
      handle (e) {
        const t = this;
          const a = l();
          const i = r();
          const s = t.rtlTranslate;
          let n = e
        n.originalEvent && (n = n.originalEvent)
        const o = n.keyCode || n.charCode;
          const d = t.params.keyboard.pageUpDown;
          const p = d && o === 33;
          const c = d && o === 34;
          const u = o === 37;
          const h = o === 39;
          const v = o === 38;
          const f = o === 40
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && h) || (t.isVertical() && f) || c)
        )
          return !1
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && u) || (t.isVertical() && v) || p)
        )
          return !1
        if (
          !(
            n.shiftKey ||
            n.altKey ||
            n.ctrlKey ||
            n.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              (i.activeElement.nodeName.toLowerCase() === 'input' ||
                i.activeElement.nodeName.toLowerCase() === 'textarea'))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (p || c || u || h || v || f)
          ) {
            let m = !1
            if (
              t.$el.parents('.' + t.params.slideClass).length > 0 &&
              t.$el.parents('.' + t.params.slideActiveClass).length === 0
            )
              return
            const g = t.$el;
              const b = g[0].clientWidth;
              const w = g[0].clientHeight;
              const y = a.innerWidth;
              const E = a.innerHeight;
              const x = t.$el.offset()
            s && (x.left -= t.$el[0].scrollLeft)
            for (
              let T = [
                  [x.left, x.top],
                  [x.left + b, x.top],
                  [x.left, x.top + w],
                  [x.left + b, x.top + w],
                ],
                S = 0;
              S < T.length;
              S += 1
            ) {
              const C = T[S]
              if (C[0] >= 0 && C[0] <= y && C[1] >= 0 && C[1] <= E) {
                if (C[0] === 0 && C[1] === 0) continue
                m = !0
              }
            }
            if (!m) return
          }
          t.isHorizontal()
            ? ((p || c || u || h) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (((c || h) && !s) || ((p || u) && s)) && t.slideNext(),
              (((p || u) && !s) || ((c || h) && s)) && t.slidePrev())
            : ((p || c || v || f) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (c || f) && t.slideNext(),
              (p || v) && t.slidePrev()),
            t.emit('keyPress', o)
        }
      },
      enable () {
        const e = this;
          const t = r()
        e.keyboard.enabled ||
          (m(t).on('keydown', e.keyboard.handle), (e.keyboard.enabled = !0))
      },
      disable () {
        const e = this;
          const t = r()
        e.keyboard.enabled &&
          (m(t).off('keydown', e.keyboard.handle), (e.keyboard.enabled = !1))
      },
    };
    const j = {
      name: 'keyboard',
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create () {
        M(this, { keyboard: t({ enabled: !1 }, q) })
      },
      on: {
        init (e) {
          e.params.keyboard.enabled && e.keyboard.enable()
        },
        destroy (e) {
          e.keyboard.enabled && e.keyboard.disable()
        },
      },
    }
  var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event () {
        return l().navigator.userAgent.includes('firefox')
          ? 'DOMMouseScroll'
          : (function () {
              const e = r();
                const t = 'onwheel';
                let a = t in e
              if (!a) {
                const i = e.createElement('div')
                i.setAttribute(t, 'return;'),
                  (a = typeof i.onwheel === 'function')
              }
              return (
                !a &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature('', '') &&
                  (a = e.implementation.hasFeature('Events.wheel', '3.0')),
                a
              )
            })()
          ? 'wheel'
          : 'mousewheel'
      },
      normalize (e) {
        let t = 0;
          let a = 0;
          let i = 0;
          let s = 0
        return (
          'detail' in e && (a = e.detail),
          'wheelDelta' in e && (a = -e.wheelDelta / 120),
          'wheelDeltaY' in e && (a = -e.wheelDeltaY / 120),
          'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
          'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          'deltaY' in e && (s = e.deltaY),
          'deltaX' in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = s), (s = 0)),
          (i || s) &&
            e.deltaMode &&
            (e.deltaMode === 1
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        )
      },
      handleMouseEnter () {
        this.mouseEntered = !0
      },
      handleMouseLeave () {
        this.mouseEntered = !1
      },
      handle (e) {
        let t = e;
          const a = this;
          const i = a.params.mousewheel
        a.params.cssMode && t.preventDefault()
        let s = a.$el
        if (
          (a.params.mousewheel.eventsTarget !== 'container' &&
            (s = m(a.params.mousewheel.eventsTarget)),
          !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
        )
          return !0
        t.originalEvent && (t = t.originalEvent)
        let r = 0;
          const n = a.rtlTranslate ? -1 : 1;
          const l = U.normalize(t)
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0
            r = -l.pixelX * n
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0
            r = -l.pixelY
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY
        if (r === 0) return !0
        i.invert && (r = -r)
        let o = a.getTranslate() + r * i.sensitivity
        if (
          (o >= a.minTranslate() && (o = a.minTranslate()),
          o <= a.maxTranslate() && (o = a.maxTranslate()),
          (!!a.params.loop ||
            !(o === a.minTranslate() || o === a.maxTranslate())) &&
            a.params.nested &&
            t.stopPropagation(),
          a.params.freeMode)
        ) {
          const d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) };
            const p = a.mousewheel.lastEventBeforeSnap;
            const c =
              p &&
              d.time < p.time + 500 &&
              d.delta <= p.delta &&
              d.direction === p.direction
          if (!c) {
            ;(a.mousewheel.lastEventBeforeSnap = void 0),
              a.params.loop && a.loopFix()
            let u = a.getTranslate() + r * i.sensitivity;
              const h = a.isBeginning;
              const v = a.isEnd
            if (
              (u >= a.minTranslate() && (u = a.minTranslate()),
              u <= a.maxTranslate() && (u = a.maxTranslate()),
              a.setTransition(0),
              a.setTranslate(u),
              a.updateProgress(),
              a.updateActiveIndex(),
              a.updateSlidesClasses(),
              ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                a.updateSlidesClasses(),
              a.params.freeModeSticky)
            ) {
              clearTimeout(a.mousewheel.timeout),
                (a.mousewheel.timeout = void 0)
              const f = a.mousewheel.recentWheelEvents
              f.length >= 15 && f.shift()
              const g = f.length ? f[f.length - 1] : void 0;
                const b = f[0]
              if (
                (f.push(d),
                g && (d.delta > g.delta || d.direction !== g.direction))
              )
                f.splice(0)
              else if (
                f.length >= 15 &&
                d.time - b.time < 500 &&
                b.delta - d.delta >= 1 &&
                d.delta <= 6
              ) {
                const w = r > 0 ? 0.8 : 0.2
                ;(a.mousewheel.lastEventBeforeSnap = d),
                  f.splice(0),
                  (a.mousewheel.timeout = E(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w)
                  }, 0))
              }
              a.mousewheel.timeout ||
                (a.mousewheel.timeout = E(function () {
                  ;(a.mousewheel.lastEventBeforeSnap = d),
                    f.splice(0),
                    a.slideToClosest(a.params.speed, !0, void 0, 0.5)
                }, 500))
            }
            if (
              (c || a.emit('scroll', t),
              a.params.autoplay &&
                a.params.autoplayDisableOnInteraction &&
                a.autoplay.stop(),
              u === a.minTranslate() || u === a.maxTranslate())
            )
              return !0
          }
        } else {
          const y = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            };
            const T = a.mousewheel.recentWheelEvents
          T.length >= 2 && T.shift()
          const S = T.length ? T[T.length - 1] : void 0
          if (
            (T.push(y),
            S
              ? (y.direction !== S.direction ||
                  y.delta > S.delta ||
                  y.time > S.time + 150) &&
                a.mousewheel.animateSlider(y)
              : a.mousewheel.animateSlider(y),
            a.mousewheel.releaseScroll(y))
          )
            return !0
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
      },
      animateSlider (e) {
        const t = this;
          const a = l()
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit('scroll', e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit('scroll', e.raw)),
            (t.mousewheel.lastScrollTime = new a.Date().getTime()),
            !1))
        )
      },
      releaseScroll (e) {
        const t = this;
          const a = t.params.mousewheel
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0
        return !1
      },
      enable () {
        const e = this;
          const t = U.event()
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
        if (!t) return !1
        if (e.mousewheel.enabled) return !1
        let a = e.$el
        return (
          e.params.mousewheel.eventsTarget !== 'container' &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.on('mouseenter', e.mousewheel.handleMouseEnter),
          a.on('mouseleave', e.mousewheel.handleMouseLeave),
          a.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        )
      },
      disable () {
        const e = this;
          const t = U.event()
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0
        if (!t) return !1
        if (!e.mousewheel.enabled) return !1
        let a = e.$el
        return (
          e.params.mousewheel.eventsTarget !== 'container' &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        )
      },
    };
    const K = {
      toggleEl (e, t) {
        e[t ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass),
          e[0] && e[0].tagName === 'BUTTON' && (e[0].disabled = t)
      },
      update () {
        const e = this;
          const t = e.params.navigation;
          const a = e.navigation.toggleEl
        if (!e.params.loop) {
          const i = e.navigation;
            const s = i.$nextEl;
            const r = i.$prevEl
          r &&
            r.length > 0 &&
            (e.isBeginning ? a(r, !0) : a(r, !1),
            r[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](t.lockClass)),
            s &&
              s.length > 0 &&
              (e.isEnd ? a(s, !0) : a(s, !1),
              s[
                e.params.watchOverflow && e.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](t.lockClass))
        }
      },
      onPrevClick (e) {
        const t = this
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev()
      },
      onNextClick (e) {
        const t = this
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext()
      },
      init () {
        let e;
          let t;
          const a = this;
          const i = a.params.navigation
        ;(i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            a.params.uniqueNavElements &&
              typeof i.nextEl === 'string' &&
              e.length > 1 &&
              a.$el.find(i.nextEl).length === 1 &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            a.params.uniqueNavElements &&
              typeof i.prevEl === 'string' &&
              t.length > 1 &&
              a.$el.find(i.prevEl).length === 1 &&
              (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on('click', a.navigation.onNextClick),
          t && t.length > 0 && t.on('click', a.navigation.onPrevClick),
          C(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }))
      },
      destroy () {
        const e = this;
          const t = e.navigation;
          const a = t.$nextEl;
          const i = t.$prevEl
        a &&
          a.length &&
          (a.off('click', e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off('click', e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass))
      },
    };
    const Z = {
      update () {
        const e = this;
          const t = e.rtl;
          const a = e.params.pagination
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          e.pagination.$el.length !== 0
        ) {
          let i;
            const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length;
            const r = e.pagination.$el;
            const n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && e.params.paginationType !== 'bullets' && (i = n + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            a.type === 'bullets' &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            let l;
              let o;
              let d;
              const p = e.pagination.bullets
            if (
              (a.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                r.css(
                  e.isHorizontal() ? 'width' : 'height',
                  e.pagination.bulletSize * (a.dynamicMainBullets + 4) + 'px'
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = i - e.pagination.dynamicBulletIndex),
                (d =
                  ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              p.removeClass(
                a.bulletActiveClass +
                  ' ' +
                  a.bulletActiveClass +
                  '-next ' +
                  a.bulletActiveClass +
                  '-next-next ' +
                  a.bulletActiveClass +
                  '-prev ' +
                  a.bulletActiveClass +
                  '-prev-prev ' +
                  a.bulletActiveClass +
                  '-main'
              ),
              r.length > 1)
            )
              p.each(function (e) {
                const t = m(e);
                  const s = t.index()
                s === i && t.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (s >= l &&
                      s <= o &&
                      t.addClass(a.bulletActiveClass + '-main'),
                    s === l &&
                      t
                        .prev()
                        .addClass(a.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(a.bulletActiveClass + '-prev-prev'),
                    s === o &&
                      t
                        .next()
                        .addClass(a.bulletActiveClass + '-next')
                        .next()
                        .addClass(a.bulletActiveClass + '-next-next'))
              })
            else {
              const c = p.eq(i);
                const u = c.index()
              if ((c.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)
                  p.eq(f).addClass(a.bulletActiveClass + '-main')
                if (e.params.loop)
                  if (u >= p.length - a.dynamicMainBullets) {
                    for (let g = a.dynamicMainBullets; g >= 0; g -= 1)
                      p.eq(p.length - g).addClass(a.bulletActiveClass + '-main')
                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + '-prev'
                    )
                  } else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(a.bulletActiveClass + '-prev-prev'),
                      v
                        .next()
                        .addClass(a.bulletActiveClass + '-next')
                        .next()
                        .addClass(a.bulletActiveClass + '-next-next')
                else
                  h
                    .prev()
                    .addClass(a.bulletActiveClass + '-prev')
                    .prev()
                    .addClass(a.bulletActiveClass + '-prev-prev'),
                    v
                      .next()
                      .addClass(a.bulletActiveClass + '-next')
                      .next()
                      .addClass(a.bulletActiveClass + '-next-next')
              }
            }
            if (a.dynamicBullets) {
              const b = Math.min(p.length, a.dynamicMainBullets + 4);
                const w =
                  (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize;
                const y = t ? 'right' : 'left'
              p.css(e.isHorizontal() ? y : 'top', w + 'px')
            }
          }
          if (
            (a.type === 'fraction' &&
              (r
                .find('.' + a.currentClass)
                .text(a.formatFractionCurrent(i + 1)),
              r.find('.' + a.totalClass).text(a.formatFractionTotal(n))),
            a.type === 'progressbar')
          ) {
            let E
            E = a.progressbarOpposite
              ? e.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : e.isHorizontal()
              ? 'horizontal'
              : 'vertical'
            const x = (i + 1) / n;
              let T = 1;
              let S = 1
            E === 'horizontal' ? (T = x) : (S = x),
              r
                .find('.' + a.progressbarFillClass)
                .transform(
                  'translate3d(0,0,0) scaleX(' + T + ') scaleY(' + S + ')'
                )
                .transition(e.params.speed)
          }
          a.type === 'custom' && a.renderCustom
            ? (r.html(a.renderCustom(e, i + 1, n)),
              e.emit('paginationRender', r[0]))
            : e.emit('paginationUpdate', r[0]),
            r[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](a.lockClass)
        }
      },
      render () {
        const e = this;
          const t = e.params.pagination
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          e.pagination.$el.length !== 0
        ) {
          const a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length;
            const i = e.pagination.$el;
            let s = ''
          if (t.type === 'bullets') {
            let r = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length
            e.params.freeMode && !e.params.loop && r > a && (r = a)
            for (let n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    '<' +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    '>')
            i.html(s),
              (e.pagination.bullets = i.find(
                '.' + t.bulletClass.replace(/ /g, '.')
              ))
          }
          t.type === 'fraction' &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            t.type === 'progressbar' &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            t.type !== 'custom' &&
              e.emit('paginationRender', e.pagination.$el[0])
        }
      },
      init () {
        const e = this;
          const t = e.params.pagination
        if (t.el) {
          let a = m(t.el)
          a.length !== 0 &&
            (e.params.uniqueNavElements &&
              typeof t.el === 'string' &&
              a.length > 1 &&
              (a = e.$el.find(t.el)),
            t.type === 'bullets' && t.clickable && a.addClass(t.clickableClass),
            a.addClass(t.modifierClass + t.type),
            t.type === 'bullets' &&
              t.dynamicBullets &&
              (a.addClass('' + t.modifierClass + t.type + '-dynamic'),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            t.type === 'progressbar' &&
              t.progressbarOpposite &&
              a.addClass(t.progressbarOppositeClass),
            t.clickable &&
              a.on(
                'click',
                '.' + t.bulletClass.replace(/ /g, '.'),
                function (t) {
                  t.preventDefault()
                  let a = m(this).index() * e.params.slidesPerGroup
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a)
                }
              ),
            C(e.pagination, { $el: a, el: a[0] }))
        }
      },
      destroy () {
        const e = this;
          const t = e.params.pagination
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          e.pagination.$el.length !== 0
        ) {
          const a = e.pagination.$el
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable &&
              a.off('click', '.' + t.bulletClass.replace(/ /g, '.'))
        }
      },
    };
    const J = {
      setTranslate () {
        const e = this
        if (e.params.scrollbar.el && e.scrollbar.el) {
          const t = e.scrollbar;
            const a = e.rtlTranslate;
            const i = e.progress;
            const s = t.dragSize;
            const r = t.trackSize;
            const n = t.$dragEl;
            const l = t.$el;
            const o = e.params.scrollbar;
            let d = s;
            let p = (r - s) * i
          a
            ? (p = -p) > 0
              ? ((d = s - p), (p = 0))
              : -p + s > r && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : p + s > r && (d = r - p),
            e.isHorizontal()
              ? (n.transform('translate3d(' + p + 'px, 0, 0)'),
                (n[0].style.width = d + 'px'))
              : (n.transform('translate3d(0px, ' + p + 'px, 0)'),
                (n[0].style.height = d + 'px')),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                ;(l[0].style.opacity = 0), l.transition(400)
              }, 1e3)))
        }
      },
      setTransition (e) {
        const t = this
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e)
      },
      updateSize () {
        const e = this
        if (e.params.scrollbar.el && e.scrollbar.el) {
          const t = e.scrollbar;
            const a = t.$dragEl;
            const i = t.$el
          ;(a[0].style.width = ''), (a[0].style.height = '')
          let s;
            const r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight;
            const n = e.size / e.virtualSize;
            const l = n * (r / e.size)
          ;(s =
            e.params.scrollbar.dragSize === 'auto'
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + 'px')
              : (a[0].style.height = s + 'px'),
            (i[0].style.display = n >= 1 ? 'none' : ''),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            C(t, { trackSize: r, divider: n, moveDivider: l, dragSize: s }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](e.params.scrollbar.lockClass)
        }
      },
      getPointerPosition (e) {
        return this.isHorizontal()
          ? e.type === 'touchstart' || e.type === 'touchmove'
            ? e.targetTouches[0].clientX
            : e.clientX
          : e.type === 'touchstart' || e.type === 'touchmove'
          ? e.targetTouches[0].clientY
          : e.clientY
      },
      setDragPosition (e) {
        let t;
          const a = this;
          const i = a.scrollbar;
          const s = a.rtlTranslate;
          const r = i.$el;
          const n = i.dragSize;
          const l = i.trackSize;
          const o = i.dragStartPos
        ;(t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? 'left' : 'top'] -
            (o !== null ? o : n / 2)) /
          (l - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t)
        const d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t
        a.updateProgress(d),
          a.setTranslate(d),
          a.updateActiveIndex(),
          a.updateSlidesClasses()
      },
      onDragStart (e) {
        const t = this;
          const a = t.params.scrollbar;
          const i = t.scrollbar;
          const s = t.$wrapperEl;
          const r = i.$el;
          const n = i.$dragEl
        ;(t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === n[0] || e.target === n
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css('opacity', 1),
          t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
          t.emit('scrollbarDragStart', e)
      },
      onDragMove (e) {
        const t = this;
          const a = t.scrollbar;
          const i = t.$wrapperEl;
          const s = a.$el;
          const r = a.$dragEl
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit('scrollbarDragMove', e))
      },
      onDragEnd (e) {
        const t = this;
          const a = t.params.scrollbar;
          const i = t.scrollbar;
          const s = t.$wrapperEl;
          const r = i.$el
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = E(function () {
              r.css('opacity', 0), r.transition(400)
            }, 1e3))),
          t.emit('scrollbarDragEnd', e),
          a.snapOnRelease && t.slideToClosest())
      },
      enableDraggable () {
        const e = this
        if (e.params.scrollbar.el) {
          const t = r();
            const a = e.scrollbar;
            const i = e.touchEventsTouch;
            const s = e.touchEventsDesktop;
            const n = e.params;
            const l = e.support;
            const o = a.$el[0];
            const d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            };
            const p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            }
          o &&
            (l.touch
              ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d),
                o.addEventListener(i.move, e.scrollbar.onDragMove, d),
                o.addEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.addEventListener(s.start, e.scrollbar.onDragStart, d),
                t.addEventListener(s.move, e.scrollbar.onDragMove, d),
                t.addEventListener(s.end, e.scrollbar.onDragEnd, p)))
        }
      },
      disableDraggable () {
        const e = this
        if (e.params.scrollbar.el) {
          const t = r();
            const a = e.scrollbar;
            const i = e.touchEventsTouch;
            const s = e.touchEventsDesktop;
            const n = e.params;
            const l = e.support;
            const o = a.$el[0];
            const d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            };
            const p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            }
          o &&
            (l.touch
              ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d),
                o.removeEventListener(i.move, e.scrollbar.onDragMove, d),
                o.removeEventListener(i.end, e.scrollbar.onDragEnd, p))
              : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d),
                t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
                t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)))
        }
      },
      init () {
        const e = this
        if (e.params.scrollbar.el) {
          const t = e.scrollbar;
            const a = e.$el;
            const i = e.params.scrollbar;
            let s = m(i.el)
          e.params.uniqueNavElements &&
            typeof i.el === 'string' &&
            s.length > 1 &&
            a.find(i.el).length === 1 &&
            (s = a.find(i.el))
          let r = s.find('.' + e.params.scrollbar.dragClass)
          r.length === 0 &&
            ((r = m(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            C(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable()
        }
      },
      destroy () {
        this.scrollbar.disableDraggable()
      },
    };
    const Q = {
      setTransform (e, t) {
        const a = this.rtl;
          const i = m(e);
          const s = a ? -1 : 1;
          const r = i.attr('data-swiper-parallax') || '0';
          let n = i.attr('data-swiper-parallax-x');
          let l = i.attr('data-swiper-parallax-y');
          const o = i.attr('data-swiper-parallax-scale');
          const d = i.attr('data-swiper-parallax-opacity')
        if (
          (n || l
            ? ((n = n || '0'), (l = l || '0'))
            : this.isHorizontal()
            ? ((n = r), (l = '0'))
            : ((l = r), (n = '0')),
          (n =
            n.includes('%')
              ? parseInt(n, 10) * t * s + '%'
              : n * t * s + 'px'),
          (l = l.includes('%') ? parseInt(l, 10) * t + '%' : l * t + 'px'),
          d != null)
        ) {
          const p = d - (d - 1) * (1 - Math.abs(t))
          i[0].style.opacity = p
        }
        if (o == null) i.transform('translate3d(' + n + ', ' + l + ', 0px)')
        else {
          const c = o - (o - 1) * (1 - Math.abs(t))
          i.transform('translate3d(' + n + ', ' + l + ', 0px) scale(' + c + ')')
        }
      },
      setTranslate () {
        const e = this;
          const t = e.$el;
          const a = e.slides;
          const i = e.progress;
          const s = e.snapGrid
        t
          .children(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
          )
          .each(function (t) {
            e.parallax.setTransform(t, i)
          }),
          a.each(function (t, a) {
            let r = t.progress
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== 'auto' &&
              (r += Math.ceil(a / 2) - i * (s.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r)
                })
          })
      },
      setTransition (e) {
        void 0 === e && (e = this.params.speed)
        this.$el
          .find(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
          )
          .each(function (t) {
            const a = m(t);
              let i = parseInt(a.attr('data-swiper-parallax-duration'), 10) || e
            e === 0 && (i = 0), a.transition(i)
          })
      },
    };
    var ee = {
      getDistanceBetweenTouches (e) {
        if (e.targetTouches.length < 2) return 1
        const t = e.targetTouches[0].pageX;
          const a = e.targetTouches[0].pageY;
          const i = e.targetTouches[1].pageX;
          const s = e.targetTouches[1].pageY
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
      },
      onGestureStart (e) {
        const t = this;
          const a = t.support;
          const i = t.params.zoom;
          const s = t.zoom;
          const r = s.gesture
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
        ) {
          if (
            e.type !== 'touchstart' ||
            (e.type === 'touchstart' && e.targetTouches.length < 2)
          )
            return
          ;(s.fakeGestureTouched = !0),
            (r.scaleStart = ee.getDistanceBetweenTouches(e))
        }
        ;(r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = m(e.target).closest('.' + t.params.slideClass)),
        r.$slideEl.length === 0 && (r.$slideEl = t.slides.eq(t.activeIndex)),
        (r.$imageEl = r.$slideEl.find(
          'img, svg, canvas, picture, .swiper-zoom-target'
        )),
        (r.$imageWrapEl = r.$imageEl.parent('.' + i.containerClass)),
        (r.maxRatio = r.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
        r.$imageWrapEl.length !== 0)
          ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (r.$imageEl = void 0)
      },
      onGestureChange (e) {
        const t = this;
          const a = t.support;
          const i = t.params.zoom;
          const s = t.zoom;
          const r = s.gesture
        if (!a.gestures) {
          if (
            e.type !== 'touchmove' ||
            (e.type === 'touchmove' && e.targetTouches.length < 2)
          )
            return
          ;(s.fakeGestureMoved = !0),
            (r.scaleMove = ee.getDistanceBetweenTouches(e))
        }
        r.$imageEl && r.$imageEl.length !== 0
          ? (a.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
            s.scale > r.maxRatio &&
              (s.scale =
                r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            r.$imageEl.transform('translate3d(0,0,0) scale(' + s.scale + ')'))
          : e.type === 'gesturechange' && s.onGestureStart(e)
      },
      onGestureEnd (e) {
        const t = this;
          const a = t.device;
          const i = t.support;
          const s = t.params.zoom;
          const r = t.zoom;
          const n = r.gesture
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return
          if (
            e.type !== 'touchend' ||
            (e.type === 'touchend' && e.changedTouches.length < 2 && !a.android)
          )
            return
          ;(r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1)
        }
        n.$imageEl &&
          n.$imageEl.length !== 0 &&
          ((r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
          n.$imageEl
            .transition(t.params.speed)
            .transform('translate3d(0,0,0) scale(' + r.scale + ')'),
          (r.currentScale = r.scale),
          (r.isScaling = !1),
          r.scale === 1 && (n.$slideEl = void 0))
      },
      onTouchStart (e) {
        const t = this.device;
          const a = this.zoom;
          const i = a.gesture;
          const s = a.image
        i.$imageEl &&
          i.$imageEl.length !== 0 &&
          (s.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY)))
      },
      onTouchMove (e) {
        const t = this;
          const a = t.zoom;
          const i = a.gesture;
          const s = a.image;
          const r = a.velocity
        if (
          i.$imageEl &&
          i.$imageEl.length !== 0 &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], 'x') || 0),
            (s.startY = T(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)))
          const n = s.width * a.scale;
            const l = s.height * a.scale
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1)
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1)
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                'translate3d(' + s.currentX + 'px, ' + s.currentY + 'px,0)'
              )
          }
        }
      },
      onTouchEnd () {
        const e = this.zoom;
          const t = e.gesture;
          const a = e.image;
          const i = e.velocity
        if (t.$imageEl && t.$imageEl.length !== 0) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1)
          ;(a.isTouched = !1), (a.isMoved = !1)
          let s = 300;
            let r = 300;
            const n = i.x * s;
            const l = a.currentX + n;
            const o = i.y * r;
            const d = a.currentY + o
          i.x !== 0 && (s = Math.abs((l - a.currentX) / i.x)),
            i.y !== 0 && (r = Math.abs((d - a.currentY) / i.y))
          const p = Math.max(s, r)
          ;(a.currentX = l), (a.currentY = d)
          const c = a.width * e.scale;
            const u = a.height * e.scale
          ;(a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                'translate3d(' + a.currentX + 'px, ' + a.currentY + 'px,0)'
              )
        }
      },
      onTransitionEnd () {
        const e = this;
          const t = e.zoom;
          const a = t.gesture
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          a.$imageWrapEl && a.$imageWrapEl.transform('translate3d(0,0,0)'),
          (t.scale = 1),
          (t.currentScale = 1),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0))
      },
      toggle (e) {
        const t = this.zoom
        t.scale && t.scale !== 1 ? t.out() : t.in(e)
      },
      in (e) {
        let t;
          let a;
          let i;
          let s;
          let r;
          let n;
          let o;
          let d;
          let p;
          let c;
          let u;
          let h;
          let v;
          let f;
          let m;
          let g;
          const b = this;
          const w = l();
          const y = b.zoom;
          const E = b.params.zoom;
          const x = y.gesture;
          const T = y.image
        ;(x.$slideEl ||
          (b.params.virtual && b.params.virtual.enabled && b.virtual
            ? (x.$slideEl = b.$wrapperEl.children(
                '.' + b.params.slideActiveClass
              ))
            : (x.$slideEl = b.slides.eq(b.activeIndex)),
          (x.$imageEl = x.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target'
          )),
          (x.$imageWrapEl = x.$imageEl.parent('.' + E.containerClass))),
        x.$imageEl && x.$imageEl.length !== 0) &&
          (x.$slideEl.addClass('' + E.zoomedSlideClass),
          void 0 === T.touchesStart.x && e
            ? ((t =
                e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX),
              (a = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY))
            : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
          (y.scale = x.$imageWrapEl.attr('data-swiper-zoom') || E.maxRatio),
          (y.currentScale =
            x.$imageWrapEl.attr('data-swiper-zoom') || E.maxRatio),
          e
            ? ((m = x.$slideEl[0].offsetWidth),
              (g = x.$slideEl[0].offsetHeight),
              (i = x.$slideEl.offset().left + w.scrollX + m / 2 - t),
              (s = x.$slideEl.offset().top + w.scrollY + g / 2 - a),
              (o = x.$imageEl[0].offsetWidth),
              (d = x.$imageEl[0].offsetHeight),
              (p = o * y.scale),
              (c = d * y.scale),
              (v = -(u = Math.min(m / 2 - p / 2, 0))),
              (f = -(h = Math.min(g / 2 - c / 2, 0))),
              (r = i * y.scale) < u && (r = u),
              r > v && (r = v),
              (n = s * y.scale) < h && (n = h),
              n > f && (n = f))
            : ((r = 0), (n = 0)),
          x.$imageWrapEl
            .transition(300)
            .transform('translate3d(' + r + 'px, ' + n + 'px,0)'),
          x.$imageEl
            .transition(300)
            .transform('translate3d(0,0,0) scale(' + y.scale + ')'))
      },
      out () {
        const e = this;
          const t = e.zoom;
          const a = e.params.zoom;
          const i = t.gesture
        i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (i.$slideEl = e.$wrapperEl.children(
                '.' + e.params.slideActiveClass
              ))
            : (i.$slideEl = e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target'
          )),
          (i.$imageWrapEl = i.$imageEl.parent('.' + a.containerClass))),
          i.$imageEl &&
            i.$imageEl.length !== 0 &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            i.$slideEl.removeClass('' + a.zoomedSlideClass),
            (i.$slideEl = void 0))
      },
      toggleGestures (e) {
        const t = this;
          const a = t.zoom;
          const i = a.slideSelector;
          const s = a.passiveListener
        t.$wrapperEl[e]('gesturestart', i, a.onGestureStart, s),
          t.$wrapperEl[e]('gesturechange', i, a.onGestureChange, s),
          t.$wrapperEl[e]('gestureend', i, a.onGestureEnd, s)
      },
      enableGestures () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures('on'))
      },
      disableGestures () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures('off'))
      },
      enable () {
        const e = this;
          const t = e.support;
          const a = e.zoom
        if (!a.enabled) {
          a.enabled = !0
          const i = !(
              e.touchEvents.start !== 'touchstart' ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            const s = !t.passiveListener || { passive: !1, capture: !0 };
            const r = '.' + e.params.slideClass
          ;(e.zoom.passiveListener = i),
            (e.zoom.slideSelector = r),
            t.gestures
              ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
              : e.touchEvents.start === 'touchstart' &&
                (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              a.onTouchMove,
              s
            )
        }
      },
      disable () {
        const e = this;
          const t = e.zoom
        if (t.enabled) {
          const a = e.support
          e.zoom.enabled = !1
          const i = !(
              e.touchEvents.start !== 'touchstart' ||
              !a.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            const s = !a.passiveListener || { passive: !1, capture: !0 };
            const r = '.' + e.params.slideClass
          a.gestures
            ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
              e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
            : e.touchEvents.start === 'touchstart' &&
              (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
              e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
              e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove,
              s
            )
        }
      },
    };
    const te = {
      loadInSlide (e, t) {
        void 0 === t && (t = !0)
        const a = this;
          const i = a.params.lazy
        if (void 0 !== e && a.slides.length !== 0) {
          const s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    '.' +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : a.slides.eq(e);
            const r = s.find(
              '.' +
                i.elementClass +
                ':not(.' +
                i.loadedClass +
                '):not(.' +
                i.loadingClass +
                ')'
            )
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]),
            r.length !== 0 &&
              r.each(function (e) {
                const r = m(e)
                r.addClass(i.loadingClass)
                const n = r.attr('data-background');
                  const l = r.attr('data-src');
                  const o = r.attr('data-srcset');
                  const d = r.attr('data-sizes');
                  const p = r.parent('picture')
                a.loadImage(r[0], l || n, o, d, !1, function () {
                  if (a != null && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (n
                        ? (r.css('background-image', 'url("' + n + '")'),
                          r.removeAttr('data-background'))
                        : (o &&
                            (r.attr('srcset', o), r.removeAttr('data-srcset')),
                          d && (r.attr('sizes', d), r.removeAttr('data-sizes')),
                          p.length &&
                            p.children('source').each(function (e) {
                              const t = m(e)
                              t.attr('data-srcset') &&
                                (t.attr('srcset', t.attr('data-srcset')),
                                t.removeAttr('data-srcset'))
                            }),
                          l && (r.attr('src', l), r.removeAttr('data-src'))),
                      r.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find('.' + i.preloaderClass).remove(),
                      a.params.loop && t)
                    ) {
                      const e = s.attr('data-swiper-slide-index')
                      if (s.hasClass(a.params.slideDuplicateClass)) {
                        const c = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ')'
                        )
                        a.lazy.loadInSlide(c.index(), !1)
                      } else {
                        const u = a.$wrapperEl.children(
                          '.' +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        )
                        a.lazy.loadInSlide(u.index(), !1)
                      }
                    }
                    a.emit('lazyImageReady', s[0], r[0]),
                      a.params.autoHeight && a.updateAutoHeight()
                  }
                }),
                  a.emit('lazyImageLoad', s[0], r[0])
              })
        }
      },
      load () {
        const e = this;
          const t = e.$wrapperEl;
          const a = e.params;
          const i = e.slides;
          const s = e.activeIndex;
          const r = e.virtual && a.virtual.enabled;
          const n = a.lazy;
          let l = a.slidesPerView
        function o(e) {
          if (r) {
            if (
              t.children(
                '.' + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0
          } else if (i[e]) return !0
          return !1
        }
        function d(e) {
          return r ? m(e).attr('data-swiper-slide-index') : m(e).index()
        }
        if (
          (l === 'auto' && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children('.' + a.slideVisibleClass).each(function (t) {
            const a = r ? m(t).attr('data-swiper-slide-index') : m(t).index()
            e.lazy.loadInSlide(a)
          })
        else if (l > 1)
          for (let p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p)
        else e.lazy.loadInSlide(s)
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var c = n.loadPrevNextAmount,
                u = l,
                h = Math.min(s + u + Math.max(c, u), i.length),
                v = Math.max(s - Math.max(u, c), 0),
                f = s + l;
              f < h;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f)
            for (let g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g)
          } else {
            const b = t.children('.' + a.slideNextClass)
            b.length > 0 && e.lazy.loadInSlide(d(b))
            const w = t.children('.' + a.slidePrevClass)
            w.length > 0 && e.lazy.loadInSlide(d(w))
          }
      },
      checkInViewOnLoad () {
        const e = l();
          const t = this
        if (t && !t.destroyed) {
          const a = t.params.lazy.scrollingElement
              ? m(t.params.lazy.scrollingElement)
              : m(e);
            const i = a[0] === e;
            const s = i ? e.innerWidth : a[0].offsetWidth;
            const r = i ? e.innerHeight : a[0].offsetHeight;
            const n = t.$el.offset();
            let o = !1
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft)
          for (
            let d = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height],
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            const c = d[p]
            if (c[0] >= 0 && c[0] <= s && c[1] >= 0 && c[1] <= r) {
              if (c[0] === 0 && c[1] === 0) continue
              o = !0
            }
          }
          o
            ? (t.lazy.load(), a.off('scroll', t.lazy.checkInViewOnLoad))
            : t.lazy.scrollHandlerAttached ||
              ((t.lazy.scrollHandlerAttached = !0),
              a.on('scroll', t.lazy.checkInViewOnLoad))
        }
      },
    };
    var ae = {
      LinearSpline (e, t) {
        let a;
          let i;
          let s;
          let r;
          let n;
          const l = function (e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s)
            return a
          }
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0
          }),
          this
        )
      },
      getInterpolateFunction (e) {
        const t = this
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new ae.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new ae.LinearSpline(t.snapGrid, e.snapGrid))
      },
      setTranslate (e, t) {
        let a;
          let i;
          const s = this;
          const r = s.controller.control;
          const n = s.constructor
        function l(e) {
          const t = s.rtlTranslate ? -s.translate : s.translate
          s.params.controller.by === 'slide' &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && s.params.controller.by !== 'container') ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        if (Array.isArray(r))
          for (let o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o])
        else r instanceof n && t !== r && l(r)
      },
      setTransition (e, t) {
        let a;
          const i = this;
          const s = i.constructor;
          const r = i.controller.control
        function n(t) {
          t.setTransition(e, i),
            e !== 0 &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight()
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    i.params.controller.by === 'slide' &&
                    t.loopFix(),
                  t.transitionEnd())
              }))
        }
        if (Array.isArray(r))
          for (a = 0; a < r.length; a += 1)
            r[a] !== t && r[a] instanceof s && n(r[a])
        else r instanceof s && t !== r && n(r)
      },
    };
    const ie = {
      getRandomNumber (e) {
        void 0 === e && (e = 16)
        return 'x'.repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16)
        })
      },
      makeElFocusable (e) {
        return e.attr('tabIndex', '0'), e
      },
      makeElNotFocusable (e) {
        return e.attr('tabIndex', '-1'), e
      },
      addElRole (e, t) {
        return e.attr('role', t), e
      },
      addElRoleDescription (e, t) {
        return e.attr('aria-roledescription', t), e
      },
      addElControls (e, t) {
        return e.attr('aria-controls', t), e
      },
      addElLabel (e, t) {
        return e.attr('aria-label', t), e
      },
      addElId (e, t) {
        return e.attr('id', t), e
      },
      addElLive (e, t) {
        return e.attr('aria-live', t), e
      },
      disableEl (e) {
        return e.attr('aria-disabled', !0), e
      },
      enableEl (e) {
        return e.attr('aria-disabled', !1), e
      },
      onEnterOrSpaceKey (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          const t = this;
            const a = t.params.a11y;
            const i = m(e.target)
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is('.' + t.params.pagination.bulletClass.replace(/ /g, '.')) &&
              i[0].click()
        }
      },
      notify (e) {
        const t = this.a11y.liveRegion
        t.length !== 0 && (t.html(''), t.html(e))
      },
      updateNavigation () {
        const e = this
        if (!e.params.loop && e.navigation) {
          const t = e.navigation;
            const a = t.$nextEl;
            const i = t.$prevEl
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
              a.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)))
        }
      },
      updatePagination () {
        const e = this;
          const t = e.params.a11y
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a) {
            const i = m(a)
            e.a11y.makeElFocusable(i),
              e.params.pagination.renderBullet ||
                (e.a11y.addElRole(i, 'button'),
                e.a11y.addElLabel(
                  i,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    i.index() + 1
                  )
                ))
          })
      },
      init () {
        const e = this;
          const t = e.params.a11y
        e.$el.append(e.a11y.liveRegion)
        const a = e.$el
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(a, t.containerMessage)
        let i;
          let s;
          let r;
          const n = e.$wrapperEl;
          const l = n.attr('id') || 'swiper-wrapper-' + e.a11y.getRandomNumber(16)
        e.a11y.addElId(n, l),
          (i =
            e.params.autoplay && e.params.autoplay.enabled ? 'off' : 'polite'),
          e.a11y.addElLive(n, i),
          t.itemRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
            ),
          e.a11y.addElRole(m(e.slides), 'group'),
          e.slides.each(function (a) {
            const i = m(a);
              const s = t.slideLabelMessage
                .replace(/\{\{index\}\}/, i.index() + 1)
                .replace(/\{\{slidesLength\}\}/, e.slides.length)
            e.a11y.addElLabel(i, s)
          }),
          e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
          s &&
            s.length &&
            (e.a11y.makeElFocusable(s),
            s[0].tagName !== 'BUTTON' &&
              (e.a11y.addElRole(s, 'button'),
              s.on('keydown', e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(s, t.nextSlideMessage),
            e.a11y.addElControls(s, l)),
          r &&
            r.length &&
            (e.a11y.makeElFocusable(r),
            r[0].tagName !== 'BUTTON' &&
              (e.a11y.addElRole(r, 'button'),
              r.on('keydown', e.a11y.onEnterOrSpaceKey)),
            e.a11y.addElLabel(r, t.prevSlideMessage),
            e.a11y.addElControls(r, l)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              'keydown',
              '.' + e.params.pagination.bulletClass.replace(/ /g, '.'),
              e.a11y.onEnterOrSpaceKey
            )
      },
      destroy () {
        let e;
          let t;
          const a = this
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off('keydown', a.a11y.onEnterOrSpaceKey),
          t && t.off('keydown', a.a11y.onEnterOrSpaceKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              'keydown',
              '.' + a.params.pagination.bulletClass.replace(/ /g, '.'),
              a.a11y.onEnterOrSpaceKey
            )
      },
    };
    var se = {
      init () {
        const e = this;
          const t = l()
        if (e.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            )
          const a = e.history
          ;(a.initialized = !0),
            (a.paths = se.getPathValues(e.params.url)),
            (a.paths.key || a.paths.value) &&
              (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                t.addEventListener('popstate', e.history.setHistoryPopState))
        }
      },
      destroy () {
        const e = l()
        this.params.history.replaceState ||
          e.removeEventListener('popstate', this.history.setHistoryPopState)
      },
      setHistoryPopState () {
        const e = this
        ;(e.history.paths = se.getPathValues(e.params.url)),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
      },
      getPathValues (e) {
        const t = l();
          const a = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split('/')
            .filter(function (e) {
              return e !== ''
            });
          const i = a.length
        return { key: a[i - 2], value: a[i - 1] }
      },
      setHistory (e, t) {
        const a = this;
          const i = l()
        if (a.history.initialized && a.params.history.enabled) {
          let s
          s = a.params.url ? new URL(a.params.url) : i.location
          const r = a.slides.eq(t);
            let n = se.slugify(r.attr('data-history'))
          s.pathname.includes(e) || (n = e + '/' + n)
          const o = i.history.state
          ;(o && o.value === n) ||
            (a.params.history.replaceState
              ? i.history.replaceState({ value: n }, null, n)
              : i.history.pushState({ value: n }, null, n))
        }
      },
      slugify (e) {
        return e
          .toString()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')
      },
      scrollToSlide (e, t, a) {
        const i = this
        if (t)
          for (let s = 0, r = i.slides.length; s < r; s += 1) {
            const n = i.slides.eq(s)
            if (
              se.slugify(n.attr('data-history')) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              const l = n.index()
              i.slideTo(l, e, a)
            }
          }
        else i.slideTo(0, e, a)
      },
    };
    const re = {
      onHashCange () {
        const e = this;
          const t = r()
        e.emit('hashChange')
        const a = t.location.hash.replace('#', '')
        if (a !== e.slides.eq(e.activeIndex).attr('data-hash')) {
          const i = e.$wrapperEl
            .children('.' + e.params.slideClass + '[data-hash="' + a + '"]')
            .index()
          if (void 0 === i) return
          e.slideTo(i)
        }
      },
      setHash () {
        const e = this;
          const t = l();
          const a = r()
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              '#' + e.slides.eq(e.activeIndex).attr('data-hash') || ''
            ),
              e.emit('hashSet')
          else {
            const i = e.slides.eq(e.activeIndex);
              const s = i.attr('data-hash') || i.attr('data-history')
            ;(a.location.hash = s || ''), e.emit('hashSet')
          }
      },
      init () {
        const e = this;
          const t = r();
          const a = l()
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0
          const i = t.location.hash.replace('#', '')
          if (i)
            for (let s = 0, n = e.slides.length; s < n; s += 1) {
              const o = e.slides.eq(s)
              if (
                (o.attr('data-hash') || o.attr('data-history')) === i &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                const d = o.index()
                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0)
              }
            }
          e.params.hashNavigation.watchState &&
            m(a).on('hashchange', e.hashNavigation.onHashCange)
        }
      },
      destroy () {
        const e = l()
        this.params.hashNavigation.watchState &&
          m(e).off('hashchange', this.hashNavigation.onHashCange)
      },
    };
    const ne = {
      run () {
        const e = this;
          const t = e.slides.eq(e.activeIndex);
          let a = e.params.autoplay.delay
        t.attr('data-swiper-autoplay') &&
          (a = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            let t
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit('autoplay'))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    e.emit('autoplay'))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit('autoplay'))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit('autoplay'))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit('autoplay'))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit('autoplay')),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run()
          }, a))
      },
      start () {
        const e = this
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit('autoplayStart'),
          e.autoplay.run(),
          !0)
        )
      },
      stop () {
        const e = this
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit('autoplayStop'),
          !0)
        )
      },
      pause (e) {
        const t = this
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            e !== 0 && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  'transitionend',
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())))
      },
      onVisibilityChange () {
        const e = this;
          const t = r()
        t.visibilityState === 'hidden' &&
          e.autoplay.running &&
          e.autoplay.pause(),
          t.visibilityState === 'visible' &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1))
      },
      onTransitionEnd (e) {
        const t = this
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (t.$wrapperEl[0].removeEventListener(
            'transitionend',
            t.autoplay.onTransitionEnd
          ),
          t.$wrapperEl[0].removeEventListener(
            'webkitTransitionEnd',
            t.autoplay.onTransitionEnd
          ),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
      },
    };
    const le = {
      setTranslate () {
        for (let e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          const i = e.slides.eq(a);
            let s = -i[0].swiperSlideOffset
          e.params.virtualTranslate || (s -= e.translate)
          let r = 0
          e.isHorizontal() || ((r = s), (s = 0))
          const n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0)
          i.css({ opacity: n }).transform(
            'translate3d(' + s + 'px, ' + r + 'px, 0px)'
          )
        }
      },
      setTransition (e) {
        const t = this;
          const a = t.slides;
          const i = t.$wrapperEl
        if ((a.transition(e), t.params.virtualTranslate && e !== 0)) {
          let s = !1
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              ;(s = !0), (t.animating = !1)
              for (
                let e = ['webkitTransitionEnd', 'transitionend'], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a])
            }
          })
        }
      },
    };
    const oe = {
      setTranslate () {
        let e;
          const t = this;
          const a = t.$el;
          const i = t.$wrapperEl;
          const s = t.slides;
          const r = t.width;
          const n = t.height;
          const l = t.rtlTranslate;
          const o = t.size;
          const d = t.browser;
          const p = t.params.cubeEffect;
          const c = t.isHorizontal();
          const u = t.virtual && t.params.virtual.enabled;
          let h = 0
        p.shadow &&
          (c
            ? ((e = i.find('.swiper-cube-shadow')).length === 0 &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + 'px' }))
            : (e = a.find('.swiper-cube-shadow')).length === 0 &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)))
        for (let v = 0; v < s.length; v += 1) {
          const f = s.eq(v);
            let g = v
          u && (g = parseInt(f.attr('data-swiper-slide-index'), 10))
          let b = 90 * g;
            let w = Math.floor(b / 360)
          l && ((b = -b), (w = Math.floor(-b / 360)))
          const y = Math.max(Math.min(f[0].progress, 1), -1);
            let E = 0;
            let x = 0;
            let T = 0
          g % 4 == 0
            ? ((E = 4 * -w * o), (T = 0))
            : (g - 1) % 4 == 0
            ? ((E = 0), (T = 4 * -w * o))
            : (g - 2) % 4 == 0
            ? ((E = o + 4 * w * o), (T = o))
            : (g - 3) % 4 == 0 && ((E = -o), (T = 3 * o + 4 * o * w)),
            l && (E = -E),
            c || ((x = E), (E = 0))
          const S =
            'rotateX(' +
            (c ? 0 : -b) +
            'deg) rotateY(' +
            (c ? b : 0) +
            'deg) translate3d(' +
            E +
            'px, ' +
            x +
            'px, ' +
            T +
            'px)'
          if (
            (y <= 1 &&
              y > -1 &&
              ((h = 90 * g + 90 * y), l && (h = 90 * -g - 90 * y)),
            f.transform(S),
            p.slideShadows)
          ) {
            let C = c
                ? f.find('.swiper-slide-shadow-left')
                : f.find('.swiper-slide-shadow-top');
              let M = c
                ? f.find('.swiper-slide-shadow-right')
                : f.find('.swiper-slide-shadow-bottom')
            C.length === 0 &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (c ? 'left' : 'top') +
                  '"></div>'
              )),
              f.append(C)),
              M.length === 0 &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (c ? 'right' : 'bottom') +
                    '"></div>'
                )),
                f.append(M)),
              C.length && (C[0].style.opacity = Math.max(-y, 0)),
              M.length && (M[0].style.opacity = Math.max(y, 0))
          }
        }
        if (
          (i.css({
            '-webkit-transform-origin': '50% 50% -' + o / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + o / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + o / 2 + 'px',
            'transform-origin': '50% 50% -' + o / 2 + 'px',
          }),
          p.shadow)
        )
          if (c)
            e.transform(
              'translate3d(0px, ' +
                (r / 2 + p.shadowOffset) +
                'px, ' +
                -r / 2 +
                'px) rotateX(90deg) rotateZ(0deg) scale(' +
                p.shadowScale +
                ')'
            )
          else {
            const z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90);
              const P =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2);
              const k = p.shadowScale;
              const L = p.shadowScale / P;
              const $ = p.shadowOffset
            e.transform(
              'scale3d(' +
                k +
                ', 1, ' +
                L +
                ') translate3d(0px, ' +
                (n / 2 + $) +
                'px, ' +
                -n / 2 / L +
                'px) rotateX(-90deg)'
            )
          }
        const I = d.isSafari || d.isWebView ? -o / 2 : 0
        i.transform(
          'translate3d(0px,0,' +
            I +
            'px) rotateX(' +
            (t.isHorizontal() ? 0 : h) +
            'deg) rotateY(' +
            (t.isHorizontal() ? -h : 0) +
            'deg)'
        )
      },
      setTransition (e) {
        const t = this;
          const a = t.$el
        t.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find('.swiper-cube-shadow').transition(e)
      },
    };
    const de = {
      setTranslate () {
        for (
          let e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          const s = t.eq(i);
            let r = s[0].progress
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1))
          let n = -180 * r;
            let l = 0;
            let o = -s[0].swiperSlideOffset;
            let d = 0
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = o), (o = 0), (l = -n), (n = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            let p = e.isHorizontal()
                ? s.find('.swiper-slide-shadow-left')
                : s.find('.swiper-slide-shadow-top');
              let c = e.isHorizontal()
                ? s.find('.swiper-slide-shadow-right')
                : s.find('.swiper-slide-shadow-bottom')
            p.length === 0 &&
              ((p = m(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? 'left' : 'top') +
                  '"></div>'
              )),
              s.append(p)),
              c.length === 0 &&
                ((c = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? 'right' : 'bottom') +
                    '"></div>'
                )),
                s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0))
          }
          s.transform(
            'translate3d(' +
              o +
              'px, ' +
              d +
              'px, 0px) rotateX(' +
              l +
              'deg) rotateY(' +
              n +
              'deg)'
          )
        }
      },
      setTransition (e) {
        const t = this;
          const a = t.slides;
          const i = t.activeIndex;
          const s = t.$wrapperEl
        if (
          (a
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
          t.params.virtualTranslate && e !== 0)
        ) {
          let r = !1
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              ;(r = !0), (t.animating = !1)
              for (
                let e = ['webkitTransitionEnd', 'transitionend'], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a])
            }
          })
        }
      },
    };
    const pe = {
      setTranslate () {
        for (
          let e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : a / 2 - l,
            d = n ? r.rotate : -r.rotate,
            p = r.depth,
            c = 0,
            u = i.length;
          c < u;
          c += 1
        ) {
          const h = i.eq(c);
            const v = s[c];
            const f = ((o - h[0].swiperSlideOffset - v / 2) / v) * r.modifier;
            let g = n ? d * f : 0;
            let b = n ? 0 : d * f;
            let w = -p * Math.abs(f);
            let y = r.stretch
          typeof y === 'string' &&
            y.includes('%') &&
            (y = (parseFloat(r.stretch) / 100) * v)
          let E = n ? 0 : y * f;
            let x = n ? y * f : 0;
            let T = 1 - (1 - r.scale) * Math.abs(f)
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(T) < 0.001 && (T = 0)
          const S =
            'translate3d(' +
            x +
            'px,' +
            E +
            'px,' +
            w +
            'px)  rotateX(' +
            b +
            'deg) rotateY(' +
            g +
            'deg) scale(' +
            T +
            ')'
          if (
            (h.transform(S),
            (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
            r.slideShadows)
          ) {
            let C = n
                ? h.find('.swiper-slide-shadow-left')
                : h.find('.swiper-slide-shadow-top');
              let M = n
                ? h.find('.swiper-slide-shadow-right')
                : h.find('.swiper-slide-shadow-bottom')
            C.length === 0 &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (n ? 'left' : 'top') +
                  '"></div>'
              )),
              h.append(C)),
              M.length === 0 &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? 'right' : 'bottom') +
                    '"></div>'
                )),
                h.append(M)),
              C.length && (C[0].style.opacity = f > 0 ? f : 0),
              M.length && (M[0].style.opacity = -f > 0 ? -f : 0)
          }
        }
      },
      setTransition (e) {
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(e)
      },
    };
    const ce = {
      init () {
        const e = this;
          const t = e.params.thumbs
        if (e.thumbs.initialized) return !1
        e.thumbs.initialized = !0
        const a = e.constructor
        return (
          t.swiper instanceof a
            ? ((e.thumbs.swiper = t.swiper),
              C(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              C(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : S(t.swiper) &&
              ((e.thumbs.swiper = new a(
                C({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on('tap', e.thumbs.onThumbClick),
          !0
        )
      },
      onThumbClick () {
        const e = this;
          const t = e.thumbs.swiper
        if (t) {
          const a = t.clickedIndex;
            const i = t.clickedSlide
          if (
            !(
              (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              a == null
            )
          ) {
            let s
            if (
              ((s = t.params.loop
                ? parseInt(
                    m(t.clickedSlide).attr('data-swiper-slide-index'),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              let r = e.activeIndex
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex))
              const n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
                const l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index()
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n
            }
            e.slideTo(s)
          }
        }
      },
      update (e) {
        const t = this;
          const a = t.thumbs.swiper
        if (a) {
          const i =
              a.params.slidesPerView === 'auto'
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView;
            const s = t.params.thumbs.autoScrollOffset;
            const r = s && !a.params.loop
          if (t.realIndex !== a.realIndex || r) {
            let n;
              let l;
              let o = a.activeIndex
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (o = a.activeIndex))
              const d = a.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
                const p = a.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index()
              ;(n =
                void 0 === d
                  ? p
                  : void 0 === p
                  ? d
                  : p - o == o - d
                  ? o
                  : p - o < o - d
                  ? p
                  : d),
                (l = t.activeIndex > t.previousIndex ? 'next' : 'prev')
            } else l = (n = t.realIndex) > t.previousIndex ? 'next' : 'prev'
            r && (n += l === 'next' ? s : -1 * s),
              a.visibleSlidesIndexes &&
                !a.visibleSlidesIndexes.includes(n) &&
                (a.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > o && (n = n - i + 1),
                a.slideTo(n, e ? 0 : void 0))
          }
          let c = 1;
            const u = t.params.thumbs.slideThumbActiveClass
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (c = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (c = 1),
            (c = Math.floor(c)),
            a.slides.removeClass(u),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (let h = 0; h < c; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                )
                .addClass(u)
          else
            for (let v = 0; v < c; v += 1)
              a.slides.eq(t.realIndex + v).addClass(u)
        }
      },
    };
    const ue = [
      _,
      j,
      {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: U.enable,
              disable: U.disable,
              handle: U.handle,
              handleMouseEnter: U.handleMouseEnter,
              handleMouseLeave: U.handleMouseLeave,
              animateSlider: U.animateSlider,
              releaseScroll: U.releaseScroll,
            },
          })
        },
        on: {
          init (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable()
          },
          destroy (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable()
          },
        },
      },
      {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        },
        create () {
          M(this, { navigation: t({}, K) })
        },
        on: {
          init (e) {
            e.navigation.init(), e.navigation.update()
          },
          toEdge (e) {
            e.navigation.update()
          },
          fromEdge (e) {
            e.navigation.update()
          },
          destroy (e) {
            e.navigation.destroy()
          },
          click (e, t) {
            const a = e.navigation;
              const i = a.$nextEl;
              const s = a.$prevEl;
              const r = t.target
            if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === r || e.pagination.el.contains(r))
              )
                return
              let n
              i
                ? (n = i.hasClass(e.params.navigation.hiddenClass))
                : s && (n = s.hasClass(e.params.navigation.hiddenClass)),
                !0 === n ? e.emit('navigationShow') : e.emit('navigationHide'),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass)
            }
          },
        },
      },
      {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent (e) {
              return e
            },
            formatFractionTotal (e) {
              return e
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Z) })
        },
        on: {
          init (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update()
          },
          activeIndexChange (e) {
            ;(e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
          },
          snapIndexChange (e) {
            e.params.loop || e.pagination.update()
          },
          slidesLengthChange (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update())
          },
          snapGridLengthChange (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update())
          },
          destroy (e) {
            e.pagination.destroy()
          },
          click (e, t) {
            const a = t.target
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit('paginationShow')
                : e.emit('paginationHide'),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
            }
          },
        },
      },
      {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              J
            ),
          })
        },
        on: {
          init (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate()
          },
          update (e) {
            e.scrollbar.updateSize()
          },
          resize (e) {
            e.scrollbar.updateSize()
          },
          observerUpdate (e) {
            e.scrollbar.updateSize()
          },
          setTranslate (e) {
            e.scrollbar.setTranslate()
          },
          setTransition (e, t) {
            e.scrollbar.setTransition(t)
          },
          destroy (e) {
            e.scrollbar.destroy()
          },
        },
      },
      {
        name: 'parallax',
        params: { parallax: { enabled: !1 } },
        create () {
          M(this, { parallax: t({}, Q) })
        },
        on: {
          beforeInit (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0))
          },
          init (e) {
            e.params.parallax.enabled && e.parallax.setTranslate()
          },
          setTranslate (e) {
            e.params.parallax.enabled && e.parallax.setTranslate()
          },
          setTransition (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t)
          },
        },
      },
      {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create () {
          const e = this
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              ee
            ),
          })
          let a = 1
          Object.defineProperty(e.zoom, 'scale', {
            get () {
              return a
            },
            set (t) {
              if (a !== t) {
                const i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0;
                  const s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0
                e.emit('zoomChange', t, i, s)
              }
              a = t
            },
          })
        },
        on: {
          init (e) {
            e.params.zoom.enabled && e.zoom.enable()
          },
          destroy (e) {
            e.zoom.disable()
          },
          touchStart (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t)
          },
          touchEnd (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t)
          },
          doubleTap (e, t) {
            !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t)
          },
          transitionEnd (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
          },
          slideChange (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd()
          },
        },
      },
      {
        name: 'lazy',
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader',
          },
        },
        create () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, te) })
        },
        on: {
          beforeInit (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1)
          },
          init (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              e.params.initialSlide === 0 &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load())
          },
          scroll (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
          },
          'scrollbarDragMove resize _freeModeNoMomentumRelease' (e) {
            e.params.lazy.enabled && e.lazy.load()
          },
          transitionStart (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load()
          },
          transitionEnd (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load()
          },
          slideChange (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
          },
        },
      },
      {
        name: 'controller',
        params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
        create () {
          M(this, {
            controller: t({ control: this.params.controller.control }, ae),
          })
        },
        on: {
          update (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          resize (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          observerUpdate (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          setTranslate (e, t, a) {
            e.controller.control && e.controller.setTranslate(t, a)
          },
          setTransition (e, t, a) {
            e.controller.control && e.controller.setTransition(t, a)
          },
        },
      },
      {
        name: 'a11y',
        params: {
          a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
          },
        },
        create () {
          M(this, {
            a11y: t({}, ie, {
              liveRegion: m(
                '<span class="' +
                  this.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            }),
          })
        },
        on: {
          afterInit (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
          },
          toEdge (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation()
          },
          fromEdge (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation()
          },
          paginationUpdate (e) {
            e.params.a11y.enabled && e.a11y.updatePagination()
          },
          destroy (e) {
            e.params.a11y.enabled && e.a11y.destroy()
          },
        },
      },
      {
        name: 'history',
        params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
        create () {
          M(this, { history: t({}, se) })
        },
        on: {
          init (e) {
            e.params.history.enabled && e.history.init()
          },
          destroy (e) {
            e.params.history.enabled && e.history.destroy()
          },
          transitionEnd (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex)
          },
          slideChange (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex)
          },
        },
      },
      {
        name: 'hash-navigation',
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create () {
          M(this, { hashNavigation: t({ initialized: !1 }, re) })
        },
        on: {
          init (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init()
          },
          destroy (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy()
          },
          transitionEnd (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash()
          },
          slideChange (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash()
          },
        },
      },
      {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create () {
          M(this, { autoplay: t({}, ne, { running: !1, paused: !1 }) })
        },
        on: {
          init (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange
              ))
          },
          beforeTransitionStart (e, t, a) {
            e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop())
          },
          sliderFirstMove (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause())
          },
          touchEnd (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run()
          },
          destroy (e) {
            e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange
              )
          },
        },
      },
      {
        name: 'effect-fade',
        params: { fadeEffect: { crossFade: !1 } },
        create () {
          M(this, { fadeEffect: t({}, le) })
        },
        on: {
          beforeInit (e) {
            if (e.params.effect === 'fade') {
              e.classNames.push(e.params.containerModifierClass + 'fade')
              const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              C(e.params, t), C(e.originalParams, t)
            }
          },
          setTranslate (e) {
            e.params.effect === 'fade' && e.fadeEffect.setTranslate()
          },
          setTransition (e, t) {
            e.params.effect === 'fade' && e.fadeEffect.setTransition(t)
          },
        },
      },
      {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create () {
          M(this, { cubeEffect: t({}, oe) })
        },
        on: {
          beforeInit (e) {
            if (e.params.effect === 'cube') {
              e.classNames.push(e.params.containerModifierClass + 'cube'),
                e.classNames.push(e.params.containerModifierClass + '3d')
              const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }
              C(e.params, t), C(e.originalParams, t)
            }
          },
          setTranslate (e) {
            e.params.effect === 'cube' && e.cubeEffect.setTranslate()
          },
          setTransition (e, t) {
            e.params.effect === 'cube' && e.cubeEffect.setTransition(t)
          },
        },
      },
      {
        name: 'effect-flip',
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create () {
          M(this, { flipEffect: t({}, de) })
        },
        on: {
          beforeInit (e) {
            if (e.params.effect === 'flip') {
              e.classNames.push(e.params.containerModifierClass + 'flip'),
                e.classNames.push(e.params.containerModifierClass + '3d')
              const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              C(e.params, t), C(e.originalParams, t)
            }
          },
          setTranslate (e) {
            e.params.effect === 'flip' && e.flipEffect.setTranslate()
          },
          setTransition (e, t) {
            e.params.effect === 'flip' && e.flipEffect.setTransition(t)
          },
        },
      },
      {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create () {
          M(this, { coverflowEffect: t({}, pe) })
        },
        on: {
          beforeInit (e) {
            e.params.effect === 'coverflow' &&
              (e.classNames.push(e.params.containerModifierClass + 'coverflow'),
              e.classNames.push(e.params.containerModifierClass + '3d'),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0))
          },
          setTranslate (e) {
            e.params.effect === 'coverflow' && e.coverflowEffect.setTranslate()
          },
          setTransition (e, t) {
            e.params.effect === 'coverflow' &&
              e.coverflowEffect.setTransition(t)
          },
        },
      },
      {
        name: 'thumbs',
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs',
          },
        },
        create () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, ce) })
        },
        on: {
          beforeInit (e) {
            const t = e.params.thumbs
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
          },
          slideChange (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          update (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          resize (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          observerUpdate (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          setTransition (e, t) {
            const a = e.thumbs.swiper
            a && a.setTransition(t)
          },
          beforeDestroy (e) {
            const t = e.thumbs.swiper
            t && e.thumbs.swiperCreated && t && t.destroy()
          },
        },
      },
    ]
  return W.use(ue), W
})
// # sourceMappingURL=swiper-bundle.min.js.map

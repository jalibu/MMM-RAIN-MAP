/*! *****************************************************************************
  mmm-rain-map
  Version 2.9.1

  A Rain Radar Map based on the Rainviewer API for the MagicMirror² platform.
  Please submit bugs at https://github.com/jalibu/MMM-RAIN-MAP/issues

  (c) Jan.Litzenburger@gmail.com
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

! function(t) {
    "use strict";

    function i(t) {
        var i = Object.create(null);
        return t && Object.keys(t).forEach((function(e) {
            if ("default" !== e) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(i, e, n.get ? n : {
                    enumerable: !0,
                    get: function() {
                        return t[e]
                    }
                })
            }
        })), i.default = t, Object.freeze(i)
    }
    var e = i(t);
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
    function n(t, i, e, n) {
        return new(e || (e = Promise))((function(o, s) {
            function a(t) {
                try {
                    h(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function r(t) {
                try {
                    h(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function h(t) {
                var i;
                t.done ? o(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                    t(i)
                }))).then(a, r)
            }
            h((n = n.apply(t, i || [])).next())
        }))
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var o = {
        exports: {}
    };
    (function(t) {
        var i = "1.9.4";

        function e(t) {
            var i, e, n, o;
            for (e = 1, n = arguments.length; e < n; e++)
                for (i in o = arguments[e]) t[i] = o[i];
            return t
        }
        var n = Object.create || function() {
            function t() {}
            return function(i) {
                return t.prototype = i, new t
            }
        }();

        function o(t, i) {
            var e = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
            var n = e.call(arguments, 2);
            return function() {
                return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
            }
        }
        var s = 0;

        function a(t) {
            return "_leaflet_id" in t || (t._leaflet_id = ++s), t._leaflet_id
        }

        function r(t, i, e) {
            var n, o, s, a;
            return a = function() {
                n = !1, o && (s.apply(e, o), o = !1)
            }, s = function() {
                n ? o = arguments : (t.apply(e, arguments), setTimeout(a, i), n = !0)
            }, s
        }

        function h(t, i, e) {
            var n = i[1],
                o = i[0],
                s = n - o;
            return t === n && e ? t : ((t - o) % s + s) % s + o
        }

        function l() {
            return !1
        }

        function u(t, i) {
            if (!1 === i) return t;
            var e = Math.pow(10, void 0 === i ? 6 : i);
            return Math.round(t * e) / e
        }

        function c(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function d(t) {
            return c(t).split(/\s+/)
        }

        function _(t, i) {
            for (var e in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? n(t.options) : {}), i) t.options[e] = i[e];
            return t.options
        }

        function p(t, i, e) {
            var n = [];
            for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
        }
        var m = /\{ *([\w_ -]+) *\}/g;

        function f(t, i) {
            return t.replace(m, (function(t, e) {
                var n = i[e];
                if (void 0 === n) throw new Error("No value provided for variable " + t);
                return "function" == typeof n && (n = n(i)), n
            }))
        }
        var g = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };

        function v(t, i) {
            for (var e = 0; e < t.length; e++)
                if (t[e] === i) return e;
            return -1
        }
        var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        function x(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }
        var w = 0;

        function b(t) {
            var i = +new Date,
                e = Math.max(0, 16 - (i - w));
            return w = i + e, window.setTimeout(t, e)
        }
        var P = window.requestAnimationFrame || x("RequestAnimationFrame") || b,
            T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function(t) {
                window.clearTimeout(t)
            };

        function M(t, i, e) {
            if (!e || P !== b) return P.call(window, o(t, i));
            t.call(i)
        }

        function z(t) {
            t && T.call(window, t)
        }
        var C = {
            __proto__: null,
            extend: e,
            create: n,
            bind: o,
            get lastId() {
                return s
            },
            stamp: a,
            throttle: r,
            wrapNum: h,
            falseFn: l,
            formatNum: u,
            trim: c,
            splitWords: d,
            setOptions: _,
            getParamString: p,
            template: f,
            isArray: g,
            indexOf: v,
            emptyImageUrl: y,
            requestFn: P,
            cancelFn: T,
            requestAnimFrame: M,
            cancelAnimFrame: z
        };

        function S() {}

        function E(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = g(t) ? t : [t];
                for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }
        S.extend = function(t) {
            var i = function() {
                    _(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                },
                o = i.__super__ = this.prototype,
                s = n(o);
            for (var a in s.constructor = i, i.prototype = s, this) Object.prototype.hasOwnProperty.call(this, a) && "prototype" !== a && "__super__" !== a && (i[a] = this[a]);
            return t.statics && e(i, t.statics), t.includes && (E(t.includes), e.apply(null, [s].concat(t.includes))), e(s, t), delete s.statics, delete s.includes, s.options && (s.options = o.options ? n(o.options) : {}, e(s.options, t.options)), s._initHooks = [], s.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var t = 0, i = s._initHooks.length; t < i; t++) s._initHooks[t].call(this)
                }
            }, i
        }, S.include = function(t) {
            var i = this.prototype.options;
            return e(this.prototype, t), t.options && (this.prototype.options = i, this.mergeOptions(t.options)), this
        }, S.mergeOptions = function(t) {
            return e(this.prototype.options, t), this
        }, S.addInitHook = function(t) {
            var i = Array.prototype.slice.call(arguments, 1),
                e = "function" == typeof t ? t : function() {
                    this[t].apply(this, i)
                };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
        };
        var Z = {
            on: function(t, i, e) {
                if ("object" == typeof t)
                    for (var n in t) this._on(n, t[n], i);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], i, e);
                return this
            },
            off: function(t, i, e) {
                if (arguments.length)
                    if ("object" == typeof t)
                        for (var n in t) this._off(n, t[n], i);
                    else {
                        t = d(t);
                        for (var o = 1 === arguments.length, s = 0, a = t.length; s < a; s++) o ? this._off(t[s]) : this._off(t[s], i, e)
                    }
                else delete this._events;
                return this
            },
            _on: function(t, i, e, n) {
                if ("function" == typeof i) {
                    if (!1 === this._listens(t, i, e)) {
                        e === this && (e = void 0);
                        var o = {
                            fn: i,
                            ctx: e
                        };
                        n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o)
                    }
                } else console.warn("wrong listener type: " + typeof i)
            },
            _off: function(t, i, e) {
                var n, o, s;
                if (this._events && (n = this._events[t]))
                    if (1 !== arguments.length)
                        if ("function" == typeof i) {
                            var a = this._listens(t, i, e);
                            if (!1 !== a) {
                                var r = n[a];
                                this._firingCount && (r.fn = l, this._events[t] = n = n.slice()), n.splice(a, 1)
                            }
                        } else console.warn("wrong listener type: " + typeof i);
                else {
                    if (this._firingCount)
                        for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                    delete this._events[t]
                }
            },
            fire: function(t, i, n) {
                if (!this.listens(t, n)) return this;
                var o = e({}, i, {
                    type: t,
                    target: this,
                    sourceTarget: i && i.sourceTarget || this
                });
                if (this._events) {
                    var s = this._events[t];
                    if (s) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var a = 0, r = s.length; a < r; a++) {
                            var h = s[a],
                                l = h.fn;
                            h.once && this.off(t, l, h.ctx), l.call(h.ctx || this, o)
                        }
                        this._firingCount--
                    }
                }
                return n && this._propagateEvent(o), this
            },
            listens: function(t, i, e, n) {
                "string" != typeof t && console.warn('"string" type argument expected');
                var o = i;
                "function" != typeof i && (n = !!i, o = void 0, e = void 0);
                var s = this._events && this._events[t];
                if (s && s.length && !1 !== this._listens(t, o, e)) return !0;
                if (n)
                    for (var a in this._eventParents)
                        if (this._eventParents[a].listens(t, i, e, n)) return !0;
                return !1
            },
            _listens: function(t, i, e) {
                if (!this._events) return !1;
                var n = this._events[t] || [];
                if (!i) return !!n.length;
                e === this && (e = void 0);
                for (var o = 0, s = n.length; o < s; o++)
                    if (n[o].fn === i && n[o].ctx === e) return o;
                return !1
            },
            once: function(t, i, e) {
                if ("object" == typeof t)
                    for (var n in t) this._on(n, t[n], i, !0);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], i, e, !0);
                return this
            },
            addEventParent: function(t) {
                return this._eventParents = this._eventParents || {}, this._eventParents[a(t)] = t, this
            },
            removeEventParent: function(t) {
                return this._eventParents && delete this._eventParents[a(t)], this
            },
            _propagateEvent: function(t) {
                for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
            }
        };
        Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
        var k = S.extend(Z);

        function A(t, i, e) {
            this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
        }
        var O = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };

        function I(t, i, e) {
            return t instanceof A ? t : g(t) ? new A(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new A(t.x, t.y) : new A(t, i, e)
        }

        function B(t, i) {
            if (t)
                for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
        }

        function D(t, i) {
            return !t || t instanceof B ? t : new B(t, i)
        }

        function R(t, i) {
            if (t)
                for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
        }

        function N(t, i) {
            return t instanceof R ? t : new R(t, i)
        }

        function F(t, i, e) {
            if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
            this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
        }

        function j(t, i, e) {
            return t instanceof F ? t : g(t) && "object" != typeof t[0] ? 3 === t.length ? new F(t[0], t[1], t[2]) : 2 === t.length ? new F(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new F(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new F(t, i, e)
        }
        A.prototype = {
            clone: function() {
                return new A(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(I(t))
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
                return this.clone()._subtract(I(t))
            },
            _subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t, this.y *= t, this
            },
            scaleBy: function(t) {
                return new A(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function(t) {
                return new A(this.x / t.x, this.y / t.y)
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.clone()._ceil()
            },
            _ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function() {
                return this.clone()._trunc()
            },
            _trunc: function() {
                return this.x = O(this.x), this.y = O(this.y), this
            },
            distanceTo: function(t) {
                var i = (t = I(t)).x - this.x,
                    e = t.y - this.y;
                return Math.sqrt(i * i + e * e)
            },
            equals: function(t) {
                return (t = I(t)).x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = I(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + u(this.x) + ", " + u(this.y) + ")"
            }
        }, B.prototype = {
            extend: function(t) {
                var i, e;
                if (!t) return this;
                if (t instanceof A || "number" == typeof t[0] || "x" in t) i = e = I(t);
                else if (i = (t = D(t)).min, e = t.max, !i || !e) return this;
                return this.min || this.max ? (this.min.x = Math.min(i.x, this.min.x), this.max.x = Math.max(e.x, this.max.x), this.min.y = Math.min(i.y, this.min.y), this.max.y = Math.max(e.y, this.max.y)) : (this.min = i.clone(), this.max = e.clone()), this
            },
            getCenter: function(t) {
                return I((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
                return I(this.min.x, this.max.y)
            },
            getTopRight: function() {
                return I(this.max.x, this.min.y)
            },
            getTopLeft: function() {
                return this.min
            },
            getBottomRight: function() {
                return this.max
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var i, e;
                return (t = "number" == typeof t[0] || t instanceof A ? I(t) : D(t)) instanceof B ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
            },
            intersects: function(t) {
                t = D(t);
                var i = this.min,
                    e = this.max,
                    n = t.min,
                    o = t.max,
                    s = o.x >= i.x && n.x <= e.x,
                    a = o.y >= i.y && n.y <= e.y;
                return s && a
            },
            overlaps: function(t) {
                t = D(t);
                var i = this.min,
                    e = this.max,
                    n = t.min,
                    o = t.max,
                    s = o.x > i.x && n.x < e.x,
                    a = o.y > i.y && n.y < e.y;
                return s && a
            },
            isValid: function() {
                return !(!this.min || !this.max)
            },
            pad: function(t) {
                var i = this.min,
                    e = this.max,
                    n = Math.abs(i.x - e.x) * t,
                    o = Math.abs(i.y - e.y) * t;
                return D(I(i.x - n, i.y - o), I(e.x + n, e.y + o))
            },
            equals: function(t) {
                return !!t && (t = D(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
            }
        }, R.prototype = {
            extend: function(t) {
                var i, e, n = this._southWest,
                    o = this._northEast;
                if (t instanceof F) i = t, e = t;
                else {
                    if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
                    if (i = t._southWest, e = t._northEast, !i || !e) return this
                }
                return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new F(i.lat, i.lng), this._northEast = new F(e.lat, e.lng)), this
            },
            pad: function(t) {
                var i = this._southWest,
                    e = this._northEast,
                    n = Math.abs(i.lat - e.lat) * t,
                    o = Math.abs(i.lng - e.lng) * t;
                return new R(new F(i.lat - n, i.lng - o), new F(e.lat + n, e.lng + o))
            },
            getCenter: function() {
                return new F((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new F(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
                return new F(this.getSouth(), this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                t = "number" == typeof t[0] || t instanceof F || "lat" in t ? j(t) : N(t);
                var i, e, n = this._southWest,
                    o = this._northEast;
                return t instanceof R ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
            },
            intersects: function(t) {
                t = N(t);
                var i = this._southWest,
                    e = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    s = o.lat >= i.lat && n.lat <= e.lat,
                    a = o.lng >= i.lng && n.lng <= e.lng;
                return s && a
            },
            overlaps: function(t) {
                t = N(t);
                var i = this._southWest,
                    e = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    s = o.lat > i.lat && n.lat < e.lat,
                    a = o.lng > i.lng && n.lng < e.lng;
                return s && a
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t, i) {
                return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
            },
            isValid: function() {
                return !(!this._southWest || !this._northEast)
            }
        }, F.prototype = {
            equals: function(t, i) {
                return !!t && (t = j(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
            },
            toString: function(t) {
                return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return U.distance(this, j(t))
            },
            wrap: function() {
                return U.wrapLatLng(this)
            },
            toBounds: function(t) {
                var i = 180 * t / 40075017,
                    e = i / Math.cos(Math.PI / 180 * this.lat);
                return N([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
            },
            clone: function() {
                return new F(this.lat, this.lng, this.alt)
            }
        };
        var H, W = {
                latLngToPoint: function(t, i) {
                    var e = this.projection.project(t),
                        n = this.scale(i);
                    return this.transformation._transform(e, n)
                },
                pointToLatLng: function(t, i) {
                    var e = this.scale(i),
                        n = this.transformation.untransform(t, e);
                    return this.projection.unproject(n)
                },
                project: function(t) {
                    return this.projection.project(t)
                },
                unproject: function(t) {
                    return this.projection.unproject(t)
                },
                scale: function(t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function(t) {
                    if (this.infinite) return null;
                    var i = this.projection.bounds,
                        e = this.scale(t);
                    return new B(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
                },
                infinite: !1,
                wrapLatLng: function(t) {
                    var i = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
                    return new F(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
                },
                wrapLatLngBounds: function(t) {
                    var i = t.getCenter(),
                        e = this.wrapLatLng(i),
                        n = i.lat - e.lat,
                        o = i.lng - e.lng;
                    if (0 === n && 0 === o) return t;
                    var s = t.getSouthWest(),
                        a = t.getNorthEast();
                    return new R(new F(s.lat - n, s.lng - o), new F(a.lat - n, a.lng - o))
                }
            },
            U = e({}, W, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function(t, i) {
                    var e = Math.PI / 180,
                        n = t.lat * e,
                        o = i.lat * e,
                        s = Math.sin((i.lat - t.lat) * e / 2),
                        a = Math.sin((i.lng - t.lng) * e / 2),
                        r = s * s + Math.cos(n) * Math.cos(o) * a * a,
                        h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
                    return this.R * h
                }
            }),
            V = 6378137,
            q = {
                R: V,
                MAX_LATITUDE: 85.0511287798,
                project: function(t) {
                    var i = Math.PI / 180,
                        e = this.MAX_LATITUDE,
                        n = Math.max(Math.min(e, t.lat), -e),
                        o = Math.sin(n * i);
                    return new A(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
                },
                unproject: function(t) {
                    var i = 180 / Math.PI;
                    return new F((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
                },
                bounds: (H = V * Math.PI, new B([-H, -H], [H, H]))
            };

        function G(t, i, e, n) {
            if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
            this._a = t, this._b = i, this._c = e, this._d = n
        }

        function K(t, i, e, n) {
            return new G(t, i, e, n)
        }
        G.prototype = {
            transform: function(t, i) {
                return this._transform(t.clone(), i)
            },
            _transform: function(t, i) {
                return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
            },
            untransform: function(t, i) {
                return i = i || 1, new A((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
            }
        };
        var Y = e({}, U, {
                code: "EPSG:3857",
                projection: q,
                transformation: function() {
                    var t = .5 / (Math.PI * q.R);
                    return K(t, .5, -t, .5)
                }()
            }),
            X = e({}, Y, {
                code: "EPSG:900913"
            });

        function J(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }

        function $(t, i) {
            var e, n, o, s, a, r, h = "";
            for (e = 0, o = t.length; e < o; e++) {
                for (n = 0, s = (a = t[e]).length; n < s; n++) h += (n ? "L" : "M") + (r = a[n]).x + " " + r.y;
                h += i ? Rt.svg ? "z" : "x" : ""
            }
            return h || "M0 0"
        }
        var Q, tt = document.documentElement.style,
            it = "ActiveXObject" in window,
            et = it && !document.addEventListener,
            nt = "msLaunchUri" in navigator && !("documentMode" in document),
            ot = Dt("webkit"),
            st = Dt("android"),
            at = Dt("android 2") || Dt("android 3"),
            rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            ht = st && Dt("Google") && rt < 537 && !("AudioNode" in window),
            lt = !!window.opera,
            ut = !nt && Dt("chrome"),
            ct = Dt("gecko") && !ot && !lt && !it,
            dt = !ut && Dt("safari"),
            _t = Dt("phantom"),
            pt = "OTransition" in tt,
            mt = 0 === navigator.platform.indexOf("Win"),
            ft = it && "transition" in tt,
            gt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !at,
            vt = "MozPerspective" in tt,
            yt = !window.L_DISABLE_3D && (ft || gt || vt) && !pt && !_t,
            xt = "undefined" != typeof orientation || Dt("mobile"),
            wt = xt && ot,
            bt = xt && gt,
            Pt = !window.PointerEvent && window.MSPointerEvent,
            Lt = !(!window.PointerEvent && !Pt),
            Tt = "ontouchstart" in window || !!window.TouchEvent,
            Mt = !window.L_NO_TOUCH && (Tt || Lt),
            zt = xt && lt,
            Ct = xt && ct,
            St = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            Et = function() {
                var t = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassiveEventSupport", l, i), window.removeEventListener("testPassiveEventSupport", l, i)
                } catch (t) {}
                return t
            }(),
            Zt = !!document.createElement("canvas").getContext,
            kt = !(!document.createElementNS || !J("svg").createSVGRect),
            At = !!kt && ((Q = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Q.firstChild && Q.firstChild.namespaceURI)),
            Ot = !kt && function() {
                try {
                    var t = document.createElement("div");
                    t.innerHTML = '<v:shape adj="1"/>';
                    var i = t.firstChild;
                    return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
                } catch (t) {
                    return !1
                }
            }(),
            It = 0 === navigator.platform.indexOf("Mac"),
            Bt = 0 === navigator.platform.indexOf("Linux");

        function Dt(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
        }
        var Rt = {
                ie: it,
                ielt9: et,
                edge: nt,
                webkit: ot,
                android: st,
                android23: at,
                androidStock: ht,
                opera: lt,
                chrome: ut,
                gecko: ct,
                safari: dt,
                phantom: _t,
                opera12: pt,
                win: mt,
                ie3d: ft,
                webkit3d: gt,
                gecko3d: vt,
                any3d: yt,
                mobile: xt,
                mobileWebkit: wt,
                mobileWebkit3d: bt,
                msPointer: Pt,
                pointer: Lt,
                touch: Mt,
                touchNative: Tt,
                mobileOpera: zt,
                mobileGecko: Ct,
                retina: St,
                passiveEvents: Et,
                canvas: Zt,
                svg: kt,
                vml: Ot,
                inlineSvg: At,
                mac: It,
                linux: Bt
            },
            Nt = Rt.msPointer ? "MSPointerDown" : "pointerdown",
            Ft = Rt.msPointer ? "MSPointerMove" : "pointermove",
            jt = Rt.msPointer ? "MSPointerUp" : "pointerup",
            Ht = Rt.msPointer ? "MSPointerCancel" : "pointercancel",
            Wt = {
                touchstart: Nt,
                touchmove: Ft,
                touchend: jt,
                touchcancel: Ht
            },
            Ut = {
                touchstart: ti,
                touchmove: Qt,
                touchend: Qt,
                touchcancel: Qt
            },
            Vt = {},
            qt = !1;

        function Gt(t, i, e) {
            return "touchstart" === i && $t(), Ut[i] ? (e = Ut[i].bind(this, e), t.addEventListener(Wt[i], e, !1), e) : (console.warn("wrong event specified:", i), l)
        }

        function Kt(t, i, e) {
            Wt[i] ? t.removeEventListener(Wt[i], e, !1) : console.warn("wrong event specified:", i)
        }

        function Yt(t) {
            Vt[t.pointerId] = t
        }

        function Xt(t) {
            Vt[t.pointerId] && (Vt[t.pointerId] = t)
        }

        function Jt(t) {
            delete Vt[t.pointerId]
        }

        function $t() {
            qt || (document.addEventListener(Nt, Yt, !0), document.addEventListener(Ft, Xt, !0), document.addEventListener(jt, Jt, !0), document.addEventListener(Ht, Jt, !0), qt = !0)
        }

        function Qt(t, i) {
            if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || "mouse")) {
                for (var e in i.touches = [], Vt) i.touches.push(Vt[e]);
                i.changedTouches = [i], t(i)
            }
        }

        function ti(t, i) {
            i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && Yi(i), Qt(t, i)
        }

        function ii(t) {
            var i, e, n = {};
            for (e in t) i = t[e], n[e] = i && i.bind ? i.bind(t) : i;
            return t = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n
        }
        var ei = 200;

        function ni(t, i) {
            t.addEventListener("dblclick", i);
            var e, n = 0;

            function o(t) {
                if (1 === t.detail) {
                    if ("mouse" !== t.pointerType && (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)) {
                        var o = Ji(t);
                        if (!o.some((function(t) {
                                return t instanceof HTMLLabelElement && t.attributes.for
                            })) || o.some((function(t) {
                                return t instanceof HTMLInputElement || t instanceof HTMLSelectElement
                            }))) {
                            var s = Date.now();
                            s - n <= ei ? 2 == ++e && i(ii(t)) : e = 1, n = s
                        }
                    }
                } else e = t.detail
            }
            return t.addEventListener("click", o), {
                dblclick: i,
                simDblclick: o
            }
        }

        function oi(t, i) {
            t.removeEventListener("dblclick", i.dblclick), t.removeEventListener("click", i.simDblclick)
        }
        var si, ai, ri, hi, li, ui = zi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            ci = zi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            di = "webkitTransition" === ci || "OTransition" === ci ? ci + "End" : "transitionend";

        function _i(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }

        function pi(t, i) {
            var e = t.style[i] || t.currentStyle && t.currentStyle[i];
            if ((!e || "auto" === e) && document.defaultView) {
                var n = document.defaultView.getComputedStyle(t, null);
                e = n ? n[i] : null
            }
            return "auto" === e ? null : e
        }

        function mi(t, i, e) {
            var n = document.createElement(t);
            return n.className = i || "", e && e.appendChild(n), n
        }

        function fi(t) {
            var i = t.parentNode;
            i && i.removeChild(t)
        }

        function gi(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }

        function vi(t) {
            var i = t.parentNode;
            i && i.lastChild !== t && i.appendChild(t)
        }

        function yi(t) {
            var i = t.parentNode;
            i && i.firstChild !== t && i.insertBefore(t, i.firstChild)
        }

        function xi(t, i) {
            if (void 0 !== t.classList) return t.classList.contains(i);
            var e = Li(t);
            return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
        }

        function wi(t, i) {
            if (void 0 !== t.classList)
                for (var e = d(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
            else if (!xi(t, i)) {
                var s = Li(t);
                Pi(t, (s ? s + " " : "") + i)
            }
        }

        function bi(t, i) {
            void 0 !== t.classList ? t.classList.remove(i) : Pi(t, c((" " + Li(t) + " ").replace(" " + i + " ", " ")))
        }

        function Pi(t, i) {
            void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
        }

        function Li(t) {
            return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
        }

        function Ti(t, i) {
            "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && Mi(t, i)
        }

        function Mi(t, i) {
            var e = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                e = t.filters.item(n)
            } catch (t) {
                if (1 === i) return
            }
            i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
        }

        function zi(t) {
            for (var i = document.documentElement.style, e = 0; e < t.length; e++)
                if (t[e] in i) return t[e];
            return !1
        }

        function Ci(t, i, e) {
            var n = i || new A(0, 0);
            t.style[ui] = (Rt.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
        }

        function Si(t, i) {
            t._leaflet_pos = i, Rt.any3d ? Ci(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
        }

        function Ei(t) {
            return t._leaflet_pos || new A(0, 0)
        }
        if ("onselectstart" in document) si = function() {
            Ni(window, "selectstart", Yi)
        }, ai = function() {
            ji(window, "selectstart", Yi)
        };
        else {
            var Zi = zi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            si = function() {
                if (Zi) {
                    var t = document.documentElement.style;
                    ri = t[Zi], t[Zi] = "none"
                }
            }, ai = function() {
                Zi && (document.documentElement.style[Zi] = ri, ri = void 0)
            }
        }

        function ki() {
            Ni(window, "dragstart", Yi)
        }

        function Ai() {
            ji(window, "dragstart", Yi)
        }

        function Oi(t) {
            for (; - 1 === t.tabIndex;) t = t.parentNode;
            t.style && (Ii(), hi = t, li = t.style.outlineStyle, t.style.outlineStyle = "none", Ni(window, "keydown", Ii))
        }

        function Ii() {
            hi && (hi.style.outlineStyle = li, hi = void 0, li = void 0, ji(window, "keydown", Ii))
        }

        function Bi(t) {
            do {
                t = t.parentNode
            } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
            return t
        }

        function Di(t) {
            var i = t.getBoundingClientRect();
            return {
                x: i.width / t.offsetWidth || 1,
                y: i.height / t.offsetHeight || 1,
                boundingClientRect: i
            }
        }
        var Ri = {
            __proto__: null,
            TRANSFORM: ui,
            TRANSITION: ci,
            TRANSITION_END: di,
            get: _i,
            getStyle: pi,
            create: mi,
            remove: fi,
            empty: gi,
            toFront: vi,
            toBack: yi,
            hasClass: xi,
            addClass: wi,
            removeClass: bi,
            setClass: Pi,
            getClass: Li,
            setOpacity: Ti,
            testProp: zi,
            setTransform: Ci,
            setPosition: Si,
            getPosition: Ei,
            get disableTextSelection() {
                return si
            },
            get enableTextSelection() {
                return ai
            },
            disableImageDrag: ki,
            enableImageDrag: Ai,
            preventOutline: Oi,
            restoreOutline: Ii,
            getSizedParentNode: Bi,
            getScale: Di
        };

        function Ni(t, i, e, n) {
            if (i && "object" == typeof i)
                for (var o in i) Ui(t, o, i[o], e);
            else
                for (var s = 0, a = (i = d(i)).length; s < a; s++) Ui(t, i[s], e, n);
            return this
        }
        var Fi = "_leaflet_events";

        function ji(t, i, e, n) {
            if (1 === arguments.length) Hi(t), delete t[Fi];
            else if (i && "object" == typeof i)
                for (var o in i) Vi(t, o, i[o], e);
            else if (i = d(i), 2 === arguments.length) Hi(t, (function(t) {
                return -1 !== v(i, t)
            }));
            else
                for (var s = 0, a = i.length; s < a; s++) Vi(t, i[s], e, n);
            return this
        }

        function Hi(t, i) {
            for (var e in t[Fi]) {
                var n = e.split(/\d/)[0];
                i && !i(n) || Vi(t, n, null, null, e)
            }
        }
        var Wi = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel"
        };

        function Ui(t, i, e, n) {
            var o = i + a(e) + (n ? "_" + a(n) : "");
            if (t[Fi] && t[Fi][o]) return this;
            var s = function(i) {
                    return e.call(n || t, i || window.event)
                },
                r = s;
            !Rt.touchNative && Rt.pointer && 0 === i.indexOf("touch") ? s = Gt(t, i, s) : Rt.touch && "dblclick" === i ? s = ni(t, s) : "addEventListener" in t ? "touchstart" === i || "touchmove" === i || "wheel" === i || "mousewheel" === i ? t.addEventListener(Wi[i] || i, s, !!Rt.passiveEvents && {
                passive: !1
            }) : "mouseenter" === i || "mouseleave" === i ? (s = function(i) {
                i = i || window.event, ie(t, i) && r(i)
            }, t.addEventListener(Wi[i], s, !1)) : t.addEventListener(i, r, !1) : t.attachEvent("on" + i, s), t[Fi] = t[Fi] || {}, t[Fi][o] = s
        }

        function Vi(t, i, e, n, o) {
            o = o || i + a(e) + (n ? "_" + a(n) : "");
            var s = t[Fi] && t[Fi][o];
            if (!s) return this;
            !Rt.touchNative && Rt.pointer && 0 === i.indexOf("touch") ? Kt(t, i, s) : Rt.touch && "dblclick" === i ? oi(t, s) : "removeEventListener" in t ? t.removeEventListener(Wi[i] || i, s, !1) : t.detachEvent("on" + i, s), t[Fi][o] = null
        }

        function qi(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this
        }

        function Gi(t) {
            return Ui(t, "wheel", qi), this
        }

        function Ki(t) {
            return Ni(t, "mousedown touchstart dblclick contextmenu", qi), t._leaflet_disable_click = !0, this
        }

        function Yi(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }

        function Xi(t) {
            return Yi(t), qi(t), this
        }

        function Ji(t) {
            if (t.composedPath) return t.composedPath();
            for (var i = [], e = t.target; e;) i.push(e), e = e.parentNode;
            return i
        }

        function $i(t, i) {
            if (!i) return new A(t.clientX, t.clientY);
            var e = Di(i),
                n = e.boundingClientRect;
            return new A((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
        }
        var Qi = Rt.linux && Rt.chrome ? window.devicePixelRatio : Rt.mac ? 3 * window.devicePixelRatio : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;

        function te(t) {
            return Rt.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Qi : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        }

        function ie(t, i) {
            var e = i.relatedTarget;
            if (!e) return !0;
            try {
                for (; e && e !== t;) e = e.parentNode
            } catch (t) {
                return !1
            }
            return e !== t
        }
        var ee = {
                __proto__: null,
                on: Ni,
                off: ji,
                stopPropagation: qi,
                disableScrollPropagation: Gi,
                disableClickPropagation: Ki,
                preventDefault: Yi,
                stop: Xi,
                getPropagationPath: Ji,
                getMousePosition: $i,
                getWheelDelta: te,
                isExternalTarget: ie,
                addListener: Ni,
                removeListener: ji
            },
            ne = k.extend({
                run: function(t, i, e, n) {
                    this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Ei(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(!0), this._complete())
                },
                _animate: function() {
                    this._animId = M(this._animate, this), this._step()
                },
                _step: function(t) {
                    var i = +new Date - this._startTime,
                        e = 1e3 * this._duration;
                    i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
                },
                _runFrame: function(t, i) {
                    var e = this._startPos.add(this._offset.multiplyBy(t));
                    i && e._round(), Si(this._el, e), this.fire("step")
                },
                _complete: function() {
                    z(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function(t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower)
                }
            }),
            oe = k.extend({
                options: {
                    crs: Y,
                    center: void 0,
                    zoom: void 0,
                    minZoom: void 0,
                    maxZoom: void 0,
                    layers: [],
                    maxBounds: void 0,
                    renderer: void 0,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0
                },
                initialize: function(t, i) {
                    i = _(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = o(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(j(i.center), i.zoom, {
                        reset: !0
                    }), this.callInitHooks(), this._zoomAnimated = ci && Rt.any3d && !Rt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ni(this._proxy, di, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                },
                setView: function(t, i, n) {
                    return i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(j(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({
                        animate: n.animate
                    }, n.zoom), n.pan = e({
                        animate: n.animate,
                        duration: n.duration
                    }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i, n.pan && n.pan.noMoveStart), this)
                },
                setZoom: function(t, i) {
                    return this._loaded ? this.setView(this.getCenter(), t, {
                        zoom: i
                    }) : (this._zoom = t, this)
                },
                zoomIn: function(t, i) {
                    return t = t || (Rt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
                },
                zoomOut: function(t, i) {
                    return t = t || (Rt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
                },
                setZoomAround: function(t, i, e) {
                    var n = this.getZoomScale(i),
                        o = this.getSize().divideBy(2),
                        s = (t instanceof A ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                        a = this.containerPointToLatLng(o.add(s));
                    return this.setView(a, i, {
                        zoom: e
                    })
                },
                _getBoundsCenterZoom: function(t, i) {
                    i = i || {}, t = t.getBounds ? t.getBounds() : N(t);
                    var e = I(i.paddingTopLeft || i.padding || [0, 0]),
                        n = I(i.paddingBottomRight || i.padding || [0, 0]),
                        o = this.getBoundsZoom(t, !1, e.add(n));
                    if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                        center: t.getCenter(),
                        zoom: o
                    };
                    var s = n.subtract(e).divideBy(2),
                        a = this.project(t.getSouthWest(), o),
                        r = this.project(t.getNorthEast(), o);
                    return {
                        center: this.unproject(a.add(r).divideBy(2).add(s), o),
                        zoom: o
                    }
                },
                fitBounds: function(t, i) {
                    if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
                    var e = this._getBoundsCenterZoom(t, i);
                    return this.setView(e.center, e.zoom, i)
                },
                fitWorld: function(t) {
                    return this.fitBounds([
                        [-90, -180],
                        [90, 180]
                    ], t)
                },
                panTo: function(t, i) {
                    return this.setView(t, this._zoom, {
                        pan: i
                    })
                },
                panBy: function(t, i) {
                    if (i = i || {}, !(t = I(t).round()).x && !t.y) return this.fire("moveend");
                    if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                    if (this._panAnim || (this._panAnim = new ne, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                        wi(this._mapPane, "leaflet-pan-anim");
                        var e = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                    } else this._rawPanBy(t), this.fire("move").fire("moveend");
                    return this
                },
                flyTo: function(t, i, e) {
                    if (!1 === (e = e || {}).animate || !Rt.any3d) return this.setView(t, i, e);
                    this._stop();
                    var n = this.project(this.getCenter()),
                        o = this.project(t),
                        s = this.getSize(),
                        a = this._zoom;
                    t = j(t), i = void 0 === i ? a : i;
                    var r = Math.max(s.x, s.y),
                        h = r * this.getZoomScale(a, i),
                        l = o.distanceTo(n) || 1,
                        u = 1.42,
                        c = u * u;

                    function d(t) {
                        var i = (h * h - r * r + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? h : r) * c * l),
                            e = Math.sqrt(i * i + 1) - i;
                        return e < 1e-9 ? -18 : Math.log(e)
                    }

                    function _(t) {
                        return (Math.exp(t) - Math.exp(-t)) / 2
                    }

                    function p(t) {
                        return (Math.exp(t) + Math.exp(-t)) / 2
                    }

                    function m(t) {
                        return _(t) / p(t)
                    }
                    var f = d(0);

                    function g(t) {
                        return r * (p(f) / p(f + u * t))
                    }

                    function v(t) {
                        return r * (p(f) * m(f + u * t) - _(f)) / c
                    }

                    function y(t) {
                        return 1 - Math.pow(1 - t, 1.5)
                    }
                    var x = Date.now(),
                        w = (d(1) - f) / u,
                        b = e.duration ? 1e3 * e.duration : 1e3 * w * .8;

                    function P() {
                        var e = (Date.now() - x) / b,
                            s = y(e) * w;
                        e <= 1 ? (this._flyToFrame = M(P, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(v(s) / l)), a), this.getScaleZoom(r / g(s), a), {
                            flyTo: !0
                        })) : this._move(t, i)._moveEnd(!0)
                    }
                    return this._moveStart(!0, e.noMoveStart), P.call(this), this
                },
                flyToBounds: function(t, i) {
                    var e = this._getBoundsCenterZoom(t, i);
                    return this.flyTo(e.center, e.zoom, i)
                },
                setMaxBounds: function(t) {
                    return t = N(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this)
                },
                setMinZoom: function(t) {
                    var i = this.options.minZoom;
                    return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                },
                setMaxZoom: function(t) {
                    var i = this.options.maxZoom;
                    return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                },
                panInsideBounds: function(t, i) {
                    this._enforcingBounds = !0;
                    var e = this.getCenter(),
                        n = this._limitCenter(e, this._zoom, N(t));
                    return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
                },
                panInside: function(t, i) {
                    var e = I((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
                        n = I(i.paddingBottomRight || i.padding || [0, 0]),
                        o = this.project(this.getCenter()),
                        s = this.project(t),
                        a = this.getPixelBounds(),
                        r = D([a.min.add(e), a.max.subtract(n)]),
                        h = r.getSize();
                    if (!r.contains(s)) {
                        this._enforcingBounds = !0;
                        var l = s.subtract(r.getCenter()),
                            u = r.extend(s).getSize().subtract(h);
                        o.x += l.x < 0 ? -u.x : u.x, o.y += l.y < 0 ? -u.y : u.y, this.panTo(this.unproject(o), i), this._enforcingBounds = !1
                    }
                    return this
                },
                invalidateSize: function(t) {
                    if (!this._loaded) return this;
                    t = e({
                        animate: !1,
                        pan: !0
                    }, !0 === t ? {
                        animate: !0
                    } : t);
                    var i = this.getSize();
                    this._sizeChanged = !0, this._lastCenter = null;
                    var n = this.getSize(),
                        s = i.divideBy(2).round(),
                        a = n.divideBy(2).round(),
                        r = s.subtract(a);
                    return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                        oldSize: i,
                        newSize: n
                    })) : this
                },
                stop: function() {
                    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                },
                locate: function(t) {
                    if (t = this._locateOptions = e({
                            timeout: 1e4,
                            watch: !1
                        }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }), this;
                    var i = o(this._handleGeolocationResponse, this),
                        n = o(this._handleGeolocationError, this);
                    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, n, t) : navigator.geolocation.getCurrentPosition(i, n, t), this
                },
                stopLocate: function() {
                    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                },
                _handleGeolocationError: function(t) {
                    if (this._container._leaflet_id) {
                        var i = t.code,
                            e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: i,
                            message: "Geolocation error: " + e + "."
                        })
                    }
                },
                _handleGeolocationResponse: function(t) {
                    if (this._container._leaflet_id) {
                        var i = new F(t.coords.latitude, t.coords.longitude),
                            e = i.toBounds(2 * t.coords.accuracy),
                            n = this._locateOptions;
                        if (n.setView) {
                            var o = this.getBoundsZoom(e);
                            this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                        }
                        var s = {
                            latlng: i,
                            bounds: e,
                            timestamp: t.timestamp
                        };
                        for (var a in t.coords) "number" == typeof t.coords[a] && (s[a] = t.coords[a]);
                        this.fire("locationfound", s)
                    }
                },
                addHandler: function(t, i) {
                    if (!i) return this;
                    var e = this[t] = new i(this);
                    return this._handlers.push(e), this.options[t] && e.enable(), this
                },
                remove: function() {
                    if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                    try {
                        delete this._container._leaflet_id, delete this._containerId
                    } catch (t) {
                        this._container._leaflet_id = void 0, this._containerId = void 0
                    }
                    var t;
                    for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), fi(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                    for (t in this._panes) fi(this._panes[t]);
                    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                },
                createPane: function(t, i) {
                    var e = mi("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                    return t && (this._panes[t] = e), e
                },
                getCenter: function() {
                    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function() {
                    return this._zoom
                },
                getBounds: function() {
                    var t = this.getPixelBounds();
                    return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                },
                getMinZoom: function() {
                    return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                },
                getMaxZoom: function() {
                    return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function(t, i, e) {
                    t = N(t), e = I(e || [0, 0]);
                    var n = this.getZoom() || 0,
                        o = this.getMinZoom(),
                        s = this.getMaxZoom(),
                        a = t.getNorthWest(),
                        r = t.getSouthEast(),
                        h = this.getSize().subtract(e),
                        l = D(this.project(r, n), this.project(a, n)).getSize(),
                        u = Rt.any3d ? this.options.zoomSnap : 1,
                        c = h.x / l.x,
                        d = h.y / l.y,
                        _ = i ? Math.max(c, d) : Math.min(c, d);
                    return n = this.getScaleZoom(_, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = i ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(o, Math.min(s, n))
                },
                getSize: function() {
                    return this._size && !this._sizeChanged || (this._size = new A(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                },
                getPixelBounds: function(t, i) {
                    var e = this._getTopLeftPoint(t, i);
                    return new B(e, e.add(this.getSize()))
                },
                getPixelOrigin: function() {
                    return this._checkIfLoaded(), this._pixelOrigin
                },
                getPixelWorldBounds: function(t) {
                    return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                },
                getPane: function(t) {
                    return "string" == typeof t ? this._panes[t] : t
                },
                getPanes: function() {
                    return this._panes
                },
                getContainer: function() {
                    return this._container
                },
                getZoomScale: function(t, i) {
                    var e = this.options.crs;
                    return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
                },
                getScaleZoom: function(t, i) {
                    var e = this.options.crs;
                    i = void 0 === i ? this._zoom : i;
                    var n = e.zoom(t * e.scale(i));
                    return isNaN(n) ? 1 / 0 : n
                },
                project: function(t, i) {
                    return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(j(t), i)
                },
                unproject: function(t, i) {
                    return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(I(t), i)
                },
                layerPointToLatLng: function(t) {
                    var i = I(t).add(this.getPixelOrigin());
                    return this.unproject(i)
                },
                latLngToLayerPoint: function(t) {
                    return this.project(j(t))._round()._subtract(this.getPixelOrigin())
                },
                wrapLatLng: function(t) {
                    return this.options.crs.wrapLatLng(j(t))
                },
                wrapLatLngBounds: function(t) {
                    return this.options.crs.wrapLatLngBounds(N(t))
                },
                distance: function(t, i) {
                    return this.options.crs.distance(j(t), j(i))
                },
                containerPointToLayerPoint: function(t) {
                    return I(t).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function(t) {
                    return I(t).add(this._getMapPanePos())
                },
                containerPointToLatLng: function(t) {
                    var i = this.containerPointToLayerPoint(I(t));
                    return this.layerPointToLatLng(i)
                },
                latLngToContainerPoint: function(t) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)))
                },
                mouseEventToContainerPoint: function(t) {
                    return $i(t, this._container)
                },
                mouseEventToLayerPoint: function(t) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                },
                mouseEventToLatLng: function(t) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                },
                _initContainer: function(t) {
                    var i = this._container = _i(t);
                    if (!i) throw new Error("Map container not found.");
                    if (i._leaflet_id) throw new Error("Map container is already initialized.");
                    Ni(i, "scroll", this._onScroll, this), this._containerId = a(i)
                },
                _initLayout: function() {
                    var t = this._container;
                    this._fadeAnimated = this.options.fadeAnimation && Rt.any3d, wi(t, "leaflet-container" + (Rt.touch ? " leaflet-touch" : "") + (Rt.retina ? " leaflet-retina" : "") + (Rt.ielt9 ? " leaflet-oldie" : "") + (Rt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                    var i = pi(t, "position");
                    "absolute" !== i && "relative" !== i && "fixed" !== i && "sticky" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                },
                _initPanes: function() {
                    var t = this._panes = {};
                    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Si(this._mapPane, new A(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (wi(t.markerPane, "leaflet-zoom-hide"), wi(t.shadowPane, "leaflet-zoom-hide"))
                },
                _resetView: function(t, i, e) {
                    Si(this._mapPane, new A(0, 0));
                    var n = !this._loaded;
                    this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                    var o = this._zoom !== i;
                    this._moveStart(o, e)._move(t, i)._moveEnd(o), this.fire("viewreset"), n && this.fire("load")
                },
                _moveStart: function(t, i) {
                    return t && this.fire("zoomstart"), i || this.fire("movestart"), this
                },
                _move: function(t, i, e, n) {
                    void 0 === i && (i = this._zoom);
                    var o = this._zoom !== i;
                    return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? e && e.pinch && this.fire("zoom", e) : ((o || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)), this
                },
                _moveEnd: function(t) {
                    return t && this.fire("zoomend"), this.fire("moveend")
                },
                _stop: function() {
                    return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                },
                _rawPanBy: function(t) {
                    Si(this._mapPane, this._getMapPanePos().subtract(t))
                },
                _getZoomSpan: function() {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _panInsideMaxBounds: function() {
                    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function() {
                    if (!this._loaded) throw new Error("Set map center and zoom first.")
                },
                _initEvents: function(t) {
                    this._targets = {}, this._targets[a(this._container)] = this;
                    var i = t ? ji : Ni;
                    i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Rt.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                },
                _onResize: function() {
                    z(this._resizeRequest), this._resizeRequest = M((function() {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }), this)
                },
                _onScroll: function() {
                    this._container.scrollTop = 0, this._container.scrollLeft = 0
                },
                _onMoveEnd: function() {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                },
                _findEventTargets: function(t, i) {
                    for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
                        if ((e = this._targets[a(s)]) && ("click" === i || "preclick" === i) && this._draggableMoved(e)) {
                            r = !0;
                            break
                        }
                        if (e && e.listens(i, !0)) {
                            if (o && !ie(s, t)) break;
                            if (n.push(e), o) break
                        }
                        if (s === this._container) break;
                        s = s.parentNode
                    }
                    return n.length || r || o || !this.listens(i, !0) || (n = [this]), n
                },
                _isClickDisabled: function(t) {
                    for (; t && t !== this._container;) {
                        if (t._leaflet_disable_click) return !0;
                        t = t.parentNode
                    }
                },
                _handleDOMEvent: function(t) {
                    var i = t.target || t.srcElement;
                    if (!(!this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i))) {
                        var e = t.type;
                        "mousedown" === e && Oi(i), this._fireDOMEvent(t, e)
                    }
                },
                _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                _fireDOMEvent: function(t, i, n) {
                    if ("click" === t.type) {
                        var o = e({}, t);
                        o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                    }
                    var s = this._findEventTargets(t, i);
                    if (n) {
                        for (var a = [], r = 0; r < n.length; r++) n[r].listens(i, !0) && a.push(n[r]);
                        s = a.concat(s)
                    }
                    if (s.length) {
                        "contextmenu" === i && Yi(t);
                        var h = s[0],
                            l = {
                                originalEvent: t
                            };
                        if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                            var u = h.getLatLng && (!h._radius || h._radius <= 10);
                            l.containerPoint = u ? this.latLngToContainerPoint(h.getLatLng()) : this.mouseEventToContainerPoint(t), l.layerPoint = this.containerPointToLayerPoint(l.containerPoint), l.latlng = u ? h.getLatLng() : this.layerPointToLatLng(l.layerPoint)
                        }
                        for (r = 0; r < s.length; r++)
                            if (s[r].fire(i, l, !0), l.originalEvent._stopped || !1 === s[r].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return
                    }
                },
                _draggableMoved: function(t) {
                    return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                },
                _clearHandlers: function() {
                    for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
                },
                whenReady: function(t, i) {
                    return this._loaded ? t.call(i || this, {
                        target: this
                    }) : this.on("load", t, i), this
                },
                _getMapPanePos: function() {
                    return Ei(this._mapPane) || new A(0, 0)
                },
                _moved: function() {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0])
                },
                _getTopLeftPoint: function(t, i) {
                    return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                },
                _getNewPixelOrigin: function(t, i) {
                    var e = this.getSize()._divideBy(2);
                    return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
                },
                _latLngToNewLayerPoint: function(t, i, e) {
                    var n = this._getNewPixelOrigin(e, i);
                    return this.project(t, i)._subtract(n)
                },
                _latLngBoundsToNewLayerBounds: function(t, i, e) {
                    var n = this._getNewPixelOrigin(e, i);
                    return D([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
                },
                _getCenterLayerPoint: function() {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function(t) {
                    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function(t, i, e) {
                    if (!e) return t;
                    var n = this.project(t, i),
                        o = this.getSize().divideBy(2),
                        s = new B(n.subtract(o), n.add(o)),
                        a = this._getBoundsOffset(s, e, i);
                    return Math.abs(a.x) <= 1 && Math.abs(a.y) <= 1 ? t : this.unproject(n.add(a), i)
                },
                _limitOffset: function(t, i) {
                    if (!i) return t;
                    var e = this.getPixelBounds(),
                        n = new B(e.min.add(t), e.max.add(t));
                    return t.add(this._getBoundsOffset(n, i))
                },
                _getBoundsOffset: function(t, i, e) {
                    var n = D(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                        o = n.min.subtract(t.min),
                        s = n.max.subtract(t.max);
                    return new A(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
                },
                _rebound: function(t, i) {
                    return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
                },
                _limitZoom: function(t) {
                    var i = this.getMinZoom(),
                        e = this.getMaxZoom(),
                        n = Rt.any3d ? this.options.zoomSnap : 1;
                    return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
                },
                _onPanTransitionStep: function() {
                    this.fire("move")
                },
                _onPanTransitionEnd: function() {
                    bi(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                },
                _tryAnimatedPan: function(t, i) {
                    var e = this._getCenterOffset(t)._trunc();
                    return !(!0 !== (i && i.animate) && !this.getSize().contains(e) || (this.panBy(e, i), 0))
                },
                _createAnimProxy: function() {
                    var t = this._proxy = mi("div", "leaflet-proxy leaflet-zoom-animated");
                    this._panes.mapPane.appendChild(t), this.on("zoomanim", (function(t) {
                        var i = ui,
                            e = this._proxy.style[i];
                        Ci(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                    }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
                },
                _destroyAnimProxy: function() {
                    fi(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
                },
                _animMoveEnd: function() {
                    var t = this.getCenter(),
                        i = this.getZoom();
                    Ci(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                },
                _catchTransitionEnd: function(t) {
                    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function() {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function(t, i, e) {
                    if (this._animatingZoom) return !0;
                    if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                    var n = this.getZoomScale(i),
                        o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                    return !(!0 !== e.animate && !this.getSize().contains(o) || (M((function() {
                        this._moveStart(!0, e.noMoveStart || !1)._animateZoom(t, i, !0)
                    }), this), 0))
                },
                _animateZoom: function(t, i, e, n) {
                    this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, wi(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                        center: t,
                        zoom: i,
                        noUpdate: n
                    }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(o(this._onZoomTransitionEnd, this), 250))
                },
                _onZoomTransitionEnd: function() {
                    this._animatingZoom && (this._mapPane && bi(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0))
                }
            });

        function se(t, i) {
            return new oe(t, i)
        }
        var ae = S.extend({
                options: {
                    position: "topright"
                },
                initialize: function(t) {
                    _(this, t)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(t) {
                    var i = this._map;
                    return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(t) {
                    this.remove(), this._map = t;
                    var i = this._container = this.onAdd(t),
                        e = this.getPosition(),
                        n = t._controlCorners[e];
                    return wi(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this
                },
                remove: function() {
                    return this._map ? (fi(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
                },
                _refocusOnMap: function(t) {
                    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                }
            }),
            re = function(t) {
                return new ae(t)
            };
        oe.include({
            addControl: function(t) {
                return t.addTo(this), this
            },
            removeControl: function(t) {
                return t.remove(), this
            },
            _initControlPos: function() {
                var t = this._controlCorners = {},
                    i = "leaflet-",
                    e = this._controlContainer = mi("div", i + "control-container", this._container);

                function n(n, o) {
                    var s = i + n + " " + i + o;
                    t[n + o] = mi("div", s, e)
                }
                n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
            },
            _clearControlPos: function() {
                for (var t in this._controlCorners) fi(this._controlCorners[t]);
                fi(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
        });
        var he = ae.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function(t, i, e, n) {
                        return e < n ? -1 : n < e ? 1 : 0
                    }
                },
                initialize: function(t, i, e) {
                    for (var n in _(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
                    for (n in i) this._addLayer(i[n], n, !0)
                },
                onAdd: function(t) {
                    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                    for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function(t) {
                    return ae.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                },
                onRemove: function() {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function(t, i) {
                    return this._addLayer(t, i), this._map ? this._update() : this
                },
                addOverlay: function(t, i) {
                    return this._addLayer(t, i, !0), this._map ? this._update() : this
                },
                removeLayer: function(t) {
                    t.off("add remove", this._onLayerChange, this);
                    var i = this._getLayer(a(t));
                    return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
                },
                expand: function() {
                    wi(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._section.clientHeight ? (wi(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : bi(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function() {
                    return bi(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function() {
                    var t = "leaflet-control-layers",
                        i = this._container = mi("div", t),
                        e = this.options.collapsed;
                    i.setAttribute("aria-haspopup", !0), Ki(i), Gi(i);
                    var n = this._section = mi("section", t + "-list");
                    e && (this._map.on("click", this.collapse, this), Ni(i, {
                        mouseenter: this._expandSafely,
                        mouseleave: this.collapse
                    }, this));
                    var o = this._layersLink = mi("a", t + "-toggle", i);
                    o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), Ni(o, {
                        keydown: function(t) {
                            13 === t.keyCode && this._expandSafely()
                        },
                        click: function(t) {
                            Yi(t), this._expandSafely()
                        }
                    }, this), e || this.expand(), this._baseLayersList = mi("div", t + "-base", n), this._separator = mi("div", t + "-separator", n), this._overlaysList = mi("div", t + "-overlays", n), i.appendChild(n)
                },
                _getLayer: function(t) {
                    for (var i = 0; i < this._layers.length; i++)
                        if (this._layers[i] && a(this._layers[i].layer) === t) return this._layers[i]
                },
                _addLayer: function(t, i, e) {
                    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: t,
                        name: i,
                        overlay: e
                    }), this.options.sortLayers && this._layers.sort(o((function(t, i) {
                        return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
                    }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                },
                _update: function() {
                    if (!this._container) return this;
                    gi(this._baseLayersList), gi(this._overlaysList), this._layerControlInputs = [];
                    var t, i, e, n, o = 0;
                    for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
                },
                _onLayerChange: function(t) {
                    this._handlingClick || this._update();
                    var i = this._getLayer(a(t.target)),
                        e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                    e && this._map.fire(e, i)
                },
                _createRadioElement: function(t, i) {
                    var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                        n = document.createElement("div");
                    return n.innerHTML = e, n.firstChild
                },
                _addItem: function(t) {
                    var i, e = document.createElement("label"),
                        n = this._map.hasLayer(t.layer);
                    t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + a(this), n), this._layerControlInputs.push(i), i.layerId = a(t.layer), Ni(i, "click", this._onInputClick, this);
                    var o = document.createElement("span");
                    o.innerHTML = " " + t.name;
                    var s = document.createElement("span");
                    return e.appendChild(s), s.appendChild(i), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
                },
                _onInputClick: function() {
                    if (!this._preventClick) {
                        var t, i, e = this._layerControlInputs,
                            n = [],
                            o = [];
                        this._handlingClick = !0;
                        for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
                        for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                        for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                        this._handlingClick = !1, this._refocusOnMap()
                    }
                },
                _checkDisabledLayers: function() {
                    for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
                },
                _expandIfNotCollapsed: function() {
                    return this._map && !this.options.collapsed && this.expand(), this
                },
                _expandSafely: function() {
                    var t = this._section;
                    this._preventClick = !0, Ni(t, "click", Yi), this.expand();
                    var i = this;
                    setTimeout((function() {
                        ji(t, "click", Yi), i._preventClick = !1
                    }))
                }
            }),
            le = function(t, i, e) {
                return new he(t, i, e)
            },
            ue = ae.extend({
                options: {
                    position: "topleft",
                    zoomInText: '<span aria-hidden="true">+</span>',
                    zoomInTitle: "Zoom in",
                    zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(t) {
                    var i = "leaflet-control-zoom",
                        e = mi("div", i + " leaflet-bar"),
                        n = this.options;
                    return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
                },
                onRemove: function(t) {
                    t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function() {
                    return this._disabled = !0, this._updateDisabled(), this
                },
                enable: function() {
                    return this._disabled = !1, this._updateDisabled(), this
                },
                _zoomIn: function(t) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _zoomOut: function(t) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _createButton: function(t, i, e, n, o) {
                    var s = mi("a", e, n);
                    return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Ki(s), Ni(s, "click", Xi), Ni(s, "click", o, this), Ni(s, "click", this._refocusOnMap, this), s
                },
                _updateDisabled: function() {
                    var t = this._map,
                        i = "leaflet-disabled";
                    bi(this._zoomInButton, i), bi(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (wi(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (wi(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"))
                }
            });
        oe.mergeOptions({
            zoomControl: !0
        }), oe.addInitHook((function() {
            this.options.zoomControl && (this.zoomControl = new ue, this.addControl(this.zoomControl))
        }));
        var ce = function(t) {
                return new ue(t)
            },
            de = ae.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function(t) {
                    var i = "leaflet-control-scale",
                        e = mi("div", i),
                        n = this.options;
                    return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
                },
                onRemove: function(t) {
                    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(t, i, e) {
                    t.metric && (this._mScale = mi("div", i, e)), t.imperial && (this._iScale = mi("div", i, e))
                },
                _update: function() {
                    var t = this._map,
                        i = t.getSize().y / 2,
                        e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                    this._updateScales(e)
                },
                _updateScales: function(t) {
                    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                },
                _updateMetric: function(t) {
                    var i = this._getRoundNum(t),
                        e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                    this._updateScale(this._mScale, e, i / t)
                },
                _updateImperial: function(t) {
                    var i, e, n, o = 3.2808399 * t;
                    o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                },
                _updateScale: function(t, i, e) {
                    t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
                },
                _getRoundNum: function(t) {
                    var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                        e = t / i;
                    return i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1)
                }
            }),
            _e = function(t) {
                return new de(t)
            },
            pe = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
            me = ae.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Rt.inlineSvg ? pe + " " : "") + "Leaflet</a>"
                },
                initialize: function(t) {
                    _(this, t), this._attributions = {}
                },
                onAdd: function(t) {
                    for (var i in t.attributionControl = this, this._container = mi("div", "leaflet-control-attribution"), Ki(this._container), t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                    return this._update(), t.on("layeradd", this._addAttribution, this), this._container
                },
                onRemove: function(t) {
                    t.off("layeradd", this._addAttribution, this)
                },
                _addAttribution: function(t) {
                    t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", (function() {
                        this.removeAttribution(t.layer.getAttribution())
                    }), this))
                },
                setPrefix: function(t) {
                    return this.options.prefix = t, this._update(), this
                },
                addAttribution: function(t) {
                    return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                },
                removeAttribution: function(t) {
                    return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                },
                _update: function() {
                    if (this._map) {
                        var t = [];
                        for (var i in this._attributions) this._attributions[i] && t.push(i);
                        var e = [];
                        this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(' <span aria-hidden="true">|</span> ')
                    }
                }
            });
        oe.mergeOptions({
            attributionControl: !0
        }), oe.addInitHook((function() {
            this.options.attributionControl && (new me).addTo(this)
        }));
        var fe = function(t) {
            return new me(t)
        };
        ae.Layers = he, ae.Zoom = ue, ae.Scale = de, ae.Attribution = me, re.layers = le, re.zoom = ce, re.scale = _e, re.attribution = fe;
        var ge = S.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                return this._enabled || (this._enabled = !0, this.addHooks()), this
            },
            disable: function() {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function() {
                return !!this._enabled
            }
        });
        ge.addTo = function(t, i) {
            return t.addHandler(i, this), this
        };
        var ve = {
                Events: Z
            },
            ye = Rt.touch ? "touchstart mousedown" : "mousedown",
            xe = k.extend({
                options: {
                    clickTolerance: 3
                },
                initialize: function(t, i, e, n) {
                    _(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
                },
                enable: function() {
                    this._enabled || (Ni(this._dragStartTarget, ye, this._onDown, this), this._enabled = !0)
                },
                disable: function() {
                    this._enabled && (xe._dragging === this && this.finishDrag(!0), ji(this._dragStartTarget, ye, this._onDown, this), this._enabled = !1, this._moved = !1)
                },
                _onDown: function(t) {
                    if (this._enabled && (this._moved = !1, !xi(this._element, "leaflet-zoom-anim")))
                        if (t.touches && 1 !== t.touches.length) xe._dragging === this && this.finishDrag();
                        else if (!(xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (xe._dragging = this, this._preventOutline && Oi(this._element), ki(), si(), this._moving))) {
                        this.fire("down");
                        var i = t.touches ? t.touches[0] : t,
                            e = Bi(this._element);
                        this._startPoint = new A(i.clientX, i.clientY), this._startPos = Ei(this._element), this._parentScale = Di(e);
                        var n = "mousedown" === t.type;
                        Ni(document, n ? "mousemove" : "touchmove", this._onMove, this), Ni(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this)
                    }
                },
                _onMove: function(t) {
                    if (this._enabled)
                        if (t.touches && t.touches.length > 1) this._moved = !0;
                        else {
                            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                e = new A(i.clientX, i.clientY)._subtract(this._startPoint);
                            (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Yi(t), this._moved || (this.fire("dragstart"), this._moved = !0, wi(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), wi(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, this._lastEvent = t, this._updatePosition()))
                        }
                },
                _updatePosition: function() {
                    var t = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", t), Si(this._element, this._newPos), this.fire("drag", t)
                },
                _onUp: function() {
                    this._enabled && this.finishDrag()
                },
                finishDrag: function(t) {
                    bi(document.body, "leaflet-dragging"), this._lastTarget && (bi(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ji(document, "mousemove touchmove", this._onMove, this), ji(document, "mouseup touchend touchcancel", this._onUp, this), Ai(), ai();
                    var i = this._moved && this._moving;
                    this._moving = !1, xe._dragging = !1, i && this.fire("dragend", {
                        noInertia: t,
                        distance: this._newPos.distanceTo(this._startPos)
                    })
                }
            });

        function we(t, i, e) {
            var n, o, s, a, r, h, l, u, c, d = [1, 4, 2, 8];
            for (o = 0, l = t.length; o < l; o++) t[o]._code = Oe(t[o], i);
            for (a = 0; a < 4; a++) {
                for (u = d[a], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++) r = t[o], h = t[s], r._code & u ? h._code & u || ((c = Ae(h, r, u, i, e))._code = Oe(c, i), n.push(c)) : (h._code & u && ((c = Ae(h, r, u, i, e))._code = Oe(c, i), n.push(c)), n.push(r));
                t = n
            }
            return t
        }

        function be(t, i) {
            var e, n, o, s, a, r, h, l, u;
            if (!t || 0 === t.length) throw new Error("latlngs not passed");
            De(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
            var c = j([0, 0]),
                d = N(t);
            d.getNorthWest().distanceTo(d.getSouthWest()) * d.getNorthEast().distanceTo(d.getNorthWest()) < 1700 && (c = Pe(t));
            var _ = t.length,
                p = [];
            for (e = 0; e < _; e++) {
                var m = j(t[e]);
                p.push(i.project(j([m.lat - c.lat, m.lng - c.lng])))
            }
            for (r = h = l = 0, e = 0, n = _ - 1; e < _; n = e++) o = p[e], s = p[n], a = o.y * s.x - s.y * o.x, h += (o.x + s.x) * a, l += (o.y + s.y) * a, r += 3 * a;
            u = 0 === r ? p[0] : [h / r, l / r];
            var f = i.unproject(I(u));
            return j([f.lat + c.lat, f.lng + c.lng])
        }

        function Pe(t) {
            for (var i = 0, e = 0, n = 0, o = 0; o < t.length; o++) {
                var s = j(t[o]);
                i += s.lat, e += s.lng, n++
            }
            return j([i / n, e / n])
        }
        var Le, Te = {
            __proto__: null,
            clipPolygon: we,
            polygonCenter: be,
            centroid: Pe
        };

        function Me(t, i) {
            if (!i || !t.length) return t.slice();
            var e = i * i;
            return t = Se(t = Ze(t, e), e)
        }

        function ze(t, i, e) {
            return Math.sqrt(Be(t, i, e, !0))
        }

        function Ce(t, i, e) {
            return Be(t, i, e)
        }

        function Se(t, i) {
            var e = t.length,
                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
            n[0] = n[e - 1] = 1, Ee(t, n, i, 0, e - 1);
            var o, s = [];
            for (o = 0; o < e; o++) n[o] && s.push(t[o]);
            return s
        }

        function Ee(t, i, e, n, o) {
            var s, a, r, h = 0;
            for (a = n + 1; a <= o - 1; a++)(r = Be(t[a], t[n], t[o], !0)) > h && (s = a, h = r);
            h > e && (i[s] = 1, Ee(t, i, e, n, s), Ee(t, i, e, s, o))
        }

        function Ze(t, i) {
            for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Ie(t[n], t[o]) > i && (e.push(t[n]), o = n);
            return o < s - 1 && e.push(t[s - 1]), e
        }

        function ke(t, i, e, n, o) {
            var s, a, r, h = n ? Le : Oe(t, e),
                l = Oe(i, e);
            for (Le = l;;) {
                if (!(h | l)) return [t, i];
                if (h & l) return !1;
                r = Oe(a = Ae(t, i, s = h || l, e, o), e), s === h ? (t = a, h = r) : (i = a, l = r)
            }
        }

        function Ae(t, i, e, n, o) {
            var s, a, r = i.x - t.x,
                h = i.y - t.y,
                l = n.min,
                u = n.max;
            return 8 & e ? (s = t.x + r * (u.y - t.y) / h, a = u.y) : 4 & e ? (s = t.x + r * (l.y - t.y) / h, a = l.y) : 2 & e ? (s = u.x, a = t.y + h * (u.x - t.x) / r) : 1 & e && (s = l.x, a = t.y + h * (l.x - t.x) / r), new A(s, a, o)
        }

        function Oe(t, i) {
            var e = 0;
            return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
        }

        function Ie(t, i) {
            var e = i.x - t.x,
                n = i.y - t.y;
            return e * e + n * n
        }

        function Be(t, i, e, n) {
            var o, s = i.x,
                a = i.y,
                r = e.x - s,
                h = e.y - a,
                l = r * r + h * h;
            return l > 0 && ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1 ? (s = e.x, a = e.y) : o > 0 && (s += r * o, a += h * o)), r = t.x - s, h = t.y - a, n ? r * r + h * h : new A(s, a)
        }

        function De(t) {
            return !g(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
        }

        function Re(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), De(t)
        }

        function Ne(t, i) {
            var e, n, o, s, a, r, h, l;
            if (!t || 0 === t.length) throw new Error("latlngs not passed");
            De(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
            var u = j([0, 0]),
                c = N(t);
            c.getNorthWest().distanceTo(c.getSouthWest()) * c.getNorthEast().distanceTo(c.getNorthWest()) < 1700 && (u = Pe(t));
            var d = t.length,
                _ = [];
            for (e = 0; e < d; e++) {
                var p = j(t[e]);
                _.push(i.project(j([p.lat - u.lat, p.lng - u.lng])))
            }
            for (e = 0, n = 0; e < d - 1; e++) n += _[e].distanceTo(_[e + 1]) / 2;
            if (0 === n) l = _[0];
            else
                for (e = 0, s = 0; e < d - 1; e++)
                    if (a = _[e], r = _[e + 1], (s += o = a.distanceTo(r)) > n) {
                        h = (s - n) / o, l = [r.x - h * (r.x - a.x), r.y - h * (r.y - a.y)];
                        break
                    } var m = i.unproject(I(l));
            return j([m.lat + u.lat, m.lng + u.lng])
        }
        var Fe = {
                __proto__: null,
                simplify: Me,
                pointToSegmentDistance: ze,
                closestPointOnSegment: Ce,
                clipSegment: ke,
                _getEdgeIntersection: Ae,
                _getBitCode: Oe,
                _sqClosestPointOnSegment: Be,
                isFlat: De,
                _flat: Re,
                polylineCenter: Ne
            },
            je = {
                project: function(t) {
                    return new A(t.lng, t.lat)
                },
                unproject: function(t) {
                    return new F(t.y, t.x)
                },
                bounds: new B([-180, -90], [180, 90])
            },
            He = {
                R: 6378137,
                R_MINOR: 6356752.314245179,
                bounds: new B([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                project: function(t) {
                    var i = Math.PI / 180,
                        e = this.R,
                        n = t.lat * i,
                        o = this.R_MINOR / e,
                        s = Math.sqrt(1 - o * o),
                        a = s * Math.sin(n),
                        r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), s / 2);
                    return n = -e * Math.log(Math.max(r, 1e-10)), new A(t.lng * i * e, n)
                },
                unproject: function(t) {
                    for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++) i = s * Math.sin(r), i = Math.pow((1 - i) / (1 + i), s / 2), r += l = Math.PI / 2 - 2 * Math.atan(a * i) - r;
                    return new F(r * e, t.x * e / n)
                }
            },
            We = {
                __proto__: null,
                LonLat: je,
                Mercator: He,
                SphericalMercator: q
            },
            Ue = e({}, U, {
                code: "EPSG:3395",
                projection: He,
                transformation: function() {
                    var t = .5 / (Math.PI * He.R);
                    return K(t, .5, -t, .5)
                }()
            }),
            Ve = e({}, U, {
                code: "EPSG:4326",
                projection: je,
                transformation: K(1 / 180, 1, -1 / 180, .5)
            }),
            qe = e({}, W, {
                projection: je,
                transformation: K(1, 0, -1, 0),
                scale: function(t) {
                    return Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t) / Math.LN2
                },
                distance: function(t, i) {
                    var e = i.lng - t.lng,
                        n = i.lat - t.lat;
                    return Math.sqrt(e * e + n * n)
                },
                infinite: !0
            });
        W.Earth = U, W.EPSG3395 = Ue, W.EPSG3857 = Y, W.EPSG900913 = X, W.EPSG4326 = Ve, W.Simple = qe;
        var Ge = k.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            remove: function() {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function(t) {
                return t && t.removeLayer(this), this
            },
            getPane: function(t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function(t) {
                return this._map._targets[a(t)] = this, this
            },
            removeInteractiveTarget: function(t) {
                return delete this._map._targets[a(t)], this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _layerAdd: function(t) {
                var i = t.target;
                if (i.hasLayer(this)) {
                    if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                        var e = this.getEvents();
                        i.on(e, this), this.once("remove", (function() {
                            i.off(e, this)
                        }), this)
                    }
                    this.onAdd(i), this.fire("add"), i.fire("layeradd", {
                        layer: this
                    })
                }
            }
        });
        oe.include({
            addLayer: function(t) {
                if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                var i = a(t);
                return this._layers[i] || (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function(t) {
                var i = a(t);
                return this._layers[i] ? (this._loaded && t.onRemove(this), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                    layer: t
                }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
            },
            hasLayer: function(t) {
                return a(t) in this._layers
            },
            eachLayer: function(t, i) {
                for (var e in this._layers) t.call(i, this._layers[e]);
                return this
            },
            _addLayers: function(t) {
                for (var i = 0, e = (t = t ? g(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
            },
            _addZoomLimit: function(t) {
                isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function(t) {
                var i = a(t);
                this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
            },
            _updateZoomLevels: function() {
                var t = 1 / 0,
                    i = -1 / 0,
                    e = this._getZoomSpan();
                for (var n in this._zoomBoundLayers) {
                    var o = this._zoomBoundLayers[n].options;
                    t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
                }
                this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
        });
        var Ke = Ge.extend({
                initialize: function(t, i) {
                    var e, n;
                    if (_(this, i), this._layers = {}, t)
                        for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
                },
                addLayer: function(t) {
                    var i = this.getLayerId(t);
                    return this._layers[i] = t, this._map && this._map.addLayer(t), this
                },
                removeLayer: function(t) {
                    var i = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
                },
                hasLayer: function(t) {
                    return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
                },
                clearLayers: function() {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function(t) {
                    var i, e, n = Array.prototype.slice.call(arguments, 1);
                    for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
                    return this
                },
                onAdd: function(t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function(t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function(t, i) {
                    for (var e in this._layers) t.call(i, this._layers[e]);
                    return this
                },
                getLayer: function(t) {
                    return this._layers[t]
                },
                getLayers: function() {
                    var t = [];
                    return this.eachLayer(t.push, t), t
                },
                setZIndex: function(t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function(t) {
                    return a(t)
                }
            }),
            Ye = function(t, i) {
                return new Ke(t, i)
            },
            Xe = Ke.extend({
                addLayer: function(t) {
                    return this.hasLayer(t) ? this : (t.addEventParent(this), Ke.prototype.addLayer.call(this, t), this.fire("layeradd", {
                        layer: t
                    }))
                },
                removeLayer: function(t) {
                    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ke.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                        layer: t
                    })) : this
                },
                setStyle: function(t) {
                    return this.invoke("setStyle", t)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var t = new R;
                    for (var i in this._layers) {
                        var e = this._layers[i];
                        t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                    }
                    return t
                }
            }),
            Je = function(t, i) {
                return new Xe(t, i)
            },
            $e = S.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0],
                    crossOrigin: !1
                },
                initialize: function(t) {
                    _(this, t)
                },
                createIcon: function(t) {
                    return this._createIcon("icon", t)
                },
                createShadow: function(t) {
                    return this._createIcon("shadow", t)
                },
                _createIcon: function(t, i) {
                    var e = this._getIconUrl(t);
                    if (!e) {
                        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                    return this._setIconStyles(n, t), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n
                },
                _setIconStyles: function(t, i) {
                    var e = this.options,
                        n = e[i + "Size"];
                    "number" == typeof n && (n = [n, n]);
                    var o = I(n),
                        s = I("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                    t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                },
                _createImg: function(t, i) {
                    return (i = i || document.createElement("img")).src = t, i
                },
                _getIconUrl: function(t) {
                    return Rt.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                }
            });

        function Qe(t) {
            return new $e(t)
        }
        var tn = $e.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(t) {
                    return "string" != typeof tn.imagePath && (tn.imagePath = this._detectIconPath()), (this.options.imagePath || tn.imagePath) + $e.prototype._getIconUrl.call(this, t)
                },
                _stripUrl: function(t) {
                    var i = function(t, i, e) {
                        var n = i.exec(t);
                        return n && n[e]
                    };
                    return (t = i(t, /^url\((['"])?(.+)\1\)$/, 2)) && i(t, /^(.*)marker-icon\.png$/, 1)
                },
                _detectIconPath: function() {
                    var t = mi("div", "leaflet-default-icon-path", document.body),
                        i = pi(t, "background-image") || pi(t, "backgroundImage");
                    if (document.body.removeChild(t), i = this._stripUrl(i)) return i;
                    var e = document.querySelector('link[href$="leaflet.css"]');
                    return e ? e.href.substring(0, e.href.length - 11 - 1) : ""
                }
            }),
            en = ge.extend({
                initialize: function(t) {
                    this._marker = t
                },
                addHooks: function() {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new xe(t, t, !0)), this._draggable.on({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(), wi(t, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(), this._marker._icon && bi(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _adjustPan: function(t) {
                    var i = this._marker,
                        e = i._map,
                        n = this._marker.options.autoPanSpeed,
                        o = this._marker.options.autoPanPadding,
                        s = Ei(i._icon),
                        a = e.getPixelBounds(),
                        r = e.getPixelOrigin(),
                        h = D(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
                    if (!h.contains(s)) {
                        var l = I((Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)).multiplyBy(n);
                        e.panBy(l, {
                            animate: !1
                        }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), Si(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t))
                    }
                },
                _onDragStart: function() {
                    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
                },
                _onPreDrag: function(t) {
                    this._marker.options.autoPan && (z(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)))
                },
                _onDrag: function(t) {
                    var i = this._marker,
                        e = i._shadow,
                        n = Ei(i._icon),
                        o = i._map.layerPointToLatLng(n);
                    e && Si(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
                },
                _onDragEnd: function(t) {
                    z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                }
            }),
            nn = Ge.extend({
                options: {
                    icon: new tn,
                    interactive: !0,
                    keyboard: !0,
                    title: "",
                    alt: "Marker",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    shadowPane: "shadowPane",
                    bubblingMouseEvents: !1,
                    autoPanOnFocus: !0,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10
                },
                initialize: function(t, i) {
                    _(this, i), this._latlng = j(t)
                },
                onAdd: function(t) {
                    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                },
                onRemove: function(t) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                },
                getEvents: function() {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    var i = this._latlng;
                    return this._latlng = j(t), this.update(), this.fire("move", {
                        oldLatLng: i,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(t) {
                    return this.options.zIndexOffset = t, this.update()
                },
                getIcon: function() {
                    return this.options.icon
                },
                setIcon: function(t) {
                    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                },
                getElement: function() {
                    return this._icon
                },
                update: function() {
                    if (this._icon && this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(t)
                    }
                    return this
                },
                _initIcon: function() {
                    var t = this.options,
                        i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                        e = t.icon.createIcon(this._icon),
                        n = !1;
                    e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), wi(e, i), t.keyboard && (e.tabIndex = "0", e.setAttribute("role", "button")), this._icon = e, t.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), this.options.autoPanOnFocus && Ni(e, "focus", this._panOnFocus, this);
                    var o = t.icon.createShadow(this._shadow),
                        s = !1;
                    o !== this._shadow && (this._removeShadow(), s = !0), o && (wi(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), this.options.autoPanOnFocus && ji(this._icon, "focus", this._panOnFocus, this), fi(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && fi(this._shadow), this._shadow = null
                },
                _setPos: function(t) {
                    this._icon && Si(this._icon, t), this._shadow && Si(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function(t) {
                    this._icon && (this._icon.style.zIndex = this._zIndex + t)
                },
                _animateZoom: function(t) {
                    var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                    this._setPos(i)
                },
                _initInteraction: function() {
                    if (this.options.interactive && (wi(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), en)) {
                        var t = this.options.draggable;
                        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new en(this), t && this.dragging.enable()
                    }
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function() {
                    var t = this.options.opacity;
                    this._icon && Ti(this._icon, t), this._shadow && Ti(this._shadow, t)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                },
                _panOnFocus: function() {
                    var t = this._map;
                    if (t) {
                        var i = this.options.icon.options,
                            e = i.iconSize ? I(i.iconSize) : I(0, 0),
                            n = i.iconAnchor ? I(i.iconAnchor) : I(0, 0);
                        t.panInside(this._latlng, {
                            paddingTopLeft: n,
                            paddingBottomRight: e.subtract(n)
                        })
                    }
                },
                _getPopupAnchor: function() {
                    return this.options.icon.options.popupAnchor
                },
                _getTooltipAnchor: function() {
                    return this.options.icon.options.tooltipAnchor
                }
            });

        function on(t, i) {
            return new nn(t, i)
        }
        var sn = Ge.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function(t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function() {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function() {
                    this._renderer._removePath(this)
                },
                redraw: function() {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function(t) {
                    return _(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
                },
                bringToFront: function() {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function() {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function() {
                    return this._path
                },
                _reset: function() {
                    this._project(), this._update()
                },
                _clickTolerance: function() {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
                }
            }),
            an = sn.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function(t, i) {
                    _(this, i), this._latlng = j(t), this._radius = this.options.radius
                },
                setLatLng: function(t) {
                    var i = this._latlng;
                    return this._latlng = j(t), this.redraw(), this.fire("move", {
                        oldLatLng: i,
                        latlng: this._latlng
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setRadius: function(t) {
                    return this.options.radius = this._radius = t, this.redraw()
                },
                getRadius: function() {
                    return this._radius
                },
                setStyle: function(t) {
                    var i = t && t.radius || this._radius;
                    return sn.prototype.setStyle.call(this, t), this.setRadius(i), this
                },
                _project: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                },
                _updateBounds: function() {
                    var t = this._radius,
                        i = this._radiusY || t,
                        e = this._clickTolerance(),
                        n = [t + e, i + e];
                    this._pxBounds = new B(this._point.subtract(n), this._point.add(n))
                },
                _update: function() {
                    this._map && this._updatePath()
                },
                _updatePath: function() {
                    this._renderer._updateCircle(this)
                },
                _empty: function() {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                },
                _containsPoint: function(t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }
            });

        function rn(t, i) {
            return new an(t, i)
        }
        var hn = an.extend({
            initialize: function(t, i, n) {
                if ("number" == typeof i && (i = e({}, n, {
                        radius: i
                    })), _(this, i), this._latlng = j(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: sn.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    i = this._latlng.lat,
                    e = this._map,
                    n = e.options.crs;
                if (n.distance === U.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / U.R / o,
                        a = e.project([i + s, t]),
                        r = e.project([i - s, t]),
                        h = a.add(r).divideBy(2),
                        l = e.unproject(h).lat,
                        u = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(l * o)) / (Math.cos(i * o) * Math.cos(l * o))) / o;
                    (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(u) ? 0 : h.x - e.project([l, t - u]).x, this._radiusY = h.y - a.y
                } else {
                    var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        });

        function ln(t, i, e) {
            return new hn(t, i, e)
        }
        var un = sn.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, i) {
                _(this, i), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var i, e, n = 1 / 0, o = null, s = Be, a = 0, r = this._parts.length; a < r; a++)
                    for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
                        var c = s(t, i = h[l - 1], e = h[l], !0);
                        c < n && (n = c, o = s(t, i, e))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                return Ne(this._defaultShape(), this._map.options.crs)
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, i) {
                return i = i || this._defaultShape(), t = j(t), i.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new R, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return De(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var i = [], e = De(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = j(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
                return i
            },
            _project: function() {
                var t = new B;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
            },
            _updateBounds: function() {
                var t = this._clickTolerance(),
                    i = new A(t, t);
                this._rawPxBounds && (this._pxBounds = new B([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)]))
            },
            _projectLatlngs: function(t, i, e) {
                var n, o, s = t[0] instanceof F,
                    a = t.length;
                if (s) {
                    for (o = [], n = 0; n < a; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                    i.push(o)
                } else
                    for (n = 0; n < a; n++) this._projectLatlngs(t[n], i, e)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var i, e, n, o, s, a, r, h = this._parts;
                        for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                            for (e = 0, s = (r = this._rings[i]).length; e < s - 1; e++)(a = ke(r[e], r[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(a[0]), a[1] === r[e + 1] && e !== s - 2 || (h[n].push(a[1]), n++))
                    }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Me(t[e], i)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, i) {
                var e, n, o, s, a, r, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (e = 0, s = this._parts.length; e < s; e++)
                    for (n = 0, o = (a = (r = this._parts[e]).length) - 1; n < a; o = n++)
                        if ((i || 0 !== n) && ze(t, r[o], r[n]) <= h) return !0;
                return !1
            }
        });

        function cn(t, i) {
            return new un(t, i)
        }
        un._flat = Re;
        var dn = un.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                return be(this._defaultShape(), this._map.options.crs)
            },
            _convertLatLngs: function(t) {
                var i = un.prototype._convertLatLngs.call(this, t),
                    e = i.length;
                return e >= 2 && i[0] instanceof F && i[0].equals(i[e - 1]) && i.pop(), i
            },
            _setLatLngs: function(t) {
                un.prototype._setLatLngs.call(this, t), De(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return De(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    i = this.options.weight,
                    e = new A(i, i);
                if (t = new B(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = we(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var i, e, n, o, s, a, r, h, l = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, r = this._parts.length; o < r; o++)
                    for (s = 0, a = (h = (i = this._parts[o]).length) - 1; s < h; a = s++) e = i[s], n = i[a], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (l = !l);
                return l || un.prototype._containsPoint.call(this, t, !0)
            }
        });

        function _n(t, i) {
            return new dn(t, i)
        }
        var pn = Xe.extend({
            initialize: function(t, i) {
                _(this, i), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var i, e, n, o = g(t) ? t : t.features;
                if (o) {
                    for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var a = mn(t, s);
                return a ? (a.feature = bn(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)) : this
            },
            resetStyle: function(t) {
                return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
            },
            setStyle: function(t) {
                return this.eachLayer((function(i) {
                    this._setLayerStyle(i, t)
                }), this)
            },
            _setLayerStyle: function(t, i) {
                t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i))
            }
        });

        function mn(t, i) {
            var e, n, o, s, a = "Feature" === t.type ? t.geometry : t,
                r = a ? a.coordinates : null,
                h = [],
                l = i && i.pointToLayer,
                u = i && i.coordsToLatLng || gn;
            if (!r && !a) return null;
            switch (a.type) {
                case "Point":
                    return fn(l, t, e = u(r), i);
                case "MultiPoint":
                    for (o = 0, s = r.length; o < s; o++) e = u(r[o]), h.push(fn(l, t, e, i));
                    return new Xe(h);
                case "LineString":
                case "MultiLineString":
                    return n = vn(r, "LineString" === a.type ? 0 : 1, u), new un(n, i);
                case "Polygon":
                case "MultiPolygon":
                    return n = vn(r, "Polygon" === a.type ? 1 : 2, u), new dn(n, i);
                case "GeometryCollection":
                    for (o = 0, s = a.geometries.length; o < s; o++) {
                        var c = mn({
                            geometry: a.geometries[o],
                            type: "Feature",
                            properties: t.properties
                        }, i);
                        c && h.push(c)
                    }
                    return new Xe(h);
                case "FeatureCollection":
                    for (o = 0, s = a.features.length; o < s; o++) {
                        var d = mn(a.features[o], i);
                        d && h.push(d)
                    }
                    return new Xe(h);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }

        function fn(t, i, e, n) {
            return t ? t(i, e) : new nn(e, n && n.markersInheritOptions && n)
        }

        function gn(t) {
            return new F(t[1], t[0], t[2])
        }

        function vn(t, i, e) {
            for (var n, o = [], s = 0, a = t.length; s < a; s++) n = i ? vn(t[s], i - 1, e) : (e || gn)(t[s]), o.push(n);
            return o
        }

        function yn(t, i) {
            return void 0 !== (t = j(t)).alt ? [u(t.lng, i), u(t.lat, i), u(t.alt, i)] : [u(t.lng, i), u(t.lat, i)]
        }

        function xn(t, i, e, n) {
            for (var o = [], s = 0, a = t.length; s < a; s++) o.push(i ? xn(t[s], De(t[s]) ? 0 : i - 1, e, n) : yn(t[s], n));
            return !i && e && o.length > 0 && o.push(o[0].slice()), o
        }

        function wn(t, i) {
            return t.feature ? e({}, t.feature, {
                geometry: i
            }) : bn(i)
        }

        function bn(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }
        var Pn = {
            toGeoJSON: function(t) {
                return wn(this, {
                    type: "Point",
                    coordinates: yn(this.getLatLng(), t)
                })
            }
        };

        function Ln(t, i) {
            return new pn(t, i)
        }
        nn.include(Pn), hn.include(Pn), an.include(Pn), un.include({
            toGeoJSON: function(t) {
                var i = !De(this._latlngs);
                return wn(this, {
                    type: (i ? "Multi" : "") + "LineString",
                    coordinates: xn(this._latlngs, i ? 1 : 0, !1, t)
                })
            }
        }), dn.include({
            toGeoJSON: function(t) {
                var i = !De(this._latlngs),
                    e = i && !De(this._latlngs[0]),
                    n = xn(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
                return i || (n = [n]), wn(this, {
                    type: (e ? "Multi" : "") + "Polygon",
                    coordinates: n
                })
            }
        }), Ke.include({
            toMultiPoint: function(t) {
                var i = [];
                return this.eachLayer((function(e) {
                    i.push(e.toGeoJSON(t).geometry.coordinates)
                })), wn(this, {
                    type: "MultiPoint",
                    coordinates: i
                })
            },
            toGeoJSON: function(t) {
                var i = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ("MultiPoint" === i) return this.toMultiPoint(t);
                var e = "GeometryCollection" === i,
                    n = [];
                return this.eachLayer((function(i) {
                    if (i.toGeoJSON) {
                        var o = i.toGeoJSON(t);
                        if (e) n.push(o.geometry);
                        else {
                            var s = bn(o);
                            "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                        }
                    }
                })), e ? wn(this, {
                    geometries: n,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: n
                }
            }
        });
        var Tn = Ln,
            Mn = Ge.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: ""
                },
                initialize: function(t, i, e) {
                    this._url = t, this._bounds = N(i), _(this, e)
                },
                onAdd: function() {
                    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (wi(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                },
                onRemove: function() {
                    fi(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._image && this._updateOpacity(), this
                },
                setStyle: function(t) {
                    return t.opacity && this.setOpacity(t.opacity), this
                },
                bringToFront: function() {
                    return this._map && vi(this._image), this
                },
                bringToBack: function() {
                    return this._map && yi(this._image), this
                },
                setUrl: function(t) {
                    return this._url = t, this._image && (this._image.src = t), this
                },
                setBounds: function(t) {
                    return this._bounds = N(t), this._map && this._reset(), this
                },
                getEvents: function() {
                    var t = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                getBounds: function() {
                    return this._bounds
                },
                getElement: function() {
                    return this._image
                },
                _initImage: function() {
                    var t = "IMG" === this._url.tagName,
                        i = this._image = t ? this._url : mi("img");
                    wi(i, "leaflet-image-layer"), this._zoomAnimated && wi(i, "leaflet-zoom-animated"), this.options.className && wi(i, this.options.className), i.onselectstart = l, i.onmousemove = l, i.onload = o(this.fire, this, "load"), i.onerror = o(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
                },
                _animateZoom: function(t) {
                    var i = this._map.getZoomScale(t.zoom),
                        e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                    Ci(this._image, e, i)
                },
                _reset: function() {
                    var t = this._image,
                        i = new B(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                        e = i.getSize();
                    Si(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
                },
                _updateOpacity: function() {
                    Ti(this._image, this.options.opacity)
                },
                _updateZIndex: function() {
                    this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                },
                _overlayOnError: function() {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t && this._url !== t && (this._url = t, this._image.src = t)
                },
                getCenter: function() {
                    return this._bounds.getCenter()
                }
            }),
            zn = function(t, i, e) {
                return new Mn(t, i, e)
            },
            Cn = Mn.extend({
                options: {
                    autoplay: !0,
                    loop: !0,
                    keepAspectRatio: !0,
                    muted: !1,
                    playsInline: !0
                },
                _initImage: function() {
                    var t = "VIDEO" === this._url.tagName,
                        i = this._image = t ? this._url : mi("video");
                    if (wi(i, "leaflet-image-layer"), this._zoomAnimated && wi(i, "leaflet-zoom-animated"), this.options.className && wi(i, this.options.className), i.onselectstart = l, i.onmousemove = l, i.onloadeddata = o(this.fire, this, "load"), t) {
                        for (var e = i.getElementsByTagName("source"), n = [], s = 0; s < e.length; s++) n.push(e[s].src);
                        this._url = e.length > 0 ? n : [i.src]
                    } else {
                        g(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted, i.playsInline = !!this.options.playsInline;
                        for (var a = 0; a < this._url.length; a++) {
                            var r = mi("source");
                            r.src = this._url[a], i.appendChild(r)
                        }
                    }
                }
            });

        function Sn(t, i, e) {
            return new Cn(t, i, e)
        }
        var En = Mn.extend({
            _initImage: function() {
                var t = this._image = this._url;
                wi(t, "leaflet-image-layer"), this._zoomAnimated && wi(t, "leaflet-zoom-animated"), this.options.className && wi(t, this.options.className), t.onselectstart = l, t.onmousemove = l
            }
        });

        function Zn(t, i, e) {
            return new En(t, i, e)
        }
        var kn = Ge.extend({
            options: {
                interactive: !1,
                offset: [0, 0],
                className: "",
                pane: void 0,
                content: ""
            },
            initialize: function(t, i) {
                t && (t instanceof F || g(t)) ? (this._latlng = j(t), _(this, i)) : (_(this, t), this._source = i), this.options.content && (this._content = this.options.content)
            },
            openOn: function(t) {
                return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this
            },
            close: function() {
                return this._map && this._map.removeLayer(this), this
            },
            toggle: function(t) {
                return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Ti(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Ti(this._container, 1), this.bringToFront(), this.options.interactive && (wi(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container))
            },
            onRemove: function(t) {
                t._fadeAnimated ? (Ti(this._container, 0), this._removeTimeout = setTimeout(o(fi, void 0, this._container), 200)) : fi(this._container), this.options.interactive && (bi(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container))
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = j(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && vi(this._container), this
            },
            bringToBack: function() {
                return this._map && yi(this._container), this
            },
            _prepareOpen: function(t) {
                var i = this._source;
                if (!i._map) return !1;
                if (i instanceof Xe) {
                    i = null;
                    var e = this._source._layers;
                    for (var n in e)
                        if (e[n]._map) {
                            i = e[n];
                            break
                        } if (!i) return !1;
                    this._source = i
                }
                if (!t)
                    if (i.getCenter) t = i.getCenter();
                    else if (i.getLatLng) t = i.getLatLng();
                else {
                    if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
                    t = i.getBounds().getCenter()
                }
                return this.setLatLng(t), this._map && this.update(), !0
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof i) t.innerHTML = i;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(i)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        i = I(this.options.offset),
                        e = this._getAnchor();
                    this._zoomAnimated ? Si(this._container, t.add(e)) : i = i.add(t).add(e);
                    var n = this._containerBottom = -i.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        });
        oe.include({
            _initOverlay: function(t, i, e, n) {
                var o = i;
                return o instanceof t || (o = new t(n).setContent(i)), e && o.setLatLng(e), o
            }
        }), Ge.include({
            _initOverlay: function(t, i, e, n) {
                var o = e;
                return o instanceof t ? (_(o, n), o._source = this) : (o = i && !n ? i : new t(n, this)).setContent(e), o
            }
        });
        var An = kn.extend({
                options: {
                    pane: "popupPane",
                    offset: [0, 7],
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function(t) {
                    return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, kn.prototype.openOn.call(this, t)
                },
                onAdd: function(t) {
                    kn.prototype.onAdd.call(this, t), t.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof sn || this._source.on("preclick", qi))
                },
                onRemove: function(t) {
                    kn.prototype.onRemove.call(this, t), t.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof sn || this._source.off("preclick", qi))
                },
                getEvents: function() {
                    var t = kn.prototype.getEvents.call(this);
                    return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t
                },
                _initLayout: function() {
                    var t = "leaflet-popup",
                        i = this._container = mi("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                        e = this._wrapper = mi("div", t + "-content-wrapper", i);
                    if (this._contentNode = mi("div", t + "-content", e), Ki(i), Gi(this._contentNode), Ni(i, "contextmenu", qi), this._tipContainer = mi("div", t + "-tip-container", i), this._tip = mi("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                        var n = this._closeButton = mi("a", t + "-close-button", i);
                        n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', Ni(n, "click", (function(t) {
                            Yi(t), this.close()
                        }), this)
                    }
                },
                _updateLayout: function() {
                    var t = this._contentNode,
                        i = t.style;
                    i.width = "", i.whiteSpace = "nowrap";
                    var e = t.offsetWidth;
                    e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                    var n = t.offsetHeight,
                        o = this.options.maxHeight,
                        s = "leaflet-popup-scrolled";
                    o && n > o ? (i.height = o + "px", wi(t, s)) : bi(t, s), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function(t) {
                    var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                        e = this._getAnchor();
                    Si(this._container, i.add(e))
                },
                _adjustPan: function() {
                    if (this.options.autoPan)
                        if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) this._autopanning = !1;
                        else {
                            var t = this._map,
                                i = parseInt(pi(this._container, "marginBottom"), 10) || 0,
                                e = this._container.offsetHeight + i,
                                n = this._containerWidth,
                                o = new A(this._containerLeft, -e - this._containerBottom);
                            o._add(Ei(this._container));
                            var s = t.layerPointToContainerPoint(o),
                                a = I(this.options.autoPanPadding),
                                r = I(this.options.autoPanPaddingTopLeft || a),
                                h = I(this.options.autoPanPaddingBottomRight || a),
                                l = t.getSize(),
                                u = 0,
                                c = 0;
                            s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([u, c]))
                        }
                },
                _getAnchor: function() {
                    return I(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            }),
            On = function(t, i) {
                return new An(t, i)
            };
        oe.mergeOptions({
            closePopupOnClick: !0
        }), oe.include({
            openPopup: function(t, i, e) {
                return this._initOverlay(An, t, i, e).openOn(this), this
            },
            closePopup: function(t) {
                return (t = arguments.length ? t : this._popup) && t.close(), this
            }
        }), Ge.include({
            bindPopup: function(t, i) {
                return this._popup = this._initOverlay(An, this._popup, t, i), this._popupHandlersAdded || (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
                return this._popup && (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function(t) {
                return this._popup && (this instanceof Xe || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this
            },
            closePopup: function() {
                return this._popup && this._popup.close(), this
            },
            togglePopup: function() {
                return this._popup && this._popup.toggle(this), this
            },
            isPopupOpen: function() {
                return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t), this
            },
            getPopup: function() {
                return this._popup
            },
            _openPopup: function(t) {
                if (this._popup && this._map) {
                    Xi(t);
                    var i = t.layer || t.target;
                    this._popup._source !== i || i instanceof sn ? (this._popup._source = i, this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng)
                }
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function(t) {
                13 === t.originalEvent.keyCode && this._openPopup(t)
            }
        });
        var In = kn.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    opacity: .9
                },
                onAdd: function(t) {
                    kn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                        tooltip: this
                    }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0))
                },
                onRemove: function(t) {
                    kn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                        tooltip: this
                    }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0))
                },
                getEvents: function() {
                    var t = kn.prototype.getEvents.call(this);
                    return this.options.permanent || (t.preclick = this.close), t
                },
                _initLayout: function() {
                    var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = mi("div", t), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + a(this))
                },
                _updateLayout: function() {},
                _adjustPan: function() {},
                _setPosition: function(t) {
                    var i, e, n = this._map,
                        o = this._container,
                        s = n.latLngToContainerPoint(n.getCenter()),
                        a = n.layerPointToContainerPoint(t),
                        r = this.options.direction,
                        h = o.offsetWidth,
                        l = o.offsetHeight,
                        u = I(this.options.offset),
                        c = this._getAnchor();
                    "top" === r ? (i = h / 2, e = l) : "bottom" === r ? (i = h / 2, e = 0) : "center" === r ? (i = h / 2, e = l / 2) : "right" === r ? (i = 0, e = l / 2) : "left" === r ? (i = h, e = l / 2) : a.x < s.x ? (r = "right", i = 0, e = l / 2) : (r = "left", i = h + 2 * (u.x + c.x), e = l / 2), t = t.subtract(I(i, e, !0)).add(u).add(c), bi(o, "leaflet-tooltip-right"), bi(o, "leaflet-tooltip-left"), bi(o, "leaflet-tooltip-top"), bi(o, "leaflet-tooltip-bottom"), wi(o, "leaflet-tooltip-" + r), Si(o, t)
                },
                _updatePosition: function() {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t)
                },
                setOpacity: function(t) {
                    this.options.opacity = t, this._container && Ti(this._container, t)
                },
                _animateZoom: function(t) {
                    var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(i)
                },
                _getAnchor: function() {
                    return I(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            }),
            Bn = function(t, i) {
                return new In(t, i)
            };
        oe.include({
            openTooltip: function(t, i, e) {
                return this._initOverlay(In, t, i, e).openOn(this), this
            },
            closeTooltip: function(t) {
                return t.close(), this
            }
        }), Ge.include({
            bindTooltip: function(t, i) {
                return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(In, this._tooltip, t, i), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function() {
                return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function(t) {
                if (t || !this._tooltipHandlersAdded) {
                    var i = t ? "off" : "on",
                        e = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        };
                    this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, e.click = this._openTooltip, this._map ? this._addFocusListeners() : e.add = this._addFocusListeners), this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), this[i](e), this._tooltipHandlersAdded = !t
                }
            },
            openTooltip: function(t) {
                return this._tooltip && (this instanceof Xe || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this
            },
            closeTooltip: function() {
                if (this._tooltip) return this._tooltip.close()
            },
            toggleTooltip: function() {
                return this._tooltip && this._tooltip.toggle(this), this
            },
            isTooltipOpen: function() {
                return this._tooltip.isOpen()
            },
            setTooltipContent: function(t) {
                return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function() {
                return this._tooltip
            },
            _addFocusListeners: function() {
                this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
            },
            _addFocusListenersOnLayer: function(t) {
                var i = "function" == typeof t.getElement && t.getElement();
                i && (Ni(i, "focus", (function() {
                    this._tooltip._source = t, this.openTooltip()
                }), this), Ni(i, "blur", this.closeTooltip, this))
            },
            _setAriaDescribedByOnLayer: function(t) {
                var i = "function" == typeof t.getElement && t.getElement();
                i && i.setAttribute("aria-describedby", this._tooltip._container.id)
            },
            _openTooltip: function(t) {
                if (this._tooltip && this._map)
                    if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                        this._openOnceFlag = !0;
                        var i = this;
                        this._map.once("moveend", (function() {
                            i._openOnceFlag = !1, i._openTooltip(t)
                        }))
                    } else this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function(t) {
                var i, e, n = t.latlng;
                this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
            }
        });
        var Dn = $e.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon"
            },
            createIcon: function(t) {
                var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                    e = this.options;
                if (e.html instanceof Element ? (gi(i), i.appendChild(e.html)) : i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                    var n = I(e.bgPos);
                    i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                }
                return this._setIconStyles(i, "icon"), i
            },
            createShadow: function() {
                return null
            }
        });

        function Rn(t) {
            return new Dn(t)
        }
        $e.Default = tn;
        var Nn = Ge.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: Rt.mobile,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                _(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), fi(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (vi(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (yi(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                if (this._map) {
                    this._removeAllTiles();
                    var t = this._clampZoom(this._map.getZoom());
                    t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()
                }
                return this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof A ? t : new A(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !Rt.ielt9) {
                    Ti(this._container, this.options.opacity);
                    var t = +new Date,
                        i = !1,
                        e = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            Ti(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    e && !this._noPrune && this._pruneTiles(), i && (z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: l,
            _initContainer: function() {
                this._container || (this._container = mi("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var e in this._levels) e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (fi(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = mi("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), l(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n
                }
            },
            _onUpdateLevel: l,
            _onRemoveLevel: l,
            _onCreateLevel: l,
            _pruneTiles: function() {
                if (this._map) {
                    var t, i, e = this._map.getZoom();
                    if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)
                            if ((i = this._tiles[t]).current && !i.active) {
                                var n = i.coords;
                                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                            } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) fi(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, i, e, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(i / 2),
                    a = e - 1,
                    r = new A(+o, +s);
                r.z = +a;
                var h = this._tileCoordsToKey(r),
                    l = this._tiles[h];
                return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), a > n && this._retainParent(o, s, a, n))
            },
            _retainChildren: function(t, i, e, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * i; s < 2 * i + 2; s++) {
                        var a = new A(o, s);
                        a.z = e + 1;
                        var r = this._tileCoordsToKey(a),
                            h = this._tiles[r];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                    }
            },
            _resetView: function(t) {
                var i = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var i = this.options;
                return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
            },
            _setView: function(t, i, e, n) {
                var o = Math.round(i);
                o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
            },
            _setZoomTransforms: function(t, i) {
                for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
            },
            _setZoomTransform: function(t, i, e) {
                var n = this._map.getZoomScale(e, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                Rt.any3d ? Ci(t.el, o, n) : Si(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    i = t.options.crs,
                    e = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var i = this._map,
                    e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                    n = i.getZoomScale(e, this._tileZoom),
                    o = i.project(t, this._tileZoom).floor(),
                    s = i.getSize().divideBy(2 * n);
                return new B(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var i = this._map;
                if (i) {
                    var e = this._clampZoom(i.getZoom());
                    if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            a = [],
                            r = this.options.keepBuffer,
                            h = new B(o.getBottomLeft().subtract([r, -r]), o.getTopRight().add([r, -r]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var l in this._tiles) {
                            var u = this._tiles[l].coords;
                            u.z === this._tileZoom && h.contains(new A(u.x, u.y)) || (this._tiles[l].current = !1)
                        }
                        if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var d = o.min.x; d <= o.max.x; d++) {
                                    var _ = new A(d, c);
                                    if (_.z = this._tileZoom, this._isValidTile(_)) {
                                        var p = this._tiles[this._tileCoordsToKey(_)];
                                        p ? p.current = !0 : a.push(_)
                                    }
                                }
                            if (a.sort((function(t, i) {
                                    return t.distanceTo(s) - i.distanceTo(s)
                                })), 0 !== a.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (d = 0; d < a.length; d++) this._addTile(a[d], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var i = this._map.options.crs;
                if (!i.infinite) {
                    var e = this._globalTileRange;
                    if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return N(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var i = this._map,
                    e = this.getTileSize(),
                    n = t.scaleBy(e),
                    o = n.add(e);
                return [i.unproject(n, t.z), i.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = new R(i[0], i[1]);
                return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var i = t.split(":"),
                    e = new A(+i[0], +i[1]);
                return e.z = +i[2], e
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                i && (fi(i.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: i.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                wi(t, "leaflet-tile");
                var i = this.getTileSize();
                t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = l, t.onmousemove = l, Rt.ielt9 && this.options.opacity < 1 && Ti(t, this.options.opacity)
            },
            _addTile: function(t, i) {
                var e = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && M(o(this._tileReady, this, t, null, s)), Si(s, e), this._tiles[n] = {
                    el: s,
                    coords: t,
                    current: !0
                }, i.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, i, e) {
                i && this.fire("tileerror", {
                    error: i,
                    tile: e,
                    coords: t
                });
                var n = this._tileCoordsToKey(t);
                (e = this._tiles[n]) && (e.loaded = +new Date, this._map._fadeAnimated ? (Ti(e.el, 0), z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (wi(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: e.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Rt.ielt9 || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var i = new A(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
                return i.z = t.z, i
            },
            _pxBoundsToTileRange: function(t) {
                var i = this.getTileSize();
                return new B(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        });

        function Fn(t) {
            return new Nn(t)
        }
        var jn = Nn.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1,
                referrerPolicy: !1
            },
            initialize: function(t, i) {
                this._url = t, (i = _(this, i)).detectRetina && Rt.retina && i.maxZoom > 0 ? (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom = Math.min(i.maxZoom, i.minZoom + 1)) : (i.zoomOffset++, i.maxZoom = Math.max(i.minZoom, i.maxZoom - 1)), i.minZoom = Math.max(0, i.minZoom)) : i.zoomReverse ? i.minZoom = Math.min(i.maxZoom, i.minZoom) : i.maxZoom = Math.max(i.minZoom, i.maxZoom), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, i) {
                return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this
            },
            createTile: function(t, i) {
                var e = document.createElement("img");
                return Ni(e, "load", o(this._tileOnLoad, this, i, e)), Ni(e, "error", o(this._tileOnError, this, i, e)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (e.referrerPolicy = this.options.referrerPolicy), e.alt = "", e.src = this.getTileUrl(t), e
            },
            getTileUrl: function(t) {
                var i = {
                    r: Rt.retina ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var n = this._globalTileRange.max.y - t.y;
                    this.options.tms && (i.y = n), i["-y"] = n
                }
                return f(this._url, e(i, this.options))
            },
            _tileOnLoad: function(t, i) {
                Rt.ielt9 ? setTimeout(o(t, this, null, i), 0) : t(null, i)
            },
            _tileOnError: function(t, i, e) {
                var n = this.options.errorTileUrl;
                n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
            },
            _getSubdomain: function(t) {
                var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[i]
            },
            _abortLoading: function() {
                var t, i;
                for (t in this._tiles)
                    if (this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = l, i.onerror = l, !i.complete)) {
                        i.src = y;
                        var e = this._tiles[t].coords;
                        fi(i), delete this._tiles[t], this.fire("tileabort", {
                            tile: i,
                            coords: e
                        })
                    }
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                if (i) return i.el.setAttribute("src", y), Nn.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, i, e) {
                if (this._map && (!e || e.getAttribute("src") !== y)) return Nn.prototype._tileReady.call(this, t, i, e)
            }
        });

        function Hn(t, i) {
            return new jn(t, i)
        }
        var Wn = jn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, i) {
                this._url = t;
                var n = e({}, this.defaultWmsParams);
                for (var o in i) o in this.options || (n[o] = i[o]);
                var s = (i = _(this, i)).detectRetina && Rt.retina ? 2 : 1,
                    a = this.getTileSize();
                n.width = a.x * s, n.height = a.y * s, this.wmsParams = n
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[i] = this._crs.code, jn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = this._crs,
                    n = D(e.project(i[0]), e.project(i[1])),
                    o = n.min,
                    s = n.max,
                    a = (this._wmsVersion >= 1.3 && this._crs === Ve ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                    r = jn.prototype.getTileUrl.call(this, t);
                return r + p(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a
            },
            setParams: function(t, i) {
                return e(this.wmsParams, t), i || this.redraw(), this
            }
        });

        function Un(t, i) {
            return new Wn(t, i)
        }
        jn.WMS = Wn, Hn.wms = Un;
        var Vn = Ge.extend({
                options: {
                    padding: .1
                },
                initialize: function(t) {
                    _(this, t), a(this), this._layers = this._layers || {}
                },
                onAdd: function() {
                    this._container || (this._initContainer(), wi(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function() {
                    this.off("update", this._updatePaths, this), this._destroyContainer()
                },
                getEvents: function() {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                },
                _onAnimZoom: function(t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function() {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function(t, i) {
                    var e = this._map.getZoomScale(i, this._zoom),
                        n = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        o = this._map.project(this._center, i),
                        s = n.multiplyBy(-e).add(o).subtract(this._map._getNewPixelOrigin(t, i));
                    Rt.any3d ? Ci(this._container, s, e) : Si(this._container, s)
                },
                _reset: function() {
                    for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                },
                _onZoomEnd: function() {
                    for (var t in this._layers) this._layers[t]._project()
                },
                _updatePaths: function() {
                    for (var t in this._layers) this._layers[t]._update()
                },
                _update: function() {
                    var t = this.options.padding,
                        i = this._map.getSize(),
                        e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                    this._bounds = new B(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }),
            qn = Vn.extend({
                options: {
                    tolerance: 0
                },
                getEvents: function() {
                    var t = Vn.prototype.getEvents.call(this);
                    return t.viewprereset = this._onViewPreReset, t
                },
                _onViewPreReset: function() {
                    this._postponeUpdatePaths = !0
                },
                onAdd: function() {
                    Vn.prototype.onAdd.call(this), this._draw()
                },
                _initContainer: function() {
                    var t = this._container = document.createElement("canvas");
                    Ni(t, "mousemove", this._onMouseMove, this), Ni(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ni(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d")
                },
                _destroyContainer: function() {
                    z(this._redrawRequest), delete this._ctx, fi(this._container), ji(this._container), delete this._container
                },
                _updatePaths: function() {
                    if (!this._postponeUpdatePaths) {
                        for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                        this._redraw()
                    }
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        Vn.prototype._update.call(this);
                        var t = this._bounds,
                            i = this._container,
                            e = t.getSize(),
                            n = Rt.retina ? 2 : 1;
                        Si(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Rt.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                    }
                },
                _reset: function() {
                    Vn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                },
                _initPath: function(t) {
                    this._updateDashArray(t), this._layers[a(t)] = t;
                    var i = t._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function(t) {
                    this._requestRedraw(t)
                },
                _removePath: function(t) {
                    var i = t._order,
                        e = i.next,
                        n = i.prev;
                    e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[a(t)], this._requestRedraw(t)
                },
                _updatePath: function(t) {
                    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                },
                _updateStyle: function(t) {
                    this._updateDashArray(t), this._requestRedraw(t)
                },
                _updateDashArray: function(t) {
                    if ("string" == typeof t.options.dashArray) {
                        var i, e, n = t.options.dashArray.split(/[, ]+/),
                            o = [];
                        for (e = 0; e < n.length; e++) {
                            if (i = Number(n[e]), isNaN(i)) return;
                            o.push(i)
                        }
                        t.options._dashArray = o
                    } else t.options._dashArray = t.options.dashArray
                },
                _requestRedraw: function(t) {
                    this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this))
                },
                _extendRedrawBounds: function(t) {
                    if (t._pxBounds) {
                        var i = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new B, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                    }
                },
                _redraw: function() {
                    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                },
                _clear: function() {
                    var t = this._redrawBounds;
                    if (t) {
                        var i = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                    } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()
                },
                _draw: function() {
                    var t, i = this._redrawBounds;
                    if (this._ctx.save(), i) {
                        var e = i.getSize();
                        this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                    this._drawing = !1, this._ctx.restore()
                },
                _updatePoly: function(t, i) {
                    if (this._drawing) {
                        var e, n, o, s, a = t._parts,
                            r = a.length,
                            h = this._ctx;
                        if (r) {
                            for (h.beginPath(), e = 0; e < r; e++) {
                                for (n = 0, o = a[e].length; n < o; n++) s = a[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                                i && h.closePath()
                            }
                            this._fillStroke(h, t)
                        }
                    }
                },
                _updateCircle: function(t) {
                    if (this._drawing && !t._empty()) {
                        var i = t._point,
                            e = this._ctx,
                            n = Math.max(Math.round(t._radius), 1),
                            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                        1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
                    }
                },
                _fillStroke: function(t, i) {
                    var e = i.options;
                    e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
                },
                _onClick: function(t) {
                    for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && ("click" !== t.type && "preclick" !== t.type || !this._map._draggableMoved(i)) && (e = i);
                    this._fireEvent(!!e && [e], t)
                },
                _onMouseMove: function(t) {
                    if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                        var i = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, i)
                    }
                },
                _handleMouseOut: function(t) {
                    var i = this._hoveredLayer;
                    i && (bi(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
                },
                _handleMouseHover: function(t, i) {
                    if (!this._mouseHoverThrottled) {
                        for (var e, n, s = this._drawFirst; s; s = s.next)(e = s.layer).options.interactive && e._containsPoint(i) && (n = e);
                        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (wi(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(o((function() {
                            this._mouseHoverThrottled = !1
                        }), this), 32)
                    }
                },
                _fireEvent: function(t, i, e) {
                    this._map._fireDOMEvent(i, e || i.type, t)
                },
                _bringToFront: function(t) {
                    var i = t._order;
                    if (i) {
                        var e = i.next,
                            n = i.prev;
                        e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
                    }
                },
                _bringToBack: function(t) {
                    var i = t._order;
                    if (i) {
                        var e = i.next,
                            n = i.prev;
                        n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
                    }
                }
            });

        function Gn(t) {
            return Rt.canvas ? new qn(t) : null
        }
        var Kn = function() {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch (t) {}
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }(),
            Yn = {
                _initContainer: function() {
                    this._container = mi("div", "leaflet-vml-container")
                },
                _update: function() {
                    this._map._animatingZoom || (Vn.prototype._update.call(this), this.fire("update"))
                },
                _initPath: function(t) {
                    var i = t._container = Kn("shape");
                    wi(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = Kn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[a(t)] = t
                },
                _addPath: function(t) {
                    var i = t._container;
                    this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
                },
                _removePath: function(t) {
                    var i = t._container;
                    fi(i), t.removeInteractiveTarget(i), delete this._layers[a(t)]
                },
                _updateStyle: function(t) {
                    var i = t._stroke,
                        e = t._fill,
                        n = t.options,
                        o = t._container;
                    o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = Kn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = Kn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
                },
                _updateCircle: function(t) {
                    var i = t._point.round(),
                        e = Math.round(t._radius),
                        n = Math.round(t._radiusY || e);
                    this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
                },
                _setPath: function(t, i) {
                    t._path.v = i
                },
                _bringToFront: function(t) {
                    vi(t._container)
                },
                _bringToBack: function(t) {
                    yi(t._container)
                }
            },
            Xn = Rt.vml ? Kn : J,
            Jn = Vn.extend({
                _initContainer: function() {
                    this._container = Xn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Xn("g"), this._container.appendChild(this._rootGroup)
                },
                _destroyContainer: function() {
                    fi(this._container), ji(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        Vn.prototype._update.call(this);
                        var t = this._bounds,
                            i = t.getSize(),
                            e = this._container;
                        this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Si(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                    }
                },
                _initPath: function(t) {
                    var i = t._path = Xn("path");
                    t.options.className && wi(i, t.options.className), t.options.interactive && wi(i, "leaflet-interactive"), this._updateStyle(t), this._layers[a(t)] = t
                },
                _addPath: function(t) {
                    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                },
                _removePath: function(t) {
                    fi(t._path), t.removeInteractiveTarget(t._path), delete this._layers[a(t)]
                },
                _updatePath: function(t) {
                    t._project(), t._update()
                },
                _updateStyle: function(t) {
                    var i = t._path,
                        e = t.options;
                    i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
                },
                _updatePoly: function(t, i) {
                    this._setPath(t, $(t._parts, i))
                },
                _updateCircle: function(t) {
                    var i = t._point,
                        e = Math.max(Math.round(t._radius), 1),
                        n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                        o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                    this._setPath(t, o)
                },
                _setPath: function(t, i) {
                    t._path.setAttribute("d", i)
                },
                _bringToFront: function(t) {
                    vi(t._path)
                },
                _bringToBack: function(t) {
                    yi(t._path)
                }
            });

        function $n(t) {
            return Rt.svg || Rt.vml ? new Jn(t) : null
        }
        Rt.vml && Jn.include(Yn), oe.include({
            getRenderer: function(t) {
                var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
            },
            _getPaneRenderer: function(t) {
                if ("overlayPane" === t || void 0 === t) return !1;
                var i = this._paneRenderers[t];
                return void 0 === i && (i = this._createRenderer({
                    pane: t
                }), this._paneRenderers[t] = i), i
            },
            _createRenderer: function(t) {
                return this.options.preferCanvas && Gn(t) || $n(t)
            }
        });
        var Qn = dn.extend({
            initialize: function(t, i) {
                dn.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
            },
            setBounds: function(t) {
                return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        });

        function to(t, i) {
            return new Qn(t, i)
        }
        Jn.create = Xn, Jn.pointsToPath = $, pn.geometryToLayer = mn, pn.coordsToLatLng = gn, pn.coordsToLatLngs = vn, pn.latLngToCoords = yn, pn.latLngsToCoords = xn, pn.getFeature = wn, pn.asFeature = bn, oe.mergeOptions({
            boxZoom: !0
        });
        var io = ge.extend({
            initialize: function(t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function() {
                Ni(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                ji(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function() {
                return this._moved
            },
            _destroy: function() {
                fi(this._pane), delete this._pane
            },
            _resetState: function() {
                this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function() {
                0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function(t) {
                if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                this._clearDeferredResetState(), this._resetState(), si(), ki(), this._startPoint = this._map.mouseEventToContainerPoint(t), Ni(document, {
                    contextmenu: Xi,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseMove: function(t) {
                this._moved || (this._moved = !0, this._box = mi("div", "leaflet-zoom-box", this._container), wi(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                var i = new B(this._point, this._startPoint),
                    e = i.getSize();
                Si(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
            },
            _finish: function() {
                this._moved && (fi(this._box), bi(this._container, "leaflet-crosshair")), ai(), Ai(), ji(document, {
                    contextmenu: Xi,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseUp: function(t) {
                if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                    this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
                    var i = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                    this._map.fitBounds(i).fire("boxzoomend", {
                        boxZoomBounds: i
                    })
                }
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState())
            }
        });
        oe.addInitHook("addHandler", "boxZoom", io), oe.mergeOptions({
            doubleClickZoom: !0
        });
        var eo = ge.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var i = this._map,
                    e = i.getZoom(),
                    n = i.options.zoomDelta,
                    o = t.originalEvent.shiftKey ? e - n : e + n;
                "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
            }
        });
        oe.addInitHook("addHandler", "doubleClickZoom", eo), oe.mergeOptions({
            dragging: !0,
            inertia: !0,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
        });
        var no = ge.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new xe(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                }
                wi(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function() {
                bi(this._map._container, "leaflet-grab"), bi(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            moving: function() {
                return this._draggable && this._draggable._moving
            },
            _onDragStart: function() {
                var t = this._map;
                if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                    var i = N(this._map.options.maxBounds);
                    this._offsetLimit = D(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                } else this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function(t) {
                if (this._map.options.inertia) {
                    var i = this._lastTime = +new Date,
                        e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                    this._positions.push(e), this._times.push(i), this._prunePositions(i)
                }
                this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function(t) {
                for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function() {
                var t = this._map.getSize().divideBy(2),
                    i = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function(t, i) {
                return t - (t - i) * this._viscosity
            },
            _onPreDragLimit: function() {
                if (this._viscosity && this._offsetLimit) {
                    var t = this._draggable._newPos.subtract(this._draggable._startPos),
                        i = this._offsetLimit;
                    t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                }
            },
            _onPreDragWrap: function() {
                var t = this._worldWidth,
                    i = Math.round(t / 2),
                    e = this._initialWorldOffset,
                    n = this._draggable._newPos.x,
                    o = (n - i + e) % t + i - e,
                    s = (n + i + e) % t - i - e,
                    a = Math.abs(o + e) < Math.abs(s + e) ? o : s;
                this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
            },
            _onDragEnd: function(t) {
                var i = this._map,
                    e = i.options,
                    n = !e.inertia || t.noInertia || this._times.length < 2;
                if (i.fire("dragend", t), n) i.fire("moveend");
                else {
                    this._prunePositions(+new Date);
                    var o = this._lastPos.subtract(this._positions[0]),
                        s = (this._lastTime - this._times[0]) / 1e3,
                        a = e.easeLinearity,
                        r = o.multiplyBy(a / s),
                        h = r.distanceTo([0, 0]),
                        l = Math.min(e.inertiaMaxSpeed, h),
                        u = r.multiplyBy(l / h),
                        c = l / (e.inertiaDeceleration * a),
                        d = u.multiplyBy(-c / 2).round();
                    d.x || d.y ? (d = i._limitOffset(d, i.options.maxBounds), M((function() {
                        i.panBy(d, {
                            duration: c,
                            easeLinearity: a,
                            noMoveStart: !0,
                            animate: !0
                        })
                    }))) : i.fire("moveend")
                }
            }
        });
        oe.addInitHook("addHandler", "dragging", no), oe.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
        });
        var oo = ge.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173]
            },
            initialize: function(t) {
                this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function() {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"), Ni(t, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.on({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            removeHooks: function() {
                this._removeHooks(), ji(this._map._container, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.off({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var t = document.body,
                        i = document.documentElement,
                        e = t.scrollTop || i.scrollTop,
                        n = t.scrollLeft || i.scrollLeft;
                    this._map._container.focus(), window.scrollTo(n, e)
                }
            },
            _onFocus: function() {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function(t) {
                var i, e, n = this._panKeys = {},
                    o = this.keyCodes;
                for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
                for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
                for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
                for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
            },
            _setZoomDelta: function(t) {
                var i, e, n = this._zoomKeys = {},
                    o = this.keyCodes;
                for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
                for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
            },
            _addHooks: function() {
                Ni(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                ji(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var i, e = t.keyCode,
                        n = this._map;
                    if (e in this._panKeys) {
                        if (!n._panAnim || !n._panAnim._inProgress)
                            if (i = this._panKeys[e], t.shiftKey && (i = I(i).multiplyBy(3)), n.options.maxBounds && (i = n._limitOffset(I(i), n.options.maxBounds)), n.options.worldCopyJump) {
                                var o = n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(i)));
                                n.panTo(o)
                            } else n.panBy(i)
                    } else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                    else {
                        if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                        n.closePopup()
                    }
                    Xi(t)
                }
            }
        });
        oe.addInitHook("addHandler", "keyboard", oo), oe.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
        });
        var so = ge.extend({
            addHooks: function() {
                Ni(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function() {
                ji(this._map._container, "wheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function(t) {
                var i = te(t),
                    e = this._map.options.wheelDebounceTime;
                this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var n = Math.max(e - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(o(this._performZoom, this), n), Xi(t)
            },
            _performZoom: function() {
                var t = this._map,
                    i = t.getZoom(),
                    e = this._map.options.zoomSnap || 0;
                t._stop();
                var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                    o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                    s = e ? Math.ceil(o / e) * e : o,
                    a = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
                this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + a) : t.setZoomAround(this._lastMousePos, i + a))
            }
        });
        oe.addInitHook("addHandler", "scrollWheelZoom", so);
        var ao = 600;
        oe.mergeOptions({
            tapHold: Rt.touchNative && Rt.safari && Rt.mobile,
            tapTolerance: 15
        });
        var ro = ge.extend({
            addHooks: function() {
                Ni(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                ji(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (clearTimeout(this._holdTimeout), 1 === t.touches.length) {
                    var i = t.touches[0];
                    this._startPos = this._newPos = new A(i.clientX, i.clientY), this._holdTimeout = setTimeout(o((function() {
                        this._cancel(), this._isTapValid() && (Ni(document, "touchend", Yi), Ni(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", i))
                    }), this), ao), Ni(document, "touchend touchcancel contextmenu", this._cancel, this), Ni(document, "touchmove", this._onMove, this)
                }
            },
            _cancelClickPrevent: function t() {
                ji(document, "touchend", Yi), ji(document, "touchend touchcancel", t)
            },
            _cancel: function() {
                clearTimeout(this._holdTimeout), ji(document, "touchend touchcancel contextmenu", this._cancel, this), ji(document, "touchmove", this._onMove, this)
            },
            _onMove: function(t) {
                var i = t.touches[0];
                this._newPos = new A(i.clientX, i.clientY)
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _simulateEvent: function(t, i) {
                var e = new MouseEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    screenX: i.screenX,
                    screenY: i.screenY,
                    clientX: i.clientX,
                    clientY: i.clientY
                });
                e._simulated = !0, i.target.dispatchEvent(e)
            }
        });
        oe.addInitHook("addHandler", "tapHold", ro), oe.mergeOptions({
            touchZoom: Rt.touch,
            bounceAtZoomLimits: !0
        });
        var ho = ge.extend({
            addHooks: function() {
                wi(this._map._container, "leaflet-touch-zoom"), Ni(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                bi(this._map._container, "leaflet-touch-zoom"), ji(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var i = this._map;
                if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                    var e = i.mouseEventToContainerPoint(t.touches[0]),
                        n = i.mouseEventToContainerPoint(t.touches[1]);
                    this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), Ni(document, "touchmove", this._onTouchMove, this), Ni(document, "touchend touchcancel", this._onTouchEnd, this), Yi(t)
                }
            },
            _onTouchMove: function(t) {
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var i = this._map,
                        e = i.mouseEventToContainerPoint(t.touches[0]),
                        n = i.mouseEventToContainerPoint(t.touches[1]),
                        s = e.distanceTo(n) / this._startDist;
                    if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                        if (this._center = this._startLatLng, 1 === s) return
                    } else {
                        var a = e._add(n)._divideBy(2)._subtract(this._centerPoint);
                        if (1 === s && 0 === a.x && 0 === a.y) return;
                        this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                    }
                    this._moved || (i._moveStart(!0, !1), this._moved = !0), z(this._animRequest);
                    var r = o(i._move, i, this._center, this._zoom, {
                        pinch: !0,
                        round: !1
                    }, void 0);
                    this._animRequest = M(r, this, !0), Yi(t)
                }
            },
            _onTouchEnd: function() {
                this._moved && this._zooming ? (this._zooming = !1, z(this._animRequest), ji(document, "touchmove", this._onTouchMove, this), ji(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
        });
        oe.addInitHook("addHandler", "touchZoom", ho), oe.BoxZoom = io, oe.DoubleClickZoom = eo, oe.Drag = no, oe.Keyboard = oo, oe.ScrollWheelZoom = so, oe.TapHold = ro, oe.TouchZoom = ho, t.Bounds = B, t.Browser = Rt, t.CRS = W, t.Canvas = qn, t.Circle = hn, t.CircleMarker = an, t.Class = S, t.Control = ae, t.DivIcon = Dn, t.DivOverlay = kn, t.DomEvent = ee, t.DomUtil = Ri, t.Draggable = xe, t.Evented = k, t.FeatureGroup = Xe, t.GeoJSON = pn, t.GridLayer = Nn, t.Handler = ge, t.Icon = $e, t.ImageOverlay = Mn, t.LatLng = F, t.LatLngBounds = R, t.Layer = Ge, t.LayerGroup = Ke, t.LineUtil = Fe, t.Map = oe, t.Marker = nn, t.Mixin = ve, t.Path = sn, t.Point = A, t.PolyUtil = Te, t.Polygon = dn, t.Polyline = un, t.Popup = An, t.PosAnimation = ne, t.Projection = We, t.Rectangle = Qn, t.Renderer = Vn, t.SVG = Jn, t.SVGOverlay = En, t.TileLayer = jn, t.Tooltip = In, t.Transformation = G, t.Util = C, t.VideoOverlay = Cn, t.bind = o, t.bounds = D, t.canvas = Gn, t.circle = ln, t.circleMarker = rn, t.control = re, t.divIcon = Rn, t.extend = e, t.featureGroup = Je, t.geoJSON = Ln, t.geoJson = Tn, t.gridLayer = Fn, t.icon = Qe, t.imageOverlay = zn, t.latLng = j, t.latLngBounds = N, t.layerGroup = Ye, t.map = se, t.marker = on, t.point = I, t.polygon = _n, t.polyline = cn, t.popup = On, t.rectangle = to, t.setOptions = _, t.stamp = a, t.svg = $n, t.svgOverlay = Zn, t.tileLayer = Hn, t.tooltip = Bn, t.transformation = K, t.version = i, t.videoOverlay = Sn;
        var lo = window.L;
        t.noConflict = function() {
            return window.L = lo, this
        }, window.L = t
    })(o.exports);
    var s = o.exports;
    class a {
        static getIconColor(t) {
            return t.color && a.supportedIconColors.includes(t.color) ? t.color : "red"
        }
        static sanitizeAndFilterFrames(t, i) {
            var n, o;
            let s = (null === (n = t.radar) || void 0 === n ? void 0 : n.past) || [],
                a = (null === (o = t.radar) || void 0 === o ? void 0 : o.nowcast) || [];
            if (i.maxHistoryFrames >= 0 && s.length >= i.maxHistoryFrames) try {
                s = s.slice(s.length - i.maxHistoryFrames)
            } catch (t) {
                e.warn("Error to limit history frames", t)
            }
            if (i.maxForecastFrames >= 0 && a.length >= i.maxForecastFrames) try {
                a = a.slice(a.length - i.maxForecastFrames)
            } catch (t) {
                e.warn("Error to limit forecast frames", t)
            }
            return {
                historyFrames: s,
                forecastFrames: a
            }
        }
        static changeSubstituteModuleVisibility(t, i) {
            if (i.substitudeModules) try {
                for (const n of i.substitudeModules) {
                    const i = MM.getModules().find((t => t.name === n));
                    i ? t ? i.show(300, (() => {}), {
                        lockString: "MMM-RAIN-MAP"
                    }) : i.hide(300, (() => {}), {
                        lockString: "MMM-RAIN-MAP"
                    }) : e.warn(`No substitute module found with name ${n}`)
                }
            } catch (t) {
                e.error(t)
            }
        }
    }
    a.supportedIconColors = ["black", "blue", "gold", "green", "grey", "orange", "red", "violet", "yellow"], a.rainConditions = ["09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n", "showers", "thunderstorm", "sleet", "rain", "snow"], Module.register("MMM-RAIN-MAP", {
        defaults: {
            animationSpeedMs: 400,
            colorizeTime: !0,
            colorScheme: 2,
            defaultZoomLevel: 8,
            displayClockSymbol: !0,
            displayTime: !0,
            displayTimeline: !0,
            displayHoursBeforeRain: -1,
            invertColors: !1,
            substitudeModules: [],
            extraDelayLastFrameMs: 2e3,
            extraDelayCurrentFrameMs: 2e3,
            markers: [{
                lat: 49.41,
                lng: 8.717,
                color: "red"
            }, {
                lat: 48.856,
                lng: 2.35,
                color: "green"
            }],
            mapPositions: [{
                lat: 49.41,
                lng: 8.717,
                zoom: 9,
                loops: 1
            }, {
                lat: 49.41,
                lng: 8.717,
                zoom: 6,
                loops: 2
            }, {
                lat: 48.856,
                lng: 2.35,
                zoom: 6,
                loops: 1
            }, {
                lat: 48.856,
                lng: 2.35,
                zoom: 9,
                loops: 2
            }, {
                lat: 49.15,
                lng: 6.154,
                zoom: 5,
                loops: 2
            }],
            mapUrl: "https://a.tile.openstreetmap.de/${z}/${x}/${y}.png",
            mapHeight: "420px",
            mapWidth: "420px",
            maxHistoryFrames: -1,
            maxForecastFrames: -1,
            timeFormat: config.timeFormat || 24,
            timezone: null,
            updateIntervalInSeconds: 300
        },
        runtimeData: {
            animationPosition: 0,
            animationTimer: null,
            map: null,
            mapPosition: 0,
            numHistoryFrames: 0,
            numForecastFrames: 0,
            loopNumber: 1,
            radarLayers: [],
            timeDiv: null,
            timeframes: []
        },
        getStyles: () => ["font-awesome.css", "leaflet.css", "MMM-RAIN-MAP.css"],
        getScripts: () => ["moment.js", "moment-timezone.js"],
        getTranslations: () => ({
            en: "translations/en.json",
            de: "translations/de.json"
        }),
        getDom() {
            const t = document.createElement("div");
            if (t.classList.add("rain-map-wrapper"), this.config.invertColors && t.classList.add("inverted-colors"), this.config.displayTime) {
                const i = document.createElement("div");
                if (i.classList.add("rain-map-time-wrapper"), i.innerHTML = "" + (this.config.displayClockSymbol ? "<i class='fas fa-clock'></i>" : ""), this.runtimeData.timeDiv = document.createElement("span"), this.runtimeData.timeDiv.classList.add("rain-map-time"), i.appendChild(this.runtimeData.timeDiv), this.config.displayTimeline) {
                    const t = document.createElement("span");
                    t.classList.add("rain-map-timeline-wrapper"), this.runtimeData.sliderDiv = document.createElement("span"), this.runtimeData.sliderDiv.classList.add("rain-map-timeslider"), t.appendChild(this.runtimeData.sliderDiv), this.runtimeData.timelineDiv = document.createElement("span"), this.runtimeData.timelineDiv.classList.add("rain-map-timeline"), t.appendChild(this.runtimeData.timelineDiv), i.appendChild(t)
                }
                t.appendChild(i)
            }
            const i = document.createElement("div");
            i.style.height = this.config.mapHeight, i.style.width = this.config.mapWidth, t.appendChild(i), document.body.appendChild(t);
            const e = this.config.mapPositions[0];
            this.runtimeData.map = s.map(i, {
                zoomControl: !1,
                trackResize: !1,
                attributionControl: !1
            }).setView([e.lat, e.lng], e.zoom), s.tileLayer(this.config.mapUrl.split("$").join("")).addTo(this.runtimeData.map);
            for (const t of this.config.markers) s.marker([t.lat, t.lng], {
                icon: new s.Icon({
                    iconUrl: this.file(`img/marker-icon-2x-${a.getIconColor(t)}.png`),
                    shadowUrl: this.file("img/marker-shadow.png"),
                    iconSize: [25, 41],
                    shadowSize: [41, 41]
                })
            }).addTo(this.runtimeData.map);
            return document.body.removeChild(t), t
        },
        start() {
            this.config.displayOnlyOnRain && e.warn("MMM-RAIN-MAP option 'displayOnlyOnRain# is deprecated. Use 'displayHoursBeforeRain' instead."), this.scheduleUpdate(), this.play()
        },
        scheduleUpdate() {
            this.loadData(), setInterval((() => {
                this.loadData()
            }), 1e3 * this.config.updateIntervalInSeconds)
        },
        play() {
            let t = 0;
            this.runtimeData.animationPosition === this.runtimeData.timeframes.length - 1 ? t = this.config.extraDelayLastFrameMs : this.runtimeData.animationPosition === this.runtimeData.numHistoryFrames - 1 && (t = this.config.extraDelayCurrentFrameMs), this.runtimeData.animationTimer = setTimeout((() => {
                this.tick(), this.play()
            }), this.config.animationSpeedMs + t)
        },
        tick() {
            if (!this.runtimeData.map || 0 === this.runtimeData.timeframes.length) return;
            const t = this.runtimeData.animationPosition < this.runtimeData.timeframes.length - 1 ? this.runtimeData.animationPosition + 1 : 0;
            if (0 === t && this.config.mapPositions.length > 1) {
                const t = this.config.mapPositions[this.runtimeData.mapPosition];
                if (this.runtimeData.loopNumber === (t.loops || 1)) {
                    this.runtimeData.loopNumber = 1;
                    const t = this.runtimeData.mapPosition === this.config.mapPositions.length - 1 ? 0 : this.runtimeData.mapPosition + 1;
                    this.runtimeData.mapPosition = t;
                    const i = this.config.mapPositions[t];
                    this.runtimeData.map.setView(new s.LatLng(i.lat, i.lng), i.zoom || this.config.defaultZoomLevel, {
                        animation: !1
                    })
                } else this.runtimeData.loopNumber += 1
            }
            const i = this.runtimeData.timeframes[this.runtimeData.animationPosition],
                e = this.runtimeData.radarLayers[i.time],
                n = this.runtimeData.timeframes[t],
                o = this.runtimeData.radarLayers[n.time];
            if (o && o.setOpacity(1), e && e.setOpacity(.001), this.config.displayTime) {
                const i = moment(1e3 * n.time);
                this.config.timezone && i.tz(this.config.timezone);
                const e = 24 === this.config.timeFormat ? "HH" : "h";
                this.runtimeData.timeDiv.innerHTML = `${i.format(`${e}:mm`)}`, this.config.colorizeTime && (t < this.runtimeData.numHistoryFrames - 1 ? this.runtimeData.timeDiv.classList = "rain-map-time rain-map-history" : t === this.runtimeData.numHistoryFrames - 1 ? this.runtimeData.timeDiv.classList = "rain-map-time rain-map-now" : this.runtimeData.timeDiv.classList = "rain-map-time rain-map-forecast"), this.config.displayTimeline && (this.runtimeData.sliderDiv.style.left = this.runtimeData.percentPerFrame * t + "%")
            }
            this.runtimeData.animationPosition = t
        },
        loadData() {
            fetch("https://api.rainviewer.com/public/weather-maps.json").then((t => n(this, void 0, void 0, (function*() {
                if (t.ok) {
                    const i = yield t.json(), {
                        historyFrames: n,
                        forecastFrames: o
                    } = a.sanitizeAndFilterFrames(i, this.config);
                    this.runtimeData.numHistoryFrames = n.length, this.runtimeData.numForecastFrames = o.length, this.runtimeData.timeframes = [...n, ...o], this.runtimeData.map.eachLayer((t => {
                        t instanceof s.TileLayer && t._url.includes("rainviewer.com") && this.runtimeData.map.removeLayer(t)
                    })), this.runtimeData.radarLayers = [];
                    for (const t of this.runtimeData.timeframes) {
                        const i = new s.TileLayer(`https://tilecache.rainviewer.com${t.path}/256/{z}/{x}/{y}/${this.config.colorScheme}/1_1.png`, {
                            tileSize: 256,
                            opacity: .001,
                            zIndex: t
                        });
                        this.runtimeData.radarLayers[t.time] = i, this.runtimeData.map.hasLayer(i) || this.runtimeData.map.addLayer(i)
                    }
                    if (this.runtimeData.animationPosition = 0, this.config.displayTimeline) try {
                        this.runtimeData.percentPerFrame = 100 / (this.runtimeData.numHistoryFrames + this.runtimeData.numForecastFrames);
                        const t = (this.runtimeData.numHistoryFrames - 1) * this.runtimeData.percentPerFrame,
                            i = this.runtimeData.numForecastFrames * this.runtimeData.percentPerFrame;
                        this.runtimeData.timelineDiv.style.background = `linear-gradient(to right, var(--color-history) 0% ${t}%, var(--color-now) ${t}% ${t+this.runtimeData.percentPerFrame}%, var(--color-forecast) ${i}%)`
                    } catch (t) {
                        e.warn("Error rendering the map timeline")
                    }
                    e.log("Done processing latest RainViewer API request.")
                } else e.error("Error fetching RainViewer timeframes", t.statusText)
            }))))
        },
        notificationReceived(t, i) {
            var e, n;
            if (this.config.displayHoursBeforeRain >= 0)
                if ("DOM_OBJECTS_CREATED" === t && a.changeSubstituteModuleVisibility(!1, this.config), 0 === this.config.displayHoursBeforeRain) {
                    if ("OPENWEATHER_FORECAST_WEATHER_UPDATE" === t) {
                        const t = null === (n = null === (e = i.current) || void 0 === e ? void 0 : e.weather[0]) || void 0 === n ? void 0 : n.icon;
                        this.handleCurrentWeatherCondition(t)
                    } else if ("CURRENTWEATHER_TYPE" === t) {
                        const t = i.type;
                        this.handleCurrentWeatherCondition(t)
                    }
                } else this.config.displayHoursBeforeRain > 0 && "WEATHER_UPDATED" === t && this.handleWeatherUpdate(i)
        },
        handleWeatherUpdate(t) {
            const i = t.hourlyArray;
            let n = 1 / 0;
            const o = Date.now();
            for (const t of i) a.rainConditions.findIndex((i => t.weatherType.includes(i))) >= 0 && t.date - o < n && (n = t.date - o);
            n = n / 1e3 / 60 / 60, e.log("Next rain will be in %.1f hours.", n), n < this.config.displayHoursBeforeRain ? this.handleCurrentWeatherCondition("rain") : this.handleCurrentWeatherCondition("")
        },
        handleCurrentWeatherCondition(t) {
            t && a.rainConditions.findIndex((i => t.includes(i))) >= 0 ? this.runtimeData.animationTimer || (a.changeSubstituteModuleVisibility(!1, this.config), this.show(300, (() => {}), {
                lockString: this.identifier
            }), this.play()) : this.runtimeData.animationTimer && (this.hide(300, (() => {}), {
                lockString: this.identifier
            }), clearTimeout(this.runtimeData.animationTimer), this.runtimeData.animationTimer = null, a.changeSubstituteModuleVisibility(!0, this.config))
        }
    })
}(Log);

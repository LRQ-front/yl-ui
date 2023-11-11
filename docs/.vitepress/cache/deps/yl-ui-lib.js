import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-NLG5GKHW.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-CF3WPAMV.js";

// docs/node_modules/yl-ui-lib/dist/yl-ui.umd.js
var require_yl_ui_umd = __commonJS({
  "docs/node_modules/yl-ui-lib/dist/yl-ui.umd.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t((init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["yl-ui"] = t((init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : e["yl-ui"] = t(e.Vue);
    }(self, (e) => (() => {
      "use strict";
      var t = { 274: (e2, t2, n2) => {
        n2.d(t2, { default: () => u });
        var o2 = n2(789), r2 = ["disabled"], i = { key: 2 }, l = { key: 3 };
        const c = (0, o2.defineComponent)({ name: "YlButton", props: { type: { type: String, default: "default", validator: function(e3) {
          return ["default", "primary", "success", "warning", "danger", "info"].includes(e3);
        } }, size: String, icon: { type: String, default: "" }, disabled: Boolean, round: Boolean, loading: Boolean }, setup: function(e3, t3) {
          return { classs: (0, o2.computed)(function() {
            return ["yl-button", "yl-button--" + e3.type, e3.size ? "yl-button--" + e3.size : "", { "is-disabled": e3.disabled, "is-loading": e3.loading, "is-round": e3.round }];
          }), handleClick: function(e4) {
            t3.emit("click", e4);
          } };
        } }), a = (0, n2(744).Z)(c, [["render", function(e3, t3, n3, c2, a2, u2) {
          var s = (0, o2.resolveComponent)("yl-icon");
          return (0, o2.openBlock)(), (0, o2.createElementBlock)("button", { class: (0, o2.normalizeClass)(e3.classs), disabled: e3.disabled, onClick: t3[0] || (t3[0] = function() {
            return e3.handleClick && e3.handleClick.apply(e3, arguments);
          }) }, [e3.loading ? ((0, o2.openBlock)(), (0, o2.createBlock)(s, { key: 0, name: "loading" })) : (0, o2.createCommentVNode)("v-if", true), e3.icon && !e3.loading ? ((0, o2.openBlock)(), (0, o2.createBlock)(s, { key: 1, name: e3.icon }, null, 8, ["name"])) : (0, o2.createCommentVNode)("v-if", true), e3.$slots.default ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", i, [(0, o2.renderSlot)(e3.$slots, "default")])) : (0, o2.createCommentVNode)("v-if", true), e3.$slots.default || e3.icon || e3.loading ? (0, o2.createCommentVNode)("v-if", true) : ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", l, (0, o2.toDisplayString)(e3.type), 1))], 10, r2);
        }]]);
        a.install = function(e3) {
          e3.component(a.name, a);
        };
        const u = a;
      }, 976: (e2, t2, n2) => {
        n2.d(t2, { default: () => l });
        var o2 = n2(789);
        const r2 = (0, o2.defineComponent)({ name: "YlIcon", props: { name: { type: String, default: "" }, color: { type: String }, size: { type: [Number, String] } }, computed: { fontSize: function() {
          return "string" == typeof this.size && "px" == this.size.slice(-2) ? this.size : this.size + "px";
        } } }), i = (0, n2(744).Z)(r2, [["render", function(e3, t3, n3, r3, i2, l2) {
          return (0, o2.openBlock)(), (0, o2.createElementBlock)("i", { class: (0, o2.normalizeClass)("yl-icon-".concat(e3.name)), style: (0, o2.normalizeStyle)({ fontSize: e3.fontSize, color: e3.color }) }, null, 6);
        }]]);
        i.install = function(e3) {
          e3.component(i.name, i);
        };
        const l = i;
      }, 744: (e2, t2) => {
        t2.Z = (e3, t3) => {
          const n2 = e3.__vccOpts || e3;
          for (const [e4, o2] of t3)
            n2[e4] = o2;
          return n2;
        };
      }, 789: (t2) => {
        t2.exports = e;
      } }, n = {};
      function o(e2) {
        var r2 = n[e2];
        if (void 0 !== r2)
          return r2.exports;
        var i = n[e2] = { exports: {} };
        return t[e2](i, i.exports, o), i.exports;
      }
      o.d = (e2, t2) => {
        for (var n2 in t2)
          o.o(t2, n2) && !o.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), o.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        o.r(r), o.d(r, { default: () => c });
        var e2 = o(274), t2 = o(976);
        function n2(e3) {
          return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, n2(e3);
        }
        function i(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, o2);
          }
          return n3;
        }
        var l = [e2.default, t2.default];
        const c = function(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var o2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? i(Object(o2), true).forEach(function(t4) {
              var r2, i2, l2;
              r2 = e3, i2 = t4, l2 = o2[t4], (i2 = function(e4) {
                var t5 = function(e5, t6) {
                  if ("object" !== n2(e5) || null === e5)
                    return e5;
                  var o3 = e5[Symbol.toPrimitive];
                  if (void 0 !== o3) {
                    var r3 = o3.call(e5, "string");
                    if ("object" !== n2(r3))
                      return r3;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e5);
                }(e4);
                return "symbol" === n2(t5) ? t5 : String(t5);
              }(i2)) in r2 ? Object.defineProperty(r2, i2, { value: l2, enumerable: true, configurable: true, writable: true }) : r2[i2] = l2;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(o2)) : i(Object(o2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(o2, t4));
            });
          }
          return e3;
        }({ install: function(e3) {
          l.forEach(function(t3) {
            e3.component(t3.name, t3);
          });
        } }, l);
      })(), r;
    })());
  }
});
export default require_yl_ui_umd();
//# sourceMappingURL=yl-ui-lib.js.map

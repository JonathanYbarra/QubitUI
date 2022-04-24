var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "../../../utils/clsx";
import styles from "./text.module.css";
import typography from "../../../styles/typography.module.css";
import colors from "../../../styles/color.module.css";
var variants = {
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    span: "span",
};
export var Text = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "span" : _c, className = _a.className, _d = _a.align, align = _d === void 0 ? "left" : _d, color = _a.color, rest = __rest(_a, ["variant", "className", "align", "color"]);
    var TextFc = variant;
    var classes = clsx(className, styles[variant], typography["align-".concat(align)], (_b = {}, _b[colors["color-".concat(color)]] = color, _b));
    return (_jsx(TextFc, __assign({ className: classes }, rest), void 0));
};
export default Text;

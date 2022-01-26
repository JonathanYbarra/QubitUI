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
import { jsx as _jsx } from "react/jsx-runtime";
import "./label.css";
export var Label = function (props) {
    var _a = props.allCaps, allCaps = _a === void 0 ? false : _a, _b = props.color, color = _b === void 0 ? "primary" : _b, _c = props.text, text = _c === void 0 ? "No Label" : _c, _d = props.className, className = _d === void 0 ? " " : _d, _e = props.size, size = _e === void 0 ? "normal" : _e, fontColor = props.fontColor, _f = props.backgroundColor, backgroundColor = _f === void 0 ? "transparent" : _f;
    return (_jsx("span", __assign({ className: "".concat(className, " ").concat(size, " text-").concat(color), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: allCaps ? text.toUpperCase() : text }), void 0));
};

import { jsx as _jsx } from "react/jsx-runtime";
import { string } from 'prop-types';
import clsx from "../../../utils/clsx";
import styles from "./Icon.module.css";
import Icons from "./Icons";
export var Icon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "md" : _b, className = _a.className;
    var SvgFC = Icons["add"];
    return _jsx(SvgFC, { className: clsx(className, styles.icon, styles[size]) }, void 0);
};
Icon.prototype = {
    size: string,
    className: string,
};

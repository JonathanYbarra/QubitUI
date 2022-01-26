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
import { Label } from './../../components';
export default {
    title: 'UI/Label',
    component: Label,
};
var Template = function (args) { return _jsx(Label, __assign({}, args), void 0); };
export var Default = Template.bind({});
Default.args = {
    text: 'My Label',
    allCaps: false
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    text: 'All Caps',
    allCaps: true
};
export var Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary',
    color: 'Secondary',
    size: "normal"
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    text: 'Tertiary',
    color: 'Tertiary',
    size: "normal",
};
export var backgroundColor = Template.bind({});
backgroundColor.args = {
    backgroundColor: '#ff0000'
};

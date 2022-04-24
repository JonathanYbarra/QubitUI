"use strict";
var _a = require("../tokens"), choices = _a.choices, decisions = _a.decisions;
var toKebabCase = require('../utils/toKebabCase');
var fs = require("fs");
var cleanLines = function (string) {
    if (string === void 0) { string = ''; }
    return string.trim().replace(/^\n\n/gm, '\n');
};
function transformTokens(parentKey, object) {
    var objectKeys = Object.keys(object);
    return objectKeys.reduce(function (transformedTokens, objectKey) {
        var value = object[objectKey];
        var customProperty = parentKey
            ? toKebabCase("".concat(parentKey, "-").concat(objectKey))
            : toKebabCase("".concat(objectKey));
        if (Array.isArray(value)) {
            return "".concat(transformedTokens, "\n  --").concat(customProperty, ": ").concat(value.join(', '), ";");
        }
        else if (typeof value === 'object') {
            return "".concat(transformedTokens, "\n").concat(transformTokens(customProperty, value));
        }
        var label = "--".concat(parentKey, "-").concat(toKebabCase(objectKey));
        return "".concat(transformedTokens, "\n  ").concat(label, ": ").concat(value, ";");
    }, '');
}
function buildCustomProperties() {
    var transformedChoices = transformTokens(null, choices);
    var transformedDecisions = transformTokens(null, decisions);
    var customProperties = "".concat(transformedChoices).concat(transformedDecisions);
    var data = ":root {\n  ".concat(cleanLines(customProperties), "\n}\n");
    fs.writeFile('./src/styles/tokens.css', data, 'utf8', function (error) {
        if (error)
            console.log(error);
        console.log('🎨 Custom properties created!');
    });
}
buildCustomProperties();

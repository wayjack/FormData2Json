"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToFormData = void 0;
const objectToFormData_1 = require("./objectToFormData");
const jsonToFormData = (json, options) => {
    const object = JSON.parse(json);
    return (0, objectToFormData_1.objectToFormData)(object, options);
};
exports.jsonToFormData = jsonToFormData;

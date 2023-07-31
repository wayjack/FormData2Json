"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formDataToJson = void 0;
const formDataToObject_1 = require("./formDataToObject");
const formDataToJson = (formData = new FormData(), options) => {
    const resultObject = (0, formDataToObject_1.formDataToObject)(formData, options);
    return JSON.stringify(resultObject);
};
exports.formDataToJson = formDataToJson;

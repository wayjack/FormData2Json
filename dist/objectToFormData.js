"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToFormData = void 0;
/** Accepts objects and arrays */
function objectToFormData(object, options) {
    const { arrayKeyPrefix, parentKey, formData } = options !== null && options !== void 0 ? options : {
        arrayKeyPrefix: "",
        parentKey: "",
        formData: new FormData(),
    };
    if (Array.isArray(object)) {
        for (const [index, value] of object.entries()) {
            const key = arrayKeyPrefix
                ? `${arrayKeyPrefix}[${index}]`
                : `${parentKey}[${index}]`;
            if (typeof value === "undefined") {
                continue;
            }
            else if (typeof value === "object" && !(value instanceof File)) {
                objectToFormData(value, {
                    arrayKeyPrefix,
                    parentKey: key,
                    formData,
                });
            }
            else {
                formData.append(key, value);
            }
        }
    }
    else {
        for (const [key, value] of Object.entries(object)) {
            const nestedKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof value === "undefined") {
                continue;
            }
            else if (typeof value === "object" && !(value instanceof File)) {
                objectToFormData(value, {
                    arrayKeyPrefix,
                    parentKey: nestedKey,
                    formData,
                });
            }
            else {
                formData.append(nestedKey, value);
            }
        }
    }
    return formData;
}
exports.objectToFormData = objectToFormData;

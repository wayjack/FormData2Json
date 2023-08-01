"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToFormData = void 0;
/** Accepts objects and arrays */
function objectToFormData(object = new FormData(), options) {
    const { arrayKeyPrefix, input, parentKey, formData } = options !== null && options !== void 0 ? options : {
        arrayKeyPrefix: "",
        input: {},
        parentKey: "",
        formData: new FormData(),
    };
    if (Array.isArray(input)) {
        for (const [index, value] of input.entries()) {
            const key = arrayKeyPrefix
                ? `${arrayKeyPrefix}[${index}]`
                : `${parentKey}[${index}]`;
            if (typeof value === "object") {
                objectToFormData(object, {
                    arrayKeyPrefix,
                    input: value,
                    parentKey: key,
                    formData
                });
            }
            else {
                formData.append(key, value);
            }
        }
    }
    else {
        for (const [key, value] of Object.entries(input)) {
            const nestedKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof value === "object") {
                objectToFormData(object, {
                    arrayKeyPrefix,
                    input: value,
                    parentKey: nestedKey,
                    formData
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

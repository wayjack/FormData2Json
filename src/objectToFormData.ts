import { NestedObject, ObjectToFormDataOptions } from "./types";

/** Accepts objects and arrays */
export function objectToFormData(
    object: NestedObject,
    options?: ObjectToFormDataOptions,
): FormData {
    const { arrayKeyPrefix, parentKey, formData } = options ?? {
        arrayKeyPrefix: "",
        parentKey: "",
        formData: new FormData(),
    };

    if (Array.isArray(object)) {
        for (const [index, value] of object.entries()) {
            const key = arrayKeyPrefix ? `${arrayKeyPrefix}[${index}]` : `${parentKey}[${index}]`;
            if (typeof value === "object" && !(value instanceof File)) {
                objectToFormData(value, {
                    arrayKeyPrefix,
                    parentKey: key,
                    formData,
                });
            } else {
                formData.append(key, value as string);
            }
        }
    } else {
        for (const [key, value] of Object.entries(object)) {
            const nestedKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof value === "object" && !(value instanceof File)) {
                objectToFormData(value as NestedObject, {
                    arrayKeyPrefix,
                    parentKey: nestedKey,
                    formData,
                });
            } else {
                formData.append(nestedKey, value as string);
            }
        }
    }

    return formData;
}

/** Accepts objects and arrays */
export function objectToFormData(
  formData = new FormData(),
  options: ObjectToFormDataOptions
): FormData {
  const {
    arrayKeyPrefix = "",
    input,
    parentKey = "",
  } = options;

  if (Array.isArray(input)) {
    for (const [index, value] of input.entries()) {
      const key = arrayKeyPrefix
        ? `${arrayKeyPrefix}[${index}]`
        : `${parentKey}[${index}]`;
      if (typeof value === "object") {
        objectToFormData(formData, {
          arrayKeyPrefix,
          input: value as NestedObject,
          parentKey: key,
        });
      } else {
        formData.append(key, value as string);
      }
    }
  } else {
    for (const [key, value] of Object.entries(input)) {
      const nestedKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === "object") {
        objectToFormData(formData, {
          arrayKeyPrefix,
          input: value as NestedObject,
          parentKey: nestedKey,
        });
      } else {
        formData.append(nestedKey, value as string);
      }
    }
  }

  return formData;
}

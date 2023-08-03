import { formDataToObject } from "./formDataToObject"
import { FormDataToObjectOptions } from "./types";

export const formDataToJson = (formData = new FormData(), options?: FormDataToObjectOptions) => {
  const resultObject = formDataToObject(formData, options);
  return JSON.stringify(resultObject);
}
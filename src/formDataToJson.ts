import { formDataToObject } from "./formDataToObject"

export const formDataToJson = (formData = new FormData(), options: FormDataToObjectOptions) => {
  const resultObject = formDataToObject(formData, options);
  return JSON.stringify(resultObject);
}
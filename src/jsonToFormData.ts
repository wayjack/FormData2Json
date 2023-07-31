import { objectToFormData } from "./objectToFormData";

export const jsonToFormData = (
  json: string,
  options: ObjectToFormDataOptions
) => {
  const object = JSON.parse(json);
  return objectToFormData(object, options);
};
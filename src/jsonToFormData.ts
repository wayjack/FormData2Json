
import { objectToFormData } from "./objectToFormData";
import { ObjectToFormDataOptions } from "./types";

export const jsonToFormData = (
  json: string,
  options?: ObjectToFormDataOptions
) => {
  const object = JSON.parse(json);
  return objectToFormData(object, options);
};
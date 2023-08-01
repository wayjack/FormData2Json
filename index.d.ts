declare type NestedObject = {
  [key: string]: NestedObject | NestedObject[] | (object | string | boolean | number | null);
};

declare type FormDataToObjectOptions = {
  parentKey?: string;
}

declare type ObjectToFormDataOptions = {
  arrayKeyPrefix?: string;
  formData: FormData;
  parentKey?: string;
}
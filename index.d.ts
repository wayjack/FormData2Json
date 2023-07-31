declare type NestedObject = {
  [key: string]: NestedObject | NestedObject[] | object | string;
};

declare type FormDataToObjectOptions = {
  parentKey?: string;
}

declare type ObjectToFormDataOptions = {
  arrayKeyPrefix?: string;
  input: NestedObject | NestedObject[];
  parentKey?: string;
}
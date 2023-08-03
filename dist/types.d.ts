export type NestedObject = {
    [key: string]: NestedObject | NestedObject[] | (object | string | boolean | number | null);
};
export type FormDataToObjectOptions = {
    parentKey?: string;
};
export type ObjectToFormDataOptions = {
    arrayKeyPrefix?: string;
    formData: FormData;
    parentKey?: string;
};

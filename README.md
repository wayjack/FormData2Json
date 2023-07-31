# FormData2Json

This library provides utility functions for transforming FormData to JSON and vice versa. 

## Features

- Convert FormData to a JSON string or a JavaScript object
- Convert a JSON string or a JavaScript object to FormData
- Convert plain objects to FormData
- Convert FormData to plain objects
- Handling nested object structures
- support for arrays

## Usage

```js
import { formDataToJson, jsonToFormData } from "formdata2json";

const formData = new FormData();
formData.append("user.name", "Alice");
formData.append("user.age", "30");
formData.append("user.skills[0]", "JavaScript");
formData.append("user.skills[1]", "TypeScript");

const jsonString = formDataToJson(formData);
/* Output:
{ 
  "name": "Alice", 
  "age": "30", 
  "skills": ["JavaScript", "TypeScript"] 
 }
*/

const formDataInstance = jsonToFormData(json);
```


## API
### objectToFormData(object, options): FormData
### jsonToFormData(json, options): FormData
### formDataToObject(formData = new FormData(), options): object
### formDataToJson(formData = new FormData(), options): string

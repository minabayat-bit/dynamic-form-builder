import { v4 as uuid } from "uuid";

import type {
  FormField,
  FieldTypes,
} from "../types/formTypes";

export const createField = (
  type: FieldTypes
): FormField => {
  return {
    id: uuid(),

    type,

    label: `${type} field`,

    name: `${type}_${Date.now()}`,

    placeholder: "",

    required: false,

    options:
      type === "select" || type === "radio"
        ? ["Option 1"]
        : undefined,
  };
};
export type FieldTypes =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "date";

export interface FormField {
  id: string;
  type: FieldTypes;

  label: string;
  name: string;

  placeholder?: string;

  required?: boolean;

  options?: string[];
}
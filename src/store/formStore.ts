import { create } from "zustand";
import type { FormField } from "../types/formTypes"


interface FormBuilderStore {
  fields: FormField[];

  addField: (field: FormField) => void;

  removeField: (id: string) => void;

  updateField: (
    id: string,
    updates: Partial<FormField>
  ) => void;
}

export const useFormBuilderStore =
  create<FormBuilderStore>((set) => ({
    fields: [],

    addField: (field) =>
      set((state) => ({
        fields: [...state.fields, field],
      })),

    removeField: (id) =>
      set((state) => ({
        fields: state.fields.filter(
          (field) => field.id !== id
        ),
      })),

    updateField: (id, updates) =>
      set((state) => ({
        fields: state.fields.map((field) =>
          field.id === id
            ? { ...field, ...updates }
            : field
        ),
      })),
  }));
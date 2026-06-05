import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FormField } from "../types/formTypes";

interface FormBuilderStore {
  fields: FormField[];

  addField: (field: FormField) => void;
  removeField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  moveField: (activeId: string, overId: string) => void;
}

export const useFormBuilderStore = create<FormBuilderStore>()(
  persist(
    (set) => ({
      fields: [],

      addField: (field) =>
        set((state) => ({
          fields: [...state.fields, field],
        })),

      removeField: (id) =>
        set((state) => ({
          fields: state.fields.filter(
            (f) => f.id !== id
          ),
        })),

      updateField: (id, updates) =>
        set((state) => ({
          fields: state.fields.map((f) =>
            f.id === id ? { ...f, ...updates } : f
          ),
        })),

      moveField: (activeId, overId) =>
        set((state) => {
          const oldIndex = state.fields.findIndex(
            (f) => f.id === activeId
          );

          const newIndex = state.fields.findIndex(
            (f) => f.id === overId
          );

          const updated = [...state.fields];

          const [removed] = updated.splice(oldIndex, 1);

          updated.splice(newIndex, 0, removed);

          return {
            fields: updated,
          };
        }),
    }),
    {
      name: "form-builder-storage", 
    }
  )
);
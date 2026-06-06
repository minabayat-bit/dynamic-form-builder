import { createField } from "../../utils/feildFactory";
import { useFormBuilderStore } from "../../store/formStore";
import type { FieldTypes } from "../../types/formTypes";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableFieldItem from "./SortableFieldItem";

const fieldButtons: {
  label: string;
  type: FieldTypes;
}[] = [
  {
    label: "Add Text",
    type: "text",
  },
  {
    label: "Add Textarea",
    type: "textarea",
  },
  {
    label: "Add Number",
    type: "number",
  },
  {
    label: "Add Select",
    type: "select",
  },
  {
    label: "Add Checkbox",
    type: "checkbox",
  },
  {
    label: "Add Radio",
    type: "radio",
  },
  {
    label: "Add Date",
    type: "date",
  },
];

export default function BuilderPanel() {
  const { fields, addField, removeField, updateField, moveField } =
    useFormBuilderStore();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      moveField(active.id as string, over.id as string);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="space-y-4 rounded-lg border border-zinc-50 p-4 overflow-y-auto max-h-200">
        <h2 className="text-xl text-zinc-50 font-bold">Form Builder</h2>

        <div className="flex flex-wrap gap-2">
          {fieldButtons.map((btn) => (
            <button
              key={btn.type}
              onClick={() => addField(createField(btn.type))}
              className="bg-zinc-500 rounded-2xl p-2 px-4 text-sm hover:scale-90 cursor-pointer duration-150 text-white"
            >
              {btn.label}
            </button>
          ))}
        </div>

        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {fields.map((field) => (
              <SortableFieldItem key={field.id} id={field.id}>
                {(dragHandleProps: any) => (
                  <div className="rounded-2xl bg-zinc-400 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          {...dragHandleProps}
                          className="cursor-grab active:cursor-grabbing rounded bg-zinc-700 px-3 py-1 text-sm text-white"
                        >
                          ☰
                        </button>

                        <p className="font-semibold capitalize">{field.type}</p>
                      </div>

                      <button
                        onClick={() => removeField(field.id)}
                        className="bg-red-500 rounded-2xl text-white px-4 py-1 hover:scale-90 duration-200"
                      >
                        Delete
                      </button>
                    </div>

                    <input
                      value={field.label}
                      onChange={(e) =>
                        updateField(field.id, {
                          label: e.target.value,
                        })
                      }
                      placeholder="Label"
                      className="w-full rounded border p-2"
                    />

                    <input
                      value={field.name}
                      onChange={(e) =>
                        updateField(field.id, {
                          name: e.target.value,
                        })
                      }
                      placeholder="Name"
                      className="w-full rounded border p-2"
                    />

                    {field.type !== "checkbox" && (
                      <input
                        value={field.placeholder}
                        onChange={(e) =>
                          updateField(field.id, {
                            placeholder: e.target.value,
                          })
                        }
                        placeholder="Placeholder"
                        className="w-full rounded border p-2"
                      />
                    )}

                    {(field.type === "select" || field.type === "radio") && (
                      <input
                        value={field.options?.join(", ") || ""}
                        onChange={(e) =>
                          updateField(field.id, {
                            options: e.target.value.split(","),
                          })
                        }
                        placeholder="Options separated by comma"
                        className="w-full rounded border p-2"
                      />
                    )}

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) =>
                          updateField(field.id, {
                            required: e.target.checked,
                          })
                        }
                      />
                      Required
                    </label>
                  </div>
                )}
              </SortableFieldItem>
            ))}
          </div>
        </SortableContext>
      </div>
    </DndContext>
  );
}

import { createField } from "../../utils/feildFactory";

import { useFormBuilderStore } from "../../store/formStore";

export default function BuilderPanel() {
  const { fields, addField, removeField, updateField } = useFormBuilderStore();

  return (
    <div className="space-y-4 rounded-lg border border-zinc-50 p-4 overflow-y-auto max-h-200">
      <h2 className="text-xl text-zinc-50 font-bold">Form Builder</h2>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => addField(createField("text"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Text
        </button>

        <button
          onClick={() => addField(createField("textarea"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Textarea
        </button>

        <button
          onClick={() => addField(createField("number"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Number
        </button>

        <button
          onClick={() => addField(createField("select"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Select
        </button>

        <button
          onClick={() => addField(createField("checkbox"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Checkbox
        </button>

        <button
          onClick={() => addField(createField("radio"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Radio
        </button>

        <button
          onClick={() => addField(createField("date"))}
          className="bg-zinc-500 rounded-2xl p-2 px-4 text-[14px] hover:scale-90 cursor-pointer duration-150 text-white"
        >
          Add Date
        </button>
      </div>

      <div className="space-y-4  *:text-[14px] ">
        {fields.map((field) => (
          <div key={field.id} className=" p-4 bg-zinc-400 rounded-2xl">
            < div className="mb-2 flex items-center justify-between">
              <p className="font-semibold">{field.type}</p>

              <button
                onClick={() => removeField(field.id)}
                className="bg-blue-500 hover:bg-red-500 rounded-2xl text-white px-4 hover:scale-90 duration-200"
              >
               Delete
              </button>
            </div>

            <div className="space-y-2 ">
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
          </div>
        ))}
      </div>
    </div>
  );
}

import { useFormBuilderStore } from "../../store/formStore";

import RenderField from "./RenderField";

export default function PreviewPanel() {
  const { fields } = useFormBuilderStore();

  return (
    <div className="rounded-lg border border-white *:text-zinc-100 p-4 overflow-y-auto max-h-200">
      <h2 className="mb-4 text-xl font-bold">Preview</h2>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            {field.type !== "checkbox" && (
              <label className="mb-1 block font-medium">
                {field.label}

                {field.required && <span className="text-red-500"> *</span>}
              </label>
            )}

            <RenderField field={field} />
          </div>
        ))}
      </div>
    </div>
  );
}

import type { FormField } from "../../types/formTypes";

interface Props {
  field: FormField;
}

export default function RenderField({ field }: Props) {
  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={field.placeholder}
          className="w-full rounded border p-2"
        />
      );

    case "number":
      return (
        <input
          type="number"
          placeholder={field.placeholder}
          className="w-full rounded border p-2"
        />
      );

    case "textarea":
      return (
        <textarea
          placeholder={field.placeholder}
          className="w-full rounded border p-2"
        />
      );

    case "select":
      return (
        <select className="w-full rounded border p-2">
          {field.options?.map((option) => (
            <option className="text-gray-800" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "checkbox":
      return (
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          {field.label}
        </label>
      );

    case "radio":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="radio" name={field.name} required={field.required} />

              <span>{option}</span>
            </label>
          ))}
        </div>
      );

    case "date":
      return <input type="date" className="w-full rounded border p-2" />;

    default:
      return null;
  }
}

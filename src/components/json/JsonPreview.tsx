import { useFormBuilderStore } from "../../store/formStore";

export default function JsonPreview() {
  const { fields } =
    useFormBuilderStore();

  return (
    <div className="rounded-lg border border-white p-4 overflow-y-auto max-h-200">

      <h2 className="mb-4 text-xl text-white font-bold">
        JSON
      </h2>

      <pre className="overflow-auto rounded text-zinc-100 p-4 text-sm">
        {JSON.stringify(
          { fields },
          null,
          2
        )}
      </pre>
    </div>
  );
}
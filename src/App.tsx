import BuilderPanel from "./components/builder/BuilderPanel";

import PreviewPanel from "./components/preview/PreviewPanel";

import JsonPreview from "./components/json/JsonPreview";

export default function App() {
  return (
    <div className="min-h-screen p-6">

      <h1 className="mb-6 text-3xl font-bold text-zinc-100 flex justify-center">
        Dynamic Form Builder
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 pt-6">

        <BuilderPanel />

        <PreviewPanel />

        <JsonPreview />
      </div>
    </div>
  );
}
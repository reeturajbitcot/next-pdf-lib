import RichTextEditor from "@/components/slate/Slate";

export default function SlatePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Rich Text Editor</h1>
        <div className="overflow-hidden">
          <RichTextEditor />
        </div>
      </div>
    </div>
  );
}

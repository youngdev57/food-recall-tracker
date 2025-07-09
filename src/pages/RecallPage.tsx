import RecallViwer from "../components/recall/RecallViewer";

export default function RecallPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">회수 식품 목록</h1>
      <RecallViwer />
    </div>
  );
}

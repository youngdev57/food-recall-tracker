import type { RecallItem } from "@/types/recall";
import RecallGalleryItem from "./RecallGalleryItem";

type Props = {
  items: RecallItem[];
  isLoading: boolean;
};

export default function RecallListView({ items, isLoading }: Props) {
  if (isLoading) return <p>로딩중</p>;
  if (items.length === 0) return <p>데이터 없음</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <RecallGalleryItem key={item.recallSeq} item={item} />
      ))}
    </div>
  );
}

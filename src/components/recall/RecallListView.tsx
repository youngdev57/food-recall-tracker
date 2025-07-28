import type { RecallItem } from "@/types/recall";
import RecallListItem from "./RecallListItem";

type Props = {
  items: RecallItem[];
};

export default function RecallListView({ items }: Props) {
  if (items.length === 0) return <p>데이터 없음</p>;

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <RecallListItem key={item.recallSeq} item={item} />
      ))}
    </ul>
  );
}

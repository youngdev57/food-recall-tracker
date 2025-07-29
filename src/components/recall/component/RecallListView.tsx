import type { RecallItem } from "@/types/recall";
import RecallListItem from "./RecallListItem";

type Props = {
  items: RecallItem[];
  isLoading: boolean;
};

export default function RecallListView({ items, isLoading }: Props) {
  if (isLoading) return <p>로딩중</p>;
  if (items.length === 0) return <p>데이터 없음</p>;

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <RecallListItem key={item.recallSeq} item={item} />
      ))}
    </ul>
  );
}

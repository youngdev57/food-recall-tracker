import type { RecallItem } from "@/types/recall";

type Props = {
  items: RecallItem[];
  isLoading: boolean;
};

export default function RecallListView({ items, isLoading }: Props) {
  if (isLoading) return <p>로딩중</p>;
  if (items.length === 0) return <p>데이터 없음</p>;

  return (
    <ul className="p-4">
      {items.map((item, idx) => (
        <li key={idx}>{item.productName}</li>
      ))}
    </ul>
  );
}

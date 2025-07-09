import type { RecallItem } from "../../types/recall";

interface Props {
  items: RecallItem[];
}

export default function RecallListView({ items }: Props) {
  if (items.length === 0) return <p>데이터 없음</p>;

  return (
    <ul className="p-4">
      {items.map((item, idx) => (
        <li key={idx}>{item.PRDTNM}</li>
      ))}
    </ul>
  );
}

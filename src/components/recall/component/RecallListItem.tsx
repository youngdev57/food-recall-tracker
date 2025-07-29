import type { RecallItem } from "@/types/recall";

type Props = {
  item: RecallItem;
};

export default function RecallListItem({ item }: Props) {
  return (
    <li className="border rounded p-4 hover:bg-gray-50 transition">
      <div className="font-semibold">{item.productName}</div>
      <div className="text-sm text-gray-400">{item.brandName}</div>
      <div className="text-sm mt-2">유통/소비기한: {item.distLimitDate}</div>
      <div className="text-sm">회수사유: {item.recallReason}</div>
    </li>
  );
}

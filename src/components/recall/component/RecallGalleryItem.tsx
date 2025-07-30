import type { RecallItem } from "@/types/recall";

type Props = {
  item: RecallItem;
};

export default function RecallGalleryItem({ item }: Props) {
  return (
    <div className="border rounded p-4 hover:bg-gray-50 transition h-60">
      <div className="w-full h-40 overflow-hidden rounded">
        <img src={item.imageUrl} alt={item.productName} />
      </div>
      <div className="font-semibold pt-2">{item.productName}</div>
      <div className="text-sm text-gray-400">{item.brandName}</div>
    </div>
  );
}

import { useRecallList } from "@/hooks/useRecallList";
import RecallGalleryView from "./component/RecallGalleryView";
import RecallListView from "./component/RecallListView";
import { useEffect, useState } from "react";
import { VIEW_TYPES } from "@/constants/viewTypes";
import type { ViewType } from "@/constants/viewTypes";
import type { RawRecallItem, RecallItem } from "@/types/recall";
import Pagenation from "@/components/common/Pagenation";
import { normalizeRecallItem } from "@/utils/normalizeRecallItem";

export default function RecallViewer() {
  const [viewType, setViewType] = useState<ViewType>(VIEW_TYPES.LIST);
  const [page, setPage] = useState(1);
  const count = 5;

  const { data, isLoading, error } = useRecallList(page, count);
  const rowItems: RawRecallItem[] = data?.I0490?.row ?? [];
  const items: RecallItem[] = rowItems.map(normalizeRecallItem);

  const totalCount = parseInt(data?.I0490.totalCount ?? "0", 10);

  useEffect(() => {
    console.log("processed:", items);
  }, [items]);

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 border rounded ${
            viewType === VIEW_TYPES.LIST ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setViewType(VIEW_TYPES.LIST)}
        >
          목록형
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            viewType === VIEW_TYPES.GALLERY ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setViewType(VIEW_TYPES.GALLERY)}
        >
          갤러리형
        </button>
      </div>

      {viewType === VIEW_TYPES.LIST && <RecallListView items={items} />}
      {viewType === VIEW_TYPES.GALLERY && <RecallGalleryView items={items} />}

      <Pagenation
        current={page}
        total={totalCount}
        perPage={count}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}

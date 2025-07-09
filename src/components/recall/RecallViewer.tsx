import { useRecallList } from "../../hooks/useRecallList";
import RecallGalleryView from "./RecallGalleryView";
import RecallListView from "./RecallListView";
import { useEffect, useState } from "react";
import { VIEW_TYPES } from "../../constants/viewTypes";
import type { ViewType } from "../../constants/viewTypes";

export default function RecallViewer() {
  const [viewType, setViewType] = useState<ViewType>(VIEW_TYPES.LIST);

  const { data, isLoading, error } = useRecallList();
  const row = data?.I0490?.row ?? [];

  useEffect(() => {
    console.log(data?.row);
  }, [data]);

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

      {viewType === VIEW_TYPES.LIST && <RecallListView items={row} />}
      {viewType === VIEW_TYPES.GALLERY && <RecallGalleryView items={row} />}
    </div>
  );
}

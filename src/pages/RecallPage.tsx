import { useRecallList } from "../hooks/useRecallList";
import { useEffect } from "react";
import RecallList from "../components/RecallList";
import type { RecallItem } from "../types/recall";

export default function RecallPage() {
  const page = 1;
  const count = 5;

  const { data, isLoading, error } = useRecallList(page, count);

  useEffect(() => {
    console.log(data?.data?.I0490);
  }, [data]);

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러 발생</p>;

  const { row = [] } = (data?.data?.I0490 ?? {}) as { row: RecallItem[] };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">회수 식품 목록</h1>
      <RecallList items={row} />
    </div>
  );
}

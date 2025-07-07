import type { RecallItem } from "./types/recall";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fetchRecallList } from "./api/recall";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecallList />
    </QueryClientProvider>
  );
}

function RecallList() {
  const page = 1;
  const count = 5;

  const { data, isLoading, error } = useQuery({
    queryKey: ["recalls", { page, count }],
    queryFn: fetchRecallList,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    console.log(data?.data?.I0490);
  }, [data]);

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러 발생</p>;

  const { row = [] } = (data?.data?.I0490 ?? {}) as { row: RecallItem[] };

  return (
    <ul className="p-4">
      {row.map((item, idx) => (
        <li key={idx}>
          {item.PRDTNM} | {item.BSSHNM}
        </li>
      ))}
    </ul>
  );
}

export default App;

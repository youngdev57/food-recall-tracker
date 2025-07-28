import { useQuery } from "@tanstack/react-query";
import { fetchRecallList } from "@/api/recall";

export const useRecallList = (page: number = 1, count: number = 5) => {
  return useQuery({
    queryKey: ["recalls", { page, count }],
    queryFn: fetchRecallList,
    staleTime: 1000 * 60 * 5,
  });
};

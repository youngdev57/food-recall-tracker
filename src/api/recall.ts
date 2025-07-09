import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const fetchRecallList = async ({
  queryKey,
}: {
  queryKey: [string, { page: number; count: number }];
}) => {
  const [, { page, count }] = queryKey;
  const url = `${API_ENDPOINT}/${API_KEY}/I0490/json/${page}/${count}`;
  const response = await axios.get(url);
  return response?.data;
};

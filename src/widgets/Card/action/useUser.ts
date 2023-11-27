import { useQuery } from "react-query/react";
import { fetchUser } from "../api/getUser";

export function useUser(key: string) {
  const { data, isLoading, isError } = useQuery(key, fetchUser);
  return { data, isLoading, isError}
};
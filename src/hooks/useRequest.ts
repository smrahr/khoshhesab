import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  QueryKey,
} from "@tanstack/react-query";

interface UseQueryRequestProps<TData, TQueryFnData> {
  queryFn: (context: TData) => Promise<TQueryFnData>;
  queryKey: QueryKey;
  data: TData;
}

export const useQueryRequest = <TData, TQueryFnData>({
  queryFn,
  queryKey,
  data,
}: UseQueryRequestProps<TData, TQueryFnData>) =>
  useQuery<TQueryFnData>({
    queryKey: [queryKey, data],
    queryFn: () => queryFn(data),
    retry: 1,
    refetchOnWindowFocus: false,
  });

type MutationFn<TData, TVariables> = (variables: TVariables) => Promise<TData>;

export const useMutationRequest = <TData, TVariables>(
  mutationFn: MutationFn<TData, TVariables>,
  options?: UseMutationOptions<TData, unknown, TVariables>
): UseMutationResult<TData, unknown, TVariables> => {
  return useMutation<TData, unknown, TVariables>(mutationFn, options);
};

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20, // 20 minutes
      gcTime: 1000 * 60 * 40, // 40 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;

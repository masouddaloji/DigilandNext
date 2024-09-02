"use client";
import { ComponentsProps } from "@/types/types";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Provider({ children }: ComponentsProps) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        {children}

        </QueryClientProvider>
  );
}

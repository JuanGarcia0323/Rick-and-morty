import { NotificationProvider } from "@components/UseNotification/NotificationProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <RouterProvider router={Router} />
      </NotificationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

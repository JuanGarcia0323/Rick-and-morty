// TODO Agregar notificaciones para los errors y loading panel
// TODO Chequear buenas practicas, limpiar codigo, separar components
// TODO Hacer testing
// TODO Agregar Filtro
// TODO Agregar alt imagenes

import { NotificationProvider } from "@components/UseNotification/useNotification";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";

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
        <RouterProvider router={routes} />
      </NotificationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

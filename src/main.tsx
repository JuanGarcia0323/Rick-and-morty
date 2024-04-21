// TODO Chequear buenas practicas, limpiar codigo, separar components
// TODO Refinar mobile
// TODO Hacer testing
// TODO Agregar Filtro
// TODO Agregar animaciones
// TODO Agregar alt imagenes
// TODO Eliminar <a>

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
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);

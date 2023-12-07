import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../templates/RootLayout";
import { Home } from "../pages/Home";
import { Pokemon } from "../pages/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <>Não encontrado</>,
    children: [
      {
        index: true,
        element: <Home />,
        /* loader: Loader, */
      },
      {
        path: "/pokemon/:id",
        element: <Pokemon />,
      },
    ],
  },
]);

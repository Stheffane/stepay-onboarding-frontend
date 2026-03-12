import { createBrowserRouter } from "react-router-dom"

import { OnboardingLayout } from "../../shared/components/layout/OnboardingLayout"
import { NotFoundPage } from "../pages/not-found"

import { primeiraEtapaRoutes } from "./routes/primeiraEtapa.routes"
import { segundaEtapaRoutes } from "./routes/segundaEtapa.routes"
import { terceiraEtapaRoutes } from "./routes/terceiraEtapa.routes"
import { quartaEtapaRoutes } from "./routes/quartaEtapa.routes"

export const router = createBrowserRouter([
  {
    element: <OnboardingLayout />,
    children: [
      ...primeiraEtapaRoutes,
      ...segundaEtapaRoutes,
      ...terceiraEtapaRoutes,
      ...quartaEtapaRoutes
    ]
  },

  {
    path: "*",
    element: <NotFoundPage />
  }
])
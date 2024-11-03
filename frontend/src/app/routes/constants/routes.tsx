import { RouteObject } from "react-router-dom";

import LandingPage from "../../../pages/landing";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
];

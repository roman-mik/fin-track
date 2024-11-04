import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from '../constants/routes';

const router = createBrowserRouter(routes);

export const FinTrackRouter = () => <RouterProvider router={router} />;

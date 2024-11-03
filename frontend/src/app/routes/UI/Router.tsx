import { RouterProvider } from "react-router-dom";
import { createRouter } from "../lib/createRouter";

export const FinTrackRouter = () => <RouterProvider router={createRouter()} />;

import { createBrowserRouter } from "react-router";
import { Landing } from "./components/Landing";
import { Portfolio } from "./components/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Landing },
      { path: "portfolio", Component: Portfolio },
    ],
  },
]);

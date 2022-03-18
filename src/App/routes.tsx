import { RouteObject, Navigate } from "react-router-dom";
import { Page } from "./Page";
import { Private } from "./Private";
import { Search } from "./Search";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Private>
        <Page />
      </Private>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/search" />,
      },
      { path: "search", element: <Search /> },
    ],
  },
];

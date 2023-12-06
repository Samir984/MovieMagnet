import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./features/Home";
import Movie from "./features/Movie";
import Details from "./features/Details";
import TvShow from "./features/TvShow";
import Search from "./features/Search";
import Bookmarks from "./features/Bookmarks";
import PageNotFound from "./pages/PageNotFound";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/movie/:id",
        element: <Details />,
      },
      {
        path: "/tv",
        element: <TvShow />,
      },
      {
        path: "/tv/:id",
        element: <Details />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;

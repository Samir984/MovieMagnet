import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./features/home/Home";
import Movie from "./features/Movie";
import Details from "./features/details/Details";
import TvShow from "./features/TvShow";
import Search from "./features/search/Search";
import Bookmarks from "./features/Bookmarks";
import PageNotFound from "./pages/PageNotFound";
import { ImgConfigProvider } from "./context/ImageConfig";
import Explore from "./features/explore/Explore";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore/:media_type",
        element: <Explore />,
      },
      {
        path: "/tv",
        element: <TvShow />,
      },
      {
        path: "/:media_type/:id",
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
  return (
    <ImgConfigProvider>
      <RouterProvider router={route} />
    </ImgConfigProvider>
  );
}

export default App;

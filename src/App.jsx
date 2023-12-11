import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./features/home/Home";
import Details from "./features/details/Details";
import Search from "./features/search/Search";
import PageNotFound from "./pages/PageNotFound";
import { ImgConfigProvider } from "./context/ImageConfig";
import Explore from "./features/explore/Explore";
import { useEffect } from "react";

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
        path: "/:media_type/:id",
        element: <Details />,
      },

      {
        path: "/search",
        element: <Search />,
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

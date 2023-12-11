import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import AppLayout from "./pages/AppLayout";
import { ImgConfigProvider } from "./context/ImageConfig";

const Home = lazy(() => import("./features/home/Home"));
const Details = lazy(() => import("./features/details/Details"));
const Search = lazy(() => import("./features/search/Search"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Explore = lazy(() => import("./features/explore/Explore"));

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/explore/:media_type",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Explore />
          </Suspense>
        ),
      },

      {
        path: "/:media_type/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Details />
          </Suspense>
        ),
      },

      {
        path: "/search",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageNotFound />
          </Suspense>
        ),
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

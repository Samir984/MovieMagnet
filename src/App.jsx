import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        path: "/bookmark",
        element: <BookMark />,
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

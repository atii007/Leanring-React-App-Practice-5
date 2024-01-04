import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import TopicsListPage from "./Components/Pages/TopicsLists/TopicsListPage";
import Home from "./Components/Pages/Home/Home";
// import Contact from "./Components/Pages/Contact/Contact";
import RootLayout from "./Components/Root";
import Registeration from "./Components/Pages/Register/Registration";
import { action as logoutAction } from "./Components/Pages/Logout";
import { tokenLoader } from "./util/auth";
import { lazy, Suspense } from "react";

const TopicsListPage = lazy(() =>
  import("./Components/Pages/TopicsLists/TopicsListPage")
);
const Contact = lazy(() => import("./Components/Pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "TopicsListPage",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <TopicsListPage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: <Registeration />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

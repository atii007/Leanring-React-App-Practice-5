import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TopicsListPage from "./Components/Pages/TopicsLists/TopicsListPage";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import RootLayout from "./Components/Root";
import Registeration from "./Components/Pages/Register/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "TopicsListPage",
        element: <TopicsListPage />,
      },
      {
        path: "register",
        element: <Registeration />,
        // action: authAction,
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

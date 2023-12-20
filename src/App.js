import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import TopicsListPage from "./Components/Pages/TopicsLists/TopicsListPage";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";

const router = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/TopicsListPage", element: <TopicsListPage /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;

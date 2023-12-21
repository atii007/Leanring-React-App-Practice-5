import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopicsListPage from "./Components/Pages/TopicsLists/TopicsListPage";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import RootLayout from "./Components/Root";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="TopicsListPage" element={<TopicsListPage />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;

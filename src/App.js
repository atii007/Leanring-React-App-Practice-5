import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopicsListPage from "./Components/Pages/TopicsLists/TopicsListPage";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import RootLayout from "./Components/Root";
// import Registeration from "./Components/Pages/Register/Registration";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="TopicsListPage" element={<TopicsListPage />} />
            {/* <Route path="register" element={<Registeration />} /> */}
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;

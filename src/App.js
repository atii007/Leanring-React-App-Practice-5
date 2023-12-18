import "./App.css";
import Contact from "./Components/Sections/Contact/Contact";
import Featured from "./Components/Sections/Featured/Featured";
import Footer from "./Components/Sections/Footer/Footer";
import Header from "./Components/Sections/Header/Header";
import Hero from "./Components/Sections/Hero/Hero";
import Topics from "./Components/Sections/Topics/Topics";
import Work from "./Components/Sections/Work/Work";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Topics />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

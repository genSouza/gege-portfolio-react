import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/Social/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

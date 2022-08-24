import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/Social/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;

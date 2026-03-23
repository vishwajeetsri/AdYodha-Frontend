import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
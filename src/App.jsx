import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Coffee_Big from "./assets/Coffee_Big.png";

function App() {
  return (
    <div
      className="min-h-screen bg-coffee-cream bg-auto bg-repeat"
      style={{
        backgroundImage: `url(${Coffee_Big})`,
        backgroundPosition: "top left",
      }}
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

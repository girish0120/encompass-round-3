import React from "react";
import Navbar from "./components/Navbar";
import ProductSlider from "./components/ProductSlider";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSlider />
      <Footer />
    </div>
  );
}

export default App;

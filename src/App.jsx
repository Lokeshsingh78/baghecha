import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const isDesktop = window.innerWidth >= 1024;

  // 🚫 Block Mobile & Tablet
  if (!isDesktop) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <p style={{ maxWidth: "420px", lineHeight: "1.7" }}>
          This experience is crafted exclusively for desktop screens.
          <br />
          <br />
          Please visit <strong>BAGHECHA</strong> on a laptop or desktop for the
          complete royal experience.
        </p>
      </div>
    );
  }

  // ✅ Desktop Experience
  return (
    <main id="home">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer />
    </main>
  );
};

export default App;

import React from "react";
import { navLinks } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  useGSAP(() => {
    gsap.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(20px)",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
        },
      }
    );
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        {/* Logo → Home */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2"
        >
          <img src="/images/logo.png" alt="logo" />
          <p>BAGHECHA</p>
        </a>

        {/* Nav links */}
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

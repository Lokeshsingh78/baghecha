import React, { useRef, memo } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  const animationsRef = useRef([]);

  useGSAP(() => {
    // Cleanup old animations
    animationsRef.current.forEach((anim) => anim.kill());
    animationsRef.current = [];

    const textSplit = new SplitText("#about h2", {
      type: "words",
      wordsClass: "split-word",
    });

    const lineSplit = new SplitText(".sub-content p", {
      type: "lines",
      linesClass: "split-line",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        once: true,
      },
    });

    animationsRef.current.push(tl);

    tl.from(textSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.01,
      duration: 0.8,
      ease: "power2.out",
      force3D: true,
    })
      .from(
        lineSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
          duration: 0.8,
          ease: "power2.out",
          force3D: true,
        },
        "-=0.4"
      )
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          yPercent: 100,
          stagger: 0.03,
          duration: 0.8,
          ease: "power2.inOut",
          force3D: true,
        },
        "-=0.3"
      );
  }, { scope: document.documentElement });

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "scale(1.06)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <section id="about">
      <div className="mb-16 md:p-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Rajsi Virasat</p>

            <h2>
              Where royal traditions meet <span className="text-white"> - </span>
              every bite tells a story
            </h2>
          </div>
<div className="sub-content">
  <p
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      letterSpacing: "0.02em",
      textAlign: "left",
      maxWidth: "700px",
      color: "#eaeaea",
    }}
  >
    At BAGHECHA, food is more than a meal — it’s a royal experience.
    Inspired by the timeless traditions of Rajputana, every dish is crafted
    using carefully chosen ingredients and age-old recipes once served in
    royal homes. From the way it’s cooked to the way it’s presented, each
    detail honors heritage and authenticity. Our service is calm, graceful,
    and thoughtful, echoing the dignity of a bygone era — where every guest
    is welcomed not as a customer, but as a royal mehmaan.
  </p>
</div>
        </div>
      </div>

      {/* IMAGE GRIDS */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img
            src="/images/abt1.avif"
            alt="Heritage interior"
            loading="lazy"
            className="will-change-transform"
            style={{ transition: "transform 0.6s ease" }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img
            src="/images/abt2.jpg"
            alt="Royal dining space"
            loading="lazy"
            className="will-change-transform"
            style={{ transition: "transform 0.6s ease" }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img
            src="/images/abt5.jpeg"
            alt="Traditional decor"
            loading="lazy"
            className="will-change-transform"
            style={{ transition: "transform 0.6s ease" }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img
            src="/images/abt3.png"
            alt="Rajasthani ambience"
            loading="lazy"
            className="will-change-transform"
            style={{ transition: "transform 0.6s ease" }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img
            src="/images/abt4.jpg"
            alt="Royal seating"
            loading="lazy"
            className="will-change-transform"
            style={{ transition: "transform 0.6s ease" }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(About);

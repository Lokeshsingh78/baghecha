import React, { useRef, memo } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const videoRef = useRef();
    const animationsRef = useRef([]);
    const isMobile = useMediaQuery({ maxWidth: 760 });

    useGSAP(() => {
        if (animationsRef.current.length) {
            animationsRef.current.forEach(anim => anim.kill());
            animationsRef.current = [];
        }

        const heroSplit = new SplitText(".title", { 
            type: "chars, words",
            charsClass: "char",
            wordsClass: "word"
        });

        const paraSplit = new SplitText(".subtitle", { 
            type: "words, lines",
            linesClass: "line"
        });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        animationsRef.current.push(
            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.05,
            }),

            gsap.from(paraSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.05,
                delay: 0.8
            })
        );

        animationsRef.current.push(
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom 80%",
                    scrub: 0.5,
                }
            })
        );

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "200% top" : "bottom top";

        const videoTl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: 0.5,
                pin: true,
                markers: false,
            }
        });

        animationsRef.current.push(videoTl);

        if (videoRef.current) {
            videoRef.current.setAttribute('loading', 'lazy');

            videoRef.current.onloadedmetadata = () => {
                videoTl.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    ease: "none",
                });
            };
        }

    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">BAGHECHA</h1>

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Royal. Authentic. Unforgettable.</p>
                            <p className="subtitle">
                                Experience the Flavors <br /> of Rajasthan
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Step into a world where ancient recipes meet modern elegance. Every dish is a tribute to our rich heritage, crafted with pride and served with the warmth of true Rajasthani hospitality.
                            </p>

                            <a href="#cocktails">Discover Our Delicacies</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                     src="https://res.cloudinary.com/demhugr1s/video/upload/v1767626873/output_yihj8y.mp4"
                   // src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="metadata"
                    className="will-change-transform"
                />
            </div>
        </>
    );
};

export default memo(Hero);

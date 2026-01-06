import React from 'react'
import {openingHours, socials} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Footer = () => {
    useGSAP(() => {
        const wordSplit = SplitText.create(".content h2", {
            type: "words"
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center"
            },
            ease: "power2.inOut",
        }).from(wordSplit.lines, {
                opacity: 0,
                stagger: 0.02, yPercent: 100, ease: "power2.inOut",
        }).from("#contact h3, #contact p", {
            opacity: 0,
            stagger: 0.02, yPercent: 100, ease: "power2.inOut",
        }, "<")
    })
    return (
        <section id="contact">
            <div className="content">
                <h2 className="font-modern-negra">
                    Visit BAGHECHA
                </h2>

                <div>
                    <h3 className="font-serif">
                        Our Heritage Location
                    </h3>
                    <p className="font-sans">
                        Pink City, Jaipur, Rajasthan 302001
                    </p>
                </div>
                <div>
                    <h3 className="font-serif">
                        Connect With Us
                    </h3>
                    <p className="font-sans">
                        +91 (141) 234-5678
                    </p>
                    <p className="font-sans">
                         Lokeshsinghtanwar78@gmail.com
                    </p>
                </div>
                <div>
                    <h3 className="font-serif">
                        Open Every Day
                    </h3>
                    {openingHours.map(({day, time}) => (
                        <p key={day} className="font-sans"> {day } : {time} </p>
                    ))}

                </div>
                <div>
                    <h3 className="font-serif">
                        Follow Our Journey
                    </h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="hover:opacity-70 transition-opacity">
                                <img src={social.icon} alt={social.name} className="w-8 h-8" />
                            </a>

                        ))}
                    </div>

                </div>
            </div>

            <img src='/images/footer-drinks.png' alt="drinks" className="drink-img" />
        </section>
    )
}
export default Footer
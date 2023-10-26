"use client";

import React from "react";
import Image from "next/image";
import Introduction from "./components/Introduction";
import Slideshow from "./components/Slideshow";

export default function Home() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  }

  const backgroundImageStyle = {
    backgroundImage: 'url("pic2_1.jpg")', // Replace with your image path
    backgroundSize: "", // Adjust as needed
    /* Other background properties like backgroundPosition, backgroundRepeat, etc. */
  };

  return (
    <>
      <section id="section1" className="h-screen">
        <div className="h-screen bg-gradient-to-b from-black from-60% to-zinc-600 ...">
          <Introduction />

          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/pic1.jpg"
              width={350}
              height={400}
              alt="Picture of the author"
              className="rounded-md hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
            />
          </div>
        </div>
      </section>
      <section id="section3" className="h-screen">
        <div className="h-screen bg-zinc-600 flex">
          <div className="w-1/2 bg-fixed" style={backgroundImageStyle}></div>
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col gap-7">
              <div className="text-white text-3xl leading-relaxed font-black">
                HI, I'M PHUONG, A MOTIVATED PROGRAMMER WHO THRIVES ON TURNING
                IDEAS INTO REALITY THROUGH THE ART OF CODING. TOGETHER, LET'S
                DELVE INTO THE LIMITLESS POTENTIAL OF TECHNOLOGY AND INNOVATION.
              </div>
              <div className="flex gap-7">
                <div className="text-xl text-slate-400">
                  CHECK OUT MY PROJECTS →
                </div>
                <div onClick={() => scrollToSection('section2')} href="#section2" className="text-xl hover:underline text-white hover:scale-125 ease-in-out duration-300">
                  HERE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2" className="h-screen">
        <div className="h-screen bg-zinc-600 flex">
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col gap-7">
              <div className="text-white text-3xl leading-relaxed font-black">
                Welcome to my projects — a seamless blend of technology and
                creativity that's poised to redefine digital interactions. Join
                me on this journey of innovation and exploration
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <Slideshow />
          </div>
        </div>
      </section>
      <section id="section4" className="h-screen">
        <div className="h-min-full bg-gradient-to-b from-zinc-600 from-40% to-black ... flex">
          <div className="h-screen w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col items-end place-content-center">
              <h1 className="text-white text-9xl">GET</h1>
              <h1 className="text-white text-9xl">IN</h1>
              <h1 className="text-white text-9xl">TOUCH</h1>
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col items-start place-content-center">
              <div class="grid grid-cols-2 gap-2">
                <div className="text-md font-bold text-slate-400">SOCIAL</div>
                <div className="text-md font-bold text-slate-400">CONTACT</div>
                <div className="text-md font-bold text-white">LINKEDIN</div>
                <div className="text-md font-bold text-white">NTHUPHUONG13111998@GMAIL.COM</div>
                <div className="text-md font-bold text-white">BEHANCE</div>
                <div className="text-md font-bold text-white">+33 6 64 95 16 74</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

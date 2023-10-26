"use client";
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Navvar() {

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  }
  
  return (
    <nav
      className="text-white fixed top-0 left-0 right-0 z-50"
    >
      <div className="my-5 mx-14 flex place-content-between">
        <img onClick={() => scrollToSection('section1')} src="PHUONG.svg" alt="Icon Anh"></img>
        <div className="flex items-center">
          <ul className="flex text-xl">
            <li className="mx-12 hover:underline hover:scale-125 ease-in-out duration-300">
              <Link onClick={() => scrollToSection('section2')} href="#section1">WORK</Link>
            </li>
            <li className="mx-12 hover:underline hover:scale-125 ease-in-out duration-300">
              <Link onClick={() => scrollToSection('section3')} href="#section2">ABOUT</Link>
            </li>
            <li className="mx-12 hover:underline hover:scale-125 ease-in-out duration-300">
              <Link onClick={() => scrollToSection('section4')}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

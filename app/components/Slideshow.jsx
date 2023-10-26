import { React, useRef, useState, useEffect } from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slideshow() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	})

  return (
    <div className="w-2/3">
      <motion.div ref={carousel} className="overflow-hidden">
        <motion.div drag="x" dragConstraints={{ right: 0 , left: -width}} className="flex">
          {images.map((image) => {
            return (
              <motion.div className="px-5 min-h-custom min-w-custom">
                <Image
                  src={image}
                  width={350}
                  height={400}
                  alt="Picture of the author"
                  className="rounded-md w-full h-full pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

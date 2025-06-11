import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img3 from '../assets/3.png';

const StackedImages = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3
    });

    useEffect(() => {
      if (inView) {
        controls.start("animate");
      }
    }, [inView, controls]);

    const imageData = [
        { src: img1, offsetX: -30, offsetY: 20 },
        { src: img2, offsetX: -15, offsetY: 10 },
        { src: img4, offsetX: 15, offsetY: 10 },
        { src: img5, offsetX: 30, offsetY: 20 },
    ];

    return ( 
        <> <div className="flex flex-col items-center justify-center bg-black text-white pt-4 pb-0">
    <h2 className="text-6xl lg:text-7xl font-['Instrument_Serif'] mb-1">Who Am I?</h2>
  </div>

      <div ref={ref} className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

        {imageData.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            initial={{ x: `${img.offsetX}vw`, y: `${img.offsetY}vh`, opacity: 1 }}
            animate={controls}
            variants={{
              animate: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                  ease: "easeInOut"
                }
              }
            }}
            className="absolute w-[30vw] max-w-[200px] sm:max-w-[250px] md:max-w-[300px] xl:max-w-[350px] rounded-xl shadow-lg"
          />
        ))}

        <motion.img
          src={img3}
          initial={{ scale: 1, opacity: 1 }}
          animate={controls}
          variants={{
            animate: {
              scale: 1,
              opacity: 1,
              transition: { delay: 0.3 }
            }
          }}
          className="z-10 w-[32vw] max-w-[220px] sm:max-w-[270px] md:max-w-[320px] xl:max-w-[370px] rounded-xl shadow-2xl"
        />
      </div>
      </>
    );
};


export default StackedImages;
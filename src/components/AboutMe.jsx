import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";


import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img3 from '../assets/3.png';

const StackedImages = () => {
    const HeadingControls= useAnimation();
    const [headingRef, headingInView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3
    });

    const descControls= useAnimation();
    const [descRef,descInView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    useEffect(() => {
        if (inView) controls.start("animate");
        if (headingInView) HeadingControls.start("visible");
        if (descInView) descControls.start("visible");
    }, [inView, headingInView, descInView, controls, HeadingControls, descControls]);

    const imageData = [
        { src: img1, offsetX: -30, offsetY: 20 },
        { src: img2, offsetX: -15, offsetY: 10 },
        { src: img4, offsetX: 15, offsetY: 10 },
        { src: img5, offsetX: 30, offsetY: 20 },
    ];

    return ( 
        
         <div className="bg-black">
    <div className="flex flex-col items-center justify-center text-white py-4">
  <motion.h2
    ref={headingRef}
    initial={{ opacity: 0, y: 20 }}
    animate={HeadingControls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    }}
    className="text-6xl lg:text-7xl font-['Instrument_Serif'] mb-1"
  >
    Who Am I?
  </motion.h2>
</div>
      <div ref={ref} className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">

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

    <motion.div
    ref={descRef}
    initial={{ opacity: 0, y: 20 }}
    animate={descControls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 1,delay:1.3, ease: "easeOut" } }
    }}
    className="flex flex-col items-center justify-center text-white py-2 px-6">
    <div className="text-2xl text-center leading-relaxed max-w-4xl font-[Forum]">
    Hi,
    </div>
    <div className="text-2xl text-center leading-relaxed max-w-4xl font-[Forum] flex justify-center items-center gap-2">
    I’m a
    <span className="inline-block">
      <Typewriter
        options={{
          strings: ["Fullstack", "Frontend"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </span> 
    web developer
  </div>
 
  <p className="text-2xl text-center leading-relaxed max-w-4xl font-[Forum] mt-4">
    by day and a dreamer by night.<br />
    I’m driven by my creative visions, and the joy of <br />bringing them to life through design and code. <br />
    I build with curiosity, care, and COFFEE. <br />
    <span className="font-[Alex_Brush]"> always learning, always evolving.</span>
  </p>
    </motion.div>
    </div>

    );
};


export default StackedImages;
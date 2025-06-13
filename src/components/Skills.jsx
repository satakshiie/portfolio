import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import AnimatedLabel from "./AnimatedLabel";
import FadeInOnView from "./FadeInOnView";
import constellation from "../assets/constellation.png";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";

const Skills = () => {
  const controls = useAnimation();
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={sectionRef} className="relative bg-black text-white py-32 flex flex-col items-center justify-center">

      <FadeInOnView className="mb-8">
        <h2 className="text-6xl lg:text-7xl font-['Instrument_Serif']">Skills</h2>
      </FadeInOnView>


      <img src={design1} alt="space-left" className="absolute bottom-0 left-0 w-[30vw] sm:w-[25vw] md:w-[20vw] opacity-70" />
      <img src={design2} alt="space-right" className="absolute top-0 right-0 w-[30vw] sm:w-[25vw] md:w-[20vw] opacity-70" />


      <div className="relative flex justify-center items-center">
        <img src={constellation} alt="constellation" className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw]" />


        <AnimatedLabel text="Languages →" top="18%" left="3%" delay={0.5} direction="right" controls={controls} />
        <AnimatedLabel text="← Framework/Library" top="8%" right="3%" delay={1} direction="left" controls={controls} />
        <AnimatedLabel text="← Other Skills" bottom="5%" right="-10%" delay={1.5} direction="left" controls={controls} />
      </div>
    </div>
  );
};

export default Skills;
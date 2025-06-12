import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Saturn rotation based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Project fade-ins
  const fadeIn1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const fadeIn2 = useTransform(scrollYProgress, [0.20, 0.30], [0, 1]);
  const fadeIn3 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-black relative">

      {/* Sticky Flex Layout */}
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <div className="flex w-[90%] mx-auto items-center justify-between">

          {/* Saturn Left */}
          <motion.div style={{ rotateY: rotation }} className="w-1/2 flex justify-center">
            <Spline scene="https://prod.spline.design/QWKEXBxdEzt3SPsZ/scene.splinecode" />
          </motion.div>

          {/* Projects Right */}
          <div className="w-1/2 relative flex flex-col justify-center text-white">

            <motion.div style={{ opacity: fadeIn1 }} className="mb-20">
              <h2 className="text-5xl font-bold mb-4">Project 1</h2>
              <p>Some description for project 1 here</p>
            </motion.div>

            <motion.div style={{ opacity: fadeIn2 }} className="mb-20">
              <h2 className="text-5xl font-bold mb-4">Project 2</h2>
              <p>Some description for project 2 here</p>
            </motion.div>

            <motion.div style={{ opacity: fadeIn3 }}>
              <h2 className="text-5xl font-bold mb-4">Project 3</h2>
              <p>Some description for project 3 here</p>
            </motion.div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Projects;
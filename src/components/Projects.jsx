import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import sample1 from "../assets/sample1.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import StarBorder from './StarBorder'

const projects = [
  { title: "FinPort", description: "A portfolio tracker that helps users monitor investments and analyze trends with moving averages, risk analysis, and daily returns to make smarter financial decisions." , techStack: "Html,CSS,JS | Flask | MySQL | Plotly | yFinance | Python"},
  { title: "SereneYou", description: "SereneYou is more than just a wellness app — it’s a soothing digital companion for those navigating life far from home. SereneYou offers mood tracking, mindfulness tools, and comforting features that promote mental clarity, emotional expression, and peace.", techStack: "Xcode | PencilKit | AVFoundation | iOS Deployment" },
  { title: "Mental Health Chatbot", description: "An AI-powered support system integrating sentiment analysis (TextBlob) and symptom detection (scikit-learn, TF-IDF) to offer empathetic conversations and early mental health insights, built with Flask and a calming frontend interface.",  techStack:"Python | Flask | TextBlob | Scikit-learn | TF-IDF | TinyLLama | Html,CSS,JS" },
];

const Projects = () => {
  const containerRef = useRef(null);
  const splineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      if (splineRef.current) {
        const saturn = splineRef.current.findObjectByName("Saturn");
        if (saturn) {
          saturn.rotation.y = (latest * Math.PI) / 180;
        }
      }
    });

    return () => unsubscribe();
  }, [rotation]);

  // Fade-ins for projects
  const fadeIn1 = useTransform(scrollYProgress, [0.5, 0.15], [0, 1]);
  const fadeIn2 = useTransform(scrollYProgress, [0.20, 0.30], [0, 1]);
  const fadeIn3 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  return (
    <div ref={containerRef} className="h-[500vh] bg-black text-white relative flex">

      {/* Left Side Saturn */}
      <div className="sticky top-0 w-1/2 h-screen flex justify-center items-center">
        <Spline scene="https://prod.spline.design/QWKEXBxdEzt3SPsZ/scene.splinecode"   onLoad={(spline) => (splineRef.current = spline)} />
      </div>

      <div className="w-1/2 relative">

        <motion.div
          style={{ opacity: fadeIn1 }}
          className="min-h-screen flex justify-center items-center"
        >
          <div className="w-[350px] md:w-[400px] p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <h2 className="text-4xl font-bold mb-4 font-[Instrument_Serif]">{projects[0].title}</h2>
            <img src={sample3} 
                 alt="FinPort Preview" 
                 className="w-full max-h-[250px] rounded-xl object-cover mb-4"
             />
            <p className="text-lg font-[Forum]">{projects[0].description}</p>
            <p className="text-lg font-[Forum] mt-2">Tech Stack: {projects[0].techStack}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: fadeIn2 }}
          className="min-h-screen flex justify-center items-center"
        >
          <div className="w-[350px] md:w-[400px] p-4 rounded-2xl border border-white/20 bg-white/10 shadow-lg">
            <h2 className="text-4xl font-bold mb-4 font-[Instrument_Serif]">{projects[1].title}</h2>
            <img src={sample1} 
                 alt="FinPort Preview" 
                 className="w-full max-h-[250px] rounded-xl object-cover mb-4"
             />
            <p className="text-lg font-[Forum]">{projects[1].description}</p>
            <p className="text-lg font-[Forum] mt-2">Tech Stack: {projects[1].techStack}</p>
            <StarBorder  as="a" href="https://github.com/satakshiie/SereneYou" 
               className="px-6 py-2 text-white font-semibold mt-4"
               color="#FFD700"
               onClick={() => window.open(link, "_blank")}
            > View More</StarBorder>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: fadeIn3 }}
          className="min-h-screen flex justify-center items-center"
        >
          <div className="relative z-10 w-[350px] md:w-[400px] p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <h2 className="text-4xl font-bold mb-4 font-[Instrument_Serif]">{projects[2].title}</h2>
            <img src={sample2} 
                 alt="FinPort Preview" 
                 className="w-full max-h-[250px] rounded-xl object-cover mb-4"
             />
            <p className="text-lg font-[Forum]">{projects[2].description}</p>
            <p className="text-lg font-[Forum] mt-2">Tech Stack: {projects[2].techStack}</p>
        
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
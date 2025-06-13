import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import sample1 from "../assets/sample1.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import StarBorder from './StarBorder'
import FadeInOnView from "./FadeInOnView";
import starr from "../assets/starr.png";

const projects = [
  { 
    title: "FinPort", 
    description: "A portfolio tracker that helps users monitor investments and analyze trends with moving averages, risk analysis, and daily returns to make smarter financial decisions.",
    techStack: "Html,CSS,JS | Flask | MySQL | Plotly | yFinance | Python",
    link: "https://github.com/satakshiie/FinPort"   
  },
  { 
    title: "SereneYou", 
    description: "SereneYou is more than just a wellness app — it’s a soothing digital companion for those navigating life far from home. SereneYou offers mood tracking, mindfulness tools, and comforting features that promote mental clarity, emotional expression, and peace.",
    techStack: "Xcode | PencilKit | AVFoundation | iOS Deployment",
    link: "https://github.com/satakshiie/SereneYou"  
  },
  { 
    title: "Mental Health Chatbot", 
    description: "An AI-powered support system integrating sentiment analysis (TextBlob) and symptom detection (scikit-learn, TF-IDF) to offer empathetic conversations and early mental health insights, built with Flask and a calming frontend interface.",
    techStack: "Python | Flask | TextBlob | Scikit-learn | TF-IDF | TinyLLama | Html,CSS,JS",
    link: "https://github.com/satakshiie/SentimentAnalysisBot"  
  },
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
    <div ref={containerRef} className="h-[500vh] bg-black text-white relative flex flex-col md:flex-row">

      <div className="absolute top-10 w-full z-20">
      <FadeInOnView className="mb-8">
      <h2 className="text-center text-6xl lg:text-7xl font-['Instrument_Serif']">Projects </h2>
      </FadeInOnView>
      </div>

    
      <div className="sticky top-0 w-full h-screen z-0 md:w-1/2">
  <Spline scene="https://prod.spline.design/QWKEXBxdEzt3SPsZ/scene.splinecode" onLoad={(spline) => (splineRef.current = spline)} />
</div>

<div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col md:static md:w-1/2 md:flex md:flex-col md:justify-center">
<div 
  className="
    absolute top-0 right-0 md:w-1/2 h-[40vh]
    hidden md:block 
    bg-cover bg-center opacity-90
    pointer-events-none
    z-0
  " 
  style={{ backgroundImage: `url(${starr})` }}
/>

    {projects.map((project, idx) => (
      <motion.div
        key={idx}
        className="h-screen flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[350px] md:w-[400px] p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <h2 className="text-4xl font-bold mb-4 font-[Instrument_Serif]">{project.title}</h2>
          <img src={idx === 0 ? sample3 : idx === 1 ? sample1 : sample2} alt={`${project.title} Preview`} className="w-full max-h-[250px] rounded-xl object-cover mb-4" />
          <p className="text-lg font-[Forum]">{project.description}</p>
          <p className="text-lg font-[Forum] mt-2">Tech Stack: {project.techStack}</p>
          <StarBorder  
   as="a" 
   href={project.link} 
   className="px-6 py-2 text-white font-semibold mt-4"
   color="#FFD700"
   target="_blank"
   rel="noopener noreferrer"
>
  View More
</StarBorder>
        </div>
      </motion.div>
    ))}
  </div>
</div>
  );
};

export default Projects;
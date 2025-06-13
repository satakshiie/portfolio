import React, { useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useMotionValue, useMotionTemplate, animate, motion } from "framer-motion";
import ShinyText from './ShinyText';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const COLORS = ["#FFFFFF", "#B5D9FF", "#F5F5F5"];

const Contact = () => {
  const color = useMotionValue(COLORS[0]);
  const form = useRef();
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 50%, ${color})`;
// Handle Submit
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8vxh3ed',      // Replace with your Service ID
      'template_we6vp6o',     // Replace with your Template ID
      form.current,
      'RCRpaIveiCRoLHq4r'       // Replace with your Public Key (API key)
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert("An error occurred. Please try again.");
    });
  };

  return (
    <motion.div 
      className="relative w-full min-h-screen bg-black overflow-hidden flex justify-center items-center"
      style={{ background: backgroundImage }}
    >
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars
            radius={100}
            depth={80}
            count={3000}
            factor={5}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
      <div className="relative z-10 text-white text-center px-4">

{/* Centered Title */}
<h2 className="text-5xl lg:text-6xl font-[Instrument_Serif] mb-20">
  <ShinyText>Get In Touch</ShinyText>
</h2>
<div className="flex flex-col lg:flex-row justify-center items-start gap-16">
    
    <div className="max-w-md text-left space-y-6">
    <p className="text-lg font-[Forum]">
      Have an amazing idea and need a developer/designer to bring it to life — my inbox is always open.
    </p>
    <p className="text-lg font-[Forum]">
      Not a project? That’s perfectly fine — I always love meeting new people and sharing ideas over coffee.
    </p>
    <div>
      <p className="text-xl font-[Forum] mb-2">send a hi ☾ </p>
      <div className="flex gap-4 text-lg font-[Forum]">
        <a href="https://www.instagram.com/satakshiie/" className="hover:underline">Instagram</a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/satakshi-srivastava-19587328a/" className="hover:underline">LinkedIn</a>
        <span>|</span>
        <a href="mailto:satakshisrivastava11@gmail.com" className="hover:underline">Gmail</a>
      </div>
    </div>
  </div>

  {/* Right Side — Form */}
  <div className="backdrop-blur-xl bg-white/10 border border-white/5 p-8 rounded-3xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-6">Your Details</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Name:</label>
                <input type="text" name="from_name" placeholder="Name" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Email:</label>
                <input type="email" name="from_email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Message:</label>
                <textarea name="message" rows="5" placeholder="Message" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d0ebff] to-[#ffffff] text-black font-semibold">Submit</button>
            </form>
  </div>
</div>
</div>
    </motion.div>
  );
};

export default Contact;
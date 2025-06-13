import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex justify-center items-center">

      {/* Aurora Gradients */}
      <div className="absolute inset-0">
        <div className="absolute w-[150%] h-[150%] bg-gradient-radial from-green-400/30 via-purple-400/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute w-[100%] h-[100%] bg-gradient-radial from-blue-400/20 via-pink-400/10 to-transparent blur-2xl animate-pulse" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars
            radius={100}
            depth={50}
            count={500}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h2 className="text-5xl lg:text-6xl font-[Instrument_Serif] mb-6">Contact Me</h2>
        <p className="text-lg font-[Forum] mb-8">
          I’m open to freelance projects, collaborations or even a friendly chat. Drop me a message!
        </p>

        {/* You can hook this up to Formspree or EmailJS later */}
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg bg-white/10 backdrop-blur text-white outline-none"></textarea>
          <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
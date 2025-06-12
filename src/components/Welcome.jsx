import React from 'react';
import SatakshiLogo from './SatakshiLogo';


const Welcome = () => {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center text-center space-y-6 px-4 overflow-hidden">
      
    
      <img
        src="/star.png"
        alt="stars background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
      />

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-['Instrument_Serif'] z-10">Welcome</h2>
      <h2 className="text-3xl md:text-5xl  lg:text-6xl font-['Instrument_Serif'] z-10">To</h2>
      <h1 className="z-10">
        <SatakshiLogo />
      </h1>
      <p className="text-3xl md:text-4xl  lg:text-5xl font-['Instrument_Serif'] z-10">Sit Back And Enjoy</p>
  
    </div>
  );
};

export default Welcome;
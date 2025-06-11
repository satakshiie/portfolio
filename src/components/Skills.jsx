import FadeInOnView from './FadeInOnView';
import constellation from '../assets/constellation.png';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';

const Skills = () => {
    return (
      <div className="relative bg-black text-white py-16 flex flex-col items-center justify-center">
        
        <FadeInOnView className="mb-8">
          <h2 className="text-6xl lg:text-7xl font-['Instrument_Serif']">Skills</h2>
        </FadeInOnView>
  
     
        <img 
  src={design1} 
  alt="space-left" 
  className="absolute bottom-0 left-0 w-[30vw] sm:w-[25vw] md:w-[20vw] opacity-70" 
/>
       
<img 
  src={design2} 
  alt="space-right" 
  className="absolute top-0 right-0 w-[30vw] sm:w-[25vw] md:w-[20vw] opacity-70" 
/>
        <div className="relative flex justify-center items-center">
          <img 
            src={constellation} 
            alt="constellation" 
            className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw]" 
          />
        </div>
  
      </div>
    )
  }
  
  export default Skills;
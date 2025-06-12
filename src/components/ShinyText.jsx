const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    const animationName = disabled ? 'none' : 'shine';
  
    const style = {
      backgroundImage:
        'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      animation: `${animationName} linear infinite`,
      animationDuration: animationDuration,
      willChange: 'background-position',
    };
  
    return (
      <>
        <style>
          {`
            @keyframes shine {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}
        </style>
        <div className={`text-[#b5b5b5a4] bg-clip-text inline-block ${className}`} style={style}>
          {text}
        </div>
      </>
    );
  };
  
  export default ShinyText;
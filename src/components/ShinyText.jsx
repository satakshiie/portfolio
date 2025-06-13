const ShinyText = ({ children, disabled = false, className = "" }) => {
    return (
      <div className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}>
        {children}
      </div>
    );
  };
  
  export default ShinyText;
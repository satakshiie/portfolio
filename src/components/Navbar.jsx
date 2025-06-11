const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-black text-white p-4 z-50">
        <div className="flex justify-center gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
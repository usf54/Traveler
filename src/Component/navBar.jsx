import {FaBars,FaTimes,FaPlane} from "react-icons/fa"
import { useRef } from "react";
function NavBar() {
  const navRef = useRef();
  const showNavBar = ()=>{
    navRef.current.classList.toggle('responsive_nav')
  }
  return(
    <div className="heading">
    <header>
      <h3 className="logo"><FaPlane></FaPlane>Traveler</h3>
      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes></FaTimes>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars></FaBars>
      </button>
    </header>
    </div>
  )
}
export default NavBar;
import {Link as ScrollLink} from "react-scroll"
import "./Navbar.css"
import { useEffect,useState } from "react";


const Navbar = (props) => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Nav-container" id={isScrolled?"black":''} >
      <div className="logo" >
      portfolio
      </div>
   
    <div className="nav-btn">
       <ScrollLink to={'home'}smooth={true} duration={1000} offset={-100}><button className="btn-Nav">Home</button></ScrollLink> 
       <ScrollLink to={'about'} smooth={true} duration={500} offset={-100}> <button className="btn-Nav">About</button></ScrollLink> 
       <ScrollLink to={'skills'} smooth={true} duration={600}offset={-20}><button className="btn-Nav">Skills</button></ScrollLink> 
       <ScrollLink to={'portfolio'} smooth={true} duration={700} offset={-35}> <button className="btn-Nav" >Portfolio</button></ScrollLink> 
       <ScrollLink to={'contact'} smooth={true} duration={1000}offset={-100}><button className="btn-Nav">Cantact</button></ScrollLink> 
    </div>
        <div>
        <ScrollLink to={'contact'} smooth={true} duration={1000}offset={-100}><button className="Get-in-touch">Get In Touch</button></ScrollLink> 
        </div>
    </div>
  )
}

export default Navbar

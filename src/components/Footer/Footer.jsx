import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <div className="footer-icons">
         <Link to={"mailto:asifsiddiqui9011@gmail.com"} target="_blank" style={{textDecoration:"none", color:"white"}}><BiLogoGmail /></Link> 
         <Link to={"https://www.linkedin.com/in/siddiqui-asif-ahmed-037513311/"} target="_blank" style={{textDecoration:"none", color:"white"}}><FaLinkedinIn /></Link> 
         <Link to={"https://github.com/asifsiddiqui9011"} target="_blank" style={{textDecoration:"none", color:"white"}}><FaGithub /></Link> 
         <Link to={"https://wa.me/8853858959"} target="_blank" style={{textDecoration:"none", color:"white"}}> <IoLogoWhatsapp /></Link> 
         <Link to={"https://www.instagram.com/as___if___sidd/"} target="_blank" style={{textDecoration:"none", color:"white"}}><FaInstagram /></Link> 
         <Link to={"https://twitter.com/your-username"} target="_blank" style={{textDecoration:"none", color:"white"}}><FaXTwitter /></Link>   
      </div>
    </div>
  )
}

export default Footer

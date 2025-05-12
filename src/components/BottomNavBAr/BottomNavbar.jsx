import React from 'react';
import './BottomNavbar.css'; 
import {Link as ScrollLink} from "react-scroll"// Ensure the CSS file is in the same directory

const BottomNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <ul className="nav-links">
        <li className="nav-item">

       <ScrollLink to={'home'}smooth={true} duration={1000} offset={-100}><button className="btn-Nav">Home</button></ScrollLink> 
   
        </li>
        <li className="nav-item">
                 <ScrollLink to={'about'} smooth={true} duration={500} offset={-100}> <button className="btn-Nav">About</button></ScrollLink> 

        </li>
        <li className="nav-item">
                 <ScrollLink to={'skills'} smooth={true} duration={600}offset={-20}><button className="btn-Nav">Skills</button></ScrollLink> 

        </li>
        <li className="nav-item">
       <ScrollLink to={'portfolio'} smooth={true} duration={700} offset={-35}> <button className="btn-Nav" >Portfolio</button></ScrollLink> 
        </li>

      </ul>
    </nav>
  );
};

export default BottomNavbar;
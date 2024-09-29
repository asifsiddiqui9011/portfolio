import {Link as ScrollLink} from "react-scroll"
import "./Navbar.css"
import { useEffect,useState } from "react";
import Dropdown from "./Dropdown";
import img0 from "../../assets/Theme/theme0.png"
import img1 from "../../assets/Theme/theme1.png"
import img2 from "../../assets/Theme/theme2.png"
import img3 from "../../assets/Theme/theme3.png"
import img4 from "../../assets/Theme/theme4.png"
import img5 from "../../assets/Theme/theme5.png"
import img6 from "../../assets/Theme/theme6.png"

const options = [
  { value: 0, label: 'Black', img: img0},
  { value: 1, label: '1', img: img1 },
  { value: 2, label: '2', img: img2},
  { value: 6, label: '6', img: img3 },
  { value: 4, label: '4', img: img4 },
  { value: 5, label: '5', img: img5 },
  { value: 3, label: '3', img: img6},


];

const Navbar = (props) => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(0);

  const handleThemeChange = (value) => {
    setTheme(value);
    props.theme(value)
  };


  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

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
      <div className="logo" style={theme==5?{color:"black"}:{color:"white"}}>
      portfolio
      </div>
   
    <div className="nav-btn">
       <ScrollLink to={'home'}smooth={true} duration={500} offset={-100}><button>Home</button></ScrollLink> 
       <ScrollLink to={'about'} smooth={true} duration={500} offset={-100}> <button>About</button></ScrollLink> 
       <ScrollLink to={'skills'} smooth={true} duration={500}offset={-20}><button>Skills</button></ScrollLink> 
       <ScrollLink to={'portfolio'} smooth={true} duration={500} offset={-35}> <button>Portfolio</button></ScrollLink> 
       <ScrollLink to={'contact'} smooth={true} duration={500}offset={-100}><button>Cantact</button></ScrollLink> 
    </div>
        <div>
          <Dropdown options={options} selectedValue={theme} onChange={handleThemeChange} />
        </div>
    </div>
  )
}

export default Navbar

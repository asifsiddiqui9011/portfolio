import "./Intro.css"
import { FaRegFilePdf } from "react-icons/fa";


const Intro = () => {
  return (
    <section id="about">
      <div className="intro-container" >
          <div className="about-container">
            <h1>ABOUT</h1>
            <p>
            I am a Full Stack Developer with a background in Computer Science Engineering, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have experience building dynamic, scalable web applications and delivering clean, efficient code. My expertise covers both front-end and back-end development, with a focus on creating user-friendly interfaces and robust APIs. I enjoy solving complex problems and optimizing performance to ensure seamless user experiences. Always eager to learn, I stay up-to-date with emerging technologies and thrive in collaborative, agile environments.
            </p>
          </div>
          <div  className="about-container" >
            <a href={'../../../public/ee.pdf'} download style={{textDecoration:"none", color:"black" , border:"3px solid white", padding:"20px", textAlign:"center", borderRadius:"15px"}}> <h2>Download Resume</h2> <FaRegFilePdf style={{fontSize:"100px",color:"black"}} />
            </a> 
          </div>
      </div>
    </section>
  )
}

export default Intro

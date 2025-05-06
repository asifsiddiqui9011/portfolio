import "./Banner.css"
import pro from "../../assets/profile0.png"
import background from "../../assets/p-banner.png"


const Banner = () => {
  return (
    <div className="banner-container" id="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="banner-div">
        <h1 className="name">Siddiqui Asif Ahmed</h1>
        <h1 className="tag">Software / Full Stack Developer</h1>
      </div>
      <div className="image-div">
        <div className="img-container">
          <img src={pro} alt="" />
        </div>
          
      </div>
      
    </div>
  )
}

export default Banner

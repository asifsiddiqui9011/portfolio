import "./Banner.css"
import pro from "../../assets/profile0.png"


const Banner = () => {
  return (
    <div className="banner-container" id="home">
      <div className="banner-div">
        <h1 className="name">SIDDIQUI ASIF AHMED</h1>
        <h1 className="tag">SOFTWARE / FULL STACK DEVELOPER</h1>
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


// import "./Card.css"
// import { Link } from "react-router-dom"


// const Card = (props) => {
//   return (
//     <div className="card-container">
//        <h2>{props.title}</h2>
//        <p>{props.desc}</p>
//       <div className="card-btn">
//         <Link to={props.demo} target="_blank" rel="noopener noreferrer"> <button>Demo</button></Link>
//         <Link to={props.github}  target="_blank" rel="noopener noreferrer"><button >Github</button></Link>
//       </div>   
//     </div>
//   )
// }

// export default Card



import "./Card.css"
import { Link } from "react-router-dom"
import image from "../../assets/p-bg-scrl.png" // Placeholder for the image import
const Card = (props) => {
  // Expected props:
  // title: string
  // desc: string
  // demo: URL string for demo
  // github: URL string for Github repo
  // image: URL string for the demo image
  // skills: array of skill strings
  
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={`${props.title} Demo`} />
      </div>
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        {props.skills && (
          <div className="card-skills">
            <h4>Skills Used:</h4>
            <ul>
              {props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="card-btn">
        <Link to={props.demo} target="_blank" rel="noopener noreferrer">
          <button>Demo</button>
        </Link>
        <Link to={props.github} target="_blank" rel="noopener noreferrer">
          <button>Github</button>
        </Link>
      </div>
    </div>
  )
}

export default Card

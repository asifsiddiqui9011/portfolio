
import "./Card.css"
import { Link } from "react-router-dom"


const Card = (props) => {
  return (
    <div className="card-container">
       <h2>{props.title}</h2>
       <p>{props.desc}</p>
      <div className="card-btn">
        <Link to={props.demo} target="_blank" rel="noopener noreferrer"> <button>Demo</button></Link>
        <Link to={props.github}  target="_blank" rel="noopener noreferrer"><button >Github</button></Link>
      </div>   
    </div>
  )
}

export default Card

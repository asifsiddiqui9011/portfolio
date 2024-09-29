import "./Skill.css"
import flora from "../../assets/introwall11.jpg"
import mongodb from '../../assets/skills/mongodb.png'
import python from '../../assets/skills/python.png'
import CPP from '../../assets/skills/c++.png'
import reactjs from '../../assets/skills/reactjs.png'
import nodejs from '../../assets/skills/pngwing.com.png'
import mysql from '../../assets/skills/mysql.png'
import github from '../../assets/skills/github.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import express from '../../assets/skills/express.png'

function Hexa(props){
   return(
      <div className="hexa">
         <img src={props.img} alt="" className="skill-img" />
         <h2>{props.tag}</h2>
         <h3>{props.type}</h3>
         <h3>{props.experience}</h3>
       </div>
   )
}
const Skill = () => {
  return (
    <section id="skills">
    <h1 className="heading">SKILLS</h1>
<div className="cloud-next" style={{backgroundImage:`url(${flora})`,backgroundSize:"cover"}} >
    <div className="upper">
          <Hexa tag={'Python'} img={python} experience={'Intermediate'} type={'(Programming Language)'} />
    </div>
    <div className="bottom">
        <Hexa tag={'C++'} img={CPP} experience={'Intermediate'} type={'(Programming Language)'} />
    </div>
    <div className="upper">
        <Hexa tag={'MongoDb'} img={mongodb} experience={'Intermediate'} type={'(NoSQL DBMS)'} />
    </div>
    <div className="bottom">
       <Hexa tag={'MySql'} img={mysql} experience={'Intermediate'} type={'(RDBMS)'} />
    </div>
    <div className="upper">
      <Hexa tag={'NodeJS'} img={nodejs} experience={'Intermediate'} type={'(Runtime Environment)'} />
    </div>
    <div className="bottom">
       <Hexa tag={'Express'} img={express} experience={'Intermediate'} type={'(Framework)'} />
    </div>
    <div className="upper">
       <Hexa tag={'ReactJS'} img={reactjs} experience={'Intermediate'} type={'(JavaScript library)'} />
    </div>
    <div className="bottom">
      <Hexa tag={'JavaScript'} img={js} experience={'Intermediate'} type={'(Programming Language)'} />
    </div>
    <div className="upper">
      <Hexa tag={'HTML5'} img={html} experience={'Intermediate'} type={'(Markup Language)'} />
    </div>
    <div className="bottom">
       <Hexa tag={'CSS'} img={css} experience={'Intermediate'} type={'(Style Sheet Language)'} />
    </div>
    <div className="upper">
       <Hexa tag={'BootStrap'} img={bootstrap} experience={'Intermediate'} type={'(Freamework)'} />   
    </div>
    <div className="bottom">
         <Hexa tag={'GitHub'} img={github} experience={'Intermediate'} type={'(Developers Platform)'} />
    </div>
    
</div>
    </section>
  )
}

export default Skill

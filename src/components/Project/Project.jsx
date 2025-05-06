import Card from "../Cards/Card"
import "./Project.css"




const Project = () => {


  const projects = [
    {
      title:"Ai-GAdgets",
      desc:"Our e-commerce platform for AI gadgets is a cutting-edge online store, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform offers a seamless shopping experience, showcasing the latest in AI-powered devices and smart technology. With a dynamic, user-friendly interface built with React.js, users can easily explore, and purchase AI gadgets with just a few clicks.",
      github:"https://github.com/asifsiddiqui9011/Ai-Gadgets",
      demo:"https://ai-gadgets-ashy.vercel.app/",
      skills:["MERN Stack","HTML","CSS","JavaScript"]
    },
    {
      title:"Cinemal Hall",
      desc:"Our cinema hall website offers a seamless and convenient way to browse movies and purchase tickets online. Users can easily view showtimes, select seats, and book tickets for their favorite films. With a user-friendly design and secure payment options, the platform ensures a smooth and hassle-free movie ticket buying experience, accessible on any device",
      github:"https://github.com/asifsiddiqui9011/CinemaHall",
      demo:"https://cinema-hall-theta.vercel.app",
      skills:["HTML","CSS","JavaScript","React.js","Node.js","Express.js","MongoDB"]
    },
    {
      title:"News App",
      desc:"Our news app delivers the latest daily news across various categories like Business, Sports, Politics, Entertainment, and more, all built using React.js. With a sleek, responsive interface, users can easily navigate through different sections and stay updated on current events. The app offers real-time updates and personalized news feeds, ensuring a dynamic and user-friendly experience across devices.",
      github:"https://github.com/asifsiddiqui9011/News_APP",
      demo:"https://news-app-flax-eight.vercel.app/",
      skills:["HTML","CSS","JavaScript","React.js"]
    },
    {
      title:"Finanace Management",
      desc:"Our finance management app helps users efficiently manage their finances by allowing them to create, read, update, and delete expense, income, and budget details. With intuitive features, users can track their financial activities and explore graphical representations of their income, expenses, and overall financial status. The app provides clear insights, enabling better budgeting and smarter financial decisions, all in a user-friendly and visually engaging interface.",
      github:"https://github.com/asifsiddiqui9011/finance",
      demo:"https://finance-management-nd90.onrender.com",
      skills:["HTML","CSS","JavaScript","React.js","Node.js","Express.js","MongoDB"]
    },
    {
      title:"Spotify Clone",
      desc:"Our Spotify clone is a visually appealing music streaming interface, created using HTML and CSS. It replicates the core design of Spotify, offering a sleek, responsive layout with an intuitive music browsing experience.",
      github:"https://github.com/asifsiddiqui9011/spotify_clone",
      demo:"https://asifsiddiqui9011.github.io/spotify_clone/",
      skills:["HTML","CSS"]
    },
    {
      title:"Figma Design",
      desc:"HobbyCue is a beautifully crafted website that helps users explore and engage with various hobbies, designed in Figma and developed using HTML, CSS, and React.js. With a clean and modern interface, users can easily navigate through different hobby categories, find tutorials, and connect with like-minded individuals.",
      github:"https://github.com/asifsiddiqui9011/hobbycue",
      demo:"https://hobbycue-puce.vercel.app/",
      skills:["HTML","CSS","JavaScript","React.js"]
    },
    {
      title:"Foot Ball",
      desc:"Our Football Tactic AI project leverages advanced computer vision techniques to detect players and the ball in real time during a football match. Developed using Python, this AI-driven system tracks player movements, ball position, and tactical formations, providing deep insights into game strategies as they unfold. The AI can be used for performance analysis, enhancing coaching decisions, and delivering a more immersive viewing experience for fans and analysts alike.",
      github:"https://github.com/Akashgaur30/football-AI",
      demo:"",
      skills:["Python","OpenCV","Computer Vision"]
    }
  ]
  return (
    <div id="portfolio" style={{textAlign:"center"}}>
      <h1 className="heading" style={{marginBottom:"10px"}}>PROJECTS</h1>
        <div className="project-container" >
          {projects.map((data,index)=>{
            return(
              <Card key={index} title={data.title} desc={data.desc} github={data.github} demo={data.demo} skills={data.skills}/>
            )
          })}
        </div>
    </div>
  )
}

export default Project

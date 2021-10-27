let imgArray = ["tic-tac-toe.gif","wineclublovers.gif", "project3.gif", "chatsupp.gif"]

export default function Projects() {
return (
  <div className="content">
    
    {imgArray.map((project,idx) => 
      <div className="projects">
        <h1>Project #{idx+1}</h1>
        <img src={project} alt="" />
      </div>
    )}

    



  </div>
  )
}
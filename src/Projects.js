
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import test from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './main.css';
let imgArray = ["tic-tac-toe.gif","wineclublovers.gif", "project3.gif", "chatsupp.gif"]
let color = [{ background: 'rgb(200, 216, 255)', color: '#fff' },{ background: 'rgb(233, 30, 99)', color: '#fff' }]
let arrayTitles = ["Tic-Tac-Toe","WineClubLovers", "Blackbird","ChatsUpp"]
let projectDescription = ['First project in javascript. Simple tic-tac-toe game','CRUD application developed in Ruby. The app is completely done from the Backend and rendered to the client side.','BlackBird is an app with the purpose of creating a better communication channel between patient and doctors. Project was developed in a team of three','Bidirectional app that allows communication of multiple users simultaneously, developed with React and Socket.IO','Tech stack: JavaScript, React CSS, Socket.IO, Express, Node.JS']
let techStack = ['Tech stack: Javascript, Html, CSS','Tech stack: Ruby, PostgreSQL, CSS','Tech stack: Express, Auth0, JavaScript, CSS, NodeJS, PSQL']
let sourceCode = [<a target="_blank" className="souceCode" href="https://github.com/NicolasJuncal/tic-tac-tie">Source Code</a>,<a target="_blank" className="souceCode" href="https://github.com/NicolasJuncal/WineLoversClub">Source Code</a>,<a target="_blank" className="souceCode" href="https://github.com/KPRATT11/blackBird">Source Code</a>,<a target="_blank" className="souceCode" href="https://github.com/NicolasJuncal/Chat-box-client">Source Code</a>]



export default function Projects() {
return (
  <div className="content">
    

<VerticalTimeline>
    {imgArray.map((project,idx) => 
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={sourceCode[idx]}
        iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(233, 30, 99)' }}
  
      >
        <h3 className="vertical-timeline-element-title">{arrayTitles[idx]}</h3>
        <h4 className="vertical-timeline-element-subtitle">{`Project #${idx + 1}`}</h4>
        <div className="project-gif">
          <img className="vertical-timeline-element-title" src={project} alt="" />
        </div>
        <div className="project-desc">
          <p>
            {projectDescription[idx]}
          </p>
          <p>
            {techStack[idx]}
          </p>
        </div>
      </VerticalTimelineElement>
      )}
    
   </VerticalTimeline>


  </div>
  )
}
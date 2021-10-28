import './Home.css';



import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export default function Example() {
  return (
    <div className="home-div fade-in-left" >
      <Accordion preExpanded={['b']} >
          <AccordionItem uuid="a" className="item">
              <AccordionItemHeading className="heading">
                  <AccordionItemButton className="button" >
                     <span className="title"> About me </span>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="panel">
                  <p className="about-p">
                      I am a full stack software engineer with a background in business and finance advisory.
                      I'm a team player and love sharing my experiences and working close with my colleagues and clients.
                      I believe working well with others shows that you are committed to achieving both personal and organisational goals.
                    </p>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="b" className="item">
              <AccordionItemHeading className="heading">
                  <AccordionItemButton className="button" >
                     <span className="title"> Main Skills</span>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="panel">
                <div className="skills">
                  <p><img src="/js.png" alt="" />JavaScript | <img src="/react.png" alt="" />React  </p>
                  <p><img src="/ruby.png" alt="" />Ruby | Ruby on Rails | Sinatra</p>
                  <p><img src="/node.png" alt="" />Node.js | Express</p>
                  <p><img src="/html.png" alt="" />HTML5</p>
                  <p><img src="/css.png" alt="" />CSS3</p>
                  <p><img src="/git.png" alt="" />GitHub</p>
                  <p><img src="/heroku.png" alt="" />Heroku</p>
                  <p> <img src="/sql.png" alt="" />PostgreSQL</p>
                
                </div>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="c" className="item ">
              <AccordionItemHeading className="heading">
                  <AccordionItemButton className="button" >
                     <span className="title"> Hobbies</span>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="panel">
                <div className="hobbies">
                  <p>On my free time, I love travelling  around the world ✈️. </p>
                  <p>I love drinking and tasting new wines. I’m one of those wine lovers! Specially red wines 🍷. </p>
                  <p>I’m completely crazy about classic cars, I love them all.. I don’t have much time nowadays, but I do have a picture to show.. check out my baby</p>
                  
                  <p><img className="fusca" src="/beetle.jpeg" alt="" /> </p>
                </div>
              </AccordionItemPanel>
          </AccordionItem>
      </Accordion>
      
      
      
      
      
     

        
      
      </div>
  );
}
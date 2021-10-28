import './Avatar.css';

export default function Avatar() {
return (
<div 
  className="avatar">
  <img src="NicolasJuncal.jpeg" alt="Nicolas"></img>
  <h3 className="my-name">Nicolas Juncal</h3>
  <h5 className="my-title">Software Engineer</h5>
  
  <div className="social-wrapper">
    <div className="social">
      <a target="_blank" href="https://www.linkedin.com/in/nicolasjuncal/"> <img src="linkedin.svg" alt="" /></a>
      <a target="_blank" href="https://github.com/NicolasJuncal"><img src="github.svg" alt="" /></a>
    </div>
  </div>
  
</div>
)
}
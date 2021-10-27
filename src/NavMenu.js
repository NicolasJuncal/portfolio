import { Link } from 'react-router-dom'
import './NavMenu.css';
export default function Nav() {
 
  return (



  <nav>
    <button className="fill"><Link to='/'>Home</Link></button>
    <button className="fill"><Link to='/projects'>Projects</Link></button>
    <button className="fill"><Link to='/contact'>Contact Me</Link></button>
    <button className="fill"><a download href='/Nicolas Juncal Resume.pdf'>Resume</a> <img src="icloud-download.svg" alt="" /></button>
  </nav>
)
}

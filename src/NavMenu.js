import { Link } from 'react-router-dom'
import './main.css';
export default function Nav() {

  return (



  <nav>
    <button className="fill" ><Link to='/'>Home</Link></button>
    <button className="fill"><Link to='/projects'>Projects</Link></button>
    <button className="fill"><a download href='/Nicolas Juncal Resume.pdf'>Resume</a> <img className="a" src="icloud-download.svg" alt="" /></button>
  </nav>
)
}

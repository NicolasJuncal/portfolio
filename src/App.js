import Avatar from './Avatar.js'
import './main.css';
import NavMenu from './NavMenu.js'
import Home from './Home.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <div className="quarter">  <Avatar /></div>
        <div className="three-quarter"><NavMenu></NavMenu>
        <Switch>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/projects'>
          <Projects></Projects>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
        
        
        
        </div>
      </div>
      
    </div>
  );
}

export default App;

import {Link} from 'react-router-dom';
import '../css/navbar.css'
const navbar = ()=>
{
  return(
  <header>
    <nav>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/gallery'>Gallery</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/signup'>Signup</Link></li>
    </nav>
  </header>)
}

export default navbar;
import { Link } from 'react-router-dom';
import '../css/login.css'
function login()
{

  return (
    <div>
      <center>
    <form class="fm">
    <table class="fr">
    <tr><td><label for="Firstname">Firstname</label></td>
    <td><input type="text" placeholder="Enter your Firstname" required></input></td></tr>
    <tr><td><label for="password">Password</label></td>
    <td><input type="password" placeholder="Enter your Password" required></input></td></tr>
    </table>
    <button type='submit'>Login</button>
    <p>(or)</p>
    <img src="\google.png"></img><img src="\facebook.png"></img><img src="\linkedin.png"></img>
    <p>New user?<Link class ="L" to="/signup">Create account</Link></p>
    </form>
    </center>
    </div>
  )
}
export default login;
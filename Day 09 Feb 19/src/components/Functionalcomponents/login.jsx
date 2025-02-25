import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  return (
    <div className="login-container">
      <center>
        <form className="fm">
          <table className="fr">
            <tbody>
              <tr>
                <td><label htmlFor="firstname">Firstname</label></td>
                <td><input type="text" id="firstname" placeholder="Enter your Firstname" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="password">Password</label></td>
                <td><input type="password" id="password" placeholder="Enter your Password" required /></td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Login</button>
          <p>(or)</p>
          <div className="social-icons">
            <img src="D:\HOPE\MERN Stack Training\Day 9 Feb 19\public\facebook.png" alt="Google Login" />
            <img src="D:\HOPE\MERN Stack Training\Day 9 Feb 19\public\googlex.png" alt="Facebook Login" />
            <img src="/linkedin.png" alt="LinkedIn Login" />
          </div>
          <p>New user? <Link className="L" to="/signup">Create account</Link></p>
        </form>
      </center>
    </div>
  );
}
export default Login;

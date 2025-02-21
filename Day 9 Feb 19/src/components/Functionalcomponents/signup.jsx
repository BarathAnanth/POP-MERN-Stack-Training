import "../css/signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const styling = {
    textAlign: "center",
    backgroundColor: "#87CEEB",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      <h1 style={styling}>Signup Page</h1>
      <center>
        <form className="fm">
          <table className="fr">
            <tbody>
              <tr>
                <td><label htmlFor="firstname">Firstname</label></td>
                <td><input type="text" id="firstname" placeholder="Enter your Firstname" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="lastname">Lastname</label></td>
                <td><input type="text" id="lastname" placeholder="Enter your Lastname" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">E-mail</label></td>
                <td><input type="email" id="email" placeholder="Enter your E-mail" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="password">Password</label></td>
                <td><input type="password" id="password" placeholder="Enter your Password" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="passwordcnf">Confirm Password</label></td>
                <td><input type="password" id="passwordcnf" placeholder="Re-enter your Password" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="dob">Date of Birth</label></td>
                <td><input type="date" id="dob" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="number">Mobile no</label></td>
                <td><input type="text" id="number" placeholder="Enter your Mobile Number" required /></td>
              </tr>
            </tbody>
          </table>
          <button className="bt" type="submit">Signup</button><br />
          <Link className="L" to="/login">Already have an account?</Link>
        </form>
      </center>
    </div>
  );
}
export default Signup;

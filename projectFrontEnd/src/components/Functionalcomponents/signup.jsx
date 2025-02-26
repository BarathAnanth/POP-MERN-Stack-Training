import { useState } from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const styling = {
    textAlign: "center",
    backgroundColor: "#87CEEB",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
  };

  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phoneNumber, setPN] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    })
    .then(response => {
      console.log(response.data);
      if (response.data.isSignUp) {
        alert("Signup Successful");
      } else {
        alert("Signup Unsuccessful");
      }
    })
    .catch(error => {
      console.error("There was an error signing up!", error);
    });
  };

  return (
    <div>
      <h1 style={styling}>Signup Page</h1>
      <center>
        <form className="fm" onSubmit={handleSignup}>
          <table className="fr">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstname">Firstname</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Enter your Firstname"
                    required
                    value={firstName}
                    onChange={(e) => setFN(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastname">Lastname</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Enter your Lastname"
                    required
                    value={lastName}
                    onChange={(e) => setLN(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">E-mail</label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    required
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="number">Mobile no</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="number"
                    placeholder="Enter your Mobile Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPN(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="bt" type="submit">
            Signup
          </button>
          <br />
          <br />
          <Link className="L" to="/login">
            Already have an account?
          </Link>
        </form>
      </center>
    </div>
  );
}

export default Signup;
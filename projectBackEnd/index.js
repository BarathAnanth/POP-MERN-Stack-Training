const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Signup = require("./model/signupSchema");

const app = express();
const port = 3001;
dotenv.config();

app.use(express.json());

console.log(process.env.MONGO_URL);
mdb
  .connect(process.env.MONGO_URL) // Can also directly paste the URL here
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Failed", err);
  });

app.get("/1", (req, res) => {
  res.send("<br> <h1> The BackEnd Server is Running</h1>");
});

app.get("/", (req, res) => {
  res.sendFile(
    "D:\\HOPE\\MERN Stack Training\\Day 02 Feb 07\\HTML_CSS\\index.html"
  );
});

app.get("/getsignedup", async (req, res) => {});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log("Existing User is: ", existingUser);
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        res.status(201).json({ message: "Login Successful", isLogin: true });
      } else {
        res.status(201).json({
          message: "Login Unsuccessful, Invalid Credentials",
          isLogin: false,
        });
      }
    } else {
      res.status(201).json({
        message: "Login Unsuccessful, Invalid Password",
        isLogin: false,
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: "Login Error", isLogin: false });
  }
  console.log("req.body is: ", req.body);
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email: email,
    });

    await newSignup.save();
    console.log("SignUp Successful");

    res.status(201).json({ message: "SignUp Successful", isSignUp: true });
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ message: "SignUp Unsuccessful", isSignUp: false });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

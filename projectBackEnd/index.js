const express = require("express");

const app = express();

app.get("/",(req, res) =>{
    res.sendFile("D:/HOPE/MERN Stack Training/Day 2 Feb 07/HTML_CSS/index.html");
})

const port = 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));

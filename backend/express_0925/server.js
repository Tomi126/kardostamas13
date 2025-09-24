const express = require("express");
const app = express();
const cors = require("cors");
const {db} = require("./db");


app.use(cors()); 




app.get("/", (req, res) => {
    res.send("fut a backend.");
})



app.listen(3001, () => {
    console.log("A szerver a 3001-es porton fut.");
});
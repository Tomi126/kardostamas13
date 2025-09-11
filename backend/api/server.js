const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");


app.use(cors());



const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3307,
    password: "",
    database: "kozutak",
});


app.get("/", (req, res) => {
    res.send("fut a backend");
})

app.get("/regiok", (req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
}) 

app.get("/negy", (req, res) => {
    const sql = "SELECT * FROM `regiok` WHERE Rid=4";
    db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
})


app.get("/pest", (req, res) => {
    const sql = "SELECT * FROM `regiok` WHERE regionev='Pest'";
    db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
})

app.get("/eszak", (req, res) => {
    const sql = "SELECT * FROM `regiok` WHERE regionev LIKE 'Észak%'";
    db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("A szerver a 3001-es porton fut.");
});
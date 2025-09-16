const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const {db} = require("./db");
//const mysql = require("mysql");
//const mysql = require("mysql2");


app.use(cors()); 


/* const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}); */


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


app.delete("/torles/:id", (req, res) => {
    const sql = "DELETE FROM `regiok` WHERE Rid = ?";
    db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("A szerver a 3001-es porton fut.");
});
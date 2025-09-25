const express = require('express'); //express importálása
const cors = require('cors'); //cors importálása
const mysql = require('mysql'); //mysql importálása
const app = express(); //express alkalmazás létrehozása
const port = 3000; //szerver port száma

app.use(cors());

const db = mysql.createConnection({  //adatbázis kapcsolat létrehozása
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3307
});

app.get('/', (req, res) => {  //weboldal kezdőoldala
    res.send('Fut a backend'); //válasz küldése a kliensnek
});

app.get("/fogado", (req, res) => {  //szobák információjának lekérdezése
    const sql = "SELECT szobak.sznev AS 'Szobanév',szobak.agy AS 'Ágyak száma' FROM `szobak`;"; //SQL lekérdezés
    db.query(sql, (err, result) => {
    if (err) return res.json(err); //hiba esetén hibaüzenet visszaküldése json formátumban
    return res.json(result) //eredmény visszaküldése json formátumban
    })
});

app.get("/kihasznaltsag", (req, res) => {  //szobák kihasználtságának lekérdezése
    const sql = "SELECT szobak.sznev AS szobanev, COUNT(vendeg) AS vendegek, SUM(DATEDIFF(tav, erk)) AS vendegejszakak FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon GROUP BY szoba ORDER BY vendegejszakak ASC, vendegek ASC;"; //SQL lekérdezés
    db.query(sql, (err, result) => {
    if (err) return res.json(err); //hiba esetén hibaüzenet visszaküldése json formátumban
    return res.json(result) //eredmény visszaküldése json formátumban
    })
});

app.get("/foglaltsag", (req, res) => { //vendégek foglalásainak lekérdezése
    const sql = "SELECT vendegek.vnev AS 'Vendegnev',sznev AS 'Szobanev',foglalasok.erk AS 'Erkezes',foglalasok.tav AS 'Tavozas' FROM `szobak` INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz ORDER BY Vendegnev ASC;"; //SQL lekérdezés
    db.query(sql, (err, result) => {
    if (err) return res.json(err); //hiba esetén hibaüzenet visszaküldése json formátumban
    return res.json(result) //eredmény visszaküldése json formátumban
    })
});

app.listen(port, () => {  //szerver figyelése a megadott porton
    console.log(`Server running on port ${port}`); //üzenet a konzolra, hogy a szerver fut, melyik porton
});
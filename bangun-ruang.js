const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/kubus", (req, res) => {

    let sisi = Number(req.body.sisi)
    let luas = 6 * sisi * sisi
    let volume = sisi ^ 3

    let response = {
        sisi: sisi,
        luas: luas,
        volume: volume
    }

    res.json(response)

})

app.post("/balok", (req, res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    let volume = tinggi * panjang * lebar

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    res.json(response)

})

app.post("/prismasegitiga", (req, res) => {

    let tinggiAlas = Number(req.body.tinggiAlas)
    let panjangAlas = Number(req.body.panjangAlas)
    let tinggiPrisma = Number(req.body.tinggiPrisma)
    let kelilingalas = 3 * panjangAlas
    let luasalas = tinggiAlas * panjangAlas / 2
    let volume = (tinggiAlas * panjangAlas / 2) * tinggiPrisma

    let response = {
        tinggiAlas: tinggiAlas,
        panjangAlas: panjangAlas,
        tinggiPrisma: tinggiPrisma,
        luasalas: luasalas,
        volume: volume

    }

    res.json(response)

})

app.post("/bola", (req, res) => {

    let r = Number(req.body.r)
    let phi = 22 / 7

    let luas = 4 * phi * r ^ 2
    let volume = 4 / 3 * phi * r ^ 3
    let response = {
        r: r,
        luas: luas,
        volume: volume
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
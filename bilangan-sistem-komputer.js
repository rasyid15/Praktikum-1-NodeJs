const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/octal", (req, res) => {
    let octal = Number(req.body.octal)
    let decimal = octal.toString(10)
    let hex = octal.toString(16)
    let biner = octal.toString(2)
    let response = {
        octal: octal,
        decimal: decimal,
        hex: hex,
        biner: biner
    }

    res.json(response)

})

app.post("/decimal", (req, res) => {
    let decimal = Number(req.body.decimal)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)
    let biner = decimal.toString(2)
    let response = {
        decimal: decimal,
        octal: octal,
        hex: hex,
        biner: biner
    }

    res.json(response)

})

app.post("/hex", (req, res) => {
    let hex = Number(req.body.hex)
    let octal = hex.toString(8)
    let decimal = hex.toString(10)
    let biner = hex.toString(2)
    let response = {
        hex: hex,
        octal: octal,
        decimal: decimal,
        biner: biner
    }

    res.json(response)

})

app.post("/biner", (req, res) => {
    let biner = Number(req.body.biner)
    let octal = biner.toString(8)
    let decimal = biner.toString(10)
    let hex = biner.toString(16)
    let response = {
        biner: biner,
        octal: octal,
        decimal: decimal,
        hex: hex
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
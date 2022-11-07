const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/bilangan", (req, res) => {

    let angka = Number(req.body.angka)
    let jenis

    if (angka % 2 == 0) {
        jenis = "Bilangan Genap"
    } else {
        jenis = "Bilangan Ganjil"
    }
    let response = {
        angka: angka,
        jenis: jenis
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
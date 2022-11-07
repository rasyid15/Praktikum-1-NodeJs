const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/bujursangkar", (req, res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
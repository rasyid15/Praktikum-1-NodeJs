const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})


app.post("/perulangan", (req, res) => {
    let awal = Number(req.body.awal)
    let akhir = Number(req.body.akhir)
    let kelipatan = Number(req.body.kelipatan)
    let i
    let tampung = new Array()
    let total = 0;

    for (i = awal; i <= akhir; i += kelipatan) {
        tampung.push(i)
        total += i
    }

    let response = {
        tampung,
        total: total
    }
    res.json(response)
})
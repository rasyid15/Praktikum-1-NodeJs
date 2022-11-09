const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.get("/calculator/:angkasatu/:angkadua", (req, res) => {
    let angkasatu = Number(req.params.angkasatu)
    let angkadua = Number(req.params.angkadua)

    let pertambahan = angkasatu + angkadua
    let perkurangan = angkasatu - angkadua
    let perkalian = angkasatu * angkadua
    let pembagian = angkasatu / angkadua


    let response = {
        angka_pertama: angkasatu,
        angka_kedua: angkadua,
        pertambahan: pertambahan,
        perkurangan: perkurangan,
        perkalian: perkalian,
        pembagian: pembagian
    }

    res.json(response)
})


app.listen(8000, () => {
    console.log("Server run on port 8000");
})
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/BMI", (req, res) => {

    let Weight = Number(req.body.Weight)
    let Height = Number(req.body.Height)
    let BMI = Weight / (Height ^ 2)
    let status
    if (BMI < 18.5) {
        status = "Kekurangan Berat Badan"
    } else if (BMI < 24.9) {
        status = "Tubuh Ideal"
    } else if (BMI < 29.9) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Obesitas"
    }
    let response = {
        Weight: Weight,
        Height: Height,
        BMI: BMI,
        status: status
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
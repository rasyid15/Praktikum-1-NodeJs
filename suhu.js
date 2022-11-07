const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.post("/convert/:celcius", (req, res) => {

    let celcius = Number(req.body.celcius)

    let CF = (celcius * 9 / 5) + 32
    let CR = celcius * 4 / 5
    let CK = celcius + 273


    let response = {
        celcius: celcius,

        fahrenheit: CF,
        reamur: CR,
        kelvin: CK
    }

    res.json(response)

})

app.post("/convert/:fahrenheit", (req, res) => {

    let fahrenheit = Number(req.body.fahrenheit)

    let FC = (fahrenheit * 5 / 9) - 32
    let FR = fahrenheit * 4 / 9
    let FK = (fahrenheit * 5 / 9) + 273

    let response = {
        fahrenheit: fahrenheit,

        celcius: FC,
        reamur: FR,
        kelvin: FK

    }
    res.json(response)
})

app.post("/convert/:reamur", (req, res) => {

    let reamur = Number(req.body.reamur)

    let RC = reamur * 5 / 4
    let RF = (reamur * 9 / 4) + 32
    let RK = (reamur * 5 / 4) + 273


    let response = {
        reamur: reamur,

        celcius: RC,
        fahrenheit: RF,
        kelvin: RK

    }
    res.json(response)
})

app.post("/convert/:kelvin", (req, res) => {

    let kelvin = Number(req.body.kelvin)

    let KC = kelvin - 273
    let KF = (kelvin * 9 / 5) + 273
    let KR = kelvin * 4 / 5


    let response = {
        kelvin: kelvin,

        celcius: KC,
        fahrenheit: KF,
        reamur: KR

    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
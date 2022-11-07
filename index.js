const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))

app.use(cors())

app.get("/profile/:name/:age", (req, res) => {

    let name = req.params.name
    let age = req.params.age
    let response = {
        nama: name,
        umur: age
    }

    res.json(response)
})


app.listen(8000, () => {
    console.log("Server run on port 8000");
})
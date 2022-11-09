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

app.post("/penjumlahanarray", (req, res) => {
    let MatrixA = [
        [1, 2],
        [3, 4]
    ];
    let MatrixB = [
        [1, 2],
        [4, 6]
    ];

    let hasil = new Array()
    let i
    let j
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            hasil.push(MatrixA[i][j] + MatrixB[i][j])
        }
    }

    let response = {
        MatrixA: MatrixA,
        MatrixB: MatrixB,
        penjumlahan: hasil
    }

    res.json(response)
})
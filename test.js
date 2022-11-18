const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.text({
    extnded: false
}))
app.use(express.static("public"))
app.use(cors())

app.post("/Test", (req, res) => {

    let title = "XI RPL 1"
    let subtitle = "Semangatku menjadi proframmer :)"
    let data = "task not found"
    let Message = "Selamat Istirahat anak anak R1 yang cantik, ganteng dan pinter pinter"
    let note = "jangan jagongan didepan kelas, kalau ke kantin/kopsis gantian, setelah itu cepet kembali ke dalam kelas "

    let response = {
        title: title,
        subtitle: subtitle,
        data: data,
        Message: Message,
        note: note
    }

    res.json(response)

})

app.listen(8500, () => {
    console.log("Server run on port 8500");
})
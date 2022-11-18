const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extnded: true
}))
app.use(express.static("public"))
app.use(cors())

app.post("/Test", (request, response) => {


    let tittle = request.body.tittle
    let subtittle = request.body.subtittle
    let data = request.body.data
    let Message = request.body.Message
    let note = request.body.note

    if (!request.data) {
        let res = {
            tittle: tittle,
            subtittle: subtittle,
            data: 'task not found',
            Message: Message,
            note: note
        }
    } else {
        res = {
            tittle: tittle,
            subtittle: subtittle,
            data: data,
            Message: Message,
            note: note
        }
        response.json(res)
    }
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
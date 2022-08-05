const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json())

const data = []

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    next()
})
app.get("/check", (req, res) => {
    return res.send("Serviço online!")
})

app.post("/usuario", (req, res) => {
    const {nome, sobrenome, idade} = req.body;

    data.push({
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    })

    return res.send("Usuario criado!");
})

app.get("/usuario", (req, res) => {
    res.send(data)
})

module.exports = app;
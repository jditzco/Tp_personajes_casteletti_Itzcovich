import express from "express";
import PersonajesService from "./src/services/personajes-services.js"
import PeliculasService from "./src/services/peliculas-services.js";
console.clear()

const app = express()
const port = 3001
app.listen(port, () => console.log(`Example app listening on port ${port}`))


app.get('/', async(req, res) => {
    res.send('documentación: /personajes /peliculas')
})

app.get('/personajes', async(req, res) => {
    let service = new PersonajesService()
    res.send(await service.getAll())
})

app.get('/peliculas', async(req, res) => {
    let service = new PeliculasService()
    res.send(await service.getAll())
})

app.get('/peliculas/:id', async(req, res) => {
    let service = new PeliculasService()
    res.send(await service.getById(req.params.id))
})
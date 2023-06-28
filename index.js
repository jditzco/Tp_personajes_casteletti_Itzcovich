import express from "express";
import PersonajesService from "./src/services/personajes-services.js"
import PeliculasService from "./src/services/peliculas-services.js";
console.clear()

const app = express()
const port = 3001
app.listen(port, () => console.log(`Example app listening on port ${port}`))
let servicePelicula = new PeliculasService()
let servicePersonaje = new PersonajesService()

app.get('/', async(req, res) => {
    res.send('documentación: /personajes /peliculas')
})

app.get('/personajes', async(req, res) => {
    res.send(await servicePersonaje.getAll())
})

app.get('/peliculas', async(req, res) => {
    res.send(await servicePelicula.getAll())
})

app.get('/peliculas/:id', async(req, res) => {
    res.send(await servicePelicula.getById(req.params.id))
})
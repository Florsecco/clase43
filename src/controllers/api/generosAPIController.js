const path = require('path');
const db = require('../../database/models');
const Artista = db.Artista
const Album = db.Album
const Genero =db.Genero


const genresAPIController = {
    'list': async(req, res) => {
        try {
            const generos = await Genero.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: generos.length,
                    url: "api/generos"
                },
                data: generos    
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}
module.exports = genresAPIController;
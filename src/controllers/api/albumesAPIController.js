const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Artista = db.Artista
const Album = db.Album

const albumesAPIController = {
    'list': async(req, res) => {
        try {
            const albumes = await Album.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: albumes.length,
                    url: "api/albumes"
                },
                data: albumes                
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    'detail': async(req, res) => {
       try {
            const idArtist=req.params.id
            const albumArtist = await Album.findOne({
                where:{
                    id_artista: idArtist
                }
            })
            return res.status(200).json({
                meta:{
                    status: 200,
                    url: "api/albumes/:id"
                },
                data: albumArtist   
            })

       } catch (error) {
            console.log(error)
            res.send(error)
       }
    }
}

module.exports = albumesAPIController;
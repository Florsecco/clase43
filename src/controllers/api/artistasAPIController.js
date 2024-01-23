const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Artista = db.Artista

const artistasAPIController = {
    'list': async(req, res) => {
        try {
            const artistas = await Artista.findAll({include:['albumes']})
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: artistas.length,
                    url: "api/artistas"
                },
                data: artistas                
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    create: async(req,res) => {
       try {
        const artistaCreated= await Artista.create(req.body)
        return res.status(200).json(artistaCreated)
       } catch (error) {
            console.log(error)
            res.send(error)
       }
    },
    update: async(req,res) => {
        try {
            const artistId = req.params.id;
            await Artista.update(
                {
                    nombre: req.body.nombre
                },
                {
                    where: {id: artistId}
                })
            const artist = await Artista.findByPk(artistId)
            return res.status(200).json(artist)
        } catch (err) {
            console.log(err);
                res.send(err) 
        }

    },
    destroy: async(req,res) => {
        try{
            let artistaId = req.params.id;
            const artistaDelete= await Artista.findByPk(artistaId)
            if(artistaDelete){
            await artistaDelete.destroy();
            return res.json(artistaDelete)
            }
             // force: true es para asegurar que se ejecute la acción
            }
            catch(err){
                console.log(err);
                res.send(err) 
            }
    }
}
module.exports = artistasAPIController;
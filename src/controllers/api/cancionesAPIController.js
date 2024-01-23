const path = require('path');
const db = require('../../database/models');
const Cancion = db.Cancion
const Genero = db.Genero
const Medio = db.Medio
const cancionesAPIController = {
    'list': async(req, res) => {
        try {
            const canciones = await Cancion.findAll({
                include: [{model: Genero, as:'genero',attributes:['nombre']},
                {model: Medio, as:'medio',attributes:['nombre']}
            ],
                attributes: ['nombre', 'compositor','milisegundos','bytes', 'precio_unitario']
            })
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: canciones.length,
                    url: "api/canciones"
                },
                data: canciones  
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}
module.exports = cancionesAPIController;
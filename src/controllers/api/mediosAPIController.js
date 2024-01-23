const path = require('path');
const db = require('../../database/models');
const Medio = db.Medio

const mediosAPIController = {
    'list': async(req, res) => {
        try {
            const medios = await Medio.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: medios.length,
                    url: "api/medios"
                },
                data: medios    
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}
module.exports = mediosAPIController;
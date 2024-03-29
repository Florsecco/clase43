// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Artista';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(85),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: 'artistas'
    }
    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(models) {
        Artista.hasMany(models.Album, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "albumes", // El nombre del modelo pero en plural
            foreignKey: "id_artista",
            onDelete: 'CASCADE'
        })
    }

    return Artista;
};
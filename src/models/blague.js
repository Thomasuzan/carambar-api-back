const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// on définit le modèle Blague
const Blague = sequelize.define('Blague', {

    texte: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    timestamps: true,
    tableName: 'blagues'
});

module.exports = Blague;
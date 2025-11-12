const { Sequelize } = require('sequelize');

// On créé une connexion à la bdd SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite', // Type de bdd
    storage: './database.sqlite', // Où sera stockée la BDD
    logging: false // Pour ne pas afficher les requêtes SQL dans la console
});

// Fonction pour tester la connexion
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('connexion à la base de donénes réussie');
    } catch (error) {
        console.error('erreur de connexion à la bdd:', error);
    }
};

module.exports = { sequelize, testConnection };
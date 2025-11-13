const { app, sequelize, testConnection } = require('./src/app');

const PORT = process.env.PORT || 3000;

// fonction pour démarrer le serveur
const startServer = async () => {
    try {
        // teste la connexion à la bdd
        await testConnection();

        // synchronise les modèles avec la bdd (créé les tables si elles n'existent pas)
        await sequelize.sync({ alter: true });
        console.log('Base de données synchronisée');

        // démarre le serveur
        app.listen(PORT, () => {
            console.log('Serveur démarré sur http://localhost:${PORT}');
            console.log('API disponible sur http://localhost:${PORT}/api/v1/blagues');
        });

    } catch (error) {
        console.error('Erreur au démarrage', error);
        process.exit(1)
    }
};

startServer();
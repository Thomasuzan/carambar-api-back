const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Carambar - Blagues',
            version: '1.0.0',
            description: 'API REST pour gérer des blagues Carambar. Cette API permet d\'ajouter, de consulter, de supprimer et de récupérer des blagues de manière aléatoire.',
            contact: {
                name: 'Thomas UZAN',
                email: 'thomasuzanpro@gmail.com'
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur de développement',
            },
            // ajouter l'URL Render après le déploiement
            // {
            //   url: 'https://mon-api.onrender.com',
            //   description: 'Serveur de production',
            // },
        ],
    },
    apis: ['./src/routes/*.js'], // chemin vers les fichiers de routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
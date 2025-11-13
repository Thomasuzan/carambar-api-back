const express = require('express');
const cors = require ('cors');
require('dotenv').config();

const { sequelize, testConnection } = require('./config/database');
const blagueRoutes = require('./routes/blagueRoutes');

const app = express();

// middlewares
app.use(cors()); // active CORS
app.use(express.json()); // pour lire le json dans les réquêtes

// route de test
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API Carambar !'});
});

// routes versionnées
app.use('/api/v1/blagues', blagueRoutes);

module.exports = { app, sequelize, testConnection };
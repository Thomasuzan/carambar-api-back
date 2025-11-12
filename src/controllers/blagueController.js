const Blague = require('../models/blague');

// AJOUTER une blague (POST)
const ajouterBlague = async (req, res) => {
    try {
        const { texte } = req.body; // on récupère le texte envoyé dans le body

        // validation simplte
        if (!texte || texte.trim() === '') {
            return res.status(400).json({
                error: 'Le texte de la blague est requis'
            });
        }

        // on créé la blague en bdd
        const nouvelleBlague = await Blague.create({ texte });

        // on renvoie la blague créée
        res.status(201).json({
            message: 'Blague ajoutée avec succès',
            blague: nouvelleBlague
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erreur lors de l\'ajout de la blague',
            details: error.message
        });
    }
};

// RÉCUPÉRER toutes les blagues (GET)
const getToutesLesBlagues = async (req, res) => {
    try {
        const blagues = await Blague.findAll({ // findAll() = SELECT * FROM blagues
            order: [['createdAt', 'DESC']] // Tri par date (plus récent en premier)
        });

        res.status(200).json({
            total: blagues.length,
            blagues: blagues
        });

    } catch (error) {
        res.status(500).json({
            error: 'erreur lors de la récupération des blagues',
            details: error.message
        });
    }
};

// RÉCUPÉRER une blague par ID (GET)
const getBlagueParId = async (req, res) => {
    try {
        const { id } = req.params; // on récupère l'id depuis l'url

        // findByPk = find by primary key (cherche par id)
        const blague = await Blague.findByPk(id);

        // si la blague n'existe pas
        if (!blague) {
            return res.status(404).json({
                error: 'blague non trouvée'
            });
        }

        res.status(200).json({ blague });

    } catch (error) {
        res.status(500).json({
            error: 'erreur lors de la récupération de la blague',
            details: error.message
        });
    }
};

// RÉCUPÉRER une blague aléatoire (GET)
const getBlagueAleatoire = async (req, res) => {
    try {
    // on récupère toutes les blagues
    const blagues = await Blague.findAll();

    // si pas de blagues en bdd
    if (blagues.length === 0) {
        return res.status(404).json({
            error: 'aucune blague disponible'
        });
    }

    // on en choisit une au hasard
    const indexAleatoire = Math.floor(Math.random() * blagues.length);
    const blagueAleatoire = blagues[indexAleatoire];

    res.status(200).json({ blague: blagueAleatoire});

    } catch (error) {
        res.status(500).json({
            error: 'Erreur lors de la récupération de la blague aléatoire',
            details: error.message
        });
    }
};

// on exporte toutes les fonctions
module.exports = {
    ajouterBlague,
    getToutesLesBlagues,
    getBlagueParId,
    getBlagueAleatoire
};
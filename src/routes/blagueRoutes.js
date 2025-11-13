const express = require('express');
const router = express.Router();

// on importe le controller

const {
    ajouterBlague,
    getToutesLesBlagues,
    getBlagueParId,
    getBlagueAleatoire
} = require('../controllers/blagueController');

// la route /random DOIT être AVANT /:id
// sinon Express pensera que "random" est un ID

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       required:
 *         - texte
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-généré de la blague
 *           example: 1
 *         texte:
 *           type: string
 *           description: Le texte de la blague
 *           example: "Quelle est la femelle du hamster ? L’Amsterdam"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour
 */

/**
 * @swagger
 * tags:
 *   name: Blagues
 *   description: Gestion des blagues Carambar
 */

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 50
 *                 blagues:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blague'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getToutesLesBlagues);

/**
 * @swagger
 * /api/v1/blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blague:
 *                   $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Aucune blague disponible
 *       500:
 *         description: Erreur serveur
 */
router.get('/random', getBlagueAleatoire);

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *         example: 1
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blague:
 *                   $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', getBlagueParId);

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texte
 *             properties:
 *               texte:
 *                 type: string
 *                 description: Le texte de la blague
 *                 example: "Quelle est la femelle du hamster ? L’Amsterdam"
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Blague ajoutée avec succès"
 *                 blague:
 *                   $ref: '#/components/schemas/Blague'
 *       400:
 *         description: Données invalides (texte manquant)
 *       500:
 *         description: Erreur serveur
 */
router.post('/', ajouterBlague);

module.exports = router;
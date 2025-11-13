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

router.get('/random', getBlagueAleatoire);

router.get('/', getToutesLesBlagues);

router.get('/:id', getBlagueParId);

router.post('/', ajouterBlague);

module.exports = router;
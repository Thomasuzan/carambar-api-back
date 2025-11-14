# 🍬 Carambar API - Backend

API REST pour gérer les blagues Carambar.

## 🚀 Technologies utilisées

- **Node.js** & **Express.js**
- **Sequelize** (ORM)
- **SQLite** (Base de données)
- **Swagger** (Documentation API)

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- npm

## 🔧 Installation
```bash
# Cloner le projet
git clone https://github.com/Thomasuzan/carambar-api-back.git

# Aller dans le dossier
cd carambar-api-back

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 🌐 Endpoints API

**Base URL :** `https://carambar-api-back.onrender.com/api/v1`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/blagues` | Ajouter une blague |
| GET | `/blagues` | Récupérer toutes les blagues |
| GET | `/blagues/:id` | Récupérer une blague par ID |
| GET | `/blagues/random` | Récupérer une blague aléatoire |

## 📚 Documentation

Documentation Swagger disponible ici : [Lien Swagger](https://carambar-api-back.onrender.com/api-docs/)

## 🌍 Déploiement

L'API est déployée sur **Render.com** : [Lien de l'API](https://carambar-api-back.onrender.com/)

## 📦 Structure du projet
```
carambar-api-back/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── server.js
└── package.json
```

## 👤 Auteur

Projet réalisé par Thomas Uzan dans le cadre de la sélection CDA à la Wild Code School.
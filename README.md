# React PostgreSQL Form Example

Ce projet fournit un exemple minimal d'application Express/React permettant de tester l'insertion de données dans une base PostgreSQL.

## Installation

1. Installer les dépendances (Node.js doit être installé) :
   ```bash
   npm install
   ```
2. Créer un fichier `.env` à la racine contenant la variable `DATABASE_URL` pointant vers votre base PostgreSQL, par exemple :
   ```
   DATABASE_URL=postgres://user:password@localhost:5432/ma_base
   ```
3. Lancer le serveur :
   ```bash
   npm start
   ```

L'application sera accessible sur [http://localhost:3001](http://localhost:3001).

## Formulaire

Le formulaire comporte les champs suivants : Nom, Prénom, Adresse, e-mail et N° téléphone. Lors de la soumission, ces informations sont envoyées au serveur qui les enregistre dans la table `personnes` de la base et ajoute automatiquement la date et l'heure de création.

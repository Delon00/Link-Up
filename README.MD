# Socialink
## Socialink
Socialink est une application plateforme de médias sociaux flexible pour les créateurs de contenu.

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Delon00/Link-Up.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd Link-Up
   ```
3. Installez les dépendances du projet :
   ```bash
   npm install
   ```
4.Initialisation de l'ORM Prisma
    ```bash
    npx prisma migrate dev --name init
   ```
 
## Utilisation

### Backend

1. Configurez votre base de données MySQL et mettez à jour le fichier `.env` avec votre `DATABASE_URL`.
   ```bash
    DATABASE_URL="mysql://root:@localhost:3306/social_link"

    JWT_SECRET=d94f9860ae9d199a825bf13906144b40648222f21b445570c9c38c68cacbc9452fb2296bd9f279e86d6e9379555ffa6f995c9fe0e110a92a55b3f7380979af558b07b2c62fb0f5317faa3da867d6637aa06ee7c67d9111ee41a5a7210591b002c3a6765536c42172eb778e1e3a4724a6c133cf444ddde0067c43491325f8d9c4f4ebc2979ef4b4450441997a8957ad7772085b970a0170f10302986da08a1417ff136aff9e1b65f57631fd50eb28c2e3fd5ed11e5cceb9a00ec09589e7f16e4307b15818f03a746256978c427542022b0707716a086055b7a9235109ff09e5b7d66c634a6bfcba86176bc6a271d6c7909ff0c0a9df86338025b222509e97d2f2a1213a611f254388dac17f07d70dcf7ab770ed5101a8db88cbc6672c55548f020b04e411b6b0aceeecf347113c02d9964698ece396ef314b62eabdddaf99f5e6ac3536889a43a2ba6dfea836cf2aa4bb3da25985ff6f4b759a70292d15048590c61c84f27308f3c0d84a4f032f1bd4caab5229e9f67e2812f63c144649b02c5eab074bc2389ad111cfb08331029edc3c7c16c02d5b0cace25d84ea6f2f11a676adce82a38aa80ae378b4cb6dd4c16087ebec43c907a2c6c1feb15d88c14d4403e8cd4df1f8d46cf4415a575131e0f33c7eed95afb1b5ab334b0bfc41593eeab503672ad2ab740bb3d6ebc9badcd93ce5de91bf677f757d99e964a7805e66cef9

    DB_HOST=localhost
    DB_USER=root     
    DB_PASSWORD=
    DB_NAME=social_link
    DB_PORT=3306
   ```
2. Démarrez le serveur backend :
   ```bash
   npm run back
   ```
3.Tester les API avec SWagger:
[localhost:8080](http://localhost:8080/api-docs/)
## Fonctionnalités

- **Inscription et Connexion** : Les utilisateurs peuvent s'inscrire et se connecter.
- **Confidentialité du profil** : Les utilisateurs rendre leur profil publique ou privé.
- **Publication de contenue** : Les utilisateurs les utilisateur peuvent publier du contenue sur leur profil.

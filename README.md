# 🎬 TP01 – Application Node.js avec l'API TheMovieDB

Ce projet est une application dédiée aux films qui récupère les données depuis l'API **The Movie Database** (TMDB) à l’aide d’un **token d’authentification**. Il permet d’afficher les informations détaillées d’un film sous plusieurs formats.

## 🚀 Fonctionnalités principales

L'application est construite autour de **trois routes** :

1. **Scraping des données**
   - Récupère les données d’un film spécifique depuis l’API externe et les enregistre localement.
   - `GET /scrapping/movie/:id`
   - Exemple : `http://localhost:3001/scrapping/movie/18`

2. **Affichage brut des données**
   - Affiche directement les données JSON récupérées.
   - `GET /data/:id`
   - Exemple : `http://localhost:3001/data/18`

3. **Affichage stylisé**
   - Présente une fiche film avec un rendu CSS agréable.
   - `GET /?movie=:id`
   - Exemple : `http://localhost:3001/?movie=18`

## 🛠️ Technologies utilisées

### Backend
- **Node.js**
- **Express**
- **Request**
- **Dotenv**
- **Nodemon**

### Frontend
- **HTML / JavaScript vanilla**
- **Tailwind CSS**
- **DaisyUI**

## ⚙️ Installation

1. Installer Node.js (https://nodejs.org)
2. Cloner ce dépôt :
   ```bash
   git clone https://github.com/TekGeekdev/nodejs_tp01_api.git
   cd nodejs_tp01_api
   ```
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Créer un fichier `.env` à la racine avec :
   ```env
   PORT=3001
   API_KEY=VOTRE_CLE_API_TMDB
   ```
5. Lancer l'application :
   ```bash
   npm start
   ```

## 🌐 Utilisation

Testez en visitant l'une des routes :
- `http://localhost:3001/scrapping/movie/18`
- `http://localhost:3001/data/18`
- `http://localhost:3001/?movie=18`

## 🧪 Commandes de développement utiles

```bash
mkdir tp01
cd tp01
npm init -y
npm install express request dotenv nodemon
npm install -D tailwindcss@3 daisyui
npx tailwindcss init
npx tailwindcss -i ./public/input.css -o ./public/output.css --watch
```

## 💡 Retour d’expérience

Ce projet m’a permis de mieux comprendre le fonctionnement d’un serveur Node.js en interaction avec une API externe.  
La partie que j’ai trouvée **la plus difficile** a été la **gestion du token d’authentification**, qu’il fallait passer dans l’en-tête des requêtes sous cette forme :

```js
headers: {
  accept: 'application/json',
  Authorization: `Bearer ${config.API_KEY}`
}
```

Cette étape m’a demandé plusieurs essais pour bien comprendre la structure exigée par l’API TMDB.

## 🔗 Ressources

- [The Movie Database](https://www.themoviedb.org/)

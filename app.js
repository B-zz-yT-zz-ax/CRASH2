const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Configuration de MongoDB avec Mongoose (exemple)
mongoose.connect('mongodb://localhost:27017/crash-game', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté'))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur le jeu de crash !');
});

// Port d'écoute du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

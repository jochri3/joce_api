const express = require("express");
const app = express();

require("./services/db_init");

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur ecoute sur le port ${PORT}`);
});

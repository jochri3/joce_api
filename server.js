const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./services/db_init");

require("./routes/routes")(app);

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur ecoute sur le port ${PORT}`);
});

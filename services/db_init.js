const mongoose = require("mongoose");
const {
  MONGO_DABATASE,
  MONGO_PASSWORD,
  MONGO_USER,
  MONGO_URL
} = require("../config/keys");

const URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DABATASE}`;

mongoose
  .connect(URL)
  .then(r =>
    console.log(`Connexion a etablie a MongoDB en ${process.env.NODE_ENV}`)
  )
  .catch(err => console.log(err));

module.exports = mongoose;

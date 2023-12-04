const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://xcitesporty:xcitesporty@cluster0.zfqehyv.mongodb.net/xcite-sporty",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection is successfull");
});

connection.on("error", () => {
  console.log("Mongo DB Connection is failed");
});

module.exports = mongoose;

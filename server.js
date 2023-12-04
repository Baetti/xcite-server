// import express
const express = require("express");

const dbConnect = require("./dbConnection");

const newsRoute = require("./Routes/newsRoute");
const userRoute = require("./Routes/userRoute");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.json())

app.use("/api/newsitems", newsRoute);
app.use("/api/users", userRoute);
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
app.get("/", (req, res) => res.send("Server Started"));
app.listen(port, () => console.log(`Server Started in the port ${port}!`));

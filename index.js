const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World using Docker");
});

app.listen(9999, () => console.log("Server is listening on port 9999..."));

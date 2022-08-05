const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(port, () => console.log("Running on port 5000"));

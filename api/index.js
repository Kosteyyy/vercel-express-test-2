// const express = require("express");
// const port = process.env.PORT || 5000;

// const app = express();
// export default

// app.get("/", (req, res) => {
//   res.send("Express on Vercel");
// });

// app.listen(port, () => console.log("Running on port 5000"));

export default function handler(req, res) {
  const { name = "World" } = req.query;
  return res.send(`Hello ${name}!`);
}

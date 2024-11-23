const express = require("express");
const { route } = require("./routers");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is running");
});

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
var cors = require("cors");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "https://localhost:5174/",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.listen(4000);

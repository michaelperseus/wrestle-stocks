require("dotenv").config();

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

require("./db/mongoose");

const calcPoints = require("./Points");

const User = require("./models/User");
const MatchRecord = require("./models/MatchRecord");

// Import and Attach Routes
const WrestlerRoute = require("./routes/Wrestler");
const MatchRoute = require("./routes/MatchRecord");

const Wrestler = require("./models/Wrestler");

app.use(bodyParser.json());
app.use("/api/wrestler", WrestlerRoute);
app.use("/api/matches", MatchRoute);

app.get("/test", (req, res) => {
  res.send({ message: "Hello World" });
});

app.get("/match", async (req, res) => {
  try {
    const match = await MatchRecord.findOne({ finish: "Submission" });
    const points = calcPoints(match, "Brodie Lee");
    console.log(points);
    res.send({ points: points });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});

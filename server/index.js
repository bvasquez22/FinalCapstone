const express = require("express");
const cors = require("cors");
const { sequelize } = require("./util/database");
const app = express();

const { User } = require("./models/user");

const PORT = process.env.port || 4005;

app.use(express.json());
app.use(cors());

// sequelize.sync({ force: true }).then(() => {
sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`db sync successful and server running on port ${PORT}`)
  );
});

const { signin, signup } = require("./controllers/auth");
const { getSet } = require("./controllers/sets");

app.post("/sign-in", signin);
app.post("/sign-up", signup);

app.get("/sets/:set", getSet);

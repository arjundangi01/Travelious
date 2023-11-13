const cors = require("cors");
const express = require("express");
const mongoDBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const tourRouter = require("./routes/tour.routes");
const UserModel = require("./model/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://travelious-project.netlify.app","https://comforting-taffy-d07f72.netlify.app"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/travelious_user", userRouter);
app.use("/travelious_tour", tourRouter);

//google auth


app.listen(PORT, async () => {
  try {
    await mongoDBConnection;
    console.log(`server running at ${PORT}`);
  } catch (error) {
    console.log("error while listen", error);
  }
});

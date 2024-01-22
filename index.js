require ("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const goalRouter = require("./routes/goalRouter")

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(202).json({ message: "Welcome to Goals API" });
});
// api/goals
app.use("/api/goals", goalRouter);

//error route
app.use((req, res) => {
  res.status(404).json({ message: "Resource not Found" });
});

//db Connection and server listening

const startserver = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "goalserver" });
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startserver();



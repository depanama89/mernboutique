import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import authRoute from "../api/routes/auth.route.js";
import categoryRoute from "../api/routes/category.route.js";

const app = express();

dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected  to mongo db");
  } catch (error) {
    console.log(error);
  }
};

//middleware127.0.0.1
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

//router
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);

app.get("/", (req, res) => {
  res.send({ message: "welcome to ecommerce" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connect();
  console.log(`server running ${PORT}`);
});

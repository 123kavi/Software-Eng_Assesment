import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./connectDB.js";

dotenv.config();
const app = express();


app.listen(process.env.PORT || 9000, () => {
  console.log(`Server is running on port 9000`);
});

//Connect data base
connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//Import routes
import userRoutes from "./routes/userRoutes.js";
app.use("/user", userRoutes);

import notesRoutes from "./routes/noteRoutes.js";
app.use("/notes", notesRoutes);
app.get("/",(req,res)=>{

  res.json("server start")
})
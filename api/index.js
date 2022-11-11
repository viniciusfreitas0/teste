import express from "express";
import userRoutes from "./routes/user.js"
import cors from "cors";
const app = express();
const port = process.env.PORT || 8800

app.use(express.json());
app.use(cors());

app.use("/teste", userRoutes);

app.listen(port, () => {
    console.log("servidor esta rodando")});
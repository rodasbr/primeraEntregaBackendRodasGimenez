import express from "express";
import { connectMongoDB } from "./config/MongoDb.Config.js";
import envs from "./config/envs.config.js";
import routes from "../src/routes/index.router.js";

const app = express();

console.log("Puerto:", envs.PORT);
console.log("Mongo URL:", envs.MONGO_URL);
connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", routes);

app.listen(envs.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${envs.PORT}`);
});

import express from "express";
import { connectMongoDB } from "./config/mongoDb.config.js";
import envs from "./config/envs.config.js";
//import router from "./router/index.router.js";
import routes from "../src/routes/index.router.js";

const app = express();
// Conexión con mongo
connectMongoDB();

app.use(express.json()); // Este middleware nos permite obtener archivos json
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", routes);

app.listen(envs.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${envs.PORT}`);
});

// import express from "express";
// import routes from "./routes/index.js";
// import { Server } from "socket.io";
// import handlebars from "express-handlebars";
// import viewsRoutes from "./routes/views.routes.js";
// import __dirname from "./dirname.js";
//import { connectMongoDB } from "./config/MongoDb.Config.js";
// import productRoutes from "../src/routes/products.routes.js";
// import cartRoutes from "../src/routes/carts.routes.js";

//const PORT = 8080;
//const app = express();

// connectMongoDB();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.engine("handlebars", handlebars.engine());
// app.set("views", __dirname + "/views");
// app.set("view engine", "handlebars");
//app.use(express.static("public"));

//app.use("/api", routes);
// app.use("/", viewsRoutes);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.listen(envs.PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${envs.PORT}`);
// });
// app.use("/api", productRoutes);
// app.use("/api", cartRoutes);
// const httpServer = app.listen(PORT, () => {
//   console.log(`Server on port ${PORT}`);
// });

//  socket

// export const io = new Server(httpServer);

// io.on("connection", (socket) => {
//   console.log("Nuevo cliente conectado");
// });
// import express from "express";
// import productRouter from "./router/product.router.js";
// import cartRouter from "./router/cart.router.js";

// const PORT = 8080;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.use("/api", productRouter);
// app.use("/api", cartRouter);

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`);
// });

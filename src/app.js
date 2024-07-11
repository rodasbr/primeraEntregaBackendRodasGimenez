import express from "express";
import routes from "./routes/index.js";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.routes.js";
import __dirname from "./dirname.js";

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views"); // Indicamos que ruta se encuentran las vistas
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/api", routes);
app.use("/", viewsRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

//  socket

export const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
});
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

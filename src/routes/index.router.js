import productsRoutes from "./products.routes.js";
import cartsRoutes from "./carts.routes.js";
import { Router } from "express";

const router = Router();

router.use("/products", productsRoutes);
router.use("/carts", cartsRoutes);

// Ruta de prueba
router.get("/", (req, res) => {
  res.send("Ruta principal funcionando");
});

export default router;

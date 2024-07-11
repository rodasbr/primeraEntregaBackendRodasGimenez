import { request, response } from "express";
import productManager from "../productManager.js";

export const checkProductData = async (req = request, res = response, next) => {
  try {
    const { title, description, price, code, stock, category } = req.body;
    const newProduct = {
      title,
      description,
      price,
      stock,
      category,
    };

    const products = await productManager.getProducts();
    // chequear si existe o no
    const productExists = products.find((p) => p.code === code);
    if (productExists)
      return res.status(400).json({
        status: "Error",
        msg: `El producto con el código ${code} ya existe`,
      });

    const checkData = Object.values(newProduct).includes(undefined);
    if (checkData)
      return res
        .status(400)
        .json({ status: "Error", msg: "Todos los datos son obligatorios" });

    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Error", msg: "Error interno del servidor" });
  }
};

// export const checkProductData = async (req, res, next) => {
//   try {
//     const { title, description, price, code, stock, category } = req.body;
//     const newProduct = {
//       title,
//       description,
//       price,
//       code,
//       stock,
//       category,
//     };

//     if (Object.values(newProduct).includes(undefined)) {
//       return res
//         .status(400)
//         .json({
//           status: "error",
//           msg: "Todos los campos son obligatorios a excepcion de thumbnail",
//         });
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ status: "error", msg: "Error interno del servidor" });
//   }
// };

import mongoose from "mongoose";
import envs from "./envs.config.js";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(envs.MONGO_URL);
    console.log("Mongo DB conectado");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
  }
};

// import mongoose from "mongoose";
// import envs from "./envs.config.js";

// export const connectMongoDB = async () => {
//   try {
//     const uri = envs.MONGO_URL;
//     if (!uri) {
//       throw new Error(
//         "La URL de MongoDB no está definida en las variables de entorno."
//       );
//     }

//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Mongo DB conectado");
//   } catch (error) {
//     console.error("Error al conectar con MongoDB:", error);
//   }
// };

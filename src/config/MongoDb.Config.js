import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://rodasbrisa130:bris1102@70020coder.ewrgwkq.mongodb.net/ecommerce"
    );
    console.log("Mongo DB conectado");
  } catch (error) {
    console.log(error);
  }
};

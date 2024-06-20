import productManage from "./productManage.js";

productManage.addProduct({
  title: "buzo",
  description: "unisex talles s, m y l",
  price: 800,
  https: "img0",
  code: "ABC127",
  stock: 17,
});

productManage.addProduct({
  id: 3,
  title: "remera",
  description: "unisex talles s, m y l",
  price: 800,
  thumbnail: "img1",
  code: "ABC127",
  stock: 15,
});

// productManage.getProducts();

const testProducts = async () => {
  // const product = await productManage.getProductById(2);
  // console.log(product);
  // const product = await productManage.updateProduct(1, { price: 300 })
  // console.log(product);

  const products = await productManage.deleteProduct(1);
  console.log(products);
};

testProducts();

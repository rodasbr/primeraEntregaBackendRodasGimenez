import productManage from "./productManage.js";

productManage.addProduct({
  title: "Producto 1",
  description: "Descripción del prod 1",
  price: 100,
  thumbnail: "h",
  code: "ABC123",
  stock: 150,
});

productManage.addProduct({
  title: "Producto 2",
  description: "Descripción del prod 2",
  price: 200,
  thumbnail: "g",
  code: "ABC124",
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

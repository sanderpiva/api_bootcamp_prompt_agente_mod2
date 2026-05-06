const products = [];

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Produto não encontrado');
  res.json(product);
};

const createProduct = (req, res) => {
  const { name, price } = req.body;
  const product = {
    id: products.length + 1,
    name,
    price
  };
  products.push(product);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Produto não encontrado');

  const { name, price } = req.body;
  product.name = name;
  product.price = price;

  res.json(product);
};

const deleteProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Produto não encontrado');

  products.splice(productIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Gerenciamento de Produtos!');
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
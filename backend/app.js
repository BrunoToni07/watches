const express = require('express');
const app = express();
const watchesRouter = require('./routes/watches');
const cors = require('cors');

// Middleware para habilitar CORS
app.use(cors());

// Middleware para tratar requisições com corpo em JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao meu site de relógios!');
});

// Rota para listar os relógios mais caros do mundo
app.use('/watches', watchesRouter);

// Middleware para tratar erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ocorreu um erro no servidor.');
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});

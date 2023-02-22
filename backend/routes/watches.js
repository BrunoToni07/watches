const axios = require('axios');
const express = require('express');
const router = express.Router();

const headers = {
  'X-RapidAPI-Key': '382b7458c9mshda9d70cdf4e106bp13c230jsnf4921464083a',
  'X-RapidAPI-Host': 'watch-database1.p.rapidapi.com'
};

const makeApiCall = async (url) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar dados.');
  }
};

// Rota para listar os relógios mais caros do mundo
router.get('/watch-media-links-by-id/:watchId', async (req, res) => {
  const url = `https://watch-database1.p.rapidapi.com/watch-media-links-by-id/${req.params.watchId}`;
  const data = await makeApiCall(url);
  res.json(data);
});

// Rota para listar todas as marcas de relógios
router.get('/all-brands', async (req, res) => {
  const url = 'https://watch-database1.p.rapidapi.com/all-brands';
  const data = await makeApiCall(url);
  res.json(data);
});

// Rota para listar todas as famílias de relógios de uma determinada marca
router.get('/all-family-by/brandname/:brand', async (req, res) => {
  const url = `https://watch-database1.p.rapidapi.com/all-family-by/brandname/${req.params.brand}`;
  const data = await makeApiCall(url);
  res.json(data);
});

// Rota para listar todos os modelos de relógios de uma determinada família de uma determinada marca
router.get('/all-models-by/brandname/:brand/family/:family', async (req, res) => {
  const url = `https://watch-database1.p.rapidapi.com/all-models-by/brandname/${req.params.brand}/family/${req.params.family}`;
  const data = await makeApiCall(url);
  res.json(data);
});

// Rota para listar todos os detalhes de um modelo de relógio específico
router.get('/all-models-by/brandname/:brand/family/:family/model/:model', async (req, res) => {
  const url = `https://watch-database1.p.rapidapi.com/all-models-by/brandname/${req.params.brand}/family/${req.params.family}/model/${req.params.model}`;
  const data = await makeApiCall(url);
  res.json(data);
});

module.exports = router;

// routes/index.js
const express = require('express');
const router = express.Router();

const usuarioRouter = require('./usuario');
const empresaRouter = require('./empresa');
const atracaoRouter = require('./atracao');
const roteiroRouter = require('./roteiro');
const passeioRouter = require('./passeio');
const avaliacaoRouter = require('./avaliacao');
const favoritoRouter = require('./favorito');
const contratoPasseioRouter = require('./contrato_passeio');

router.use('/usuarios', usuarioRouter);
router.use('/empresas', empresaRouter);
router.use('/atracoes', atracaoRouter);
router.use('/roteiros', roteiroRouter);
router.use('/passeios', passeioRouter);
router.use('/avaliacoes', avaliacaoRouter);
router.use('/favoritos', favoritoRouter);
router.use('/contratos-passeio', contratoPasseioRouter);

module.exports = router;

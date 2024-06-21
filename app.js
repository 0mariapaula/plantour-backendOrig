const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const atracaoRoutes = require('./routes/atracaoRoutes');
const roteiroRoutes = require('./routes/roteiroRoutes');
const passeioRoutes = require('./routes/passeioRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');
const favoritoRoutes = require('./routes/favoritoRoutes');

app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/atracoes', atracaoRoutes);
app.use('/roteiros', roteiroRoutes);
app.use('/passeios', passeioRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/favoritos', favoritoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;


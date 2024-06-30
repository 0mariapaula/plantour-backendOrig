const sequelize = require('./config'); // Importando a configuração do Sequelize
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito, Contrato_Passeio } = require('./models/associations'); // Importando os modelos

// Função para sincronizar os modelos com o banco de dados
const syncDatabase = async () => {
    try {
        // Sincronizar todos os modelos
        await sequelize.sync({ force: true }); // Use { force: true } para recriar as tabelas a cada execução (cuidado, isso apaga dados existentes)
        console.log('Sincronização completa!');
    } catch (error) {
        console.error('Erro ao sincronizar com o banco de dados:', error);
    }
};

// Executando a função de sincronização
syncDatabase();

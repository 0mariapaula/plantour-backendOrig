// test-db-connection.js

const { sequelize } = require('./models/index'); // Importe a instância do Sequelize
const { Usuario, Empresa, Atracao, Roteiro, Passeio, Avaliacao, Favorito, Contrato_Passeio } = require('./models/index'); // Importe os modelos que deseja testar

// Função para testar a conexão com o banco de dados
async function testDBConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        // Teste de CRUD operations aqui

        // Exemplo: Criar um usuário
        const novoUsuario = await Usuario.create({
            cpf: '12345678900',
            nome: 'Exemplo Usuário',
            email: 'exemplo@usuario.com',
            senha: 'senha123',
            telefone: '123456789'
        });
        console.log('Usuário criado:', novoUsuario.toJSON());

        // Exemplo: Buscar todos os usuários
        const usuarios = await Usuario.findAll();
        console.log('Todos os usuários:', usuarios.map(usuario => usuario.toJSON()));

        // Exemplo: Atualizar um usuário
        const usuarioAtualizado = await Usuario.update({ nome: 'Novo Nome' }, {
            where: { cpf: '12345678900' }
        });
        console.log('Usuário atualizado:', usuarioAtualizado);

        // Exemplo: Deletar um usuário
        const usuarioDeletado = await Usuario.destroy({
            where: { cpf: '12345678900' }
        });
        console.log('Usuário deletado:', usuarioDeletado);

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

// Chamar a função para testar a conexão
testDBConnection();

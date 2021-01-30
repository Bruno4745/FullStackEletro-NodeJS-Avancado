const app = require('./App/config/server');
const porta = 3500;

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
});
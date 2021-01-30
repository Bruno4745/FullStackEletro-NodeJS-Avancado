module.exports = function(app){

    app.get('/mostrar/pedidos', (req, res) =>{
        
        const connection = app.app.config.database();
        const query = app.app.models.conteudoModel;
    
        query.getPedidos(connection, function(error, result){
            res.json(result);
            //console.log(result, error, result);
        });
    });
    
    app.post('/inserir/pedidos', (req, res) => {

        const conteudo = req.body;
        console.log(conteudo);
        const connection = app.app.config.database();
        const conteudoModel = app.app.models.conteudoModel;

        conteudoModel.inserirPedidos(conteudo, connection, function(error, result){
        });

    });
}
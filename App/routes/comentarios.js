module.exports = function(app){

    app.get('/mostrar/comentarios', function(req, res){

        const connection = app.app.config.database();
        const query = app.app.models.conteudoModel;

        query.getComentarios(connection, function(error, result){
            res.json(result);
            //console.log(result, error, result);
            //res.render('comentarios', {dados:result})
        });
    });

    app.post('/inserir/comentarios', (req, res) => {

        const conteudo = req.body;
        console.log(conteudo);
        const connection = app.app.config.database();
        const conteudoModel = app.app.models.conteudoModel;

        conteudoModel.inserirComentarios(conteudo, connection, function(error, results){
        });

    });
}
const mongoose = require('mongoose');
require('../modelsNoSql/Comentario')
const Comentario = mongoose.model('comentarios')
require('../config/databasenosql')

module.exports = function(app){

    app.get('/mostrar/comentarios', async (req, res) => {

        const comentariosResponse = await Comentario.find()
        return res.json(comentariosResponse);

        // const connection = app.app.config.database();
        // const query = app.app.models.conteudoModel;

        // query.getComentarios(connection, function(error, result){
        //     res.json(result);
        //     //console.log(result, error, result);
        //     //res.render('comentarios', {dados:result})
        // });
    });

    app.post('/inserir/comentarios', (req, res) => {

        const novoComentario = new Comentario({
            nome: req.body.nome,
            mensagem: req.body.mensagem,
        })

        novoComentario.save();
        res.json({message: "Comentario enviado", info: novoComentario})

        // const conteudo = req.body;
        // console.log(conteudo);
        // const connection = app.app.config.database();
        // const conteudoModel = app.app.models.conteudoModel;

        // conteudoModel.inserirComentarios(conteudo, connection, function(error, results){
        // });

    });
}
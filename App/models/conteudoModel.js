module.exports = function(){

    this.getProdutos = function(connection, callback){
        connection.query("SELECT * FROM mostra_produto_categoria", callback);
        //View 'mostra_produto_categoria' faz SELECT com INNER JOIN entre duas tabelas 'produto' e 'categoria'.
    }

    // this.getComentarios = function(connection, callback){
    //     connection.query("SELECT * FROM comentario", callback);
    // }
    // this.inserirComentarios = function(conteudo, connection, callback){
    //     connection.query("INSERT INTO comentario SET ?", conteudo);
    // }

    this.getPedidos = function(connection, callback){
        connection.query("SELECT * FROM pedidos", callback);
    }
    this.inserirPedidos = function(conteudo, connection, callback){
        connection.query("INSERT INTO pedidos SET ?", conteudo);
    }
    
    return this;
}
module.exports.iniciaChat = function(application, req, res){
    const dadosForm = req.body
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

    let erros = req.validationErrors();

    if(erros) res.render('index', {validacao: erros})

    application.get('io').emit(
        'msgParaCliente', 
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar'}
    )

    res.render('chat', {dadosForm: dadosForm})
}
module.exports.cadastrar_user = function(app,req,res) {
	let firebase_connect =  app.config.connect;
	let consultas  = new app.app.models.consultas(firebase_connect);
	

	req.assert('nome','Digite seu nome completo.').notEmpty();
	req.assert('cpf','Digite seu email.').notEmpty();
	req.assert('data_nascimento','Digite sua data nascimento.').notEmpty();
	req.assert('email','Digite seu e-mail.').notEmpty();
	req.assert('email','E-mail inválido.').isEmail();
	req.assert('senha','Digite sua senha.').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		console.log(erros);
		return erros;
	}else{
		let usuario = {
			Nome:req.body.nome,
			cpf:req.body.cpf,
			data_nascimento:req.body.data_nascimento,
			email:req.body.email,
			senha:req.body.senha
		}
		let registrar = consultas.cadastrar_user(usuario);

		if(registrar == false){
			let mensagem = [{msg:'Não foi possivel registrar usuário.'}];
			return mensagem;
		}else{
			let mensagem = [{msg:'Usuário registrado com sucesso.'}];
			return mensagem;
		}
	}
}
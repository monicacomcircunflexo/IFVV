module.exports.cadastrar_user = function(app,req,res) {
	let firebase_connect =  app.config.connect;
	let consultas  = new app.app.models.consultas(firebase_connect);
	

	req.assert('name','Digite seu nome completo.').notEmpty();
	req.assert('cpf','Digite seu email.').notEmpty();
	req.assert('birth_date','Digite sua data nascimento.').notEmpty();
	req.assert('email','Digite seu e-mail.').notEmpty();
	req.assert('email','E-mail inválido.').isEmail();
	req.assert('password','Digite sua senha.').notEmpty();
	req.assert('check_password','Digite sua senha.').notEmpty();
	//check_password
	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({
			sucess:false,
			message:erros
		});
	}else{
		let usuario = {
			nome:req.body.name,
			cpf:req.body.cpf,
			data_nascimento:req.body.birth_date,
			email:req.body.email,
			senha:req.body.password
		}
		let registrar = consultas.cadastrar_user(usuario);

		if(registrar == false){
			res.status(403).json({
				sucess:false,
				message:'Não foi possivel registrar usuário.'
			});
		}else{
			res.status(200).json({
				sucess:true,
				message:'Usuário registrado com sucesso.'
			});
		}
	}
}
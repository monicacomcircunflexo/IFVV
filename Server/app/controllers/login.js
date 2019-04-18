
module.exports.logar = function(app,req,res) {
	let firebase_connect =  app.config.connect;
	let consultas  = new app.app.models.consultas(firebase_connect);


	req.assert('cpf','Digite seu nome completo.').notEmpty();
	req.assert('senha','Digite sua senha.').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({
			message:erros
		});
	}else{
		
	}
}
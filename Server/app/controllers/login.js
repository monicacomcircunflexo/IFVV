const module_config  = require('./auth_config');

module.exports.logar = function(app,req,res) {
	let firebase_connect =  app.config.connect;
	let consultas  = new app.app.models.consultas(firebase_connect);

	const{cpf,senha} = req.body;

	req.assert('nome','Digite seu nome completo.').notEmpty();
	req.assert('senha','Digite sua senha.').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.status(400).json({
			sucess:false,
			code:'DO101_API_ERROR_01',
			message:error
		});
	}else{
		consultas.verificar_usuario(cpf,senha,function(data) {
			if(data.length < 0){
				res.json({
					sucess:true,
					token:gerartoken
				});
			}else{
				let tokenDATA={
					id:101
				}
				let gerartoken = module_config.jwt.sign(tokenDATA,module_config.config.JWT_KEY,{ expiresIn:'1m'});
				res.json({
					sucess:true,
					token:gerartoken
				});
			}
		});
	}
}

module.exports.verificar = function(app,req,res) {
	let token = req.headers['autorization'].split('')[1];
	module_config.jwt.verify(token,module_config.config.JWT_KEY,function(err,decode) {
		if(!err){
			res.json({
				sucess:true,
				token:'Não conectado'
			});
		}else{
			res.status(401).json({
				sucess:false,
				error:err
			});
		}
	})
}	
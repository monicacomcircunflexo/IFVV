module.exports = function(app){
	app.post('/entrar',function(req,res){
		app.app.controllers.login.logar(app,req,res);
	})
	app.get('/verificar',function(req,res,next){
		app.app.controllers.auth_verify.auth(app,req,res,next);
	})
}
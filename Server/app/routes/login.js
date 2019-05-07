module.exports = function(app){
	app.post('/entrar',function(req,res){
		app.app.controllers.login.logar(app,req,res);
	})
}
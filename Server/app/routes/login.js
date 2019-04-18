module.exports = function(app){
	app.post('/login',function(req,res){
		app.app.controllers.login.logar(app,req,res);
	})
}
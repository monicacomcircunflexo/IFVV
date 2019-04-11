module.exports = function(app){
	app.get('/verificar/login',function (req,res) {
		app.app.controllers.login.verificar(app,req,res);
	})
	app.post('/login',function(req,res){
		app.app.controllers.login.logar(app,req,res);
	})
}
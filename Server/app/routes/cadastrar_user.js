module.exports  = function(app) {
	app.post('/cadastrar/usuario',function(req,res) {
		app.app.controllers.cadastrar_user.cadastrar_user(app,req,res);
	})
}
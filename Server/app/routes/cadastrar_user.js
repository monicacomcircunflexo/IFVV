module.exports  = function(app) {
	app.post('/users',function(req,res) {
		app.app.controllers.cadastrar_user.cadastrar_user(app,req,res);
	});
}
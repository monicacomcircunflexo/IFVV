module.exports  = function(app) {
	app.post('/users',function(req,res) {
		app.app.controllers.cadastrar_user.cadastrar_user(app,req,res);
	});
	app.get('/users/verifyToken',function(req,res,next){
		app.app.controllers.auth_verify.auth(app,req,res,next);
	});
}
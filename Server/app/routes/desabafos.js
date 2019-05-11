module.exports = function(app) {
	app.post('/postar/desabafo',function(req,res) {
		app.app.controllers.desabafos.salvar_desabafo(app,req,res);
	});
	app.get('/todos/desabafos',function(req,res) {
		app.app.controllers.desabafos.todos_desabafos(app,req,res);
	});
	app.get('/desabafos/pessoal/',function(req,res) {
		app.app.controllers.desabafos.desabafos_pessoal(app,req,res);
	});

}
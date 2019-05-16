module.exports = function(app){
	app.post('/comentar',function(req,res) {
		app.app.controllers.comentarios.comentar(app,req,res);
	})
	app.get('/comentarios/desabafo/:key',function(req,res) {
		app.app.controllers.comentarios.comentarios_desabafo(app,req,res);
	})
}
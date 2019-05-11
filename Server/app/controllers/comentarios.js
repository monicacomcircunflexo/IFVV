module.exports.comentar = function(app,req,res) {
	let connect = app.config.connect;
	let consulta = new app.app.models.consultas(connect);

	req.assert('comentario','Escreva seu comentario').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({message:erros});
	}else{

		let date = require('moment');
		date.locale('pt-BR');

		let comentario = {
			id_desabafo:req.body.id_desabafo, // como passar esse id_desabafo ?
			comentario:req.body.comentario,
			data_comentario:date().format('LLLL')
		}
		
		let comentar = consulta.comentar(comentario);

		if(comentar == false){
			res.status(403).json({
				message:'Não foi possivel realizar comentário'
			});
		}else{
			res.json({
				message:'Comentário realizado'
			});
		}
	}
};

module.exports.comentarios_desabafo = function(app,req,res) {

	let connect = app.config.connect;
	let consulta = new app.app.models.consultas(connect);

	consulta.comentarios(req.params.key,(data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			res.json({comentarios:data.val()})
		}
	})
}	
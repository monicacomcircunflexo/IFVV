module.exports.todos_desabafos = function(app,req,res) {
	let connect = app.config.connect;
	let consulta = new app.app.models.consultas(connect);

	consulta.todos_desabafos((data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			const dados = [];
			data.forEach((desabafo)=>{
				dados.push(desabafo.val());
			});
		    res.json({desabafos:dados})
		}
	})
}

module.exports.desabafos_pessoal = function(app,req,res) {
	let connect = app.config.connect;
	let consulta = new app.app.models.consultas(connect);

	consulta.desabafos_pessoal(req.params.cpf,(data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			res.json({desabafos:data.val()})
		}
	})
}
module.exports.salvar_desabafo = function(app,req,res) {
	let connect = app.config.connect;
	let consulta = new app.app.models.consultas(connect);

	req.assert('desabafo','Escreva seu desabafo').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({message:erros});
	}else{

		let date = require('moment');
		date.locale('pt-BR');

		let desabafo = {
			cpf_usuario:req.body.cpf,
			desabafo:req.body.desabafo,
			data_postagem:date().format('LLLL'),
			anonimo:req.body.anonimo
		}

		let registrar_desabafo = consulta.postar_desabafo(desabafo);

		if(registrar_desabafo == false){
			res.status(403).json({
				message:'Não foi possivel postar desabafo'
			});
		}else{
			res.json({
				message:'Postagem realizada'
			});
		}
	}
}

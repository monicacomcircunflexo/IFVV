exports.post = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	
    req.assert('comentario','Escreva seu comentario').notEmpty();



	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({message:erros});
	}else{

		let date = require('moment');
		date.locale('pt-BR');

		let comentario = {
			id_unburden:req.body.id_desabafo, // como passar esse id_desabafo ?
			comment:req.body.comentario,
			create_at:date().format('LLLL'),
			cpf:req.params.cpf,
		}
		
		let comentar = consulta.comentar(comentario,(result)=>{
			res.json({
				message:'Comentário realizado'
			});
		},(error)=>{
			res.status(417).json({
				message:'Falha no firebase(Banco de dados)'
			});
		});
	}	
};

exports.delete = (req, res, next) => {
    let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	let id_comenterio = req.params.id;
	let delete_comentario = consulta.remover_desabafo(id_comenterio);
	if(delete_comentario == false){
		res.status(403).json({message:'Não possivel deletrar comentário'});
	}else{
		res.json({message:'Deletado com sucesso !!'});
	}
};
exports.comment = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	let id_unburden = req.params.key;
	
    consulta.comentarios(id_unburden,(data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			const dados = [];

			data.forEach((comentario)=>{
				dados.push(comentario.val());
			});

		    res.json({comentarios:dados})		
		}
	})
};

exports.put = (req, res, next) => {
    // implementar codificação para editar comentario 
};
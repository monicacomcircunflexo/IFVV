exports.post = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);

    req.assert('unburden','Escreva seu desabafo').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({message:erros});
	}else{

		let date = require('moment');
		date.locale('pt-BR');

		let desabafo = {
			cpf:req.body.cpf,
			unburden:req.body.unburden,
			create_at:date().format('LLLL'),
			isAnonimaty:req.body.isAnonimaty,
			visibility:req.body.visibility
		}

		console.log(desabafo);

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
};
exports.delete = (req, res, next) => {
    let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	let id_desabafo = req.params.id;
	
	let deletar_desabafo = consulta.id_desabafo(id_desabafo);
	
	if(deletar_desabafo == false){
		res.status(403).json({message:'Não possivel deletar desabafo'});
	}else{
		res.json({message:'Deletado com sucesso !!'});
	}
};

exports.unburden = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	let cpf = req.params.cpf;

	consulta.desabafos_pessoal(cpf,(data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			res.json({desabafos:data.val()})
		}
	})    
};

exports.put = (req, res, next) => {
    // implementar codificação para editar desabafo
};
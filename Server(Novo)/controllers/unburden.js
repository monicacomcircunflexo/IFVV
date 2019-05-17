exports.post = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);

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
			anonimo:req.body.anonimo,
			publico:req.body.anonimo
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
};
exports.put = (req, res, next) => {
    
};
exports.delete = (req, res, next) => {
    
};

exports.unburden = (req, res, next) => {
    
};

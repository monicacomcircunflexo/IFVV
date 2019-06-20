exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	consulta.todos_desabafos((result)=>{
		let dados = [];
		result.forEach((desabafo)=>{
			dados.push(desabafo.val());
		});
		res.json(dados);
	},(error)=>{
		res.status(403).json({message:'Erro ao listar desabafos'});
	})    
};


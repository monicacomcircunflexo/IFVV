exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
<<<<<<< HEAD
	consulta.todos_desabafos((result)=>{
		let dados = [];
		result.forEach((desabafo)=>{
			dados.push(desabafo.val());
=======
	consulta.todos_desabafos((data) => {
		
		let dados = [];
		data.forEach((desabafo)=>{
			var des = desabafo.val();
			des.key = desabafo.key;
			dados.push(des);
>>>>>>> 9ddf848532b9db0f0d14cda2f07e289f1c437280
		});
		res.json(dados);
	},(error)=>{
		res.status(403).json({message:'Erro ao listar desabafos'});
	})    
};


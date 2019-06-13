exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	consulta.todos_desabafos((data) => {
		
		let dados = [];
		data.forEach((desabafo)=>{
			var des = desabafo.val();
			des.key = desabafo.key;
			dados.push(des);
		});
		res.json(dados);
	})    
};
exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);
	consulta.todos_desabafos((data)=>{
		let dados = [];
		data.forEach((desabafo)=>{
			dados.push(desabafo.val());
		});
		console.log(dados);
		res.json(dados);
	})    
};
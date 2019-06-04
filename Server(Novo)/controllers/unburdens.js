exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);

	consulta.todos_desabafos((data)=>{
		let dados = [];
		console.log(req.user);
		data.forEach((desabafo)=>{
			dados.push(desabafo.val());
		});

		res.json(dados);
	})    
};
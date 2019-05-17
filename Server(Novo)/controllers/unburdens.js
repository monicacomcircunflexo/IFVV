exports.unburdens = (req, res, next) => {
	let connect = require('../config/connect');
	let consulta = require('../model/consultas')(connect);

	consulta.todos_desabafos((data)=>{	
		 if(data.val() == null){
			res.status(403).json({message:'Não há desabafos'})
		}else{
			let dados = [];

			data.forEach((desabafo)=>{
				dados.push(desabafo.val());
			});

			res.json({desabafos:dados})
		}
	})    
};
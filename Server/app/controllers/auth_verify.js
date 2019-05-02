const jwt = require('jsonwebtoken');
const config = require('./config.js');


module.exports.auth = function(app,req,res,next) {
		let token =  req.headers['authorization'];
		if (token) {
			 if (token.startsWith('Bearer ')) {
		       	 token = token.slice(7, token.length);
		    }
		    jwt.verify(token, config.secret, (err, decoded) => {
		      if (err) {
		        return res.status(403).json({
		          success: false,
		          message: 'Token inválido'
		        });
		      } else {
		          return res.json({
		          	success: true,
		        	perfil: decoded
		        });
		      }
		    });
		  } else {
		    return res.json({
		      success: false,
		      message: 'Token de autenticação não foi fornecido'
		    });
		 }
}
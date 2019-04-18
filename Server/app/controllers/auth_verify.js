const jwt = require('jsonwebtoken');
const config = require('./config.js');


module.exports.auth = function(app,req,res,next) {
		let token =  req.headers['authorization'];
		if (token) {
			 if (token.startsWith('Bearer ')) {
		       	 token = token.slice(7, token.length);
		    }
		    jwt.verify(token, config.secret, (err, decoded) => {
		    	console.log(decoded);
		      if (err) {
		        return res.json({
		          success: false,
		          message: 'Token inválido'
		        });
		      } else {
		        req.decoded = decoded;
		        next();
		      }
		    });
		  } else {
		    return res.json({
		      success: false,
		      message: 'Token de autenticação não foi fornecido'
		    });
		 }
}
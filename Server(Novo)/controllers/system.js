exports.login = (req, res, next) => {
  let jwt = require('jsonwebtoken');
  let config = require('../chave.js');
  let bcrypt = require('bcrypt');
  let saltRounds  = 12;
  let connect = require('../config/connect');
  let consulta = require('../model/consultas')(connect);


  req.assert('cpf','Digite seu CPF.').notEmpty();
  req.assert('password','Digite sua senha.').notEmpty();
  
  let erros = req.validationErrors();

  if(erros){
    res.status(403).json({
      message:erros
    });
  }else{
      consulta.verificar_usuario(req.body.cpf,(data)=>{
        console.log(data.val());  
         if (data.val() != null) {
           data.forEach((user)=>{

              let dados = user.val();
              let cpf =  dados.cpf;

              bcrypt.compare(req.body.password, dados.password, function(err, resposta) {
                  if(resposta == true){
                    let token = jwt.sign({cpf},
                      config.secret,
                      { expiresIn: '12h'
                      }
                    );
                    res.json({
                      success: true,
                      token: token
                    });
                  }else{
                    res.status(401).json({
                      success: false,
                      message: 'Senha incorreta.'
                    });
                  }
                });
            });
         }else{
            res.status(401).json({
              success: false,
              message: 'CPF ou Senha incorreto.'
            });
         }
      });
    }
};

exports.verifytoken = (req, res, next) => {
	let jwt = require('jsonwebtoken');
	let config = require('../chave.js');

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
		          usuario: decoded
		        });
		    }
		});
	} else {
		return res.json({
		  success: false,
		  message: 'Token de autenticação não foi fornecido'
		});
	}
};
exports.login = (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const config = require('../chave.js');
  const bcrypt = require('bcrypt');
  const saltRounds  = 12;
  const connect = require('../config/connect');
  var consulta = require('../model/consultas')(connect);


  req.assert('cpf','Digite seu CPF.').notEmpty();
  req.assert('password','Digite sua senha.').notEmpty();
  
  var erros = req.validationErrors();

  if(erros){
    res.status(403).json({
      message:erros
    });
  }else{
      consulta.verificar_usuario(req.body.cpf,(data)=>{
         if (data.val() != null) {
           data.forEach((user)=>{
              let dados = user.val();
              let cpf = dados.cpf;
              bcrypt.compare(req.body.password, dados.password, function(err, resposta) {
                  if(resposta == true){
                    let token = jwt.sign({cpf},
                      config.secret,
                      { expiresIn: '12h'
                      }
                    );
                    res.json({
                      success: true,
                      token: token,
                      user: {
                        cpf: dados.cpf,
                        name: dados.name,
                        photo: dados.photo
                      }
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
      },(error)=>{
          res.status(417).json({
            message:'Falha no firebase(Banco de dados)'
          });
      });
    }
};


exports.verifytokenMiddle = (req, res, next) => {
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
            req.user = decoded;
            next();
		    }
		});
	} else {
		return res.json({
		  success: false,
		  message: 'Token de autenticação não foi fornecido'
		});
	}
};

exports.verifytoken = (req, res, next) => {

	let jwt = require('jsonwebtoken');
  let config = require('../chave.js');
  const connect = require('../config/connect');
  let consultas = require('../model/consultas')(connect);

  let token =  req.headers['authorization'];
	if (token) {
		if (token.startsWith('Bearer ')) {
			token = token.slice(7, token.length);
		}
		jwt.verify(token, config.secret, function(err, decoded){
		    if (err) {
		        return res.status(403).json({
		          success: false,
		          message: 'Token inválido'
		        });
		    } else {
            consultas.verificar_usuario(decoded.cpf,(data)=>{
              if (data.val() != null) {
                data.forEach((user)=>{
                  user = user.val();
                  return res.json({
                    success: true,
                    user: {
                      cpf: user.cpf,
                      name: user.name,
                      photo: user.photo
                    }
                  });
                });
              }
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
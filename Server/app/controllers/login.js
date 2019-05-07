const jwt = require('jsonwebtoken');
const config = require('./config.js');

module.exports.logar = function(app,req,res) {
  let bcrypt = require('bcrypt');
  let saltRounds  = 12;
	let firebase_connect =  app.config.connect;
	let consultas  = new app.app.models.consultas(firebase_connect);
  req.assert('cpf','Digite seu CPF.').notEmpty();
  req.assert('password','Digite sua senha.').notEmpty();
  let erros = req.validationErrors();

  if(erros){
    res.status(403).json({
      message:erros
    });
  }else{
      consultas.verificar_usuario(req.body.cpf,(data)=>{
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
}
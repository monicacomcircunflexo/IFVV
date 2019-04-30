const jwt = require('jsonwebtoken');
const config = require('./config.js');

module.exports.logar = function(app,req,res) {
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
         if (data.val() != null) {
            data.forEach((user)=>{
              let dados = user.val();
              if(dados.senha == req.body.password){
                let token = jwt.sign({dados},
                  config.secret,
                  { expiresIn: '12h'
                  }
                );
                res.json({
                  success: true,
                  message: 'Logado.',
                  token: token
                });
              }else{
                res.status(403).json({
                  success: false,
                  message: 'Senha incorreta.'
                });
              }
            });
         }else{
            res.status(403).json({
              success: false,
              message: 'CPF ou Senha incorretos.'
            });
         }
      });
    }
}
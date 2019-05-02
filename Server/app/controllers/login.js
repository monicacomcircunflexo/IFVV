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
        let dados = data.val();
        if (data.val() != null) {
          let token = jwt.sign({dados},
            config.secret,
            { expiresIn: 3600
            }
          );
          console.log(token);
          res.json({
            success: true,
            message: 'Logado.',
            token: token
          });
        } else {
          res.status(403).json({
            success: false,
            message: 'CPF ou Senha incorretos.'
          });
        }
      });
    }
}
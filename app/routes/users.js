var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  console.log(req.session);
  if (req.session.usercpf != null) {
    res.redirect('/depoiments');
  } else {
    res.render('login');
  }
  
});

router.post('/login', function(req, res, next){
  let user = new User(res.locals.connection);
  user.find.by.cpf(req.body.cpf, function(error, results, fields) {
    let userFound = null
    if (results.length > 0) {
      userFound= results[0];
    }
    if (userFound != null) {
      if (userFound.senha == req.body.password) {
        req.session.usercpf = userFound.cpf;
        res.redirect('/depoiments');
      } else {
        res.redirect('/users/login', {message: 'CPF ou senha não confere'});
      }
    } else {
      res.redirect('/users/login', {message: 'CPF ou senha não confere'});
    }
    //Buscar o usuário pelo cpf
    //Verificar se a senha bate
    // Se sim enviar para página inicial
    // Se não mostrar mensagem de erro.
  });
  
});

router.get('/register', function(req, res, next) {
  res.send('formulário do register');
  // Tarefa: Criar o formulário de registro
});

router.post('/register', function(req, res, next){
  // Pegar as informações e então adicionar no Banco de Dados
  // Tarefa redirecionar para o login
  res.send('realização do cadastro do usuário');
})

module.exports = router;

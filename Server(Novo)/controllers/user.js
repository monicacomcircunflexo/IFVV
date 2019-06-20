exports.post = (req, res, next) => {
    let bcrypt = require('bcrypt');
	let saltRounds  = 12;
	let connect = require('../config/connect');
  	let consulta = require('../model/consultas')(connect);
	
	req.assert('name','Digite seu nome completo.').notEmpty();
	req.assert('cpf','Digite seu CPF.').notEmpty();
	req.assert('birth_date','Digite sua data nascimento.').notEmpty();
 	req.assert('email','Digite seu e-mail.').notEmpty();
	req.assert('email','E-mail inválido.').isEmail();
	req.assert('password','Digite sua senha.').notEmpty();
	req.assert('check_password','Digite sua senha.').notEmpty();


	let erros = req.validationErrors();

	if(erros){
		res.status(403).json({
			message:erros
		});
	}else if(req.body.password != req.body.check_password){
		res.status(403).json({
			message:[  { location: 'body',
					    param: 'password',
					    msg: 'Senhas não conferem',
					    value: '' } ,
						{ location: 'body',
					    param: 'check_password',
					    msg: 'Senhas não conferem',
					    value: '' } ]
		});	
	}else{
		consultas.usuarios(req.body.cpf,async (data)=>{
		 let dados = await data.val();
		  if((dados == null)){
			  bcrypt.hash(req.body.password, saltRounds).then((haspassword)=>{
			  	let usuario = {
					name:req.body.name,
					cpf:req.body.cpf,
					birth_date:req.body.birth_date,
					email:req.body.email,
					password:haspassword
				}
				let registrar = consultas.cadastrar_user(usuario,(result)=>{
					res.status(200).json({
						confirm:'Usuário registrado com sucesso.'
					});
				},(error)=>{
					res.status(403).json({
						message:'Não foi possivel registrar usuário.'
					});
				});
			  });
			}else{
				res.status(203).json({
					confirm:'Usuário já cadastrado na plataforma.'
				});
			}
		},(error)=>{
			console.log(error.code);
		});
	}
};
exports.put = (req, res, next) => {
    // implementar codificação para editar usuário.
};
exports.delete = (req, res, next) => {
    // implementar codificação para deletar  usuário.
};

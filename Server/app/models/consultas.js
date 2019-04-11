class Consultas{
	constructor(connection){
		this.connection = connection;
	}
	cadastrar_user(json){
		this.connection.database().ref("usuarios").push().set(json);
	}
	verificar_usuario(cpf,senha,callback){
		this.connection.database().ref("usuarios").orderByChild("cpf").startAt(cpf).on("child_added", callback);
	}
}

module.exports = function() {
	return Consultas;
}
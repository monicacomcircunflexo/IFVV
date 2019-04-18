class Consultas{
	constructor(connection){
		this.connection = connection;
	}
	cadastrar_user(json){
		this.connection.database().ref("usuarios").push().set(json);
	}
	usuarios(cpf,callback){
		this.connection.database().ref("/usuarios").orderByChild("cpf").startAt(cpf).endAt(cpf + "\uf8ff").once('value').then(callback);
	}
	verificar_usuario(cpf,callback){
		this.connection.database().ref("/usuarios").orderByChild("cpf").equalTo(cpf).once('value').then(callback);
	}
}

module.exports = function() {
	return Consultas;
}
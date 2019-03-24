class Consultas{
	constructor(connection){
		this.connection = connection;
	}
	cadastrar_user(json){
		this.connection.database().ref("usuarios").push().set(json);
	}
}

module.exports = function() {
	return Consultas;
}
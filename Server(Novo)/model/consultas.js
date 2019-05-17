class Consultas{
	constructor(connection){
		this.connection = connection;
	}
	todos_desabafos(callback){
		this.connection.database().ref('/desabafos').once('value',callback);
	}
	cadastrar_user(json){
		this.connection.database().ref("usuarios").push().set(json);
	}
	comentar(json){
		this.connection.database().ref("comentarios").push().set(json);	
	}
	comentarios(key,callback){
		this.connection.database().ref("comentarios").orderByChild("id_desabafo").startAt(key).endAt(key + "\uf8ff").once('value').then(callback);
	}
	usuarios(cpf,callback){
		this.connection.database().ref("/usuarios").orderByChild("cpf").startAt(cpf).endAt(cpf + "\uf8ff").once('value').then(callback);
	}
	desabafos_pessoal(cpf,callback){
		this.connection.database().ref("/desabafos").orderByChild("cpf_usuario").startAt(cpf).endAt(cpf + "\uf8ff").once('value').then(callback);
	}
	verificar_usuario(cpf,callback){
		this.connection.database().ref("/usuarios").orderByChild("cpf").equalTo(cpf).once('value').then(callback);
	}
	postar_desabafo(json){
		this.connection.database().ref('desabafos').push().set(json);
	}
}

module.exports = (connection)=>{
	return new Consultas(connection());
}
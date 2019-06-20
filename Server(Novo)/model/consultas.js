class Consultas{
	constructor(connection){
		this.connection = connection;
	}
	remover_comentario(id_comentario){
		this.connection.database().ref('comments/'+id_comentario).remove();
	}
	remover_desabafo(id_desabafo){
		this.connection.database().ref('comments/'+id_desabafo).remove();
	}
	todos_desabafos(resultado,error){
		this.connection.database().ref('/unburdens').orderByChild('visibility').equalTo(true).once('value').then(resultado,error);
	}
	cadastrar_user(json,resultado,error){
		this.connection.database().ref("users").push().set(json).then(resultado,error);
	}
	comentar(json,resultado,error){
		this.connection.database().ref("comments").push().set(json).then(resultado,error);
	}
	comentarios(key,resultado,error){
		this.connection.database().ref("comments").orderByChild("id_desabafo").startAt(key).endAt(key + "\uf8ff").once('value').then(resultado,error);
	}
	usuario(cpf,resultado,error){
		this.connection.database().ref("/users").orderByChild("cpf").startAt(cpf).endAt(cpf + "\uf8ff").once('value').then(resultado,error);
	}
	desabafos_pessoal(cpf,resultado,error){
		this.connection.database().ref("/unburdens").orderByChild("cpf").startAt(cpf).endAt(cpf + "\uf8ff").once('value').then(resultado,error);
	}
	verificar_usuario(cpf,resultado,error){
		this.connection.database().ref("/users").orderByChild("cpf").equalTo(cpf).once('value').then(resultado,error);
	}
	postar_desabafo(json,resultado,error){
		this.connection.database().ref('unburdens').push().set(json).then(resultado,error);
	}
}
module.exports = (connection)=>{
	return new Consultas(connection());
}
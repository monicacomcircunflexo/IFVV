const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyAT4IUSKaEkRbZBVYHM2gRJhP78LdxhWsI",
  authDomain: "ifvv-b37a2.firebaseapp.com",
  databaseURL: "https://ifvv-b37a2.firebaseio.com",
  projectId: "ifvv-b37a2",
  storageBucket: "ifvv-b37a2.appspot.com",
  messagingSenderId: "728814357306",
  appId: "1:728814357306:web:13407e08f7b0b6e1"
 },consulta = firebase.initializeApp(config);

module.exports = ()=>{
	return consulta
}

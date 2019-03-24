const firebase = require('firebase');

 var config = {
    apiKey: "AIzaSyCfiY6ORi2HmYiYR1CyCvWVoT6GENNlxM4",
    authDomain: "database-68b8a.firebaseapp.com",
    databaseURL: "https://database-68b8a.firebaseio.com",
    projectId: "database-68b8a",
    storageBucket: "database-68b8a.appspot.com",
    messagingSenderId: "543521076591"
 },db = firebase.initializeApp(config);


module.exports =  function(){
	return db;
}

var Base = require('./base');

class User extends Base {
  constructor(db) {
    super('users', db);
  }

  cpf (cpf, callback) {
    this.db.query('SELECT * FROM '+this.name+' WHERE cpf='+cpf, function(error, results, fields){
      callback(error, results, fields);
    });
  }
}

module.exports = User;

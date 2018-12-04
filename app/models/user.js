var Base = require('./base');

class User extends Base {
  constructor() {
    super('user');
  }

  cpf (cpf) {
    return this.data.find(function(user) {
      return user.cpf == cpf;
    });
  }
}

module.exports = User;

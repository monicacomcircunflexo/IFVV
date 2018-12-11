class Base{
  constructor (name, connection) {
    this.name = name;
    this.db = connection;
  }

  get find() {
    return this;
  }

  get by() {
    return this;
  }

};

module.exports = Base;
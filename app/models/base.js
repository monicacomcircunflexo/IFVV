class Base{
  constructor (name) {
    this.name = name;
  }

  get find() {
    return this;
  }

  get by() {
    return this;
  }

};

module.exports = Base;
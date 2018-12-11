USE ifvv;

CREATE TABLE users (
  cpf char(11),
  nome_completo varchar(128),
  email varchar(128),
  senha varchar(512),
  dt_nascimento date,
  PRIMARY KEY(cpf)
);


var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM perfil WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM perfil`;

  return database.executar(instrucaoSql);
}

function buscarPorPerfil(nome) {
  var instrucaoSql = `SELECT * FROM perfil WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO usuario (nome, email) VALUES ('${nome}', '${email}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorPerfil, buscarPorId, cadastrar, listar };

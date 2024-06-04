var database = require("../database/config");

function buscarUsuariosPorPerfil(perfilId) {

  var instrucaoSql = `SELECT * FROM usuarios a WHERE perfil_id = ${perfilId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(perfilId) {
  
  var instrucaoSql = `INSERT INTO (perfil_id) usuarios VALUES (${perfilId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUsuariosPorPerfil,
  cadastrar
}

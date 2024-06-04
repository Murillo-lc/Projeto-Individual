var database = require("../database/config")

function pegarPerfilGeral(){
    var instrucaoSql = "SELECT count(perfil_id) as perfilGeral from usuarios group by perfil_id;"

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarPerfilGeral
}
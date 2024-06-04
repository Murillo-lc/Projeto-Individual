var empresaModel = require("../models/empresaModel");

function buscarPorPerfil(req, res) {
  var nome = req.query.nome;

  empresaModel.buscarPorPerfil(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  //var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorPerfil(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(nome).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}
var perfilModel = require("../models/perfilModel");
function pegarPerfilGeral(req, res) {
  perfilModel.pegarPerfilGeral()
    .then(function (resultado) {
      console.log(`\nResultados encontrados: ${resultado.length}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`);

      if (resultado.length > 0) {
        console.log(resultado)

        res.status(200).json(resultado)
      } else {
        res.status(204).send("ERRO 204: nenhum resultado encontrado");
      }
    }).catch(
      function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar a captura no banco! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      }
    )
}

module.exports = {
  buscarPorPerfil,
  buscarPorId,
  cadastrar,
  listar,
  pegarPerfilGeral
};

var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    perfilController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    perfilController.buscarPorPerfil(req, res);
});

router.get("/buscar/:id", function (req, res) {
  perfilController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  perfilController.listar(req, res);
});

module.exports = router;
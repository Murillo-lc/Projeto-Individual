var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/pegarPerfilGeral", function (req, res){
    perfilController.pegarPerfilGeral(req, res);
})

module.exports = router;
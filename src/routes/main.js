// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const mainController = require("../controllers/mainController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", mainController.login);
router.post("/login", validateUserLogin, mainController.loginProcess);
router.get("/index", mainController.index);


module.exports = router;
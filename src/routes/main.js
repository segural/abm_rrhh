// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const redirectSupplierLogued = require("../middlewares/redirectSupplierLogued");

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const mainController = require("../controllers/mainController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/", redirectSupplierLogued, mainController.login);
router.get("/index", authMiddleware, mainController.index);


module.exports = router;
// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Requiero el controller al que apuntan las rutas que defino más abajo:
const mainController = require("../controllers/mainController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
//Rutas get
router.get("/", redirectIfLogued, mainController.login);
router.get("/index", authMiddleware, mainController.index);

//Rutas post/put
router.post("/login", validateUserLogin, mainController.loginProcess);
router.post("/logout", mainController.usersLogout);

//Rutas delete

module.exports = router;
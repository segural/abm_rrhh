// Requiero los módulos de node que se van ausar:
const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Requiero el controller al que apuntan las rutas que defino más abajo:
const userController = require("../controllers/userController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
//Rutas get
router.get("/list", authMiddleware, userController.userList);
router.get("/new", authMiddleware, userController.newUser);
router.get("/pending", authMiddleware, userController.userPending);
router.get("/pendingit", authMiddleware, userController.userPendingIt);
router.get("/detail/:id", authMiddleware, userController.userDetail);
router.get("/edit/:id", authMiddleware, userController.userEdit);
router.get("/disabled/", authMiddleware, userController.userListDisable);

//Rutas post/put
router.post("/newuser", userController.userStore);
router.put("/created/:id", userController.userCreated);
router.put("/disable/:id", userController.userDisabled);
router.put("/down/:id", userController.userDown);
router.put("/enable/:id", userController.userEnabled);
router.put("/directenable/:id", userController.userDirectEnabled);
router.put("/tempenable/:id", userController.userTempEnabled);

//Rutas delete
router.delete("/destroy/:id", userController.usersDestroy);

module.exports = router;
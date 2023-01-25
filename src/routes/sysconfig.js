const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Requiero el controller al que apuntan las rutas que defino maás abajo:
const sysconfigController = require("../controllers/sysconfigController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
router.get("/domains", sysconfigController.domainlist);
router.post("/newdomain", sysconfigController.domainStore);
router.get("/organizations", sysconfigController.organizationlist);
router.post("/neworganization", sysconfigController.organizationStore);
router.get("/locations", sysconfigController.locationlist);
router.post("/newlocation", sysconfigController.locationStore);
router.get("/departments", sysconfigController.departmentlist);
router.post("/newdepartment", sysconfigController.departmentStore);

//  Rutas para: Borrar usuarios
router.delete('/domains/:id', sysconfigController.domainDestroy);
router.delete('/organizations/:id', sysconfigController.organizationDestroy);
router.delete('/locations/:id', sysconfigController.locationDestroy);
router.delete('/departments/:id', sysconfigController.departmentDestroy);

module.exports = router;
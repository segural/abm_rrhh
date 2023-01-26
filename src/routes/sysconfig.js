const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Requiero el controller al que apuntan las rutas que defino más abajo:
const sysconfigController = require("../controllers/sysconfigController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
// Rutas get
router.get("/domains", authMiddleware, sysconfigController.domainlist);
router.get("/organizations", authMiddleware, sysconfigController.organizationlist);
router.get("/locations", authMiddleware, sysconfigController.locationlist);
router.get("/departments", authMiddleware, sysconfigController.departmentlist);

//Rutas post/put
router.post("/newdomain", authMiddleware, sysconfigController.domainStore);
router.post("/neworganization", authMiddleware, sysconfigController.organizationStore);
router.post("/newlocation", authMiddleware, sysconfigController.locationStore);
router.post("/newdepartment", authMiddleware, sysconfigController.departmentStore);

// Rutas delete
router.delete('/domains/:id', sysconfigController.domainDestroy);
router.delete('/organizations/:id', sysconfigController.organizationDestroy);
router.delete('/locations/:id', sysconfigController.locationDestroy);
router.delete('/departments/:id', sysconfigController.departmentDestroy);

module.exports = router;
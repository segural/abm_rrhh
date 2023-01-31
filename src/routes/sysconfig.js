const express = require("express");
const router = express.Router();

// Middleware que sólo permite acceder a ciertas rutas si se está loggeado:
const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogued = require("../middlewares/redirectIfLogued");
const validateUserLogin = require("../middlewares/validateUserLogin");

// Middleware que sólo permite acceder a ciertas rutas si NO se está loggeado:
const guestMiddleware = require("../middlewares/guestMiddleware");

//Middlewares para validacion de formularios del Backend:
const validateUserStore = require("../middlewares/validateUserStore");
const validateUserUpdate = require("../middlewares/validateUserUpdate");
const validateUserReset = require("../middlewares/validateUserReset");

// Requiero el controller al que apuntan las rutas que defino más abajo:
const sysconfigController = require("../controllers/sysconfigController.js");

// Defino las rutas, es decir que controlador y cuál de sus métodos es el que va a manejar el requerimiento
// Rutas get
router.get("/domains", authMiddleware, sysconfigController.domainlist);
router.get("/organizations", authMiddleware, sysconfigController.organizationlist);
router.get("/locations", authMiddleware, sysconfigController.locationlist);
router.get("/departments", authMiddleware, sysconfigController.departmentlist);
router.get("/users/new", authMiddleware, sysconfigController.userNew);
router.get("/users/:id/edit", authMiddleware, sysconfigController.userEdit);
router.get("/users/:id/toggle", sysconfigController.userToggle);
router.get("/users", authMiddleware, sysconfigController.userList);
router.get("/roles/new", authMiddleware, sysconfigController.roleNew);
router.get("/roles/:id/edit", authMiddleware, sysconfigController.roleEdit);
router.get("/roles", authMiddleware, sysconfigController.roleList);
router.get("/permissions/new", authMiddleware, sysconfigController.permissionNew);
router.get("/permissions/:id/edit", authMiddleware, sysconfigController.permissionEdit);
router.get("/permissions", authMiddleware, sysconfigController.permissionList);

//Rutas post/put
router.post("/newdomain", authMiddleware, sysconfigController.domainStore);
router.post("/neworganization", authMiddleware, sysconfigController.organizationStore);
router.post("/newlocation", authMiddleware, sysconfigController.locationStore);
router.post("/newdepartment", authMiddleware, sysconfigController.departmentStore);
router.post("/users", validateUserStore, sysconfigController.userStore);
router.put("/users/:id", validateUserUpdate, sysconfigController.userUpdate);
router.post("/roles", sysconfigController.roleStore);
router.put("/roles/:id", sysconfigController.roleUpdate);
router.post("/permissions", sysconfigController.permissionStore);
router.put("/permissions/:id", sysconfigController.permissionUpdate);

// Rutas delete
router.delete("/domains/:id", sysconfigController.domainDestroy);
router.delete("/organizations/:id", sysconfigController.organizationDestroy);
router.delete("/locations/:id", sysconfigController.locationDestroy);
router.delete("/departments/:id", sysconfigController.departmentDestroy);
router.delete("/users/:id", sysconfigController.userDestroy);
router.delete("/roles/:id", sysconfigController.roleDestroy);
router.delete("/permissions/:id", sysconfigController.permissionDestroy);

module.exports = router;

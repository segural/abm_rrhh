const {check} = require("express-validator");

let validateSupplierLogin = [
    check("email")
        .notEmpty().withMessage("Debes introducir un usuario").bail(),
        
    check("password")
        .notEmpty().withMessage("Debes introducir una contraseña").bail()
];

module.exports = validateSupplierLogin;
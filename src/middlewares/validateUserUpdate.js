const {check} = require("express-validator");
const path = require("path");
const { nextTick } = require("process");

let validateUserUpdate = [
    
    check("mail")
        .notEmpty().withMessage("Debes introducir un email").bail()
        .isEmail().withMessage("Email invalido. Ingresa un email con formato válido: user@dominio.com"),

    check("fullName")
        .notEmpty().withMessage("Debes introducir el nombre completo").bail()
        .isLength({min: 2}).withMessage("El nombre debe tener al menos 2 caracteres"),

    check("username")
        .notEmpty().withMessage("Debes introducir un usuario").bail()
        .isLength({min: 3}).withMessage("El usuario debe tener al menos 3 caracteres"),

    check("roles")
        .notEmpty().withMessage("Debes seleccionar al menos un rol").bail(),
];

module.exports = validateUserUpdate;
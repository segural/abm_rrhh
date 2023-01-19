const {check} = require("express-validator");
const path = require("path");

let validateUserStore = [
    
    check("pass")
        .isLength({min: 8}).withMessage("La contraseña debe tener entre 8 y 15 caracteres").bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).withMessage("La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un caracter especial"),

];

module.exports = validateUserStore;
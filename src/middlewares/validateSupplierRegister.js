const {check} = require("express-validator");
let validateSupplierRegistration = [
    check("name")
        .notEmpty().withMessage("Debes introducir el nombre de la compañia").bail(),

    check("contact")
        .notEmpty().withMessage("Debes introducir el nombre de un contacto").bail(),

    check("email")
        .notEmpty().withMessage("Debes introducir el email del contacto").bail()
        .isEmail().withMessage("E-mail invalido. Ingresa una dirección con formato válido: user@dominio.com").bail(),
        
    check("cuitcuil")
        .notEmpty().withMessage("Debes introducir CUIT/CUIL para validar la nueva empresa").bail()
        .isLength({max: 11}).withMessage("EL CUIT/CUIL no debe tener más de 11 caracteres")       
        .isLength({min: 11}).withMessage("EL CUIT/CUIL no debe tener menos de 11 caracteres")       
];

module.exports = validateSupplierRegistration;
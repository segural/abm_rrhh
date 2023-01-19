const { check } = require("express-validator");
const path = require("path");
const { nextTick } = require("process");

let validateSupplierNew = [
  check("cuitcuil")
    .notEmpty()
    .withMessage("Debes introducir un CUIT/CUIL")
    .bail()
    .isNumeric()
    .withMessage("El CUIT/CUIL debe ser un dato numérico. No utilice (" - ")"),

  check("firstName").notEmpty().withMessage("Debes introducir un nombre").bail().isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),

  check("lastName").notEmpty().withMessage("Debes introducir un apellido").bail().isLength({ min: 2 }).withMessage("El apellido debe tener al menos 2 caracteres"),

  check("iva").notEmpty().withMessage("Debes introducir la condiciónde IVA").bail(),

  check("address").notEmpty().withMessage("Debes introducir una dirección válida").bail(),

  check("city").notEmpty().withMessage("Debes introducir la ciudad donde rádica la empresa").bail(),

  check("service").notEmpty().withMessage("Debes introducir el servicio que presta la empresa").bail(),

  check("where").notEmpty().withMessage("Debes introducir donde entregará o prestará el servicio").bail(),

  check("bank").notEmpty().withMessage("Debes introducir el nombre del Banco donde se procederá al pago").bail(),

  check("branch").notEmpty().withMessage("Debes introducir el número de sucursal del Banco").bail().isNumeric().withMessage("El código de sucursal debe ser un dato numérico"),

  check("cbu")
    .notEmpty()
    .withMessage("Debes introducir un CBU válido")
    .bail()
    .isNumeric()
    .withMessage("El CBU debe ser un dato numérico. No utilice (" - ")"),

  check("email").notEmpty().withMessage("Debes introducir un email").bail().isEmail().withMessage("Email invalido. Ingresa un email con formato válido: user@dominio.com"),

  check("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener entre 8 y 15 caracteres")
    .bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    .withMessage("La contraseña debe incluir al menos una minúscula, una mayúscula, un número y un caracter especial"),

  check("afip")
    .custom((value, { req }) => {
      if (req.files != undefined) {
        switch (path.extname(req.files.afip[0].originalname)) {
          case ".pdf":
            return ".pdf";
          default:
            return false;
        }
      } else {
        return true;
      }
    })
    .withMessage("Debe cargar un certificado de AFIP. Solo se admiten archivos .pdf"),

  check("iibb")
    .custom((value, { req }) => {
      if (req.files != undefined) {
        switch (path.extname(req.files.iibb[0].originalname)) {
          case ".pdf":
            return ".pdf";
          default:
            return false;
        }
      } else {
        return true;
      }
    })
    .withMessage("Debe cargar un certificado de Ingresos Brutos. Solo se admiten archivos .pdf"),

  check("cm02")
    .custom((value, { req }) => {
      if (req.files.cm05 != undefined && req.files.cm02 == undefined) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Debe cargar un certificado CM02. Debido a la carga del certificado CM05"),

  check("cm05")
    .custom((value, { req }) => {
      if (req.files.cm02 != undefined && req.files.cm05 == undefined) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Debe cargar un certificado CM05. Debido a la carga del certificado CM02"),
];

module.exports = validateSupplierNew;

const {check} = require("express-validator");
const path = require("path");
const { nextTick } = require("process");

let validateInvoiceStore = [

    check("voucher").custom((value, {req}) =>{
        if (req.file != undefined){
        switch(path.extname(req.file.originalname)){
            case ".pdf": return ".pdf";
            break;
            default: return false
        }} else {
            return true
        }
    }).withMessage("Solo se admiten archivos .pdf"),
]

module.exports = validateInvoiceStore;
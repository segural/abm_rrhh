// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const mainController = {
    login: (req, res) => {
        res.render("./main/login.ejs", { req });
    },

    loginProcess: async (req, res) => {
        let errors = validationResult(req);        
        let userToLogin = undefined;
        
        if (errors.isEmpty()) {
            let user = await db.users.findOne({
                where: {
                    username: req.body.user
                    },
                include: {
                    model: db.roles,
                    as: "roles",
                    include: [
                    {
                        model: db.permissions,
                        as: "permissions",
                    }
                    ],
                }
            });
            if (user != null) {
                if (user.active) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        if (user.resetFlag) {
                            return res.render ('./users/usersReset', { errors:{ resetPass:
                                {msg: "Debe ingresar una nueva contraseña"}
                            }, old: req.body });
                        } else {
                            userToLogin = user;
                        };
                    };
                    } else {
                        return res.render ('./main/login', { errors:{ userInactive:
                            {msg: "Su usuario fue deshabilitado, comuníquese con el administrador"}
                        }, old: req.body });
                    };
                };              

    } else {
        return res.render ('./main/login', {errors:errors.mapped(), old: req.body});
    };

    if (userToLogin == undefined){
        return res.render ('./main/login', {errors:{ noUser:
            {msg: "Credenciales inválidas"}
        }, old: req.body});
    };

    let userCan =[];
    for (const role of userToLogin.roles) {
        for (const permission of role.permissions) {
            if (!userCan.includes(permission.name)) {
                userCan.push(permission.name);
            };                
        };            
    };
    req.session.userLogged = userToLogin;
    req.session.userCan = userCan;

    if (req.body.rememberMe != undefined){
        res.cookie("rememberMe", userToLogin.user, {maxAge: 120000})
    };
    res.redirect("../index");
    },

    index: async (req, res) => {
        res.render("./main/index.ejs", { req });
    },
}

module.exports = mainController;

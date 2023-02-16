// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
require("datejs");
const bcrypt = require('bcrypt');
const ejs = require("ejs");

const userController = {
    userList: async (req, res) => {
        let users = await db.abmusers.findAll({
            where:{
                [Op.or]: [{status: "ok"}, {status:"temp_ok"}]
            },
        })
        res.render("./users/usersList.ejs", { req, users });
    },

    userPending: async (req, res) => {
        let users = await db.abmusers.findAll()
        res.render("./users/usersPending.ejs", { req, users });
    },
    
    userPendingIt: async (req, res) => {
        let users = await db.abmusers.findAll({
            where:{
                [Op.or]: [{status: "it"}, {status:"it_disable"}, {status:"temp_it"}, {status: "enable_it"}]
            }
        })
        res.render("./users/usersPendingForIT.ejs", { req, users });
    },
    
    userListDisable: async (req, res) => {
        let users = await db.abmusers.findAll({
            where: {
                status: "disabled"
            }
        })
        res.render("./users/usersDisabled.ejs", { req, users });
    },
    
    newUser: async (req, res) => {
        let domains = await db.domains.findAll();
        let organizations = await db.organizations.findAll();
        let locations = await db.locations.findAll();
        let departments = await db.departments.findAll();
        let chiefs = await db.chiefs.findAll();
        res.render("./users/newUser.ejs", { req, domains, departments, locations, organizations, chiefs });
    },
    
    userStore: async (req, res) => {
        let usertocreate = await db.abmusers.findOne({
            where: {
                document: req.body.doc,
            }
        })
        if (usertocreate == undefined){
        let domain = null;
        if (req.body.maildomain != undefined){
            domain = req.body.maildomain
        };
        let userduedate = null;
        if (req.body.userduedate != ""){
            userduedate = req.body.userduedate
        };
        let file = "No Aplica";
        if (req.body.file != undefined){
            file = req.body.file
        };
        let newuser = await db.abmusers.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            document: req.body.doc,
            file: file,
            position: req.body.position,
            location: req.body.location,
            phone: req.body.phone,
            birthday: req.body.birthdate,
            iphone: null,
            department: req.body.department,
            organization: req.body.organization,
            chief: req.body.chief,
            username: req.body.external,
            external: external,
            maildomain: domain,
            userduedate: userduedate,
            mail: null,
            status: "it"
        })
        res.redirect('/users/list');
    } else {
        let domains = await db.domains.findAll();
        let organizations = await db.organizations.findAll();
        let locations = await db.locations.findAll();
        let departments = await db.departments.findAll();
        let chiefs = await db.chiefs.findAll();
        let body = req.body;
        res.render("./users/usersExists.ejs", {req, body, domains, departments, locations, organizations, chiefs});
    }},
    
    userDetail: async (req, res) => {
        let user = await db.abmusers.findOne({
            where:{
                id: req.params.id
            }
        })
        res.render("./users/usersDetail.ejs", { req, user });
    },

    userEdit: async (req, res) => {
        let domains = await db.domains.findAll();
        let organizations = await db.organizations.findAll();
        let locations = await db.locations.findAll();
        let departments = await db.departments.findAll();
        let chiefs = await db.chiefs.findAll();
        let user = await db.abmusers.findOne({
            where:{
                id: req.params.id
            }
        })
        res.render("./users/usersEdit.ejs", { req, user, domains, departments, locations, organizations, chiefs });
    },

    userUpdate: async (req, res) => {
        let userToUpdate = await db.abmusers.findByPk(req.params.id);
        let iphone = null;
        if (req.body.iphone != undefined){
            iphone = req.body.iphone
        };
        let username = userToUpdate.username;
        if (userToUpdate.external != req.body.external && req.body.external == true){
            username = userToUpdate.username + ".ext"
        } else if (userToUpdate.external != req.body.external && req.body.external == false) {
            username = userToUpdate.username.slice(0, -4)
        }
        let userduedate = null;
        if (req.body.userduedate != ""){
            userduedate = req.body.userduedate
        };
        let file = "No Aplica";
        if (req.body.file != undefined){
            file = req.body.file
        };
        userToUpdate.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            document: req.body.doc,
            file: file,
            position: req.body.position,
            location: req.body.location,
            phone: req.body.phone,
            birthday: req.body.birthdate,
            iphone: iphone,
            department: req.body.department,
            organization: req.body.organization,
            chief: req.body.chief,
            username: username,
            external: req.body.external,
            maildomain: req.body.maildomain,
            userduedate: userduedate,
            status: "enable_it"
        });
        await userToUpdate.createLog({description: "Usuario_Editado",userID: req.session.userLogged.id});
        res.redirect('/users/list');
    },

    userCreated: async (req, res) => {
        let user = await db.abmusers.findByPk(req.params.id);
        let phone = null;
        if (req.body.ipphone != undefined) {
            phone = req.body.ipphone
        };
        await user.update({ 
            username: req.body.username,
            mail: req.body.email,
            ipphone: phone,
            status: "ok"
        });
        res.render("./users/usersDetail.ejs", { req, user });
    },

    userDisabled: async (req, res) => {
        let userDisabled = await db.abmusers.findByPk(req.params.id);
        await userDisabled.update({
            status: "it_disable"
        });
        res.redirect('/users/list')
    },

    userDown: async (req, res) => {
        let userDisabled = await db.abmusers.findByPk(req.params.id);
        await userDisabled.update({
            status: "disabled"
        });
        res.redirect('/users/list')
    },

    userEnabled: async (req, res) => {
        let userEnabled = await db.abmusers.findByPk(req.params.id);
        await userEnabled.update({
            status: req.body.status
        });
        res.redirect('/users/list')
    },

    userDirectEnabled: async (req, res) => {
        let userEnabled = await db.abmusers.findByPk(req.params.id);
        await userEnabled.update({
            status: "ok"
        });
        res.redirect('/users/list')
    },

    userTempEnabled: async (req, res) => {
        let userEnabled = await db.abmusers.findByPk(req.params.id);
        await userEnabled.update({
            status: "temp_ok"
        });
        res.redirect('/users/list')
    },
    
    usersDestroy: async (req, res) => {
        let userToDelete = await db.abmusers.findByPk(req.params.id);
        await userToDelete.destroy();
        res.redirect('/users/list');
    },
}

module.exports = userController;

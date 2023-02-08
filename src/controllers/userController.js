// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const userController = {
    userList: async (req, res) => {
        let users = await db.abmusers.findAll({
            where:{
                status:"ok"
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
                [Op.or]: [{status: "it"}, {status:"it_disable"}]
            }
        })
        res.render("./users/usersPendingForIT.ejs", { req, users });
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
        let domain = null;
        if (req.body.maildomain != undefined){
            domain = req.body.maildomain
        };
        let external = null;
        if (req.body.external != undefined){
            external = req.body.external
        };
        let newuser = await db.abmusers.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            position: req.body.position,
            location: req.body.location,
            phone: req.body.phone,
            birthday: req.body.birthdate,
            iphone: null,
            department: req.body.department,
            organization: req.body.organization,
            chief: req.body.chief,
            username: null,
            external: external,
            maildomain: domain,
            userduedate: req.body.userduedate,
            mail: null,
            status: "it"
        })
        res.redirect('/users/list');
    },
    
    userDetail: async (req, res) => {
        let user = await db.abmusers.findOne({
            where:{
                id: req.params.id
            }
        })
        res.render("./users/usersDetail.ejs", { req, user });
    },

    userEdit: async (req, res) => {
        let user = await db.abmusers.findOne({
            where:{
                id: req.params.id
            }
        })
        res.render("./users/usersEdit.ejs", { req, user });
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
    
    usersDestroy: async (req, res) => {
        let userToDelete = await db.abmusers.findByPk(req.params.id);
        await userToDelete.destroy();
        res.redirect('/users/list');
    },
}

module.exports = userController;

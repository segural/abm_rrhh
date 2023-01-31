// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const userController = {
    userList: (req, res) => {
        res.render("./users/usersList.ejs", { req });
    },

    newUser: async (req, res) => {
        let domains = await db.domains.findAll();
        let organizations = await db.organizations.findAll();
        let locations = await db.locations.findAll();
        let departments = await db.departments.findAll();
        res.render("./users/newUser.ejs", { req, domains, departments, locations, organizations });
    },

    userStore: async (req, res) => {
        res.render("./main/index.ejs", { req });
    },

}

module.exports = userController;

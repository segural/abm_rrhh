// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const sysconfigController = {
    domainlist: async (req, res) => {
        let domains = await db.domains.findAll();
        res.render("./sysconfig/domainList.ejs", { req, domains });
    },

    domainStore: async (req, res) => {
        await db.domains.create({
            domainName: req.body.name
        })
        res.redirect('/sysconfig/domains')
    },

    domainDestroy: async (req,res) => {
        let domainToDelete = await db.domains.findByPk(req.params.id);
        await domainToDelete.destroy();
        res.redirect('/sysconfig/domains');
    },
    
    organizationlist: async (req, res) => {
        let organizations = await db.organizations.findAll();
        res.render("./sysconfig/organizationList.ejs", { req, organizations });
    },

    organizationStore: async (req, res) => {
        await db.organizations.create({
            name: req.body.name
        })
        res.redirect('/sysconfig/organizations')
    },

    organizationDestroy: async (req,res) => {
        let orgaToDelete = await db.organizations.findByPk(req.params.id);
        await orgaToDelete.destroy();
        res.redirect('/sysconfig/organizations');
    }, 
    
    locationlist: async (req, res) => {
        let locations = await db.locations.findAll();
        res.render("./sysconfig/locationList.ejs", { req, locations });
    },

    locationStore: async (req, res) => {
        await db.locations.create({
            name: req.body.name
        })
        res.redirect('/sysconfig/locations')
    },

    locationDestroy: async (req,res) => {
        let locationToDelete = await db.locations.findByPk(req.params.id);
        await locationToDelete.destroy();
        res.redirect('/sysconfig/locations');
    }, 
    
    departmentlist: async (req, res) => {
        let departments = await db.departments.findAll();
        res.render("./sysconfig/departmentList.ejs", { req, departments });
    },

    departmentStore: async (req, res) => {
        await db.departments.create({
            name: req.body.name
        })
        res.redirect('/sysconfig/departments')
    },

    departmentDestroy: async (req,res) => {
        let departmentToDelete = await db.departments.findByPk(req.params.id);
        await departmentToDelete.destroy();
        res.redirect('/sysconfig/departments');
    }, 
}

module.exports = sysconfigController;
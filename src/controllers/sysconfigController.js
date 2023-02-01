// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const sysconfigController = {
  domainlist: async (req, res) => {
    let domains = await db.domains.findAll();
    res.render("./sysconfig/domainList.ejs", { req, domains });
  },

  domainStore: async (req, res) => {
    await db.domains.create({
      domainName: req.body.name,
    });
    res.redirect("/sysconfig/domains");
  },

  domainDestroy: async (req, res) => {
    let domainToDelete = await db.domains.findByPk(req.params.id);
    await domainToDelete.destroy();
    res.redirect("/sysconfig/domains");
  },

  organizationlist: async (req, res) => {
    let organizations = await db.organizations.findAll();
    res.render("./sysconfig/organizationList.ejs", { req, organizations });
  },

  organizationStore: async (req, res) => {
    await db.organizations.create({
      name: req.body.name,
    });
    res.redirect("/sysconfig/organizations");
  },

  organizationDestroy: async (req, res) => {
    let orgaToDelete = await db.organizations.findByPk(req.params.id);
    await orgaToDelete.destroy();
    res.redirect("/sysconfig/organizations");
  },

  locationlist: async (req, res) => {
    let locations = await db.locations.findAll();
    res.render("./sysconfig/locationList.ejs", { req, locations });
  },

  locationStore: async (req, res) => {
    await db.locations.create({
      name: req.body.name,
    });
    res.redirect("/sysconfig/locations");
  },

  locationDestroy: async (req, res) => {
    let locationToDelete = await db.locations.findByPk(req.params.id);
    await locationToDelete.destroy();
    res.redirect("/sysconfig/locations");
  },

  departmentlist: async (req, res) => {
    let departments = await db.departments.findAll();
    res.render("./sysconfig/departmentList.ejs", { req, departments });
  },

  departmentStore: async (req, res) => {
    await db.departments.create({
      name: req.body.name,
    });
    res.redirect("/sysconfig/departments");
  },

  departmentDestroy: async (req, res) => {
    let departmentToDelete = await db.departments.findByPk(req.params.id);
    await departmentToDelete.destroy();
    res.redirect("/sysconfig/departments");
  },

  chieflist: async (req, res) => {
    let chiefs = await db.chiefs.findAll();
    res.render("./sysconfig/chiefList.ejs", { req, chiefs });
  },

  chiefStore: async (req, res) => {
    await db.chiefs.create({
      userName: req.body.username,
      fullName: req.body.fullname,
      email: req.body.email,
    });
    res.redirect("/sysconfig/chiefs");
  },

  chiefDestroy: async (req, res) => {
    let chiefToDelete = await db.chiefs.findByPk(req.params.id);
    await chiefToDelete.destroy();
    res.redirect("/sysconfig/chiefs");
  },

  // ABM de usuarios
  
  userList: async (req, res) => {
    if (req.session.userCan.includes("system_admin")) {
      let users = await db.users.findAll({
        include: {
          model: db.roles,
          as: "roles",
          include: [
            {
              model: db.permissions,
              as: "permissions",
            },
          ],
        },
      });
      res.render("./sysconfig/users/usersList", { req, users });
    } else {
      let usersToFilter = await db.users.findAll({
        include: {
          model: db.roles,
          as: "roles",
          include: [
            {
              model: db.permissions,
              as: "permissions",
            },
          ],
        },
      });
      let users = [];
      for (const user of usersToFilter) {
        let currentUserRoles = [];
        user.roles.forEach((role) => {
          currentUserRoles.push(role.name);
        });
        if (!currentUserRoles.includes("SysAdmin")) {
          users.push(user);
        }
      }
      res.render("./sysconfig/users/usersList", { req, users });
    }
  },

  userNew: async (req,res) => {
    let roles=await db.roles.findAll({});
    res.render("./sysconfig/users/usersNew", {req, roles})
  },

  userStore: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let reset;
      if (req.body.changePass != undefined) {
        reset = true;
      } else {
        reset = false;
      }
      let existingUser = await db.users.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (existingUser == undefined) {        
        let newUser = await db.users.create({
          fullName: req.body.fullName,
          mail: req.body.mail,
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password, 10),
          resetFlag: reset,
          active: true,
        });
        await newUser.addRoles(req.body.roles);
        res.redirect("./users");
      } else {
        let roles = await db.roles.findAll();
        return res.render("./sysconfig/users/usersNew", { req, roles, errors: { username: { msg: "Ya existe alguien registrado con ese user" } }, old: req.body });
      }
    } else {
      let roles = await db.roles.findAll();
      return res.render("./sysconfig/users/usersNew", { req, roles, errors: errors.mapped(), old: req.body });
    }
  },

  userEdit: async (req,res) => {
    let roles = await db.roles.findAll();
    let userToEdit = await db.users.findByPk (req.params.id,
        {include: [
          {association:"roles"}				
        ]});
    let selectedRoles =[];
    userToEdit.roles.forEach((role) => {selectedRoles.push(role.id)});
    res.render("./sysconfig/users/usersEdit", {req, userToEdit, roles, selectedRoles})
  },

  userUpdate: async (req,res) => {
    let errors = validationResult(req);
    let roles = await db.roles.findAll();
    let userToEdit = await db.users.findByPk (req.params.id,
        {include: [
          {association:"roles"}				
        ]});
    let selectedRoles =[];
    userToEdit.roles.forEach((role) => {selectedRoles.push(role.id)});
    if(errors.isEmpty()){        
        let reset;
        let newpass;
        let pass;        
        if(req.body.changePass != undefined){
            reset = true;
            newpass = 'Ab123456'
            pass = bcrypt.hashSync(newpass, 10)
            // await userToEdit.createLog({action:'user_password_reset',userId: req.session.userLogged.id})
        } else {
            reset = false
            pass = userToEdit.password
        };
        await userToEdit.update ({
          fullName: req.body.fullName,
          mail: req.body.mail,
          username: req.body.username,
          resetFlag: reset,
          active: true,
          password: pass,
          });
        await userToEdit.setRoles(req.body.roles);
        res.redirect('/sysconfig/users');
    } else{
        return res.render ('./sysconfig/users/usersEdit', {req, errors:errors.mapped(), userToEdit, roles, selectedRoles});
    };
  },

  userToggle: async (req, res) => {
    let userToEdit = await db.users.findByPk(req.params.id);
    if (userToEdit.active) {
      await userToEdit.update({ active: false });
      // await userToEdit.createLog({ action: "user_disabled", userId: req.session.userLogged.id });
    } else {
      await userToEdit.update({ active: true });
      // await userToEdit.createLog({ action: "user_enabled", userId: req.session.userLogged.id });
    }
    res.redirect("/sysconfig/users");
  },

  userDestroy: async (req, res) => {
    let userToDelete = await db.users.findByPk(req.params.id);
    await userToDelete.destroy();
    res.redirect("./");
  },

  // ABM de roles

  roleList: async (req, res) => {
    if (req.session.userCan.includes("system_admin")) {
      let roles = await db.roles.findAll({ include: [{ association: "permissions" }] });
      res.render("./sysconfig/roles/rolesList", { req, roles });
    } else {
      let roles = await db.roles.findAll({
        include: [{ association: "permissions" }],
        where: {
          name: {
            [Op.notLike]: "SysAdmin",
          },
        },
      });
      res.render("./sysconfig/roles/rolesList", { req, roles });
    }
  },

  roleNew: async (req, res) => {
    let permissions = await db.permissions.findAll({});
    res.render("./sysconfig/roles/rolesNew", { req, permissions });
  },

  roleStore: async (req, res) => {
    let newRole = await db.roles.create({
      name: req.body.name,
    });
    await newRole.addPermissions(req.body.permissions);
    res.redirect("./roles");
  },

  roleEdit: async (req, res) => {
    let permissions = await db.permissions.findAll({});
    let roleToEdit = await db.roles.findByPk(req.params.id, { include: [{ association: "permissions" }] });
    let selectedPermissions = [];
    roleToEdit.permissions.forEach((permission) => {
      selectedPermissions.push(permission.id);
    });
    res.render("./sysconfig/roles/rolesEdit", { req, roleToEdit, permissions, selectedPermissions });
  },

  roleUpdate: async (req, res) => {
    await db.roles.update(
      {
        name: req.body.name,
      },
      {
        where: { id: req.params.id },
      }
    );

    let updatedRole = await db.roles.findByPk(req.params.id);
    await updatedRole.setPermissions(req.body.permissions);
    res.redirect("./");
  },

  roleDestroy: async (req, res) => {
    let roleToDelete = await db.roles.findByPk(req.params.id, { include: [{ association: "permissions" }] });
    await roleToDelete.destroy();
    res.redirect("./");
  },

  // ABM de permisos

  permissionList: async (req, res) => {
    let permissions = await db.permissions.findAll({ include: [{ association: "roles" }] });
    res.render("./sysconfig/permissions/permissionsList", { req, permissions });
  },

  permissionNew: async (req, res) => {
    let roles = await db.roles.findAll({});
    res.render("./sysconfig/permissions/permissionsNew", { req, roles });
  },

  permissionStore: async (req, res) => {
    let newPermission = await db.permissions.create({ 
      name: req.body.name,
      description: req.body.description
     });
    await newPermission.addRoles(req.body.roles);
    res.redirect("./permissions");
  },

  permissionEdit: async (req, res) => {
    let roles = await db.roles.findAll({});
    let permissionToEdit = await db.permissions.findByPk(req.params.id, { include: [{ association: "roles" }] });
    let selectedRoles = [];
    permissionToEdit.roles.forEach((role) => {
      selectedRoles.push(role.id);
    });
    res.render("./sysconfig/permissions/permissionsEdit", { req, permissionToEdit, roles, selectedRoles });
  },

  permissionUpdate: async (req, res) => {

    await db.permissions.update(
      {
        name: req.body.name,
        description: req.body.description
      },
      {
        where: { id: req.params.id },
      }
    );

    let updatedPermission = await db.permissions.findByPk(req.params.id);
    await updatedPermission.setRoles(req.body.roles);
    res.redirect("./");
  },

  permissionDestroy: async (req, res) => {
    let permissionToDelete = await db.permissions.findByPk(req.params.id, { include: [{ association: "roles" }] });
    await permissionToDelete.destroy();
    res.redirect("./");
  },
};

module.exports = sysconfigController;

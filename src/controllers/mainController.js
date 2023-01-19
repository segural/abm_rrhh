// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
const { Op } = require("sequelize");

const mainController = {
  login: (req, res) => {
    res.render("./main/login.ejs", { req });
  },

  index: async (req, res) => {
    res.render("./main/index.ejs", { req });
  },
}

module.exports = mainController;

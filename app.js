//Requiero paquetes y genero las variables(espress,path):
const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE
const publicPath = path.resolve("./public");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");
const cron = require('node-cron');
const AutoMails = require("./src/controllers/AutoMails")
// const rememberMeMiddleware = require("./src/middlewares/rememberMeMiddleware");

//Defino el/los middlewares que se usarán de forma global:
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(methodOverride("_method")); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({ secret: "abmrrhh", resave: false, saveUninitialized: false }));

app.use(userLoggedMiddleware);
// app.use(rememberMeMiddleware);

// Requiero dotenv para usar .env en la confoguracion de
require("dotenv").config();
// Establezco Engine de Vistas
app.set("view engine", "ejs");
app.set("views", "./src/views/");

//Requiero el/los archivo/s de rutas que se usarán para dirigir las paticiones:
const mainRoutes = require("./src/routes/main.js");
const sysconfigRoutes = require("./src/routes/sysconfig.js");
const usersRoutes = require("./src/routes/users.js");

//Indico para cada petición, el archivo de rutas que lo manejará:
app.use("/", mainRoutes);
app.use("/sysconfig", sysconfigRoutes);
app.use("/users", usersRoutes);

//Scheduled Job
cron.schedule("0 0 8 * * *", function() {
  AutoMails();
},{timezone: "America/Argentina/Buenos_Aires"}
);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`);
});

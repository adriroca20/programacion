const express = require('express');
const morgan = require("morgan");
const path = require("path");
const exphbs= require("express-handlebars");

const app= express();

//Recibe datos de la carpeta views
app.set("views",path.join(__dirname,"views"));
//La plantilla de handlebars que utilizaremos. Se le pasa un objeto de configuracion
app.engine(".hbs",exphbs.create({
    defaultLayout:"main",
    extname:".hbs"
}).engine);
app.set("view engine",".hbs");

app.use(morgan("dev"));
//Estas dos lineas hacen que cuando le envies datos desde un formulario con POST, pueda parsear los datos y entenderlos
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require("./routes/index"));

//Hace que la carpeta public pueda ser accedida desde ordenador
app.use(express.static(path.join(__dirname,"public")));

module.exports = app;
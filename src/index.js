// Carregando Modulos
    const express = require("express");
    const app = express();
    const handlebars = require('express-handlebars');
    const bodyParser = require("body-parser");
    const mainRoute = require("./routes/mainRoute");
    const editRoute = require("./routes/editRoute");
    const session = require("express-session");
    const flash = require("connect-flash");

// config
    //Session
    app.use(session({
        secret:"yek3122",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())

    //Middleware
    app.use(function(req,res,next){
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg = req.flash("error_msg");
        next();
    })
    // Template Engine
        app.engine("handlebars", handlebars.engine({defaultLayout: "main"}));
        app.set("view engine", "handlebars");

    // Bodyparser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas
        app.use("/main", mainRoute)
        app.use("/e", editRoute)
        
// Conexao HTTP
app.listen(8081, function(){
    console.log("Server is Ruinning on url http://localhost:8081/main/home");
});


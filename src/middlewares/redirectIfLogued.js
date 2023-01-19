// Verifica si hay un usuario loggeado y si NO lo hay redirecciona a la página de login
// se usa en rutas que sólo pueden accederse si se está loggeado.

function redirectIfLogued (req, res, next){
    if(req.session.userLogged == undefined){
        next();
    } else{
        res.redirect ('/index/');
    };

};

module.exports = redirectIfLogued;
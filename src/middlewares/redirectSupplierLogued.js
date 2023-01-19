// Verifica si hay un supplier loggeado y si NO lo hay redirecciona a la página de login
// se usa en rutas que sólo pueden accederse si se está loggeado como supplier.

function redirectSupplierLogued (req, res, next){
    if(req.session.supplierLogged == undefined){
        next();
    } else{
        res.redirect ('/suppliers/home');
    };

};

module.exports = redirectSupplierLogued;
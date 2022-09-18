const Product = require("../Schemas/Products.model");
const UserRole = require("../Schemas/UserRole.relation");
module.exports = function(app) {

    app.post('/createOrder', (req, res) => {
        if (req.isAuthenticated()) {
            let products = req.body.products;
            console.log(products)
        }
        else {
            res.sendStatus(400);
        }
    })

}
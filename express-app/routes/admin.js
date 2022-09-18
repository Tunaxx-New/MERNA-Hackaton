const Product = require("../Schemas/Products.model");
const UserRole = require("../Schemas/UserRole.relation");
const User = require("../Schemas/Users.model")
module.exports = function(app) {

    const isAdmin = async function(req, res, next) {
        if (req.isAuthenticated()) {
            let role = await UserRole.find({user_id: req.user._id})
            let admin = false
            role.forEach(function(item) {
                if (item.role === 'admin')
                    admin = true
            });

            if (admin) {
                next()
            }
            else {
                res.sendStatus(400)
            }
        }
        else {
            res.sendStatus(400)
        }
    }

    app.post('/getProducts', isAdmin, (req, res) => {
        Product.find({}, (err, items) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(items)
            }
        })
    })

    app.post('/getUsers', isAdmin, (req, res) => {
        User.find({}, (err, items) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(items)
            }
        })
    })

}
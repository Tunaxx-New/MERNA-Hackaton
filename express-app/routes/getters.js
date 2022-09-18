const Product = require("../Schemas/Products.model");
const User = require("../Schemas/Users.model");
const UserRole = require("../Schemas/UserRole.relation");

module.exports = function(app) {

    app.post('/role', async (req, res) => {
        if (req.isAuthenticated()) {
            let role = await UserRole.find({user_id: req.user._id})

            let admin = false
            let cashier = false

            role.forEach(function(item) {
                if (item.role === 'admin')
                    admin = true
                if (item.role === 'cashier')
                    cashier = true
            });

            if (admin) {
                res.send('admin')
            }
            else if (cashier) {
                res.send('cashier')
            }
            else {
                res.send('user')
            }
        } else {
            res.send('notauth')
        }
    })

    app.get('/menu', (req, res) => {
        Product.find({}, (item, err) => {
            if (!err) {
                res.json(item);
            }
            else {
                res.json(err)
            }
        });
    });

    app.get('/:coffee', (req, res) => {
        Product.findById(req.params.coffee, async (item, err) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(item)
            }
        });
    });

}
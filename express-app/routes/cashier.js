const User = require("../Schemas/Users.model");
const UserRole = require("../Schemas/UserRole.relation");
const WorkDay = require("../Schemas/WorkTime.model");
const menuModel = require("../Schemas/Products.model");
const Order = require("../Schemas/Orders.model");
const Product = require("../Schemas/Products.model");

module.exports = function(app) {

    const isCashier = async function(req, res, next) {
        if (req.isAuthenticated()) {
            let role = await UserRole.find({user_id: req.user._id})
            let cashier = false
            role.forEach(function(item) {
                if (item.role === 'admin' || item.role === 'cashier')
                    cashier = true
            });

            if (cashier) {
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

    app.post('/qr/:id', (req, res) => {
        console.log(1)
        User.findById(req.params.id, async (item, err) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(item)
            }
        });
    })

    app.get('/cashier', async (req, res) => {
        let user = await User.find({})
        let userRole = await UserRole.find({user_id: user._id})
        let role = userRole.role

        if (role) {
            let workDays = WorkDay.find({cashier_id: user._id})
        } else {
            res.redirect('/')
        }
    })

    app.post('/snap_workday', async (req, res) => {
        // If user is cashier
        //...
        let cashier_id = 0

        let workDay = await WorkDay.findOne({cashier_id: cashier_id})
        let date = new Date()
        date = date.getVarDate()
        if (workDay !== undefined) {
            WorkDay.updateOne({_id:workDay._id}, {
                $set: {
                    "completed": true,
                    "end_time": date
                }
            })
        }
        else {
            let date = new Date()
            workDay = new WorkDay()
            workDay.start_time = date
            workDay.completed = false
        }
    })

    app.post('/qr', async (req, res) => {
        let qr_hash = req.body.qr_hash
        let user = await User.findOne({_id:qr_hash})

        // process orders to rating
        let products = await menuModel.find({})
        for (let i = 0; i < products.length; i++) {
            let orders = await Order.find({user_id:qr_hash, product_id:products[i]._id})
            products[i] = {
                'count': orders.length,
                'product': products[i]
            }
        }
        user_preferences = products.sort((a, b) => { return a.count > b.count })

        let discounts = 0
        if (user.phone == null) {
            discounts = 15
        }
        else if (user !== undefined) {
            discounts = 5
        }

        res.json({
            'discounts': discounts,
            'preferences': user_preferences
        })
    })
}
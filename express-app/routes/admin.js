const menuModel = require("../Schemas/Products.model");
module.exports = function(app) {

    app.get('/getProducts', (req, res) => {
        menuModel.find({}, (err, items) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(items)
            }
        })
    })

}
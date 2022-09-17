const menuModel = require("../Schemas/Products.model");
module.exports = function(app) {

    app.get('/:coffee', (req, res) => {
        menuModel.findById(req.params.coffee, async (item, err) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(item)
            }
        });
    });

}
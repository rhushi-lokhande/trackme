var Developer = require('../model/developer/developer');
var loginController = {
    login: function (req, res) {
        Developer.findOne({
            userName: req.body.userName,
            password: req.body.password
        }, function (err, developer) {
            if (err) {
                return res.send(err);
            }
            if (developer) {
                return res.redirect('/api/developer/' + developer._id);
            }
            else {
                return res.writeHead(401);
            }
        });
    },
};
module.exports = loginController;

//# sourceMappingURL=../../map/controller/loginController.js.map

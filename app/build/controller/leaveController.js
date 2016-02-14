var Developer = require('../model/developer/developer');
var leaveController = {
    post: function (req, res) {
        console.log(req.body);
        Developer.findById(req.body.id, function (err, developer) {
            if (err)
                return res.send(err);
            developer.leaves.push({
                from: req.body.from,
                to: req.body.to,
                reason: req.body.reason,
                noOfDays: 4
            });
            developer.save(function (err, developer) {
                return res.send(developer);
            });
        });
    },
};
module.exports = leaveController;

//# sourceMappingURL=../../map/controller/leaveController.js.map

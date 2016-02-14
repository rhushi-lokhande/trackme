var Developer = require('../model/developer/developer');
var delevoperController = {
    registerDeveloper: function (req, res) {
        Developer.create({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
            dob: req.body.dob,
            experience: req.body.experience,
            designation: req.body.designation,
            userName: req.body.userName,
            password: req.body.password,
            project: [],
        }, function (err, developer) {
            if (err) {
                return res.send(err);
            }
            return res.send(developer);
        });
    },
    getUser: function (req, res) {
        Developer.findById(req.params.id).populate('project').exec(function (err, data) {
            if (err)
                return res.send(err);
            return res.send(data);
        });
    },
    getDeveloper: function (req, res) {
        Developer.find(function (err, data) {
            if (err)
                return res.send(500, err);
            return res.send(data);
        });
    },
    updateDeveloper: function (req, res) {
        var developer = req.body;
        Developer.findById(developer._id).exec(function (err, data) {
            if (err)
                return res.send(err);
            data.fName = developer.fName;
            data.lName = developer.lName;
            data.email = developer.email;
            data.experience = developer.experience;
            data.designation = developer.designation;
            data.mobileNo = developer.mobileNo;
            data.save();
            return res.send(data);
        });
    },
};
module.exports = delevoperController;

//# sourceMappingURL=../../map/controller/developerController.js.map

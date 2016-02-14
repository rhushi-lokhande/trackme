var Project = require('../model/project/project');
var Developer = require('../model/developer/developer');
var projectController = {
    getProject: function (req, res) {
        Project.findById(req.params.id).populate('manager').populate('developer').exec(function (err, project) {
            if (err)
                return res.send(err);
            return res.send(project);
        });
    },
    getAllProject: function (req, res) {
        Project.find().populate('manager').populate('developer').exec(function (err, project) {
            if (err)
                return res.send(err);
            return res.send(project);
        });
    },
    post: function (req, res) {
        var newProject = new Project({
            name: req.body.name,
            description: req.body.description,
            technology: req.body.technology,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            status: req.body.status || 'Active',
            isActive: true,
            client: req.body.client,
        });
        newProject.save(function (err, project) {
            if (!err) {
                Developer.findById(req.body.manager, function (err, manager) {
                    if (!err) {
                        if (manager) {
                            project.manager = manager;
                            project.save();
                        }
                    }
                });
                req.body.developer.forEach(function (dev) {
                    Developer.findById(dev, function (err, developer) {
                        if (!err) {
                            if (developer) {
                                project.developer.push(developer);
                                developer.project.push(project);
                                developer.save();
                            }
                        }
                    });
                });
                project.save();
                res.send(project);
            }
        });
    },
    put: function (req, res) {
    },
    delete: function (req, res) {
    }
};
module.exports = projectController;

//# sourceMappingURL=../../map/controller/projectController.js.map

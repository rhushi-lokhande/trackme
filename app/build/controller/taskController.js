var Project = require('../model/project/project');
var Developer = require('../model/developer/developer');
var Task = require('../model/task/task');
var taskController = {
    post: function (req, res) {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            complitionDate: req.body.complitionDate,
            developer: req.body.developer,
            project: req.body.project,
            time: req.body.time,
            status: 'Incomplete'
        }, function (err, task) {
            if (err)
                return res.send(err);
            return res.send(task);
        });
    },
    get: function (req, res) {
        var filter = {};
        if (req.query.project != undefined)
            filter['project'] = req.query.project;
        if (req.query.developer != undefined)
            filter['developer'] = req.query.developer;
        if (req.query.status != undefined)
            filter['status'] = req.query.status;
        Task.paginate(filter, { page: req.query.page || 1, limit: req.query.limit || 2 }, function (err, result) {
            if (err)
                return res.send(err);
            return res.send(result);
        });
    },
    put: function (req, res) {
        var task = req.body;
        Task.findById(task._id, function (err, dbtask) {
            if (err)
                return res.send(err);
            dbtask.title = task.title;
            dbtask.description = task.description;
            dbtask.complitionDate = task.complitionDate;
            dbtask.developer = task.developer._id;
            dbtask.time = task.time;
            dbtask.status = task.status;
            dbtask.save();
            return res.send(dbtask);
        });
    },
    delete: function (req, res) {
        Task.findById(req.params.id, function (err, task) {
            task.isDeleted = true;
            task.save();
            return res.send(task);
        });
    },
};
module.exports = taskController;

//# sourceMappingURL=../../map/controller/taskController.js.map

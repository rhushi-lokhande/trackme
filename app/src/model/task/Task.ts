/// <reference path="../../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
import mongoosePaginate = require('mongoose-paginate');
import IClient = require('../client/IClient');
import IDeveloper = require('../developer/IDeveloper');
import IProject = require('../project/IProject');
import Developer = require('../developer/Developer');
import Project = require('../project/Project');
import ITask = require('./ITask');
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    complitionDate: Date,
    developer: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    status: String,
    time: Number,
    isDeleted: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: "" },
    dateDeleted: { type: Date, default: "" },

});
TaskSchema.plugin(mongoosePaginate);

interface ITaskModel extends ITask, mongoose.Document { }

var Task = mongoose.model<ITaskModel>("Task", TaskSchema);

export = Task;
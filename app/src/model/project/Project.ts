/// <reference path="../../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
import IClient = require('../client/IClient');
import IDeveloper = require('../developer/IDeveloper');
import IProject = require('../project/IProject');
import Developer = require('../developer/Developer');
var ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    technology: [String],
    developer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Developer' }],
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer' },
    startDate: Date,
    endDate: Date,
    isActive: Boolean,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    dateDeleted: Date
});

interface IProjectModel extends IProject, mongoose.Document { }

var Project = mongoose.model<IProjectModel>("Project", ProjectSchema);

export = Project;
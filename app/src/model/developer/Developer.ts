/// <reference path="../../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
import IDeveloper = require('./IDeveloper');
import Project = require('../project/Project');
var leaves = new mongoose.Schema({
    from: Date,
    to: Date,
    reason: String,
    status: { type: String, default: 'wt' },
    noOfDays:Number
});
var developerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: [String],
    mobileNo: [String],
    dob: Date,
    experience: String,
    designation: String,
    technology: [String],
    project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    userName: String,
    password: String,
    isActive: Boolean,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: Date,
    dateDeleted: Date,
    leaves: [leaves]
});

interface IDeveloperModel extends IDeveloper, mongoose.Document { }

var Developer = mongoose.model<IDeveloperModel>("Developer", developerSchema);

export = Developer;
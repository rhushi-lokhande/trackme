/// <reference path="../../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
import IClient = require('./IClient');

var clientSchema = new mongoose.Schema({
    name: String,
    isActive:Boolean,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated:  Date,
    dateDeleted:  Date,
});

interface IClientModel extends IClient, mongoose.Document { }

var Client = mongoose.model<IClientModel>("Client", clientSchema);

export = Client;
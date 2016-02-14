/// <reference path="../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
let Project = require('../model/project/project');
let Developer = require('../model/developer/developer');
let Task = require('../model/task/task');
import {Request, Response} from "express";

let taskController = {
    post: (req: Request, res: Response) => {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            complitionDate: req.body.complitionDate,
            developer: req.body.developer,
            project: req.body.project,
            time: req.body.time,
            status: 'Incomplete'
        }, (err, task) => {
            if (err) return res.send(err);
            return res.send(task);
        });
    },
    // to get all
    get: (req: Request, res: Response) => {

        var filter = {};
        //To  add the condition for the project
        if (req.query.project != undefined) filter['project'] = req.query.project;// query = query.where('project').equals(req.query.project);
        //To  add the condition for the developer
        if (req.query.developer != undefined) filter['developer'] = req.query.developer;//  query = query.where('developer').equals(req.query.developer);
        //To  add the condition for the status
        if (req.query.status != undefined) filter['status'] = req.query.status;// query = query.where('status').equals(req.query.status);
        //
        Task.paginate(filter, { page: req.query.page || 1, limit: req.query.limit || 2 }, function(err, result) {
            if (err) return res.send(err);
            return res.send(result);
        });
    },
   
    //
    put: (req: Request, res: Response) => {
        let task = req.body;
        Task.findById(task._id, (err, dbtask) => {
            if (err) return res.send(err);
            //
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
    delete: (req: Request, res: Response) => {
        Task.findById(req.params.id, (err, task) => {
            task.isDeleted = true;
            task.save();
            return res.send(task);
        });
    },
}
export =  taskController;
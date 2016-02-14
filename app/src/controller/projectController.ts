/// <reference path="../../../typings/tsd.d.ts"/>
import mongoose = require('mongoose');
let Project = require('../model/project/project');
let Developer = require('../model/developer/developer');
import {Request, Response} from "express";

let projectController = {
    getProject: (req:Request, res:Response) => {
        Project.findById(req.params.id).populate('manager').populate('developer').exec((err, project) => {
            if (err) return res.send(err);
            return res.send(project);
        });
    },
    getAllProject: (req:Request, res:Response) => {
        Project.find().populate('manager').populate('developer').exec((err, project) => {
            if (err) return res.send(err);
            return res.send(project);
        });
    },
    post: (req:Request, res:Response) => {
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
        newProject.save((err, project) => {
            if (!err) {
                Developer.findById(req.body.manager, (err, manager) => {
                    if (!err) {
                        if (manager) {
                            project.manager = manager;
                            project.save();
                        }
                    }
                });
                req.body.developer.forEach(dev => {
                    Developer.findById(dev, (err, developer) => {
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
    put: (req:Request, res:Response) => {

    },
    delete: (req:Request, res:Response) => {

    }
}
export = projectController;

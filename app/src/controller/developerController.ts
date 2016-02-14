/// <reference path="../../../typings/tsd.d.ts"/>
import Developer = require('../model/developer/developer');
import {Request, Response} from "express";
let delevoperController = {
    registerDeveloper: (req: Request, res: Response) => {
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
        }, (err, developer) => {
            if (err) {
                return res.send(err);
            }
            return res.send(developer);
        });
    },
    getUser: (req: Request, res: Response) => {
        Developer.findById(req.params.id).populate('project').exec((err, data) => {
            if (err) return res.send(err);
            return res.send(data);
        });
    },
    getDeveloper: (req: Request, res: Response) => {
        Developer.find(function(err, data) {
            if (err)
                return res.send(500, err);
            return res.send(data);
        });
    },
    updateDeveloper: (req: Request, res: Response) => {
        let developer = req.body;
        Developer.findById(developer._id).exec((err, data) => {
            if (err) return res.send(err);
            data.fName=developer.fName;
            data.lName=developer.lName;
            data.email=developer.email;
            data.experience=developer.experience;
            data.designation=developer.designation;
            data.mobileNo=developer.mobileNo;
            data.save();
            return res.send(data);
        });
    },
}

export = delevoperController;


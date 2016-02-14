/// <reference path="../../../typings/tsd.d.ts"/>
import {Request, Response} from "express";
import Developer = require('../model/developer/developer');
let leaveController = {
    post: (req: Request, res: Response) => {
        console.log(req.body);
        Developer.findById(req.body.id, (err, developer) => {
            if (err) return res.send(err);
            developer.leaves.push({
                from: req.body.from,
                to: req.body.to,
                reason: req.body.reason,
                noOfDays: 4
            });
            developer.save((err, developer) => {
                return res.send(developer);
            });
        })
    },
}

export = leaveController;



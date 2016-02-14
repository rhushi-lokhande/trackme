/// <reference path="../../../typings/tsd.d.ts"/>
import Developer = require('../model/developer/developer');
import {Request, Response} from "express";

let loginController = {
    login: (req:Request, res:Response) => {
        Developer.findOne({
            userName: req.body.userName,
            password: req.body.password
        }, (err, developer) => {
            if (err) {
                return res.send(err);
            }
            if (developer) {
                return res.redirect('/api/developer/'+developer._id);
            } else {
                return res.writeHead(401);
            }
        });
    },
}
export = loginController;

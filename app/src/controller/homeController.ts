/// <reference path="../../../typings/tsd.d.ts"/>
import {Request, Response} from "express";

let homeController={
     getIndex:(req:Request, res:Response)=>{
        res.send('Hello world....'); //Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    },
    
    getIndex2:(req:Request, res:Response)=>{
        res.send('Hello world....'); //Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    },
}
export = homeController;



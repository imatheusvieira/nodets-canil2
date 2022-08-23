import {Request, Response} from 'express';
import { serialize } from 'v8';

export const home = (req: Request, res: Response) =>{
    res.send('Home no controller');
   // res.render('/pages/page');
}

export const dogs = (req: Request, res: Response) =>{
    //res.render('/pages/page');
}

export const cats = (req: Request, res: Response) =>{
    //res.render('/pages/page');
}

export const fishes = (req: Request, res: Response) =>{
    //res.render('/pages/page');
}
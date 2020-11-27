import { Router } from 'express'
import {getAllDocteurs} from '../middleware/docteur.middleware.js';
const routerDocteur = Router();

routerDocteur.use('/', getAllDocteurs);

routerDocteur.get('/',function(req,res){
    res.send(JSON.stringify(req.rows));
});


export {routerDocteur}
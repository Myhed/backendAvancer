import {connection} from '../connectionDatabase.js';

function setHeaderMiddleware(req,res,next){
    res.removeHeader('X-Powered-By');
    // res.setHeader('X-Powered-By', 'Hospital');
    next()
}
function attachedBddToRequestMiddleware(req,res,next){
    req.bdd = connection
    next();
}

export {attachedBddToRequestMiddleware, setHeaderMiddleware}
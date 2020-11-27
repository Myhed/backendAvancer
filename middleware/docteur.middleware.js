async function getAllDocteurs(req,res,next){
    let rows;
    try {
        [rows] = await req.bdd.query("SELECT * FROM docteur");
    }catch(e){
        e.code = 503;
        next(e);
    }
    req.rows = rows;
    next();
}

export {getAllDocteurs};
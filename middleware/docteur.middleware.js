async function getAllDocteurs(req,res,next){
    try {
        const [rows, fields] = await req.bdd.query("SELECT * FROM docteurs");
    }catch(e){
        e.code = 503;
        next(e);
    }
    next();
}

export {getAllDocteurs};
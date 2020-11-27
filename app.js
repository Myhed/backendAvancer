import express from 'express';
import {attachedBddToRequestMiddleware,setHeaderMiddleware} from './middleware/default.middleware.js'
import {getAllDocteurs} from './middleware/docteur.middleware.js';
const app = express();


app.use(setHeaderMiddleware);
app.use(attachedBddToRequestMiddleware);
app.use('/docteurs', getAllDocteurs);

app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.status(301).redirect('/docteurs');
});

app.get('/infirmiers', function(req, res) {
    res.send('data infirmier');
});

app.get('/docteurs', async function(req,res){
    console.log(req.bdd);
    res.send();
});

app.get('/services', function(req,res){
    res.send('data services');
});

app.get('*', function(req,res)  {
    res.status(404).send('NOT FOUND');
});

app.use((error, req, res, next) => {
    console.log('code error: ', error.code);
    console.log('message: ',error.message);
    res.status(error.code).send('Internal Error');
    next();
})

app.listen(3000, function(){
    console.log('server started...');
});
import express from 'express';
import {attachedBddToRequestMiddleware,setHeaderMiddleware} from './middleware/default.middleware.js'
import { routerDocteur } from './router/index.js';
const app = express();

// Default Middleware
app.use(express.urlencoded({extended: true}));
app.use(setHeaderMiddleware);
app.use(attachedBddToRequestMiddleware);

// Routeur docteur
app.use('/docteurs', routerDocteur);

// Routeur infirmier @Todo

app.get('/', function(req,res){
    res.status(301).redirect('/docteurs');
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
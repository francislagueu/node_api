import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();

const PORT = process.env.PORT || 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmdb',{
    useMongoClient:true
});
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//Load the routes of the application
routes(app);

//Load static files
app.use(express.static('public'))

//root of the application
app.get('/', (req, res)=>{
    res.send(`Node and express server is running on port ${ PORT}.`);
});

//listen to the server port number
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}.`);
})
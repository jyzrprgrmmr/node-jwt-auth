const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// Route Configuration
const mapRoute = require('express-routes-mapper');
const routeConfig = require('./routes/routeConfig');
const isAuth = require('./config/isAuth');
const userRoutes = mapRoute(routeConfig.user,'./controllers/');
const authRoutes = mapRoute(routeConfig.auth,'./controllers/');

app.use(cors());
app.use('/api',authRoutes);
app.use('/api',userRoutes);

db.sync().then(() =>{
    app.listen(PORT ,()=>{
        console.log("Server started and listening to port:",PORT);
    });
});



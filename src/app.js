import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import express from 'express';

import value from './const/const.js';

const app = express(); //crear instancia app

const corsOptions = {
    credentiasl: true,
    optionSuccessStatus:200,
    methods: "GET, PUT, POST, DELETE",
    origin: '*'
};

//archivo de la confiraciaona de bd 
import './database/connection.js'

app.set('env', value.NODE_ENV);
app.set('port', value.RUN_PORT);

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json({limit: '500MB'}));
app.use(express.urlencoded({extended:true}));

//static folder
app.use(express.static(path.join(path.resolve(), value.STATIC_PATH)));


//ENDPOINTs
import routerUser from './routes/user.js';

app.use('/user', routerUser);

export default app
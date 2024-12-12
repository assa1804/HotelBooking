const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
import connectDB from './config/connectDB.js';

//import routes
import path from 'path';
import cors from 'cors';
import rooms from './routes/rooms.js';
import auth from './routes/auth.js';
import roomTypes from './routes/roomTypes.js';
import booking from './routes/booking.js';
import user from './routes/user.js';
import uploads from './routes/upload.js';
import quiDinh from './routes/quiDinh.js';
import bill from './routes/bill.js';
import report from './routes/report.js';
import favoriteRooms from './routes/favoriteRooms.js';

//connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `${process.env.CLIENT_URL}`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//middleware for routes
app.use(morgan('dev'));

//enable cors
app.use(cors());

//auto load routes

//routes
app.use('/api/booking', booking);
app.use('/api/auth', auth);
app.use('/api/rooms', rooms);
app.use('/api/room-type', roomTypes);
app.use('/api/user', user);
app.use('/api/upload', uploads);
app.use('/api/quidinh', quiDinh);
app.use('/api/bill', bill);
app.use('/api/report', report);
app.use('/api/favorite-rooms', favoriteRooms);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();




const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin: (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean) || '*',
    credentials:true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req,res)=> res.ok({time:new Date().toISOString()}, 'OK'));

const PORT  = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

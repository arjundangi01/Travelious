require('dotenv').config();
const mongoose = require('mongoose')
const mongoDBConnection = mongoose.connect(`${process.env.MONGO_QUERY}/project_data`);
module.exports = mongoDBConnection

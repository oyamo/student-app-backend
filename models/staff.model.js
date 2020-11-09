const mongoose = require('mongoose')

const Schema = mongoose.Schema

const staffSchema = new Schema({
   staffID: { type: Number, unique: true },
   staffName: { type: String },
   staffEmail: {type: String },
    staffType: { type: String }
});

module.exports = mongoose.model("Staff", staffSchema )
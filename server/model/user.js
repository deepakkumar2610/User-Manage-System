var mongoose = require('mongoose');
// import autoIncrement from 'mongoose-auto-increment';
var schema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        default: ''
    },
    phone: String,
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
var user = new mongoose.model('User', schema);

module.exports = user;
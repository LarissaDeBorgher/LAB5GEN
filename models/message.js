// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const messageSchema = new Schema({
  user:  {type: String, required: true}, // String is shorthand for {type: String}
    message: {type: String, required: true},
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
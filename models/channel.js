const mongoose = require('mongoose');

const channelModel = new mongoose.Schema({
    name:{type:String, required:true},
    type:{type:String, required:true}
})

const ChannelModel = mongoose.model('ChannelModel',channelModel);
module.exports = ChannelModel;
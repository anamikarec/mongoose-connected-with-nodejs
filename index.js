const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const ChannelModel = require('./models/channel');
const app = express();
const dbUrl = process.env.dbUrl;
const PORT = 3000;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(dbUrl,connectionParams)
.then((res)=>{
console.log("connected to the db");
})
.catch((err)=>{
    console.log("Error:" + err);
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

app.get('/posts', (req, res)=>{
    var channelModel = new ChannelModel();
    channelModel.name = 'mongo'
    channelModel.type = 'atlas type'

    channelModel.save((err, data)=>{
        if(err) console.error(err);
        res.status(200).send(data);
    })
})

app.get('/read',(req, res)=>{
    ChannelModel.find((err, data)=>{
        if(err)
            return res.status(500).send(err);
        else
            return res.status(200).send(data);
    })
})
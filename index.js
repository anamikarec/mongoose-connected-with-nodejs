const mongoose = require('mongoose');
const express = require('express');
const ChannelModel = require('./models/channel');
const app = express();

const PORT = 3000;
const dbUrl = "mongodb+srv://anamika:mx9pRB8rZLI73Ya3@cluster0.vcsmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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
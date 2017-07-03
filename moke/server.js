let express =require('express');
let app=express();
let path=require('path')
let bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve('./dist')))
app.listen(3000);

let ad=require('./home/ad');
let list=require('./home/list');
let info=require('./detail/info');
let comment=require('./detail/comment.js');
let pubAd=require('./home/pub_ad.js');

app.get('/',function (req,res) {
    res.sendFile('./dist/index.html',{root:__dirname})
})

app.get('/api/ad',function (req,res) {
    res.send(ad)
})
app.get('/api/pubad',function (req,res) {
    res.send(pubAd)
})

app.get('/api/list/:city/:page',function (req,res) {
    res.send(list)
})

app.get('/api/detail/info/:id',function (req,res) {
    res.send(info)
});


app.get('/api/detail/talk/:id+/:page',function (req,res) {
    res.send(comment)
})
app.post('/api/content/',function (req,res) {
    res.send({ok:'ok'})
})

app.get('/api/search/:all/:query',function (req,res) {
    res.send(list)
})
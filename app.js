const express=require('express');
const app = express();
const port=80;
const path=require('path')

//set static files in node.js
app.use('/static',express.static('static'))

// set template engine as pug
app.set('view engine','pug')

//set the view directory
app.set('views',path.join(__dirname,'views'));

// Our pug demo endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title:'Title',message:'This is a message'})
})

app.get('/',(req,res)=>{
    res.send('My name is sayali')
})

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}/`)
})
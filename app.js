const express=require('express');
const app = express();
const port=80;

app.get('/',(req,res)=>{
    res.send('My name is sayali')
})

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}/`)
})
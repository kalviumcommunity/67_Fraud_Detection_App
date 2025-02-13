const express = require('express');
const app = express.Router();   

let data = [];

app.post('/items',(req,res)=>{
    const items = req.body;
    data.push(items);
    res.status(201).json({message:'Item is created ',});
})
app.get("/item",async(req,res)=>{
res.json(data);
})
app.put('/items',(req,res)=>{
    const {id} = req.parmas;
    const updateItems = req.body;
    data = data.map(items=>{
        items.id == id?updateItems : items
        res.json({message:'Item is updated'});
    })
   app.delete('/items',(req,res)=>{
    const {id} = req.params;
    data = data.filter(items =>{
        items.id != id
        res.json({message:'item is deleted'});
    })

   })
    })
    module.exports = app;

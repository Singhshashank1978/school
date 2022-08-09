const express=require('express');
const app = express();

app.get('/',(req,res)=> {
res.send('hello world express api use');
});

app.get('/api/courses',(req,res)=> {
   // res.send('hello world express api use');
    res.send (JSON.stringify([1,2,3]));
    });
    

    const port = process.env.PORT ||3000;
    app.listen(port,()=>console.log(`listen ${port}....`));
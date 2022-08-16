const express=require('express');
const app = express();

app.use(express.json());
const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
]

app.get('/',(req,res)=> {
res.send('hello world express api use');
});

app.get('/api/courses',(req,res)=> {
    res.send (courses);
    }
    );

 app.get('/api/courses/:id',(req,res)=> {
        // res.send('hello world express api use');
       const course= courses.find(c=>c.id=== parseInt(req.params.id)) ;
       if (!course) res.status(404).send('given id is not found');
       res.send(course);
        //res.send (req.params);
                  });

app.post('/api/courses',(req,res)=> {
const course = {id:courses.length + 1,
    name: req.body.name
};
                              });

const port = process.env.PORT ||3000;
    app.listen(port,()=>console.log(`listen ${port}....`));
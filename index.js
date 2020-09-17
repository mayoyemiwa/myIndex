const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'}
];

app.get('/', (req, res)=>{
        res.send('HELLO WORLD!!!')
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=> c.id===parseInt(req.params.id));
    if(course) return res.send(course);
      return res.status(404).send(`The course with the given ID ${req.params.id} was not found`);
});

app.post('/api/courses', (req, res,)=>{
    // const result= validateCourse(req.body.name);
    const Schema = {
        name: Joi.string().min(3).required() 
      }; 
     
      const result = Joi.validate(req.body.name, Schema); 
      const { value, error } = result; 
      if(error){ 
        res.status(422).send(result.error);
            return ;
}  
else if(value){
    const course = {
        id:courses.length + 1,
        name:req.body.name}

          courses.push(course);
    res.send(course);
}   
          
    });
    // const schema = {
    //     name:Joi.string().min(3).required()
    // }
    // const result = Joi.Validate(req.body, schema);
    // console.log(result);

    // if(!req.body.name || req.body.name.length<3){
    //     res.status(400).send('bad request and characters must be at least 3');
    //     return;
    // } 
//     const course = {
//         id:courses.length + 1,
//         name:req.body.name
// }
    // if(error){
    //     res.status(400).send(error.detals)
    // console.log(error.detals);
    // }
    // else{
    //     
    // };
// });

// function validateCourse(course){
//     const schema = Joi.object().keys({
//         name:Joi.string().min(3).max(15).required()
//     })
    // const result = Joi.validate(course, schema);
// };

// app.put('/api/courses/:id', (req, res)=>{
//     // look up for the id
//     const course = courses.find(c=> c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send(`The course with the given ID of ${req.params.id} does not exist`)
//     // validate the Request
//     const { error }= validateCourse(req.body);
//     if(error) return res.status(400).send(error.detals.message);
//     // Update the course
//     courses.name==req.body.name;
//     res.send(course);
// })


//     .with('name');
// schema.validate({ name: 'abc'});
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }
// try {
//     const value = await schema.validateAsync({ name: 'abc'});
// }
// catch (err) { }
//     return schema.validate(course, schema);
// };


// app.delete('/api/courses/:id', (req, res)=>{
//     const course = courses.find(c=> c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send(`The course with the given ID of ${req.params.id} was not found`)
//     else{
//         const Index = courses.indexOf(course);
//         courses.splice(Index, 1);
//         res.send(course);
//     }
// });

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening on port ${port}...`)});

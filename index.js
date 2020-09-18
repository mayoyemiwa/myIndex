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

app.post('/api/courses', async (req, res,)=>{
    const Schema = Joi.object({
        name: Joi.string().min(3).required() 
      })
      .with('name')
  
  
  schema.validate({ name: 'abc'});
  // -> { value: { username: 'abc', birth_year: 1994 } }
  
  schema.validate({});
  // -> { value: {}, error: '"username" is required' }
  
  // Also -
  
  try {
      const value = await schema.validateAsync({ name: 'abc'});
  
     if(value){
        const course = {
            id:courses.length + 1,
            name:req.body.name}
    
              courses.push(course);
        res.send(course);
  }
}
  catch (err) { 
  if(error){}
  res.status(422).send(result.error);
            return ;
}
      const result = Joi.validate(req.body.name, Schema); 
      const { value, error } = result; 
      
}  
  
          
    );

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening on port ${port}...`)});

const e = require('express')
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!in this seation')
})
const users=[
   {id:0,name:"janki",job:"app developer",email:"jon@gmail.com"}, 
  {id:1,name:"janki",job:"app developer",email:"jon@gmail.com"},
  {id:2,name:"tanki",job:"digital marketer developer",email:"ton@gmail.com"},
  {id:3,name:"panki",job:"web developer",email:"pon@gmail.com"},
  {id:4,name:"lahari",job:"shoter developer",email:"lahirn@gmail.com"},
  {id:5,name:"lahari",job:"shoter developer",email:"lahirn@gmail.com"},
  {id:6,name:"ittan",job:"android developer",email:"ittan@gmail.com"},
  {id:7,name:"polian",job:"websiite developer",email:"plian@gmail.com"}

]
// user paramitter
app.get('/users', (req, res) => {
    const search=req.query.search;
    if(search){
     
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }

    else{
        res.send(users)
    }
  
})
// app.amthod 
app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length;
    users.push(newUser)
    console.log('dan',req.body)
    res.json(newUser)
})
// dynamic api 
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user)
})

app.listen(port, () => {
  console.log('utfrujyteu',port)
});
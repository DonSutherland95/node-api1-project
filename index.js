const express = require("express")
const shortid = require('shortid')
const app = express()

app.use(express.json())

let users = [
    {
        id: shortid.generate(),
        name:'Jane Doe',
        bio:'Just a regular ole chick'
    },
]

app.get('/api/users', (req, res)=>{
    if(users){
        res.status(200).json(users)
    } else {
        res.status(500).json({errorMessage: 'The users information could not be retrieved.'})
    }
})

app.get('/api/users/:id', (req, res)=>{
    const { id } = req.params
    const user = users.find(user => user.id === id)
    // res.status(200).json(user)
    if(user){
        res.status(200).json(user)
    } else{
        res.status(404).json({message: 'The user with the specified ID does not exist.'})
    }
})




// catch-all endpoint
app.use('*', (req, res)=>{
 // req represents the request from the client
  // res represents the response we build for the client
    res.status(404).json({message: 'not found'})
})

// start the server
app.listen(5000, ()=>{
  console.log('listening on port 5000')
})
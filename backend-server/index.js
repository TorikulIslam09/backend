const express = require('express');
const app = express();
var cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id:'01', email:'torikul.dev@gmail.com', name:'torikul islam'},
    {id:'02', email:'rupok.dev@gmail.com', name:'tamim islam'},
    {id:'03', email:'akash.dev@gmail.com', name:'akash devnath'},
    {id:'04', email:'faruk.dev@gmail.com', name:'torikul islam'},
];

// user name: MDB1
// password: 6j73u1nguwmiKNz9


app.get('/users', (req, res) => {
  res.send(users);
});
app.post('/users', (req, res) => {
  const collectuser = req.body;
  collectuser.id = users.length + 1;
  users.push(collectuser);
  res.send(collectuser);

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
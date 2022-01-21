const express = require('express')
const app = express()
const port = 5000   // 4000해도 되고 5000해도 가능 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://luna:qhrhtlqek12@luna.w2omq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...')) // 연결이 성공 했을 때
.catch(err => console.log(err)) // 연결에 실패 했을 때


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
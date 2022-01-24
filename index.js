const express = require('express')
const app = express()
const port = 5000   // 4000해도 되고 5000해도 가능 

//bodyParser 가져오기
const bodyParser = require('body-parser');

// key.js 에서 몽고db 가져오기
const config = require('./config/key');

// User.js 가져오기
const { User } = require("./models/User");

// application/x_www-form-urlencoded <- 이렇게 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({ extended:true })); // bodyParser가 client에서 오는 정보를 server에서 분석해서 가져올 수 있게 해줌

// application/json 타입으로 된 것을 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, { // dev.js 안에 몽고 mongoURI 가져옴
}).then(() => console.log('MongoDB Connected...')) // 연결이 성공 했을 때
.catch(err => console.log(err)) // 연결에 실패 했을 때


app.get('/', (req, res) => {
  res.send(' I LOVE UUUU 💗 ')
})

app.post('/register',(req, res) => {

  // 회원 가입 시 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어줌
  // -> User.js를 가져옴

  const user = new User(req.body) // bodyParser를 이용해서 req.body로 클라이언트의 정보를 받아줌

  user.save((err, userInfo) => { // 몽고 디비에서 오는 메소드
    if(err) return res.json({ success : false, err}) // 저장을 할 때 에러났을 때
    return res.status(200).json({  // 성공했을 때 
      success : true
    })
  }) 
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
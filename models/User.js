const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, // trim : luna 4979@naver.com -> luna 뒤에 빈칸을 없애주는 역할
        unique : 1
    },
    password : {
        type : String,  // 비번을 넣었을 때 암호화 해서 들어가기 때문에 number가 아닌 String
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {        // user가 관리자가 될 수도 있고, 일반 유저가 될 수도 있기 때문에 
        type : Number,
        default : 0
    },
    image : String,
    token : {       // 유효성 관리
        type : String
    },
    tokenExp : {    // token 유효기간
        type : Number
    }

})


// 스키마를 모델로 감싸줌
//                          모델의 이름 , 스키마
const User = mongoose.model('User', userSchema)


// 이 모델을 다른 파일에서도 사용하기 위해
module.exports = {User}

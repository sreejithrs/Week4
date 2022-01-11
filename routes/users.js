var express = require('express');
const { render } = require('express/lib/response');
const res = require('express/lib/response');
var router = express.Router();
const url=require('url')

const user={name:'Sreejith R S',email:'sreejithrs001@gmail.com',pass:'sree'}

const products=[{
    img:'mobile2.jpg',
    name: 'Motorola 20',
    category:'mobile',
    description: 'Moto 20 with 8gb Ram'
  },
  {
    img:'mobile3.jpg',
    name:'Samsung S20',
    category:'mobile',
    description: 'Samsung S20 with 8gb Ram'
  },
  {
    img:'mobile4.jpg',
    name:'Redmi Note 7',
    category:'mobile',
    description: 'Redmi Note 7 with 4gb Ram'
  },
  {
    img:'mobile5.jpg',
    name:'Oppo F17',
    category:'mobile',
    description: 'Oppo F17 with 64mp Camera'
  },
  {
    img:'mobile6.jpg',
    name:'Redmi Note 10 pro',
    category:'mobile',
    description: 'Redmi Note 10 pro with 108mp camera'
  },
  {
    img:'mobile7.jpg',
    name:'Redmi Note 9 pro',
    category:'mobile',
    description: 'Redmi Note 9 pro with 64mp Camera'
  },
  {
    img:'mobile8.jpg',
    name:'Samsung S21',
    category:'mobile',
    description: 'Samsung S21 with Better Camera'
  },
  {
    img:'mobile9.jpg',
    name:'Samsung S20',
    category:'mobile',
    description: 'Samsung S20 with 64mp Camera'
  },
]
  

router.get('/',function(req,res,next){
    if(req.session.loggedIn){
        let user=req.session.user
        res.render('index',{products,user,head:true})
      }
      else{
        res.render('user-login')
      }
});


router.get('/signup',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }
  else{
    res.render('user-login')
  }
})


router.post('/signup',function(req,res,next){
    // let link=url.parse(req.url,true)
    req.session.loggedIn=true
    if(req.body.email==user.email && req.body.password==user.pass){
      console.log(req.body);
       
        req.session.user=user
        if(req.session.loggedIn){
          res.redirect('/')
        }
        else{
          res.render('user-login')
        }
       
    }
    else{
        let err="Invalid Username or Password"
        res.render('user-login',{err})
    }
  
})

router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})






  

module.exports = router;
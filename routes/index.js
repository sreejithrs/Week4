var express = require('express');
var router = express.Router();

/* GET users listing. */

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



const laptops=[{
  img:'lap-1.jpg',
  name: 'Dell Inspiron 15',
  category:'laptop',
  description: 'Moto 20 with 8gb Ram'
},
{
  img:'lap-2.jpg',
  name:'Mi Laptop',
  category:'laptop',
  description: 'Samsung S20 with 8gb Ram'
},
{
  img:'lap-3.jpg',
  name:'Dell Inspiron 14',
  category:'laptop',
  description: 'Redmi Note 7 with 4gb Ram'
},
{
  img:'lap-4.jpg',
  name:'HP Pavilion',
  category:'laptop',
  description: 'Oppo F17 with 64mp Camera'
},
{
  img:'lap-5.jpg',
  name:'Asus ROG',
  category:'laptop',
  description: 'Redmi Note 10 pro with 108mp camera'
},
{
  img:'lap-6.jpg',
  name:'Dell 13 x',
  category:'laptop',
  description: 'Redmi Note 9 pro with 64mp Camera'
},
{
  img:'lap-7.webp',
  name:'Asus Vivobook',
  category:'laptop',
  description: 'Samsung S21 with Better Camera'
},
{
  img:'lap-8.jpg',
  name:'Dell XPS',
  category:'laptop',
  description: 'Samsung S20 with 64mp Camera'
},
]
router.get('/', function(req, res, next) {
  if(req.session.loggedIn){
    let user=req.session.user
    res.redirect('index',{products,user,head:true})
  }
  else{
    res.render('/user-login')
  }
  
})

router.get('/table',(req,res,next)=>{
  if(req.session.loggedIn){
    let user=req.session.user
    res.render('view-products',{products,laptops,user,head:true})
  }
  else{
    res.render('/user-login')
  }

})

router.get('/laptops',(req,res)=>{
  if(req.session.loggedIn){
    let user=req.session.user
    res.render('laptops',{laptops,user,head:true})
  }
  else{
    res.render('user-login')
  }
})

module.exports = router;
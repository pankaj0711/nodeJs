let express=require('express')
let ejs=require('ejs')
let app=express()
let path=require('path')

app.set('view engine',ejs)  //set default view engine to ejs

app.set('views',path.join(__dirname,'views')) //////set default view path (preocess.cwd()+views) to new path (__dirname +views)

app.use(express.static(path.join(__dirname,"public")))//set default public path (preocess.cwd()+public) to new path (__dirname +public)

// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-

app.get('/sam',(req,res)=>{
    res.render('secound.ejs')
})

app.post('/sam',(req,res)=>{
    console.log(req.body)
    res.send(req.body)})



app.listen(9000,()=>{
    console.log('server connected at 9000')
})




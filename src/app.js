const express =require('express')
const path=require("path")
const hbs=require("hbs")
const app=express()
require("./db/conn")
const Register=require("./models/registers")


const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.use(express.static(static_path))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)


app.get("/",(req,res)=>{
res.render("register")
})

// creat new user in our data Base

    app.post("/register", async(req,res)=>{
        try{
            
            const registerEmployee=new Register({
                email:req.body.email,
                password:req.body.password
            })
           const registered=await registerEmployee.save()
           res.status(201).render("index")
       
        }catch(error){
            res.status(400).send(error)
        }
        })

app.listen(port,()=>{
    console.log(`server is running at port no ${port}  `)
})
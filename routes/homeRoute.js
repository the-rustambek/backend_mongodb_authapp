 const router = require("express").Router();
 const expressFileUpload = require("express-fileupload")
 router.get("/",(req,res)=>{
    //  console.log(req.db)
     res.render("index");
 });

 router.get("/signup", (req,res)=>{
    res.render("signup"); 
 })

   router.post("/signup",expressFileUpload(), async (req,res) =>{
      const oldUser  = await req.db.users.findOne({
         email:req.body.email
      })
      console.log(oldUser)
   
      //   console.log(req.body);
   //   console.log(req.files)
})

 module.exports ={
      path: "/",
      router,
 }
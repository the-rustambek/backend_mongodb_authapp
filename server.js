
const express = require("express")
const routes = require("./routes/routes") 
const app = express()

 app.listen(process.env.PORT || 80); 

 app.use(express.json())
 app.use(
     express.urlencoded({
         extended:true,
     })
 )

 app.use(express.static(__dirname + "/public"));
 app.set("view engine", "ejs")

 routes(app)
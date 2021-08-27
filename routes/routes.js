const homeRoute =  require("./homeRoute")

module.exports = function (app){
    app.use(homeRoute.path, homeRoute.router)
}
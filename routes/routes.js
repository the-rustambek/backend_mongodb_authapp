const homeRoute =  require("./homeRoute")

module.exports = async function (app){
    app.use(homeRoute.path, homeRoute.router)
}
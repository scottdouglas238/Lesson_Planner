// const db = require("../models");
const auth = require("./../routes/auth");

module.exports = function(app){

    app.use("/api/auth", auth);
    app.get("/", (req, res)=> res.send("Hello World Good Morning SunShine!"));

    

}

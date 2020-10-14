const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./passport/setup");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000 ;
const MONGO_URI = "mongodb://127.0.0.1:27017/lessons";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lessons", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log(`MongoDB connected ${MONGO_URI}`))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(
    session({
        secret: "very secrte this is",
        resave: false, 
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })  // mongooseConnection: mongoose.connection
})
);

app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/api-routes.js")(app);

app.listen(port, ()=> console.log(`Backend listening Listening On Port ${port}!`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

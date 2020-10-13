const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./passport/setup");

const app = express();
const port = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/tutorial_social_login";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true})
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err=> console.log(err));

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



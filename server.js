const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./config/passport");
// const logger = require("morgan");
const db = require("./models/user.js");
const isAuthenticated = require("./config/middleware/isAuthenticated");


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/lessons";

mongoose.connect("mongodb://localhost/lessons", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger("dev"));
// We need to use sessions to keep track of our user's login status
app.use(
    session({
        secret: "LessonsDB",
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/api-routes.js")(app);

app.listen(PORT, ()=> console.log(`Backend listening Listening On Port ${PORT}!`));



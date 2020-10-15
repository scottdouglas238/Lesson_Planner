const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const logger = require("morgan");
const path = require("path");
const MONGO_URI = "mongodb://127.0.0.1:27017/lpdb";
const passport = require("./config/passport");
const isAuthenticated = require("./config/middleware/isAuthenticated");
const app = express();
const db = require("./models/user")

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lpdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(console.log(`test ${MONGO_URI}`))
  .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/ping", isAuthenticated, function (req, res) {
  console.log(req.user);
  res.json({
    message: "ping!",
  });
});

//requring our routes
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

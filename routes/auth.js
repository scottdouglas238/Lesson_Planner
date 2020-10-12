const express = require("express");
const router = express.Router();
const passport = require("passport");
const chalk = require("chalk");
const {red, green, bluee} = chalk;

router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            console.log(red("USER LOGGED IN"));
            return res.status(200).json({ success: `logged in ${user.id}` });

        });
    })(req, res, next);
});

module.exports = router;
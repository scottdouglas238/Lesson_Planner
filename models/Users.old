const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
const UserSchema = new Schema({
  // The email cannot be null, and must be a proper email before creation
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // The password cannot be null
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
// const mongoose = require("mongoose");

// const ThirdPartyProviderSchema = new mongoose.Schema({
//     provider_name: {
//         type: String,
//         default: null
//     },
//     provider_id: {
//         type: String,
//         default: null
//     },
//     provider_data: {
//         type: {},
//         default: null
//     }
// });

// // Create Schema
// const UserSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         email_is_verified: {
//             type: Boolean,
//             default: false
//         },
//         password: {
//             type: String
//         },
//         referral_code: {
//             type: String,
//             default: function() {
//                 let hash = 0;
//                 for (let i = 0; i < this.email.length; i++) {
//                     hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
//                 }
//                 let res = (hash & 0x00ffffff).toString(16).toUpperCase();
//                 return "00000".substring(0, 6 - res.length) + res;
//             }
//         },
//         referred_by: {
//             type: String,
//             default: null
//         },
//         third_party_auth: [ThirdPartyProviderSchema],
//         date: {
//             type: Date,
//             default: Date.now
//         }
//     },
//     { strict: false }
// );

// module.exports = User = mongoose.model("users", UserSchema);


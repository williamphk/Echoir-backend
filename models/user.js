const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  createdAt: { type: Date, default: Date.now },
});

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String },
    birthday: { type: Date },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    picture: {
      type: String,
      default: "default",
    },
    work: { type: String },
    education: { type: String },
    city: { type: String },
  },
  {
    // Include these options to include virtual properties in the output
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

//Virtual for user's fullname
ProfileSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = {
  User,
  Profile,
};

const User = require("../model/user");

exports.getAllUser = (req, res, next) => {
  User.find()
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      console.log("inside getAllUser catch");
      console.log(err);
    });
};
exports.postUser = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNo: phoneNo,
  });
  newUser
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "user saved in the db successfully!", user: newUser });
    })
    .catch((err) => {
      console.log("inside postUser catch");
      console.log(err);
    });
};
exports.putUser = (req, res, next) => {
  const userId = req.params.userId;
  const updatedFirstName = req.body.firstName;
  const updatedLastName = req.body.lastName;
  const updatedEmail = req.body.email;
  const updatedPhoneNo = req.body.phoneNo;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "user not found" });
      }
      user.firstName = updatedFirstName;
      user.lastName = updatedLastName;
      user.email = updatedEmail;
      user.phoneNo = updatedPhoneNo;
      return user.save();
    })
    .then((result) => {
      res
        .status(201)
        .json({ message: "user updated successfully", user: result });
    })
    .catch((err) => {
      console.log("inside putUser catch");
      console.log(err);
    });
};
exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then((result) => {
      res.status(201).json({ message: "user deleted successfully" });
    })
    .catch((err) => {
      console.log("inside deleteUser catch");
      console.log(err);
    });
};

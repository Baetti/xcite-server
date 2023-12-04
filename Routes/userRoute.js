const express = require("express");
const userModel = require("../Models/userModel");

const router = express.Router();

// user registeration
router.post("/userregister", async function (req, res) {
  try {
    const newitem = new userModel(req.body);
    await newitem.save();
    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// user login
router.post("/userlogin", async function (req, res) {
  try {
    const result = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    delete result.password;
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

// router.post("/register", async function (req, res) {
//   try {
//     const { name, email, password } = req.body;

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(409).send("User with this email already exists");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new userModel({ name, email, password: hashedPassword });
//     await newUser.save();
//     res.send("User Added Successfully");
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

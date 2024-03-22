import User from "../models/userSchema";
import bycryptjs from bycryptjs;

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne(email);
    if (user) {
      return res.status(401).json({
        message: "User already exists.",
        success: false,
      });
    }

    const hashedPassword = await bycryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).send({
      message: "Account created successfully.",
      success: true
    });
  } catch (error) {
    console.log(error);
  }
};

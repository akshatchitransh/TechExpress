   import bcryptjs from "bcryptjs"
   import mongoose from "mongoose"
  import User from "../models/user.model.js"

   export const signup = async (req, res) => {

    const { username, email, password } = req.body

    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
    ) {
        return res.status(400).json({message : "all fields required"})
    }


     const hashedPassword = bcryptjs.hashSync(password, 10)

      const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()

    res.json("Signup successful")
  } catch (error) {
    return res.status(400).json({message : "err.message"})
  }

    }
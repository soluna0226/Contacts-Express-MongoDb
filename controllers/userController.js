const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler( async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User.create({ username, email, password: hashedPassword });
    if(newUser){
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else{
        res.status(400); 
        throw new Error("User data not valid");
    }
    res.json({ message: "Register the user" })
});

const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = 
        res.status(200).json({ accessToken });
    }
    res.json({ message: "login user" })
});

const currentUser = asyncHandler( async (req, res) => {
    res.json({ message: "current user" })
});

module.exports = { registerUser, loginUser, currentUser }
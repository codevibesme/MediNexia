import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try{
        const {
            email,
            password,
        } = await req.body;
        console.log(email, password);
        const duplicateUser = await User.findOne({email}).exec();
        if(duplicateUser) {
            console.log(duplicateUser);
            return res.status(409).json({message: "User with same email already Exists!"});
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json({user: savedUser});
    } catch(err){
        res.status(400).json({error: err.message});
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email}).exec();
        if(!user) return res.status(404).json({message: "No such user exists!"});
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(403).json({message: "INVALID CREDENTIALS!"});
        const token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN);
        delete user.password;
        res.status(200).json({user, token});
    } catch(err) { 
        res.status(400).json({error: err.message});
    }
};
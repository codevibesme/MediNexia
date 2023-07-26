import User from "../models/User.js";
import bcrypt from "bcrypt";
export const getUser = async (req, res) => {
    const { id } = await req.params;
    const user = await User.findOne({_id: id}).exec();
    if(!user) return res.status(400).json({message: "Not logged in!"});
    res.status(200).json({user});
}
export const editUser = async (req, res) => {
    const { id } =  await req.params;
    let filter = await req.body;
    console.log(filter);
    if(filter.password){
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(filter.password, salt);
        filter.password = hashedPassword;
    }
    console.log(filter);
    await User.findOneAndUpdate({_id: id}, filter);
    const user = await User.findById(id);
    console.log(user);
    if(!user) return res.status(500).json({error: "Failed to Update"});
    res.status(200).json({user});
};

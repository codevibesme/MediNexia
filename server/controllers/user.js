import User from "../models/User.js";
export const getUser = async (req, res) => {
    const { id } = await req.params;
    const user = await User.findOne({_id: id}).exec();
    if(!user) return res.status(400).json({message: "Not logged in!"});
    res.status(200).json({user});
}
export const editUser = async (req, res) => {
    const { id } =  await req.params;
    const filter = await req.body;
    await User.findByIdAndUpdate(id, filter);
    const user = await User.findById(id);
    if(!user) return res.status(500).json({error: "Failed to Update"});
    res.status(200).json({user});
};

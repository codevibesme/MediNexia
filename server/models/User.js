import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    picturePath: String,
    name: {
        type: String,
        required: true,
    },
    bio: String,
    phone: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, 
{timestamps: true},
);

const User = mongoose.model("User", userSchema);
export default User;
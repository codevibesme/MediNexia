import React from 'react'
import { useSelector } from "react-redux";
const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export default ProfilePage
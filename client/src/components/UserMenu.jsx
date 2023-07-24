import React from 'react'
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken, setIsLoggedIn } from '../slices/authSlice.js';
import { useNavigate } from 'react-router';
const UserMenu = () => {
    const user = useSelector((state)=>state.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        dispatch(setUser({user: null}));
        dispatch(setToken({token: ''}));
        dispatch(setIsLoggedIn({flag: false}));
        navigate('/login');
    }
    const handleClose = (e) => {
        console.log(e.target.id)
        const option = e.target.id;
        switch(option){
            case "Logout":
                handleLogout();
                break;
            case "Home":
                navigate("/home");
                break;
            case "Profile":
                navigate(0);
                break;
            default:
                setAnchorEl(null);
        }
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true": undefined}
            onClick={handleClick}
            sx={{color:"#333333", fontSize:"16px", position:"absolute", top:"2%", right:"2%"}}
        >
            <img alt="pic" style={{height:"36.69px", width:"32px", marginRight:"5px", visibility:`${user.picturePath? 'visible': 'hidden'}`}} />
            {user.name? `${user.name}` : "Hi, User"}
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem id="Profile" onClick={handleClose}>Profile</MenuItem>
            <MenuItem id="Home" onClick={handleClose}>Home Page</MenuItem>
            <MenuItem id="Logout" onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    )
}

export default UserMenu;
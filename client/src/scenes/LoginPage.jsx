import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { setUser, setIsLoggedIn, setToken } from "../slices/authSlice.js";
import { useDispatch } from 'react-redux';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = async (e)=>{
        let credentials = {
            email,
            password,
        }
        credentials = JSON.stringify(credentials);
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8000/auth/login", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: credentials
            });
            const { user, token } = await response.json();
            dispatch(setUser({user}));
            dispatch(setIsLoggedIn({flag: true}));
            dispatch(setToken({token}));
            if(user && token){
                const userId = await user._id;
                console.log("logged in successfully!");
                navigate(`/profile/${userId}`);
            }
        } catch(err){
            console.log(err.message);
        }
    }

    return (
        <Box className="loginContainer" sx={{display:"flex", flexDirection:"column"}}> 
                <div className="logoContainer" style={{display:"flex" }}>
                    <img src="assets/logo.png" alt="logo" className="logo" />
                    <Typography variant="h2" sx={{fontWeight:"600"}}>
                        MediNexia
                    </Typography>
                </div>
                <div style={{margin:"0 auto"}}>
                    <Typography variant="h6" sx={{fontWeight:"600", lineHeight:"24.52px", mb:"20px", textAlign:"center"}}> 
                        Welcome back!
                    </Typography>
                    <Typography variant="p" sx={{fontWeight:"400"}}>
                        Please Login to continue...
                    </Typography>
                </div>

                <form style={{margin:"5%"}} onSubmit={handleLogin}>
                    <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className="signUpBtn">Login</button>
                </form>
                <Typography variant="p" sx={{color:"#828282", alignSelf:"center", mt:"20px"}}>
                    Don't have an account? <button className="loginBtnTxt" onClick={()=>{navigate("/")}}>Sign up now</button>
                </Typography>
            </Box>
    )
}

export default LoginPage;
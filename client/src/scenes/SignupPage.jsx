import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        // e.preventDefault();
        // try{
        //     const credentials = {
        //         email,
        //         password
        //     };
        //     const response = await fetch("http://localhost:8000/auth/register", {
        //         method:"POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: credentials,
        //     });
        //     const { user } = await response.json();
        //     if(user){
        //         navigate("/login");
        //     }
        // } catch(err) {
        //     console.log(err.message);
        // }
    }
    return (
        <Box className="loginContainer" sx={{display:"flex", flexDirection:"column" }}> 
            <div className="logoContainer" style={{display:"flex" }}>
                <img src="assets/logo.png" alt="logo" className="logo" />
                <Typography variant="h2" sx={{fontWeight:"600"}}>
                    MediNexia
                </Typography>
            </div>
            <Typography variant="h6" sx={{fontWeight:"600", lineHeight:"24.52px", mb:"20px"}}> 
                Take charge of your health with a simple sign-up. Get started now!
            </Typography>
            <Typography variant="p" sx={{fontWeight:"400"}}>
                Your health is our priority, join thousands of others on their health journey.
            </Typography>

            <form style={{margin:"5%"}} onSubmit={handleRegister}>
                <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" className="signUpBtn">Sign up</button>
            </form>
            <Typography variant="p" sx={{color:"#828282", alignSelf:"center", mt:"20px"}}>
                Already a member? <button className="loginBtnTxt" onClick={()=>{navigate("/login")}}>Login</button>
            </Typography>
        </Box>
    );
};
export default SignupPage;
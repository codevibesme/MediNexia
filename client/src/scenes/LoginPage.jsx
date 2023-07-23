import React from "react";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
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

            <form style={{margin:"5%"}}>
                <input placeholder="Email" />
                <input placeholder="Password" />
                <button className="signUpBtn">Sign up</button>
            </form>
            <Typography variant="p" sx={{color:"#828282", alignSelf:"center", mt:"20px"}}>
                Already a member? <button className="loginBtnTxt">Login</button>
            </Typography>
        </Box>
    );
};
export default LoginPage;
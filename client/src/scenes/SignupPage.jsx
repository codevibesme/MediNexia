import React from 'react'
import { Box, Typography } from '@mui/material'
const SignupPage = () => {
  return (
    <Box className="loginContainer" sx={{display:"flex", flexDirection:"column"}}> 
            <div className="logoContainer" style={{display:"flex" }}>
                <img src="assets/logo.png" alt="logo" className="logo" />
                <Typography variant="h2" sx={{fontWeight:"600"}}>
                    MediNexia
                </Typography>
            </div>
            <div style={{margin:"0 auto"}}>
                <Typography variant="h6" sx={{fontWeight:"600", lineHeight:"24.52px", mb:"20px"}}> 
                    Welcome back!
                </Typography>
                <Typography variant="p" sx={{fontWeight:"400"}}>
                    Please Login to continue...
                </Typography>
            </div>

            <form style={{margin:"5%"}}>
                <input placeholder="Email" />
                <input placeholder="Password" />
                <button className="signUpBtn">Login</button>
            </form>
            <Typography variant="p" sx={{color:"#828282", alignSelf:"center", mt:"20px"}}>
                Don't have an account? <button className="loginBtnTxt">Sign up now</button>
            </Typography>
        </Box>
  )
}

export default SignupPage;
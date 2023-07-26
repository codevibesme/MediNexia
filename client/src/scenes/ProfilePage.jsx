import { Button, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from "react-redux";
import UserMenu from '../components/UserMenu';
import { useNavigate } from 'react-router';
const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log(user.picturePath);
    return (
        <>
        <UserMenu />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src="/assets/logo.png" alt="logo" className="logo" style={{height: "80px", width: "80px"}} />
            <Typography variant='h3'>MediNexia</Typography>
            
        </div>

        <div className='profile'>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignContent:"center",
                padding:"1% 5%",
                height:"10%"
            }}>
                <Typography sx={{fontSize:"24px"}}>Profile</Typography>
                <Button onClick={()=>navigate(`/profile/${user._id}/edit`)} variant='text' sx={{
                    borderRadius:"12px",
                    color:"#828282",
                    border:"1px solid #828282"
                }}>
                    Edit
                </Button>
            </div>
            <hr style={{width:"100%", border:"1px solid #D3D3D3"}}/>

            <div style={{
                display:"flex",
                alignContent:"center",
                padding:"1% 5%",
                height:"15%"
            }}>
                <Typography sx={{fontSize:"18px", color:"#BDBDBD"}}>Photo</Typography>
                <img alt="prof.pic" style={{
                    borderRadius:"12%",
                    position:"relative",
                    left:"30%",
                    height:"100%",
                    width:"10%",
                    visibility:`${user.picturePath? 'visible': 'hidden'}`,
                }}
                    src={user.picturePath? `http://localhost:8000/assets/${user.picturePath}` : "assets/no_prof.png"} 
                />
                
            </div>
            <hr style={{width:"100%", border:"1px solid #D3D3D3"}}/>

            <div style={{
                display:"flex",
                alignContent:"center",
                padding:"1% 5%",
                height:"10%"
            }}>
                <Typography sx={{fontSize:"18px", color:"#BDBDBD"}}>Name</Typography>
                <Typography sx={{
                    position:"relative",
                    left:"30%",
                    fontSize:"18px",
                    color:"#333333"
                }} >
                    {user.name}
                </Typography>
            </div>
            <hr style={{width:"100%", border:"1px solid #D3D3D3"}}/>

            <div style={{
                display:"flex",
                alignContent:"center",
                padding:"1% 5%",
                height:"10%"
            }}>
                <Typography sx={{fontSize:"18px", color:"#BDBDBD"}}>Phone</Typography>
                <Typography sx={{
                    position:"relative",
                    left:"30%",
                    fontSize:"18px",
                    color:"#333333"
                }} >
                    {user.phone}
                </Typography>
            </div>
            <hr style={{width:"100%", border:"1px solid #D3D3D3"}}/>

            <div style={{
                display:"flex",
                alignContent:"center",
                padding:"1% 5%",
                height:"10%"
            }}>
                <Typography sx={{fontSize:"18px", color:"#BDBDBD"}}>Email</Typography>
                <Typography sx={{
                    position:"relative",
                    left:"30%",
                    fontSize:"18px",
                    color:"#333333"
                }} >
                    {user.email}
                </Typography>
            </div>
            <hr style={{width:"100%", border:"1px solid #D3D3D3"}}/>

            <div style={{
                display:"flex",
                alignContent:"center",
                padding:"1% 5%"
            }}>
                <Typography sx={{fontSize:"18px", color:"#BDBDBD"}}>Password</Typography>
                <Typography sx={{
                    position:"relative",
                    left:"25%",
                    fontSize:"18px",
                    color:"#333333"
                }} >
                    **********
                </Typography>
            </div>
        </div>
        </>
        
    );
}

export default ProfilePage
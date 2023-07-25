import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { setUser } from '../slices/authSlice.js';
import { Typography } from '@mui/material';
import UserMenu from '../components/UserMenu.jsx';
const ProfileEditPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picturePath, setPicturePath] = useState('');
    const [file, setFile] = useState(null);
    const user = useSelector((state) => state.user);
    const imageRef = useRef(null);
    const handleSubmit = (e) => {

    };
    
    const handlePicChange = (e) => {
        const fileObj = e.target.files && e.target.files[0];
        const form = new FormData();
        form.append("picture", fileObj)
        setPicturePath(fileObj.name);
        setFile(form);
    };

    return (
        <>
            <UserMenu />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src="/assets/logo.png" alt="logo" className="logo" style={{height: "80px", width: "80px"}} />
                <Typography variant='h3'>MediNexia</Typography>            
            </div>
            <div className='profile update'>
                <Typography sx={{fontSize:"24px", fontWeight:"400", mb:"4%"}} gutterBottom >Update Info</Typography>
                <form style={{alignItems:"flex-start", justifyContent:"flex-start", marginTop:"2%", width:"100%", height:"100%"}}>
                    <div style={{display:"flex",marginBottom:"3%"}}>
                        <input type="file" ref={imageRef} style={{display:'none'}} onChange={handlePicChange}/>
                        <img src={user.picturePath?picturePath: "/assets/no_prof.png"} style={{height:"72px", width:"72px"}} alt="dp" onClick={()=>imageRef.current.click()}/>
                        <Typography sx={{position:"relative", left:"27.5px", fontSize:"13px", color:"#828282", textAlign:"center"}}>CHANGE PHOTO</Typography>
                    </div>
                    <label htmlFor='name'>Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" style={{margin:"0 0 2% 0", height:"8%", width:"80%"}} />
                    <label htmlFor='phone'>Phone</label>
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" style={{margin:"0 0 2% 0", height:"8%", width:"80%"}} />
                    <label htmlFor='email'>Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" style={{margin:"0 0 2% 0", height:"8%", width:"80%"}} />
                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" style={{margin:"0 0 2% 0", height:"8%", width:"80%"}} />
                    <button type="submit" style={{height:"12%", width:"20%", backgroundColor:"#2F80ED", color:"#FFFFFF", fontSize:"13px", borderRadius:"8px", mt:"20px", border:"0"}}>Save</button>
                </form>

            </div>
        </>
    )
}

export default ProfileEditPage
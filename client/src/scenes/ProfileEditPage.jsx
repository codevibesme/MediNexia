import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState, useRef } from 'react';
import { setUser } from '../slices/authSlice.js';
import { Button, Typography } from '@mui/material';
import UserMenu from '../components/UserMenu.jsx';
import { useEffect } from 'react';
const ProfileEditPage = () => {
    const user = useSelector((state) => state.user);
    const token = useSelector((state)=>state.token);
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [picturePath, setPicturePath] = useState('');
    const [file, setFile] = useState(new FormData());
    const [picSrc, setPicSrc] = useState('');
    const imageRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(user.picturePath){
            setPicSrc(`http://localhost:8000/assets/${user.picturePath}`);
        } else {
            setPicSrc('assets/no_prof.png');
        }
    }, [user.picturePath]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(name) file.append("name", name);
            if(email) file.append("email", email);
            if(phone) file.append("phone", phone);
            if(picturePath) file.append("picturePath", picturePath);
            if(password) file.append("password", password);
            const response = await fetch(`http://localhost:8000/user/${user._id}/edit`, {
                method:"PUT",
                headers:{
                    "Authorization": `Bearer ${token}`,
                },
                body:file,
            });
            const updatedUser = await response.json();
            if(updatedUser.user){
                dispatch(setUser({user: updatedUser.user}));
                navigate(0);
            }
        } catch(err) {
            console.log(err.message);
        }
    };

    const handlePicChange = (e) => {
        const fileObj = e.target.files && e.target.files[0];
        const fr = new FileReader();
        // DISPLAYING CHANGED IMAGE PREVIEW **********
        fr.readAsDataURL(fileObj);
        fr.onloadend = (e)=>{
            setPicSrc(e.target.result);
        }
        const form = new FormData();
        form.append("picture", fileObj)
        setPicturePath(fileObj.name);
        setFile(form);
    };

    return (
        <>
            <UserMenu />
            <div className='backNav'>
                <Button variant='text' size='large' onClick={()=>navigate(`/profile/${user._id}`)}>Back</Button>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src="/assets/logo.png" alt="logo" className="logo" style={{height: "80px", width: "80px"}} />
                <Typography variant='h3'>MediNexia</Typography>            
            </div>
            <div className='profile update'>
                <Typography sx={{fontSize:"24px", fontWeight:"400", mb:"4%"}} gutterBottom >Update Info</Typography>
                <form onSubmit={handleSubmit} style={{alignItems:"flex-start", justifyContent:"flex-start", marginTop:"2%", width:"100%", height:"100%"}}>
                    <div style={{display:"flex",marginBottom:"3%"}}>
                        <input type="file" ref={imageRef} style={{display:'none'}} onChange={handlePicChange}/>
                        <img src={picSrc} style={{height:"72px", width:"72px"}} alt="dp" onClick={()=>imageRef.current.click()}/>
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
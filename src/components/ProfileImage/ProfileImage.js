import React from 'react';
import './ProfileImage.css';
 import profile from '../../images/profile.png';

// function ProfileImage() {
const ProfileImage = (props) => {
    return ( 
        <div className="img-container">
            <img src={props.url || profile} alt="img" className="profile-pic" />
            {/* <input type="file" className='file-input' title="&nbsp;" src={props.url || profile } alt="img" accept="image/*" onChange={props.onChange} /> */}
            {/* <label htmlFor="file" src={props.url || profile} className='file-label-input' onChange={props.onChange} >Foto Hochladen</label> */}
        </div>
    );
}

export default ProfileImage;
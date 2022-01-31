import React from 'react';
import './ProfileImage.css';
 import profile from '../../images/profile.png';

// function ProfileImage() {
const ProfileImage = (props) => {
    return ( 
        <div className="img-container">
        {/* onChange={props.onChange}    src={props.url || profile} */}
            <label htmlFor="file-upload" className='custom-file-upload'>
                <img src={props.url || profile} alt="img" className="profile-pic" />
            </label>
            <input disabled={props.isInputDisabled} onChange={props.onChange} type="file" id="file-upload" title="&nbsp;" alt="img" accept="image/*"  />
            {/* <input type="file" className='file-input' title="&nbsp;" src={props.url || profile } alt="img" accept="image/*" onChange={props.onChange} /> */}
        </div>
    );
}

export default ProfileImage;
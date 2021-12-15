import React from 'react';
import './ProfileImage.css';
import profile from '../../images/profile.png';

function ProfileImage() {
    return (
        <div className="img-container">
            <img src={profile} alt="img" className="profile-pic"/>
        </div>
    );
}

export default ProfileImage;
import React from 'react';
import { Image } from 'react-bootstrap';
import background from '../assets/cover.jpg';
import avatar from '../assets/me.jpg';

const ProfileHeader = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: '240px', backgroundSize: 'cover' }}>
      <div className="position-relative" style={{ top: '140px', left: '20px' }}>
        <Image
          src={avatar}
          roundedCircle
          style={{
            border: '7px solid white',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;

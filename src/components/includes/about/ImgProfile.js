import React from 'react';

export const ImgProfile = React.memo( () => {
    return (
        <div className="col-lg-4 profile-img" data-aos="fade-right">
            <img src="assets/img/me.jpg" className="img-fluid" alt="Profile" />
        </div>
    )
})
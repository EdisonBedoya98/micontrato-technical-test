import React from 'react';

import errorImg from "@icons/error-img.jpg";
// import '@styles/Footer.css';

const Error = () => {
    return (
        <div className='error'>
            
        <img
          className="error__img"
          src={errorImg}
          alt="Error Img"
        />
        </div>
    );
}

export default Error;
import React from 'react';

import "@styles/NotFound.css";
import notFound from "@icons/error-not-found.png";

const NotFound = () => {
    return (
        <div className='error'>
            
        <img
          className="error__img"
          src={notFound}
          alt="Error Img"
        />
        </div>
    );
}

export default NotFound;
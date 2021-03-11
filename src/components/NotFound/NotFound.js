import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="error">
                <h1>Oops!</h1>
                <h2>404 Page Not Found</h2>
                <a href="/">Home</a>
            </div>
        </>
    );
};

export default NotFound;
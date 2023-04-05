
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status} =useRouteError();
    console.log(error.message, status);
    
    return (
        <div>
            <h1>{error.message}</h1>
            <p>{status}</p>

        </div>
    );
};

export default ErrorPage;
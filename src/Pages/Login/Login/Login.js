import React from 'react';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const {signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning" >Google sign In</button>
        </div>
    );
};

export default Login;
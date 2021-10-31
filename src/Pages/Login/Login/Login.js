import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
            history.push(redirect_uri)
        })
        
    }


    return (
        <div>
            <h2 className='text-primary my-5'>Please Log in</h2>
            <p>Right Now Sign In option only avaiable on Google Sign In</p>
            <button onClick={handleGoogleLogin} className="btn btn-warning my-5" >Google sign In</button>
        </div>
    );
};

export default Login;
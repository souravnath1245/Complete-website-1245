import React from 'react';
import useFirebase from './../Hooks/useFirebase';

const Login = () => {
    const {user, error, signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>This is Login Page. </h1>

            <h3> Please Login</h3>
            <button className="btn btn-warning" onClick={signInUsingGoogle}>Google Login</button>

            <span>{user.email}</span>
            {/* <span>{}</span> */}
        </div>
    );
};

export default Login;
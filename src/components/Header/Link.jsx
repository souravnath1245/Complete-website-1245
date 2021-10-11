
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Link = () => {
    const {user, logOut} = useFirebase();
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/review">Review</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            {
                user.email && 
            <button className="btn btn-primary btn-sm" onClick={logOut}>Log Out</button>
            }
        </div>
    );
};

export default Link;
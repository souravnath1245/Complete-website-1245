
import React from 'react';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Link from './Link';
import Home from '../../pages/Home';
import Review from '../../pages/Review';
import Service from './../../pages/Service';
import Register from './../../pages/Register';
import Login from './../../pages/Login';
import NotFound from './../../pages/NotFound';

const Navbar = () => {
    return (
        <div>
            <Router>
                <Link />
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/service'>
                        <Service />
                    </Route>
                    <Route path='/review'>
                        <Review />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
};

export default Navbar;
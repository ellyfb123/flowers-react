import React from 'react';
import { Route } from 'react-router';

import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';

const Router = () => (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
    </div>
);

export default Router;
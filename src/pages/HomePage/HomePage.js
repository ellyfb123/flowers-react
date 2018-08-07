import React from 'react';
import { connect } from 'react-redux';

import LayoutWrapper from '../../components/Layout/Layout';
import SignInForm from './HomePageForm'

const HomePage = ({ dispatch }) => (
    <div>
       <SignInForm />
    </div>
);

export default LayoutWrapper(connect(null)(HomePage));
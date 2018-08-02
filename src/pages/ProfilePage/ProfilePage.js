import React from 'react';
import { connect } from 'react-redux';

import LayoutWrapper from '../../components/Layout/Layout';

const HomePage = () => (
    <div>
        <h1>This is the second page</h1>
    </div>
);

export default LayoutWrapper(connect()(HomePage));
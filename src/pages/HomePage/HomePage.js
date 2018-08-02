import React from 'react';
import { connect } from 'react-redux';

import LayoutWrapper from '../../components/Layout/Layout';
import { customerValidate } from '../../modules/validate/action';

const HomePage = ({ dispatch }) => (
    <div>
       <label for="fistNameQuestion"> First Name </label>
       <input id="firstNameQuestion" type="text" />
       <button type="submit" onClick={() => {dispatch(customerValidate())}}> Submit </button>
       <h1>This is the first page</h1>
    </div>
);

export default LayoutWrapper(connect(null)(HomePage));
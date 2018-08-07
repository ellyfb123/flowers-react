import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customerValidate } from '../../modules/validate/action';

const submit = (dispatch) => () => {
    dispatch(customerValidate());
}

const SignInForm = props => {
  const { handleSubmit, pristine, reset, submitting, dispatch } = props
  return (
    <form onSubmit={handleSubmit(submit(dispatch))}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signIn'
})(SignInForm)
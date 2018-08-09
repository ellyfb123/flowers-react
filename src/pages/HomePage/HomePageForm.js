import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customerValidate } from '../../modules/validate/action';
import FormInput from '../../components/FormInput/FormInput';
import { uploadImage } from '../../modules/image/action';

const submit = (dispatch) => () => {
    dispatch(customerValidate());
}

const uploadFile = (progressPercentage, dispatch) => (e) => {
    e.preventDefault();
    dispatch(uploadImage(progressPercentage, e.target.files[0]));
}

const progressPercentage = dispatch => (percentage) => {
    dispatch({ type: 'UPDATE_PROGRESS_PERCENTAGE', payload: percentage });
};

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
          <Field
            name="file"
            label="Add file"
            type="file"
            id="upload-file"
            accept="image/*"
            onChange={uploadFile(progressPercentage, dispatch)}
            component={FormInput}
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
import React from 'react';

const FormInput = ({ id, label, children, input, ...others }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <div>
            <input id={id} {...input} {...others} autoComplete='off' value="" />
        </div>
        {children}
    </div>
);

export default FormInput;

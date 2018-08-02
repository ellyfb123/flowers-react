const initialState = {
    validation: true,
};

const validateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CUSTOMER_VALIDATE_SUC':
            return {
                validation: true,
            };
        case 'CUSTOMER_VALIDATE_FAIL':
            return {
                validation: false,
            };
        default:
    }
    return state;
};

export default validateReducer;
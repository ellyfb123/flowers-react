const initialState = {
    validation: true,
};

const validateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CUSTOMER_VALIDATE_SUC': {
            const attributes = action.payload.body.data.attributes;
            let validation = true;
            if (attributes.code === 'FAILED') {
                validation = false;
            }
            return { validation };
        }
        case 'CUSTOMER_VALIDATE_FAIL':
            return {
                validation: false,
            };
        default:
    }
    return state;
};

export default validateReducer;
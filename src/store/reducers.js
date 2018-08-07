import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import validate from '../modules/validate/reducer';

export default {
    router,
    validate,
    form: formReducer,
};
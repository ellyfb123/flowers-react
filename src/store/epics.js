import { combineEpics } from 'redux-most';


import { epic as validateEpic } from '../modules/validate/action';

export default combineEpics([
    ...validateEpic,
]);
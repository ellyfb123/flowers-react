import { combineEpics } from 'redux-most';


import { epic as validateEpic } from '../modules/validate/action';
import { epic as uploadImageEpic } from '../modules/image/action';

export default combineEpics([
    ...validateEpic,
    ...uploadImageEpic,
]);
import { getValidate } from '../../apis/validate';
import epicsCreator from '../../utils/epicsCreator';

const CUSTOMER_VALIDATE = 'CUSTOMER_VALIDATE';

export const customerValidate = () => ({ type: CUSTOMER_VALIDATE });

const validateEpic = epicsCreator(
    CUSTOMER_VALIDATE,
    getValidate,
);

export const epic = [
    validateEpic,
]
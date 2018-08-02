import { fromPromise } from 'most';
import { select } from 'redux-most';

export default (type, asyncFn, sucCallback, failCallback) => (action$, store) => {
    let isError = false;
    let originalAction = {};

    return action$.thru(select(type))
        .chain((action) => {
            originalAction = action;
            store.dispatch({
                type: 'START',
                meta: {
                    asyncPhase: 'START',
                    actionType: type,
                },
            });

            return fromPromise(asyncFn(action.payload)
                .then((res) => {
                    isError = false;
                    return res;
                })
                .catch((e) => {
                    isError = true;
                    return e;
                }));
        })
        .map((response) => {
            let data = response;
            if (!isError && sucCallback) {
                const callbackData = sucCallback(store, response, originalAction);
                if (callbackData) {
                    data = callbackData;
                }
            } else if (isError && failCallback) {
                const callbackData = failCallback(store, response, originalAction);
                if (callbackData) {
                    data = callbackData;
                }
            }

            return !isError
                ? { type: `${type}_SUC`, payload: data, meta: { asyncPhase: 'SUCCESS', actionType: type } }
                : { type: `${type}_FAIL`, payload: data, meta: { asyncPhase: 'FAILED', actionType: type } };
        });
};
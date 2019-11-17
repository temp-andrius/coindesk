export const COINDESK_REQUEST = 'COINDESK_REQUEST';
export const COINDESK_SUCCESS = 'COINDESK_SUCCESS';
export const COINDESK_FAILURE = 'COINDESK_FAILURE';

export const coindeskRequest = payload => ({ type: COINDESK_REQUEST, payload });
export const coindeskSuccess = payload => ({ type: COINDESK_SUCCESS, payload });
export const coindeskFailure = payload => ({ type: COINDESK_FAILURE, payload });

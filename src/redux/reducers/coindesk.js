import { createReducer } from '@reduxjs/toolkit';

export const initialStateCoindesk = {
  loading: false,
  data: null,
  error: null
};

export const coindesk = createReducer(initialStateCoindesk, {
  COINDESK_REQUEST: (state, action) => action.payload,
  COINDESK_SUCCESS: (state, action) => action.payload,
  COINDESK_FAILURE: (state, action) => action.payload
});

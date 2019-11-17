import { call, put, select, takeEvery } from 'redux-saga/effects';
import { coindeskAPI } from '../../api/coindesk';
import { COINDESK_REQUEST, coindeskSuccess, coindeskFailure } from '../actions/coindesk';

export function* fetchData() {
  const { coindesk } = yield select(state => state);

  try {
    const { data } = yield call(coindeskAPI.getCurrentPrice);
    yield put(coindeskSuccess({...coindesk, loading: false, data, error: null}));
  } catch (error) {
    yield put(coindeskFailure({...coindesk, loading: false, data: null, error: error.message}));
  }
}

export function* coindesk() {
  yield takeEvery(COINDESK_REQUEST, fetchData);
}

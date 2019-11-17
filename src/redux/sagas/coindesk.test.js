import { call, put, takeEvery } from 'redux-saga/effects';
import * as saga from './coindesk';
import { initialStateCoindesk } from  '../reducers/coindesk';
import { coindeskAPI } from '../../api/coindesk';
import { coindeskSuccess, coindeskFailure } from '../actions/coindesk';

it('generator coindesk should call generator fetchData on each action COINDESK_REQUEST', () => {
  const generator = saga.coindesk();
  expect(generator.next().value).toEqual(takeEvery('COINDESK_REQUEST', saga.fetchData));
  expect(generator.next().done).toBe(true);
});

describe('generator fetchData', () => {
  const state = { coindesk: initialStateCoindesk };
  let generator = saga.fetchData();
  generator.next();

  it('should call API', () => {
    expect(generator.next(state).value).toEqual(call(coindeskAPI.getCurrentPrice));
  });

  it('should call action creator coindeskSuccess', () => {
    expect(generator.next(state).value).toEqual(put(coindeskSuccess(
      { loading: false, data: undefined, error: null }
    )));
    expect(generator.next().done).toBe(true);
  });

  it('should call action creator coindeskFailure', () => {
    generator = saga.fetchData();
    generator.next();
    generator.next(state);
    expect(generator.next().value).toEqual(put(coindeskFailure(
      { loading: false, data: null, error: 'Cannot read property \'data\' of undefined' }
    )));
    expect(generator.next().done).toBe(true);
  });
});

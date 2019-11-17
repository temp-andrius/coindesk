import * as reducer from './coindesk';
import * as actions from '../actions/coindesk';

it('should have a correct initial state', () => {
  const expected = { loading: false, data: null, error: null };
  expect(reducer.initialStateCoindesk).toEqual(expected);
});

describe('should handle action', () => {
  it('COINDESK_REQUEST', () => {
    const expected = { loading: true, data: null, error: null };
    const request = reducer.coindesk(
      reducer.initialStateCoindesk,
      actions.coindeskRequest(expected)
    );
    expect(request).toEqual(expected);
  });

  it('COINDESK_SUCCESS', () => {
    const expected = { loading: false, data: 'Something data', error: null };
    const request = reducer.coindesk(
      reducer.initialStateCoindesk,
      actions.coindeskSuccess(expected)
    );
    expect(request).toEqual(expected);
  });

  it('COINDESK_FAILURE', () => {
    const expected = { loading: false, data: null, error: 'Something error' };
    const request = reducer.coindesk(
      reducer.initialStateCoindesk,
      actions.coindeskFailure(expected)
    );
    expect(request).toEqual(expected);
  });
});

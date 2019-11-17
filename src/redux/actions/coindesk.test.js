import * as actions from './coindesk';

describe('should have action type', () => {
  it('COINDESK_REQUEST', () => {
    expect(actions.COINDESK_REQUEST).toBe('COINDESK_REQUEST');
  });

  it('COINDESK_SUCCESS', () => {
    expect(actions.COINDESK_SUCCESS).toBe('COINDESK_SUCCESS');
  });

  it('COINDESK_FAILURE', () => {
    expect(actions.COINDESK_FAILURE).toBe('COINDESK_FAILURE');
  });
});

describe('should have action creator', () => {
  it('coindeskRequest as function', () => {
    expect(actions.coindeskRequest.name).toBe('coindeskRequest');
    expect(actions.coindeskRequest).toBeInstanceOf(Function);
  });

  it('coindeskRequest should return a correct object', () => {
    const expected = { payload: {}, type: 'COINDESK_REQUEST' };
    expect(actions.coindeskRequest({})).toEqual(expected);
  });

  it('coindeskSuccess as function', () => {
    expect(actions.coindeskSuccess.name).toBe('coindeskSuccess');
    expect(actions.coindeskSuccess).toBeInstanceOf(Function);
  });

  it('coindeskSuccess should return a correct object', () => {
    const expected = { payload: {}, type: 'COINDESK_SUCCESS' };
    expect(actions.coindeskSuccess({})).toEqual(expected);
  });

  it('coindeskFailure as function', () => {
    expect(actions.coindeskFailure.name).toBe('coindeskFailure');
    expect(actions.coindeskFailure).toBeInstanceOf(Function);
  });

  it('coindeskFailure should return a correct object', () => {
    const expected = { payload: {}, type: 'COINDESK_FAILURE' };
    expect(actions.coindeskFailure({})).toEqual(expected);
  });
});

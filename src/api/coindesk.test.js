import { coindeskAPI } from './coindesk';

describe('coindeskAPI', () => {
  it('should be an object', () => {
    expect(coindeskAPI).toEqual(expect.objectContaining({}));
  });

  it('should have a property getCurrentPrice', () => {
    expect(coindeskAPI).toHaveProperty('getCurrentPrice');
  });

  it('property getCurrentPrice should have a function currentPrice', () => {
    expect(coindeskAPI.getCurrentPrice).toBeInstanceOf(Function);
    expect(coindeskAPI.getCurrentPrice.name).toBe('currentPrice');
  });

  it('after call getCurrentPrice should return correct configuration', done => {
    coindeskAPI.getCurrentPrice().then(response => {
      const { method, url, headers } = response.config;
      expect(method).toBe('get');
      expect(url).toBe('https://api.coindesk.com/v1/bpi/currentprice.json');
      expect(headers).toHaveProperty('Content-Type', 'application/json; charset=utf-8');
      done();
    });
  });
});

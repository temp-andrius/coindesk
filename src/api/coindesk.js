import axios from 'axios';

const currentPrice = () => axios.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  }
);

export const coindeskAPI = {
  getCurrentPrice: currentPrice
};

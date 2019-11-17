import { all, spawn, call } from 'redux-saga/effects';
import { coindesk } from './sagas/coindesk';

export function* saga() {
  const sagas = [
    coindesk
  ];

  yield all(sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (error) {
        console.log(error);
      }
    }
  })));
}

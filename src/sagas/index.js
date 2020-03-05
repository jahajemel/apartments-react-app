import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchApartments() {

  const data = yield fetch('https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien')
    .then(response => response.json());

  yield put({ type: "FETCH_APARTMENTS", json: data || [{ error: data.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_APARTMENTS', fetchApartments)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

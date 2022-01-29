import { call, put, takeEvery } from 'redux-saga/effects'
import { getCatsSuccess } from './catState'
let value = 0

function* workGetCatsFetch() {
  value += 10
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield cats.json()
  const CatsShortened = formattedCats.slice(0, value)
  yield put(getCatsSuccess(CatsShortened))
}

function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga

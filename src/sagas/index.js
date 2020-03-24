import {
  take,
  put,
  call,
  fork,
  select,
  takeLatest,
  all
} from "redux-saga/effects";
import * as actions from "../actions";
import { getCarMakeAPI } from "../services/carMakeAPI";
import { getCarModelAPI } from "../services/carModelAPI";
import { getModels } from "../reducers/selectors";

export function* getAllMakes() {
  try {
    const carMakes = yield call(getCarMakeAPI);
    yield put(actions.getCarMakesSuccess(carMakes));
  } catch (error) {
    yield put(actions.getCarMakesFail(error));
  }
}

export function* getAllModels({ carMakeID }) {
  try {
    let carModelsArr = yield select(getModels, carMakeID);
    if (!carModelsArr) {
      carModelsArr = yield call(getCarModelAPI, carMakeID);
    }
    yield put(actions.getCarModelsSuccess({ carModelsArr, carMakeID }));
  } catch (error) {
    yield put(actions.getCarModelsFail(error));
  }
}

export function* watchGetAllMakes() {
  yield takeLatest(actions.GET_CAR_MAKES_REQUEST, getAllMakes);
}

export function* watchGetAllModels() {
  yield takeLatest(actions.GET_CAR_MODELS_REQUEST, getAllModels);
}

export default function* root() {
  yield all([fork(watchGetAllMakes), fork(watchGetAllModels)]);
}

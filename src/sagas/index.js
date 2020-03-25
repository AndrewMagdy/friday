import { put, retry, fork, select, takeLatest, all } from "redux-saga/effects";
import * as actions from "../actions";
import { getCarMakeAPI } from "../services/carMakeAPI";
import { getCarModelAPI } from "../services/carModelAPI";
import { getRegVehiclesAPI } from "../services/regVehicleAPI";
import { getModels } from "../reducers/selectors";
import { getVehicles } from "../reducers/selectors";

export function* getAllMakes() {
  try {
    const carMakes = yield retry(5, 1000, getCarMakeAPI);
    yield put(actions.getCarMakesSuccess(carMakes));
  } catch (error) {
    yield put(actions.getCarMakesFail(error));
  }
}

export function* getAllModels({ carMakeID }) {
  try {
    let carModelsArr = yield select(getModels, carMakeID);
    if (!carModelsArr) {
      carModelsArr = yield retry(5, 1000, getCarModelAPI, carMakeID);
    }
    yield put(actions.getCarModelsSuccess({ carModelsArr, carMakeID }));
  } catch (error) {
    yield put(actions.getCarModelsFail(error));
  }
}

export function* getAllRegVehicles({ carMakeID, carModelID }) {
  try {
    let regVehiclesArr = yield select(getVehicles, `${carMakeID}_${carModelID}`);
    if (!regVehiclesArr) {
      regVehiclesArr = yield retry(
        5,
        1000,
        getRegVehiclesAPI,
        carMakeID,
        carModelID
      );
    }
    yield put(
      actions.getAllRegVehiclesSuccess({
        regVehiclesArr,
        carMakeID,
        carModelID
      })
    );
  } catch (error) {
    yield put(actions.getAllRegVehiclesFail(error));
  }
}

export function* watchGetAllMakes() {
  yield takeLatest(actions.GET_CAR_MAKES_REQUEST, getAllMakes);
}

export function* watchGetAllModels() {
  yield takeLatest(actions.GET_CAR_MODELS_REQUEST, getAllModels);
}

export function* watchGetRegVehicle() {
  yield takeLatest(actions.GET_REG_VEHICLES_REQUEST, getAllRegVehicles);
}

export default function* root() {
  yield all([
    fork(watchGetAllMakes),
    fork(watchGetAllModels),
    fork(watchGetRegVehicle)
  ]);
}

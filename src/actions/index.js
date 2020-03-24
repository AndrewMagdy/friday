export const GET_CAR_MAKES_REQUEST = "GET_CAR_MAKES_REQUEST";
export const GET_CAR_MAKES_SUCCESS = "GET_CAR_MAKES_SUCCESS";
export const GET_CAR_MAKES_FAIL = "GET_CAR_MAKES_FAIL";

export const getCarMakesRequest = () => ({ type: GET_CAR_MAKES_REQUEST });

export const getCarMakesSuccess = payload => ({
  type: GET_CAR_MAKES_SUCCESS,
  payload
});

export const getCarMakesFail = error => ({
  type: GET_CAR_MAKES_FAIL,
  error
});

export const GET_CAR_MODELS_REQUEST = "GET_CAR_MODELS_REQUEST";
export const GET_CAR_MODELS_SUCCESS = "GET_CAR_MODELS_SUCCESS";
export const GET_CAR_MODELS_FAIL = "GET_CAR_MODELS_FAIL";

export const getCarModelsRequest = carMakeID => ({
  type: GET_CAR_MODELS_REQUEST,
  carMakeID
});

export const getCarModelsSuccess = payload => ({
  type: GET_CAR_MODELS_SUCCESS,
  payload
});

export const getCarModelsFail = error => ({
  type: GET_CAR_MODELS_FAIL,
  error
});

import * as actions from "../actions/";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_CAR_MODELS_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_CAR_MODELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        carModels: {
          ...state.carModels,
          [action.payload.carMakeID]: action.payload.carModelsArr
        }
      };

    case actions.GET_CAR_MODELS_FAIL:
      return { ...state, isFetching: false, error: action.error };

    default:
      return state;
  }
};

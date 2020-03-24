import * as actions from "../actions/";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_CAR_MAKES_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_CAR_MAKES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        carMakes: action.payload
      };

    case actions.GET_CAR_MAKES_FAIL:
      return { ...state, isFetching: false, error: action.error };

    default:
      return state;
  }
};

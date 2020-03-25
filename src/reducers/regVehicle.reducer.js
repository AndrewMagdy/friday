import * as actions from "../actions/";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.GET_REG_VEHICLES_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_REG_VEHICLES_SUCCESS:
      const { carMakeID, carModelID, regVehiclesArr } = action.payload;
      return {
        ...state,
        isFetching: false,
        regVehicles: {
          ...state.regVehicle,
          [`${carMakeID}_${carModelID}`]: regVehiclesArr
        }
      };

    case actions.GET_REG_VEHICLES_FAIL:
      return { ...state, isFetching: false, error: action.error };

    default:
      return state;
  }
};

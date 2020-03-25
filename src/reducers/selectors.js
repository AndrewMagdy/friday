export const getModels = (state, carMakeID) =>
  state.carModel.carModels[carMakeID];
export const getVehicles = (state, vehicleID) =>
  state.regVehicle.regVehicles[vehicleID];

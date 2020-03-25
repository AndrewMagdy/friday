import axios from "axios";

export const getRegVehiclesAPI = (make, model) => {
  return axios
    .get(`${process.env.REACT_APP_API_END_POINT}/vehicles`, {
      params: { make, model }
    })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

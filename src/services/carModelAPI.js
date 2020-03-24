import axios from "axios";

export const getCarModelAPI = carMakeID => {
  return axios
    .get(`${process.env.REACT_APP_API_END_POINT}/models`, {
      params: { make: carMakeID }
    })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

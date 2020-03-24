import axios from 'axios';

export const getCarMakeAPI = () => {
  return axios
    .get(`${process.env.REACT_APP_API_END_POINT}/makes`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

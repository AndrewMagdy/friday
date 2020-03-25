import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getALLRegVehiclesRequest } from "../actions";
import RegVehicle from "../components/RegVehicle";

const RegVehicleContainer = () => {
  const dispatch = useDispatch();
  const { make, model } = useParams();

  const { regVehicles, isFetching } = useSelector(({ regVehicle }) => ({
    regVehicles: regVehicle.regVehicles[`${make}_${model}`],
    isFetching: regVehicle.isFetching
  }));

  useEffect(() => {
    dispatch(getALLRegVehiclesRequest(make, model));
  }, []);


  if (isFetching) {
    return <div> Loading </div>;
  }

  if (!regVehicles || !regVehicles.length) {
    return <div> Not Found</div>;
  }
  return <RegVehicle regVehicles={regVehicles} />;
};

export default RegVehicleContainer;

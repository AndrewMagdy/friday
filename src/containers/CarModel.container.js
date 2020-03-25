import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarModelsRequest } from "../actions";
import CarModel from "../components/CarModel";

const CarMakeContainer = () => {
  const dispatch = useDispatch();
  const { make } = useParams();
  const { carModels, isFetching } = useSelector(({ carModel }) => ({
    carModels: carModel.carModels[make],
    isFetching: carModel.isFetching
  }));

  useEffect(() => {
    dispatch(getCarModelsRequest(make));
  }, []);

  if (isFetching) {
    return <div> Loading </div>;
  }

  if (!carModels || !carModels.length) {
    return <div> Not Found</div>;
  }
  return <CarModel make={make} carModels={carModels} />;
};

export default CarMakeContainer;

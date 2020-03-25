import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarModelsRequest } from "../actions";
import CarModel from "../components/CarModel";

const CarMakeContainer = () => {
  const dispatch = useDispatch();
  const { make } = useParams();
  const carModels = useSelector(({ carModel }) => carModel.carModels[make]);

  useEffect(() => {
    dispatch(getCarModelsRequest(make));
  }, []);

  if (!carModels || !carModels.length) {
    return <div> Not Found</div>;
  }
  return <CarModel make={make} carModels={carModels} />;
};

export default CarMakeContainer;

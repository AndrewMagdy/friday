import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCarMakesRequest } from "../actions";
import CarMake from "../components/CarMake";

const CarMakeContainer = () => {
  const dispatch = useDispatch();
  const carMakes = useSelector(({ carMake }) => carMake.carMakes);

  useEffect(() => {
    dispatch(getCarMakesRequest());
  }, []);

  return <CarMake carMakes={carMakes} />;
};

export default CarMakeContainer;

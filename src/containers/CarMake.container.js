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

  if (!carMakes || !carMakes.length) {
    return <div> Not Found</div>;
  }

  return <CarMake carMakes={carMakes} />;
};

export default CarMakeContainer;

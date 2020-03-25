import React, { useState } from "react";
import AlphabetList from "./AlphabetList";
import CarList from "./CarList";
import { useHistory } from "react-router-dom";
import { throttle } from "lodash";

const CarModel = ({ make, carModels }) => {
  const history = useHistory();
  const [currLetter, setCurrLetter] = useState("A");
  const carModelDict = {};

  for (let carModel of carModels) {
    let firstChar = carModel[0].toUpperCase();
    if (!carModelDict[firstChar]) {
      carModelDict[firstChar] = [];
    }
    carModelDict[firstChar].push(carModel);
  }

  const handleScroll = throttle(firstVisibleLetter => {
    setCurrLetter(firstVisibleLetter);
  }, 50);


  const onChangeLetter = newLetter => {
    setCurrLetter(newLetter);
  };

  return (
    <div style={{ backgroundColor: "#F8F6FC" }}>
      <CarList
        handleScroll={handleScroll}
        handleClick={id => history.push(`/car/${make}/${id}`)}
        carMap={carModelDict}
      ></CarList>

      <AlphabetList
        letters={Object.keys(carModelDict)}
        currLetter={currLetter}
        onChangeLetter={onChangeLetter}
      />
    </div>
  );
};

export default CarModel;

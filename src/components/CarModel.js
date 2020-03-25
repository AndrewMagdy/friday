import React, { useState, useRef } from "react";
import AlphabetList from "./AlphabetList";
import CarList from "./CarList";
import { useHistory } from "react-router-dom";

const containerStyle = { backgroundColor: "#F8F6FC" };

const CarModel = ({ make, carModels }) => {
  const history = useHistory();
  const [currLetter, setCurrLetter] = useState("A");
  const isScrubbing = useRef(false);

  const carModelDict = {};

  for (let carModel of carModels) {
    let firstChar = carModel[0].toUpperCase();
    if (!carModelDict[firstChar]) {
      carModelDict[firstChar] = [];
    }
    carModelDict[firstChar].push(carModel);
  }

  const handleScroll = firstVisibleLetter => {
    if (!isScrubbing.current) {
      setCurrLetter(firstVisibleLetter);
    }
  };

  const onChangeLetter = newLetter => {
    const el = document.getElementById(`${newLetter}Anchor`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrLetter(newLetter);
  };

  return (
    <div style={containerStyle}>
      <CarList
        handleScroll={firstVisibleLetter => handleScroll(firstVisibleLetter)}
        handleClick={id => history.push(`/car/${make}/${id}`)}
        carMap={carModelDict}
      ></CarList>

      <AlphabetList
        letters={Object.keys(carModelDict)}
        currLetter={currLetter}
        onChangeLetter={onChangeLetter}
        handleTouchStart={() => {
          isScrubbing.current = true;
        }}
        handleTouchEnd={() => {
          setTimeout(() => {
            isScrubbing.current = false;
          }, 100);
        }}
      />
    </div>
  );
};

export default CarModel;

import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import AlphabetList from "./AlphabetList";
import CarList from "./CarList";

const containerStyle = { backgroundColor: "#F8F6FC" };

const CarMake = ({ carMakes }) => {
  const history = useHistory();
  const [currLetter, setCurrLetter] = useState("A");
  const isScrubbing = useRef(false);
  const carMakeDict = {};

  for (let carMake of carMakes) {
    let firstChar = carMake[0].toUpperCase();
    if (!carMakeDict[firstChar]) {
      carMakeDict[firstChar] = [];
    }
    carMakeDict[firstChar].push(carMake);
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
        handleScroll={handleScroll}
        handleClick={id => history.push(`/models/${id}`)}
        carMap={carMakeDict}
      ></CarList>
      <AlphabetList
        letters={Object.keys(carMakeDict)}
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

export default CarMake;

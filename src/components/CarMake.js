import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlphabetList from "./AlphabetList";
import CarList from "./CarList";

const CarMake = ({ carMakes }) => {
  const history = useHistory();
  const [currLetter, setCurrLetter] = useState("A");
  const carMakeDict = {};

  for (let carMake of carMakes) {
    let firstChar = carMake[0].toUpperCase();
    if (!carMakeDict[firstChar]) {
      carMakeDict[firstChar] = [];
    }
    carMakeDict[firstChar].push(carMake);
  }

  const handleScroll = firstVisibleLetter => {
    setCurrLetter(firstVisibleLetter);
  };

  const onChangeLetter = newLetter => {
    const el = document.getElementById(`${newLetter}Anchor`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrLetter(newLetter);
  };

  return (
    <div style={{ backgroundColor: "#F8F6FC" }}>
      <CarList
        handleScroll={handleScroll}
        handleClick={id => history.push(`/models/${id}`)}
        carMap={carMakeDict}
      ></CarList>
      <AlphabetList
        letters={Object.keys(carMakeDict)}
        currLetter={currLetter}
        onChangeLetter={onChangeLetter}
      />
    </div>
  );
};

export default CarMake;

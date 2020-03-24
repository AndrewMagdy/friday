import React, { useState } from "react";
import { throttle } from "lodash";

const AlphabetList = ({ letters, currLetter, onChangeLetter }) => {
  const throttledOnTouchMove = throttle(e => {
    const max = window.innerHeight;
    const step = max / letters.length;

    let yPos = e.touches[0].clientY;
    let idx = 0;
    if (yPos > 0 && yPos < max) {
      idx = Math.floor(yPos / step);
    } else {
      idx = yPos <= 0 ? 0 : letters.length - 1;
    }
    onChangeLetter(letters[idx]);
  }, 15);

  const onTouchMove = e => {
    e.persist();
    throttledOnTouchMove(e);
  };

  return (
    <div
      onTouchMove={onTouchMove}
      style={{
        position: "fixed",
        zIndex: "1000",
        textAlign: "center",
        height: "100%",
        top: "0",
        right: "0",
        padding: ".5em .5em .5em 1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        userSelect: "none",
        touchAction: "none"
      }}
    >
      {letters.map(letter => (
        <div
          onClick={() => {
            onChangeLetter(letter);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          {currLetter === letter && (
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "10px",
                color: "white",
                backgroundColor: "black",
                textAlign: "center"
              }}
            >
              {letter}
            </div>
          )}
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AlphabetList;

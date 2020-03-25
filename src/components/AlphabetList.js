import React, { useState } from "react";
import { throttle } from "lodash";

const containerStyle = {
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
};

const letterStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  transition: "margin 0.8s"
};

const bubbleStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  marginRight: "10px",
  color: "white",
  backgroundColor: "black",
  textAlign: "center"
};

const AlphabetList = ({
  letters,
  currLetter,
  onChangeLetter,
  handleTouchStart,
  handleTouchEnd
}) => {
  const [isScrubbing, setIsScrubbing] = useState(false);

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
  }, 50);

  const onTouchMove = e => {
    e.persist();
    throttledOnTouchMove(e);
  };

  return (
    <div
      onTouchStart={() => {
        setIsScrubbing(true);
        handleTouchStart();
      }}
      onTouchEnd={() => {
        setIsScrubbing(false);
        handleTouchEnd();
      }}
      onTouchMove={onTouchMove}
      style={containerStyle}
    >
      {letters.map(letter => (
        <div
          key={letter}
          onClick={() => {
            onChangeLetter(letter);
          }}
          style={{
            ...letterStyle,
            marginRight: isScrubbing
              ? `calc(
                  min(50vw, 200px) -
                    ${Math.abs(
                      letter.charCodeAt(0) - currLetter.charCodeAt(0)
                    ) * 10}px
                )`
              : 0
          }}
        >
          {currLetter === letter && <div style={bubbleStyle}>{letter}</div>}
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AlphabetList;

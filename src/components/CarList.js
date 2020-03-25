import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center"
};

const letterHeaderStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  padding: "2%"
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "10vh",
  width: "50vw",
  border: "1px solid #D7D6DA",
  backgroundColor: "#fff",
  cursor: "pointer"
};

const labelStyle = { fontSize: "16px", fontWeight: 400 };

const CarList = ({ handleScroll, handleClick, carMap }) => {
  const onScroll = useCallback(() => {
    // https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
    const isScrolledIntoView = el => {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true:
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    };
    for (let key in carMap) {
      const el = document.getElementById(`${key}Anchor`);
      if (!el) {
        return;
      }
      if (isScrolledIntoView(el)) {
        handleScroll(key);
        break;
      }
    }
  });

  useEffect(() => {
    const debouncedFunc = debounce(onScroll, 50);
    window.addEventListener("scroll", debouncedFunc);
    return () => window.removeEventListener("scroll", debouncedFunc);
  }, []);

  return (
    <div style={containerStyle}>
      {Object.keys(carMap).map(letter => (
        <div key={letter}>
          <div style={letterHeaderStyle} id={`${letter}Anchor`}>
            {letter}
          </div>
          {carMap[letter].map(car => (
            <button
              key={car}
              onClick={() => handleClick(car)}
              style={buttonStyle}
            >
              <label style={labelStyle}>{car}</label>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarList;

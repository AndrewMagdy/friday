import React, { useEffect, useCallback } from "react";
import { throttle } from "lodash";

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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttle(onScroll, 50));
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center"
      }}
    >
      {Object.keys(carMap).map(letter => (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              padding: "2%"
            }}
            id={`${letter}Anchor`}
          >
            {letter}
          </div>
          {carMap[letter].map(car => (
            <button
              onClick={() => handleClick(car)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "10vh",
                width: "50vw",
                border: "1px solid #D7D6DA",
                backgroundColor: "#fff",
                cursor: "pointer"
              }}
            >
              <label style={{ fontSize: "16px", fontWeight: 400 }}>{car}</label>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarList;

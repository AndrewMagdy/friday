import React from "react";

const CarList = ({ handleClick, carMap }) => {
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

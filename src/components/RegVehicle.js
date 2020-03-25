import React, { useState } from "react";

const RegVehicle = ({ regVehicles }) => {
  console.log(regVehicles);
  return (
    <div
      style={{
        backgroundColor: "#F8F6FC",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {Object.keys(regVehicles[0]).map(key => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "10vh",
              width: "10vw",
              border: "1px solid #D7D6DA",
              backgroundColor: "#fff",
              cursor: "pointer"
            }}
          >
            <label style={{ fontSize: "14px" }}>{key}</label>
          </div>
        ))}
      </div>
      {regVehicles.map(regVehicle => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "10vh",
            border: "1px solid #D7D6DA",
            backgroundColor: "#fff",
            cursor: "pointer"
          }}
        >
          {Object.values(regVehicle).map(value => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "10vh",
                width: "10vw",
                border: "1px solid #D7D6DA",
                backgroundColor: "#fff",
                cursor: "pointer"
              }}
            >
              <label style={{ fontSize: "16px" }}>{value}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RegVehicle;

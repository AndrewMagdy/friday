import React from "react";

const containerStyle = {
  backgroundColor: "#F8F6FC",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center"
};

const headerRowStyle = { display: "flex", flexDirection: "row" };

const rowContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "10vh",
  border: "1px solid #D7D6DA",
  backgroundColor: "#fff",
  cursor: "pointer"
};
const rowItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10vh",
  width: "10vw",
  border: "1px solid #D7D6DA",
  backgroundColor: "#fff",
  cursor: "pointer"
};
const RegVehicle = ({ regVehicles }) => {
  return (
    <div style={containerStyle}>
      <div style={headerRowStyle}>
        {Object.keys(regVehicles[0]).map(key => (
          <div key={key} style={rowItemStyle}>
            <label style={{ fontSize: "14px" }}>{key}</label>
          </div>
        ))}
      </div>
      {regVehicles.map((regVehicle, idx) => (
        <div key={idx} style={rowContainerStyle}>
          {Object.values(regVehicle).map((value, idx) => (
            <div key={value + idx} style={rowItemStyle}>
              <label style={{ fontSize: "16px" }}>{value}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RegVehicle;

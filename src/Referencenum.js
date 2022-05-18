import React from "react";
import { useParams } from "react-router-dom";

const Reference = () => {
  const backClick = () => {
    window.location.href = "/";
  };

  const { id } = useParams();
  return (
    <div>
      <h2>Reference number is : {id}</h2>
      <button
        style={{
          borderRadius: "8px",
          color: "white",
          backgroundColor: "blue",
          padding: "10px 24px"
        }}
        onClick={backClick}
      >
        Back
      </button>
    </div>
  );
};

export default Reference;

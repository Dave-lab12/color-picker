import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const time = setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  });
  return (
    <>
      <article
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hex}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </article>
    </>
  );
};

export default SingleColor;

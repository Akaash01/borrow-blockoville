import React, { useState } from "react";
const DropDown = ({ selected, setSelected }) => {
  const options = [
    { key: 1, value: "AXS", imgSrc: "./images/AXS.svg" },
    { key: 2, value: "BTC", imgSrc: "./images/BTC.svg" },
    { key: 3, value: "ETH", imgSrc: "./images/eth.svg" },
  ];

  const [isActive, toggleActive] = useState(false);
  return (
    <div className="dropdownWrapper">
      <div
        className={`dropdown-btn ${isActive && "dropdown-btn-active"}`}
        onClick={(e) => toggleActive(!isActive)}
      >
        <div className="selectedItem dropdown-item">
          <span>
            <img src={selected.imgSrc} alt={selected.value}></img>
          </span>
          <p>{selected.value}</p>
        </div>
        <img src="./images/dropdown.svg" alt="dropdown-icon"></img>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                setSelected({ ...option });
                toggleActive(!isActive);
              }}
            >
              <span>
                <img src={option.imgSrc} alt={option.value}></img>
              </span>
              <p>{option.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropDown;

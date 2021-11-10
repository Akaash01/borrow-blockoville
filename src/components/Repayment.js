import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import DropDown from "./DropDown";
const Repayment = () => {
  const [selected, setSelected] = useState({
    key: 1,
    value: "AXS",
    imgSrc: "./images/AXS.svg",
  });
  return (
    <div className="repaymentContainer">
      <div className="repaymentLeft">
        <form className="renameForm">
          <label htmlFor="Repayment Amount">
            <p className="labelText">Repayment Amount</p>
            <div className="inputContainer">
              <input
                id="repaymentAmount"
                type="text"
                placeholder="Enter Amount"
              />
              <div className="maxUsdt">
                <p className="max">Max</p>
                <p className="usdt">USDT</p>
              </div>
            </div>
            <div className="maxUsdtBottom">
              <p className="max">Max</p>
              <p className="usdt">47.065643 USDT</p>
            </div>
          </label>
          <div className="choosePartPayment">
            <p className="labelText">Choose Part Payment</p>
            <div className="radiobtn-container">
              <RadioBtn value="25%" />
              <RadioBtn value="50%" />
              <RadioBtn value="75%" />
              <RadioBtn value="100%" />
            </div>
          </div>
        </form>
      </div>
      <div className="repaymentRight">
        <div className="repaymentDetails">
          <h4>Summary</h4>
          <div className="repayGridItem">
            <h6>Repaid Principal</h6>
            <p>47.06564940 USDT</p>
          </div>
          <div className="repayGridItem">
            <h6>Repaid Interest</h6>
            <p>0.00000000 USDT</p>
          </div>
          <div className="repayGridItem">
            <h6>Borrowed Amount</h6>
            <p>47.06564940</p>
          </div>
          <div className="repayGridItem">
            <h6>Remaining Amount</h6>
            <p>0.00000000 USDT</p>
          </div>
        </div>
        <div className="repaymentRightBottom">
          <div className="repayRightRow">
            <p className="rowLeft col-coin">Collateral Coin</p>
            <DropDown selected={selected} setSelected={setSelected} />
          </div>
          <div className="repayRightRow">
            <p className="rowLeft">Returned Collateral payment</p>
            <p className="rowRight">0.00290507 BTC</p>
          </div>
          <div className="repayRightRow">
            <p className="rowLeft">LTV after Repayment</p>
            <p className="rowRight">0.00%</p>
          </div>
          <label htmlFor="repay-with-collateral" className="repay-Collateral">
            <input type="checkbox" id="repayCol" />
            <div className="custom-checkbox">
              <img src="./images/tick.svg" alt="" />
            </div>
            <p className="repay-with-collateral">Repay with Collateral</p>
          </label>
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};
export default Repayment;

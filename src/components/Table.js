import Modal from "./Model";
import { useState } from "react";
const Table = () => {
  const [ispopup, setpopup] = useState(false);
  const popuphandler = () => {
    setpopup((state) => !state);
  };
  return (
    <>
      {ispopup && <Modal popuphandler={popuphandler} />}
      <table>
        <thead className="attributes">
          <tr>
            <th>Asset</th>
            <th>Principal amount </th>
            <th className="term">Term</th>
            <th>Collateral</th>
            <th>Liquidation Price</th>
            <th>Repayment Date</th>
            <th>Status</th>
            <th className="viewall">View All</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          <tr>
            <td>
              <div className="flextd">
                <img src="./images/AXS.svg" alt="" />
                <h4>AXS</h4>
              </div>
            </td>
            <td>
              <p>200 USDT</p>
            </td>
            <td>
              <span>30</span>
            </td>
            <td>0.02BTC</td>
            <td>64.87%</td>
            <td>2020-09-12</td>
            <td>Ongoing</td>
            <td>
              <div className="flextd buttons">
                <button onClick={popuphandler}>Repay</button>
                <button className="btn1">Adjust LTV</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flextd">
                <img src="./images/BTC.svg" alt="" />
                <h4>BTC</h4>
              </div>
            </td>
            <td>
              <p>400 USDT</p>
            </td>
            <td>
              <span>60</span>
            </td>
            <td>0.04BTC</td>
            <td>74.92%</td>
            <td>2020-11-08</td>
            <td>Ongoing</td>
            <td>
              <div className="flextd buttons">
                <button onClick={popuphandler}>Repay</button>
                <button className="btn1">Adjust LTV</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;

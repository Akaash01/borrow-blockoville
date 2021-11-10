const TotalContainer = () => {
  return (
    <div className="total-container">
      <div className="total-amt">
        <div className="borrow-amt amt-row ">
          <p className="amt-text">Total Borrow Amt</p>
          <p className="amt-green">$0.00</p>
        </div>
        <div className="coll-amt amt-row ">
          <p className="amt-text">Total Collateral Amt</p>
          <p className="amt-green">$0.00</p>
        </div>
      </div>
      <div className="features">
        <div className="feature-row">
          <img src="./images/exchange.svg" alt="" />
          <p>Exchange</p>
        </div>
        <div className="feature-row">
          <img src="./images/advanced.svg" alt="" />
          <p>Advanced</p>
        </div>
        <div className="feature-row">
          <img src="./images/calculator.svg" alt="" />
          <p>Calculator</p>
        </div>
      </div>
    </div>
  );
};
export default TotalContainer;

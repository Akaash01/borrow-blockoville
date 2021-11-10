import { useState } from "react";
const Navbar = () => {
  const [isactive, setIsactive] = useState(false);
  const onclickNav = () => {
    setIsactive((state) => !state);
  };
  return (
    <nav className="flex">
      <div className="nav-logo flex">
        <img src="./images/logo.svg" id="logo-img" alt="" />
        <div className="balance logo-balance">
          <p className="bal-text f-11px">Balance</p>
          <p className="bal-amount f-11px">€ 0.00</p>
        </div>
      </div>
      <div className="nav-content flex">
        <ul className={`flex ${isactive ? "active" : ""}`}>
          <li className="f-13px">
            <a href="https://github.com/Akaash01/borrow-blockoville">
              Exchange
            </a>
          </li>
          <li className="f-13px">
            <a href="https://github.com/Akaash01/borrow-blockoville">Margin</a>
          </li>

          <li className="f-13px">
            <button>Lending</button>
          </li>
          <li>
            <div className="balance ul-balance">
              <p className="bal-text f-11px">Balance</p>
              <p className="bal-amount f-11px">€0.00</p>
            </div>
          </li>
        </ul>
        <div className="profile flex">
          <img
            src="./images/Navigations.svg"
            className="notifications"
            alt="notifications"
          />
          <div className="user flex">
            <img src="./images/user-img.svg" className="user-img" alt="" />
            <h4 className="user-name f-13px">Iamprotrader</h4>
          </div>
        </div>
        <div className="side-nav">
          <div
            className={`burger-menu ${isactive ? "active" : ""}`}
            onClick={onclickNav}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

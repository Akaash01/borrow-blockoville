import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.navlogo}>
          <img src="./images/logo.svg" id="logo-img" alt="" />
          <div className={classes.balance}>
            <p>Balance</p>
            <p className={classes.bal_amount}>€ 0.00</p>
          </div>
        </div>
        <div className={classes.navcontent}>
          <ul className={classes.navlinks}>
            <li>
              <a href="https://github.com/Abhishek742/Blockoville-Dashboard/deployments/activity_log?environment=github-pages">
                Exchange
              </a>
            </li>
            <li>
              <a href="https://github.com/Abhishek742/Blockoville-Dashboard/deployments/activity_log?environment=github-pages">
                Margin
              </a>
            </li>
            <li>
              <button>Lending</button>
            </li>
          </ul>
          <div className={classes.profile}>
            <img
              src="./images/Navigations.svg"
              className={classes.notifications}
              alt="notifications"
            />
            <div className={classes.user}>
              <img src="./images/user-img.svg" className="user-img" alt="" />
              <h4 className="user-name f-13px">Iamprotrader</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

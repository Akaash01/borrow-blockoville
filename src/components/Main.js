import Table from "./Table";
import TotalContainer from "./TotalContainer";
const Main = () => {
  return (
    <div className="main-component">
      <div className="tabs">
        <h2>Borrow</h2>
        <h2 className="active-tab">My loans</h2>
      </div>
      <div className="table-amount-container">
        <div className="table-con">
          <Table />
        </div>
        <TotalContainer />
      </div>
    </div>
  );
};
export default Main;

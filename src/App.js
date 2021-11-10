import "./App.css";
import PopupContainer from "./components/PopupContainer";
import Repayment from "./components/Repayment";
function App() {
  return (
    <div className="App">
      <PopupContainer title="Repay">
        <Repayment />
      </PopupContainer>
    </div>
  );
}

export default App;

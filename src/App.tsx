import "./App.css";
import { CalcBody } from "./components";
import DisplayProvider from "./store/context/displayContext";

function App() {
  return (
    <div className="App">
      <DisplayProvider>
        <CalcBody />
      </DisplayProvider>
    </div>
  );
}

export default App;

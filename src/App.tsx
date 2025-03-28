import "./App.css";
import { CalcBody } from "./components";
import AppProvider from "./context/displayContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <CalcBody />
      </AppProvider>
    </div>
  );
}

export default App;

import "./App.css";
import CalMenu from "./components/CalcMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Molding from "./components/Pages/molding";
import Hopper from "./components/Pages/hopper";
import { Process } from "./components/Pages/process";
import Regrind from "./components/Pages/regrind";
import Short from "./components/Pages/short";
import Water from "./components/Pages/water";
import Conversion from "./components/Pages/conversions";
import Area from "./components/Pages/area";
function App() {
  return (
    <>
      <Router>
        <CalMenu />
        <div className="CalculatorGrid">
          <Routes>
            <Route path="/" element={<Molding />} />
            <Route path="/molding" element={<Molding />} />
            <Route path="/hopper" element={<Hopper />} />
            <Route path="/short" element={<Short />} />
            <Route path="/regrind" element={<Regrind />} />
            <Route path="/water" element={<Water />} />
            <Route path="/process" element={<Process />} />
            <Route exact to path="/conversions" element={<Conversion />}>
              <Route path="area" element={<Area />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

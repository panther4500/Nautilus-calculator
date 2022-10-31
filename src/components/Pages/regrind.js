import React, { useState } from "react";
import "./calculators.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Regrind() {
  //state
  const [screwdiameter, SetScrewdiameter] = useState(0);
  const [shotweight, SetShotweight] = useState(0);
  const [density, SetDensity] = useState(0);
  const [shotsizemm, SetShotsizemm] = useState(0);
  const [shotsizecm, SetShotsizecm] = useState(0);
  const [shotsizein, SetShotsizein] = useState(0);

  let reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Regrind Calculations</h1>
      <div className="container-regrind">
        <h4 classname="iohead">Enter Part and Runner Specifications</h4>
        <form>
          <div>
            <label>Enter single part Weight</label>
            <input
              value={screwdiameter}
              onChange={(e) => SetScrewdiameter(e.target.value)}
            />
          </div>
          <div>
            <label>Number of Cavities</label>
            <input
              value={shotweight}
              onChange={(e) => SetShotweight(e.target.value)}
            />
          </div>
          <div>
            <label>Total Weight of all Cavities</label>
            <input
              value={density}
              onChange={(e) => SetDensity(e.target.value)}
            />
          </div>
          {/* Second Row */}
          <div>
            <label>Enter single runner Weight</label>
            <input
              value={screwdiameter}
              onChange={(e) => SetScrewdiameter(e.target.value)}
            />
          </div>

          <div>
            <label>Number of Runners</label>
            <input
              value={shotweight}
              onChange={(e) => SetShotweight(e.target.value)}
            />
          </div>

          <div>
            <label>Total Weight of all Runners</label>
            <input
              value={density}
              onChange={(e) => SetDensity(e.target.value)}
            />
          </div>
          <div>
            <p>Total Shot Weight: {shotsizemm} </p>
            <p>Part Weight: {shotsizecm} %</p>
            <p>Runner Weight {shotsizein} %</p>
          </div>

          <h4 classname="iohead">Custom</h4>

          <div>
            <label>Enter Pass #(p)</label>
            <input
              value={shotweight}
              onChange={(e) => SetShotweight(e.target.value)}
            />
          </div>
          <div>
            <label>Enter Generation</label>
            <input
              value={shotweight}
              onChange={(e) => SetShotweight(e.target.value)}
            />
          </div>

          <div>
            <p>In the part, Amount of {} generation regrind in {} number pass is {}</p>
          </div>
          <button className="btn btn-outline" onClick={reload}>
            Reset
          </button>
        </form>
      </div>
      <div className="container-regrind">
      <Table striped bordered='true'>
                            <thead>
                                <tr>
                                    <th>Part</th>
                                    <th colSpan={5}>Pass</th>
                                </tr>
                                <tr>
                                    
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Virgin</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                            
                                </tr>
                                <tr>
                                    <td>1-Gen</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                                    <td>{}</td>
                            
                                </tr>
                                
                                

                                
                                
                            </tbody>
                        </Table>
      </div>
    </div>
  );
}

export default Regrind;

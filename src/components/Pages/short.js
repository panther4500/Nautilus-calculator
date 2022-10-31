// import React from 'react';
// import "./calculators.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export const Short =()=>{
//     return(
//         <div>
//         <Container>
//             <h1 className='calculator-head'>Shot Size Estimation</h1>
//             <Row>
//             <Col className='input-container'>
//                 <div className='form'>
//                 <form>
      
//                     <label>Screw Diameter(mm)</label>
                        
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Shot Weight(gms)</Form.Label>
//                         <Form.Control type="number"  />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Material Density(gm/cm^3)</Form.Label>
//                         <Form.Control type="number"  />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Estimated Shot Size(mm)</Form.Label>
//                         <Form.Control type="number" disabled={true}  />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Estimated Shot Size(cm)</Form.Label>
//                         <Form.Control type="number" disabled={true}  />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Estimated Shot Size(inches)</Form.Label>
//                         <Form.Control type="number" disabled={true}  />
//                     </Form.Group>
//                     {/* <Button variant="primary" type="submit">
//                         Calculate
//                     </Button> */}
//         </Form>
//         </div>
//             </Col>

//             <Col className='output-container'>
//                 <MDBTable bordered classname='table'>
//                     <MDBTableHead>
//                         <tr>
//                         <th scope='col'>Material</th>
//                         <th scope='col'>Melt Density</th>
                        
//                         </tr>
//                     </MDBTableHead>
//                     <MDBTableBody>
                        
//                     </MDBTableBody>
//                     </MDBTable>

                
//             </Col>
//             </Row>  
//         </Container>
            
//         </div>
//     )
// }

import React,{useState} from 'react';
import "./calculators.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


function Short(){

    //state
    const [screwdiameter, SetScrewdiameter]= useState(0);
    const [shotweight, SetShotweight]= useState(0);
    const [density, SetDensity]= useState(0);
    const [shotsizemm, SetShotsizemm]= useState(0);
    const [shotsizecm, SetShotsizecm]= useState(0);
    const [shotsizein, SetShotsizein]= useState(0);
    
    
    //hopper calculations with unit conversions
    let calcHopper=(event)=>{
        event.preventDefault();  //prevent submitting

        if(density===0 || screwdiameter===0 ){
            alert('Please enter Density/Diameter');
        }else{
            let shotsizemm= ((shotweight *1000)/(0.785 * density * screwdiameter * screwdiameter));
            SetShotsizemm(shotsizemm.toFixed(2));

            let shotsizecm= ((shotweight *100)/(0.785 * density * screwdiameter * screwdiameter));
            SetShotsizecm(shotsizecm.toFixed(2));

            let shotsizein= ((shotweight *39.4)/(0.785 * density * screwdiameter * screwdiameter));
            SetShotsizein(shotsizein.toFixed(2));
        }


    }

    let reload=()=>{
        window.location.reload();
    }

    return(
        <div>
            <h1 className='calculator-head'>Shot Size Estimation</h1>
            <Container>
                <Row>
                    <Col className='input-container'>    
                        <h4 classname='iohead'>INPUT</h4>
                        <form onSubmit={calcHopper}>
                            <div>
                                <label>Screw Diameter (mm)</label>
                                <input value={screwdiameter} onChange={(e)=>SetScrewdiameter(e.target.value)}/>
                            </div>
                            <div>
                                <label>Shot Weight (gms)</label>
                                <input value={shotweight} onChange={(e)=>SetShotweight(e.target.value)}/>
                            </div>
                            <div>
                                <label>Material Density (gms/cm^3)</label>
                                <input value={density} onChange={(e)=>SetDensity(e.target.value)}/>
                            </div>
                            
                            <button className='btn' type='submit'>Submit</button>
                            <button className='btn btn-outline' onClick={reload}>Reset</button>
                            

                            <h4 classname='iohead'>OUTPUT</h4>
                             <div>
                                <p>Estimated Shot Size (mm): {shotsizemm} </p>
                                <p>Estimated Shot Size (cm): {shotsizecm} </p>
                                <p>Estimated Shot Size (inches): {shotsizein} </p>
                            </div>
                            
                        </form>
                    </Col>
                    <Col className='output-container'>
                        <Table striped bordered='true'>
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Melt Density</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PE --Any</td>
                                    <td>0.71</td>
                            
                                </tr>
                                
                                <tr>
                                    <td>PP</td>
                                    <td>0.73</td>
                            
                                </tr>

                                <tr>
                                    <td>PVC--</td>
                                    <td>1.02</td>
                            
                                </tr>

                                <tr>
                                    <td>PVC--</td>
                                    <td>1.12</td>
                                </tr>
                                <tr>
                                    <td>PS</td>
                                    <td>0.91</td>
                                </tr>
                                <tr>
                                    <td>ABS</td>
                                    <td>0.88</td>
                                </tr>
                                <tr>
                                    <td>SAN</td>
                                    <td>0.88</td>
                                </tr>
                                <tr>
                                    <td>PA</td>
                                    <td>0.91</td>
                                </tr>
                                <tr>
                                    <td>PC</td>
                                    <td>0.97</td>
                                </tr>
                                <tr>
                                    <td>PMMA</td>
                                    <td>0.94</td>
                                </tr>
                                <tr>
                                    <td>POM</td>
                                    <td>1.15</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className='note'>
                            <h3>NOTE</h3>
                            <p>
                                <ol type='number'>
                                    <li>This calculation is only an estimation</li>
                                    <li>Knowledge about melt desnity is very important fo this calculation.</li>
                                    <li>When using filters with the above materials melt density will change.</li>
                                    <li>Extreme caution should be used.</li>
                                </ol>
                            </p>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Short;
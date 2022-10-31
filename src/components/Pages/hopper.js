import React,{useState} from 'react';
import "./calculators.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./calculators.css";

function Hopper(){

    //state
    const [drymin, SetDrymin]= useState(0);
    const [drymax, SetDrymax]= useState(0);
    const [cycletime, SetCycletime]= useState(0);
    const [shotweight, SetShotweight]= useState(0);
    const [minsizekg, SetMinsizekg]= useState(0);
    const [minsizelbs, SetMinsizelbs]= useState(0);
    const [maxsizekg, SetMaxsizekg]= useState(0);
    const [maxsizelbs, SetMaxsizelbs]= useState(0);
    
    //hopper calculations with unit conversions
    let calcHopper=(event)=>{
        event.preventDefault();  //prevent submitting

        if(cycletime===0){
            alert('Please enter Cycle Time');
        }else{
            let minsizekg= ((drymin * shotweight * 3.6)/cycletime);
            SetMinsizekg(minsizekg.toFixed(2));

            let minsizelbs= ((drymin * shotweight * 3.6 * 2.205)/cycletime);
            SetMinsizelbs(minsizelbs.toFixed(2));

            let maxsizekg= ((drymax * shotweight * 3.6)/cycletime);
            SetMaxsizekg(maxsizekg.toFixed(2));

            let maxsizelbs= ((drymax * shotweight * 3.6 * 2.205)/cycletime);
            SetMaxsizelbs(maxsizelbs.toFixed(2));
        }


    }

    let reload=()=>{
        window.location.reload();
    }

    return(
        <div>
            <h1 className='calculator-head'>Hopper Size Calculator</h1>
            <Container>
                <Row>
                    <Col className='input-container'>
                        <h4 classname='iohead'>INPUT</h4>
                        <form onSubmit={calcHopper}>
                            <div>
                                <label>Drying Time Min (hrs)</label>
                                <input value={drymin} onChange={(e)=>SetDrymin(e.target.value)}/>
                            </div>
                            <div>
                                <label>Drying Time Max (hrs)</label>
                                <input value={drymax} onChange={(e)=>SetDrymax(e.target.value)}/>
                            </div>
                            <div>
                                <label>Cycle Time (sec)</label>
                                <input value={cycletime} onChange={(e)=>SetCycletime(e.target.value)}/>
                            </div>
                            <div>
                                <label>Shot Weight (gms)</label>
                                <input value={shotweight} onChange={(e)=>SetShotweight(e.target.value)}/>
                            </div>
                            <button className='btn' type='submit'>Submit</button>
                            <button className='btn btn-outline' onClick={reload}>Reset</button>
                        </form>
                    </Col>
                    <Col className='output-container'>
                        <h4 classname='iohead'>OUTPUT</h4>
                        <div>
                            <p>Min Dryer Size: {minsizekg} kg   {minsizelbs} lbs</p>
                            <p>Max Dryer Size: {maxsizekg} kg   {maxsizelbs} lbs</p>
                        </div>
                        </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Hopper;
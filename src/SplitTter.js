import './SplitTter.scss';
import { useState, useEffect } from 'react';

function SplitTter() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipByPeople, setTipByPeople] = useState(0);
  const [totalByPeople, setTotalByPeople] = useState(0);

  useEffect(() => {
    
    const tipPeople = (bill*tip)/people;
    const totalTipPeople = tipPeople.toFixed(2)
    
    if(customTip !== 0) {
      const customTipConvert = customTip/100;
      setTip(customTipConvert);
    }
    
    const operationTotalByPeople = ((bill * tip) + parseFloat(bill)) / people;
    var resultTotal = operationTotalByPeople.toFixed(2);
    if(isNaN(resultTotal) || isNaN(totalTipPeople) || resultTotal === "Infinity" || totalTipPeople === "Infinity") {
      setTotalByPeople(0);
      setTipByPeople(0)
    } else {
      setTotalByPeople(resultTotal);
      setTipByPeople(totalTipPeople);
    }

  }, [bill, people, customTip, tip])

  const handleTipSelect = (e) => {
    setTip(e)
    setCustomTip(0)
  }

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setCustomTip(0);
    setPeople(0);
    setTipByPeople(0);
    setTotalByPeople(0);
  }

  return (
    <div className="wp-full">

      <div>
        <h1 className="title">Spli <span>TTer</span></h1>

        <div className="formCalculate">
          <div className="wp-contentT" >
            <h3>Bill</h3>
            <div className="form-input pb-2">
              <div className="dollar icon-dollar"></div>
              <input className="input-dollar" type="number" value={bill === 0 ? "" : bill} placeholder="0" onChange={e => setBill(e.target.value)}/>
            </div>

            <h3>Select Tip %</h3>
            <div className="wrap-btns pb-2">
              <button className={tip === .05 ? 'select' : ''} onClick={() => handleTipSelect(.05)}>5%</button>
              <button className={tip === .10 ? 'select' : ''} onClick={() => handleTipSelect(.10)}>10%</button>
              <button className={tip === .15 ? 'select' : ''} onClick={() => handleTipSelect(.15)}>15%</button>
              <button className={tip === .25 ? 'select' : ''} onClick={() => handleTipSelect(.25)}>25%</button>
              <button className={tip === .50 ? 'select' : ''} onClick={() => handleTipSelect(.50)}>50%</button>
              <input type="number" value={customTip === 0 ? "Custom" : customTip} placeholder="Custom" onChange={e => setCustomTip(e.target.value)}/>
            </div>

            <div className={people <= 0 ? "input-people" : ""}>
              <h3>Number of People <span id="alert-zero" className={people <= 0 ? "" : "hidden"}>Can't be zero</span></h3>
              <div className="form-input pb-2 pb-sm-1">
                <div className="dollar icon-person"></div>
                <input type="number" value={people === 0 ? "" : people} placeholder="0" onChange={e => setPeople(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="wp-total">
            <div className="grid-total">
              <h3 id="title-tip">Tip Amount <span>/ person</span></h3>
              <input id="input-tip" className="input-total" type="text" value={tipByPeople === 0 ? "$0.00" : "$" + tipByPeople} disabled/>

              <h3 id="title-person">Total <span>/ person</span></h3>
              <input id="input-person" className="input-total" type="text" value={totalByPeople === 0 ? "$0.00" : "$" + totalByPeople} disabled/>

              <div id="input-submit">
                <input className="inputSubmit" type="reset" value="Reset" onClick={() =>  handleReset()} disabled={bill <= 0 ? true : false}/>
              </div>
            </div>
          </div>  

        </div>
      </div>
    </div>
  );
}

export default SplitTter;

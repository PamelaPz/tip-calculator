import './SplitTter.scss';
import { useState, useEffect } from 'react';

function SplitTter() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipByPeople, setTipByPeople] = useState(0);
  const [totalByPeople, setTotalByPeople] = useState(0);

  useEffect(() => {
    
    const tipPeople = (bill*tip)/people;
    const totalTipPeople = tipPeople.toFixed(2)
    setTipByPeople(totalTipPeople);

    if(customTip !== 0) {
      const customTipConvert = customTip/100;
      setTip(customTipConvert);
    }

    const operationTotalByPeople = ((bill * tip) + parseFloat(bill)) / people;
    var resultTotal = operationTotalByPeople.toFixed(2);
    setTotalByPeople(resultTotal);

  }, [bill, people, customTip, tip])


  const handleReset = () => {
    setBill(0);
    setTip(0);
    setCustomTip(0);
    setPeople(1);
    setTipByPeople(0);
    setTotalByPeople(0);
  }

  return (
    <div className="wp-full">

      <h1 className="title">Spli <span>TTer</span></h1>

      <div className="formCalculate">
        <div className="" >
          <h3>Bill</h3>
          <input type="number" name="bill" value={bill} onChange={e => setBill(e.target.value)}/>
          <br /><br />
            <h3>Select Tip %</h3>
              <button onClick={() => setTip(.05)}>5%</button>
              <button onClick={() => setTip(.10)}>10%</button>
              <button onClick={() => setTip(.15)}>15%</button>
              <button onClick={() => setTip(.25)}>25%</button>
              <button onClick={() => setTip(.50)}>50%</button>
              <input type="number" value={customTip} onChange={e => setCustomTip(e.target.value)}/>
          <br />

          <h3>Number of People</h3>
          <input type="number" placeholder="5" value={people} onChange={e => setPeople(e.target.value)}/>
        </div>

        <div className="">
          <p>Tip Amount
          / person</p>
          <input type="number" placeholder="$0.00" value={tipByPeople} style={{fontSize: 30}} disabled/>

          <p>Total
          / person</p>
          <input type="number" placeholder="$0.00" value={totalByPeople} style={{fontSize: 30}} disabled/>
          <br /><br />

          <input type="reset" value="Reset" onClick={() =>  handleReset()}/>
        </div>  

      </div>
    </div>
  );
}

export default SplitTter;
